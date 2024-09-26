import Link from "next/link";
import Image from "next/image";
import SponsorList from "../sponsors-list";
import { SPONSORS_2024 } from "@/2024/utils/constants";

export default function Sponsors() {
  return (
    <section className="bg-[#f6f7fd] relative">
      <div className="mx-auto max-w-container px-4 relative">
        <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-2 lg:gap-6">
          <div className="lg:col-span-12 md:col-span-12">
            <span className="h-16 lg:h-32 block"></span>
            <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-[100%] gap-2 lg:gap-6">
              <div className="lg:col-span-5 md:col-span-5">
                <div className="sticky top-48">
                  <h1 className="font-sans font-bold text-4xl leading-10 lg:text-5xl lg:leading-16 text-black text-center md:text-left">
                    Sponsors!
                  </h1>
                  <span className="h-8 lg:h-12 block"></span>
                  <p className="font-sans break-words transition-colors font-medium whitespace-pre-wrap select-auto text-md leading-7 lg:text-2md lg:leading-8 text-grey-900 text-center md:text-left">
                    With over 200+ attendees expected, this is your chance to
                    boost brand visibility, connect with top Python
                    professionals, generate leads, and showcase your commitment
                    to the Python community. Encourage your company to sponsor
                    and be a part of this dynamic event!
                  </p>
                  <span className="h-8 lg:h-12 block"></span>
                  <Link
                    className="inline-flex items-center uppercase select-none  border cursor-pointer transition-colors hover:bg-[#1a9baa] bg-[#177e89] border-[#177e89] py-5 px-8 justify-center w-full md:w-auto"
                    href="/2024/sponsors/why-sponsor"
                    target="_blank"
                  >
                    <span className="font-sans break-words transition-colors font-semibold whitespace-nowrap select-auto text-base leading-1 lg:text-md lg:leading-2 text-white">
                      Sponsor us!
                    </span>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 md:col-span-6 lg:col-start-7 md:col-start-7 pt-10">
                {Object.entries(SPONSORS_2024).map(([key, sponsors]) => (
                  <div key={key}>
                    <h2 className="font-sans font-semibold text-3md leading-8 lg:text-xl lg:leading-11 text-black">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h2>
                    <span className="h-2 block"></span>
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-[100%] gap-2 lg:gap-4">
                      {sponsors.map((sponsor, index) => (
                        <a
                          key={index}
                          className="bg-cream border border-black relative"
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener"
                        >
                          <div>
                            <div className="pb-[50%] lg:pb-[60%]"></div>
                            <div className="absolute inset-10 lg:inset-6">
                              <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    <span className="h-8 lg:h-12 block"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="h-16 lg:h-32 block"></span>
      </div>
    </section>
  );
}
