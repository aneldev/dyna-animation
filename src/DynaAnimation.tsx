import * as React from "react";

export interface IDynaAnimationProps {
  className?: string;
  animations: {
    [animationName: string]: boolean;
  };
  children: any;
}

export class DynaAnimation extends React.Component<IDynaAnimationProps> {
  static defaultProps: IDynaAnimationProps = {
    className: null,
    animations: {},
    children: null,
  };

  public render(): JSX.Element {
    const {
      className: userClassName,
      animations,
      children,
    } = this.props;

    const className: string = [
      'dyna-animation',
      userClassName || '',
      Object.keys(animations).map((animationName: string) => `animation-${animationName}-${animations[animationName] ? 'on' : 'off'}`).join(' '),
    ].join(' ').trim();

    return <div className={className}>{children}</div>;
  }
}
