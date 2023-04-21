import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export const useHero = () => {
 
    const { hero } = useLoaderData();
      
    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }
  
    useEffect(() => {
      if (!hero) {
        navigate('/marvel');
      }
    }, []);


    return { ...hero, onNavigateBack };
};
