import Image from "next/image";
import Link from "next/link";
import { PYCONUG_EMAIL } from "@/2023/utils/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion.jsx";
import PyLadiesSchedule from "./pyladies-schedule.jsx";

export default function PyLadies() {
  return (
    <main className="flex-grow space-y-6 mb-10">
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white bg-cyan-900">
        <div className="relative text-center space-y-3">
          <Image
            width={300}
            height={200}
            alt=""
            className="mx-auto"
            src={"/assets/images/pyladies/pyladies.png"}
          />
          <p className="text-xl mb-8">at PyCon Uganda 2024</p>
        </div>
      </section>

      <div className="md:container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="shadow-lg p-4 md:p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">PyLadies Anniversary</h2>

            <p className="mb-4">
              Join us in celebrating the PyLadies Anniversary Event at PyCon
              Uganda! This special occasion marks a significant milestone for
              PyLadies, an international mentorship group dedicated to
              empowering women to become active participants and leaders in the
              Python open-source community.
            </p>
            <p className="mb-4">
              Our mission is to promote, educate, and advance a diverse Python
              community through outreach, education, conferences, events, and
              social gatherings.
            </p>
            <Image
              width={150}
              height={75}
              alt=""
              className="mx-auto"
              src={"/assets/images/pyladies/pyladies.png"}
            />
          </div>
          <div className="shadow-lg p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Anniversary Workshop!
            </h2>
            <p className="mb-4">
              Don&#39;t miss this chance to start your Python journey and join a
              supportive community. Apply now for the PyLadies Anniversary
              Workshop!
            </p>
            <p className="mb-4">
              As a workshop attendee, you&#39;ll have the opportunity to:
              <ul class="list-disc">
                <li>
                  Learn Python Basics: Start writing your first Python programs
                  with guidance from experienced mentors.
                </li>
                <li>
                  Network and Connect: Meet and connect with fellow women in
                  tech and share your experiences.
                </li>
                <li>
                  {" "}
                  Engage with Experts: Interact with organizers and sponsors to
                  enhance your learning journey.
                </li>
              </ul>
            </p>
            <p className="mb-4">
              Don&#39;t miss this fantastic opportunity to kickstart your Python
              journey and become part of a supportive community. Apply now to
              join us at the PyLadies Anniversary Workshop!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">PyLadies Workshop FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Do I need to know anything about websites or programming?
            </AccordionTrigger>
            <AccordionContent>
              No! This workshop is for beginners. You don&#39;t need any prior
              knowledge. If you have some technical knowledge (like knowing what
              HTML or CSS are), you can still apply!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Should I bring my own laptop?</AccordionTrigger>
            <AccordionContent>
              Yes, please bring your own laptop. We don&#39;t provide hardware, and
              it&#39;s important for you to have your computer to take home
              everything you create during the workshop.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do I need to install anything on my laptop beforehand?
            </AccordionTrigger>
            <AccordionContent>
              It would be helpful to have Python installed, but don&#39;t worry if
              you haven&#39;t done it yet. We&#39;ll have an installation session before
              the workshop to help you get set up.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do I need to be a PyLady already to attend?
            </AccordionTrigger>
            <AccordionContent>
              No. Simply sign up for the workshop session, and you&#39;re welcome to
              join other activities if you&#39;re interested.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="lg:mx-20 mx-4">
        <PyLadiesSchedule />
      </div>

      <section className="my-10 justify-center items-center text-justify text-lg">
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
    </main>
  );
}