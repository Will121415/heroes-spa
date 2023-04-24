import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import style from './card.module.css';
import { useMemo } from 'react';


export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className={style['card-container']}>
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  );
};
