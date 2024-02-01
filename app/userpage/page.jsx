"use client"
import { useSession,signOut } from 'next-auth/react'
import withAuth from '@/utils/withAuth'
const page = () => {
    const { data: session } = useSession()
    console.log(session);
    return (
      <div>
        <h1>Welcome, {session?.user?.name}</h1>
        <button  className="black_btn" onClick={() => signOut({redirect: true, callbackUrl: "/"})}>Sign Out</button>
      </div>
    )
}
export default withAuth(page)