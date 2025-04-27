"use client";

import { useSession } from "next-auth/react";
import { handleSignIn, handleSignOut } from "../lib/auth";

export default function LoginButton() {
    const { data: session } = useSession();

    return session ? (
        <>
            <h2 className="text-lg font-medium text-gray-700">
                Welcome, {session?.user?.name}!
            </h2>
            <button
                onClick={handleSignOut}
                className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
            >
                Sign Out
            </button>
        </>
    ) : (
        <button
            onClick={handleSignIn}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
            Sign in with Google
        </button>
    );
}
