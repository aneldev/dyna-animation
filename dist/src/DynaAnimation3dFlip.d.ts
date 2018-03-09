import * as React from 'react';
import "./DynaAnimation3dFlip.less";
export interface IDynaAnimation3dFlipProps {
    className?: string;
    show: boolean;
    perspective: number;
    animateWidth?: number;
    animateHeight?: number;
    direction?: EFlipDirection;
    children: JSX.Element;
}
export declare enum EFlipDirection {
    HORIZONTAL = "HORIZONTAL",
    VERTICAL = "VERTICAL",
}
export declare class DynaAnimation3dFlip extends React.Component<IDynaAnimation3dFlipProps> {
    static defaultProps: IDynaAnimation3dFlipProps;
    render(): JSX.Element;
}
