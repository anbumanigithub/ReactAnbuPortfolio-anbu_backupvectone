// import React from "react";
// import vectoneimages from "../assets/experience/vectoneteam1.jpg";
// import vectoneimages1 from "../assets/experience/teamouting2.JPG";
// import vectoneimages2 from "../assets/experience/reamouting1.JPG";
// import Audracare from "../assets/experience/audracare.webp";
// import worktual from "../assets/experience/worktual.jpg";
// import carehomnebackend from "../assets/experience/nodejs.webp";
// // import Portfolios from "../assets/portfolio/portfolio.png";
// // import Calculator from "../assets/portfolio/calculator.png";
// // import Crud from "../assets/portfolio/MernCRUD.png";
// // import PortfolioWeb from "../assets/portfolio/React.png";
// // import ReduxCRUD from "../assets/portfolio/ReduxCRUD.png";
// // import SignupLogin from "../assets/portfolio/warranty.png";

// const Experiences = () => {
//   const portfolio = [
//     {
//       id: 1,
//       src: Audracare,
//       demo: "https://play.google.com/store/apps/details?id=com.carehomemobileapp&hl=en_IN",
//       title: "Carehome Audracare",
//       explanation:
//         "Carehome Audracare is a mobile app designed to streamline care home management. It helps staff manage resident records, shift schedules, and medication tracking efficiently. The app provides secure communication, real-time alerts, and compliance reports for better caregiving. It optimizes workflows, reducing errors and improving staff coordination. Overall, it enhances the quality of care and operational efficiency in care homes. 🚀",
//     },
//     {
//       id: 2,
//       src: worktual,
//       demo: "https://app.worktual.co.uk/login",
//       title: "Worktual",
//       explanation:
//         "The Worktual App features Chat and Meet functionalities designed for seamless communication and collaboration within organizations. The Chat feature enables real-time messaging, file sharing, and group discussions for efficient teamwork. The Meet feature allows users to schedule and conduct virtual meetings with video conferencing, ensuring smooth remote collaboration. These tools enhance productivity, reduce communication gaps, and streamline workflows in hybrid or remote work environments. With secure data encryption and easy accessibility, Worktual's Chat and Meet features are ideal for modern workplace communication. 🚀",
//     },
//     {
//       id: 3,
//       src: carehomnebackend,
//       demo: "https://app.worktual.co.uk/login",
//       title: "Worktual backend and carehome backend",
//     },
//   ];
//   const experiences = [
//     {
//       company: "vectone solutions private limited",
//       role: "Fullstack Developer",
//       duration: "7 Months finished 28.08.2024 to present",
//       tasks: [
//         "Carehome (Audracare) Mobile app - Carehome Audracare is a mobile app designed to streamline care home management. It helps staff manage resident records, shift schedules, and medication tracking efficiently. The app provides secure communication, real-time alerts, and compliance reports for better caregiving. It optimizes workflows, reducing errors and improving staff coordination. Overall, it enhances the quality of care and operational efficiency in care homes. 🚀 ",
//         "worktual -  The Worktual App features Chat and Meet functionalities designed for seamless communication and collaboration within organizations. The Chat feature enables real-time messaging, file sharing, and group discussions for efficient teamwork. The Meet feature allows users to schedule and conduct virtual meetings with video conferencing, ensuring smooth remote collaboration. These tools enhance productivity, reduce communication gaps, and streamline workflows in hybrid or remote work environments. With secure data encryption and easy accessibility, Worktual's Chat and Meet features are ideal for modern workplace communication. 🚀",
//         "Implemented and integrated RESTful APIs using Express.js for seamless data exchange. Established real-time communication with WebSockets to enhance interactivity. Optimized performance by leveraging Redis for efficient caching and session management. Ensured smooth state management across the application for a responsive user experience. 🚀",
//       ],
//       photos: [vectoneimages, vectoneimages1, vectoneimages2],
//     },
//     {
//       company: "Besant Technologies in ( Bangalore - BTM layout)",
//       role: "MERN Stack Developer",
//       duration: "8 months",
//       tasks: [
//         "Designed intuitive UI components.",
//         "Worked closely with tutor to enhance user experience.",
//         "Implemented portfolio and interactive designs.",
//         "CRUD operation done in Redux",
//         "CRUD operation in MERN stack",
//         "Login authentication and authorization in MERN stack",
//       ],
//       photos: [],
//     },
//   ];

//   const redirectToDemo = (demoUrl) => {
//     window.open(demoUrl, "_blank");
//   };

//   return (
//     <>
//       <section className="bg-gradient-to-br from-gray-900 to-black py-16 px-5 md:px-24">
//         <div className="max-w-6xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-blue-400">
//               My Experience in software developement ( 1.5 years)
//             </h2>
//             <p className="text-gray-400 text-lg mt-2">
//               🚀 Journey of Growth & Learning in the Tech Industry
//             </p>
//           </div>

//           {/* Experience Wrapper */}
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="text-white w-full">
//               {/* Experience Timeline */}
//               <div className="space-y-8">
//                 {experiences.map((exp, index) => (
//                   <div
//                     key={index}
//                     className=" p-6 bg-gray-800 rounded-xl shadow-lg 0 transition"
//                   >
//                     {/* Company & Role */}
//                     <h3 className="text-2xl font-semibold text-blue-300">
//                       {exp.role} at{" "}
//                       <span className="text-yellow-400">{exp.company}</span>
//                     </h3>
//                     <p className="text-gray-400 text-sm mt-1">
//                       📅 {exp.duration}
//                     </p>

//                     <ul className="mt-4 space-y-2 text-gray-300">
//                       {exp.tasks.map((task, i) => (
//                         <li key={i} className="flex items-start gap-2">
//                           <span className="text-green-400">✔</span> {task}
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Team Name & Working Environment - Only for Vectone Mobile */}
//                     {exp.company === "Vectone mobile" && (
//                       <div className="mt-6 p-4 bg-gray-700 rounded-lg">
//                         <h4 className="text-xl font-bold text-yellow-400">
//                           Team Name:{" "}
//                           <span className="text-blue-300">Web App</span>
//                         </h4>
//                         <p className="text-gray-300 mt-2">
//                           👨‍💻 Working Environment
//                         </p>
//                       </div>
//                     )}

//                     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                       {exp.photos.map((photo, i) => (
//                         <div key={i} className="rounded-lg shadow-md">
//                           <img
//                             src={photo}
//                             alt={`Experience ${exp.company} photo ${i + 1}`}
//                             className="w-full h-auto object-cover rounded-lg"
//                           />
//                         </div>
//                       ))}
//                     </div>

//                     {exp.company?.trim().toLowerCase() === "vectone mobile" && (
//                       <div className="mt-8">
//                         <h3 className="text-3xl font-bold inline-block pb-2 text-yellow-400">
//                           Worked Projects in Vectone Mobile
//                         </h3>

//                         {portfolio?.length > 0 ? (
//                           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
//                             {portfolio.map(({ id, src, title, demo }) => (
//                               <div
//                                 key={id}
//                                 className="shadow-md shadow-gray-600 rounded-lg"
//                               >
//                                 <img
//                                   src={src}
//                                   alt={title}
//                                   className="rounded-md duration-200 w-full h-auto object-cover"
//                                 />
//                                 <p className="text-center mt-4">{title}</p>
//                                 <div className="flex justify-center items-center">
//                                   <button
//                                     className="w-full px-6 py-4 text-pink-500 font-semibold transition duration-200"
//                                     onClick={() => redirectToDemo(demo)}
//                                   >
//                                     Click here to visit
//                                   </button>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         ) : (
//                           <p className="text-center text-gray-500 mt-4">
//                             No projects available.
//                           </p>
//                         )}
//                       </div>
//                     )}

//                     {/* {index < experinces.length - 1 && (
//                       <div className="absolute left-5 top-full w-1 h-12 bg-blue-500"></div>
//                     )} */}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Experiences;





import React from "react";
import vectoneimages from "../assets/experience/vectoneteam1.jpg";
import vectoneimages1 from "../assets/experience/teamouting2.JPG";
import vectoneimages2 from "../assets/experience/reamouting1.JPG";
import Audracare from "../assets/experience/audracare.webp";
import worktual from "../assets/experience/worktual.jpg";
import carehomnebackend from "../assets/experience/nodejs.webp";

const Experiences = () => {
  const portfolio = [
    {
      id: 1,
      src: Audracare,
      demo: "https://play.google.com/store/apps/details?id=com.carehomemobileapp&hl=en_IN",
      title: "Carehome Audracare",
      explanation:
        "Carehome Audracare is a mobile app designed to streamline care home management. It helps staff manage resident records, shift schedules, and medication tracking efficiently.",
    },
    {
      id: 2,
      src: worktual,
      demo: "https://app.worktual.co.uk/login",
      title: "Worktual",
      explanation:
        "The Worktual App features Chat and Meet functionalities designed for seamless communication and collaboration within organizations.",
    },
    {
      id: 3,
      src: carehomnebackend,
      demo: "https://app.worktual.co.uk/login",
      title: "Worktual Backend & Carehome Backend",
    },
  ];

  const experiences = [
    {
      company: "Vectone Solutions Private Limited",
      role: "Fullstack Developer",
      duration: "7 Months (28.08.2024 - Present)",
      tasks: [
        "Developed Carehome Audracare mobile app to manage resident records, shift schedules, and medication tracking.",
        "Implemented Chat and Meet functionalities in Worktual App for seamless communication and collaboration.",
        "Integrated RESTful APIs using Express.js, WebSockets for real-time communication, and Redis for caching.",
      ],
      photos: [vectoneimages, vectoneimages1, vectoneimages2],
    },
    {
      company: "Besant Technologies (Bangalore - BTM Layout)",
      role: "MERN Stack Developer",
      duration: "8 Months",
      tasks: [
        "Designed intuitive UI components and improved user experience.",
        "Developed CRUD operations using Redux and MERN stack.",
        "Implemented login authentication and authorization in MERN stack.",
      ],
      photos: [],
    },
  ];

  const redirectToDemo = (demoUrl) => {
    window.open(demoUrl, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
            My Experience in Software Development (1.5 Years)
          </h2>
          <p className="text-gray-400 text-lg mt-2">
            🚀 Journey of Growth & Learning in the Tech Industry
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition w-full"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-blue-300">
                {exp.role} at{" "}
                <span className="text-yellow-400">{exp.company}</span>
              </h3>
              <p className="text-gray-400 text-sm mt-1">📅 {exp.duration}</p>

              {/* Tasks List */}
              <ul className="mt-4 space-y-2 text-gray-300">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400">✔</span> {task}
                  </li>
                ))}
              </ul>

              {/* Photos */}
              {exp.photos.length > 0 && (
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {exp.photos.map((photo, i) => (
                    <div key={i} className="rounded-lg shadow-md">
                      <img
                        src={photo}
                        alt="experiences"
                        className="w-full h-40 md:h-48 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Portfolio Section */}
              {exp.company.toLowerCase().includes("vectone") && (
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-yellow-400">
                    Worked Projects in Vectone Solutions
                  </h3>

                  {portfolio.length > 0 ? (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {portfolio.map(({ id, src, title, demo }) => (
                        <div
                          key={id}
                          className="shadow-md shadow-gray-600 rounded-lg p-4 bg-gray-700"
                        >
                          <img
                            src={src}
                            alt="experiences"
                            className="rounded-md duration-200 w-full h-40 object-cover"
                          />
                          <p className="text-center mt-4 text-white">{title}</p>
                          <div className="flex justify-center items-center mt-3">
                            <button
                              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                              onClick={() => redirectToDemo(demo)}
                            >
                              Visit Project
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 mt-4">
                      No projects available.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;











