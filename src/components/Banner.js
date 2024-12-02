import React from 'react';
import foto from "../assets/coding.jpg"
import { TypeAnimation } from 'react-type-animation';
import myPdf from '../assets/pdf/pdfLuthfi.pdf';

const onButtonClick = () => {
  const pdfUrl = myPdf;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CV.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Banner = () => {
  return (
    <div className="section bg-black/40 py-8 px-16">
      <div className="flex container mx-auto justify-between gap-8">
        <div className="flex flex-col gap-y-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-white">Hi, I'm Luthfi</h1>
            <div className="mb-6 text-[36px]">
              <span>I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer Frontend",
                  2000,
                  "Developer Backend",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p>
              I am as Developer, specialized in .NET Core/MVC. I am passionate about Web Development & Data Science Enthusiast. I love to learn new technologies and I am always
              looking for new opportunities. Feel free to contact me if you have
              any questions.
            </p>

            <div className="flex mt-7 gap-4">
              <button className="btn btn-sm" onClick={onButtonClick}>
                Download My CV
              </button>
            </div>
          </div>
        </div>
        <img src={foto} alt="" className="w-[48%]" />
      </div>
    </div>
  );
};

export default Banner;
