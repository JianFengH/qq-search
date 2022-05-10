import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import QqUser from './QqUser';

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container && document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  const fakeUser = {
    qq: '123456789',
    name: '张三',
    qlogo: 'https://img.uomg.com/api/qq.info?qq=123456789',
    code: 1,
    msg: '',
  };
  act(() => {
    container && ReactDOM.createRoot(container).render(<QqUser {...fakeUser} />)
  });
  const qqAvatar = container?.querySelector('.qq-avatar');
  expect(qqAvatar).toBeInTheDocument();
  const qqName = container?.querySelector('.qq-name');
  expect(qqName).toBeInTheDocument();
  const qqNumber = container?.querySelector('.qq-number');
  expect(qqNumber).toBeInTheDocument();
});