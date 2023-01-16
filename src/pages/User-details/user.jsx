import React from "react";
import styles from "./user.module.scss";
import { useParams } from "react-router-dom";

function User () {
    const { id } = useParams();
    
    return(
        <section>

        </section>
    );
}

export default User;