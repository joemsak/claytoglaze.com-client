// tslint:disable
// this is an auto generated file. This will be overwritten

export const getAlbum = `query GetAlbum($id: ID!) {
  getAlbum(id: $id) {
    id
    name
    photos {
      items {
        id
        urls {
          RES_1
          RES_2
          RES_3
        }
      }
      nextToken
    }
  }
}
`;
export const listAlbums = `query ListAlbums(
  $filter: ModelAlbumFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      photos {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPhoto = `query GetPhoto($id: ID!) {
  getPhoto(id: $id) {
    id
    url
    urls {
      RES_1
      RES_2
      RES_3
    }
    album {
      id
      name
      photos {
        nextToken
      }
    }
  }
}
`;
export const listPhotos = `query ListPhotos(
  $filter: ModelPhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      urls {
        RES_1
        RES_2
        RES_3
      }
      album {
        id
        name
      }
    }
    nextToken
  }
}
`;
