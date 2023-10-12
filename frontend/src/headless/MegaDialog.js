import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import { Fragment } from 'react'
const MegaDialog = ({ isOpen, setIsOpen, content, buttonText}) =>{
    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center"
        >
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
        <Dialog.Panel className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            {content}
            <div className='inline-flex items-center justify-center'>
            <button className="inline-flex justify-center rounded-md border border-transparent bg-zinc-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setIsOpen(false)}>{buttonText}</button>
            </div>
        </Dialog.Panel>
        </Transition.Child>
        </Dialog>
      </Transition>
);};
export default MegaDialog;