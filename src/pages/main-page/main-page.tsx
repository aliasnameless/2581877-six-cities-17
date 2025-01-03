import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Offer } from '../../types';
import OffersList from '../../components/offers-list/offers-list';
import { mapStartPosition } from '../../const';
import { OfferListStyle } from '../../const';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link header__logo-link--active" to="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <div className="tabs">
              <section className="locations container">
                <ul className="locations__list tabs__list">
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Paris</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Cologne</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Brussels</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item tabs__item--active">
                      <span>Amsterdam</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Hamburg</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Dusseldorf</span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <div className="cities">
            <div className="cities__places-container container">
              <OffersList offers={offers} mapStartPosition={mapStartPosition} offerListStyle={OfferListStyle.Main} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
