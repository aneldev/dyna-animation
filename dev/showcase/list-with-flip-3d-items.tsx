import * as React from 'react';
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import {IShowcaseView} from "dyna-showcase/dist/interfaces";
import {DynaAnimation3dFlip, IDynaAnimation3dFlipProps} from "../../src";
import {EAnimationDuration, EOrientation} from "../../src";

import "./list-with-flip-3d-items.less";

export const showcaseView: IShowcaseView = {
  slug: 'list-flip-3d-item',
  title: 'List with Flip-3d Items',
  center: true,
  component: (() => {

    interface IMyItemProps {
      content: string;
    }

    class MyItem extends React.Component<IMyItemProps> {
      public render(): JSX.Element {
        return <div>
          <DynaAnimation3dFlip
            show={true}
            direction={EOrientation.VERTICAL}
            duration={EAnimationDuration.S1}
            perspective={400}
            width={400}
            height={50}
          >
            <div className="my-listed-item">{this.props.content}</div>
          </DynaAnimation3dFlip>
        </div>;
      }
    }

    interface IMyAppProps {
      items?: IData[];
    }

    interface IMyAppState {
    }

    interface IData {
      key: string;
      content: string;
    }

    class MyApp extends React.Component<IMyAppProps, IMyAppState> {

      public render(): JSX.Element {
        const {items} = this.props;
        return (
          <div className="my-app-list-animated-items-demo">
            <CSSTransitionGroup
              transitionName="transition-name"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              {items.map((item: IData) => {
                return <MyItem key={item.key} content={item.content}/>;
              })}
            </CSSTransitionGroup>
          </div>
        );
      }

    }

    return <MyApp/>
  })(),
  props: [
    {
      slug: 'set-1',
      title: '1 2 3 4 5 6 7 8 9 10',
      description: 'full, 1 to 10',
      props: {
        items: [
          {key: '#1', content: 'content 1'},
          {key: '#2', content: 'content 2'},
          {key: '#3', content: 'content 3'},
          {key: '#4', content: 'content 4'},
          {key: '#5', content: 'content 5'},
          {key: '#6', content: 'content 6'},
          {key: '#7', content: 'content 7'},
          {key: '#8', content: 'content 8'},
          {key: '#9', content: 'content 9'},
          {key: '#10', content: 'content 10'},
        ]
      },
    },
    {
      slug: 'set-2',
      title: '1 x2 3 4 5 6 7 8 9 10',
      description: 'all 10, without the 2nd',
      props: {
        items: [
          {key: '#1', content: 'content 1'},
          {key: '#3', content: 'content 3'},
          {key: '#4', content: 'content 4'},
          {key: '#5', content: 'content 5'},
          {key: '#6', content: 'content 6'},
          {key: '#7', content: 'content 7'},
          {key: '#8', content: 'content 8'},
          {key: '#9', content: 'content 9'},
          {key: '#10', content: 'content 10'},
        ]
      },
    },
  ]
};
