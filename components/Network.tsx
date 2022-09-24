import Image from 'next/image';
import { INetwork } from "../data";

interface IProps {
    network: INetwork;
}

export default function Network({ network }: IProps) {
    return <a href={network.link} className="cursor-pointer flex flex-col items-center" rel="noreferrer" target="_blank">
        <Image src={network.logo} width={80} height={80} alt={network.label}/>
        <div className="font-medium text-slate-700 mt-3">{network.label}</div>
    </a>
}