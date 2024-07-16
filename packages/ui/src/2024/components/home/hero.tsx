import Jumbotron from "./jumbotron";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="flex flex-col   md:flex-row bg-white   h-[90vh]">
      <section className="md:w-1/2 w-full">
        <Jumbotron />
      </section>
      <section
        className="w-full md:w-1/2 h-[90vh] bg-no-repeat bg-cover hidden md:block"
        style={{
          backgroundImage: "url(assets/images/pyconug-pallet.webp)",
        }}
      >
        {/* <div className=" grid place-items-center h-[90vh]  md:pr-16  lg:pr-0">
        <div className="relative">
          <Image
            width={500}
            height={350}
            alt=""
            src={"/assets/images/img2.jpg"}
          />
        </div>
      </div> */}
      </section>
    </main>
  );
}
