import * as React from 'react';
import "./DynaAnimation3dFlip.less";
export interface IDynaAnimation3dFlipProps {
    className?: string;
    show: boolean;
    perspective: number;
    width: number;
    height: number;
    duration?: EAnimationDuration;
    direction?: EFlipDirection;
    children: JSX.Element;
}
export declare enum EFlipDirection {
    HORIZONTAL = "HORIZONTAL",
    VERTICAL = "VERTICAL",
}
export declare enum EAnimationDuration {
    MS50 = "MS50",
    MS100 = "MS100",
    MS250 = "MS250",
    MS500 = "MS500",
    MS750 = "MS750",
    S1 = "S1",
}
export declare class DynaAnimation3dFlip extends React.Component<IDynaAnimation3dFlipProps> {
    static defaultProps: IDynaAnimation3dFlipProps;
    private renderStyle();
    render(): JSX.Element;
}
