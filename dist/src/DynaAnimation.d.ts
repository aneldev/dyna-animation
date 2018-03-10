import * as React from "react";
import { CSSProperties } from "react";
export interface IDynaAnimationProps {
    className?: string;
    style?: CSSProperties;
    animations: {
        [animationName: string]: boolean;
    };
    children: any;
}
export declare class DynaAnimation extends React.Component<IDynaAnimationProps> {
    static defaultProps: IDynaAnimationProps;
    render(): JSX.Element;
}
