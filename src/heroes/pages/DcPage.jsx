import { HeroList } from '../components/HeroList';

import style from './Hero.module.css';


export const DcPage = () => {
    return (
        <div className={ style['hero-container'] }>
            <h1>Dc Page</h1>
            <hr />

            <HeroList publisher='DC Comics' />
        </div>
    );
}