import OfferCard from '/six-cities-react/page components/offer card/offer-card.tsx';
const img = Array.from<string>({length: 4}).fill('https://w.forfun.com/fetch/e6/e6044cb0b978ce39ff76b57402ebd1de.jpeg');

function App (){
  return (
    <div>
      {img.map((image) => (
        // eslint-disable-next-line react/jsx-key
        <OfferCard renderImg={image} />

      ))}
    </div>
  );
}
export default App;
// Array.from({length:4},(_,i)=>({id:`фото:${i+1}`}))

