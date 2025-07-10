export type GitHubEmail = {
    email: string;
    primary: boolean;
    verified: boolean;
    visibility: 'public' | 'private' | null;
};

export type GithubUser = {
    id: number;
    login: string;
    avatar_url: string;
    name: string | null;
    email: string | null;
    company: string | null;
    bio: string | null;
    location: string | null;
};

export type JWTPayload = {
    githubId: number,
    login: string,
    email: string
}