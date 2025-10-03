// import React from 'react'
// import { Link } from "react-router-dom";
import "./style/header.css";
import { IoMdMenu } from "react-icons/io";


type Props ={
  handleClick:()=>void
}
const Header:React.FC<Props> = ({handleClick}) => {
  return (
    <div className="header-container bg-blue-300">
      <div className="flex items-center gap-3 sm:gap-1  ">
        <IoMdMenu className="text-3xl text-black block  sm:hidden shadow " onClick={handleClick} />
        <h3 className="text-sm font-medium sm:text-2xl">Admin Panel</h3>
      </div>
      <div className="header-search-container">
        <div className="">

        </div>
        <input
          type="search"
          placeholder="search anything"
          name=""
          id=""
          className="hidden sm:block px-3 py-1 rounded-md border border-gray-400 text-sm w-40 md:w-60"
        />
        <div className="profile-title">
          {/* <Link to="/signup" >SignUp</Link> */}
          <p className=" font-medium text-black">Name</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
