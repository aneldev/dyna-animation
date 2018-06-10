import * as React from 'react';
import {IShowcaseView} from "dyna-showcase/dist/interfaces";
import {DynaAnimationVerticalContainer, IDynaAnimationVerticalContainerProps} from "../../src";

import "./vertical-container-auto-refresh.less";

export const showcaseView: IShowcaseView = {
  slug: 'vertical-container-auto-refresh',
  title: 'Vertical container, auto refresh',
  description: 'Demonstrates, how the container is responding on content height change',
  center: true,
  component: (() => {
    class MyApp extends React.Component {
      private timerHandler: any;
      private isBig: boolean = false;

      public refs: {
        internalContainer: HTMLDivElement;
      };

      public componentDidMount(): void {
        this.timerHandler = setInterval(() => {
          if (this.isBig)
            this.refs.internalContainer.style.height = "200px";
          else
            this.refs.internalContainer.style.height = "400px";
          this.isBig = !this.isBig;
        }, 1500);
      }

      public componentWillUnmount(): void {
        clearInterval(this.timerHandler);
      }

      public render(): JSX.Element {
        return (
          <DynaAnimationVerticalContainer
            className="dyna-animation-container-auto-refresh-demo"
            show
            showDuration={500}
            hideDuration={500}
          >
            <div className="vertical-container-content" ref="internalContainer">
              <h1>Dear user</h1>
              <h3>I am the content</h3>
              <p>For real!</p>
            </div>
          </DynaAnimationVerticalContainer>
        );
      }
    }

    return <MyApp/>;
  })(),
};
