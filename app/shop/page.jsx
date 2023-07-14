import Card from "@/components/ui/Card";
import { PYCON_MERCHANDIZE_URL } from "@/utils/constants";

export default function Shop() {
  return (
    <>
      {" "}
      <section className=" bg-cyan-900 text-zinc-300">
        <div className="flex flex-col justify-center items-center h-[35vh]">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              PyCon Ug Shop
            </h1>
          </div>

          <div>
            {" "}
            <p className="text-base p-4 font-medium">
              A one stop for all Pycon Ug Swag
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center my-10 mx-10">
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          Welcome to the PyCon Uganda Merchandise page! 
        </h2>
        <br/>
        <p>Here are the instructions for purchasing merchandise:</p>
        <br/><br/>
        <ol className="list-decimal list-inside md:list-inside">
          <h4 className="font-sans text-xl font-bold sm:text-l"><li>Mobile Money (MM) payments:</li></h4>
            <ul className="list-disc list-inside md:list-inside indent-8">
              <li>Use your preferred mobile money service provider (e.g., MTN Mobile Money, Airtel Money).</li>
              <li>Locate the merchant payment option within your mobile money menu.</li>
              <li>Enter the conference&apos;s merchant code:</li>
              <ul className="list-disc list-inside md:list-inside indent-16">
                <li><span class="font-bold">Airtel</span> merchant code is <span class="font-bold">6290564</span> with the names <span class="font-bold">PYCON Uganda</span>.</li>
                <li><span class="font-bold">MTN</span> merchant code is <span class="font-bold">178471</span> with the names <span class="font-bold">Lanyero Deborah</span>.</li>
              </ul>
              <li>Follow the prompts to complete the payment.</li>
              <li>Keep the proof of payment (transaction receipt) for verification.</li>
            </ul>
            <br/>
          <h4 className="font-sans text-xl font-bold sm:text-l"><li>Purchase from The Innovation Village (TIV) Offices in Ntinda:</li></h4>
            <ul className="list-disc list-inside md:list-inside indent-8">
              <li>Visit the TIV offices during working hours.</li>
              <li>Go to the designated merchandise counter and find <span class="font-bold">NORAH</span>.</li>
              <li>Select the items you wish to purchase and provide the required details to her.</li>
              <li>Make the payment using the available payment methods (cash or mobile money).</li>
              <li>Obtain a receipt as proof of your purchase.</li>
            </ul>
        </ol>
        <br/><br/>
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          NOTE:
        </h2>
          <ul className="list-disc list-inside md:list-inside indent-8">
            <li>For those using mobile money, share your proof of payment either with the Chairperson of the Organizing Committee or at the TIV offices in Ntinda to facilitate merchandise delivery.</li>
            <li>All merchandise will be purchased strictly on order basis, which means you will need to provide your preferred items and quantities before completing the payment.</li>
            <li>All participants will get a <span class="font-bold">FREE PyCon Uganda T-Shirt</span>.</li>
            <li>Should you have any questions or need further assistance, please contact the Chairperson of the Organizing Committee at <span class="font-bold">+256 781 666 410 / +256 757 866 121</span>.</li>
          </ul>

        <Card
          image="shop/hoodie.jpg"
          title="PyCon Uganda Hoodie"
          price="UGX 50,000"
          tags="5.0"
          ctaLabel="Buy Now"
          ctaHref={PYCON_MERCHANDIZE_URL}
        />
      </section>
    </>
  );
}
