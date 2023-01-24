import { heros } from '../data/heros';
export const getHeroById = ( heroId ) => {
  console.log('Me volvi a renderizar')
  return heros.find(hero => hero.id === heroId);
}