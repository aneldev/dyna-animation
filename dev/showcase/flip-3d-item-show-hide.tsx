import * as React from 'react';
import {IShowcaseView} from "dyna-showcase/dist/interfaces";
import {DynaAnimation3dFlip, EFlipDirection, IDynaAnimation3dFlipProps} from "../../src/DynaAnimation3dFlip";

import "./flip-3d-item-show-hide.less";

export const showcaseView: IShowcaseView = {
  slug: 'flip-3d-item-show-hide',
  title: 'Flip-3d Item, show hide',
  center: true,
  component: (
    <DynaAnimation3dFlip
      show={null}
      perspective={null}
    >
      <div className="my-flip-3d-item">content</div>
    </DynaAnimation3dFlip>
  ),
  props: [
    {
      slug: 'show horizontal',
      title: 'show-horizontal',
      props: {
        direction: EFlipDirection.HORIZONTAL,
        show: true,
        animateWidth: 400,
        perspective: 400,
      } as IDynaAnimation3dFlipProps,
    },
    {
      slug: 'hide horizontal',
      title: 'hide-horizontal',
      props: {
        direction: EFlipDirection.HORIZONTAL,
        show: false,
        animateWidth: 0,
        perspective: 400,
      }
    },
    {
      slug: 'show vertical',
      title: 'show-vertical',
      props: {
        direction: EFlipDirection.VERTICAL,
        show: true,
        animateHeight: 150,
        perspective: 400,
      } as IDynaAnimation3dFlipProps,
    },
    {
      slug: 'hide vertical',
      title: 'hide-vertical',
      props: {
        direction: EFlipDirection.VERTICAL,
        animateHeight: 0,
        show: false,
        perspective: 400,
      }
    },
  ]
};
