import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errorMsg: ""
    };

    handleLogin = (event)  => {
        event.preventDefault();
        const { email, password } = this.state;
        const fieldsToValidate = [{ email }, { password }];

        const allFieldsEntered = validateFields(fieldsToValidate);
        if (!allFieldsEntered) {
            this.setState({
                errorMsg: {
                    signin_error: "Please enter all the fields."
                }
            });
        } else {
            this.setState({
                errorMsg: {
                    signin_error: ""
                }
            });
            // login successful
        }
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };
}

export default Login;