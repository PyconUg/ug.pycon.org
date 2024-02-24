import ToBeAnnounced from "@/components/to-be-announced";

export default function Venue() {
  return (
    <section className="my-14">
      <div className="py-[60px]">
        <div className=" px-4 py-4 items-center space-y-8">
          <div className="mx-auto max-w-xl text-center space-y-4">
            <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
              Event Venue
            </h2>
          </div>
          <ToBeAnnounced />
        </div>
      </div>
    </section>
  );
}
