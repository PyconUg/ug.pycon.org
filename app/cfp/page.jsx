import DateComponent from "@/components/date-component";
import Image from "next/image";

export default function CFP(params) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between bg-gray-200">
      <div className="grid place-items-center place-content-center">
        <div className=" max-w-2xl lg:pl-40 flex flex-col space-y-8 pt-32 md:pt-0 px-4 md:px-0">
          <h3 className="md:text-4xl text-3xl font-bold uppercase">
            Call for Speakers
          </h3>
          <p className="text-gray-500 md:text-xl text-lg">
            PyCon Uganda is an annual conference for the Python programming
            language in Uganda. The conference is an arena where Python users of
            all levels and backgrounds ranging from professional Python
            engineers, students, open source contributors, hobbyists and tech
            companies using the Python language meet to learn, share and grow
            with each other in regards to the Python rich eco-system.
          </p>

          <button className="uppercase text-white bg-red-700 px-12 py-4 rounded-md w-64 font-bold">
            Learn more
          </button>
        </div>
      </div>
      <div
        className="w-1/2 h-[90vh] bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url(pallet.webp)",
        }}
      >
        <div className="grid place-items-center h-[90vh]">
          <div className="relative">
            <Image width={500} height={350} alt="" src={"/cfp-hero.webp"} />

            <div className="absolute bottom-0 right-0 ">
              <DateComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
