import Link from "next/link";
import Image from 'next/image';

export default function SpeakersPage() {
  return (
    <>
      {" "}
      <section className="flex bg-cyan-900 text-zinc-300">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Speakers
            </h1>
            <p className="mt-4 sm:text-xl text-justify mx-5">
              Are you a professional <b>Python</b> user, hobbyist, or passionate
              about Python or programming and open source communities?
              <br />
              <br />
              We would kindly love to hear from you.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg mb-40">
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <Image src="/img/closed.png" alt="CFP closed" width={164} height={84} />
        </div>
        <br/>
        <p>
          Be it Web Development, Data Science, Machine Learning, Data
          Engineering or any other domain, Python programming has become a key
          part of countless industries. Are you an aspiring Python engineer
          curious about the power of Python programming and its potential to
          revolutionize various industries with an ideal pathway towards
          industrybest practices, approaches and concepts to solve real world
          problems? We would love to hear from you by joining us for a
          fascinating PyCon Uganda to share your brilliant ideas and a clear
          understanding of this exciting field to fellow Pythonistas.
        </p>
        <h2 className="font-sans py-8 text-xl font-bold sm:text-2xl">
          Why you should be a Speaker
        </h2>
        <div className="flex flex-col space-y-4">
          <p>
            PyCon Uganda is looking for speakers of all experience levels and
            backgrounds to contribute to the conference program! Therefore, if
            you are a professional Python user, hobbyist, just passionate about
            Python or programming and open source communities, we would kindly
            love to hear from you. Wow! All speakers will be presenting their
            topics in person at this year&#39;s exclusive PyCon Uganda as they
            transform minds and growth of the Python community at large.
          </p>
          <p className="text-cyan-900">
            We are excited and humbled to receive your talk and kindly, we
            request you to read the following information before submitting your
            proposal.
          </p>
          <p>
            Everyone is encouraged to submit a proposal regardless of their
            experience level. PyCon Uganda thrives on having talks ranging from
            introductory to advanced. If you are reading this and you are
            interested in speaking at PyCon Uganda, we would want you to submit
            a proposal.
          </p>
          <p>
            <b>Before writing up a proposal</b>, read the following descriptions
            of the four kinds of presentations at PyCon Uganda; Talks,
            Tutorials, Lightning talk.
          </p>
          <p>
            All speakers are expected to have read and adhered to the
            conference&nbsp;
            <Link href={"/code-of-conduct"} className="underline">
              Code of Conduct
            </Link>
            . In particular for speakers: slide content and spoken material
            should be appropriate for a professional audience including people
            of many different backgrounds. Sexual language and imagery are not
            appropriate, and neither is language or imagery that denigrates or
            demeans people based on race, gender, religion, sexual orientation,
            physical appearance, disability, or body size.
          </p>
        </div>

        <div>
          {" "}
          <h2 className="font-sans py-8 text-xl font-bold sm:text-2xl">
            Talks
          </h2>
          <p>
            These are the traditional talk sessions given during the main
            conference days, through featuring a diverse and inclusive mix of
            speakers in the lineup. Most talks are 30 minutes long, but we do
            offer a limited number of 45-minute slots for important topics that
            promise to benefit the community.
          </p>
        </div>
        <div>
          {" "}
          <h2 className="font-sans py-8 text-xl font-bold sm:text-2xl">
            Tutorials
          </h2>
          <p>
            We are looking for Python tutorials that can grow this community at
            any level. We aim for tutorials that will advance Python, Python
            community and shape the future. Each session runs for 3 full hours
            proceeded by a break of coffee or tea. There is both a morning
            tutorial session on the two days preceding the main conference this
            year. The tutorial days are 22nd and 23rd of September, 2023 in the
            same venue that hosts the main conference days that follow.
          </p>
        </div>
        <div>
          {" "}
          <h2 className="font-sans py-8 text-xl font-bold sm:text-2xl">
            Full-time trainers
          </h2>
          <p>
            We are also expecting educators to bring their show on the road.
            Therefore, we kindly request you to bring your coursework to PyCon
            Uganda, we would love to see what you have on the syllabus for 2023.
          </p>
        </div>
        <div>
          {" "}
          <h2 className="font-sans py-8 text-xl font-bold sm:text-2xl">
            Lightning Talk
          </h2>
          <p>
            At PyCon Uganda, we&#39;ll also be considering proposals in
            lightning talk format. Basically this is the shorter version of your
            talk of about <b>10 to 15 minutes</b>. So, in case your talk
            proposal is not selected, you can present in the lightning talk
            section
          </p>
        </div>

        <div className="flex justify-center mt-16">          
          <div style={{
            display: "flex",
            justifyContent: "center",
          }}>
            <Image src="/img/closed.png" alt="CFP closed" width={164} height={84} />
          </div>
          <br/>
        </div>
      </section>
    </>
  );
}
