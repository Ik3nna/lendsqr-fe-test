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

                    <article>
                        <div>
                            {userarr?.profile?.firstName}&nbsp;{userarr?.profile?.lastName}
                        </div>
                    </article>
                </article>
            </section>
        </main>
    );
}

export default User;