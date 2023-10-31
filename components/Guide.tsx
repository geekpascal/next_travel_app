import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} /> 
        <p className="uppercase regular-18 -mt-1 mb-3 text-geen-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">We want to be on each of your journeys seeking the satisfaction of seeing
             the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
             Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full 
      border-2 border-blue-500">
        <Image
        src="/boat.png"
        alt="boat"
        width={1440}
        height={580}
        className="w-full object-cover object-center 2xl:rounded-5xl"
        /> 
        <div className="absolute flex bg-white py-8 pl-5 pr-7 
        gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          
        </div>

      </div>
    </section>
  )
}

export default Guide