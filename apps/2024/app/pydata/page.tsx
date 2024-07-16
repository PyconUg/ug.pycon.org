import Image from "next/image";
import Link from "next/link";
// import { PYDATA_REG } from "@/2024/utils/constants";
import { PYDATA_REG } from "@pycon/ui/src/2024/utils/constants";

export default function PyData() {
  return (
    <>
      <section className="h-20 w-full text-zinc-300" style={{ backgroundImage: "url('/assets/images/pydata/pydata.webp')", height: '20%' }}>
        <div className="flex flex-col justify-center items-center h-2/5"></div>
      </section>
      <section className="bg-fixed text-zinc-300 bg-pyconug-lightBlue" style={{ backgroundImage: "url('/assets/images/pydata/pydata.webp')", height: '20%' }}>
        <div className="flex flex-col justify-center items-center h-[30vh]">
          <div>
            {" "}
          </div>
        </div>
      </section>
      <section className="my-10 justify-center items-center text-justify text-lg">
        <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
          <div className="lg:w-1/2 p-4 w-full">
            <h1 className="text-3xl">PyData Conference</h1>
            <p className="mt-3">Join us for the PyData Conference at PyCon Uganda!
              The PyData Conference is a gathering of data enthusiasts, scientists, and professionals who are passionate about data analysis, machine learning, and artificial intelligence. This conference provides a platform for sharing knowledge, exploring the latest trends, and networking with like-minded individuals in the field of data science.</p>
          </div>
          <div className="lg:w-1/2 p-4 w-full">
            <h1 className="text-3xl">Join Our Conference!</h1>
            <p className="mt-3">Don&apos;t miss this opportunity to expand your knowledge and connect with the data community. Register now for the PyData Conference!</p>
            <p className="mt-3">As a conference attendee, you&apos;ll have the opportunity to:</p>
            <ul className="list-disc list-inside indent-4">
              <li>Attend Keynote Sessions: Learn from industry experts and thought leaders in the field of data science.</li>
              <li>Participate in Workshops: Gain hands-on experience and practical skills in data analysis and machine learning.</li>
              <li>Network with Peers: Connect with fellow data enthusiasts and professionals to exchange ideas and collaborate on projects.</li>
            </ul>
            <p className="mt-3 font-medium">Don&apos;t miss this fantastic opportunity to expand your knowledge and be part of the vibrant data community. Register now to join us at the PyData Conference!</p>
          </div>
        </div>

        <div className="bg-fixed text-white bg-pyconug-lightBlue" style={{}}>
          <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
            <div className="lg:w-full p-4">
              <h1 className="text-3xl">Become a Participant</h1>
              <p className="mt-3">Feel free to apply and spread the word about this conference. Let&apos;s explore, analyze, and innovate together!</p>
              <div className="flex justify-center md:justify-start">
                <Link
                  className="bg-white text-pyconug-lightBlue px-12 py-4 rounded-md w-50 mt-10"
                  target="_blank"
                  href={PYDATA_REG}
                >
                  Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8 md:mx-28 max-w-screen-xl flex flex-col lg:flex-row mb-10">
          <div className="lg:w-1/2 p-4 w-full">
            <h3 className="text-xl font-bold">Do I need to know anything about data science or programming?</h3>
            <p className="mt-3">No! This conference is for everyone interested in data science, regardless of their background. Whether you&apos;re a beginner or an experienced professional, there will be sessions and workshops suitable for all levels.</p>
            <h3 className="text-xl font-bold mt-5">Should I bring my own laptop?</h3>
            <p className="mt-3">It&apos;s recommended to bring your own laptop for the workshops and hands-on sessions. However, if you don&apos;t have one, there will be shared resources available for you to use.</p>
          </div>
          <div className="lg:w-1/2 p-4 w-full">
            <h3 className="text-xl font-bold">Do I need to install any software or tools beforehand?</h3>
            <p className="mt-3">Some workshops may require specific software or tools. Prior to the conference, you will receive detailed instructions on any necessary installations or preparations.</p>
            <h3 className="text-xl font-bold mt-5">Can I present my own work or research at the conference?</h3>
            <p className="mt-3">Yes! We encourage participants to submit their work and research for presentation at the conference. It&apos;s a great opportunity to showcase your expertise and contribute to the data science community.</p>
          </div>
        </div>
        {/* <div className="bg-fixed text-white bg-pyconug-lightBlue" style={{}}>
          <div class="flex flex-col items-center space-x-4">
            <h1 className="text-3xl font-bold my-10">Agenda:</h1>
          </div>
          <div className="mx-8 md:mx-28 max-w-screen-xl justify-center flex flex-col lg:flex-row mb-10">
            <div className="lg:w-1/2 p-4">
              <ul className="list-disc list-inside indent-4">
                <li>10:00 - 11:00 am    Welcome remarks and Introductions</li>
                <li>11:00 - 12:00 am    Keynote Session: The Future of Data Science</li>
                <li>12:00 - 12:30 am    Exploring Machine Learning Algorithms</li>
                <li>12:30 - 13:00 am    Data Visualization Techniques</li>
              </ul>
            </div>
            <div className="lg:w-1/2 p-4 w-full">
              <ul className="list-disc list-inside indent-4">
                <li>13:00 - 14:00 pm    Lunch Break</li>
                <li>14:30 - 15:00 pm    Deep Learning Applications</li>
                <li>15:00 - 15:30 pm    Ethical Considerations in Data Science</li>
                <li>15:30 - 16:00 pm    Data Science in Industry</li>
                <li>16:00 - 16:30 pm    Closing Remarks and End</li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

