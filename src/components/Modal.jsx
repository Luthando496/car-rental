import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosInformationCircle } from "react-icons/io";

const Modal = forwardRef(({children},ref) => {

    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open(){
            dialog.current.showModal()
        }
    }
    })

  return createPortal(
    <dialog ref={dialog} className='w-full md:w-[70vw] lg:w-[60vw] backdrop:bg-black/50 bg-white mx-auto mt-20 pt-[2px] px-[2px]'>
        <div className="w-full py-3 bg-yellow-300 flex justify-between items-center px-8">
        <h3 className="text-2xl font-bold text-white uppercase">Complete Reservation</h3>
        <LiaTimesSolid className='text-2xl text-white' />
        </div>

        <div className="py-5 bg-yellow-100 px-10 space-y-3">
            <h3 className="text-xl font-bold text-yellow-500 flex items-center gap-3"><IoIosInformationCircle />Upon completing this reservation enquiry, you will receive:</h3>
            <p className="font-semibold font-roboto text-gray-500 text-lg">Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number</p>
        </div>
        
      
    </dialog>,document.getElementById('modal-root')
  )
})

export default Modal
