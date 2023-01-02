import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom"
import styles from "./login.module.scss";

function Login () {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            navigate("/dashboard");
        }

        setValidated(true);
    };

    return(
        <main className={styles.container}>
            <section className={styles.imgContainer}>
                <img src="/assets/Group.svg" alt="logo" />

                <img src="/assets/pablo-sign-in 1.svg" alt="pablo" />
            </section>

            <section>
                <h4>Welcome!</h4>
                <p>Enter details to login</p>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="validationCustom01">
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email address
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationCustom01">
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>

                    <div className={styles.password}>forgot password?</div>

                    <Button type="submit">log in</Button>
                </Form>
            </section>
        </main>
    )
}

export default Login;