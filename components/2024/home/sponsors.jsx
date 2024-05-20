import Link from "next/link";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="py-[120px] bg-[#f6f7fd]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-[50vh] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
            Our Sponsors
          </h2>
          <p className="text-base p-4 font-medium">
            Join our growing list of sponsors who are making PyCon Uganda
            happen.
          </p>
          <p className="text-xl font-bold p-4">Expo Sponsors</p>

          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 my-8">
            <Link href="https://github.com" target="_blank">
              <Image src="/2024/sponsors/GitHub.png" width={500} height={500} />
            </Link>
            <Link href="https://www.jetbrains.com" target="_blank">
              <Image
                src="https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="py-12">
            <Link
              className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
              href={"/2024/sponsors/why-sponsor"}
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
