import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion.jsx";
import DjangoGirlsSchedule from "./django-girls-schedule.jsx";

export default function DjangoGirls() {
  return (
    <main className="flex-grow space-y-6 mb-10">
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white bg-fixed"
        style={{ backgroundImage: 'url("/assets/images/djangogirls/dg1.png")' }}
      >
        <div className="relative text-center">
          <h1 className="text-6xl font-bold mb-4">DJANGO GIRLS</h1>
          <p className="text-xl mb-8">at PyCon Uganda 2024</p>
          <Image
            width={150}
            height={75}
            alt=""
            src={"/assets/images/djangogirls/djangogirls.png"}
            className="mx-auto"
          />
        </div>
      </section>
      <section className="md:container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="shadow-lg p-4 md:p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">Django Girls Kampala</h2>
            <p className="mb-4">
              If you are female and you want to learn how to build websites, we
              have good news for you! We are holding a one-day workshop for
              beginners!
            </p>
            <p className="mb-4">
              It will take place during the PyCon Uganda conference, at NWSC
              International Resource Center. We would like to give you an
              opportunity to learn how to program and become one of us - female
              programmers!
            </p>

            <p className="mb-4">
              The workshop is free of charge and if you are interested in being
              part of this training, you can apply for a pass now!!
            </p>
          </div>
          <div className="shadow-lg p-8 rounded-lg hover:shadow-none">
            <h2 className="text-3xl font-bold mb-4">Apply for a pass!</h2>
            <p className="mb-4">
              If you are a woman and you have a laptop - you can apply for a
              pass! You don&#39;t need to know any technical stuff - The workshop is
              for people who are new to programming.
            </p>
            <p className="mb-4">
              As a workshop attendee you will:
              <ul className="list-disc">
                <li>
                  Attend a one-day Django workshop during which you will create
                  your first website.
                </li>
                <li>Get a chance to meet other ladies in the tech world.</li>
                <li>Interact with the organizers and some of the sponsors.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Django Girls Workshop FAQ</h2>
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
        <DjangoGirlsSchedule />
      </section>
    </main>
  );
}
