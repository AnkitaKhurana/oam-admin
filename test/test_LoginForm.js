import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import test from 'tape';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import LoginForm from '../src/components/LoginForm';

configure({ adapter: new Adapter() });

const getProps = () => {
  const login = sinon.stub().returns();
  return {
    login,
  };
};

test('Login Form', (t) => {
  const props = getProps();
  const wrapper = shallow((<LoginForm {...props} />));
  t.equal(wrapper.instance().props.login.notCalled, true, '✓ Login Function not called Initially');
  wrapper.setState({
    email: '',
    password: ''
  });
  t.equal(wrapper.dive().find('form').length, 1, '✓ One form Element inside component');
  wrapper.dive().find('form').simulate('submit', { preventDefault() {} });
  t.equal(wrapper.instance().props.login.calledOnce, true, '✓ Login function called once on form submit ✓');
  t.end();
});

