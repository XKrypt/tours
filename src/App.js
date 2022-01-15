import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Loading } from './loading';
import { Tours } from './tours';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const url = 'https://course-api.com/react-tours-project'
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);

      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    console.log(tours)
  }
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>
            no tours left
          </h2>
          <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours removeTour={removeTour} tours={tours} />
    </main>
  );


}

export default App;
