import { QUICKET_LINK } from "@/2023/utils/constants";
import Link from "next/link";

export default function Tickets() {
  return (
    <section className="py-[60px] bg-[#f6f7fd]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-60 lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
            Buy Tickets
          </h2>
          <p className="text-base p-0 font-medium">
            Tickets can be bought by following the link below.
          </p>
          <div className="py-12">
            <Link
             className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
             href={QUICKET_LINK}
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
