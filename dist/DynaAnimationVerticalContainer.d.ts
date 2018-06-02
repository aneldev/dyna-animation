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
    private className(subClassName?);
    private show(show, animate?);
    private setContainerHeight(show, height, animate);
    private getContentHeight();
    private setAnimation(show, animate);
    render(): JSX.Element;
}
