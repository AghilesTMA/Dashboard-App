import React, { useContext, useState } from "react";
import { darkTheme } from "../context/ThemeProvider.jsx";
import avatar from "../assets/gutsAvatar.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faUsers,
  faFileLines,
  faCalendar,
  faCircleQuestion,
  faChartSimple,
  faChartPie,
  faChartLine,
  faMapLocationDot,
  faContactBook,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const LinkItem = ({ location, icon, text }) => {
  return (
    <NavLink
      to={location}
      className=" flex items-center gap-2 cursor-pointer group"
    >
      <FontAwesomeIcon icon={icon} className=" group-hover:text-Neutral-blue" />
      <h4 className=" font-semibold group-hover:text-Neutral-blue">{text}</h4>
    </NavLink>
  );
};

const Sidebar = () => {
  const { dark } = useContext(darkTheme);
  const [isOpen, setIsOpen] = useState(window.innerWidth>=1020);
  return (
    <motion.section
      key={isOpen}
      layoutId="sidebar"
      transition={{ type: "spring",stiffness:500,damping:50 }}
      className={` hidden tablet:flex flex-col ${isOpen?" tablet:fixed tablet:top-0 tablet:left-0 desktop:relative":" tablet:relative"} w-full  tablet:h-[100vh] tablet:w-auto p-2 bg-Primary-light-element dark:bg-Primary-dark-element text-gray-700 dark:text-white overflow-hidden z-50`}
    >
      <div className={` h-full flex flex-col ${isOpen?"":" justify-evenly"}`}>
        <div className=" flex flex-col gap-1 items-center">
          <div className={` flex items-center justify-between gap-8 w-full`}>
            <span className={`${isOpen ? "" : "hidden"} font-semibold`}>
              ADMINIS
            </span>
            <span className=" group"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <FontAwesomeIcon icon={faBars} className=" w-6 h-6 group-hover:text-Neutral-blue text-gray-700 dark:text-white cursor-pointer"/>
            </span>
          </div>
          <div
            className={`  flex-col items-center p-4 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <div className=" w-16 h-16 rounded-full overflow-hidden">
              <img src={avatar} alt="avatar" />
            </div>
            <h2 className=" font-bold text-lg">Aghiles</h2>
            <h3 className=" text-Neutral-green">Admin-Founder</h3>
          </div>
        </div>
        <nav className={` overflow-y-auto flex-col gap-1 ${isOpen ? "flex" : "hidden"}`}>
          <LinkItem location={"/"} icon={faHouse} text={"Dashboard"} />
          <ul className=" flex flex-col gap-1">
            <h5 className=" text-sm opacity-70">data</h5>
            <li className=" ml-2">
              <LinkItem
                location={"/team"}
                icon={faUsers}
                text={"Manage Team"}
              />
            </li>
            <li className=" ml-2">
              <LinkItem
                location={"/contacts"}
                icon={faContactBook}
                text={"Contacts Information"}
              />
            </li>
            <li className=" ml-2">
              <LinkItem
                location={"/balances"}
                icon={faFileLines}
                text={"Invoices Balances"}
              />
            </li>
          </ul>
          <ul className=" flex flex-col gap-1">
            <h5 className=" text-sm opacity-70">Pages</h5>
            <li className=" ml-2">
              <LinkItem
                location={"/profile"}
                icon={faUser}
                text={"Profile form"}
              />
            </li>
            <li className=" ml-2">
              <LinkItem
                location={"/calendar"}
                icon={faCalendar}
                text={"Calendar"}
              />
            </li>
            <li className=" ml-2">
              <LinkItem
                location={"/faq"}
                icon={faCircleQuestion}
                text={"FAQ Page"}
              />
            </li>
          </ul>
          <ul className=" flex flex-col gap-1">
            <h5 className=" text-sm opacity-70">Charts</h5>
            <li className=" ml-2">
              <LinkItem
                location={"/bar"}
                icon={faChartSimple}
                text={"Bar Chart"}
              />
            </li>
            <li className=" ml-2">
              <LinkItem
                location={"/pie"}
                icon={faChartPie}
                text={"Pie Chart"}
              />
            </li>
            <li className=" ml-2">
              <LinkItem
                location={"/line"}
                icon={faChartLine}
                text={"Line Chart"}
              />
            </li>
            <li className=" ml-2">
              <LinkItem
                location={"/map"}
                icon={faMapLocationDot}
                text={"Geography Chart  "}
              />
            </li>
          </ul>
        </nav>
          <ul
            className={` ${isOpen ? "hidden" : "flex flex-col gap-2"}`}
          >
            <li className=" flex justify-center items-center">
              <NavLink to={"/"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faHouse}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/team"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faUsers}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/contacts"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faContactBook}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/balances"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faFileLines}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/profile"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faUser}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/calendar"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faCalendar}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/faq"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faCircleQuestion}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/bar"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faChartSimple}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/pie"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faChartPie}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center">
              <NavLink to={"/line"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faChartLine}/>
              </NavLink>
            </li> 
            <li className=" flex justify-center items-center"> 
              <NavLink to={"/map"}>
                <FontAwesomeIcon className=" w-6 h-6 hover:text-Neutral-blue" icon={faMapLocationDot}/>
              </NavLink>
            </li> 
          </ul>
      </div>
    </motion.section>
  );
};

export default Sidebar;