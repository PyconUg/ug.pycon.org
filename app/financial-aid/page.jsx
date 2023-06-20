import Link from "next/link";

export default function DiversityPage() {
  return (
    <>
      <section className="flex bg-cyan-900 text-zinc-300">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Financial Aid
            </h1>
            <p className="mt-4 sm:text-xl text-justify mx-5">
              Interested in attending but not financially able to? 
            </p>
          </div>
        </div>
      </section>

      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
      <p className="py-2">
              As part of our commitment to fostering diversity and inclusion within the Python community, we recognize the importance of providing access to those who may face financial barriers.
              We are thrilled to announce that our diversity financial aid is available for marginalized and underrepresented individuals who are unable to attend the conference due to financial obstacles.
              To apply for a diversity ticket to this year&apos;s PyCon Uganda, kindly fill out the form provided.
            </p>
        <h3 className="font-sans text-xl font-bold sm:text-2xl">
          Eligibility
        </h3>

        <p className="py-2">
          These tickets are intended for individuals who encounter financial challenges, including students and individuals from underrepresented groups in the technology community, such as women, persons with disabilities, and racial and ethnic minorities.
          We strongly encourage all eligible individuals to apply for our tickets.
        </p>
        <p>
          <br/>
        <Link target="_blank" className="bg-[#ffe135]  font-bold py-3 px-10 m-2 border rounded-3xl" href="https://docs.google.com/forms/d/1hScuwbPwhxq8I1l8aZ0zOPA7WP-unvDMrarCXi0IxAY">
          Apply for Financial Aid
          </Link>
          <br/>
          <br/>
        </p>

        <p>*Submitting your application does not guarantee immediate approval, as each application will be individually reviewed by the PyCon Uganda Organizing Team. Applications will be evaluated based on the information provided in the application form to determine the applicant&apos;s eligibility.
        </p>
        <br/>

        <p>
*Privacy: All personal information collected will be kept strictly confidential. The data collected through this form will be used exclusively by our financial aid work team for the purpose of selecting scholarship recipients and processing financial aid. Rest assured that no data will be shared with third parties.
</p>
      </section>
    </>
  );
}
