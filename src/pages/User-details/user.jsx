import React, { useState, useEffect } from "react";
import styles from "./user.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import { useGlobalContext } from "../../components/context";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";

function User () {
    const { id } = useParams();
    const navigate = useNavigate();
    const { dashboardData } = useGlobalContext();
    const [userarr, setUserarr] = useState({});

    useEffect(()=>{
        const data = dashboardData.find((item)=> item.id === id);
        setUserarr(data);
    },[dashboardData, id])

    return(
        <main className={styles.sf}>
            <Navbar />

            <section className={styles.content}>
                <article className={styles.container}>
                    <div className={styles.back} onClick={()=>navigate(-1)}>
                        <BsArrowLeft fontSize="27px" />

                        <div>Back to Users</div>
                    </div>

                    <div className={styles.deets}>
                        <div className={styles.ud}>User Details</div>

                        <div className={styles.buttons}>
                            <div>blacklist user</div>
                            <div>activate user</div>
                        </div>
                    </div>

                    <article className={styles.header}>
                        <img src="/assets/avatar.svg" alt="avatar" />

                        <div>
                            {userarr?.profile?.firstName}&nbsp;{userarr?.profile?.lastName}

                            <p>{userarr?.accountNumber}</p>
                        </div>

                        <div className={styles.vl}></div><img src="/assets/tier.svg" alt="tier" /><div className={styles.vl}></div>
                        
                        <section>
                            <div>&#8358;{userarr?.education?.monthlyIncome[1]}</div>
                            
                            <div>{userarr?.profile?.bvn}/Providus Bank</div>
                        </section>

                        <div className={styles.tabs}>
                            <div>General Details</div>
                            <div>Documents</div>
                            <div>Bank Details</div>
                            <div>Loans</div>
                            <div>Savings</div>
                            <div>App and System</div>
                        </div>
                    </article>
                </article>
            </section>
        </main>
    );
}

export default User;