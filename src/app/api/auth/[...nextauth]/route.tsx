import NextAuth from "next-auth";

// import Github from "next-auth/providers/github";
import LINE from "next-auth/providers/line";

const handler = NextAuth({
    providers: [
        // Github({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string, 
        // }),
        LINE({
            clientId: process.env.LINE_CLIENT_ID as string,
            clientSecret: process.env.LINE_CLIENT_SECRET as string,
        }),
    ]
})

export { handler as GET, handler as POST }