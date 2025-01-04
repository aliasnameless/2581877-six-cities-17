import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Page404 from '../../pages/page-404/page-404';

import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { offers } from '../../mocks/offers';
import { fetchOffersList } from '../../store/api-actions';

const authorizationStatus: AuthorizationStatus = AuthorizationStatus.Auth;


store.dispatch(fetchOffersList());

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.Root}>
              <Route index element={<MainPage />} />
              <Route path={AppRoute.Favorites}
                element={
                  <PrivateRoute authorizationStatus={authorizationStatus}>
                    <FavoritesPage offers={offers} />
                  </PrivateRoute>
                }
              />
              <Route path={AppRoute.Offer} element={<OfferPage offers={offers} authorizationStatus={authorizationStatus} />} />
            </Route>
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path='*' element={<Page404 />} />

          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
