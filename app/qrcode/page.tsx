"use client"
import { useRouter } from "next/navigation"

export default function Qrcode() {
    const router = useRouter();

    return (
        <div className="search-container m-auto w-full flex items-center justify-center flex-col h-full gap-8">
            <h1>QR Code Page</h1>
            <button onClick={() => router.push('/')}>Go Back</button>
        </div>
    )
}