import { useState } from "react";
import RevealAnimation from "../RevealAnimation";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };
  return (
    <div className="relative">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="lg:w-3/4 font-poppins flex flex-col gap-6"
      >
        <RevealAnimation>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-secondary-red-500 ml-2  block text-sm font-bold text-primary-blue-800">
              Adınız
            </span>
            <input
              type="text"
              name="text"
              className="mt-1 px-3 py-2 bg-secondary-white border-2 shadow-sm border-secondary-black placeholder-slate-400 focus:outline-none focus:border-primary-blue-400 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1"
              placeholder="John"
              required
            />
          </label>
        </RevealAnimation>

        <RevealAnimation>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-secondary-red-500 ml-2  block text-sm font-bold text-primary-blue-800">
              Soyadınız
            </span>
            <input
              type="text"
              name="text"
              className="mt-1 px-3 py-2 bg-secondary-white border-2 shadow-sm border-secondary-black placeholder-slate-400 focus:outline-none focus:border-primary-blue-400 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1"
              placeholder="Doe"
              required
            />
          </label>
        </RevealAnimation>
        <RevealAnimation>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-secondary-red-500 ml-2  block text-sm font-bold text-primary-blue-800">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-secondary-white border-2 shadow-sm border-secondary-black placeholder-slate-400 focus:outline-none focus:border-primary-blue-400 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1"
              placeholder="you@example.com"
              required
            />
          </label>
        </RevealAnimation>
        <RevealAnimation>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-secondary-red-500 ml-2  block text-sm font-bold text-primary-blue-800">
              Nömrəniz
            </span>
            <input
              type="tel"
              name="tel"
              className="mt-1 px-3 py-2 bg-secondary-white border-2 shadow-sm border-secondary-black placeholder-slate-400 focus:outline-none focus:border-primary-blue-400 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1"
              placeholder="+994 012 345 67 89"
              required
            />
          </label>
        </RevealAnimation>
        <RevealAnimation>
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-secondary-red-500 ml-2  block text-sm font-bold text-primary-blue-800">
              Mesajınız
            </span>
            <textarea
              required
              name=""
              id=""
              placeholder="Mesajınızı buraya qeyd edə bilərsiniz"
              className="h-36 mt-1 px-3 py-2 resize-none bg-secondary-white border-2 shadow-sm border-secondary-black placeholder-slate-400 focus:outline-none focus:border-primary-blue-400 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1"
            ></textarea>
          </label>
        </RevealAnimation>

        <RevealAnimation>
          <input
            type="submit"
            value="Göndər"
            className="
            w-full h-16 rounded-2xl bg-primary-blue-400 font-poppins
            text-center text-secondary-white text-xl 
            capitalize  tracking-wider
            transition-all duration-300  cursor-pointer
            hover:border-2 hover:border-primary-blue-400
            hover:bg-secondary-white hover:text-primary-blue-400"
          />
        </RevealAnimation>
      </form>
      {showModal && (
        <div className="h-72 flex flex-col items-end  p-8  fixed left-1/3 top-40 rounded-lg bg-primary-blue-100 z-[1055] w-1/3  overflow-y-auto overflow-x-hidden outline-none">
          <div className=" cursor-pointer" onClick={closeModal}>
            <img src="./closeBtn.svg" className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <img src="./done.gif" className="w-32 h-24 " />
            <h5 className="text-primary-blue-800 tracking-wide text-xl font-medium">
              Mesajınız göndərildi!
            </h5>
            <p className="text-sm font-normal tracking-wider text-center text-primary-blue-800">
              Ən qısa müddət ərzində sizinlə detallı əlaqə saxlanılacaq..
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
