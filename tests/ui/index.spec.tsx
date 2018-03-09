declare let global: any, jasmine: any, describe: any, clearTest: any, it: any, expect: any;

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaAnimation} from '../../src';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      (
        <DynaAnimation onClick={() => console.log('I am clicked')}>My button</DynaAnimation>
      ),
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
