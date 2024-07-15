"use client";
import { useState } from "react";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const textRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      textRef.current.value = "";
      window.location.href = `mailto:pycon-uganda+subscribe@googlegroups.com?subject=Subscribe%20to%20PyCon%20Uganda%20Newsletter`;
      toast.success("Thank you for subscribing to our Newsletter 💚");
    } catch (error) {
      toast.error("There was a problem subscribing to our Newsletter: Retry");
    }
  };

  return (
    <section>
      <div className="">
        <div className="mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-4xl text-[#0e1b4d] font-bold uppercase">
              Newsletter
            </h2>
            <p className="text-base p-0 mb-4 font-medium">
              Please subscribe to receive updates.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="justify-center">
                <div className="col-span-10 block md:flex">
                  <input
                    type="text"
                    className="border rounded-3xl py-2 px-10 m-2 border-pyconug-lightBlue"
                    placeholder="Enter your Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    ref={textRef}
                  />
                  <button
                    type="submit"
                    className="hover:bg-pyconug-lightBlue border-2 hover:text-white border-pyconug-lightBlue py-2 px-10 m-2  rounded-3xl"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" theme="dark" />
    </section>
  );
}
