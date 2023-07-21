// import OfferCard from './offer-card/offer-card';
// import Favorites from '/six-cities-react/src/pages/favorites/favorites';
import Main from '/six-cities-react/src/pages/main/main';

type AppProps = {
  countOffers: number;
}

function App ({countOffers}:AppProps){
  return (
    <div>
      <Main countOffers={countOffers} />

    </div>
  );
}

export default App;


