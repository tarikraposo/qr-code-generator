"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import logo from '../../assets/logo-qr-generator.svg'
import { Button } from "@/components/ui/button"

export function Search(){
    const router = useRouter();

    return (
        <div className="search-container m-auto w-full flex items-center justify-center flex-col h-full gap-8">
           <Image src={logo} alt="QR Code Generator" width={200} height={200}/>
            <div className="input-control flex p-4 gap-6px">
                <Input type="button" />
                <Button className="bg-[#3662E3]" onClick={() => router.push('/qrcode')}>QR code</Button>
            </div>
        </div>
    )
}