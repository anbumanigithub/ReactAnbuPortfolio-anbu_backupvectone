import React from "react";
import CricketImage from "../assets/cricket2.jpg";
import VolleyballImage from "../assets/volleyball.jpg";
import throwballImage from "../assets/throwball.jpg";
import runningImage from "../assets/running.jpg";

const About = () => {
  return (
    <>
      <div
        name="about"
        className="bg-gradient-to-b from-gray-800 to-black py-8 px-4 md:px-0 h-full "
      >
        <div className=" mx-auto max-w-screen-lg h-full">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">
            My Passion & Educational Endeavors
          </h2>
          <p className="text-lg text-gray-400 text-center mb-6">
            Graduated with an MCA in Computer Applications, specializing in MERN stack development. Accomplished multiple projects, won coding competitions, and gained hands-on experience with modern technologies. 🚀
          </p>
          <div className="max-w-5xl mx-auto p-6 space-y-16">
            <div className="bg-gray-900 bg-opacity-30 p-8 rounded-xl shadow-2xl border border-gray-700 overflow-hidden group">
              <h3 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                🎓 Masters degree
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
                <p className="flex items-center gap-2">
                  📖 <span className="text-gray-200"> Masters of computer Application ( MCA )</span>
                </p>
                <p className="flex items-center gap-2">
                  🏆 <span className="text-gray-200">passed out<span className="font-semibold text-yellow-400">  ( 2021 to 2023 )</span></span>
                </p>
                <p className="flex items-center gap-2">
                  📊 <span className="text-gray-200">Percentage: <span className="font-semibold text-green-400">78%</span></span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src={CricketImage}
                  alt="Cricket"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
                  🏏 Achievements
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  🥇 <span className="font-semibold">First Prize</span> in Indoor College Level Cricket.
                  <br />
                  🏆 <span className="font-semibold">Man of the Match:</span> Captained the team, took
                  <span className="text-red-400 font-semibold"> three wickets</span>, and scored
                  <span className="text-blue-400 font-semibold"> 40 runs</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto p-6 space-y-16">
            <div className="bg-gray-900 bg-opacity-30  p-8 rounded-xl shadow-2xl border border-gray-700 overflow-hidden group">
              <h3 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                🎓 Bachelors degree
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
                <p className="flex items-center gap-2">
                  💻 <span className="text-gray-200">Bsc Computer Science</span>
                </p>
                <p className="flex items-center gap-2">
                  🏆 <span className="text-gray-200">passed out<span className="font-semibold text-yellow-400">  ( 2017 to 2020 )</span></span>
                </p>
                <p className="flex items-center gap-2">
                  📊 <span className="text-gray-200">Percentage: <span className="font-semibold text-green-400">76%</span></span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src={VolleyballImage}
                  alt="Volleyball"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className=" bg-gray-900 bg-opacity-40  p-8 rounded-xl text-white border border-gray-600 shadow-2xl">
                <h3 className="text-4xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
                  🏆 Achievements
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  💡 <span className="font-semibold">First Prize </span> in Indoor College Level volleyball.
                  <br />
                  🏆 <span className="font-semibold"> Captain of the Team</span> and Smasher of the Team .
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto p-6 space-y-16">
            <div className="bg-gray-900 bg-opacity-30  p-8 rounded-xl shadow-2xl border border-gray-700 overflow-hidden group">
              <h3 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                🎓 Education
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
                <p className="flex items-center gap-2">
                  📖 <span className="text-gray-200">12th Standard (2017)</span>
                </p>
                <p className="flex items-center gap-2">
                  🏆 <span className="text-gray-200">Marks: <span className="font-semibold text-yellow-400">851/1200</span></span>
                </p>
                <p className="flex items-center gap-2">
                  📊 <span className="text-gray-200">Percentage: <span className="font-semibold text-green-400">71  %</span></span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div >
                <img
                  src={throwballImage}
                  alt="Cricket"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className=" bg-gray-900 bg-opacity-40  p-8 rounded-xl text-white border border-gray-600 shadow-2xl">
                <h3 className="text-4xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
                  🏆 Achievements
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  💡 <span className="font-semibold">First Prize</span> in Indoor College-Level Throwball Tournament.
                  <br />
                  🏆 <span className="font-semibold">Captain of the Team</span> and Lead Attacker.
                  <br />
                  🚀 <span className="font-semibold">Represented</span> the college in inter-university throwball championships.
                </p>

              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto p-6 space-y-16">
            <div className="bg-gray-900 bg-opacity-30  p-8 rounded-xl shadow-2xl border border-gray-700 overflow-hidden group">
              <h3 className="text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                🎓 standard
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">

                <p className="flex items-center gap-2">
                  📖 <span className="text-gray-200">10th Standard (2015)</span>
                </p>
                <p className="flex items-center gap-2">
                  🏆 <span className="text-gray-200">Marks: <span className="font-semibold text-yellow-400">412/500</span></span>
                </p>
                <p className="flex items-center gap-2">
                  📊 <span className="text-gray-200">Percentage: <span className="font-semibold text-green-400">81%</span></span>
                </p>

              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div >
                <img
                  src={runningImage}
                  alt="Cricket"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className=" bg-gray-900 bg-opacity-40  p-8 rounded-xl text-white border border-gray-600 shadow-2xl">
                <h3 className="text-4xl font-bold mb-6 text-yellow-400 flex items-center gap-2">
                  🏆 Achievements
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  💡 <span className="font-semibold">Winner</span> of Running
                  <br />
                  🏆 <span className="font-semibold"></span> Running is my passion and a vital part of my daily routine. It keeps me fit, focused, and energized. Whether it's a quick jog or a long-distance run
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default About;
