import Image from 'next/image';

export default function Logo() {
    return <div>
        <Image src="/logo.png" width={200} height={40} alt="logo"/>
    </div>
}