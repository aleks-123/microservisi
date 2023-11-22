import React, { useEffect, useState } from 'react';

function ProtectedRoute() {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/posts`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setPosts(data.data.posts);
      } else {
        console.log('Error', data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <h3>Posts:</h3>
      {posts.map((post) => (
        <div key={post._id}>
          <h4>{post.title}</h4>
          <p>{post.plot}</p>
          <p>Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default ProtectedRoute;
