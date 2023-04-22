import { createBrowserRouter } from 'react-router-dom';
import { MarvelPage, DcPage, SearchPage, HeroPage, loaderHero } from '../heroes';
import { LoginPage } from '../auth';
import ErrorPage from '../ErrorPage';
import { RootLayout } from '../layouts';
import { PublicRoute } from './PublicRoute';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />, 
      children: [
        {
            path: 'marvel',
            element: <MarvelPage />
        },
        {
            path: 'dc',
            element: <DcPage />
        },
        {
          path: 'search',
          element: <SearchPage />
        },
        {
          path: 'hero/:heroId',
          element: <HeroPage />,
          loader: loaderHero
        }
      ]
    },
    {
      path: 'login',
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      )
    }
    
  ]);