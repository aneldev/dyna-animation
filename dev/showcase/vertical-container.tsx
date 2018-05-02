import * as React from 'react';
import {IShowcaseView} from "dyna-showcase/dist/interfaces";
import {DynaAnimationVerticalContainer, IDynaAnimationVerticalContainerProps} from "../../src";

import "./vertical-container.less";

export const showcaseView: IShowcaseView = {
  slug: 'vertical-container',
  title: 'Vertical container, show hide',
  center: true,
  component: (
    <DynaAnimationVerticalContainer
      show={null}
      showDuration={500}
      hideDuration={1000}
    >
      <div className="vertical-container-content">
        <h1>Dear user</h1>
        <h3>I am the content</h3>
        <p>For real!</p>
      </div>
    </DynaAnimationVerticalContainer>
  ),
  props: [
    {
      slug: 'show',
      title: 'show',
      props: {
        show: true,
      } as IDynaAnimationVerticalContainerProps,
    },
    {
      slug: 'hide',
      title: 'hide',
      props: {
        show: false,
      } as IDynaAnimationVerticalContainerProps,
    },
  ]
};
