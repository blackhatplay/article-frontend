import React, { useState, useEffect } from "react";
import server from "../api/server";
import ArticleRenderer from "./ArticleRenderer";

const Article = ({ match }) => {
  const [state, setState] = useState({});
  const [error, setError] = useState({});
  //   console.log(match);
  useEffect(() => {
    server.get(`/post/${match.params.slug}`).then((res) => {
      if (Object.keys(res.data).length > 0) {
        setState(res.data);
      } else {
        setError({ msg: "404 No article found" });
      }
    });
  }, [match.params.slug]);
  let content = null;
  if (Object.keys(state).length > 0) {
    content = <ArticleRenderer article={state} />;
  } else if (Object.keys(error).length > 0) {
    content = <h1 className="not-found">{error.msg}</h1>;
  }
  return content;
};

export default Article;
