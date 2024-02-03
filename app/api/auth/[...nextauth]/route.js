import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
 
var user;
const handler = NextAuth({
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: {  label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const response = await fetch("http://localhost:8080/api/auth/authenticate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credentials)
                });


            
                 if (response.ok) {
                    
                    // If the response is successful (status code 200-299), parse the JSON body
                    user = await response.json();
                    return user;
                } else {
                    // If the response is not successful, return null to reject the credentials
                    return null;
                }
            }
            
        })
    ],
    callbacks: {
        async session({session}) {
            session.token = user.token;
            return session; 
        }

    },
    pages: {
        signIn: '/login',
        error: '/login',
        newUser: null // If you want to redirect users to a different page after sign up
      }
})

export {handler as GET, handler as POST, handler as PUT, handler as DELETE};