import { useSearchParams } from 'react-router-dom';
import style from './search.module.css';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components/HeroCard';
import { useState } from 'react';
import { useEffect } from 'react';

export const SearchPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [heroes, setHeroes] = useState([]);

  const { q = '' } = Object.fromEntries(searchParams.entries());


  const { inputSearch, onInputChange } = useForm(
    {
      inputSearch: q
    }
  );

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  useEffect(() => {
    setHeroes(getHeroesByName(inputSearch));
  }, [])


  const onSubmit = (event) => {
    event.preventDefault();

    // if (inputSearch.length <= 2) return;

    setSearchParams(`?q=${inputSearch}`);

    setHeroes(getHeroesByName(inputSearch));

  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className={style['container']}>
        <div className={style['search']}>
          <h3>Searching</h3>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder='Search a hero'
              name='inputSearch'
              autoComplete='off'
              value={inputSearch}
              onChange={onInputChange}
            />
            <button type='submit'
              className={style['btn-search']}
            >Search</button>
          </form>
        </div>

        <div className={style['result-search']}>
          <h3>Result</h3>
          <hr />
          {
            showSearch
              ? (
                <div className={style['alert-on']}>
                  <p>Search a hero</p>
                </div>
              )
              : (showError) && (
                <div className={style['alert-off']}>
                  <p>No hero with <span>{q}</span></p>
                </div>
              )
          }
          {
            heroes.map(hero => (
              <div key={hero.id} className={style['card-container']}>
                <HeroCard {...hero} />
              </div>
            ))
          }
        </div>

      </div>

    </>
  );
};
