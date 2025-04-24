import Link from "next/link";
import React from "react";
import Layout from "./components/Layout";

const Home = () => {
  return (
    <div className="bg-[#121212] p-4 sm:p-5">
      <div className="border border-[#F5F5F5] max-w-screen-lg mx-auto text-white rounded-3xl px-4 sm:px-8 md:px-16 pt-6">
        <Layout>
          {/* Hero Section */}
          <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold">
              Software
            </h1>
            <div className="flex space-x-2 justify-between items-center w-full sm:w-auto">
              <button className="bg-[#f5f5f5] w-full sm:w-80 rounded-3xl p-2 text-black italic">
                Projects
              </button>
              <button className="bg-[#f5f5f5] w-10 h-10 rounded-3xl text-black flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Second Row */}
          <div className="mt-8 sm:mt-10 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-15">
            <p className="text-md font-normal text-[#808080] w-full sm:w-80">
              My goal is to{" "}
              <span className="italic text-[#f5f5f5]">
                write maintainable, clean
              </span>{" "}
              and{" "}
              <span className="italic text-[#f5f5f5]">Understandable code</span>{" "}
              to process development was enjoyable.
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold">
              Engineer
            </h1>
          </div>

          {/* Social Links */}
          <div className="mt-8 sm:mt-12 flex overflow-x-auto pb-4 gap-2 sm:justify-between sm:max-w-screen-md sm:mx-auto">
            <button className="border border-[#F5F5F5] rounded-3xl p-2 min-w-32 flex justify-center items-center gap-2 text-[#808080] italic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              Github
            </button>
            <button className="border border-[#F5F5F5] rounded-3xl p-2 min-w-32 flex justify-center items-center gap-2 text-[#808080] italic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin text-white"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              Linkedin
            </button>
            <button className="border border-[#F5F5F5] rounded-3xl p-2 min-w-32 flex justify-center items-center gap-2 text-[#808080] italic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp text-white"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              Whatsapp
            </button>
            <button className="border border-[#F5F5F5] rounded-3xl p-2 min-w-32 flex justify-center items-center gap-2 text-[#808080] italic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook text-white"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              Facebook
            </button>
            <button className="border border-[#F5F5F5] rounded-3xl p-2 min-w-32 flex justify-center items-center gap-2 text-[#808080] italic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              Instagram
            </button>
          </div>

          {/* About Me */}
          <div className="my-10 sm:my-20 flex flex-col sm:flex-row justify-between items-start gap-4">
            <p className="text-sm">... /About me ...</p>
            <p className="text-lg font-normal text-[#808080] w-full sm:w-[60%]">
              Hello! I'm a{" "}
              <span className="italic text-[#f5f5f5]">Software Engineer.</span>{" "}
              <br />
              More then{" "}
              <span className="italic text-[#f5f5f5]">
                {" "}
                3 years 8 months
              </span>{" "}
              experience.
            </p>
          </div>

          {/* Skills & Photo */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6">
            <div className="w-full sm:w-[70%]">
              <div className="bg-[#F5F5F5] rounded-3xl w-full sm:w-[70%] p-4 space-y-2">
                <p className="text-md font-semibold text-[#808080]">
                  Front-end
                </p>
                <p className="text-sm font-medium text-black flex flex-wrap gap-x-2">
                  <span>TypeScript</span>
                  <span>/</span>
                  <span>React</span>
                  <span>/</span>
                  <span>Redux Toolkit</span>
                  <span>/</span>
                  <span>NextJs</span>
                  <span>/</span>
                  <span>GraphQL</span>
                  <span>/</span>
                  <span>React Native</span>
                </p>
              </div>
              <div className="border border-[#F5F5F5] rounded-3xl w-full sm:w-[35%] p-4 space-y-2 my-3">
                <p className="text-md font-semibold text-[#808080]">Styles</p>
                <p className="text-sm font-medium text-[#c3c3c3] flex flex-wrap gap-x-2">
                  <span>Tailwind</span>
                  <span>/</span>
                  <span>Ant.d</span>
                  <span>/</span>
                  <span>MUI</span>
                  <span>/</span>
                  <span>Material UI</span>
                </p>
              </div>
            </div>
            <img
              className="w-full sm:w-[30%] rounded-3xl"
              src="https://media-sin2-3.cdn.whatsapp.net/v/t61.24694-24/473396488_3393185304156517_6532208735169394453_n.jpg?ccb=11-4&oh=01_Q5Aa1QFEA0hC-MmP_ULLyYbjzfd0hx-aQaI7G8j_fisEBUkLLQ&oe=68172734&_nc_sid=5e03e0&_nc_cat=106"
              alt="Profile"
            />
          </div>

          {/* Work Experience */}
          <div className="-mx-4 sm:-mx-16 mt-10 sm:mt-20">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold text-right px-4 sm:px-16 py-4">
              Work
            </h1>

            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 px-4 sm:px-16 py-4">
              <p className="text-md font-semibold text-[#808080]">
                2025 - <br />
                <span className="text-xs font-medium">2 year 7 months</span>
              </p>
              <p className="text-md font-semibold">WebAble Digital</p>
              <p className="text-md font-semibold">
                Software Engineer &nbsp;|&nbsp; React & Next & React Native
              </p>
            </div>
            <hr />

            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 px-4 sm:px-16 py-4 bg-[#F5F5F5] text-black">
              <p className="text-md font-semibold">
                2021 - 2022 <br />
                <span className="text-xs font-medium">1 year 1 months</span>
              </p>
              <p className="text-md font-semibold">Reserveit BD</p>
              <p className="text-md font-semibold">
                Front-end Developer &nbsp;|&nbsp; React & Next
              </p>
            </div>

            <hr />
            <div className="px-4 sm:px-16 py-6">
              <p className="text-end text-md font-semibold text-[#808080]">
                Work experience
              </p>
              <p className="text-end text-md font-semibold italic">
                3 years 8 months
              </p>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
