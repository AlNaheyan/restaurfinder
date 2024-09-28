import Cards from "./components/cards"
import rest from './assets/restaurant.jpg'


type restaurants = {
  image: string, 
  name: string, 
  location: string,
  reference: string,
  rating: number,
}

function App() {
  const restaurants: restaurants [] = [{
    image: rest,
    name: "Joe's Shanghai", 
    location: "46 Bowery St, New York, NY 10013",
    reference: "https://joesshanghai.com",
    rating: 4.5,
  },
  {
    image: rest,
    name: "Xi'an Famous Foods", 
    location: "45 Bayard St, New York, NY 10013",
    reference: "https://xianfoods.com",
    rating: 4.6,
  },
  {
    image: rest,
    name: "Han Dynasty", 
    location: "90 3rd Ave, New York, NY 10003",
    reference: "https://handynasty.net",
    rating: 4.4,
  },
  {
    image: rest,
    name: "Nom Wah Tea Parlor", 
    location: "13 Doyers St, New York, NY 10013",
    reference: "https://nomwah.com",
    rating: 4.3,
  },
  {
    image: rest,
    name: "Hop Kee", 
    location: "21 Mott St, New York, NY 10013",
    reference: "https://hopkeerestaurant.com",
    rating: 4.1,
  },
  {
    image: rest,
    name: "Great NY Noodletown", 
    location: "28 Bowery, New York, NY 10013",
    reference: "https://greatnynoodletown.com",
    rating: 4.0,
  },
  {
    image: rest,
    name: "Shanghai 21", 
    location: "21 Mott St, New York, NY 10013",
    reference: "https://shanghai21ny.com",
    rating: 4.4,
  },
  {
    image: rest,
    name: "Dumpling House", 
    location: "118A Eldridge St, New York, NY 10002",
    reference: "https://vanessas.com",
    rating: 4.5,
  },
  {
    image: rest,
    name: "Ping's Seafood", 
    location: "22 Mott St, New York, NY 10013",
    reference: "https://pingsseafoodny.com",
    rating: 4.2,
  },
  {
    image: rest,
    name: "Mission Chinese Food", 
    location: "171 E Broadway, New York, NY 10002",
    reference: "https://missionchinesefood.com",
    rating: 4.3,
  }]
  return (
    <>
      <div>
        <div className="text-7xl font-bold text-center my-20 ">
          <h1 className="underline decoration-sky-500 decoration-8"> RestaurFinder </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-40">
          {restaurants.map((res:restaurants)=> 
          <Cards 
          name={res.name} 
          location={res.location} 
          image={res.image} 
          reference={res.reference} 
          rating={res.rating} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
