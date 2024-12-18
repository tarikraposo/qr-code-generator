"use client"
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation"
import { QRCodeSVG } from "qrcode.react"
import { ArrowDownToLine, Share2 } from "lucide-react";
import logo from '../../assets/logo-qr-generator.svg'
import Image from "next/image";

export default function Qrcode() {
    const router = useRouter();
    const params = useSearchParams();
    const link = params.get('link');

    return (
        <div className="container m-auto w-full flex items-center justify-center flex-col h-full gap-8 relative">
            <div className="qr-code-control flex p-4 space-y-16 flex-col items-center">
            <Image src={logo} alt="QR Code Generator" width={100} height={100} className="absolute top-10 left-10"/>
            {link? (
                <QRCodeSVG value={link} size={256} className="qr-code-svg"/>
            ):(
                <p>No link provided</p>
            )}
            <div className="flex gap-16">
                <Button className="bg-[#3662E3] button" onClick={() => router.back()}>Download<ArrowDownToLine /></Button>
                <Button className="bg-[#3662E3] button" onClick={() => router.back()}>Share<Share2 /></Button>
            </div>
            </div>
        </div>
    )
}

