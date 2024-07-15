import { CONFERENCE_DATE, VENUE } from "@/2024/utils/constants";

export default function About() {
  return (
    <section className="py-10 bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 lg:flex">
        <div className="mx-auto max-w-xl text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            About The Conference
          </h2>
          <p className="mt-2 sm:leading-relaxed">
            PyCon Uganda is one of the Python Conferences you can attend in
            World Wide. We shall talk about Python applications in data, web and
            other domains. This is a platform where Python users, developers,
            library developers and companies that use Python come together.
          </p>
          <div className="flex flex-col md:flex-row justify-between my-8">
            <div>
              <h3 className="mt-4 text-2xl font-bold sm:text-xl">WHERE</h3>
              <p className="mt-2 sm:leadung-relaxed max-w-md">
                NWSC International Resource Center
                <br />
                Bugolobi (IREC)
                <br />
                Plot M11 Old Portbell Road, Bugolobi
                <br /> P. O. Box 7053, Kampala, Uganda
              </p>
            </div>
            <div>
              <h3 className="mt-4 text-2xl font-bold sm:text-xl">WHEN</h3>
              <p className="mt-2 sm:leadung-relaxed">{CONFERENCE_DATE}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
