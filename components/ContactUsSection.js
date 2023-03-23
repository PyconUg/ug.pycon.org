export default function ContactUsSection() {
    return (
        <section>
            <div className="py-[60px]">
                <div className="mx-auto max-w-screen-xl px-4 py-16 lg:block lg:h-85 lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">Contact Us</h2>
                    <p className="text-base p-0 font-medium">Reach out to us in case of queries</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center m-10">
                        <div>
                            <div className="mb-0 text-[#112363]">
                                <i className="bi bi-geo-alt"></i>
                                <h3 className="text-lg uppercase font-bold">Address</h3>
                                <address>Kampala</address>
                            </div>
                        </div>

                        <div>
                            <div className="mb-0 text-[#112363]">
                                <i className="bi bi-phone"></i>
                                <h3 className="text-lg uppercase font-bold">Phone Number</h3>
                                <p><a href="tel:+155895548855">+256 777 111 111</a></p>
                            </div>
                        </div>

                        <div>
                            <div className="mb-0 text-[#112363]">
                                <i className="bi bi-envelope"></i>
                                <h3 className="text-lg uppercase font-bold">Email</h3>
                                <p><a href="mailto:info@example.com">pyconug@pycon.org</a></p>
                            </div>
                        </div>

                    </div>
                    <form method="POST" action="#" className="block justify-center space-y-8 items-center mb-10">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                            <input type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block" placeholder="name@email.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                            <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block" placeholder="Let us know how we can help" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                            <textarea className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block" placeholder="Leave a comment"></textarea>
                        </div>
                        <button type="submit" className="bg-[#ffe135] text-white py-2 px-6 m-2 border rounded-3xl">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}