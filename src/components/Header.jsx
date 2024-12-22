import React from 'react'
import building from '../images/building.jpg'
import hod from '../images/EEE_HOD.a11fe2447f9a6438d433.jpg'
import logo from '../images/PTU_Logo-color.png'

function Header() {
  return (
    <>
        <header>
      <div class="header-eee">
        <div class="name-eee">
          <div class="logo absolute">
            <img src={logo} alt="" />
          </div>
          <div
            class="ptu-eee text-white ml-8 text-xl font-extrabold text-center"
          >
            DEPARTMENT OF ELECTRICAL AND ELECTRONIC ENGIEERING
          </div>
        </div>
        <div class="photo-eee">
          <div class="photo">
            <img src={building} alt="" class="building" />
          </div>

          
        </div>
        <div class="red-line bg-red-600"></div>
      </div>
      <div class="hod-eee flex">
            <img
              src={hod}
              alt=""
              class="hod"
            />
            <div class="text">
              <h2 class="font-extrabold text-2xl">Dr. K. Elanseralathan</h2>
              <h5 class="font-semibold text-xl">Professor and Head</h5>
              <a
                href="https://ptuniv.edu.in/eee/hod"
                class="text-white bg-red-600 font-medium hover:cursor-pointer"
              >
                HOD message
              </a>
            </div>
          </div>
    </header>
    </>
  )
}

export default Header