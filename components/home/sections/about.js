export default function About() {
  return (
    <section className="bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex">
        <div className="mx-auto max-w-xl text-white">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            About The Conference
          </h2>
          <p className="mt-2 sm:leading-relaxed">
            PyCon Uganda is one of the Python Conferences you can attend in
            World Wide. We shall talk about Python applications in data, web and
            other domains. This is a platform where Python users, developers,
            library developers and companies that use Python come together.This
            is going to be the <b>1st ever</b> PyCon in Uganda!
          </p>
          <div className="flex flex-col md:flex-row justify-between my-8">
            <div>
              <h3 className="mt-4 text-2xl font-bold sm:text-xl">WHERE</h3>
              <p className="mt-2 sm:leadung-relaxed">To Be Announced Soon</p>
            </div>
            <div>
              <h3 className="mt-4 text-2xl font-bold sm:text-xl">WHEN</h3>
              <p className="mt-2 sm:leadung-relaxed">21 - 23 September, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
