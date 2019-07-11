import fetch from "isomorphic-fetch";
import dynamic from "next/dynamic";
import React from "react";

import "graphiql/graphiql.css";

// Use `next/dynamic` import to avoid the following warning:
// Warning: Expected server HTML to contain a matching <div> in <div>.
// https://github.com/zeit/next.js/issues/3866#issuecomment-466975295
const GraphiQL: any = dynamic(() => import("graphiql"), { ssr: false });

const url = "http://localhost:5000/graphql";

function graphQLFetcher(graphQLParams: any) {
  return fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams),
  }).then((response: any) => response.json());
}

const GraphiQLPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <GraphiQL fetcher={graphQLFetcher} />
    </div>
  );
};

export default GraphiQLPage;
