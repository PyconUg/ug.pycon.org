export default function HeroSection() {
  return (
    <section>
      <div
        className="w-full h-screen bg-no-repeat bg-cover "
        style={{
          backgroundImage:
            "url(https://user-images.githubusercontent.com/65954740/227708763-5d987ff4-564e-42e0-a8f8-2d609611fccb.jpg)",
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
