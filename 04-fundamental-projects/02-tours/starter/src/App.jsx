import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  }


  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }


  return <main>
    {
      tours.length === 0
        ? 
        <section className="title">
        <h2>No Tours Left</h2>
          <button type="button" style={{marginTop: '2rem'}} className="btn" onClick={() => fetchTours()}>Show Tours</button>
          </section>
        :
      <Tours tours={tours} removeTours={removeTours} />
    }
  </main>;
};
export default App;
