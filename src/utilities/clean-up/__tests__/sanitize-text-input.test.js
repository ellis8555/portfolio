import { sanitizeComment } from "../sanitize-text-input";

describe("results to return HTML entity", () => {
  test("<", () => {
    const charsToReplace = "<";
    const cleanString = sanitizeComment(charsToReplace);
    expect(cleanString).toBe("&lt;");
  });
  test(">", () => {
    const charsToReplace = ">";
    const cleanString = sanitizeComment(charsToReplace);
    expect(cleanString).toBe("&gt;");
  });
  test("&", () => {
    const charsToReplace = "&";
    const cleanString = sanitizeComment(charsToReplace);
    expect(cleanString).toBe("&amp;");
  });
  test('"', () => {
    const charsToReplace = '"';
    const cleanString = sanitizeComment(charsToReplace);
    expect(cleanString).toBe("&quot;");
  });
  test("'", () => {
    const charsToReplace = "'";
    const cleanString = sanitizeComment(charsToReplace);
    expect(cleanString).toBe("&#39;");
  });
  test("/", () => {
    const charsToReplace = "/";
    const cleanString = sanitizeComment(charsToReplace);
    expect(cleanString).toBe("&#47;");
  });
});
