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
      perspective={400}
      width={400}
      height={150}
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
      } as IDynaAnimation3dFlipProps,
    },
    {
      slug: 'hide horizontal',
      title: 'hide-horizontal',
      props: {
        direction: EFlipDirection.HORIZONTAL,
        show: false,
      }
    },
    {
      slug: 'show vertical',
      title: 'show-vertical',
      props: {
        direction: EFlipDirection.VERTICAL,
        show: true,
      } as IDynaAnimation3dFlipProps,
    },
    {
      slug: 'hide vertical',
      title: 'hide-vertical',
      props: {
        direction: EFlipDirection.VERTICAL,
        show: false,
      }
    },
  ]
};
