import {  Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Buttons from "./Buttons";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Buttons
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-black focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
        width="w-fit"
      >
        Open dialog
      </Buttons>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black"
              >
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-black/50">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <Buttons
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                  width="w-fit"
                >
                  Got it, thanks!
                </Buttons>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
