import React from 'react'

const Section1 = () => {
  return (<div className="px-10 pt-15 pb-10 relative z-10  text-white w-screen min-h-screen flex items-center flex-col gap-30 border">
    <div className=" w-full text-left flex flex-col gap-4">
          <h1 className="text-6xl">
            Wellcom to
            <br />
            Land Records
          </h1>
          <h1>manage propety record with ease</h1>
          <div className="flex gap-5">
            <button className=" py-4 px-6 bg-[#1111da] rounded">
              customer login
            </button>
            <button className="py-4 px-6 bg-gray-800/50 rounded">
              or regester here
            </button>
          </div>
        </div>

        <div className=" px-10 w-full flex justify-center gap-10">
          <div className="p-5 bg-gray-800/50 rounded">
            <h1 className="text-2xl">ICON View Your Records</h1>
            <h1 className="text-s">
              easy acess and view your land
              <br /> ownership and related records online
            </h1>
          </div>
          <div className="p-5 bg-gray-800/50 rounded">
            <h1 className="text-2xl">ICON Sarch Properties</h1>
            <h1 className="text-s">
              Find property detail and ownership
              <br />
              information quickly
            </h1>
          </div>
          <div className="p-5 bg-gray-800/50 rounded">
            <h1 className="text-2xl">ICON Secure & Confidential</h1>
            <h1 className="text-s">
              your information is protected with
              <br /> top-level security measures
            </h1>
          </div>
        </div></div>

  )
}

export default Section1
