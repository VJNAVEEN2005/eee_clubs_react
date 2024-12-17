import React from 'react'
import logo_black from '../images/ptu-logo-black-white.png'
import no_ragging from '../images/say-no-ragging.png'

function Footer() {
  return (
    <>
    <footer>
      <div className="footer-gray p-10">
        <div className="logo">
          <img src={logo_black} alt="" />
          <img src={no_ragging} alt="" />
        </div>

        <div className="space"></div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4524616814515!2d79.85504551412637!3d12.012340438450485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536446022cfb0b%3A0x5c0d300c8187a76b!2sPuducherry%20Technological%20University!5e0!3m2!1sen!2sin!4v1644327742512!5m2!1sen!2sin"
            width="100%"
            height="200"
            loading="lazy"
           // style="border: 0px"
          ></iframe>
          <p className="text-yellow-400 font-medium">
            Ragging is a criminal offence and the culprits will attract punitive
          </p>
          <p className="text-yellow-400 font-medium">
            action as mentioned in the
            <a
              className="underline"
              href="https://www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf"
              >UGC regulations</a
            >
          </p>
          <p className="text-yellow-400 font-medium">
            National Anti-ragging helpline (24X7 Toll Free): 1800-180-5522 ||
          </p>
          <p className="text-yellow-400 font-medium">helpline@antiragging.in</p>
          <p className="text-green-200 font-medium">
            Nodal Officers' contact: dean.students@ptuniv.edu.in || 99443 37963
            ||
          </p>
          <p className="text-green-200 font-medium">94434 93599</p>
        </div>

        <div className="text">
          <p className="text-white">Address:</p>
          <p className="text-white">
            East coast Road, Pillaichavady, Puducherry, 605 014.
          </p>
          <p className="text-white">Phone No: 0413-2655281-288</p>
          <p className="text-white">Fax: 2655101</p>
          <p className="text-white">Email Id: info@ptuniv.edu.in</p>
          <div className="space"></div>
          <p className="text-yellow-400 font-medium">
            24X7 Women helpline: (0413)2655281 Ext: 347
          </p>
          <p>
            <a href="https://ptuniv.edu.in/sgr" className="text-white"
              >Student's Grievances Form</a
            >
          </p>
          <p className="text-white">Follow us on</p>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/PTU.Pondicherry/"
              className="text-blue-500"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/puducherry_tech_university/"
              className="text-pink-500"
            >
              <svg
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/channel/UC_KX66VEKIHunrHSsQwcNEw"
              className="text-red-500"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className="bg-red-600 text-white items-center text-center p-2 font-medium"
      >
        Developed by PTU-EEE's Web Team
      </div>
    </footer>
    </>
  )
}

export default Footer