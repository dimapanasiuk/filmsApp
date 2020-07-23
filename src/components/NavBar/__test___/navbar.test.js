import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import NavBar from "../NavBar";


let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});



const middlewares = [];

const mockStore = configureStore(middlewares);

const actionFire = () => ({ type: 'CHOOSECATEGORY', data: 'test' });


it("renders with or without a name", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(actionFire());

  const actions = store.getActions();
  const expectedPayload = { type: 'CHOOSECATEGORY', data: 'test' };
  expect(actions).toEqual([expectedPayload]);
  // act(() => {
  //   render(
  //     <Provider store={store}>
  //     <NavBar />
  // </Provider>, container);
  // });
  // expect(container.textContent).toBe("");
});
