import * as React from "react";

import "./DynaAnimationVerticalContainer.less";

export interface IDynaAnimationVerticalContainerProps {
  className?: string;
  show: boolean;
  showDuration?: number;  // in ms
  hideDuration?: number;  // in ms
  children: any;
}

export class DynaAnimationVerticalContainer extends React.Component<IDynaAnimationVerticalContainerProps> {
  static defaultProps: IDynaAnimationVerticalContainerProps = {
    className: "",
    show: false,
    showDuration: 250,
    hideDuration: 150,
    children: null,
  };
  private readonly baseClassName: string = "dyna-animation-vertical-height-container";
  public refs: {
    container: HTMLDivElement;
    content: HTMLDivElement;
  };

  public refresh(): void {
    const {show} = this.props;
    if (!show) return;
    this.show(true);
  }

  public componentDidMount(): void {
    this.show(this.props.show, false);
  }

  public componentWillReceiveProps(nextProps: IDynaAnimationVerticalContainerProps): void {
    if (nextProps.show !== this.props.show) {
      this.show(nextProps.show);
    }
  }

  private className(subClassName = ""): string {
    return `${this.baseClassName}${subClassName || ""}`;
  }

  private show(show: boolean, animate: boolean = true): void {
    if (show) {
      this.setContainerHeight(show, this.getContentHeight(), animate);
    }
    else {
      this.setContainerHeight(show, 0, animate);
    }
  }

  private setContainerHeight(show: boolean, height: number, animate: boolean): void {
    this.setAnimation(show, animate);
    this.refs.container.style.height = `${height}px`;
  }

  private getContentHeight(): number {
    return this.refs.content.offsetHeight;
  }

  private setAnimation(show: boolean, animate: boolean): void {
    const {showDuration, hideDuration} = this.props;
    let duration: number;
    if (animate) {
      duration = show ? showDuration : hideDuration;
    }
    else {
      duration = 0;
    }
    this.refs.container.style.transition = `height ${duration}ms ease-in-out`;
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      children,
    } = this.props;

    const className: string = [
      this.className(),
      userClassName,
    ].join(' ').trim();

    return (
      <div className={className} ref="container">
        <div className={this.className('__content')} ref="content">
          {children}
        </div>
      </div>
    );
  }
}