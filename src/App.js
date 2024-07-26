import React from "react";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Project from "./components/Project"
import HeadShot from "./images/HeadShot.jpeg"
import SimStock from "./images/SimStock.png"
import LingoVerse from "./images/LingoVerse.jpeg"
import Chess from "./images/Chess.png"
import AlumLink from "./images/AlumLink.png"
import '@fontsource/work-sans';

function App() {
  return (
      <>
        <div className="bg-[#fcfcfc]">
          <div className="font-worksans md:mx-auto md:max-w-6xl p-8">
            <NavBar />


            <div className="flex flex-col lg:flex-row justify-center items-center py-20 px-4 lg:space-x-8">
              <div className="max-w-lg lg:text-left">
                <h1 className="text-2xl lg:text-4xl font-bold text-black pb-8 leading-tight hover:animate-bounce-slow">Hello, I'm Jawad Rada ッ</h1>
                <p className="pb-6 leading-relaxed">I am a <span className="font-semibold">full-stack developer</span> with a passion for developing <span className="font-semibold">innovative</span> solutions that address real-world problems. Outside of coding, I love traveling and meeting new people.</p>
                <p className="bg-[#f2f2f2] rounded-lg px-2 py-2 shadow">Currently a Senior at CUNY College of Staten Island. 🐬</p>
              </div>
              <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
                <img src={HeadShot} alt="Head Shot" className="rounded-full object-cover w-72 h-72 lg:w-80 lg:h-80 lg:ml-24 xl:ml-30" />
              </div>
            </div>

            <div className="md:mx-auto md:max-w-7xl mb-8 mt-36">
              <h1 className="text-2xl lg:text-4xl font-medium text-black ">Projects Section</h1>
            </div>

            <div className="p-4 mb-8">
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">

              <Project
                  title="SimStock Exchange"
                  description="A platform designed to simplify stock trading by providing a risk-free, virtual trading environment."
                  url="https://github.com/jawadrada/SimStock-Exchange"
                  img={SimStock}
                />

              <Project
                  title="AlumLink"
                  description="Open-source Alumni directory modeled for CUNY Law School."
                  url="https://github.com/jawadrada/AlumLink"
                  img={AlumLink}
                />

                <Project
                  title="Lingo Verse"
                  description="A translation and language learning app dedicated to various Arabic dialects."
                  url="https://github.com/jawadrada/LingoVerse"
                  img={LingoVerse}
                />

                <Project
                  title="Chess Game"
                  description="chess game that allows two players to play each other in a turn base fashion."
                  url="https://github.com/jawadrada/Chess"
                  img={Chess}
                />
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </>
  );
}

export default App;
