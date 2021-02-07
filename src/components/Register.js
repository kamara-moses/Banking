import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { validateFields } from "../utils/common";
import { Link } from "react-router-dom";

class Register extends React.Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        cpassword: "",
        successMsg: "",
        errorMsg: "",
        isSubmitted: false
    };

    registerUser = (event) => {
        event.preventDefault();
        const { first_name, last_name, email, password, cpassword } = this.state;

        const fieldToValidate = [
            { first_name },
            { last_name },
            { email },
            { password },
            { cpassword }
        ];

        const allFieldsEntered = validateFields(fieldToValidate);
        if(!allFieldsEntered) {
            this.setState({
                errorMsg: {
                    signup_error: "Please enter all the fields."
                }
            });
        } else {
            if (password !== cpassword) {
                this.setState({
                    errorMsg: {
                        signup_error: "Password and confirm password does not match."
                    }
                });
            } else {
                this.setState({ isSubmitted: true });
            }
        }
    };
}