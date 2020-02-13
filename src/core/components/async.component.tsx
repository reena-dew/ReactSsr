import React, { PureComponent } from "react";

export default class extends PureComponent<any, any> {
    private unmounted = false;
    constructor(props: any) {
        super(props);

        this.state = {
            Component: null
        };
    }

    public async componentDidMount() {
        if (!this.state.Component) {
            const Component: any = await this.props.moduleProvider();
            if (!this.unmounted) {
                this.setState({ Component: Component.default });
            }
        }
    }

    public componentWillUnmount() {
        this.unmounted = true;
    }

    public render() {
        const { Component } = this.state;

        return (
            Component && <Component {...this.props} />
        );
    }
}
