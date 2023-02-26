import { monthStrConvert } from '../../utils/time';
import Image from 'next/image';
import React from 'react'

const Modal = ({ setShow, startMeetTime }) => {




  const date_obj = new Date(startMeetTime);
  const year = date_obj.getFullYear();
  let month = date_obj.getMonth();
  const date = date_obj.getDate();
  const hour = date_obj.getHours();

  month = monthStrConvert(month);





  return (
    <div className='fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/50 z-10'>
      <div className='w-[585px] h-[390px] bg-white rounded-[16px] text-center flex items-center flex-col justify-center'>
        <div><Image src="/check.svg" className='mx-auto' height={83} width={83} alt="" /></div>
        <div className='space-x-[6px]'>
          <h3 className='italic mt-[22px] font-secondary  text-[40px] leading-[48px] text-black'>Great!</h3>
          <p className='!font-secondary'>Your Booked Time</p>
          <p className='!font-secondary'>{`Date: ${date} ${month} ${year} Time: ${hour}.00`}</p>
        </div>
        <button onClick={() => setShow(false)} className=' mt-[22px] text-white  bg-[#F25A2C] w-[111px] h-[48px] flex justify-center items-center rounded-full mx-auto'>Ok</button>
      </div>
    </div>
  )
}

export default Modal;