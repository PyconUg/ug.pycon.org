"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function HandleSubmit(e) {
    window.location.href = `mailto:pycon-uganda+subscribe@googlegroups.com?subject=Subscribe%20to%20PyCon%20Uganda%20Newsletter`;
  }

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
            <form onSubmit={HandleSubmit}>
              <div className="justify-center">
                <div className="col-span-10 block md:flex">
                  <input
                    type="text"
                    className="border rounded-3xl py-2 px-10 m-2"
                    placeholder="Enter your Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="bg-[#ffe135] text-white py-2 px-10 m-2 border rounded-3xl"
                  >
                    Subscribe
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
