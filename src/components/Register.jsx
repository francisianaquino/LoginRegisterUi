import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import Axios from "axios";

class Register extends Component {
    state = {
        username: "",
        password: ""
    }

    usernameChangedHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordChangedHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        Axios.post("/register",
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then((response) => {
            this.props.history.push("/login");
            alert(response.data);
        }).catch((err) => {alert(err.response.data)});
    }

    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={this.usernameChangedHandler}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.passwordChangedHandler}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.register}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <Link to={"/login"}>Sign in</Link>
                </p>
            </form>
        );
    }
}

export default withRouter(Register);