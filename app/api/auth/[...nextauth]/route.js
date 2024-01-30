import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
 
const handler = NextAuth({
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: {  label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                if (credentials.username === 'admin' && credentials.password === 'admin') {
                    // Any object returned will be saved in `user` property of the JWT
                    
                    return Promise.resolve({ username: 'admin' })
                  } else {
                    // If you return null or false, the credentials will be rejected
                    return Promise.resolve(null)
                  }
            }
        })
    ],
    pages: {
        signIn: '/login',
        error: '/login',
        newUser: null // If you want to redirect users to a different page after sign up
      }
})

export {handler as GET, handler as POST, handler as PUT, handler as DELETE};