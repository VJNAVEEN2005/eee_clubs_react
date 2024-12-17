import React from "react";

function Club_Details(props) {
  return (
    <>
      <div class="event-title">
        <div class="text-red-600 text-3xl md:text-4xl ml-4 font-semibold popup mt-5">
          {props.title}
        </div>

        <div className="flex">
          <div class="text-red-600 text-2xl md:text-3xl ml-4 font-semibold popup mt-5">
            Mentor:
          </div>
          <a
            className="text-black text-2xl md:text-3xl ml-4 font-semibold popup mt-5"
            href={props.mentor_link}
          >
            {props.mentor}
          </a>
        </div>

        <div class="change-position justify-center flex mt-5">
          <div class="ml-0 md:ml-10">
            <h2 class="font-normal text-xl">
              {/* <ol class="ps-5 mt-2 ml-6 space-y-1 list-decimal list-inside"> */}

              <div class="relative overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-black">
                  <tr className="text-xl text-white uppercase bg-red-500">
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Year
                    </th>
                  </tr>

                  {props.data.map((data) => {
                    return (
                      <tr className="bg-red-100 border-b hover:bg-red-50">
                        <th className="px-6 py-4">{data.name}</th>
                        <th className="px-6 py-4">{data.year}</th>
                      </tr>
                    );
                  })}
                </table>
              </div>
              <br />
              {props.details}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Club_Details;
