import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">

            <Image src={"/images/logo.jpg"} width={40} height={40} alt="logo-steve-bang"
                className="rounded-full object-cover border-4 border-transparent"
            />
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
                SteveBang
            </span>
        </div>
    );
}