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
                        <img src={userarr?.profile?.avatar} alt="avatar" />

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

                    <article className={styles.mdeets}>
                        <section>
                            <h5>Personal Information</h5>

                            <article>
                                <div>
                                    <p>full name</p>
                                    <p>{userarr?.profile?.firstName}&nbsp;{userarr?.profile?.lastName}</p>
                                </div>

                                <div>
                                    <p>phone number</p>
                                    <p>{userarr?.profile?.phoneNumber}</p>
                                </div>

                                <div>
                                    <p>email address</p>
                                    <p>{userarr?.email}</p>
                                </div>

                                <div>
                                    <p>bvn</p>
                                    <p>{userarr?.profile?.bvn}</p>
                                </div>

                                <div>
                                    <p>gender</p>
                                    <p>{userarr?.profile?.gender}</p>
                                </div>

                                <div>
                                    <p>marital status</p>
                                    <p>Single</p>
                                </div>

                                <div>
                                    <p>children</p>
                                    <p>None</p>
                                </div>

                                <div>
                                    <p>type of residence</p>
                                    <p>{userarr?.profile?.address}</p>
                                </div>
                            </article>

                        </section><hr />

                        <section>
                            <h5>Education and Employment</h5>

                            <article className={styles.ee}>
                                <div>
                                    <p>level of education</p>
                                    <p>{userarr?.education?.level}</p>
                                </div>

                                <div>
                                    <p>employment status</p>
                                    <p>{userarr?.education?.employmentStatus}</p>
                                </div>

                                <div>
                                    <p>sector of employment</p>
                                    <p>{userarr?.education?.sector}</p>
                                </div>

                                <div>
                                    <p>duration of employment</p>
                                    <p>{userarr?.education?.duration}</p>
                                </div>

                                <div>
                                    <p>office email</p>
                                    <p>{userarr?.education?.officeEmail}</p>
                                </div>

                                <div>
                                    <p>monthly income</p>
                                    <p>&#8358;{userarr?.education?.monthlyIncome[1]}&nbsp;-&nbsp;&#8358;{userarr?.education?.monthlyIncome[0]}</p>
                                </div>

                                <div>
                                    <p>loan repaymet</p>
                                    <p>None</p>
                                </div>
                            </article>
    
                        </section><hr />

                        <section>
                            <h5>Socials</h5>

                            <article>
                                <div>
                                    <p>twitter</p>
                                    <p>{userarr?.socials?.twitter}</p>
                                </div>

                                <div>
                                    <p>facebook</p>
                                    <p>{userarr?.socials?.facebook}</p>
                                </div>

                                <div>
                                    <p>instagram</p>
                                    <p>{userarr?.socials?.instagram}</p>
                                </div>
                            </article>
                        </section><hr />

                        <section>
                            <h5>Guarantor</h5>

                            <article>
                                <div>
                                    <p>full name</p>
                                    <p>{userarr?.guarantor?.firstName}&nbsp;{userarr?.guarantor?.lastName}</p>
                                </div>

                                <div>
                                    <p>phone number</p>
                                    <p>{userarr?.guarantor?.phoneNumber}</p>
                                </div>

                                <div>
                                    <p>gender</p>
                                    <p>{userarr?.guarantor?.gender}</p>
                                </div>

                                <div>
                                    <p>address</p>
                                    <p>{userarr?.guarantor?.address}</p>
                                </div>
                            </article>
                        </section>
                    </article>
                </article>
            </section>
        </main>
    );
}

export default User;