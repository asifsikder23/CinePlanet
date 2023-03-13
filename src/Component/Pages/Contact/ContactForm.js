import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4e7yc6c",
        "template_6wirvdh",
        form.current,
        "WLBUcsmdPV_waLpF9"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your message sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="">
      <section className="mx-5 lg:mx-0 py-20 shadow-xl">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div>
            <img src="https://i.pinimg.com/originals/80/b4/c8/80b4c8eca5291255732a9d4e3eeb8826.gif" alt="" />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder=""
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-base-100 border py-3 px-2 mt-2"
                name="user_name"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder=""
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-base-100 border py-3 px-2 mt-2"
                name="user_email"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-base-100 border px-2border py-3 px-2 mt-2"
                name="message"
                required
              ></textarea>
            </label>
            <input type="submit" value="Submit" className="btn text-white bg-red-600 hover:bg-red-800" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
