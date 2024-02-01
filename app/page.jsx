"use client"
import { signOut, useSession } from 'next-auth/react';
import Feed from '@/components/Feed';
import { useEffect } from 'react';

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      signOut({ redirect: true, callbackUrl: '/' });
    }
  }, [session]);

  return (
    <section className="w-full flex-center flex-col">
      {!session?.user && (
        <div>
          <h1 className="head_text text-center">
            Save & Manage
            <br className="max-md:hidden"/>
            <span className="orange_gradient text_center">Your Passwords</span>
          </h1>
          <p className="desc text-center">
            Password Manager is custom made Application to save and manage the Passwords 
          </p>
          <Feed/>
        </div>
      )}
    </section>
  );
}
