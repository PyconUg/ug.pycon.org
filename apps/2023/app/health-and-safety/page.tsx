import Link from "next/link";

export default function HealthAndSafety() {
    return (
      <>
        {" "}
        <section className="flex bg-cyan-900 text-zinc-300">
          <div className="flex py-10 lg:items-center">
            <div className="md:mx-10 text-center mx-4">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                Health and Safety Guidelines
              </h1>
              <p className="mt-4 sm:text-xl text-justify mx-5">
              Our attendees&apos; health and safety remain our top priority and we look to the venue, and Ministry of Health guidelines to make the best and most informed decisions around onsite safety and requirements so we will be erring on the side of safety for all participants.<br /><br />
              PyCon Uganda will continue to provide social distancing where possible in the venue. Hand sanitizer will also be available for all attendees. The guidelines implemented for PyCon Uganda 2023 are subject to change based on health and safety recommendations at the time of the event. We are committing, however, to only make changes in the direction of greater protections.

              </p>
            </div>
          </div>
        </section>
       <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
          <h2 className="font-sans text-xl font-bold mb-2 sm:text-2xl">
            Mask Requirement
          </h2>
          <p>
          Face coverings will be required of everyone inside the conference venue at PyCon Uganda. This is necessary since PyCon Uganda hosts attendees from all over the world who travel in and may have unknowingly been exposed to COVID-19. This allows us to host the safest event possible for everyone in attendance. We will not be rolling back our mask requirement.
          <br /><br />
          Exceptions are:
          </p>
          <ol className="list-disc list-inside md:list-inside">
            <li>
              Outdoor Spaces
            </li>
            <li>
            Indoors while consuming food and while socially distanced from other participants
            </li>
            <li>
            While necessary for communicating with someone who is hearing impaired when the ability to see the mouth is essential for communication
            </li>
            <li>
            Speakers while presenting
            </li>
          </ol>
          <br />
          <p>
          Masks must be worn over the nose and mouth and must be made of a tight-knit, non-permeable material. N95 or equivalent masks are required. As N95 is an American standard, masks certified by other governments to similar standards (e.g. PM2.5, KN95, and KF94) will also be allowed. <br />Speakers will not be required to wear masks while presenting. Participants should provide their own masks for the event, though extras will be available at no cost during the conference at the registration desk while supplies last. Participants who are unwilling to follow the mask requirement will be asked to leave.
          </p>
  
          <br />
          <br />
          <h2 className="font-sans text-xl font-bold mb-2 sm:text-2xl">
            Vaccination Requirement
          </h2>
          <p>
            PyCon Uganda 2023 will require vaccine verification. COVID-19 vaccines are effective at protecting people from getting seriously ill, being hospitalized, and dying. As with other diseases, you are protected best from COVID-19 when you stay up to date with the recommended vaccines, including locally available boosters.
          </p>
  
          <br />
          <br />
          <h2 className="font-sans text-xl font-bold mb-2 sm:text-2xl">
            Rapid Testing
          </h2>
          <p>
            We encourage attendees to do a rapid test before traveling and consider testing during the event, especially if you will be eating indoors with people. We did look into providing free, rapid onsite testing for participants but it is not feasible (logistically or financially) for an event like ours.
          </p>
  
          <br />
          <br />
          <h2 className="font-sans text-xl font-bold mb-2 sm:text-2xl">
            Attendance
          </h2>
          <p>
          Individuals should not attend the event if they are COVID-positive, are exhibiting COVID symptoms (<Link href={'https://www.health.go.ug/covid/'}><span className="text-blue-600">as defined by the Ministry of Health</span></Link>), or have been exposed, within 7 days prior to the event, to someone who was COVID-positive or showed COVID symptoms.<br />
          If you are feeling sick or exhibiting symptoms of COVID-19, or test positive for COVID-19, prior to the start of the conference, or on any day of the conference, please contact us at pyconug@pycon.org, and we will exchange your ticket type for an online ticket or grant you a refund.

          </p>
  
          <br />
          <h2 className="font-sans text-xl font-bold mb-2 sm:text-2xl">
            Travel
          </h2>
          <p>
            Anyone traveling to the event should read and abide by the <Link href={'https://ug.usembassy.gov/covid-19-information-page/'}><span className="text-blue-600">Travel Guidelines</span></Link> for domestic and international travel. We ask that participants respect fellow attendees and do everything possible to ensure an environment that is as safe as possible.
          </p>
  
          <br />
          <br />
          <h2 className="font-sans text-xl font-bold mb-2 sm:text-2xl">
            Ebola Update
          </h2>
          <p>
            Uganda was officially declared Ebola-free as of 11th January 2023. <Link href={'https://www.afro.who.int/countries/uganda/news/uganda-declares-end-ebola-disease-outbreak'}><span className="text-blue-600">More details...</span></Link>
          </p>
  
          <br />
          <br />
          <h2 className="font-sans text-xl font-bold mb-2 sm:text-2xl">
            Monitoring of the Requirements Will Continue
          </h2>
          <p>
          We have monitored COVID-related news and data since the pandemic started, and we will continue to do so moving forward. We continue to follow all Ministry of Health guidelines in addition to those of the local government and venue. International, national, regional, and local sources are closely watched and will result in a change of policy if warranted.
          </p>
  
          <br />
          <br />
          <h2 className="font-sans text-xl font-bold mb-2 sm:text-2xl">
            Commitment to Compliance
          </h2>
          <p>
            PyCon Uganda takes these Health & Safety Guidelines very seriously and will therefore enforce a 3-strike rule. Anyone who violates these guidelines on three separate accounts, such as continuing not to wear a proper mask or disregarding social distancing, is subject to removal from the conference.
          </p>
        </section>
      </>
    );
  }
  