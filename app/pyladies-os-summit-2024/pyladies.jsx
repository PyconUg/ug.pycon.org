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
            30th November, 2024 at Outbox Hub Kampala
          </p>
        </div>
      </section>
      <div className="md:container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="shadow-lg p-4 md:p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">About The Summit</h2>
            <p className="mb-4">
              Join us for an exciting Pyladies Kampala Open Source Summit that
              will bring together Python enthusiasts and open-source advocates,
              both new and experienced, for a one-day event aimed at building
              community and promoting contributions to open source.
            </p>
            <p className="mb-4">
              This event will feature a keynote by Tania Allard from the Python
              Software Foundation, followed by a hands-on session contributing
              to the{" "}
              <Link
                href={`https://forms.gle/4pM8z7euTbGXetQw5`}
                className="text-blue-500 hover:underline"
              >
                PlotNine open-source project{" "}
              </Link>
              .
            </p>
            <p className="mb-4">
              To wrap up, participants will have the chance to showcase their
              contributions and receive gifts like T-shirts and other swag in
              recognition of their efforts.
            </p>
            <p className="mb-4">
              Reserve your spot today by clicking the following link:{" "}
              <Link
                href="https://forms.gle/xYWxHfDR81xiUSHA8"
                target="_blank"
                className="text-blue-500 text-lg hover:underline"
              >
                Register Here
              </Link>
            </p>
            <p>
              Are you an open-source maintainer? Share your interest by emailing
              us at:{" "}
              <Link
                href="mailto:kampala@pyladies.com"
                className="text-blue-500 text-lg hover:underline"
              >
                kampala@pyladies.com
              </Link>
            </p>
          </div>
          <div className="shadow-lg p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">Why You Should Attend</h2>
            <p className="mb-4">
              As a participant, you&#39;ll have the chance to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Learn Python Basics:</strong> Get hands-on experience
                with Python under the guidance of experienced mentors.
              </li>
              <li>
                <strong>Network and Connect:</strong> Meet like-minded women in
                tech, share insights, and build connections.
              </li>
              <li>
                <strong>Engage with Experts:</strong> Interact with industry
                professionals, event organizers, and sponsors to deepen your
                learning.
              </li>
            </ul>
            <p className="mb-4">
              Don&#39;t miss this fantastic opportunity to jumpstart your Python
              journey and join a supportive community of tech enthusiasts.
              Register now and become a part of PyLadies Kampala!
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
          {PARTNERS.map((partner) => (
            <Image
              src={partner.logo}
              width={300}
              height={300}
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
        </Accordion>
      </section>
    </main>
  );
}
