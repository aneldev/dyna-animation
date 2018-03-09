import * as React from 'react';
import {DynaAnimation} from "./DynaAnimation";

import "./DynaAnimation3dFlip.less";
import {CSSProperties} from "react";

export interface IDynaAnimation3dFlipProps {
  className?: string;
  show: boolean;
  perspective: number;
  width?: number;
  height?: number;
  direction?: EFlipDirection;
  children: JSX.Element;
}

export enum EFlipDirection {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

export class DynaAnimation3dFlip extends React.Component<IDynaAnimation3dFlipProps> {
  static defaultProps: IDynaAnimation3dFlipProps = {
    className: '',
    show: true,
    perspective: 400,
    width: null,
    height: null,
    direction: EFlipDirection.HORIZONTAL,
    children: null,
  };

  private renderStyle():JSX.Element{
    const {
      className: userClassName,
      width,
      height,
    } = this.props;
    return (
      <style>
        {`
             @keyframes container-width-show {
                from {
                  width: 0;
                }
                to {
                  width: ${width}px;
                }
              }
              @keyframes container-width-hide {
                from {
                  width: ${width}px;
                }
                to {
                  width: 0;
                }
              }
             @keyframes container-height-show {
                from {
                  height: 0;
                }
                to {
                  height: ${height}px;
                }
              }
              @keyframes container-height-hide {
                from {
                  height: ${height}px;
                }
                to {
                  height: 0;
                }
              }
          `}
      </style>
    )
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      show,
      perspective,
      direction,
      children,
    } = this.props;

    const className: string = [
      "dyna-animation-3d-flip",
      userClassName,
      `flip-direction-${direction}`,
    ].join(' ').trim();

    return (
      <DynaAnimation
        animations={{show}}
        className={className}
        style={{perspective: `${perspective}px`}}
      >
        {this.renderStyle()}
        <div>{children}</div>
      </DynaAnimation>
    );
  }
}
