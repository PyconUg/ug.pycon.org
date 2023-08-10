'use client';

import { useState } from "react";
import FormData from 'form-data';

export default function SponsorsPage() {
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
      const response = await fetch('/api/sponsor', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setSuccessMessage('Thank you for showing interest to Sponsor PyCon Uganda 2023!');
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
              Sponsors
            </h1>
            <p className="mt-4 sm:text-xl text-justify mx-5">
              Your sponsorship helps keep PyCon Uganda affordable and accessible
              to a wide and diverse audience.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-8 md:mx-28 max-w-screen-xl my-10 text-justify text-lg">
        <h2 className="font-sans text-xl font-bold sm:text-2xl">
          Why should you sponsor PyCon Uganda ?
        </h2>

        <p className="py-2">
          Here are just some of the benefits of being a sponsor:
        </p>
        <ul className="list-disc list-inside md:list-inside">
          <li>visibility to potential new customers and/or employees</li>
          <li>
            elevating and establishing your corporate identity within the
            community
          </li>
          <li>
            present your services or products to the expected 1000 attendees
          </li>
          <li>
            enhance your company&#39;s reputation by supporting and investing in
            Python and the open-source community
          </li>
          <li>
            Depending on your level of sponsorship, packages may include
            complimentary conference passes, booth space, job boards and
            speaking opportunities.
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-center mb-6 pt-8 sm:text-4xl">
          Packages
        </h2>
        <p className="text-center font-bold">
          Sign up early to become one of our launch sponsors with extra
          exposure!
        </p>

        <div className="pt-6 grid lg:grid-cols-4 gap-6 xl:gap-x-12">
          <div className="mb-6 lg:mb-0 order-last">
            <div className="block rounded-lg shadow-lg bg-white h-full border border-[#CD7F32]">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-sm text-[#CD7F32] font-extrabold">
                  Bronze
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 1000</strong>
                </h3>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    In Press Releases
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    Distribute swag
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    On sponsors page
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    Links in videos
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    Free tickets
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0 order-3">
            <div className="block rounded-lg shadow-lg bg-white h-full border border-[#C0C0C0]">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-sm text-[#A0A0A0] font-extrabold">
                  Silver
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 2500</strong>
                </h3>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    Bronze package
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    On swag shirt
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    In website footer
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    1 Pull-up banner
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    1 announcement
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    YouTube CTA links
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0 order-2">
            <div className="block rounded-lg bg-white h-full border border-[#FFD700]">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-sm text-[#FFD700] font-extrabold">
                  <strong>Gold</strong>
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 4000</strong>
                </h3>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    Silver package
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    2 announcements
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    3-day offer period
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0 order-first">
            <div className="block rounded-lg shadow-lg bg-white h-full border border-[#A0B2C6]">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-sm text-[#A0B2C6] font-extrabold">
                  Platinum
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 5000</strong>
                </h3>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    Gold package
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    1 tutorial
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    3 announcements
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    3 Pull-up banners
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    Joint Press Release
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    Exhibition space
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                      ></path>
                    </svg>
                    10-minute spot
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Interested in sponsoring? We would love to hear from you.
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
                Name or Company or Organization
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
                placeholder="Make your interest known..."
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
      </section>
    </>
  );
}
