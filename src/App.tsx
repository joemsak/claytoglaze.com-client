import React from "react";
import $ from 'jquery';
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import * as queries from "./graphql/queries";
import { ListAlbumsQuery } from "./API";

interface ListAlbumsQueryProps {
  albums: ListAlbumsQuery;
}

const AlbumList = (albumsProps: ListAlbumsQueryProps) => {
  const { albums } = albumsProps;

  const renderPhoto = ({ urls, id } : any) => {
    return <img
      key={id}
      alt="Forgive us, the description is pending..."
      width="100%"
      srcSet={`
        ${urls.RES_2} 640w,
        ${urls.RES_3} 1125w,
        ${urls.RES_1} 2000w
      `}
      sizes="100vw"
      src={urls.RES_1}
    />
  }

  const renderPhotos = (albumId : string) => {
    return <Connect query={graphqlOperation(queries.getAlbum, { id: albumId })}>
      {({data, errors, loading}:any) => {
        if (loading) return null;
        if (errors.length) return null;
        if (!data.getAlbum) return null;

        return data.getAlbum.photos.items.map(renderPhoto);
      }}
    </Connect>;
  }

  const renderAlbum = ({ id, name }:any) => {
    return renderPhotos(id)
  }

  const renderAlbums = (albums : any) => {
    if (albums.length) {
      return albums.map(renderAlbum);
    } else {
      return 'No albums...';
    }
  }

  const scrollToGallery = () => {
    const target = $("#gallery")

    $('html, body').animate({
      scrollTop: target.offset()!.top
    }, 500, function() {
      var $target = $(target)
      $target.focus()

      if ($target.is(":focus")) {
        return false
      } else {
        $target.attr('tabindex','-1')
        $target.focus()
      }
    })
  };

  if (!albums.listAlbums) return null;

  return <div id="app" className="container-fluid">
    <div id="logo-wrapper">
      <div id="logo" className="mt-5"></div>
    </div>

    <div id="cover" className="d-flex justify-content-center">
      <i onClick={scrollToGallery} className="fas fa-chevron-down"></i>
    </div>

    <div id="gallery">
      { renderAlbums(albums.listAlbums.items) }
    </div>
  </div>;

};

class App extends React.Component {
  componentDidMount () {
    window.onscroll = function() { scrollFunction() }

    function scrollFunction() {
      const logo = (document.querySelector("#logo") as HTMLElement)!

      const coverHeight = (
        document.querySelector("#cover") as HTMLElement
      )!.offsetHeight * 0.55

      if (document.body.scrollTop > coverHeight || document.documentElement.scrollTop > coverHeight) {
        logo.style.width = "50px"
        logo.style.height = "50px"
        logo.classList.remove("mt-5")
        logo.classList.add("ml-3", "mt-3")
      } else {
        logo.style.width = "250px"
        logo.style.height = "250px"
        logo.classList.add("mt-5")
        logo.classList.remove("ml-3", "mt-3")
      }
    }
  }

  render () {
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
          if (error) return null;
          if (loading || !data) return null;
          return <AlbumList albums={data} />;
        }}
      </Connect>
    );
  }
};

export default App;