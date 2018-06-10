import * as React from "react";
import "./DynaAnimationVerticalContainer.less";
export interface IDynaAnimationVerticalContainerProps {
    className?: string;
    animationEnabled?: boolean;
    autoRefresh?: boolean;
    show: boolean;
    showDuration?: number;
    hideDuration?: number;
    children: any;
}
export declare class DynaAnimationVerticalContainer extends React.Component<IDynaAnimationVerticalContainerProps> {
    static defaultProps: IDynaAnimationVerticalContainerProps;
    private observer;
    private readonly baseClassName;
    refs: {
        container: HTMLDivElement;
        content: HTMLDivElement;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: IDynaAnimationVerticalContainerProps): void;
    private className;
    refresh(): void;
    private show;
    private setContainerHeight;
    private getContentHeight;
    private setAnimation;
    render(): JSX.Element;
}
