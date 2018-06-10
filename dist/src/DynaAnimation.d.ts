import * as React from "react";
import { CSSProperties } from "react";
import { TAnimationConfig } from "./interfaces";
export interface IDynaAnimationProps {
    className?: string;
    style?: CSSProperties;
    animations: TAnimationConfig;
    children: any;
}
export declare class DynaAnimation extends React.Component<IDynaAnimationProps> {
    static defaultProps: IDynaAnimationProps;
    private getClassNameForDynaAnimations;
    private getClassNameForCssTransitions;
    render(): JSX.Element;
}
