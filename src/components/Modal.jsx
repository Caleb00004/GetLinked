import React, { ReactNode } from 'react';

export default function Modal({
  isOpen,
  onClose,
  children,
  containerClassName = '',
  hideCloseButton = false,
  closeBtnClassName = '',
}) {

  if (!isOpen) return null;
  return (
    <div className="w-screen h-screen fixed top-0 right-0 b ottom-0 z-20">
      <div className=" backdrop-blur-[1px] bg-[#150E28] bg-opacity-[0.5] backdrop-brightness-[0.3] h-screen ">
        <div className=" items-center flex justify-center  h-screen ">
          {/* <div className="w-[90%] bg-white max-lg:w-[10%] max-lg:h-[100%] max-lg:overflow-scroll  max-lg:mt-[14rem]"> */}
          <div className={`bg-transparent border border-[#D434FE] w-[90%] md:w-[30em] ${containerClassName}`}>
            {!hideCloseButton && (
              <button
                type="button"
                className={`bg-red-500 text-white ${closeBtnClassName}`}
                onClick={onClose}
              >
                Close
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}