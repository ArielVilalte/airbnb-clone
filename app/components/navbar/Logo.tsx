'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

const Logo = () => {
    let router = useRouter();
    return (
        <div className="mr-3">
            <Image 
                alt="Logo"
                src='/images/logo.png'
                className="hidden md:block cursor-pointer"
                height='100'
                width='100'
            />
        </div>
    )
}

export default Logo;