import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Postcard from "../components/post/PostCard";
import { fetchPosts } from "../features/slices/postSlice";

const Post = () => {
  const { posts, status, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  let content;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [status, dispatch])

  switch (status) {
    case 'loading':
      content = <h1 className="text-2xl font-medium">Post is loading...</h1>;
      break;
    case 'success':
      content = posts.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {posts.map((post) => (
            <Postcard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl font-medium">No posts found</h1>
      );
      break;
    case 'failed':
      content = <h1 className="text-2xl font-medium">{error}</h1>;
      break;
    default:
      content = null;
  }

  return <div className="flex justify-center items-center my-5">{content}</div>;
};

export default Post;
