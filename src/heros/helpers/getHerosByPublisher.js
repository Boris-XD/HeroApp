import { heros } from "../data/heros";

export const getHerosByPublisher = (publisher) => {
  const validCommics = ["DC Comics", "Marvel Comics"];
  if (!validCommics.includes(publisher)) {
    throw new Error("Parameter is not a valid Publisher!");
  }

  return heros.filter((hero) => hero.publisher === publisher);
};
