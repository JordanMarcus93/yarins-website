"use server"

import { signOut } from "@/auth"

export const logout = async () => {
    // Can add server stuff here
    await signOut();
}