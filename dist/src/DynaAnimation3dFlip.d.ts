import * as React from 'react';
import "./DynaAnimation3dFlip.less";
export interface IDynaAnimation3dFlipProps {
    className?: string;
    show: boolean;
    direction?: EFlipDirection;
    children: any;
}
export declare enum EFlipDirection {
    HORIZONTAL = "HORIZONTAL",
    VERTICAL = "VERTICAL",
}
export declare class DynaAnimation3dFlip extends React.Component<IDynaAnimation3dFlipProps> {
    static defaultProps: IDynaAnimation3dFlipProps;
    render(): JSX.Element;
}
