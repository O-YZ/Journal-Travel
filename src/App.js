import TravelData from "./data";
import TripCard from './components/TripCard.js';
import Header from "./components/Header.js"


function App() {

  const tripElements = TravelData.map(
    (trip) =>{
      return <TripCard key={trip.id} trip={trip} />
    }
  )
console.log(tripElements)

  return (
    <div>
    <Header />
    <div className="trip-listing">{tripElements}
    </div>
    </div>
  );
}

export default App;