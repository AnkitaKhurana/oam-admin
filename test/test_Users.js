import React from 'react';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import test from 'tape';
import { shallow, configure } from 'enzyme';
import ListItem from '@material-ui/core/ListItem';
import Users from '../src/components/Users';
import User from '../src/components/User';

configure({ adapter: new Adapter() });

const getProps = () => {
  const users = [
    { name: 'Name1', _id: 12345 },
    { name: 'Name2', _id: 21345 },
    { name: 'Name3', _id: 345 }
  ];
  const deleteUser = sinon.stub().returns(null);
  return {
    users,
    deleteUser
  };
};

test('Users component when it receives Users List', (t) => {
  const props = getProps();
  const wrapper = shallow((<Users {...props} />));
  wrapper.setState({ currentuser: { name: 'Name1', _id: 12345 } });
  t.equal(wrapper.dive().find(ListItem).length, 3, '✓ Correct Items generated');
  t.equal(wrapper.dive().find(User).length, 1, '✓ User component found');
  t.equal(wrapper.instance().props.users, props.users, '✓ Correct props ');
  t.equal(wrapper.instance().state.currentuser.name, 'Name1', 'State Updated');
  t.equal(wrapper.instance().props.deleteUser.notCalled, true, 'Delete User function not called Initally');
  t.end();
});

test('Users component when it does not receive Users List', (t) => {
  const deleteUser = sinon.stub().returns(null);
  const props = { users: [], deleteUser };
  const wrapper = shallow((<Users {...props} />));
  t.equal(wrapper.dive().find(ListItem).length, 0, '✓ Correct Items generated');
  t.equal(wrapper.instance().props.users, props.users, '✓ Correct props');
  t.end();
});
