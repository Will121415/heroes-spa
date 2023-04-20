import { useLoaderData } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroesById';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const HeroPage = () => {

  const { hero } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hero) {
      navigate('/marvel');
    }
  },[]);
  

  return (
    <h1>
      {
        JSON.stringify(hero, 0 , 3)
      }
    </h1>
  );
};


export const loaderHero = ({ params }) => {
  const hero =  getHeroById(params.heroId);

  return { hero }
}
