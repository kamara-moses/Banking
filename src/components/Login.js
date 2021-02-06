import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { divide } from "lodash";

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

    render() {
        const { errorMsg } = this.state;
        return (
            <div className="login-page">
                <h1>Banking</h1>
                <div className="login-form">
                    <Form onSubmit={this.handleLogin}>
                        {errorMsg && errorMsg.signin_error && (
                            <p className="errorMsg centered-message">
                                {errorMsg.signin_error}
                            </p>
                        )}
                        <Form.Group controlled="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlled="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" palceholder="Enter password" onChange={this.handleInputChange} />
                        </Form.Group>
                        <div className="action-items">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <Link to="/register" className="btn-secondary">
                                Create Account
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default connect()(Login);