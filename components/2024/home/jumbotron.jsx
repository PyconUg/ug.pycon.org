import { QUICKET_LINK } from "@/utils/constants";
import Link from "next/link";

export default function Jumbotron() {
  return (
    <div className="grid place-items-center place-content-center">
      <div className=" max-w-2xl lg:pl-20 flex flex-col space-y-8 md:mt-32 mt-24 text-center md:text-start md:pt-0 px-4  md:pr-24 lg:pr-0">
        <h1 className="font-bold lg:text-4xl md:text-5xl text-4xl ">
          {" "}
          WE'RE BACK
        </h1>
        <h1 className="font-bold lg:text-[90px] md:text-5xl text-4xl ">
          <span className="text-pyconug-red">PyCon</span> Uganda 2024
        </h1>
        <p className="text-gray-500 md:text-xl text-lg">- October 2024 -</p>

        <div className="flex justify-center md:justify-start space-x-4">
          <Link
            className="uppercase text-white bg-pyconug-lightBlue border-2 hover:bg-white hover:text-pyconug-lightBlue hover:border-pyconug-lightBlue px-12 py-4 rounded-md w-auto font-bold flex items-center justify-center"
            target="_blank"
            href={QUICKET_LINK}
          >
            Early Bird Ticket
          </Link>
          <Link
            className="uppercase text-pyconug-lightBlue border-2 border-pyconug-lightBlue px-12 hover:bg-pyconug-lightBlue hover:text-white py-4 rounded-md w-auto font-bold flex items-center justify-center"
            target="_blank"
            href={QUICKET_LINK}
          >
            Submit Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
