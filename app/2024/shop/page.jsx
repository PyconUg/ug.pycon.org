import { PURCHASE_INSTRUCTIONS } from "@/components/shop/data";
import Step from "@/components/shop/step";
import Card from "@/components/ui/Card";
import {
  MM_PURCHASE_STEPS,
  QUICKET_PURCHASE_STEPS,
} from "@/components/shop/data";
import { PYCON_MERCHANDIZE_URL } from "@/2023/utils/constants";

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
              {MM_PURCHASE_STEPS?.map((step, index) => (
                <Step
                  key={index}
                  step={step?.step}
                  action={step?.action}
                  secondaryActions={step?.secondaryActions}
                />
              ))}
            </ol>
            <br />
          </div>
          <div className="lg:w-1/2 w-full">
            {" "}
            <h4 className="font-sans text-xl font-bold sm:text-l">
              <li>
                Purchase your online ticket from Quicket:
              </li>
            </h4>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {QUICKET_PURCHASE_STEPS?.map((step, index) => (
                <Step
                  key={index}
                  step={step?.step}
                  action={step?.action}
                  secondaryActions={step?.secondaryActions}
                />
              ))}
            </ol>
          </div>
        </ol>
        <br />
        <br />
        <h2 className="font-sans text-xl font-bold sm:text-2xl">NOTE:</h2>
        <ul className="list-decimal list-inside md:list-inside indent-8 max-w-4xl">
          {PURCHASE_INSTRUCTIONS.map((instruction, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: instruction }}
            ></li>
          ))}
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
