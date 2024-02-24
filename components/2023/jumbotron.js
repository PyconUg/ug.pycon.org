import { QUICKET_LINK } from "@/utils/constants";
import Link from "next/link";

export default function Jumbotron() {
  return (
    <div className="grid place-items-center place-content-center">
      <div className=" max-w-2xl lg:pl-20 flex flex-col space-y-8 md:mt-32 mt-24 text-center md:text-start md:pt-0 px-4  md:pr-24 lg:pr-0">
        <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl ">
          {" "}
          The <span className="text-pyconug-red">1st</span>
          &nbsp;Python Language Conference in Uganda
        </h1>
        <p className="text-gray-500 md:text-xl text-lg">
          21 - 23 September, National ICT Innovation Hub
           {/* MoTIV, Kampala Uganda */}
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            className=" uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-64 font-bold "
            target="_blank"
            href={QUICKET_LINK}
          >
            Get Your Ticket
          </Link>
        </div>
      </div>
    </div>
  );
}
