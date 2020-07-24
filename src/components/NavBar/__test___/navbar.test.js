import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import NavBar from "../NavBar";

import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

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
  expect(document.querySelector('ul')).toBeEmptyDOMElement();


  act(() => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar list={['test', 'data']} />
        </Router>
      </Provider>, container);
  });

  const listValues = container.getElementsByTagName("li");

  expect(listValues[0].textContent).toHaveLength(4);
  expect(listValues[1].textContent).toBe("data");
  expect(document.querySelector('li')).toBeVisible();


  const links = container.getElementsByTagName("a");

  links[0].focus();
  expect(links[0]).toHaveFocus();


  act(() => {
    listValues[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(listValues[0].textContent).toBe("test");



  const tree = renderer.create(<Provider store={store}>
    <Router>
      <NavBar list={['test', 'data']} />
    </Router>
  </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
