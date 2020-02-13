import React from "react";

export default class Login extends React.Component<DashboardProps, DashboardState> {

    constructor(props: DashboardProps) {
        super(props);
        if (typeof window === 'undefined') {
            global.window = {}
        }
        const initialData: any = (window as any).initialData;
        this.state = {
            username: initialData && initialData.username
        };

        console.log('dashboard props ', this.props.staticContext);
        console.log('initial data ', initialData);
    }

    public render() {
        return (
            <>
                <div>Dashboard</div>
                <span>Welcome, {this.state.username}</span>
            </>
        )
    }

}

export interface DashboardState {
    username: string;

}

export interface DashboardProps {

}