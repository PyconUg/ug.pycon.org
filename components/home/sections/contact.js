'use client';

import { useState } from "react";
import FormData from 'form-data';
import { PYCONUG_EMAIL } from "@/utils/constants";

export default function Contact() {
  const form = new FormData();
  const [formData, setFormData] = useState(form);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    formData.append('visitorname', event.target.visitorname.value);
    formData.append('email', event.target.email.value);
    formData.append('message',event.target.message.value);

    // Display formData in console (for debugging)
    //console.log([...formData]);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setSuccessMessage('Your message has been received, we shall reach out soon');
        setErrorMessage('');
      } else {
        setErrorMessage('Something went wrong, please try again');
        setSuccessMessage('');
      }
    } catch (err) {
      setErrorMessage('An error occurred while submitting the form');
      setSuccessMessage('');
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
            <address>To Be Announced Soon</address>
          </div>
          <div className="mb-0 text-[#112363]">
            <i className="bi bi-phone"></i>
            <h3 className="text-lg uppercase font-bold">Phone Number</h3>
            <p>
              <a href="tel:+ 256 701 599 722">+ 256 701 599 722</a>
            </p>
          </div>
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
            Reach out to us in case of queries.
          </p>

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <form
            onSubmit={handleFormSubmit}
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="visitorname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="visitorname"
                name="visitorname"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Send us a message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="hover:bg-pyconug-lightBlue border-2 hover:text-white border-pyconug-lightBlue py-2 px-10 m-2  rounded-3xl"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
