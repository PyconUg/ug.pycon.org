import { QUICKET_LINK } from "@/2023/utils/constants";
import { DIVERSITY_TRAVEL_AID_LINK_2024 } from "@/2024/utils/constants";
import Link from "next/link";

export default function TravelAidPage() {
  return (
    <>
      <section className="flex bg-cyan-900 text-zinc-300">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-24 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Domestic Travel Aid{" "}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <p className="py-2">
          PyCon Uganda is offering a Domestic Travel Aid program to assist
          attendees from Arua, Gulu, Mbarara, or Soroti districts with the cost
          of travel to attend the conference.
        </p>
        <h4 className="font-sans text-lg font-bold sm:text-xl mt-4">
          Eligibility:
        </h4>
        <ul className="list-disc list-inside md:list-inside">
          <li>
            Must have purchased a ticket for PyCon Uganda 2024.{" "}
            <Link
              className="text-blue-500 underline"
              target="_blank"
              href={QUICKET_LINK}
            >
              Click to here to get your ticket now!
            </Link>
          </li>
          <li>
            Must be a resident of either Arua, Gulu, Mbarara, or Soroti
            district.
          </li>
        </ul>

        <br />
        <Link
          target="_blank"
          className="bg-[#ffe135] font-bold py-3 px-10 m-2 border rounded-3xl"
          href={`${DIVERSITY_TRAVEL_AID_LINK_2024}`}
        >
          Apply for Travel Aid
        </Link>

        <div className="flex space-y-4 flex-col mt-8">
          <h5 className="font-bold">Note:</h5>
          <p>
            Submitting your application does not guarantee immediate approval,
            as each application will be individually reviewed by the PyCon
            Uganda Organizing Team. Applications will be evaluated based on the
            information provided in the application form to determine the
            applicant&#39;s eligibility.
          </p>

          <p>
            Privacy: All personal information collected will be kept strictly
            confidential. The data collected through this form will be used
            exclusively by our travel aid work team for the purpose of selecting
            scholarship recipients and processing travel aid. Rest assured that
            no data will be shared with third parties.
          </p>

          <p>
            With our limited funds, we can&#39;t promise you will receive a
            grant, but if you&#39;re not sure, we encourage you to apply. If
            you&#39;re uncomfortable with other people knowing you received a
            grant, you don&#39;t have to tell them - our policy is to never
            publicly identify grant applicants or recipients unless we have your
            explicit permission.
          </p>
        </div>
      </section>
    </>
  );
}
