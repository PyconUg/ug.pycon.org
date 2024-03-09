export default function PrivacyPolicy() {
    return (
        <>
        {" "}
        <section className="flex bg-cyan-900 text-zinc-300">
          <div className="flex py-10 lg:items-center">
            <div className="md:mx-10 text-center mx-4">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                Privacy Policy
              </h1>
              <p className="mt-4 sm:text-xl text-justify mx-5">
              We respect your personal data.
              <br /><br />
              Under no circumstances do we sell, rent or distribute your personal information (including your email address, name, or anything else you submit) to third parties. We strive to ask as little personal information as possible throughout the website, both speakers and other participants. Speakers are asked to submit additional personal information, part of which will become public with their consent.
              </p>
            </div>
          </div>
        </section>
       <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg mb-40">
          <h2 className="font-sans pb-4 text-xl font-bold sm:text-2xl">
            SPAM-Free Warranty
          </h2>
          <p>
          We will not share your email to other entities. We respect your choices. If you subscribe to our newsletter or mailing-list, your email address will be used only to deliver list messages, and will not otherwise be used or shared. You can unsubscribe at any time by following the link at the bottom of each email.
          If you opt-in to receive job offerings from our sponsors that are looking for hires, no personal information will be shared with those sponsors.
          </p>
        </section>        
        </>
    );
}