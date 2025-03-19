import React from "react";
import Portfolios from "../assets/portfolio/portfolio.png";
import Calculator from "../assets/portfolio/calculator.png";
import Crud from "../assets/portfolio/MernCRUD.png";
import PortfolioWeb from "../assets/portfolio/React.png";
import ReduxCRUD from "../assets/portfolio/ReduxCRUD.png";
import SignupLogin from "../assets/portfolio/warranty.png";
// // audracare.webp
// import Audracare from "../assets/experience/audracare.webp";
// import worktual from "../assets/experience/worktual.jpg";
const Portfolio = () => { 
  const portfolio = [
    {
      id: 1,
      src: Portfolios ,
      code: "https://github.com/anbumanigithub/Portfolio",
      demo: "https://anbumanigithub.github.io/Anbumani-portfolio/",
      title: "My Portfolio",
    },
    {
      id: 2,
      src: Calculator,
      code: "https://github.com/anbumanigithub/Calculator-Program-using-Html-Css-JavaScript",
      demo: "https://anbumanigithub.github.io/Calculator-Program-using-Html-Css-JavaScript/",
      title: "Calculator",
    },
    {
      id: 3,
      src: Crud,
      code: "https://github.com/anbumanigithub/mern-crud",
      demo: "https://merncruddemo.netlify.app/",
      title: "Mern crud",
    },
    {
      id: 4,
      src: PortfolioWeb,
      code: "https://github.com/anbumanigithub/ReactAnbuPortfolio",
      demo: "https://reactanbuportfolio.netlify.app/",
      title: "Personal Website",
    },
    {
      id: 5,
      src: ReduxCRUD,
      code: "https://github.com/anbumanigithub/Redux-crud",
      demo: "https://anbucruddemo.netlify.app/",
      title: "Redux CRUD",
    },

    {
      id: 6,
      src: SignupLogin,
      code: "https://warranty.edify.club./",
      demo: "https://warranty.edify.club./",
      title: "signup login",
    },
    
    // {
    //   id: 7,
    //   src: Audracare,
    //   code: "-",
    //   demo: "https://play.google.com/store/apps/details?id=com.carehomemobileapp&hl=en_IN",
    //   title: "Carehome Audracare",
    // },
    
    // {
    //   id: 8,
    //   src: worktual,
    //   code: "-",
    //   demo: "https://app.worktual.co.uk/login",
    //   title: "worktual",
    // },
  ];

  const redirectToDemo = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const redirectToCode = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          {/* <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p> */}
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">
          My Works & Innovations
        </h2>
        {/* <h2 className="text-4xl font-bold text-blue-400">   Portfolio</h2> */}
          <p className="py-6 text-yellow-400 text-xl ">Check out my some work here</p>
        </div>
        <div className="mb-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, title, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-95 h-[180px] w-full object-cover"
              />
              <p className="text-center mt-4">{title}</p>
              <div className="flex justify-center items-center">
                <button
                  className="w-1/2 px-6 py-4  duration-200 hover:scale-105"
                  onClick={() => redirectToDemo(demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-4  duration-200 hover:scale-105"
                  onClick={() => redirectToCode(code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
