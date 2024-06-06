import Image from "next/image";
import Link from "next/link";
import { PYLADIES_REG } from "@/2024/utils/constants";

export default function DjangoGirls() {
  return (
    <>
      {" "}
      {/* <section className="bg-fixed text-zinc-300" style={{ backgroundImage: "url('/assets/images/djangogirls/dg1.png')" }}> */}
      {/* <section className="bg-fixed text-zinc-300 bg-pyconug-lightBlue" style={{}}>
        <div className="flex flex-col justify-center items-center h-[70vh]">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Pyladies Anniversary
            </h1>
          </div>

          <div>
            {" "}
            <p className="text-white p-4 font-medium w-[60vw] text-center">
              We are pleased to inform you that the Pyladies will be celebrating their seventh Anniversary during the Pycon Uganda 2024 conference as a way to celebrate women and the achievements they've attained over time.
            </p>
            <p className="text-white p-4 font-medium text-center">
              Kindly register here if you are interested in attending.
            </p>
          </div>
        </div>
      </section> */}
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
            <p className="mt-3">Join us in celebrating the PyLadies Anniversary Event at PyCon Uganda!
              This special occasion marks a significant milestone for PyLadies, an
              international mentorship group dedicated to empowering women to become
              active participants and leaders in the Python open-source community. Our mission
              is to promote, educate, and advance a diverse Python community through
              outreach, education, conferences, events, and social gatherings.</p>
          </div>
          <div className="lg:w-1/2 p-4 w-full">
            <h1 className="text-3xl">Join Our Anniversary Workshop!</h1>
            <p className="mt-3">Don&apos;t miss this chance to start your Python journey and join a supportive
              community. Apply now for the PyLadies Anniversary Workshop!</p>
            <p className="mt-3">As a workshop attendee, you&apos;ll have the opportunity to:</p>
            <ul className="list-disc list-inside indent-4">
              <li>Learn Python Basics: Start writing your first Python programs
                with guidance from experienced mentors.</li>
              <li>Network and Connect: Meet and connect with fellow women in tech and share your experiences.</li>
              <li>Engage with Experts: Interact with organizers and sponsors to enhance your learning journey.</li>
            </ul>
            <p className="mt-3 font-medium">Don&apos;t miss this fantastic opportunity to kickstart your Python journey and
              become part of a supportive community. Apply now to join us at the PyLadies Anniversary Workshop!</p>
          </div>
        </div>

        <div className="bg-fixed text-white bg-pyconug-lightBlue" style={{}}>
          {/* <div className="bg-fixed text-white" style={{ backgroundImage: "url('/assets/images/djangogirls/dg2.png')" }}> */}
          <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
            <div className="lg:w-full p-4">
              <h1 className="text-3xl">Become a participant</h1>
              <p className="mt-3">Feel free to apply and spread the word about this workshop. Let&apos;s dream, code, and create together!</p>
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
            <h3 className="text-xl font-bold">Do I need to know anything about websites or programming?</h3>
            <p className="mt-3">No! This workshop is for beginners. You don&apos;t need any prior knowledge. If you have some technical knowledge (like knowing what HTML or CSS are), you can still apply!</p>
            <h3 className="text-xl font-bold mt-5">Should I bring my own laptop?</h3>
            <p className="mt-3">Yes, please bring your own laptop. We don&apos;t provide hardware, and it&apos;s important for you to have your
              computer to take home everything you create during the workshop.</p>
          </div>
          <div className="lg:w-1/2 p-4 w-full">
            <h3 className="text-xl font-bold">Do I need to install anything on my laptop beforehand?</h3>
            <p className="mt-3">It would be helpful to have Python installed, but don&apos;t worry if you haven&apos;t done it yet.
              We&apos;ll have an installation session before the workshop to help you get set up.</p>
            <h3 className="text-xl font-bold mt-5">Do I need to be a PyLady already to attend?</h3>
            <p className="mt-3">No. Simply sign up for the workshop session, and you&apos;re welcome to join other activities if you&apos;re interested.</p>
          </div>
        </div>
        <div class="flex flex-col items-center space-x-4">
          <h1 className="text-3xl font-bold mb-10">Workshop chair:</h1>
        </div>
        <div className="bg-fixed text-white bg-pyconug-lightBlue" style={{}}>
          <div class="flex flex-col items-center space-x-4">
            <h1 className="text-3xl font-bold my-10">Agenda:</h1>
          </div>
          <div className="mx-8 md:mx-28 max-w-screen-xl justify-center flex flex-col lg:flex-row mb-10">
            <div className="lg:w-1/2 p-4">
              <ul className="list-disc list-inside indent-4">
                <li>10:00 - 11:00 am    Welcome remarks and Introductions</li>
                <li>11:00 - 12:00 am    Keynote Session</li>
                <li>12:00 - 12:30 am    Women in STEM! Championing Diversity and Inclusion in the Tech Industry!</li>
                <li>12:30 - 13:00 am    Teach me through Python</li>
              </ul>
            </div>
            <div className="lg:w-1/2 p-4 w-full">
              <ul className="list-disc list-inside indent-4">
                <li>13:00 - 14:00 pm    Lunch Break</li>
                <li>14:30 - 15:00 pm    Women Tech Makers in Kampala: Get Involved</li>
                <li>15:00 - 15:30 pm   Harnessing Collective Intelligence : Developing and Utilizing Data Science Communities</li>
                <li>15:30 - 16:00 pm   Advanced Django as a Professional</li>
                <li>16:00 - 16:30 pm   Closing Remarks and End</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

