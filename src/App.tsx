import React from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import * as queries from "./graphql/queries";
import { ListAlbumsQuery } from "./API";

const Album = () => {
  interface ListAlbumsQueryProps {
    albums: ListAlbumsQuery;
  }

  const AlbumList = (albumsProps: ListAlbumsQueryProps) => {
    const { albums } = albumsProps;

    const renderPhoto = (url : string) => {
      return <li key={url}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          { url }
        </a>
      </li>;
    }

    const renderPhotos = (albumId : string) => {
      return <Connect query={graphqlOperation(queries.getAlbum, { id: albumId })}>
        {({data, errors, loading}:any) => {
          if (loading)
            return <p>Loading photos...</p>;

          if (errors.length)
            return <p>{`${JSON.stringify(errors)}`}</p>;

          if (!data.getAlbum)
            return null;

          return <ul>
            {data.getAlbum.photos.items.flatMap(({ urls }:any) => Object.values(urls)).map(renderPhoto)}
          </ul>;
        }}
      </Connect>;
    }

    const renderAlbum = ({ id, name }:any) => {
      return <li key={id}>
        { name }
        { renderPhotos(id) }
      </li>;
    }

    const renderAlbums = (albums : any) => {
      if (albums.length) {
        return <ul>
          { albums.map(renderAlbum) }
        </ul>;
      } else {
        return 'No albums...';
      }
    }

    return (
      <div>
        <h3>Albums</h3>
        {albums && albums.listAlbums && albums.listAlbums.items
          ? renderAlbums(albums.listAlbums.items)
          : null}
      </div>
    );
  };

  return (
    <Connect query={graphqlOperation(queries.listAlbums)}>
      {({
        data,
        loading,
        error
      }: {
        data: ListAlbumsQuery;
        loading: boolean;
        error: Array<Error>;
      }) => {
        if (error) return <h3>Error</h3>;
        if (loading || !data) return <h3>Loading...</h3>;
        return <AlbumList albums={data} />;
      }}
    </Connect>
  );
};

export default Album;