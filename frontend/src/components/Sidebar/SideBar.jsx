import React from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaAmbulance } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Header from '../Navbar/Header';
import './App.css';
import dance from '../../images/dance.png'
import drama from '../../images/drama.png'
import painting from '../../images/painting.png'
import photography from '../../images/photography.png'
import language from '../../images/language.png'
import music from '../../images/music.png'
import games from '../../images/games.png'
import health from '../../images/health.png'
import adventure from '../../images/adventure.png'
import yoga from '../../images/yoga.png'
import eco from '../../images/eco.png'
import roadSafety from '../../images/roadSafety.png'
import ncc from '../../images/ncc.png'
import nss from '../../images/nss.png'
import yrc from '../../images/yrc.png'

import AttractionsIcon from '@mui/icons-material/Attractions';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/master",
    name: "Culture",
    icon: <AttractionsIcon />,
    subRoutes: [
      {
        path: "/culture/music",
        name: "Music Club",
        icon: <img src={music} className="w-6 " alt='' />,
      },
      {
        path: "/culture/dance",
        name: "Dance Club",
        icon: <img src={dance} className="w-6 " alt='' />,
      },
      {
        path: "/culture/drama",
        name: "Dramatics Club",
        icon: <img src={drama} className="w-6 " alt='' />,
      },
      {
        path: "/culture/painting",
        name: "Painting Club",
        icon: <img src={painting} className="w-6 " alt='' />,
      },
      {
        path: "/culture/photography",
        name: "Photography Club",
        icon: <img src={photography} className="w-6 " alt='' />,
      },
      {
        path: "/culture/language",
        name: "Language Club",
        icon: <img src={language} className="w-6 " alt='' />,
      },
    ],
  },
  {
    path: "/ratefinder",
    name: "Sports",
    icon: <SportsFootballIcon />,
    subRoutes: [
      {
        path: "/master/party",
        name: "Indoor & Outdoor",
        icon: <img src={games} className="w-6 " alt='' />,
      },
      {
        path: "/master/geography",
        name: "Health Club",
        icon: <img src={health} className="w-6 " alt='' />,
      },
      {
        path: "/master/service",
        name: "Adventure Club",
        icon: <img src={adventure} className="w-6 " alt='' />,
      },
      {
        path: "/master/rate",
        name: "Yoga Club",
        icon: <img src={yoga} className="w-6 " alt='' />,
      },
    ],
  },
  {
    path: "/ratecalculator",
    name: "Responsibility",
    icon: <FaAmbulance />,
    subRoutes: [
      {
        path: "/master/party",
        name: "ECO Club",
        icon: <img src={eco} className="w-6 " alt='' />,
      },
      {
        path: "/master/geography",
        name: "Road Safety",
        icon: <img src={roadSafety} className="w-6 " alt='' />,
      },
      {
        path: "/master/service",
        name: "NCC",
        icon: <img src={ncc} className="w-6 " alt='' />,
      },
      {
        path: "/master/rate",
        name: "NSS",
        icon: <img src={nss} className="w-6 " alt='' />,
      },
      {
        path: "/master/rate",
        name: "YRC",
        icon: <img src={yrc} className="w-6 " alt='' />,
      },
      
    ],
  },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="bg-gray-50 shadow-xl text-xl text-grey-100" >
          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",

              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className={`sidebar`}
          >
            <div className="top_section ">
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    <h3 className='text-gray-600'>Dashboard</h3>
                  </motion.h1>
                )}
              </AnimatePresence>

              <div className="bars text-red-400 cursor-pointer">
                <FaBars onClick={toggle} />
              </div>
            </div>
            
            <section className="routes ">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon text-red-400">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>

          </motion.div>
        </div>

        <main className=''>{children}</main>

      </div>
    </>
  );
};

export default SideBar;
