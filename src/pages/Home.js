import React, { useContext } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { AuthContext } from "../context/authContext";
import { GET_ALL_POSTS } from "../graphql/queries";
import PostCard from "../components/PostCard";

const Home = () => {
  const { data, loading } = useQuery(GET_ALL_POSTS);
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS);

  const { state } = useContext(AuthContext);

  if (loading) return <p className="p-5">Loading ...</p>;

  return (
    <div className="container">
      <div className="row p-5">
        {data &&
          data.allPosts.map((post) => (
            <div className="col-md-4 pt-5" key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
      </div>
      <div className="row p-5">
        <button
          onClick={() => fetchPosts()}
          className="btn btn-raised btn-primary"
        >
          Fetch Posts
        </button>
      </div>
      <hr />
      {JSON.stringify(posts)}
      <hr />
      {JSON.stringify(state.user)}
    </div>
  );
};

export default Home;
