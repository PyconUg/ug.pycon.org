import Link from "next/link";
import PyDataSchedule from "./pydata-schedule";
import { PYDATA_REG } from "@/2024/utils/constants";

export default function PyData() {
  return (
    <main className="flex-grow space-y-6 mb-10">
      {/* <section className="relative h-[300px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">PyData Kampala</h1>
          <p className="text-xl">at PyCon Uganda 2024</p>
        </div>
      </section> */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("/assets/images/pydata.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4">PYDATA KAMPALA</h1>
          <p className="text-xl mb-8">at PyCon Uganda 2024</p>
        </div>
      </section>
      <div className="md:container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="shadow-lg p-4 md:p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">PyData Kampala Workshop</h2>
            <p className="mb-4">
              Join PyData Kampala for a hands-on workshop on data, science and
              engineering at the PyCon Uganda 2024. PyData Kampala is an open
              and welcoming community of developers and users of data, science
              and engineering tools.
            </p>
            <p className="mb-4">
              We are a part of the PyData Global network that promotes
              discussions of the best practices, new approaches, and merging
              technologies for data management, processing, analytics and
              visualization. PyData Kampala approaches data science using many
              languages, including (but not limited to) Python, Julia and R.
            </p>
            <p>
              PyData Kampala follows the&nbsp;
              <Link
                target="_blank"
                href="https://numfocus.org/code-of-conduct"
                className="text-blue-600 hover:underline"
              >
                NumFocus code of conduct
              </Link>
            </p>
          </div>
          <div className="shadow-lg p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">Who Should Attend?</h2>
            <p className="mb-4">
              The PyData Kampala workshop is open to all persons (that
              registered) of varying levels of experience. You are required to
              carry a laptop for the live sessions.
            </p>
            <p className="mb-4">
              During the workshop, attendees shall have the opportunity for
              hands-on sessions, attend live keynote sessions and talks, as well
              as network with fellow members of the PyData Kampala community.
            </p>
            <Link
              href={PYDATA_REG}
              target="_blank"
              className="mt-4 px-6 py-3 bg-pyconug-darkBlue text-white font-semibold rounded-lg shadow-md hover:bg-pyconug-lightBlue focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:mx-20 mx-4">
        <PyDataSchedule />
      </div>
    </main>
  );
}
