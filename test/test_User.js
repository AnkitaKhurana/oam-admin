import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Typography from '@material-ui/core/Typography';
import test from 'tape';
import { shallow, configure } from 'enzyme';
import User from '../src/components/User';

configure({ adapter: new Adapter() });

const getProps = (name, _id, images) => {
  const currentuser = { name, _id, images };
  return {
    currentuser
  };
};

test('User', (t) => {
  const props = getProps('name', '5b336c83df44870a04c6d288', []);
  const wrapper = shallow((<User {...props} />));
  t.equal(
    wrapper.find(Typography).length, 2,
    'Returns User when User is not undefined'
  );
  t.end();
});


test('User', (t) => {
  const props = getProps(undefined, undefined, undefined);
  const wrapper = shallow(<User {...props} />);
  t.equal(
    wrapper.find(Typography).length, 0,
    'Does not returns a User when User Props is undefined'
  );
  t.end();
});
