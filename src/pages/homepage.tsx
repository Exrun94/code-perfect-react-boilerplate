import React from 'react';
import { useQuery } from 'react-query';
import { xata } from '../xata';

const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useQuery('users', async () =>
    // xata fetch users example
    xata.db.Users.getAll()
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="text-orange-500">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Home Page</h1>
      </div>
    </div>
  );
};

export default HomePage;
