import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../components/BugForm";

test("renders BugForm and submits a bug", () => {
  const onBugCreated = jest.fn();
  render(<BugForm onBugCreated={onBugCreated} />);

  fireEvent.change(screen.getByPlaceholderText("Title"), {
    target: { value: "Test Bug" },
  });
  fireEvent.change(screen.getByPlaceholderText("Description"), {
    target: { value: "This is a test bug" },
  });
  fireEvent.click(screen.getByText("Report Bug"));

  expect(onBugCreated).toHaveBeenCalled();
});
