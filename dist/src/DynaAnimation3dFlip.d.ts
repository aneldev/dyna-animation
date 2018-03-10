import * as React from 'react';
import { EAnimationDuration, EOrientation } from "./interfaces";
import "./DynaAnimation3dFlip.less";
export interface IDynaAnimation3dFlipProps {
    className?: string;
    show: boolean;
    perspective: number;
    width: number;
    height: number;
    duration?: EAnimationDuration;
    direction?: EOrientation;
    children: JSX.Element;
}
export declare class DynaAnimation3dFlip extends React.Component<IDynaAnimation3dFlipProps> {
    static defaultProps: IDynaAnimation3dFlipProps;
    private renderStyle();
    render(): JSX.Element;
}