import React ,{useContext, useState}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faGear, faMagnifyingGlass, faMoon, faSun, faUser,} from "@fortawesome/free-solid-svg-icons";
import { darkTheme } from "../context/ThemeProvider";
import { NavLink } from "react-router-dom";

const Header = () => {
  const {dark,setDark} = useContext(darkTheme);
  const [navOpen,setNavOpen] = useState(false)
  return (
    <div className={` bg-Primary-light-bg dark:bg-Primary-dark-bg text-gray-700 dark:text-white p-2 flex justify-between z-40`}>
      <div onClick={()=>setNavOpen(prev=>!prev)} className=" relative tablet:hidden ">
        <FontAwesomeIcon icon={faBars}  className=" hover:text-Neutral-blue cursor-pointer h-6 w-6"/>
        <div className={`${navOpen?"":"hidden"} bg-Primary-light-element dark:bg-Primary-dark-element text-gray-700 dark:text-white border-[1px] border-solid border-gray-700 dark:border-white p-2 rounded-md absolute w-[200px]`}>
          <nav className=" flex flex-col ">
            <NavLink to={"/"} className={"hover:text-Neutral-blue p-1"}>Dashboard</NavLink>
            <NavLink to={"/team"} className={"hover:text-Neutral-blue p-1"}>Manage Team</NavLink>
            <NavLink to={"/contacts"} className={"hover:text-Neutral-blue p-1"}>Contacts Information</NavLink>
            <NavLink to={"/balances"} className={"hover:text-Neutral-blue p-1"}>Invoices Balances</NavLink>
            <NavLink to={"/profile"} className={"hover:text-Neutral-blue p-1"}>Profile form</NavLink>
            <NavLink to={"/calendar"} className={"hover:text-Neutral-blue p-1"}>Calendar</NavLink>
            <NavLink to={"/faq"} className={"hover:text-Neutral-blue p-1"}>FAQ Page</NavLink>
            <NavLink to={"/bar"} className={"hover:text-Neutral-blue p-1"}>Bar Chart</NavLink>
            <NavLink to={"/pie"} className={"hover:text-Neutral-blue p-1"}>Pie Chart</NavLink>
            <NavLink to={"/line"} className={"hover:text-Neutral-blue p-1"}>Line Chart</NavLink>
            <NavLink to={"/map"} className={"hover:text-Neutral-blue p-1"}>Geography Chart</NavLink>
            
          </nav>
        </div>
      </div>
      <div className=" rounded-md relative border-solid border-2 dark:border-white border-gray-700">
        <input type="text" className=" bg-Primary-light-element dark:bg-Primary-dark-element px-2 pr-6 rounded-md max-w-[160px]" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className=" absolute right-2 top-[4px]  "/>
      </div>
      <div className=" flex flex-row-reverse justify-center items-center gap-2">
        <FontAwesomeIcon icon={faUser} className=" hover:text-Neutral-blue cursor-pointer"/>
        <FontAwesomeIcon icon={faGear} className=" hover:text-Neutral-blue cursor-pointer"/>
        <FontAwesomeIcon icon={faBell} className=" hover:text-Neutral-blue cursor-pointer"/>
        <div onClick={()=>setDark(prev=>!prev)}>
          {dark?<FontAwesomeIcon icon={faMoon} className=" hover:text-Neutral-blue cursor-pointer" />:<FontAwesomeIcon icon={faSun}  className=" hover:text-Neutral-blue cursor-pointer"/>}
        </div>
      </div>
    </div>
  );
};

export default Header;
