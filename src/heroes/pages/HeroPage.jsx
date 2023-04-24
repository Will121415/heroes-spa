import { getHeroById } from '../helpers';
import { useHero } from '../hooks/useHero';
import style from './hero.module.css';

export const HeroPage = () => {

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    onNavigateBack
  } = useHero();

  return (
    <div className={ style['hero-detail'] }>
      <div className={ style['hero-img'] }>
        <img 
          className='animate__animated animate__bounceInUp'
          src={`/assets/${ id }.jpg`} alt={ superhero } 
        />
      </div>
      <div className={ `${style['hero-body']} animate__animated animate__bounceInDown` }>
        <h2>{ superhero }</h2>
        <ul>
          <li>{ publisher }</li>
          <li>{ alter_ego }</li>
          <li>{ first_appearance }</li>
          <li>{ characters }</li>
        </ul>
        <div className={ style['hero-btn'] }>
          <button 
            className={ style['hero-btn'] }
            onClick={ onNavigateBack }
          >
            Back
          </button>
        </div>
      </div>


    </div>
  );
};


export const loaderHero = ({ params }) => {
  const hero = getHeroById(params.heroId);

  return { hero }
}
