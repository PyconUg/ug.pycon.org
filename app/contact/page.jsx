'use client';

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState(new FormData());
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
        setSuccessMessage('Your message has been received, we shall reach out soon!');
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
    <>
      <section className="flex bg-cyan-900 text-zinc-300">
        <div className="flex py-10 lg:items-center">
          <div className="md:mx-10 text-center mx-4">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Contact Us
            </h1>
            <p className="mt-4 sm:text-xl text-justify mx-5">
              Interested in sponsoring or have a question? We would love to hear
              from you.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          
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
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
