import * as React from 'react';
import {DynaAnimation} from "./DynaAnimation";

import "./DynaAnimation3dFlip.less";

export interface IDynaAnimation3dFlipProps {
  className?: string;
  show: boolean;
  perspective: number;
  direction?: EFlipDirection;
  children: any;
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
    direction: EFlipDirection.HORIZONTAL,
    children: null,
  };

  public render(): JSX.Element {
    const {
      className: userClassName,
      show,
      perspective,
      direction,
      children
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
        <div>{children}</div>
      </DynaAnimation>
    );
  }
}
