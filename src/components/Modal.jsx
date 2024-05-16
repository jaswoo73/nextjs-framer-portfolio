import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import ScrollSvg from "./ScrollSvg";

const Modal = ({ img }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClickOutsideModal = (e) => {
    if (e.target.id === "modal") setShowModal(false);
  };
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 hover:bg-pink-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View Certificate{img.length > 1 && "s"}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={handleClickOutsideModal}
            id="modal"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl z-100 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-200 outline-none focus:outline-none z-[100] md:max-h-[78vh] max-h-[53vh] sm:max-h-[70vh]">
                {/*header*/}
                <div className="flex items-start justify-between p-1 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <IoIosCloseCircle />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-y-auto bg-scroll">
                  {img.length > 1 && (
                    <div className="absolute bottom-10 right-10 animate-pulse">
                      <ScrollSvg />
                    </div>
                  )}
                  {img.map((singleImg, index) => (
                    <img
                      src={singleImg}
                      alt="certificate"
                      className="mb-4 object-cover"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-[40] bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
