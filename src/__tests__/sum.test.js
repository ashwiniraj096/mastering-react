import { sum } from "../Components/sum";

test("check sum is adding two numbers", () => {
  const result = sum(2, 3);
  //assertion
  expect(result).toBe(5);
});
