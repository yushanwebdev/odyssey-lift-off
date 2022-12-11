import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      thumbnail
      title
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{`Error! ${error.message}`}</div>;

  return <Layout grid>{JSON.stringify(data)}</Layout>;
};

export default Tracks;
