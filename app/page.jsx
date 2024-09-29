import Image from "next/image";
import homeBg from "@/public/hero-img.png";
import logo from "@/public/logo-white.png";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className=" relative">
            <Image src={homeBg} alt="home background" className=" w-full" />
            <div
              className=" absolute w-full h-full bg-black bg-opacity-50
            top-0 left-0 flex justify-center items-center"
            >
              <Image
                src={logo}
                alt="josh esther olive logo"
                className=" w-[150px]"
              />
            </div>
          </div>
          <div className=" flex justify-center gap-10 mt-10 px-5">
            <Link href={"/food"}>
              <Button name={'Food'} variant={'w-[150px] py-2'}/>
            </Link>
            <Link href={"/drinks"}>
              <Button name={'Drink'} variant={'w-[150px] py-2'}/>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
