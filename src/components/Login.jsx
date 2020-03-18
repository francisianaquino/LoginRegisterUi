import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import Axios from "axios";

class Login extends Component {
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

    login = (e) => {
        e.preventDefault();
        Axios.post("/login",
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then((response) => {
            this.props.setAuthenticated(true);
            this.props.history.push("/home");
            alert(response.data);
        }).catch((err) => {alert(err.response.data)});
    }

    render() {
        return (
            <form>
                <h3>Login</h3>

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

                <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Submit</button>
                <p className="forgot-password text-right">
                    No account yet? Create one <Link to={"/register"}>here</Link>
                </p>
            </form>
        );
    }
}

export default withRouter(Login);