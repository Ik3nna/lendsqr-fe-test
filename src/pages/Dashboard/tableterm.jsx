import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from "react-router-dom";
import styles from "./dashboard.module.scss";

function Tableterm ({ id, orgName, userName, email, phoneNumber, dateJoined, diff }) {

    const popover = (
        <Popover id="popover-basic" className={styles.pops}>
          <Popover.Body>
                <Link to={`/dashboard/${id}`}>
                    <span>
                        <img src="/assets/np_view.svg" alt="details" />
                    </span>
                    View Details
                </Link>
    
                <article>
                    <span>
                        <img src="/assets/np_delete-friend.svg" alt="blacklist" />
                    </span>
                    Blacklist User
                </article>
    
                <article>
                    <span>
                        <img src="/assets/np_user.svg" alt="activate" />
                    </span>
                    Activate User
                </article>
          </Popover.Body>
        </Popover>
    );

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
        else if ((diff > 0 && diff < 5)) {
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
        <tr>
            <td>{orgName}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{dateJoined}</td>
            <td>{realStat()}</td>
            <td style={{ cursor: "pointer" }}>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <img src="/assets/ic-more-vert-18px.svg" alt="more" />
                </OverlayTrigger>
            </td>
        </tr>
    );
}

export default Tableterm;