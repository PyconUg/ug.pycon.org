"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  // function HandleSubmit(e) {
  //   window.location.href = `mailto:pycon-uganda+subscribe@googlegroups.com?subject=Subscribe%20to%20PyCon%20Uganda%20Newsletter`;
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      window.location.href = `mailto:pycon-uganda+subscribe@googlegroups.com?subject=Subscribe%20to%20PyCon%20Uganda%20Newsletter`;
      return toast.success("Thank you for subscribing to out Newsletter 💚", {
        position: "bottom-center",
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
      return toast.error(
        "There was a problem subscribing to our Newsletter: Retry",
        {
          position: "bottom-center",
          theme: "dark",
        }
      );
    }
  };
  return (
    <section>
      <div className='py-[60px]'>
        <div className='mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-60 lg:items-center'>
          <div className='mx-auto max-w-xl text-center'>
            <h2 className='text-4xl text-[#0e1b4d] font-bold uppercase'>
              Newsletter
            </h2>
            <p className='text-base p-0 mb-4 font-medium'>
              Please subscribe to receive updates.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='justify-center'>
                <div className='col-span-10 block md:flex'>
                  <input
                    type='text'
                    className='border rounded-3xl py-2 px-10 m-2 border-pyconug-lightBlue'
                    placeholder='Enter your Email'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <button
                    type='submit'
                    className='hover:bg-pyconug-lightBlue border-2 hover:text-white border-pyconug-lightBlue py-2 px-10 m-2  rounded-3xl'
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
