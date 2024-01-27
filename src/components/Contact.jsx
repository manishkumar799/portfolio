import React from "react";
import TextStroke from "./TextStroke";
import { MdPerson, MdCall } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import Swal from "sweetalert2";
import axios from "axios";

function Contact() {
  const [email, setEmail] = React.useState();
  const [message, setMessage] = React.useState();
  const [subject, setSubject] = React.useState();
  const [name, setName] = React.useState();

  const handleClick = (e) => {
    const data = {
      email: email,
      name: name,
      subject: subject,
      message: message,
    };

    sendDataRequest(data);
  };

  const sendDataRequest = (data) => {
    axios
      .post("https://sheetdb.io/api/v1/hu3tbfdoa4vpr", data)
      .then((response) => {
        if (response.data.created) {
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            toast: true,
            position: "top-end",
            timer: 3000,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="contact" className="pb-16">
      {" "}
      <TextStroke Title={"Contact"} TitleHeading={"Get in Touch"} />
      <div className="flex flex-col sm:flex-row gap-12 justify-center">
        <div className="sm:w-[60%]">
          <h2 className="text-xl text-slate-50">Message me</h2>
          <div className="w-full flex flex-col sm:flex-row justify-between gap-5 py-6">
            <div className="sm:w-[50%] py-6 sm:py-0">
              <input
                type="text"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                className="text-md  block w-full p-2.5"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sm:w-[50%]">
              <input
                type="email"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                className="text-md block w-full p-2.5"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="py-6">
            <input
              type="text"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className=" text-md   block w-full p-2.5"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="py-6">
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-md "
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="pt-6">
            <button
              className="bg-[rgb(0,157,102)] hover:bg-[rgb(0,180,102)] text-white py-3 px-6"
              onClick={handleClick}
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="sm:w-[40%] text-[#7c7c7c]">
          <h2 className="text-slate-50 text-xl">Contact Info</h2>
          <p className="py-5">
            Open communication is the key to unlocking great opportunities. Feel
            free to contact me, and let's embark on a journey of innovation and
            collaboration.
          </p>
          <div className="flex gap-8 pt-5">
            <div className="h-full flex flex-col">
              <div className="pb-5">
                <MdPerson size="40" color="#009d66" />
              </div>
              <div className="pb-5">
                <FaMapLocationDot size="40" color="#009d66" />
              </div>
              <div className="pb-5">
                <MdCall size="40" color="#009d66" />
              </div>
              <div className="">
                <SiMinutemailer size="40" color="#009d66" />
              </div>
            </div>
            <div className="border-1 border-l-[2px] border-[#282828] pl-5 text-sm">
              <div>
                <div className="py-2">
                  <p className="text-slate-50">Name</p>
                  <p>Manish Kumar Pandit</p>
                </div>
                <div className="py-2">
                  <p className="text-slate-50">Location</p>
                  <p>Kolkata, West Bengal, IN</p>
                </div>
                <div className="py-2">
                  <p className="text-slate-50">Call Me</p>
                  <p>+91944133009</p>
                </div>
                <div className="py-2">
                  <p className="text-slate-50">Email Me</p>
                  <p className="break-all">manish.kp.dev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
