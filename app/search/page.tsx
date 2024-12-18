"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import logo from '../../assets/logo-qr-generator.svg'
import { Button } from "@/components/ui/button"

export function Search(){
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const [link, setLink] = useState('');
    const router = useRouter();

    const handleGenerateQr = () => {
        router.push(`/qrcode?link=${encodeURIComponent(link)}`);
    }

    return (
        <div className="container m-auto w-full flex items-center justify-center flex-col h-full gap-8">
           <Image src={logo} alt="QR Code Generator" width={200} height={200}/>
            <div className="input-control flex p-4 gap-6px">
                <Input className="h-100 color-white" 
                ref={inputRef}
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Digite o link aqui"
                />
                <Button className="bg-[#3662E3]" onClick={handleGenerateQr}>QR code</Button>
            </div>
        </div>
    )
}