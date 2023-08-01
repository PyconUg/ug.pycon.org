import Image from "next/image";
import TitleSection from "@/components/speakers/title-section";
import PageSection from "@/components/ui/sections/page-section";

export default function SpeakersPage() {
  return (
    <>
      <section className=" bg-cyan-900 text-zinc-300">
        <div className="flex flex-col justify-center items-center h-[35vh]">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Speakers
            </h1>
          </div>

          <div>
            {" "}
            <p className="text-base p-4 font-medium">
              See who will be speaking at PyCon Uganda 2023
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-16">
        <div className="flex flex-col md:justify-between md:flex-row md:space-x-10 max-w-6xl">
          <div className="w-1/3 space-y-6 text-center">
            <div className="w-96 h-96 mx-auto rounded-full overflow-hidden">
              <Image
                src={"/assets/images/swag/hoodie.jpg"}
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>{" "}
          <div className="w-2/3">
            <TitleSection
              name="John Doe"
              position="Software Engineer at Pycon Uganda"
            />
            <PageSection text="Vision Vestibulum  . In consequat dui in dolor suscipit, quis hendrerit dui cursus.  Vestibulum vitae consectetur felis. Aliquam tincidunt eget elit id fermentum. Phasellus lacus turpis, sollicitudin eget turpis sed, rutrum porttitor nisi. Objectives The objectives of the School are; To Nam at dolor non magna blandit consectetur at ac lectus. Donec maximus elit in lorem fermentum euismod. Morbi pretium, massa a malesuada viverra, libero ligula feugiat metus, vel feugiat velit lorem non felis. Nullam tempor pulvinar sem in accumsan. Cras scelerisque elementum lorem vitae sagittis. Curabitur dictum risus in tincidunt varius. Cras bibendum a dui in malesuada. Donec a venenatis dolor, scelerisque pellentesque felis. Maecenas vulputate magna in turpis sagittis, sed consectetur lorem consectetur. Duis mollis, risus vitae fermentum mattis, nisi massa mattis Courses Fusce tincidunt neque nibh, vel porttitor orci faucibus nec. Nunc est nunc, pretium quis orci et, laoreet pretium ex. Nam tristique venenatis odio sit amet pellentesque. In consequat dui in dolor suscipit, quis hendrerit dui cursus. Suspendisse ut accumsan sem. Sed tincidunt convallis sem in sollicitudin. Vestibulum vitae consectetur felis. Aliquam tincidunt eget elit id fermentum. Phasellus lacus turpis, sollicitudin eget turpis sed, rutrum porttitor nisi." />
          </div>
        </div>
      </section>
    </>
  );
}
