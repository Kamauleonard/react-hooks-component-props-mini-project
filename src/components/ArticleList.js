import React from "react";
import Article from "./Article";

function ArticleList({posts, tea}) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
          teaCup={tea}
        />
      ))};
    </main>
  
)}

export default ArticleList;

