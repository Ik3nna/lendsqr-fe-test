import React from "react";
import styles from "./dashboard.module.scss";
import Navbar from "../../components/Navbar/navbar";

function Dashboard () {
    return(
        <>
            <Navbar />

            <main className={styles.content}>
                <section className={styles.container}>
                    <div>users</div>

                    <article>
                        <div className={styles.card}>
                            <img src="/assets/users-dash.svg" alt="dashboard-user" />

                            <div>users</div>

                            <div>2,453</div>
                        </div>

                        <div className={styles.card}>
                            <img src="/assets/active-users.svg" alt="active-users" />

                            <div>active users</div>

                            <div>2,453</div>
                        </div>

                        <div className={styles.card}>
                            <img src="/assets/users-with-loans.svg" alt="users-with-loans" />

                            <div>users with loans</div>

                            <div>12,453</div>
                        </div>

                        <div className={styles.card}>
                            <img src="/assets/users-with-savings.svg" alt="users-with-savings" />

                            <div>users with savings</div>

                            <div>2,453</div>
                        </div>
                    </article>
                </section>

                
            </main>
        </>
    );
}

export default Dashboard;