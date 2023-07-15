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
      <section className="flex flex-col   items-center my-10 mx-10">
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          Welcome to the PyCon Uganda Merchandise page!
        </h2>
        <br />
        <p>Here are the instructions for purchasing merchandise:</p>
        <br />
        <br />
        <ol className="list-decimal list-outside md:list-outside flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 w-full">
            {" "}
            <h4 className="font-sans text-xl font-bold sm:text-l">
              <li>Mobile Money (MM) payments:</li>
            </h4>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-10">
              <li className="mb-10 mt-5 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 1</h3>
                <p className="text-sm">
                  Use your preferred mobile money service provider (e.g., MTN
                  Mobile Money, Airtel Money).
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 2</h3>
                <p className="text-sm">
                  Locate the merchant payment option within your mobile money
                  menu.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 3</h3>
                <p className="text-sm">
                  Enter the conference&apos;s merchant code:
                </p>
                <ul className="list-disc list-inside md:list-inside indent-4">
                  <li>
                    <span className="font-bold">Airtel</span> merchant code is{" "}
                    <span className="font-bold">6290564</span> with the names{" "}
                    <span className="font-bold">PYCON Uganda</span>.
                  </li>
                  <li>
                    <span className="font-bold">MTN</span> merchant code is{" "}
                    <span className="font-bold">178471</span> with the names{" "}
                    <span className="font-bold">Lanyero Deborah</span>.
                  </li>
                </ul>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 4</h3>
                <p className="text-sm">
                  Follow the prompts to complete the payment.
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 5</h3>
                <p className="text-sm">
                  Keep the proof of payment (transaction receipt) for
                  verification.
                </p>
              </li>
            </ol>
            <br />
          </div>
          <div className="lg:w-1/2 w-full">
            {" "}
            <h4 className="font-sans text-xl font-bold sm:text-l">
              <li>
                Purchase from The Innovation Village (TIV) Offices in Ntinda:
              </li>
            </h4>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="mb-10 mt-5 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 1</h3>
                <p className="text-sm">
                  Visit the TIV offices during working hours.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 2</h3>
                <p className="text-sm">
                  Go to the designated merchandise counter and find{" "}
                  <span className="font-bold">NORAH</span>.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 3</h3>
                <p className="text-sm">
                  Select the items you wish to purchase and provide the required
                  details to her.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 4</h3>
                <p className="text-sm">
                  Make the payment using the available payment methods (cash or
                  mobile money).
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <svg
                    className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <h3 className="font-medium leading-tight">Step 5</h3>
                <p className="text-sm">
                  Obtain a receipt as proof of your purchase.
                </p>
              </li>
            </ol>
          </div>
        </ol>
        <br />
        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">NOTE:</h2>
        <ul className="list-decimal list-inside md:list-inside indent-8">
          <li>
            For those using mobile money, share your proof of payment either
            with the Chairperson of the Organizing Committee or at the TIV
            offices in Ntinda to facilitate merchandise delivery.
          </li>
          <li>
            All merchandise will be purchased strictly on order basis, which
            means you will need to provide your preferred items and quantities
            before completing the payment.
          </li>
          <li>
            All participants will get a{" "}
            <span className="font-bold">FREE PyCon Uganda T-Shirt</span>.
          </li>
          <li>
            Should you have any questions or need further assistance, please
            contact the Chairperson of the Organizing Committee at{" "}
            <span className="font-bold">
              +256 781 666 410 / +256 757 866 121
            </span>
            .
          </li>
        </ul>

        <Card
          image="assets/images/swag/hoodie.jpg"
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
