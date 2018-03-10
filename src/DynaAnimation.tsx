import * as React from "react";
import {CSSProperties} from "react";
import {TAnimationConfig} from "./interfaces";

export interface IDynaAnimationProps {
  className?: string;
  style?: CSSProperties;
  animations: TAnimationConfig;
  children: any;
}

export class DynaAnimation extends React.Component<IDynaAnimationProps> {
  static defaultProps: IDynaAnimationProps = {
    className: null,
    style: {},
    animations: {},
    children: null,
  };

  private getClassNameForDynaAnimations(): string[] {
    const {animations} = this.props;
    return Object.keys(animations)
      .map((animationName: string) => {
        if (animations[animationName] != null) {
          return `animation-${animationName}-${animations[animationName] ? 'on' : 'off'}`;
        }
        return null;
      })
      .filter((v: string) => !!v);
  };

  private getClassNameForCssTransitions(): string[] {
    const {animations} = this.props;
    return Object.keys(animations)
      .map((animationName: string) => {
        if (animations[animationName] != null) {
          return `css-transition-${animationName}-${animations[animationName] ? 'enter' : 'leave'}`;
        }
        return null;
      })
      .filter((v: string) => !!v);
  };

  public render(): JSX.Element {
    const {
      className: userClassName,
      animations,
      style,
      children,
    } = this.props;

    const className: string = [
      'dyna-animation',
      userClassName || '',
      ...this.getClassNameForDynaAnimations(),
      ...this.getClassNameForCssTransitions(),
    ].join(' ').trim();

    return (
      <div
        className={className}
        style={style}
      >{children}</div>
    );
  }
}
