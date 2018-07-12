import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import test from 'tape';
import sinon from 'sinon';
import { Dashboard } from '../src/components/Dashboard';
import LoginForm from '../src/components/LoginForm';

configure({ adapter: new Adapter() });

test('Dashboard', (t) => {
  const authenticated = false;
  const login = sinon.stub();
  const tokenExpired = sinon.stub();
  const tokenValidated = sinon.stub();
  const getToken = sinon.stub().returns(null);
  const fetchAuthor = sinon.stub();
  const author = 'Author';
  const getUsers = sinon.stub();
  shallow((
    <Dashboard
      authenticated={authenticated}
      tokenExpired={tokenExpired}
      tokenValidated={tokenValidated}
      login={login}
      getToken={getToken}
      fetchAuthor={fetchAuthor}
      author={author}
      getUsers={getUsers}
    />
  ));
  t.ok(getToken.calledOnce, 'Calls getToken when mounting');
  t.ok(tokenExpired.calledOnce, 'Calls tokenExpired if getToken returns null');
  t.end();
});

test('Dashboard', (t) => {
  const authenticated = false;
  const login = sinon.stub();
  const tokenExpired = sinon.stub();
  const tokenValidated = sinon.stub();
  const getToken = sinon.stub().returns('token');
  const fetchAuthor = sinon.stub();
  const author = 'Author';
  const getUsers = sinon.stub();
  shallow((
    <Dashboard
      authenticated={authenticated}
      tokenExpired={tokenExpired}
      tokenValidated={tokenValidated}
      login={login}
      getToken={getToken}
      fetchAuthor={fetchAuthor}
      author={author}
      getUsers={getUsers}
    />
  ));
  t.ok(getToken.calledOnce, 'Calls getToken when mounting');
  t.ok(tokenValidated.calledOnce, 'Calls tokenValidated if getToken returns');
  t.end();
});

test('Dashboard', (t) => {
  const authenticated = false;
  const login = sinon.stub();
  const tokenExpired = sinon.stub();
  const tokenValidated = sinon.stub();
  const getToken = sinon.stub().returns(null);
  const fetchAuthor = sinon.stub();
  const author = 'Author';  
  const getUsers = sinon.stub();
  const wrapper = shallow((
    <Dashboard
      authenticated={authenticated}
      tokenExpired={tokenExpired}
      tokenValidated={tokenValidated}
      login={login}
      getToken={getToken}
      fetchAuthor={fetchAuthor}
      author={author}
      getUsers={getUsers}

    />
  ));
  t.equal(
    wrapper.find(LoginForm).length, 1,
    'Renders LoginForm when authenticated is false'
  );
  t.end();
});

test('Dashboard', (t) => {
  const authenticated = true;
  const login = sinon.stub();
  const tokenExpired = sinon.stub();
  const tokenValidated = sinon.stub();
  const getToken = sinon.stub().returns(null);
  const fetchAuthor = sinon.stub();
  const author = 'Author';  
  const getUsers = sinon.stub();
  const wrapper = shallow((
    <Dashboard
      authenticated={authenticated}
      tokenExpired={tokenExpired}
      tokenValidated={tokenValidated}
      login={login}
      getToken={getToken}
      fetchAuthor={fetchAuthor}
      author={author}
      getUsers={getUsers}

    />
  ));
  t.ok(
    wrapper.contains(<div>Authenticated</div>),
    'Displays authenticated content when authenticated is true'
  );
  t.end();
});
