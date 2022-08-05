import { useEffect, useState } from 'react';
import { Heading,Image } from '@chakra-ui/react';
import logo from './assets/logo.png'
import * as API from './services/launches';
import { LaunchItem } from './components/LaunchItem';

function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, [])
  

  return (
    <div>
      <Image src={logo} alt='logo' width='300px' margin={4} />
      <Heading as='h1' size='lg' m={4} > SpaceX Launches</Heading>
      <section>
      {launches.map((launch)=>(
        <LaunchItem key={launch.flight_number} {...launch} />
     ))}
      </section>
    </div>
  );
}

export default App;
