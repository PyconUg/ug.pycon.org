import Link from "next/link";
import Image from "next/image";

export default function SponsorsPage() {
  return (
    <>
      <section className="flex bg-cyan-900 text-zinc-300 justify-center">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Sponsors
            </h1>
            <p className="mt-4 sm:text-xl mx-5">
              Thank you! 🎉 Your sponsorship makes PyCon Uganda affordable and
              accessible to a wide and diverse audience.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:mx-28 mx-8 min-h-[55vh]">
        <p className="text-4xl font-bold my-8 text-gray-500">Expo Sponsors</p>

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
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
          <Link href="https://chaoss.community/" target="_blank">
            <Image
              src="/2024/sponsors/CHAOSS AFRICA LOGO.png"
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div className="py-12 flex justify-center">
          <Link
            className="uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md font-bold "
            href={"/2024/sponsors/why-sponsor"}
          >
            Become a Sponsor
          </Link>
        </div>
      </section>
    </>
  );
}
