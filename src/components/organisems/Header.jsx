import React from "react";
import Logo from "../../assets/images/Logo.svg";
import Avatar from "../../assets/images/profil.jpg"
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/" || location.pathname === "/register";
  return(
    <div className="bg-white shadow-md px-6 py-4 md:shadow-transparent border-b border-grayBorder md:px-[120px] md:py-3 md:h-20 h-[74px]">
      <div className="flex items-center h-full justify-between">
        <img className="w-[145px] py-x px-1 flex-shrink-0 md:w-[193px] md:py-[13px] md:px-[22px] box-content" src={Logo} alt="logo"/>
        
        {!isAuthPage && (
          <>
            <div className="hidden md:flex items-center gap-9">
              <span className="text-gray-700">Kategori</span>
              <img className="w-11 h-11 rounded-lg overflow-hidden bg-cover" src={Avatar} alt="profil"/>
            </div>
            {/* <!-- hamburger menu --> */}
            <button className="block md:hidden" id="menu-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>                  
            </button>
          </>
        )}
      </div>
    </div>
  )
};

export default Header;
