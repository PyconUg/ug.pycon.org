import { DIVERSITY_FINANCIAL_AID_LINK } from "@/2024/utils/constants";
import Link from "next/link";

export default function DiversityPage() {
  return (
    <>
      <section className="flex bg-cyan-900 text-zinc-300">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Travel Aid
            </h1>
            <p className="mt-4 sm:text-xl text-justify mx-5">
              Call for Applications Opening Soon!
            </p>
          </div>
        </div>
      </section>

      {/* <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <p className="py-2">
          PyCon Uganda 2024 is offering grants to attendees and speakers, so
          that those who might otherwise not be able to attend won’t hesitate to
          participate. Some expenses for the conference attendance (which can
          include travel, hotel, registration etc.) will be covered for
          opportunity grant recipients. We actively encourage people to apply
          for an opportunity grant. While we wish we could give grants to
          everyone who applies, we do not have the funds to do that. Our goal is
          to maximise the impact our grant program has, within the limited funds
          we have.
          <br />
          <br />
          We try to do this in a number of ways:
          <br />
          <ul className="list-disc list-inside md:list-inside">
            <li>
              Conferences are a meeting place for developers from all around the
              globe. Therefore, the selection process is designed to benefit
              people that we believe make a difference, particularly speakers
              and tutorial presenters.
            </li>
            <li>
              Additionally, the selection process attempts to promote a more
              diverse PyCon Uganda. While encouraging diversity takes many
              forms, we’re happy to use the opportunity grant program as a very
              direct method of supporting diversity within the Django community.
              In particular, our grant program prioritises people part of an
              underrepresented or marginalised group in tech, as these people
              are more likely to experience hardships and difficulties in
              traveling to our events and being a part of our community.
            </li>
            <li>
              When prioritising grant applications, we try to get a feel for how
              much impact this grant will have on the applicant and the wider
              community and country, compared to others. In this, we consider
              things like involvement in a local community, social impact of the
              applicant’s activities, and how accessible other conferences are
              to them.
            </li>
          </ul>
        </p>
        <br />
        <br />
        <h3 className="font-sans text-xl font-bold sm:text-2xl">Eligibility</h3>

        <p className="py-2">
          Our program prioritises speakers first, and then anyone who is part of
          an underrepresented or marginalised group in tech. These groups
          include, but are not limited to:
        </p>
        <ul className="list-disc list-inside md:list-inside">
          <li>
            Women and other gender minorities of all expressions and identities;
            e.g. transgender and non-binary people
          </li>
          <li>People of color</li>
          <li>Sexuality minorities, including asexual people</li>
          <li>People with disabilities, both visible and invisible</li>
          <li>Neurodivergent people</li>
          <li>People with chronic illnesses or diseases</li>
          <li>Religious and ethnic minorities</li>
          <li>Age minorities (under ~21, over ~60)</li>
          <li>People experiencing poverty</li>
          <li>Homeless and home/food insecure people</li>
          <li>Caregivers of children or other dependents</li>
          <li>
            People who have experienced trauma and its aftermath (PTSD, anxiety,
            etc)
          </li>
          <li>People living with or recovering from substance abuse</li>
        </ul>
        <br />
        <br />
        <p>
          We strongly encourage all eligible individuals to apply for our
          tickets.
        </p>
        <br />
        <Link
          target="_blank"
          className="bg-[#ffe135]  font-bold py-3 px-10 m-2 border rounded-3xl"
          href={`${DIVERSITY_FINANCIAL_AID_LINK}`}
        >
          Apply for Financial Aid
        </Link>
        <br />
        <br />
        <p>
          If you are an accepted speaker, and you don’t need a grant because
          your employer is funding your conference costs, we can recognise your
          employer for this. For now we’re planning to get their logo in the
          programme, next to your talk. This is opt-in. With this, we hope to
          make it a bit easier for you to convince your employer to contribute
          towards your conference costs as a speaker.
        </p>
        <p>
          <br />
          <br />
          <p>
            Lastly, we know that for some people it can be difficult to feel
            like it’s okay for you to apply. That’s why we want to make it clear
            that:
          </p>
          <ul className="list-disc list-inside md:list-inside">
            <li>
              Have you already attended a conference in the past? That’s ok.
            </li>
            <li>Already received a grant in the past? Still ok.</li>
            <li>Don’t have much experience with Python? That’s ok, too.</li>
            <li>
              Don’t want to take money away from someone else? Really, it’s ok!
            </li>
            <li>Don’t feel like you deserve this? That’s also ok: you do.</li>
          </ul>
          <br />
          <br />
          <p>
            *Submitting your application does not guarantee immediate approval,
            as each application will be individually reviewed by the PyCon
            Uganda Organizing Team. Applications will be evaluated based on the
            information provided in the application form to determine the
            applicant&apos;s eligibility.
          </p>
          <br />

          <p>
            *Privacy: All personal information collected will be kept strictly
            confidential. The data collected through this form will be used
            exclusively by our financial aid work team for the purpose of
            selecting scholarship recipients and processing financial aid. Rest
            assured that no data will be shared with third parties.
          </p>
          <br />
          <br />
          <p>
            With our limited funds, we can’t promise you will receive a grant,
            but if you’re not sure, we encourage you to apply. If you’re
            uncomfortable with other people knowing you received a grant, you
            don’t have to tell them - our policy is to never publicly identify
            grant applicants or recipients unless we have your explicit
            permission.
          </p>
          <br />
          <br />
          <Link
            target="_blank"
            className="bg-[#ffe135]  font-bold py-3 px-10 m-2 border rounded-3xl"
            href={`${DIVERSITY_FINANCIAL_AID_LINK}`}
          >
            Apply for Financial Aid
          </Link>
          <br />
          <br />
        </p>
      </section> */}
    </>
  );
}
