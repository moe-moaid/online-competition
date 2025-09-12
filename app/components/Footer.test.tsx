import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { VoteProvider } from "@/lib/context/vote context";

/*
How the role is determined?
- Implicit roles (HTML elements have default roles):
  --<button> → role button
  --<a href> → role link
  --<footer> → role contentinfo
  --<header> → role banner
  --<main> → role main
-Explicit roles (when you add role="something"):
  --<div role="navigation"> → role navigation
  --<div role="dialog"> → role dialog
-Name accessible (optional name / label to distinguish between multiple same-role elements):
  --Provided by text content, aria-label, aria-labelledby, etc.
 */

  jest.mock('react-social-icons', () => ({
  SocialIcon: () => <div data-testid="social-icon" />,
}));

describe("Footer Component", () => {
  beforeEach(() => {
    render(
      <VoteProvider>
        <Footer />
      </VoteProvider>
    );
  });
  it("renders a footer", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("tests text inside p tag", () => {
    const currentYear = screen.getByTestId("date");
    expect(currentYear).toHaveTextContent(
      `ShowWithMackie © ${new Date().getFullYear()} All Rights Reserved`
    );
  });
});
