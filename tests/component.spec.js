import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactRadioGroup from '../src/main';

import 'next-js-core2';

describe('Basic Test', () => {
  test('Child render as usual', () => {
    let result = null;
    const items = [
      {
        label: 'optino1',
        value: 'v1'
      },
      {
        label: 'optino2',
        value: 'v2'
      },
      {
        label: 'optino3',
        value: 'v3'
      }
    ];
    const component = mount(
      <ReactRadioGroup
        onChange={(e) => {
          console.log('change.');
          result = e.target.value;
        }}
        defaultValue="v2"
        name="abc"
        items={items}
      />
    );
    const children = component.find(
      '.react-radio-group .react-radio-group__item'
    );

    expect(children.length).toBe(3);

    // change not work:
    children
      .at(0)
      .find('.is-label')
      .simulate('click');
  });
});
