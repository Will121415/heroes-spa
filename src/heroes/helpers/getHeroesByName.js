import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) {
        console.log('vacio');
        
        return [];
    }

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().trim().includes( name )
    )

}