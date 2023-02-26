
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Modal from '../src/components/Modal/Modal';
import { getISO, meetEnd } from '../src/utils/time';



export default function Home() {
  const timeSlot = [
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "16",
    "17",
    "18",
    "19",
  ]
  const [show, setShow] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [meetDuration, setMeetDuration] = useState('');
  const [bookingTime, setBookingTime] = useState([
    {
      start: "",
      end: ""
    }
  ]);
  const [meetTime, setMeetTime] = useState('');
  const [value, onChange] = useState(new Date());

  const currentTime = moment().format('hh:mm A');



  const handleBookNow = () => {
    setShow(true);
    let startTime = getISO(value, Number(meetTime));
    let endTime = meetEnd(startTime, Number(meetDuration));
    setBookingTime((prevState) => ({
      ...prevState,
      start: startTime,
      end: endTime
    }));
    setMeetDuration("");
    setShowCalendar(false);
  }
  console.log(bookingTime);

  const handleTimeSubmit = (e) => {
    e.preventDefault();
    setShowCalendar(true)
  }




  return (
    <section className='pb-20 px-2 sm:px-0 relative'>

      {show && <Modal setShow={setShow} startMeetTime={bookingTime.start} />}

      <div className="max-w-[780px] mx-auto px-8 pb-8 pt-[11px] bg-white border-[rgba(0,0,0,.2)] border  rounded-[16px]">

        <div className="text-center mb-[50px]">
          <h2 className="font-primary text-black text-[30px]  mb-[35px] leading-[42px] font-bold ">Time Now:  {currentTime}</h2>
          <div className="flex justify-center flex-col sm:flex-row gap-y-3 sm:gap-y-0 gap-x-[30px]">
            <h3 className=" text-[25px]  leading-[42px] text-black " >  Enter Meeting Duration(min)</h3>
            <form onSubmit={handleTimeSubmit} >
              <input onChange={(e) => setMeetDuration(e.target.value)} value={meetDuration} className='h-[46px] text-xl text-black font-bold w-[90px] text-center border outline-none border-[rgba(0,0,0,.8)] rounded-[7px]' type="text" placeholder="60" />
            </form>
          </div>
        </div>
        {showCalendar &&
          <div className="grid grid-cols-1 gap-y-10 sm:gap-y-0 sm:grid-cols-2 gap-x-[50px]">





            <div>
              <p className="font-secondary mb-2 italic text-lg leading-[26px] text-black font-normal">Select Date</p>
              <div className='border-[rgba(0,0,0,.2)] border rounded-[16px] p-6'>
                <Calendar
                  onChange={onChange}
                  value={value}
                  next2Label={false}
                  prev2Label={false}
                />
              </div>
            </div>

            <div>
              <p className="font-secondary mb-2 italic text-lg leading-[26px] text-black font-normal">Select Time Slot</p>
              <div className="flex flex-wrap gap-3">


                {timeSlot.map((item, index) => {

                  let time;
                  if (item.split(":") > 12) {
                    time = Number(item - 12);
                    time = time < 10 ? `0${time}:00 PM` : `${time}:00 PM`;
                  } else {
                    time = `${item}:00 AM`
                  }

                  return <button onClick={() => setMeetTime(item)} key={index} className="border font-poppins rounded-full px-4 py-2 text-black opacity-[0.4] text-base border-[rgba(0,0,0,.2)] hover:bg-[#FFE7DF] hover:border-[#FFE7DF] duration-300 hover:text-[#F25A2C] ">{`${time}`}</button>
                }

                )}




              </div>
            </div>
          </div>
        }

        <div className="mt-[76px]">
          <textarea className="w-full outline-none h-[170px] border-[rgba(0,0,0,.2)] border rounded-[16px] px-4 py-3 " placeholder="Additional Details"></textarea>

          <button onClick={handleBookNow}  className={`z-10 mt-[75px] bg-[#039800] text-base text-white font-gabriela w-[111px] h-[48px] flex items-center justify-center rounded-full ml-auto  ${ meetDuration ? "pointer-events-auto": "opacity-40 pointer-events-none"}`}>Book now</button>

        </div>

      </div>

      <div className="shape shape-yellow"></div>
      <div className="shape shape-blue"></div>

    </section>
  )
}
