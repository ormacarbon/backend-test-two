import React from 'react';
import Form from '../components/Form';
import Beers from '../components/Beers';

function Home() {

  // useEffect(() => {
  //   const userId = window.localStorage.getItem('userId');
  //   if (!userId) navigate('/login');
  //   if (userId) {
  //     const findUser = JSON.parse(userId);
  //     setIdUser(findUser.id);
  //   }
  // }, []);

  return (
    <div>
      <Form />
      <Beers />
    </div>
  );
}

export default Home;
