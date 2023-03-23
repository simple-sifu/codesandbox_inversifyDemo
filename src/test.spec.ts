import Presenter from "./Presenter";
import { container, createContainer } from "./Dependencies/IOC";

beforeEach(() => {
  createContainer("fake");
});

it("run code in a fake context", () => {
  const viewModel = container.get(Presenter).load();
  expect(viewModel.message).toBe("fake message");
});
