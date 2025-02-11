
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Page404 from '../page-404/page-404';
import { OfferListStyle } from '../../const';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { fetchOffer, fetchNearby } from '../../store/api-actions';
import { useEffect } from 'react';
import { OfferFull, OfferPreview } from '../../types';
import Header from '../../components/header/header';
import UserStatus from '../../components/user-status/user-status';
import OfferInfo from '../../components/offer-info/offer-info';
import Spinner from '../../components/spinner/spinner';
import OffersList from '../../components/offers-list/offers-list';
import { clearOffer, clearOfferNearBy } from '../../store/offer-data/offer-data';
import { getOffer, getOfferNearBy, hasOfferFetchError } from '../../store/offer-data/selectors';

function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const hasError = useAppSelector(hasOfferFetchError);

  let offer: OfferFull | null | undefined = null;
  let offersNearby: OfferPreview[] = [];
  useEffect(() => {
    if (id) {
      dispatch(fetchOffer({ id }));
      dispatch(fetchNearby({ id }));
    }
    return () => {
      dispatch(clearOffer());
      dispatch(clearOfferNearBy());
    };
  }, [dispatch, id]);
  offer = useAppSelector(getOffer);
  offersNearby = useAppSelector(getOfferNearBy);

  if (id === undefined || hasError) {
    return (<Page404 />);
  }

  return (
    <>
      <Helmet>
        <title>6 cities: {offer?.title || 'loading'}</title>
      </Helmet>
      <div className="page">
        <Header>
          <UserStatus />
        </Header>

        <main className="page__main page__main--offer">
          {offer === null ? <Spinner /> : <OfferInfo offer={offer} />}
          {offersNearby.length > 0 && <OffersList offersList={offersNearby} offerListStyle={OfferListStyle.Nearby} />}
        </main >
      </div >
    </>
  );
}

export default OfferPage;
