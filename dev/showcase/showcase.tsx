import * as React from 'react';
import {showcaseView as oneItemShowcaseView} from "./simple-one-element-animation";
import {showcaseView as flip3dItemShocaseView} from "./flip-3d-item-show-hide";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";

export default {
  logo: <Logo/>,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna-animation</h3>
          <h4>complete and simple animation "engine"</h4>
          <p><strong>It is simple!!!</strong></p>
          <p><code>dyna-animation</code> is switching the classes in only two states, <code>on</code> and <code>off</code>.</p>
          <p>Your css implementation is performing animation with <a href="https://css-tricks.com/snippets/css/keyframe-animation-syntax/">keyframes</a>.</p>
          <p>With key frames you have the full control of animation, so you have unlimited states.</p>
          <p><i>Ideally</i> you don't need the <code>dyna-animation</code> but this makes the switch from the props easier.</p>
        </div>
      ),
    },

    oneItemShowcaseView,

    flip3dItemShocaseView,

    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-animation">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-animation">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
