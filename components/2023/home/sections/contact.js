"use client";
import { useRef } from "react";
import { PYCONUG_EMAIL } from "@/2023/utils/constants";
import { ToastContainer, toast } from "react-toastify";
export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.success("Your email has been sent successfully 🤗");
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.log(error);
      toast.error("There was a problem sending the email");
    }
  };
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:block lg:h-85 lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center m-10">
          <div className="mb-0 text-[#112363]">
            <i className="bi bi-geo-alt"></i>
            <h3 className="text-lg uppercase font-bold">Address</h3>
            <address>
              NWSC International Resource Center, Bugolobi (IREC)
              <br /> Plot M11 Old Portbell Road, Bugolobi, <br />
              P. O. Box 7053, Kampala, Uganda
            </address>
          </div>
          {/* <div className="mb-0 text-[#112363]">
            <i className="bi bi-phone"></i>
            <h3 className="text-lg uppercase font-bold">Phone Number</h3>
            <p>
              <a href="tel:+ 256 701 599 722">+ 256 701 599 722</a>
            </p>
          </div> */}
          <div className="mb-0 text-[#112363]">
            <i className="bi bi-envelope"></i>
            <h3 className="text-lg uppercase font-bold">Email</h3>
            <p>
              <a href={`mailto:${PYCONUG_EMAIL}`}>{PYCONUG_EMAIL}</a>
            </p>
          </div>
        </div>

        <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-sm">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Prospective sponsors can contact us at <span className="font-semibold">{PYCONUG_EMAIL}</span>
          </p>
          {/* <form
            onSubmit={handleFormSubmit}
            action={`mailto:${PYCONUG_EMAIL}`}
            method='post'
            encType='multipart/form-data'
            className='space-y-8'
          >
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                required
                ref={nameRef}
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                required
                ref={emailRef}
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
              >
                Message
              </label>
              <textarea
                id='message'
                rows='6'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Leave your comment...'
                ref={messageRef}
              ></textarea>
            </div>
            <button
              type='submit'
              className='hover:bg-pyconug-lightBlue border-2 hover:text-white border-pyconug-lightBlue py-2 px-10 m-2  rounded-3xl'
            >
              Send message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}
