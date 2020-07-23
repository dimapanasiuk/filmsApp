import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

class Button extends React.Component {
  state = { text: "" };

  handleClick = () => {
    this.setState(() => {
      return { text: "PROCEED TO CHECKOUT" };
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text || this.props.text}
      </button>
    );
  }
}


let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe("Button component", () => {
  test("it shows the expected text when clicked", () => {
    act(() => {
      ReactDOM.render(<Button text="SUBSCRIBE TO BASIC" />, container);
    });

    const button = container.getElementsByTagName("button")[0];
    expect(button.textContent).toBe("SUBSCRIBE TO BASIC");

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(button.textContent).toBe("PROCEED TO CHECKOUT");
  });
});
