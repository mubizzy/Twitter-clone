import React from "react";

const News = ({ article }) => {
  return (
    <a rel="noreferrer" href={article.url} target="_blank">
      {" "}
      <div className="space-y-0.5">
        <h6 className="text-sm font-bold">{article.title}</h6>
        <p className="text-xs font-medium text-gray-500">
          {article.source.name}
        </p>
      </div>
    </a>
  );
};

export default News;
