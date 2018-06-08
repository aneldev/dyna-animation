import * as React from "react";
import "./DynaAnimationVerticalContainer.less";
export interface IDynaAnimationVerticalContainerProps {
    className?: string;
    animationEnabled?: boolean;
    show: boolean;
    showDuration?: number;
    hideDuration?: number;
    children: any;
}
export declare class DynaAnimationVerticalContainer extends React.Component<IDynaAnimationVerticalContainerProps> {
    static defaultProps: IDynaAnimationVerticalContainerProps;
    private readonly baseClassName;
    refs: {
        container: HTMLDivElement;
        content: HTMLDivElement;
    };
    refresh(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IDynaAnimationVerticalContainerProps): void;
    private className;
    private show;
    private setContainerHeight;
    private getContentHeight;
    private setAnimation;
    render(): JSX.Element;
}
