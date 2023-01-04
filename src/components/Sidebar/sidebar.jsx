import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Sidebar () {
    const [dropdown, setDropdown] = useState(true)

    return(
        <aside className={styles.sidebar}>
            <section className={styles.container}>
                <article className={styles.dashboard}>
                    <img src="/assets/briefcase 1.svg" alt="briefcase" />

                    <div>Switch Organization</div>

                    <div onClick={()=>setDropdown(!dropdown)}>
                        {dropdown ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
                    </div>
                </article>

                {dropdown && 
                    <>
                        <Link to="/dashboard">
                            <img src="/assets/home 1.svg" alt="home" />

                            <div>Dashboard</div>
                        </Link>

                        <article className={styles.customers}>
                            <div>customers</div>

                            <ul>
                                <li className={styles.users}>
                                    <img src="/assets/user-friends 1.svg" alt="user" />

                                    <div>users</div>

                                    <div className={styles.active}></div>
                                </li>

                                <li>
                                    <img src="/assets/users 1.svg" alt="gurantors" />

                                    <div>gurantors</div>
                                </li>

                                <li>
                                    <img src="/assets/sack 1.svg" alt="loans" />

                                    <div>loans</div>
                                </li>

                                <li>
                                    <img src="/assets/handshake-regular 1.svg" alt="decision" />

                                    <div>decision models</div>
                                </li>

                                <li>
                                    <img src="/assets/piggy-bank 1.svg" alt="savings" />

                                    <div>savings</div>
                                </li>

                                <li>
                                    <img src="/assets/sack 1.svg" alt="loan" />

                                    <div>loan requests</div>
                                </li>

                                <li>
                                    <img src="/assets/user-check 1.svg" alt="whitelist" />

                                    <div>whitelist</div>
                                </li>

                                <li>
                                    <img src="/assets/user-times 1.svg" alt="karma" />

                                    <div>karma</div>
                                </li>
                            </ul>
                        </article>

                        <article className={styles.business}>
                            <div>businesses</div>

                            <ul>
                                <li>
                                    <img src="/assets/briefcase 1.svg" alt="organization" />

                                    <div>organization</div>
                                </li>

                                <li>
                                    <img src="/assets/sack 1.svg" alt="loan-products" />

                                    <div>loan products</div>
                                </li>

                                <li>
                                    <img src="/assets/Group-1.svg" alt="savings-products" />

                                    <div>savings products</div>
                                </li>

                                <li>
                                    <img src="/assets/coins-solid 1.svg" alt="fees" />

                                    <div>fees and charges</div>
                                </li>

                                <li>
                                    <img src="/assets/icon.svg" alt="icon" />

                                    <div>transactions</div>
                                </li>

                                <li>
                                    <img src="/assets/sack 1.svg" alt="loan" />

                                    <div>services</div>
                                </li>

                                <li>
                                    <img src="/assets/galaxy 1.svg" alt="service-account" />

                                    <div>service account</div>
                                </li>

                                <li>
                                    <img src="/assets/scroll 1.svg" alt="settlements" />

                                    <div>settlements</div>
                                </li>

                                <li>
                                    <img src="/assets/chart-bar 2.svg" alt="reports" />

                                    <div>reports</div>
                                </li>
                            </ul>
                        </article>

                        <article className={styles.settings}>
                            <div>settings</div>

                            <ul>
                                <li>
                                    <img src="/assets/sliders-h 1.svg" alt="preferences" />

                                    <div>preferences</div>
                                </li>

                                <li>
                                    <img src="/assets/badge-percent 1.svg" alt="fees-and-pricing" />

                                    <div>fees and pricing</div>
                                </li>

                                <li>
                                    <img src="/assets/clipboard-list 1.svg" alt="audit" />

                                    <div>audit logs</div>
                                </li>
                            </ul>
                        </article>
                    </>
                }
            </section>
        </aside>
    );
}

export default Sidebar;