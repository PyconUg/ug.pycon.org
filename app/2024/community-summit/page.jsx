import Link from "next/link";


export default function CommunitySummit() {
  return (
    <>
      <section className="flex bg-cyan-900 text-zinc-300 justify-center">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Python Community Summit Schedule
            </h1>
            <p className="mt-4 sm:text-xl mx-5">
              Come take part in amazing community events
            </p>
            <p className="mt-4 sm:text-xl mx-5 font-bold">
              Date: 9th October 2024
            </p>
          </div>
        </div>
      </section>


      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <div class="container mx-auto">
          <h2 className="text-3xl font-bold sm:text-5xl text-black">
            About Python Community Summit
          </h2>
          <p className="mt-4 sm:text-xl mx-5">
            The Python Community Summit is an annual event that brings together Python enthusiasts from around the world. It provides a platform for community members to connect, share knowledge, and collaborate on various Python-related topics. The summit features keynote sessions, workshops, panel discussions, and networking opportunities. Whether you are a beginner or an experienced Python developer, the Python Community Summit offers something for everyone. Join us and be a part of this vibrant and inclusive community!
          </p>
        </div>
      </section>



      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <div class="container mx-auto">
          <table class="border-separate w-full mt-4" style={{ borderSpacing: '0.5rem' }}>
            <thead>
              <tr>
                <th class="p-4 bg-white rounded shadow">Time</th>
                <th class="p-4 bg-white rounded shadow">Activity</th>
                <th class="p-4 bg-white rounded shadow">Facilitator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>10:00 to 11:00</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Welcome remarks and Introductions</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Deborah Lanyero</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>11:00 to 12:00</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Keynote Session</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Deborah Lanyero</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>12:00 to 12:30</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>From Workshops to Masterminds: Building a thriving Python Community with the Python Ho User Group.</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Kafui Alordo</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>12:30 to 13:00</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Empowering Diverse Communities with Python: Insights from Mombasa, Kenya.</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Chris N. Achinga</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>13:00 to 14:00</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-gray-500 text-white" colSpan="2">
                  <div class="p-2 font-bold text-base">
                    <h4>Lunch break</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>14:00 to 14:30</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Harnessing Collective Intelligence: Developing and Utilizing Data Science Communities</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Bernice Omiunu</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>14:30 to 15:00</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>OpenSource at Pykampala community</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Tobias Higenyi</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>15:00 to 15:30</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Discussion on Community way forward</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Deborah Lanyero</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>15:30 to 16:00</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Discussion on Community way forward</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white">
                  <div class="p-2 text-black">
                    <h4>Deborah Lanyero</h4>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="rounded shadow bg-cyan-700">
                  <div class="rounded text-center text-white p-2">
                    <h4>16:00 to 16:30</h4>
                  </div>
                </td>
                <td class="rounded shadow bg-white" colSpan={'2'}>
                  <div class="p-2 text-black">
                    <h4>Closing Remarks and End</h4>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


      </section >
    </>
  );
}
