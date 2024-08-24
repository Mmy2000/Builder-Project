import {  Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ReactNode } from "react";


interface IProps {
  isOpen : boolean,
  closeModal : ()=> void,
  title? : string , 
  description? : string,
  children : ReactNode

}

export default function Modal({isOpen , closeModal ,description, title , children}:IProps) {
  

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
        __demoMode
      >
        {/* Backdrop */}
        <div className="fixed inset-0 backdrop-brightness-[0.2]" aria-hidden="true" />

        {/* Modal Content */}
        <div className="fixed  inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white shadow-xl p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h2"
                  className="text-base/7 font-medium text-black"
                >
                  {title}
                </DialogTitle>
              )}
              <p className="mt-2 text-sm/6 text-black/50">
                {description}
              </p>

              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
