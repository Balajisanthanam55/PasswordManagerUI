"use client"
import { useSession } from 'next-auth/react'
import withAuth from '@/utils/withAuth'
const page = () => {
    const { data: session } = useSession()
    console.log(session);
    return (
      <div>
        <h1>Welcome, {session?.user?.username}</h1>
        <button  className="black_btn" onClick={() => signOut()}>Sign Out</button>
      </div>
    )
}
export default withAuth(page)