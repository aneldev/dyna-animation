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
  children: JSX.Element;  // actually is child!
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

  private getContainerStyle(): CSSProperties {
    const {
      show,
      perspective,
      width,
      height,
    } = this.props;

    const outputStyle: CSSProperties = {
      perspective: `${perspective}px`,
    };

    if (width) outputStyle.width = `${width}px`;
    if (height) outputStyle.height = `${height}px`;

    return outputStyle;
  }

  private getChildStyle(): CSSProperties {
    const {
      width,
      height,
    } = this.props;

    const outputStyle: CSSProperties = {};

    if (width) outputStyle.width = `${width}px`;
    if (height) outputStyle.height = `${height}px`;

    return outputStyle;
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      show,
      direction,
      duration,
      children,
    } = this.props;

    const className: string = [
      "dyna-animation-3d-flip",
      userClassName,
      `flip-direction-${direction}`,
      `dyna-animation-3d-flip--duration-${duration}`
    ].join(' ').trim();

    const child: JSX.Element = React.cloneElement(
      children,
      {style: this.getChildStyle()}
      );

    const animations: TAnimationConfig = {};
    if (show != null) animations.show = show;

    console.debug('render', {show, height: this.getContainerStyle().height});

    return (
      <DynaAnimation
        className={className}
        animations={animations}
        style={this.getContainerStyle()}
      >
        <div>{child}</div>
      </DynaAnimation>
    );
  }
}
