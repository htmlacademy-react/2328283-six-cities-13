import NotFound from '../pages/not-found/not-found';
import Main from '../pages/main/main';
import Login from '../components/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import PrivateRoute from '../components/private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OfferTypes from '../types/offer-types';


type AppProps = {
  countOffers: number;
   Offers:OfferTypes;
}

function App ({countOffers,Offers}:AppProps){
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path={AppRoute.Main}
          element={<Main countOffers={countOffers}
            Offers={Offers}
/>
                  }
        />

        <Route
          path={AppRoute.Login}
          element ={<Login/>}
        />

        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />

        <Route
          path={AppRoute.Favorites}
          element ={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites/>
            </PrivateRoute>

          }
        />
        <Route
          path={AppRoute.Offer}
          element ={<Offer/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


