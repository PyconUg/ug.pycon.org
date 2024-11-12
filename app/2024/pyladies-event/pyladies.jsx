import Image from "next/image";
import Link from "next/link";
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
          <p className="text-xl mb-8">
            30th November, 2024 at Outbox Hub Kampala
          </p>
        </div>
      </section>

      <div className="md:container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="shadow-lg p-4 md:p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">Register To Attend</h2>

            <p className="mb-4">
              PyLadies Kampala is dedicated to empowering women to become active
              participants and leaders in the Python open-source community.
            </p>
            <p className="mb-4">
              Our mission is to promote, educate, and advance a diverse Python
              community through outreach, education, conferences, events, and
              social gatherings.
            </p>
            <p>Click the link below to reserve your spot:</p>
            <Link
              href="https://forms.gle/xYWxHfDR81xiUSHA8"
              target="_blank"
              className=" text-blue-500 underline text-center flex justify-center py-3 text-lg"
            >
              Register Here
            </Link>
          </div>
          <div className="shadow-lg p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">Why You Should Attend?</h2>

            <p className="mb-4">
              As an attendee, you&#39;ll have the opportunity to:
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
              journey and become part of a supportive community. Register now to
              join us at the PyLadies Kampala!
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto p-4">
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
              Yes, please bring your own laptop. We don&#39;t provide hardware,
              and it&#39;s important for you to have your computer to take home
              everything you create during the workshop.
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
              No. Simply sign up for the workshop session, and you&#39;re
              welcome to join other activities if you&#39;re interested.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="lg:mx-20 mx-4">
        <PyLadiesSchedule />
      </section>
      <section className="">
        <div className="py-[60px]">
          <div className=" px-4 py-4 items-center">
            <div className="mx-auto max-w-xl text-center space-y-4">
              <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
                Event Venue
              </h2>
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
    </main>
  );
}
