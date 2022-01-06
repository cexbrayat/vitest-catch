import { main } from "./main";

const utils = {
  something: jest.fn(),
};

jest.mock("./utils", () => ({ useUtils: () => utils }));
const log = jest.spyOn(console, "log");

describe("main", () => {
  test("should call", () => {
    main();
    expect(utils.something).toHaveBeenCalled();
    expect(log).toHaveBeenCalledWith("something called");
  });

  test("should throw", () => {
    utils.something.mockImplementation(() => {
      throw new Error("oh no");
    });
    main();
    expect(utils.something).toHaveBeenCalled();
    expect(log).toHaveBeenCalledWith("something threw");
  });
});
