import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion.jsx";
import PyLadiesSchedule from "./pyladies-schedule.jsx";
import Image from "next/image";

export default function PyLadies() {
  const PARTNERS = [
    {
      name: "Python Software Foundation",
      href: "https://www.python.org/psf-landing/",
      logo: "/assets/images/sponsors/psf-logo.png",
    },
    { name: "PyCon Uganda", logo: "/assets/images/logo.png" },
    { name: "Outbox Hub", logo: "/assets/images/pyladies/outbox-logo.png" },
    {
      name: "Propel",
      href: "https://www.propel.community/",
      logo: "/2024/sponsors/Propel.png",
    },
    {
      name: "PSSU",
      href: "",
      logo: "/assets/images/pssu-logo.png",
    },
  ];
  return (
    <main className="flex-grow space-y-6 mb-10">
      <section
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url("/assets/images/pyladies/pyladies2.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4">
            Pyladies Kampala Open Source Summit
          </h1>
          <p className="text-xl mb-8">
            30th November, 2024 at Outbox Hub, 4th Floor - Soliz House, Plot 23
            - Lumumba Ave, Kampala
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pt-4">
        <h2 className="text-3xl font-bold m-4 text-center">About The Summit</h2>
        <p className=" text-center">
          Pyladies is an international mentorship group with a focus on helping
          more women become active participants and leaders in the Python
          open-source community. PyLadies also aims to provide a friendly
          support network for women and a bridge to the larger Python world.
          Anyone with an interest in Python is encouraged to participate! The
          meetups happen every third Saturday of the month.
        </p>
      </section>

      <div className="md:container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="shadow-lg p-4 md:p-8 rounded-lg hover:shadow-none">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Your Open Source Journey Starts Here{" "}
            </h2>

            <p className="mb-4">
              This annual open source summit brings together members of the
              Pyladies and Python open source community to grow our
              community&#39;s contribution to open source. Expect inspiring
              keynotes and productive collaboration with local open source
              maintainers. Exceptional contributions will be awarded (T.Shirts
              and other Swag).
            </p>
            <p className="mb-4">
              Reserve your attendee spot today by clicking the following link:
              <br />
            </p>
            <div className="flex justify-center">
              <Link
                target="_blank"
                href="https://forms.gle/4pM8z7euTbGXetQw5"
                className="px-4 py-2 bg-[#3774A2] text-white hover:bg-white  hover:text-[#3774A2] hover:underline text-lg rounded transition duration-200"
              >
                Register Now
              </Link>
            </div>
          </div>
          <div className="shadow-lg p-8 rounded-lg hover:shadow-none">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Are you an Open Source Maintainer?
            </h2>
            <p className="mb-4">
              Are you passionate about open-source and ready to Make an impact?
              Express your interest to join the Pyladies open source summit.{" "}
            </p>

            <p className="mb-4">
              Selected projects and maintainers will have a chance to
              collaborate With attendees and get new contributors.
            </p>
            <p>
              Email your statements of interest to:&nbsp;
              <Link
                href="mailto:kampala@pyladies.com"
                className="text-blue-500 text-lg hover:underline"
              >
                kampala@pyladies.com
              </Link>
            </p>
          </div>
        </div>
      </div>

      <section className="lg:mx-20 mx-4">
        <PyLadiesSchedule />
      </section>
      <section className="">
        <div className="py-[60px]">
          <div className=" px-4 py-4 items-center">
            <div className="mx-auto max-w-xl text-center space-y-4">
              <h2 className="text-3xl font-bold mb-4 text-center">Venue</h2>

              <p className="text-base p-0 font-medium">Outbox Hub Kampala</p>
            </div>
            <div className="mt-4 h-[70vh]">
              <iframe
                className="h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7549901576226!2d32.573844175214255!3d0.3228248996740135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb7a196c73c3%3A0xf3f534e6f1300573!2sOutbox%20Hub!5e0!3m2!1sen!2sug!4v1731430518433!5m2!1sen!2sug"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Partners</h2>
        <div className="flex flex-col h-full justify-center items-center lg:flex-row md:space-x-6 lg:space-y-0 space-y-6">
          {PARTNERS.map((partner, index) => (
            <Image
              key={index}
              src={partner.logo}
              width={200}
              height={200}
              alt={partner.name}
            />
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">
          Pyladies Kampala Open Source Summit FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Do I need to know anything about websites or programming?
            </AccordionTrigger>
            <AccordionContent>
              No! This summit is for everyone. You don&#39;t need any prior
              knowledge. If you have some technical knowledge (like knowing what
              HTML or CSS are), you can still apply!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Should I bring my own laptop?</AccordionTrigger>
            <AccordionContent>
              Yes, please bring your own laptop. We don&#39;t provide hardware,
              and it&#39;s important for you to have your computer to take home
              everything you create during the summit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do I need to install anything on my laptop beforehand?
            </AccordionTrigger>
            <AccordionContent>
              It would be helpful to have Python installed, but don&#39;t worry
              if you haven&#39;t done it yet. We&#39;ll have an installation
              session before the workshop to help you get set up.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do I need to be a PyLady already to attend?
            </AccordionTrigger>
            <AccordionContent>
              No. Simply sign up for the summit, and you&#39;re welcome to join
              other activities if you&#39;re interested.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is the Summit For Women Only?</AccordionTrigger>
            <AccordionContent>
              Registration is open to everyone, women are especially encouraged
              to attend and will be prioritized but it&#39;s an open call
              because everyone needs this impact.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
