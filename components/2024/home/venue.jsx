import { VENUE } from "@/2024/utils/constants";
import ToBeAnnounced from "@/components/to-be-announced";

export default function Venue() {
  return (
    <section className="my-14 ">
      <div className="py-[60px]">
        <div className=" px-4 py-4 items-center">
          <div className="mx-auto max-w-xl text-center space-y-4">
            <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
              Event Venue
            </h2>
            <p className="text-base p-0 font-medium">{VENUE}</p>
          </div>
          <div className="mt-4 h-[70vh]">
           
            <iframe
            className="h-full"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255343.7221070121!2d32.503981005639126!3d0.34579336940804684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbf4beb20c8d%3A0x8c7cb58f226dba4f!2sNWSC%20International%20Resource%20Centre!5e0!3m2!1sen!2sug!4v1709913542613!5m2!1sen!2sug"
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
