import { Link } from 'react-router-dom';
import style from './card.module.css';

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
 }) => {

    const heroImg = `/assets/${ id }.jpg`; 
    const hero_characters = (alter_ego === characters) ? <></> : <p>{ characters }</p>;

  return (
    <div className={ style['card'] }> 
        <div className={ style['card-img'] }>
            <img 
              className='animate__animated animate__jackInTheBox'
              src={ heroImg } alt={ superhero } />
        </div>
        <div className={ `${style['card-body']} animate__animated animate__zoomInRight` }>
            <h5>{ superhero }</h5>
            <p>{ alter_ego }</p>

            { hero_characters }

            <p className={ style['first_appearance'] }>{ first_appearance }</p>
            <Link to={`/hero/${ id }`}>Mas...</Link>
        </div>


    </div>
  );
};
