import Link from "next/link";

export default function TravelGuidePage() {
  return (
    <>
      <section className="flex bg-cyan-900 text-zinc-300 justify-center">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Travel Guide
            </h1>
            <p className="mt-4 sm:text-xl mx-5">
              Welcome Travelers!
            </p>
          </div>
        </div>
      </section>

      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <p className="py-2">
        We are excited to welcome you to PyCon Uganda 2024. We are excited to have you join us for this year&#39;s conference in Kampala. Here&#39;s some important information to make your trip smooth and enjoyable.
        </p><br/>
        <h3 className="font-sans text-xl font-bold sm:text-2xl">
          UGANDA - The Pearl of Africa
        </h3>

        <p className="py-2">
        Uganda, often referred to as the &#34;Pearl of Africa,&#34; is an East African nation that provides a captivating backdrop for PyCon Uganda. Just as Uganda&#39;s diverse landscapes and wildlife make it a true gem, PyCon Uganda brings together a diverse community of Python enthusiasts, creating a unique and enriching experience. Join us in the heart of the &#34;Pearl of Africa&#34; for PyCon Uganda, where technology and the natural world harmonize to create something truly exceptional.
        </p>
        <br/>
        <h3 className="font-sans text-xl font-bold sm:text-2xl">
          Accommodation
        </h3>

        <p className="py-2">
        We have identified a variety of accommodation options in Kampala, to suit different preferences and budgets. Here are some suggestions
        </p>

        <ul className="list-disc list-inside md:list-inside">
          <li className="ml-10">
        <Link target="_blank" className="underline font-bold" href="https://www.agoda.com/dolphin-suites/hotel/kampala-ug.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2023-09-21&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=USD&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=-1&los=2&searchrequestid=cbb48257-b7f2-4f9e-9dae-4bc237821002">
          Dolphin Suites
        </Link> (2.7km to venue) ~ 69$ - 90$ </li>
          <li className="ml-10">
        <Link target="_blank" className="underline font-bold" href="https://www.booking.com/Share-INaU9I">
          Silver Springs Hotel
        </Link> (2.1km to venue) ~ 80$ - 90$ </li>
          <li className="ml-10">
        <Link target="_blank" className="underline font-bold" href="https://spekeapartments.com">
          Speke Apartments
        </Link> (3.1km to venue) ~ 295$ - 531$ </li>
          <li className="ml-10">
        <Link target="_blank" className="underline font-bold" href="https://www.airbnb.com/rooms/933843370371672796?guests=1&adults=1&s=67&unique_share_id=68dbbfdd-c846-428d-8c36-6e0ad5b577f5">
          AirBnB 2 Private Rooms in a Condo
        </Link> (7.4km to venue) ~ 30$ - 35$ </li>
        
        </ul>
        <br/><br />
        <h3 className="font-sans text-xl font-bold sm:text-2xl">
          Transportation
        </h3>

        <p className="py-2">
        There are several means you can use to travel to the PyCon Uganda venue as well as in Kampala and these include Minibus taxis(Matatus), Motorcycles(Boda Bodas), Uber taxi, among others.

        For more information, <Link target="_blank" className="underline text-blue-500 font-medium" href="https://www.kampalacityguide.com/getting-around.html#:~:text=Minibus%20taxis%20(Matatus)%20are%20the,taken%20direct%20to%20your%20destination.">see here</Link>
        </p>
      </section>
    </>
  );
}
