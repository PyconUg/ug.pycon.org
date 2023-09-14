"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function AttendeeDetails({ params }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  return (
    <div className="my-16">
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <Image
            height={300}
            width={300}
            className="object-cover object-top w-full"
            src="/assets/images/pyconug-pallet.webp"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <Image
            height={300}
            width={300}
            className="object-cover object-center h-32"
            src="/assets/images/avatar.png"
            alt="Woman looking front"
          />
        </div>
        <div className="text-center py-4">
          <h2 className="font-semibold capitalize">
            {name?.replace("-", " ")}
          </h2>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>
    </div>
  );
}
