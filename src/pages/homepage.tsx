import React from 'react';
import { getXataClient } from '../xata';

const HomePage: React.FC = () => {
  const xata = getXataClient();

  console.log(xata.db.Users);

  return (
    <div>
      <h1>Hello from HomePage</h1>
    </div>
  );
};

export default HomePage;
