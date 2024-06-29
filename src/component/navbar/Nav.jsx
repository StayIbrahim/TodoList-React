

import React from "react";
import styles from './Navbar.module.css'






import { useState } from "react";
import { getImageUrl } from "../../utils";
export const Navbar = ()=>{
  const [isopen,setisopen] = useState(true);
    return (
     <nav className={styles.navbar}>
       <a className = {styles.title} href="/">IbraDev</a>
        <div className={styles.menu}>
          <img className={styles.menubtn} 
          src={isopen ? getImageUrl("nav/icons8-menu-bar-50.png"):getImageUrl("nav/icons8-close-window-50.png")} alt=""
          onClick={()=>{
            setisopen(!isopen)
          }}
          />
          <ul className={`${styles.menuitems} ${!isopen && styles.menuopen}`}
          onClick={()=>{
            setisopen(!isopen)
          }}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
     </nav>
    )
  };