
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
        className="bg-gradient-to-b from-gray-800 to-black py-8 px-4 sm:px-6 md:px-0 h-full"
      >
        <div className="mx-auto max-w-screen-lg h-full">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">
            My Passion & Educational Endeavors
          </h2>
          <p className="text-lg text-gray-400 text-center mb-6">
            Graduated with an MCA in Computer Applications, specializing in MERN stack development. Accomplished multiple projects, won coding competitions, and gained hands-on experience with modern technologies. 🚀
          </p>

          {/* Masters Degree */}
          <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-12 sm:space-y-16">
            <div className="bg-gray-900 bg-opacity-30 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700">
              <h3 className="text-4xl font-bold text-cyan-400 mb-6">
                🎓 Masters degree
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg">
                <p className="text-gray-200">📖 Masters of Computer Application (MCA)</p>
                <p className="text-gray-200">🏆 Passed Out <span className="text-yellow-400 font-semibold">(2021 - 2023)</span></p>
                <p className="text-gray-200">📊 Percentage: <span className="text-green-400 font-semibold">78%</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img src={CricketImage} alt="Cricket" className="w-full h-auto rounded-lg object-cover" />
              <div className="bg-gray-900 bg-opacity-40 p-6 sm:p-8 rounded-xl text-white border border-gray-600 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-400">🏏 Achievements</h3>
                <p className="text-lg text-gray-200">
                  🥇 <span className="font-semibold">First Prize</span> in Indoor College Level Cricket.<br />
                  🏆 <span className="font-semibold">Man of the Match:</span> Took <span className="text-red-400 font-semibold">three wickets</span> and scored <span className="text-blue-400 font-semibold">40 runs</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Bachelors Degree */}
          <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-12 sm:space-y-16">
            <div className="bg-gray-900 bg-opacity-30 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700">
              <h3 className="text-4xl font-bold text-cyan-400 mb-6">🎓 Bachelors degree</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg">
                <p className="text-gray-200">💻 BSc Computer Science</p>
                <p className="text-gray-200">🏆 Passed Out <span className="text-yellow-400 font-semibold">(2017 - 2020)</span></p>
                <p className="text-gray-200">📊 Percentage: <span className="text-green-400 font-semibold">76%</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img src={VolleyballImage} alt="Volleyball" className="w-full h-auto rounded-lg object-cover" />
              <div className="bg-gray-900 bg-opacity-40 p-6 sm:p-8 rounded-xl text-white border border-gray-600 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-400">🏆 Achievements</h3>
                <p className="text-lg">
                  💡 <span className="font-semibold">First Prize</span> in College-Level Volleyball.<br />
                  🏆 <span className="font-semibold">Captain</span> & Smasher of the Team.
                </p>
              </div>
            </div>
          </div>

          {/* High School Education */}
          <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-12 sm:space-y-16">
            <div className="bg-gray-900 bg-opacity-30 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700">
              <h3 className="text-4xl font-bold text-cyan-400 mb-6">🎓 Education</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg">
                <p className="text-gray-200">📖 12th Standard (2017)</p>
                <p className="text-gray-200">🏆 Marks: <span className="text-yellow-400 font-semibold">851/1200</span></p>
                <p className="text-gray-200">📊 Percentage: <span className="text-green-400 font-semibold">71%</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img src={throwballImage} alt="Throwball" className="w-full h-auto rounded-lg object-cover" />
              <div className="bg-gray-900 bg-opacity-40 p-6 sm:p-8 rounded-xl text-white border border-gray-600 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-400">🏆 Achievements</h3>
                <p className="text-lg">
                  💡 <span className="font-semibold">First Prize</span> in College-Level Throwball.<br />
                  🏆 <span className="font-semibold">Captain</span> & Lead Attacker.<br />
                  🚀 Represented college in inter-university championships.
                </p>
              </div>
            </div>
          </div>

          {/* 10th Standard */}
          <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-12 sm:space-y-16">
            <div className="bg-gray-900 bg-opacity-30 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700">
              <h3 className="text-4xl font-bold text-cyan-400 mb-6">🎓 Standard</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg">
                <p className="text-gray-200">📖 10th Standard (2015)</p>
                <p className="text-gray-200">🏆 Marks: <span className="text-yellow-400 font-semibold">412/500</span></p>
                <p >📊 Percentage: <span className="text-green-400 font-semibold">81%</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img src={runningImage} alt="Running" className="w-full h-auto rounded-lg object-cover" />
              <div className="bg-gray-900 bg-opacity-40 p-6 sm:p-8 rounded-xl text-white border border-gray-600 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-yellow-400">🏆 Achievements</h3>
                <p className="text-lg">
                  💡 <span className="font-semibold">Winner</span> of Running.<br />
                  🏆 Running is my passion and a vital part of my daily routine.
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
