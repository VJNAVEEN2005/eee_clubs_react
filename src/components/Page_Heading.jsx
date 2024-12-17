import React from "react";

function Page_Heading(props) {
  return (
    <>
      <div class="justify-center flex">
        <div class="text-4xl mb-10 md:text-6xl popup font-extrabold text-center text-red-600">
          {props.title}
        </div>
      </div>
    </>
  );
}

export default Page_Heading;
