export default function Venue() {
  return (
    <section className="my-14">
      <div className="py-[60px]">
        <div className=" px-4 py-4 items-center">
          <div className="mx-auto max-w-xl text-center space-y-4">
            <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
              Event Venue
            </h2>
            <p className="text-base p-0 font-medium">
              National ICT Innovation Hub, Kampala
            </p>
          </div>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=NATIONAL+ICT+INNOVATION+HUB,+Kampala,+Uganda&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
