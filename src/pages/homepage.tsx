import React from 'react';
import { useQuery } from 'react-query';
import { xataWorker } from '../xata';

// Sample query using Xata's workers
const getPosts = xataWorker('getPosts', async ({ xata }) => {
  return await xata.db.Posts.sort('createdAt').getMany();
});

const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useQuery('posts', () => getPosts());

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-cyan-200">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-red-300">
        Error
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="text-orange-500">
        <h1 className="text-3xl font-bold text-orange-500 mb-4 text-center">
          Posts Example
        </h1>
        {data?.map((item) => (
          <p className="text-cyan-200 border border-cyan-200 p-1" key={item.id}>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
