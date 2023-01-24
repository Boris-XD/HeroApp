import { heros } from "../data/heros";


export const getHerosByName = (name) => {
    console.log('ingresando a la peticion')
    name = name.toLowerCase().trim();
    if(name.length === 0) return [];
    return heros.filter(hero => hero.superhero.toLowerCase().includes(name));
}
