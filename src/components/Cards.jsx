import React from "react";

function Cards() {
  return (
    <div className="w-full bg-[#FEFCE7] min-h-screen flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-20 gap-5">
      {/* Left big card */}
      <div className="cardcontainer w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[60vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#CC8F62] flex items-center justify-center">
          <img
            className="w-24 sm:w-28 lg:w-32"
            src="https://imgs.search.brave.com/kJSy9T7gL3rGjQ9s6VTbkCty8ZhE3WwpYe_8wdcR-r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/bG9nb3ZlY3Rvci5j/b20vdXBsb2Fkcy9p/bWFnZXMvMjAyNS8w/NC9sZy02N2VmODk3/NGQ1OWY0LUFtdWwu/d2VicA"
            alt="amul logo"
          />
          <button className="absolute px-3 py-0.5 border-2 border-red-600 text-red-600 rounded-full left-4 sm:left-6 lg:left-8 bottom-4 sm:bottom-6 lg:bottom-8 text-xs sm:text-sm">
            ©1946-2025
          </button>
        </div>
      </div>

      {/* Right two cards */}
      <div className="cardcontainer flex flex-col sm:flex-row gap-5 w-full lg:w-1/2 h-auto lg:h-[60vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-full sm:w-1/2 h-[35vh] sm:h-[50vh] lg:h-full bg-[#3D1B0E]">
          <img
            className="w-24 sm:w-28 lg:w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 border-2 text-white uppercase rounded-full left-4 sm:left-6 lg:left-8 bottom-4 sm:bottom-6 lg:bottom-8 text-xs sm:text-sm">
            Rating 5.0 on Clutch
          </button>
        </div>

        <div className="card relative flex items-center justify-center rounded-xl w-full sm:w-1/2 h-[35vh] sm:h-[50vh] lg:h-full bg-black">
          <img
            className="w-24 sm:w-28 lg:w-32"
            src="https://imgs.search.brave.com/cL7VjHdxQ7_IhSmwlvSHD5qH5gP7z4lVUoDycN1QX_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDE5Lzc2/Ni8yMDIvbm9uXzJ4/L2FtdWwtbG9nby1h/bXVsLWljb24tdHJh/bnNwYXJlbnQtbG9n/by1mcmVlLXBuZy5w/bmc"
            alt=""
          />
          <button className="absolute px-6 sm:px-8 lg:px-9 py-1 border-2 text-white uppercase rounded-full left-4 sm:left-6 lg:left-10 bottom-4 sm:bottom-6 lg:bottom-6 text-xs sm:text-sm">
            Pehla Pyaar <br /> Amul Pyaar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
