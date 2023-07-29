import { PURCHASE_INSTRUCTIONS } from "@/components/shop/data";
import Step from "@/components/shop/step";
import Card from "@/components/ui/Card";
import {
  MM_PURCHASE_STEPS,
  PYCON_MERCHANDIZE_URL,
  TIV_PURCHASE_STEPS,
} from "@/components/shop/data";

export default function Shop() {
  return (
    <>
      {" "}
      <section className=" bg-cyan-900 text-zinc-300">
        <div className="flex flex-col justify-center items-center h-[35vh]">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Django Girls
            </h1>
          </div>

          <div>
            {" "}
            <p className="text-base p-4 font-medium">
             Django Girls
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
