import React from 'react';

const Postcard = ({ post }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
      <p className="text-gray-400 text-sm mt-2">Author: {post.userId}</p>
    </div>
  );
};

export default Postcard;