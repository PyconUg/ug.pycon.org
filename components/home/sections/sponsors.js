import Link from "next/link";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="py-[120px] bg-[#f6f7fd]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-60 lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
            Our Sponsors
          </h2>
          <p className="text-base p-4 font-medium">
            Join our growing list of sponsors who are making PyCon Uganda happen
          </p>
          <div className="">
            <Image
              src="/assets/images/sponsors/psf-logo.png"
              alt="PSF Logo"
              width={800}
              height={304}
            />
            {/* <Image
                            src="/assets/images/sponsors/tiv-dark-logo.png"
                            alt="TIV Logo"
                            width={2000}
                            height={824}
                        /> */}
          </div>
          <div className="py-12">
            <Link
              className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
              href={"/sponsors"}
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
