import React from 'react'

const Section3 = () => {
  return (
    <div className="px-10 pt-10 pb-10 relative z-10 text-white w-screen min-h-screen flex items-center flex-col justify-between border  ">
      <div >
          <h1 className="text-center text-s text-gray-400">
            <h1 className="text-4xl text-white">About Us</h1>
            <br />
            Improving Land Record for a Better Tommorw <br /> SIH project
            designned to efficent and transparent property managment
          </h1>
        </div>
        <div className="flex items-center  flex-col gap-10 justify-center border-t-3 ">
          <h1 className="text-3xl  text-center">Meet the Team</h1>
          <div >
            <div className="flex flex-wrap gap-8 items-center  justify-center">
              {/* Honey Singh */}
              <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg w-125 hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/honey.jpg"
                  alt="Honey Singh"
                  className="w-full  object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white">
                  Honey Singh
                </h3>
                <p className="text-gray-400">Team Lead / Frontend Developer</p>
              </div>

              {/* Chitti Bhathinda */}
              <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg w-125 hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/chitti.jpg"
                  alt="Chitti Bhathinda"
                  className="w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white">
                  Chitti Bhathinda
                </h3>
                <p className="text-gray-400">Lead Backend Developer</p>
              </div>

               {/* Ritish */}
              <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg w-72 hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/ritish.jpg"
                  alt="Ritish"
                  className="w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white">Ritish</h3>
                <p className="text-gray-400">Presentation Pro</p>
              </div>


              {/* Himanshu */}
              <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg w-72 hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/himanshu.jpg"
                  alt="Himanshu"
                  className="w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white">Himanshu</h3>
                <p className="text-gray-400">Helping Developer</p>
              </div>

              {/* Neav */}
              <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg w-72 hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/neav.jpg"
                  alt="Neav"
                  className="w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white">Neav</h3>
                <p className="text-gray-400">Helping Developer</p>
              </div>

             
            </div>
          </div>
        </div>
        <div>
          <h1>Togather,building a better future for land record managment</h1>
        </div>
    </div>
  )
}

export default Section3
