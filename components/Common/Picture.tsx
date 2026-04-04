import Image from "next/image"

export function Picture() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative flex items-center justify-center w-[380px] h-[380px]">
                
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 animate-spin [animation-duration:3s]" />

                
                <div className="absolute inset-[4px] rounded-full bg-white dark:bg-gray-900" />

                
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 blur-xl opacity-50 animate-pulse" />

                
                <Image
                    src="/jiji.png"
                    alt="Coding Environment"
                    width={5000}
                    height={5000}
                    className="relative z-10 w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
            </div>
        </div>
    )
}