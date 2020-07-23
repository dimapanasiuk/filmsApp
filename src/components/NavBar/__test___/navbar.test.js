import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import NavBar from "../NavBar";



let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


const middlewares = [];

const mockStore = configureStore(middlewares);

const actionFire = () => ({ type: 'CHOOSECATEGORY', data: 'test' });


it("renders with or without a opportunity", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(actionFire());

  const actions = store.getActions();
  const expectedPayload = { type: 'CHOOSECATEGORY', data: 'test' };
  expect(actions).toEqual([expectedPayload]);

  act(() => {
    render(
      <Provider store={store}>
        <NavBar list={[]} />
      </Provider>, container);
  });

  expect(container.textContent).toBe("");

  act(() => {
    render(
      <Provider store={store}>
        <Router>
        <NavBar list={['test', 'data']} />
        </Router>
      </Provider>, container);
  });

  const list = container.getElementsByTagName("li")[0];
  expect(list.textContent).toBe("test");


  act(() => {
    render(
      <Provider store={store}>
        <Router>
        <NavBar list={['test', 'data']} />
        </Router>
      </Provider>, container);
  });

  const list2 = container.getElementsByTagName("li")[1];
  expect(list2.textContent).toBe("data");
});
