export default function SpeakerSection() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-90 lg:items-center">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase mb-10">Event Speakers</h2>
                    <p className="text-base p-0 font-medium">We shall start with guidelines for the Call For Proposals(CFP). Peruse through so that you can prepare before we officially open submissions!<br />This will be a formal invitation for individuals or organizations to submit proposals to speak at the Pycon Uganda conference. It allows conference organizers to identify a diverse range of potential speakers with unique perspectives and experiences. This will help to ensure that the conference features a well-rounded program that is engaging and relevant to attendees. This will also be crucial in promoting diversity and inclusion in the conference program and encourage the sharing of new ideas and approaches.</p>
                <h6 className="text-center text-[#0e1b4d]">You can view our <a className="buy-tickets scrollto" href="/assets/docs/Call_For_Proposals.pdf" target="_blank" className="text-[#0e1b4d] ml-0">Call For Proposals</a> guidelines.</h6>
                </div>                
            </div>
        </section>
    );
}