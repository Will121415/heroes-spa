import { heroes } from '../data';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" is not valid`);
    }

    return heroes.filter( hero => hero.publisher === publisher );
}