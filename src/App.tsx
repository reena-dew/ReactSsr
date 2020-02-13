import React from "react";
import { RouteComponentProps, withRouter, Route, Switch } from "react-router-dom";
import { RouteParams } from "Core/models/route";
import AsyncComponent from "./core/components/async.component";

export class App extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Test Project</h1>
                <div>
                    {
                        this.props.routes.map((route) => {
                            return (
                                <Route
                                    path={route.path}
                                    render={(props: any) => {
                                        return route.lazy ?
                                            <AsyncComponent moduleProvider={route.component} {...props} /> :
                                            <route.component {...props} />;
                                    }}
                                    key={route.path}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(App);
export interface AppProps extends RouteComponentProps {
    url?: string;
    routes: RouteParams[];
}

export interface AppState {

}