import * as React from 'react';
import { CSSProperties } from 'react';
import { DynaAnimation } from "./DynaAnimation";
import { EAnimationDuration, EOrientation, TAnimationConfig } from "./interfaces";

import "./DynaAnimation3dFlip.less";

export interface IDynaAnimation3dFlipProps {
  className?: string;
  show?: boolean;
  perspective: number;
  width?: number;
  height?: number;
  duration?: EAnimationDuration;
  direction?: EOrientation;
  children: JSX.Element;
}

export class DynaAnimation3dFlip extends React.Component<IDynaAnimation3dFlipProps> {
  static defaultProps: IDynaAnimation3dFlipProps = {
    className: '',
    show: true,
    perspective: 400,
    width: null,
    height: null,
    duration: EAnimationDuration.MS250,
    direction: EOrientation.HORIZONTAL,
    children: null,
  };

  constructor(props: IDynaAnimation3dFlipProps) {
    super(props);
    const {direction, width, height} = this.props;
    if (!width && direction === EOrientation.HORIZONTAL) console.error('DynaAnimation3dFlip: Error, width should be defined for direction: EOrientation.HORIZONTAL');
    if (!height && direction === EOrientation.VERTICAL) console.error('DynaAnimation3dFlip: Error, height should be defined for direction: EOrientation.VERTICAL');
  }

  private renderStyle():JSX.Element{
    // render additional needed style, where are the key frames for width and height
    const {
      width,
      height,
    } = this.props;
    return (
      <style>
        {width ? `
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
          ` : ""}
        {height ? `
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
          ` : ""}
      </style>
    )
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      show,
      perspective,
      direction,
      width,
      height,
      duration,
      children,
    } = this.props;

    const className: string = [
      "dyna-animation-3d-flip",
      userClassName,
      `flip-direction-${direction}`,
      `dyna-animation-3d-flip--duration-${duration}`
    ].join(' ').trim();

    const style: CSSProperties = {};
    if (width) style.width = width + 'px';
    if (height) style.height = height + 'px';

    const child: JSX.Element = React.cloneElement(
      children,
      {style}
      );

    const animations: TAnimationConfig = {};
    if (show != null) animations.show = show;

    return (
      <DynaAnimation
        className={className}
        animations={animations}
        style={{perspective: `${perspective}px`}}
      >
        {this.renderStyle()}
        <div>{child}</div>
      </DynaAnimation>
    );
  }
}
