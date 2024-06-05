import Image from "next/image";
import Link from "next/link";
import { PYLADIES_REG } from "@/2024/utils/constants";

export default function DjangoGirls() {
  return (
    <>
      {" "}
      {/* <section className="bg-fixed text-zinc-300" style={{ backgroundImage: "url('/assets/images/djangogirls/dg1.png')" }}> */}
      <section className="bg-fixed text-zinc-300 bg-pyconug-lightBlue" style={{}}>
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
      </section>
      <section className="my-10 justify-center items-center text-justify text-lg">
        <div class="mx-8 md:mx-28 max-w-screen-xl flex flex-col justify-center items-center mb-10">
          <Image
            width={150}
            height={75}
            alt=""
            src={"/assets/images/pyladies/pyladies.png"}
          />
        </div>
        <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
          <div className="lg:w-1/2 p-4 w-full">
            <h1 className="text-3xl">PyLadies Anniversary Celebration</h1>
            <p className="mt-3">Attention all Python-loving women! As we celebrate PyLadies' anniversary, we invite you to join us for a special one-day workshop tailored for beginners!</p>
            <p className="mt-3">This event will take place during the PyCon Uganda conference, at the National ICT Innovation Hub. It's an excellent opportunity to commemorate our achievements and foster a supportive community of female Python developers.</p>
            <p className="mt-3">The workshop is free of charge, and if you're eager to participate, secure your spot now by applying for a pass!</p>
          </div>
          <div className="lg:w-1/2 p-4 w-full">
            <h1 className="text-3xl">Apply for a Pass!</h1>
            <p className="mt-3">Ladies, if you have a passion for Python and a laptop, you're eligible to apply for a pass to our anniversary workshop! Technical expertise is not required - this event is tailored for beginners.</p>
            <p className="mt-3">As a workshop attendee, you'll:</p>
            <ul className="list-disc list-inside indent-4">
              <li>Participate in a one-day Python workshop, where you'll dive into writing your first Python programs</li>
              <li>Connect with fellow women in the tech community and share experiences</li>
              <li>Engage with the organizers and sponsors to enhance your learning journey</li>
            </ul>
          </div>
        </div>

        <div className="bg-fixed text-white bg-pyconug-lightBlue" style={{}}>
          {/* <div className="bg-fixed text-white" style={{ backgroundImage: "url('/assets/images/djangogirls/dg2.png')" }}> */}
          <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
            <div className="lg:w-full p-4">
              <h1 className="text-3xl">Become a participant</h1>
              <p className="mt-3">Feel free to apply and also tell a friend about this workshop. Let&apos;s dream, code and create.</p>
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
            <p className="mt-3">No! This workshop is for beginners. You do not need to know anything about it. However, if you have a little bit of technical knowledge (i.e. you know what HTML or CSS are) you still can apply!</p>
            <h3 className="text-xl font-bold mt-5">Should I bring my own laptop?</h3>
            <p className="mt-3">Yes. We have no hardware, so we expect you to bring your computer with you. It is also important for us that you will take home everything you will write and create during the workshop.</p>
          </div>
          <div className="lg:w-1/2 p-4 w-full">
            <h3 className="text-xl font-bold">Do I need to have something installed on my laptop?</h3>
            <p className="mt-3">It would be helpful to have Django installed before the workshop, but we wouldn&apos;t expect you to install anything on your own. We will have an installation party the evening before the workshop.</p>
            <h3 className="text-xl font-bold mt-5">Do I need to be part of Django girls already?</h3>
            <p className="mt-3">No. You need to sign up for the tutorial session and you will join the group for other activities if interested.</p>
          </div>
        </div>
        <div class="flex flex-col items-center space-x-4">
          <h1 className="text-3xl font-bold mb-10">Lead coach for the day:</h1>
        </div>
        <div className="bg-fixed text-white bg-pyconug-lightBlue" style={{}}>
          <div class="flex flex-col items-center space-x-4">
            <h1 className="text-3xl font-bold my-10">Agenda:</h1>
          </div>
          <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
            <div className="lg:w-1/3 p-4">
              <ul className="list-disc list-inside indent-4">
                <li>08:30 - 09:00 am    Registration & check in</li>
                <li>09:00 - 09:10 am    Welcome Address</li>
                <li>09:10 - 09:30 am    Keynote</li>
                <li>09:30 - 10:45 am    Dive into Python</li>
              </ul>
            </div>
            <div className="lg:w-1/3 p-4 w-full">
              <ul className="list-disc list-inside indent-4">
                <li>10:45 - 11:00 am    Breakfast</li>
                <li>11:00 - 13:00 pm    Dive into Django</li>
                <li>13:00 - 14:00 pm    Lunch Break</li>
                <li>14:00 - 16:45 pm    More Django and Deployment</li>
              </ul>
            </div>
            <div className="lg:w-1/3 p-4 w-full">
              <ul className="list-disc list-inside indent-4">
                <li>16:45 - 17:00 pm   Break</li>
                <li>17:00 - 17:30 pm   Fixing Bugs and AOB</li>
                <li>17:30 - 18:00 pm   Wrap up and announcements and photoshoot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

