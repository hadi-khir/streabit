"use client";

import { SessionProvider } from "next-auth/react";
import LoginButton from "./LoginButton";

export default function Login() {
    return (
        <SessionProvider>
            <LoginButton />
        </SessionProvider>
    )
}