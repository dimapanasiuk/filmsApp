import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

import Card from "../Card";

// import '@testing-library/react';

// import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';


const middlewares = [];

const mockStore = configureStore(middlewares);
const actionFire = () => ({ type: 'CLICKONFILM', data: 'test' });


let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

// it("renders with or without a opportunity", () => {
//   const initialState = {};
//   const store = mockStore(initialState);
//   store.dispatch(actionFire());

//   const actions = store.getActions();
//   const expectedPayload = { type: 'CLICKONFILM', data: 'test' };

//   expect(actions).toEqual([expectedPayload]);

//   const data = {
//     id: '',
//     title: '',
//     release: 123,
//     categories: [],
//     description: '',
//     director: '',
//     duration: 123,
//     gross: '',
//     smallPoster: '',
//     stars: [],
//     topRating: 100,
//   };


//   act(() => {
//     render(
//       <Provider store={store}>
//         <Router>
//           <Card
//             id={data.id}
//             title={data.title}
//             release={data.release}
//             categories={data.categories}
//             description={data.description}
//             director={data.director}
//             duration={data.duration}
//             gross={data.gross}
//             smallPoster={data.smallPoster}
//             stars={data.stars}
//             topRating={data.topRating}
//           />
//         </Router>
//       </Provider>, container);
//   });

//   expect(document.querySelector('.main-card_starts')).toBeVisible();
// });

it("renders films data", async () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(actionFire());

  const actions = store.getActions();
  const expectedPayload = { type: 'CLICKONFILM', data: 'test' };

  expect(actions).toEqual([expectedPayload]);


  const fakeData = {
    id: '',
    title: '',
    release: 123,
    categories: [],
    description: '',
    director: '',
    duration: 123,
    gross: '',
    smallPoster: '',
    stars: [],
    topRating: 100,
  };
  //was jest.spyOn(global, "fetch").mockImplementation(() =>
  jest.fn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  await act(async () => {

    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(actionFire());

    const actions = store.getActions();
    const expectedPayload = { type: 'CLICKONFILM', data: 'test' };

    expect(actions).toEqual([expectedPayload]);

    render(
      <Provider store={store}>
        <Router>
          <Card
            id={fakeData.id}
            title={fakeData.title}
            release={fakeData.release}
            categories={fakeData.categories}
            description={fakeData.description}
            director={fakeData.director}
            duration={fakeData.duration}
            gross={fakeData.gross}
            smallPoster={fakeData.smallPoster}
            stars={fakeData.stars}
            topRating={fakeData.topRating}
          />
        </Router>
      </Provider>, container);
  });

  expect(document.querySelector('.main-card_starts')).toBeVisible();
  // expect(container.querySelector("summary").textContent).toBe(fakeData.name);
  // expect(container.querySelector("strong").textContent).toBe(fakeData.age);
  // expect(container.textContent).toContain(fakeData.address);

  // выключаем фиктивный fetch, чтобы убедиться, что тесты полностью изолированы
  // global.fetch.mockRestore();
});
