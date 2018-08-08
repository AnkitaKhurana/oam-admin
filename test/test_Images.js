import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import test from 'tape';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Images from '../src/components/Images';
import Image from '../src/components/Image';

configure({ adapter: new Adapter() });

const getProps = (imagesArray) => {
  const images = imagesArray;
  const deleteImage = sinon.stub();
  const imageFilterCalled = sinon.stub();
  const imageFilterChanged = sinon.stub();
  const imageFilter = '';
  const getImages = sinon.stub();
  return {
    images, deleteImage, imageFilter, imageFilterCalled, imageFilterChanged, getImages
  };
};

test('Images component when it receives Images List', (t) => {
  const props = getProps([{
    uuid: 'uuid1',
    title: 'title1',
    platform: 'uav'
  }, {
    uuid: 'uuid2',
    title: 'title2',
    platform: 'uav'
  }]);
  const wrapper = shallow((<Images {...props} />));
  t.equal(wrapper.dive().find(Image).length, 2, '✓ Correct Image components generated ');
  t.equal(wrapper.instance().props.images, props.images, 'Images props');
  t.end();
});

test('Images component when it does not receive Users List', (t) => {
  const props = getProps([]);
  const wrapper = shallow((<Images {...props} />));
  t.equal(wrapper.dive().find(Image).length, 0, '✓ No Image Genetated when no props received');
  t.equal(wrapper.instance().props.users, props.users);
  t.end();
});
