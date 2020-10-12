import React from "react"
import { shallow } from "enzyme"
import Button from "./Button";

describe("TimerButton", () => {
  let container: any;

  beforeEach(() => {
    container = shallow(
      <Button
        functionality={jest.fn()}
        buttonValue={""}
      />
    )
  })

  it("should render a <button />", () => {
    expect(container.find("button").length).toBeGreaterThanOrEqual(1)
  })
})