import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS, TOTAL_POSTS } from "../graphql/queries";
import PostCard from "../components/PostCard";
import PostPagination from "../components/PostPagination";

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, loading } = useQuery(GET_ALL_POSTS, {
    variables: { page },
  });

  const { data: postCount } = useQuery(TOTAL_POSTS);

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

      <PostPagination page={page} setPage={setPage} postCount={postCount} />
    </div>
  );
};

export default Home;
