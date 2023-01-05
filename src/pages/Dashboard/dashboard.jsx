import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.scss";
import Navbar from "../../components/Navbar/navbar";

const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

function Dashboard () {
    const [loading, setLoading] = useState(false);
    const [dashboardData, setDashboardData] = useState([]);

    const fetchData = ()=> {
        setLoading(true);
        
        fetch(url)
        .then(response => {
          if(response.ok) {
            return response;
          }
          else {
            let error = new Error("Error " + response.status + ": " + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
          let errmess = new Error(error.message);
          throw errmess;
        })
        .then(response => response.json())
        .then(data => {
          setDashboardData(data)
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
          console.log(error.message)
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    if (loading) {
        return(
            <main className={styles.loading}>
                <h3>Loading...</h3>
            </main>
        );
    }

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