import Image from "next/image";
import Link from "next/link";
import { PYLADIES_REG } from "@/2024/utils/constants";
import { PYCONUG_EMAIL } from "@/2023/utils/constants";

export default function PyLadies() {
  return (
    <>
      <section className="my-10 justify-center items-center text-justify text-lg">
        <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col justify-center items-center mb-10">
          <Image
            width={150}
            height={75}
            alt=""
            src={"/assets/images/pyladies/pyladies.png"}
          />
        </div>
        <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
          <div className="lg:w-1/2 p-4 w-full">
            <h1 className="text-3xl">PyLadies Anniversary</h1>
            <p className="mt-3">
              Join us in celebrating the PyLadies Anniversary Event at PyCon
              Uganda! This special occasion marks a significant milestone for
              PyLadies, an international mentorship group dedicated to
              empowering women to become active participants and leaders in the
              Python open-source community. Our mission is to promote, educate,
              and advance a diverse Python community through outreach,
              education, conferences, events, and social gatherings.
            </p>
          </div>
          <div className="lg:w-1/2 p-4 w-full">
            <h1 className="text-3xl">Join Our Anniversary Workshop!</h1>
            <p className="mt-3">
              Don&apos;t miss this chance to start your Python journey and join
              a supportive community. Apply now for the PyLadies Anniversary
              Workshop!
            </p>
            <p className="mt-3">
              As a workshop attendee, you&apos;ll have the opportunity to:
            </p>
            <ul className="list-disc list-inside indent-4">
              <li>
                Learn Python Basics: Start writing your first Python programs
                with guidance from experienced mentors.
              </li>
              <li>
                Network and Connect: Meet and connect with fellow women in tech
                and share your experiences.
              </li>
              <li>
                Engage with Experts: Interact with organizers and sponsors to
                enhance your learning journey.
              </li>
            </ul>
            <p className="mt-3 font-medium">
              Don&apos;t miss this fantastic opportunity to kickstart your
              Python journey and become part of a supportive community. Apply
              now to join us at the PyLadies Anniversary Workshop!
            </p>
          </div>
        </div>

        <div className="bg-fixed text-white bg-pyconug-lightBlue" style={{}}>
          {/* <div className="bg-fixed text-white" style={{ backgroundImage: "url('/assets/images/djangogirls/dg2.png')" }}> */}
          <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
            <div className="lg:w-full p-4">
              <h1 className="text-3xl">Become a participant</h1>
              <p className="mt-3">
                Feel free to apply and spread the word about this workshop.
                Let&apos;s dream, code, and create together!
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  className="bg-white text-pyconug-lightBlue px-12 py-4 rounded-md w-50 mt-10"
                  target="_blank"
                  href={PYLADIES_REG}
                >
                  Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
          <div className="lg:w-1/2 p-4 w-full">
            <h3 className="text-xl font-bold">
              Do I need to know anything about websites or programming?
            </h3>
            <p className="mt-3">
              No! This workshop is for beginners. You don&apos;t need any prior
              knowledge. If you have some technical knowledge (like knowing what
              HTML or CSS are), you can still apply!
            </p>
            <h3 className="text-xl font-bold mt-5">
              Should I bring my own laptop?
            </h3>
            <p className="mt-3">
              Yes, please bring your own laptop. We don&apos;t provide hardware,
              and it&apos;s important for you to have your computer to take home
              everything you create during the workshop.
            </p>
          </div>
          <div className="lg:w-1/2 p-4 w-full">
            <h3 className="text-xl font-bold">
              Do I need to install anything on my laptop beforehand?
            </h3>
            <p className="mt-3">
              It would be helpful to have Python installed, but don&apos;t worry
              if you haven&apos;t done it yet. We&apos;ll have an installation
              session before the workshop to help you get set up.
            </p>
            <h3 className="text-xl font-bold mt-5">
              Do I need to be a PyLady already to attend?
            </h3>
            <p className="mt-3">
              No. Simply sign up for the workshop session, and you&apos;re
              welcome to join other activities if you&apos;re interested.
            </p>
          </div>
        </div>
        {/* <div class="flex flex-col items-center space-x-4">
          <h1 className="text-3xl font-bold mb-10">Workshop chair:</h1>
        </div> */}
        <div className="bg-fixed text-white bg-pyconug-lightBlue" style={{}}>
          <div class="flex flex-col items-center space-x-4">
            <h1 className="text-3xl font-bold my-10">Agenda:</h1>
          </div>
          <div className="mx-8 md:mx-28 max-w-screen-xl justify-center flex flex-col lg:flex-row mb-10">
            <div className="lg:w-1/2 p-4">
              <ul className="list-disc list-inside indent-4">
                <li>10:00 - 11:00 am Welcome remarks and Introductions</li>
                <li>11:00 - 12:00 am Keynote Session</li>
                <li>
                  12:00 - 12:30 am Women in STEM! Championing Diversity and
                  Inclusion in the Tech Industry!
                </li>
                <li>12:30 - 13:00 am Teach me through Python</li>
              </ul>
            </div>
            <div className="lg:w-1/2 p-4 w-full">
              <ul className="list-disc list-inside indent-4">
                <li>13:00 - 14:00 pm Lunch Break</li>
                <li>
                  14:30 - 15:00 pm Women Tech Makers in Kampala: Get Involved
                </li>
                <li>
                  15:00 - 15:30 pm Harnessing Collective Intelligence :
                  Developing and Utilizing Data Science Communities
                </li>
                <li>15:30 - 16:00 pm Advanced Django as a Professional</li>
                <li>16:00 - 16:30 pm Closing Remarks and End</li>
              </ul>
            </div>
          </div>
        </div>

        <section
          className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg"
          id="sponsor-pyladies"
        >
          {" "}
          <h2 className="text-3xl font-bold text-center mb-6 pt-8 sm:text-4xl">
            Become a Sponsor for PyLadies Workshops at PyCon Uganda 2024
          </h2>
          <p className="text-center">
            Your support will directly contribute to the success of PyLadies
            workshops at PyCon Uganda 2024. By sponsoring, you enable us to
            provide valuable resources, engaging sessions, and impactful
            experiences that empower women in the tech community. Explore our
            sponsorship tiers below and join us in making a difference.
          </p>
          <div className="pt-6 grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <div className="mb-6 lg:mb-0 order-1">
              <div className="block rounded-lg shadow-lg bg-white h-full border border-[#C0C0C0]">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-sm text-[#A0A0A0] font-extrabold">
                    Silver
                  </p>
                  <h3 className="text-2xl mb-6">
                    <strong>$ 5,000</strong>
                  </h3>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Bronze package
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      On swag shirt
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      In website footer
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      1 Pull-up banner
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      1 announcement
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Youtube CTA links{" "}
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      10 Free Tickets
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0 order-2">
              <div className="block rounded-lg shadow-lg bg-white h-full border border-[#A0B2C6]">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-sm text-[#A0B2C6] font-extrabold">
                    Bronze
                  </p>
                  <h3 className="text-2xl mb-6">
                    <strong>$ 2,000</strong>
                  </h3>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Basic package
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      In Press Release{" "}
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Distribute Swag{" "}
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Links in videos{" "}
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      5 Free Tickets{" "}
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0 order-3">
              <div className="block rounded-lg bg-white h-full border ">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-sm font-extrabold">
                    <strong>Basic</strong>
                  </p>
                  <h3 className="text-2xl mb-6">
                    <strong>$ 500</strong>
                  </h3>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Branding
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Workshops
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Job Fair Access
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      3 Free Tickets{" "}
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      On Sponsorship Page{" "}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <p className="text-center">
              Ready to sponsor? Please contact us at{" "}
              <Link
                href={`mailto:${PYCONUG_EMAIL}`}
                className="underline text-blue-500"
              >
                {PYCONUG_EMAIL}
              </Link>
              !
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
