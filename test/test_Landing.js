import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import test from 'tape';
import sinon from 'sinon';
import { Landing } from '../src/components/Landing';
import LoginForm from '../src/components/LoginForm';
import Dashboard from '../src/components/Dashboard';

configure({ adapter: new Adapter() });

const getProps = (token, isAuthenticated) => {
  const authenticated = isAuthenticated;
  const login = sinon.stub();
  const tokenExpired = sinon.stub();
  const tokenValidated = sinon.stub();
  const getToken = sinon.stub().returns(token);
  const users = [];
  const activePage = 'Page';
  const activePageChanged = sinon.stub();
  const getUsers = sinon.stub();
  const deleteUser = sinon.stub();
  const getImages = sinon.stub();
  const currentImages = [];
  const images = [];
  const classes = {
    logoIcon: ''
  };
  return {
    authenticated,
    login,
    tokenExpired,
    activePage,
    tokenValidated,
    activePageChanged,
    getToken,
    users,
    deleteUser,
    getImages,
    getUsers,
    classes,
    currentImages,
    images
  };
};

test('Landing', (t) => {
  const props = getProps(null, false);
  const { getToken, tokenExpired } = props;
  shallow(<Landing {...props} />);
  t.ok(getToken.calledOnce, '✓ Calls getToken when mounting');
  t.ok(tokenExpired.calledOnce, '✓ Calls tokenExpired if getToken returns null');
  t.end();
});

test('Landing', (t) => {
  const props = getProps('token', true);
  const { getToken, tokenValidated } = props;
  shallow(<Landing {...props} />);
  t.ok(getToken.calledOnce, '✓ Calls getToken when mounting');
  t.ok(tokenValidated.calledOnce, '✓ Calls tokenValidated if getToken returns');
  t.end();
});

test('Landing', (t) => {
  const props = getProps(null, false);
  const wrapper = shallow(<Landing {...props} />);
  t.equal(
    wrapper.find(LoginForm).length,
    1,
    '✓ Renders LoginForm when authenticated is false'
  );
  t.end();
});

test('Landing', (t) => {
  const props = getProps('token', true);
  const wrapper = shallow(<Landing {...props} />);
  t.equal(
    wrapper.find(Dashboard).length,
    1,
    '✓ Displays authenticated content when authenticated is true'
  );
  t.end();
});
