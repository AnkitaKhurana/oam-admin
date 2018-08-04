import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import test from 'tape';
import { shallow, configure } from 'enzyme';
import Images from '../src/components/Images';
import Image from '../src/components/Image';

configure({ adapter: new Adapter() });

const getProps = () => {
  const images = [{
    uuid: 'uuid1',
    title: 'title1',
    platform: 'uav'
  }, {
    uuid: 'uuid2',
    title: 'title2',
    platform: 'uav'
  }
  ];
  return {
    images
  };
};

test('Images component when it receives Images List', (t) => {
  const props = getProps();
  const wrapper = shallow((<Images {...props} />));
  t.equal(wrapper.dive().find(Image).length, 2, '✓ Correct Image components generated ');
  t.equal(wrapper.instance().props.images, props.images, 'Images props');
  t.end();
});

test('Images component when it does not receive Users List', (t) => {
  const props = { images: [] };
  const wrapper = shallow((<Images {...props} />));
  t.equal(wrapper.dive().find(Image).length, 0, '✓ No Image Genetated when no props received');
  t.equal(wrapper.instance().props.users, props.users);
  t.end();
});
