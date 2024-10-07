import { PYCONUGANDA_MERCH_2024 } from "@/2024/utils/constants";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "PyCon Uganda 2024 Hoodie",
    price: "USh80,000.00",
    imageSrc:"/assets/images/swag/newhoodie.png",
    link: PYCONUGANDA_MERCH_2024
  },
  {
    name: "PyCon Uganda 2023 Hoodie",
    price: "USh50,000.00",
    imageSrc:"/assets/images/swag/hoodie.jpg",
    link: PYCONUGANDA_MERCH_2024
  }
];

export default function Shop() {
  return (
    <div className="flex flex-col ">
      <section className="w-full py-8 ">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          {products.map((product, index) => (
            <div key={index} className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <Image
                src={product.imageSrc}
                width="550"
                height="550"
                alt="Product"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover border"
              />
              <div className="flex flex-col items-start space-y-4 justify-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  {product.name}
                </h1>
                <p className="  md:text-xl ">
                  {product.price}
                </p>
                <div className="flex items-center justify-center">
                  <Link
                    href={product.link}
                    className="bg-pyconug-darkBlue text-white rounded-lg py-3 px-6"
                    target="_blank"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}