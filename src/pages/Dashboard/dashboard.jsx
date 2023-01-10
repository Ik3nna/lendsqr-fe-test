import React, { useState, useEffect, useMemo } from "react";
import styles from "./dashboard.module.scss";
import Navbar from "../../components/Navbar/navbar";
import Pagination from "../../components/Pagination/pagination";
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const url = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

let PageSize = 10;

const popover = (
    <Popover id="popover-basic" className={styles.pops}>
      <Popover.Body>
            <article>
                <span>
                    <img src="/assets/np_view.svg" />
                </span>
                View Details
            </article>

            <article>
                <span>
                    <img src="/assets/np_delete-friend.svg" />
                </span>
                Blacklist User
            </article>

            <article>
                <span>
                    <img src="/assets/np_user.svg" />
                </span>
                Activate User
            </article>
      </Popover.Body>
    </Popover>
);

const dropdown = (
    <Popover id="popover-basic" className={styles.dropdown}>
      <Popover.Body>
            <Form>
                <Form.Group className="mb-3" controlId="organization">
                    <Form.Label>Organization</Form.Label>
                    
                    <Form.Select aria-label="Default select example" className={styles.sel}>
                        <option>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>

                    <Form.Control type="text" placeholder="User" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>

                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>

                    <Form.Control type="date" placeholder="Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="number">
                    <Form.Label>Phone Number</Form.Label>

                    <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                    <Form.Label>Status</Form.Label>
                    
                    <Form.Select aria-label="Default select example" className={styles.sel}>
                        <option>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <section>
                    <Button>
                        Reset
                    </Button>

                    <Button>
                        Filter
                    </Button>
                </section>
            </Form>
      </Popover.Body>
    </Popover>
);

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
    },[]);

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return dashboardData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, dashboardData]);


    if (loading) {
        return(
            <main className={styles.loading}>
                <div>Loading...</div>
            </main>
        )
    }

    return(
        <section className={styles.sf}>
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

                <Table size="md" responsive="xl">
                    <thead>
                        <tr>
                            <th>
                                organization 
                                <span>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={dropdown}>
                                        <img src="/assets/dropdown.svg" alt="dropdown" />
                                    </OverlayTrigger>
                                </span>
                            </th>
                            <th>
                                username
                                <span>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={dropdown}>
                                        <img src="/assets/dropdown.svg" alt="dropdown" />
                                    </OverlayTrigger>
                                </span>
                            </th>
                            <th>
                                email
                                <span>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={dropdown}>
                                        <img src="/assets/dropdown.svg" alt="dropdown" />
                                    </OverlayTrigger>
                                </span>
                            </th>
                            <th>
                                phone number
                                <span>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={dropdown}>
                                        <img src="/assets/dropdown.svg" alt="dropdown" />
                                    </OverlayTrigger>
                                </span>
                            </th>
                            <th>
                                date joined
                                <span>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={dropdown}>
                                        <img src="/assets/dropdown.svg" alt="dropdown" />
                                    </OverlayTrigger>
                                </span>
                            </th>
                            <th>
                                status
                                <span>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={dropdown}>
                                        <img src="/assets/dropdown.svg" alt="dropdown" />
                                    </OverlayTrigger>
                                </span>
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentTableData.map((item, index)=>{
                            const dateJoined = (new Date(item.createdAt.substring(0, 10).split("-")).toDateString());
                            const status = (new Date(item.lastActiveDate.substring(0, 10).split("-")).toDateString());
                            
                            const xStat = status.substring(11, 15);
                            const xDateJoined = dateJoined.substring(11, 15);
                            const diff = xStat - xDateJoined;

                            const realStat = ()=> {
                                if (diff < 0) {
                                    return(
                                        <div style={{
                                            backgroundColor: "rgba(228, 3, 59, 0.1)",
                                            padding: "3px 5px",
                                            textAlign: "center",
                                            borderRadius: "100px",
                                            color: "#e4033b"
                                        }}>
                                            Blacklisted
                                        </div>
                                    );
                                } 
                                else if (diff > 0 && diff < 5) {
                                    return(
                                        <div style={{
                                            backgroundColor: "rgba(57, 205, 98, 0.06)",
                                            padding: "3px 5px",
                                            textAlign: "center",
                                            borderRadius: "100px",
                                            color: "#39cd62"
                                        }}>
                                            Active
                                        </div>
                                    );
                                }
                                else if (diff > 5 && diff < 15) {
                                    return(
                                        <div style={{
                                            backgroundColor: "rgba(233, 178, 0, 0.1)",
                                            padding: "3px 5px",
                                            textAlign: "center",
                                            borderRadius: "100px",
                                            color: "#e9b200"
                                        }}>
                                            Pending
                                        </div>
                                    );
                                } 
                                else {
                                    return(
                                        <div style={{
                                            backgroundColor: "rgba(84, 95, 125, 0.06)",
                                            padding: "3px 5px",
                                            textAlign: "center",
                                            borderRadius: "100px",
                                            color: "#545f7d"
                                        }}>
                                            Inactive
                                        </div>
                                    );
                                }
                            }

                            return(
                                <tr key={index}>
                                    <td>{item.orgName}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{dateJoined}</td>
                                    <td>{realStat()}</td>
                                    <td style={{ cursor: "pointer" }}>
                                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                            <img src="/assets/ic-more-vert-18px.svg" alt="more" />
                                        </OverlayTrigger>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

                <div className={styles.pageContainer}>
                    <div className={styles.show}>
                        Showing&nbsp;<span>{currentPage * PageSize}</span>&nbsp;out of {dashboardData.length}
                    </div>

                    <Pagination
                        className={styles.page}
                        currentPage={currentPage}
                        totalCount={dashboardData.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>

            </main>
        </section>
    );
}

export default Dashboard;