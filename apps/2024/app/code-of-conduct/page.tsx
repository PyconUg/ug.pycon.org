import Link from 'next/link';

export default function CodeOfConduct() {
  return (
    <>
      {" "}
      <section className="flex bg-cyan-900 text-zinc-300">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Code of Conduct
            </h1>
            <p className="mt-4 sm:text-xl text-justify mx-5">
              PyCon Uganda is a community conference intended for networking and
              collaboration in the developer community. We value the
              participation of each member of the Python community and want all
              attendees to have an enjoyable and fulfilling experience.
              Accordingly, all attendees are expected to show respect and
              courtesy to other attendees throughout the conference and at all
              conference events. To make clear what is expected, all staff,
              attendees, speakers, exhibitors, organizers, and volunteers at any
              PyCon event are required to conform to the following Code of
              Conduct, as set forth by the Python Software Foundation.
              Organizers will enforce this code throughout the event.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          OUR COMMUNITY
        </h2>
        <p>
          Members of the Python community are open, considerate, and respectful.
          Behaviours that reinforce these values contribute to a positive
          environment, and include:
        </p>
        <ul className="list-disc list-inside md:list-inside">
          <li>
            Being open. Members of the community are open to collaboration,
            whether it&#39;s on PEPs, patches, problems, or otherwise.
          </li>
          <li>
            Focusing on what is best for the community. We&#39;re respectful of the
            processes set forth in the community, and we work within them.
          </li>
          <li>
            Acknowledging time and effort. We&#39;re respectful of the volunteer
            efforts that permeate the Python community. We&#39;re thoughtful when
            addressing the efforts of others, keeping in mind that oftentimes
            the labor was completed simply for the good of the community.
          </li>
          <li>
            Being respectful of differing viewpoints and experiences. We&#39;re
            receptive to constructive comments and criticism, as the experiences
            and skill sets of other members contribute to the whole of our
            efforts.
          </li>
          <li>
            Showing empathy towards other community members. We&#39;re attentive in
            our communications, whether in person or online, and we&#39;re tactful
            when approaching differing views.
          </li>
          <li>
            Being considerate. Members of the community are considerate of their
            peers – other Python users.
          </li>
          <li>
            Being respectful. We&#39;re respectful of others, their positions, their
            skills, their commitments, and their efforts.
          </li>
          <li>
            Gracefully accepting constructive criticism. When we disagree, we
            are courteous in raising our issues.
          </li>
          <li>
            Use welcoming and inclusive language. We&#39;re accepting of all who
            wish to take part in our activities, fostering an environment where
            anyone can participate and everyone can make a difference.
          </li>
        </ul>

        <br />
        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          OUR STANDARDS
        </h2>
        <p>
          Every member of our community has the right to have their identity
          respected. The Python community is dedicated to providing a positive
          experience for everyone, regardless of age, disability, physical appearance, body
          size, ethnicity, nationality, race, religion (or lack thereof),
          education, or socioeconomic status.
        </p>

        <br />
        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          INAPPROPRIATE BEHAVIOUR
        </h2>
        <p>Examples of unacceptable behavior by participants include:</p>
        <ul className="list-disc list-inside md:list-inside">
          <li>Harassment of any participants in any form</li>
          <li>Deliberate intimidation, stalking or following</li>
          <li>
            Logging or taking screenshots of online activity for harassment
            purposes
          </li>
          <li>
            Publishing other&#39;s private information, such as a physical or
            electronic address, without explicit permission
          </li>
          <li>Violent threats or language directed against another person</li>
          <li>
            Incitement of violence or harassment towards any individual,
            including encouraging a person to commit suicide or to engage in
            self-harm
          </li>
          <li>
            Creating additional online accounts in order to harass another
            person or circumvent a ban
          </li>
          <li>
            Sexual language and imagery in online communities or in any
            conference venue, including talks
          </li>
          <li>
            Insults, put-downs, or jokes that are based upon stereotypes, that
            are exclusionary, or that hold others up for ridicule
          </li>
          <li>Excessive swearing</li>
          <li>Unwelcome sexual attention or advances</li>
          <li>
            Unwelcome physical contact, including simulated physical contact
            (eg, textual descriptions like “hug” or “backrub”) without consent
            or after a request to stop
          </li>
          <li>
            Pattern of inappropriate social contact, such as requesting/assuming
            inappropriate levels of intimacy with others
          </li>
          <li>
            Sustained disruption of online community discussions, in-person
            presentations, or other in-person events
          </li>
          <li>Continued one-on-one communication after requests to cease</li>
          <li>
            Other conduct that is inappropriate for a professional audience
            including people of many different backgrounds
          </li>
          <li>
            Community members asked to stop any inappropriate behavior are
            expected to comply immediately.
          </li>
        </ul>

        <br />
        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          WEAPONS POLICY
        </h2>
        <p>
          No weapons are allowed at PyCon or Python Software Foundation events.
          Weapons include but are not limited to explosives (including
          fireworks), guns, and large knives such as those used for hunting or
          display, as well as any other item used for the purpose of causing
          injury or harm to others. Anyone seen in possession of one of these
          items will be asked to leave immediately, and will only be allowed to
          return without the weapon.
        </p>

        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          CONSEQUENCES
        </h2>
        <p>
          If a participant engages in behavior that violates this code of
          conduct, the Python community Code of Conduct team may take any action
          they deem appropriate, including warning the offender or expulsion
          from the community and community events with no refund of event
          tickets. The full list of consequences for inappropriate behavior is
          listed in the Enforcement Procedures.
        </p>
        <p>
          Thank you for helping make this a welcoming, friendly community for
          everyone.
        </p>

        <br />
        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          SCOPE PSF/PYCON EVENTS
        </h2>
        <p>
          This Code of Conduct applies to the following people at PyCon Uganda:
        </p>
        <ul className="list-disc list-inside md:list-inside">
          <li>
            Staff, Speakers, Panelists, Tutorial or workshop leaders, Poster
            presenters, People invited to meetings or summits, Exhibitors,
            Organizers, Volunteers & All attendees
          </li>
        </ul>
        <p>
          The Code of Conduct applies in official venue event spaces, including:
        </p>
        <ul className="list-disc list-inside md:list-inside">
          <li>
            Exhibit hall or vendor tabling area, Panel and presentation rooms,
            Hackathon or sprint rooms, Tutorial or workshop rooms, Poster
            session rooms, Summit or meeting rooms, Staff areas, Con suite, Meal
            areas, Party suites, Walkways, hallways, elevators and stairs that
            connect any of the above spaces
          </li>
        </ul>
        <p>
          The Code of Conduct applies to interactions with official event
          accounts on social media spaces and phone applications, including:
        </p>
        <ul className="list-disc list-inside md:list-inside">
          <li>
            comments made on official conference phone apps, comments made on
            event video hosting services, comments made on the official event
            hashtag or panel hashtags & Event organizers will enforce this code
            throughout the event.
          </li>
        </ul>

        <br />
        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          PSF/PYCON ONLINE SPACES
        </h2>
        <p>
          This Code of Conduct applies to the following online spaces; All PyCon
          mailing lists hosted on domain, The PyCon Uganda registration and room
          sharing site, Any other online space administered by PyCon Uganda or
          the Python Software Foundation.{" "}
        </p>
        <p>
          This Code of Conduct applies to the following people in official PyCon
          Uganda or Python Software Foundation online spaces; Admins of the
          online space, Maintainers, Reviewers, Contributors and All community
          members
        </p>

        <br />
        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          CONTACT INFORMATION
        </h2>
        <p>
          If you believe that someone is violating the code of conduct, or have
          any other concerns, ease contact a member of the event staff
          immediately. In case of a conflict of interest, you can individually
          contact:
        </p>
        <ul className="list-disc list-inside md:list-inside">
          <li>
            Hassan Kibirige, Chairperson -{" "}
              <Link className="font-bold hover:underline" href="mailto:has2k1@gmail.com">has2k1@gmail.com</Link>
          </li>
          <li>
            Kirabo Atuhurira, Chairperson -{" "}
            <Link className="font-bold hover:underline" href="mailto:kiraboismyname@gmail.com">kiraboismyname@gmail.com</Link>
          </li>
        </ul>
        <p>
          Conference staff will be happy to help participants contact
          hotel/venue security or local law enforcement, provide escorts, or
          otherwise assist any attendee to feel safe for the duration of the
          conference. We value your attendance.
        </p>
        <br />
        <p>
          <b>LICENSE:</b> This Code of Conduct is licensed under the Creative Commons
          Attribution-ShareAlike 3.0 Unported License.
        </p>
        <p>
          <b>ATTRIBUTIONS:</b> This Code of Conduct was forked from the example policy
          from the Geek Feminism wiki, created by the Ada Initiative and other
          volunteers, which is under a Creative Commons Zero license
        </p>
        <br />
        <p className="italic font-sans text-xl font-medium sm:text-2xl">
          Language used here was adapted from the following Codes of Conduct:
        </p>
        <ul className="list-disc list-inside md:list-inside">
          <li>
            Affect Conf Code of Conduct, licensed under a Creative Commons
            Attribution-ShareAlike 3.0 Unported License.
          </li>
          <li>
            Citizen Code of Conduct, licensed under a Creative Commons
            Attribution-ShareAlike 3.0 Unported License.
          </li>
          <li>
            Contributor Covenant version 1.4, licensed Creative Commons
            Attribution 4.0 License.
          </li>
          <li>
            Django Project Code of Conduct, licensed under a Creative Commons
            Attribution 3.0 Unported License.
          </li>
          <li>
            PyCon 2018 Code of Conduct, licensed under a Creative Commons
            Attribution 3.0 Unported License.
          </li>
          <li>Rust Code of Conduct</li>
        </ul>
      </section>
    </>
  );
}
