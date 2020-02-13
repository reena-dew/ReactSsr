import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RoutesConstant } from "RoutesConstant";

export default class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    public login() {
        this.props.history.push(RoutesConstant.DASHBOARD);
    }

    public render() {
        return (
            <>
            <div>Login Page</div>
            <button onClick={()=> this.login()}>Login</button>
            </>
        )
    }

}

export interface LoginState {
    username: string;
    password: string;
}

export interface LoginProps extends RouteComponentProps {

}