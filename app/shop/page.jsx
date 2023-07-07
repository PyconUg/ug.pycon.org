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
              PyConUg Shop
            </h1>
          </div>

          <div>
            {" "}
            <p className="text-base p-4 font-medium">
              A one stop for all PyconUg Swag
            </p>
          </div>
        </div>
      </section>
      <section className=" md:mx-28 max-w-screen-xl my-10 text-justify text-lg mb-40">
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
