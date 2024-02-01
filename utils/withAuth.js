

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function withAuth(Component) {
  return function WithAuth(props) {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
      if (status === 'loading') return // Do nothing while session is loading
      if (!session) router.push('/login') // Redirect to login if no session
    }, [session, status])

    // If user is authenticated, render the protected component
    return <Component {...props} />
  }
}
