import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/logo.jpg"
        width={40}
        height={40}
        alt="logo-steve-bang"
        className="
          rounded-full object-cover
          ring-2 ring-purple-200 dark:ring-purple-500/40
          transition-all duration-300
        "
      />
      <span className="
        text-2xl font-bold
        text-transparent bg-clip-text
        bg-gradient-to-r from-purple-600 to-blue-500
        dark:from-purple-400 dark:to-blue-400
      ">
        SteveBang
      </span>
    </div>
  );
}