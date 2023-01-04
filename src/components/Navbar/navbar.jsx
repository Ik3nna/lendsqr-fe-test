import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import Sidebar from "../Sidebar/sidebar";

function Navbar () {
    const [searchText, setSearchText] = useState("");
    const [active, setActive] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault();
    }

    return(
        <header className={`${styles.content} ${active && styles.activeNav}`}>
            <section className={styles.sect}>
                <img src="/assets/Group.svg" alt="logo" />

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search for anything" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}  />

                    <button type="submit">
                        <BiSearch style={{ fontSize: "13.97px", cursor: "pointer" }}/>
                    </button>
                </form>

                <div className={styles.docs}>docs</div>

                <IoMdNotificationsOutline style={{ fontSize: "26px", cursor: "pointer" }} />

                <img src="/assets/image 4.svg" alt="user" />

                <div className={styles.ade}>Adedeji</div>

                <MdArrowDropDown style={{ fontSize: "20px", cursor: "pointer" }} />

                <div className={styles.overlay}></div>
                    
                <div className={styles.hamburgerMenu} onClick={()=>setActive(!active)}>
                    <div className={styles.bar}></div>
                </div>
            </section>

            <Sidebar />
        </header>
    );
}

export default Navbar;