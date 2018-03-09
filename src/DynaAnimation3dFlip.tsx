import * as React from 'react';
import {DynaAnimation} from "./DynaAnimation";

import "./DynaAnimation3dFlip.less";
import {CSSProperties} from "react";

export interface IDynaAnimation3dFlipProps {
  className?: string;
  show: boolean;
  perspective: number;
  animateWidth?: number;
  animateHeight?: number;
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
    animateWidth: null,
    animateHeight: null,
    direction: EFlipDirection.HORIZONTAL,
    children: null,
  };

  public render(): JSX.Element {
    const {
      className: userClassName,
      show,
      perspective,
      direction,
      animateWidth,
      animateHeight,
      children,
    } = this.props;

    const className: string = [
      "dyna-animation-3d-flip",
      userClassName,
      `flip-direction-${direction}`,
    ].join(' ').trim();

    const contentStyle: CSSProperties = {};
    // if (animateWidth != null) contentStyle.width = `${animateWidth}px`;
    // if (animateHeight != null) contentStyle.height = `${animateHeight}px`;

    return (
      <DynaAnimation
        animations={{show}}
        className={className}
        style={{perspective: `${perspective}px`}}
      >
        <style>
          {`body {border: 2px solid red} `}
        </style>
        <div>{React.cloneElement(children, {style: contentStyle})}</div>
      </DynaAnimation>
    );
  }
}
