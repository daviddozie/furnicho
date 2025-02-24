import Image from "next/image"
import { Button } from "../ui/button"

export const Hero = () => {
    return (
        <>
            <div className="px-[80px]">
                <div className="relative h-screen rounded-[30px]">
                    <Image
                        src="/Hero.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="z-0 rounded-[30px]"
                    />
                    <div className="absolute inset-0 bg-black/60 lg:px-[80px] md:px-[40px] px-[16px] py-[70px] rounded-[30px]">
                        <h2 className="font-montserrat font-bold text-[40px] text-[#ECDFCC] max-w-[60%]">
                            Furnicho Modern Furniture Designs
                        </h2>
                        <p className="font-lato py-[40px] font-medium text-[20px] text-[#FCFCFCE5] max-w-[50%]">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                        <Button>
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}