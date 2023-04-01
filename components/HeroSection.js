export default function HeroSection() {
  return (
    <section>
      <div
        className="w-full h-screen bg-no-repeat bg-cover "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/v1cVrYd/Untitled.jpg)",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center text-white">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-6xl">
              <strong className="font-bold text-yellow-500">PYCON</strong>{" "}
              UGANDA
            </h1>

            <p className="mt-4 sm:text-lg sm:leading-relaxed">
              21 - 23 September, MoTIV, Kampala Uganda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
