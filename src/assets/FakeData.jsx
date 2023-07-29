import Chance from "chance";
const chance = Chance();
export const FakeData = () => {
  console.log(chance.name());
  return chance.name();
};
