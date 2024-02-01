"use client";
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
import useranimation from "@/public/assets/lottieanimation/user.json"
import Lottie from "lottie-react";

const Nav = () => {

    const { data: session } = useSession();
    const [inlogipage, setinlogipage] = useState(false)

    const [toggleDropdown, settoggleDropdown] = useState(false);

    const router = useRouter();

    const handleLogin = () => {
        setinlogipage(true);
        router.push('/login')
    };


    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center" onClick={() => { inlogipage(false) }}>
                <Image
                    src="/assets/images/PasswordManagerLogo.svg"
                    alt="PasswordManager logo"
                    width={60}
                    height={60}
                    className="Object-contain"
                />
                <p className="logo_text">Password Manager</p>
            </Link>
            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/SavePassword"
                            className="black_btn">
                            Add Passwords
                        </Link>

                        <button type="button" onClick={() => {
                            settoggleDropdown(false);
                            setinlogipage(false);
                            signOut({ redirect: true, callbackUrl: "/" });
                        }} className="outline_btn" >
                            Log Out
                        </button>
                        <Link href="/profile">

                            <Lottie
                                animationData={useranimation}
                                autoplay={true}
                                style={{ width: 60, height: 60 }} // Adjust size as needed
                            />

                        </Link>
                    </div>
                ) : (
                    inlogipage ? (
                        <></>
                    ) : (
                        <button
                            type="button"
                            onClick={() => handleLogin()}
                            className="black_btn"
                        >
                            Log IN
                        </button>
                    )


                )}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Lottie
                            animationData={useranimation}
                            autoplay={true}
                            style={{ width: 60, height: 60 }} // Adjust size as needed

                            onClick={() => { settoggleDropdown((prev) => !prev), setinlogipage(false) }} />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => settoggleDropdown(false)} >
                                    My Profile
                                </Link>
                                <Link
                                    href="/SavePassword"
                                    className="dropdown_link"
                                    onClick={() => settoggleDropdown(false)} >
                                    Add Password
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        settoggleDropdown(false);
                                        setinlogipage(false);
                                        signOut({ redirect: true, callbackUrl: "/" });
                                    }}
                                    className="mt-5 w-full black_btn">
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    inlogipage ? (
                        <></>
                    ) : (
                        <button
                            type="button"
                            onClick={() => handleLogin()}
                            className="black_btn"
                        >
                            Log IN
                        </button>
                    )

                )}
            </div>
        </nav>
    )
}

export default Nav