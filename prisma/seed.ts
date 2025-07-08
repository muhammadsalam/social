import { prisma } from "./prisma-client";

async function clear() {
    await prisma.user.deleteMany({});
}

async function generate() {
    await prisma.user.create({
        data: {
            nickName: 'admin',
            email: 'admin@admin',
            password: 'admin',
            avatar: 'https://i.postimg.cc/XqjcjmVR/avatar.webp',
        }
    })
}

async function main() {
    try {
        await clear();
        await generate();
    } catch (e) {
        console.error(e)
    }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
});