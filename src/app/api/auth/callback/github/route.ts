import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { GitHubEmail, GithubUser, JWTPayload } from "./types";
import { prisma } from "@prisma/prisma-client";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get('code');

    if (!code) {
        return NextResponse.redirect('/');
    }

    const githubData = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: process.env.NEXT_PUBLIC_GITHUB_ID,
        client_secret: process.env.GITHUB_SECRET,
        code
    }, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const token = githubData.data.access_token;

    if (!token) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    const githubUserData = await axios.get<GithubUser>('https://api.github.com/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const githubUser = githubUserData.data;

    const emailData = await axios.get<GitHubEmail[]>('https://api.github.com/user/emails', {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    const primaryEmail = emailData.data.find((e) => e.primary && e.verified)?.email

    const user = await prisma.user.upsert({
        where: { githubId: githubUser.id },
        update: {},
        create: {
            githubId: githubUser.id,
            login: githubUser.login,
            email: githubUser.email || primaryEmail!,
            avatar: githubUser.avatar_url,
            name: githubUser.name,
            company: githubUser.company,
            bio: githubUser.bio,
            location: githubUser.location,
        }
    })

    const jwtSecret = process.env.JWT_SECRET!;
    const jwtPayload: JWTPayload = {
        githubId: user.id,
        login: user.login,
        email: user.email
    };

    const jwtToken = jwt.sign(jwtPayload, jwtSecret, { expiresIn: '7d' })

    const response = NextResponse.redirect(new URL('/', req.url));
    response.cookies.set('token', jwtToken, { httpOnly: true, path: '/', sameSite: 'lax' });

    return response;
}