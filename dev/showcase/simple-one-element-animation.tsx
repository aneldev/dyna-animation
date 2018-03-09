import * as React from 'react';
import {IShowcaseView} from "dyna-showcase/dist/interfaces";

import {DynaAnimation} from "../../src";

import "./simple-one-element-animation.less";

export const showcaseView: IShowcaseView = {
  slug: 'simple-one-element-animation',
  title: 'Simple, one element animation',
  center: true,
  component: (
    <DynaAnimation
      className="my-container"
      animations={null}
    >
      <div className="play-box"/>
    </DynaAnimation>
  ),
  props: [
    {
      slug: 'show',
      title: 'show',
      props: {
        animations: {
          show: true,
        }
      }
    },
    {
      slug: 'hide',
      title: 'hide',
      props: {
        animations: {
          show: false,
        }
      }
    },
    {
      slug: 'show-box-up',
      title: 'show box up',
      props: {
        animations: {
          show: true,
          boxUp: true,
        }
      }
    },
    {
      slug: 'show-box-down',
      title: 'show box down',
      props: {
        animations: {
          show: true,
          boxDown: true,
        }
      }
    },
  ]
};
