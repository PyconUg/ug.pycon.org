"use client";

import { useState } from "react";

export default function Newsletter() {
  const formdata = new FormData();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    formdata.append('email', event.target.email.value);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formdata,
      });
      if (response.ok) {
        setSuccessMessage('Congrats Pythonista, You are now ready to receive all updates!');
        setErrorMessage('');
      } else {
        setErrorMessage('Something went wrong, please try again');
        console.log(response);
        setSuccessMessage('');
      }
    } catch (err) {
      setErrorMessage('An error occurred while submitting the form');
      setSuccessMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="py-[60px]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-60 lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
              Newsletter
            </h2>
            <p className="text-base p-0 mb-4 font-medium">
              Please subscribe to receive updates.
            </p>

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <form onSubmit={handleFormSubmit}>
              <div className="justify-center">
                <div className="col-span-10 block md:flex">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded-3xl py-2 px-10 m-2 border-pyconug-lightBlue"
                    placeholder="Enter your Email"
                  />
                  <button
                    type="submit" disabled={isLoading}
                    className="hover:bg-pyconug-lightBlue border-2 hover:text-white border-pyconug-lightBlue py-2 px-10 m-2  rounded-3xl"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
