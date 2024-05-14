export default function Schedule() {
  return (
    <section className="py-60 bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-60 lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
            Event Schedule
          </h2>
          <p className="text-base pt-2 mb-10 font-medium">Here is our event</p>
          <ul
            className="block text-center mb-30 space-y-8"
            role="tablist"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li className="inline-block">
              <a
                className="rounded-[50px] py-[10px] px-[100px] font-semibold bg-[#ffe135] text-white"
                href="#day-1"
                role="tab"
                data-bs-toggle="tab"
              >
                Day 1
              </a>
            </li>
            <li className="inline-block">
              <a
                className="rounded-[50px] py-[10px] px-[100px] font-semibold bg-[#0e1b4d] text-white"
                href="#day-2"
                role="tab"
                data-bs-toggle="tab"
              >
                Day 2
              </a>
            </li>
            <li className="inline-block">
              <a
                className="rounded-[50px] py-[10px] px-[100px] font-semibold bg-[#0e1b4d] text-white"
                href="#day-3"
                role="tab"
                data-bs-toggle="tab"
              >
                Day 3
              </a>
            </li>
          </ul>

          <h3 className="mt-6">
            Event schedules for each day will be announced soon!
          </h3>
        </div>
      </div>
    </section>
  );
}
