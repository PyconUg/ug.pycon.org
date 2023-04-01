import Link from "next/link";

export default function BuyTicketSection() {
    return (
        <section className="py-[60px] bg-[#f6f7fd]">
            <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-60 lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">Buy Tickets</h2>
                    <p className="text-base p-0 font-medium">Tickets can be bought by following the link below.</p>
                    <div className="py-12">
                        <Link className="bg-[#ffe135] text-white font-bold py-3 px-10 m-2 border rounded-3xl" href={"/sponsors"}>
                            Buy a Ticket
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}