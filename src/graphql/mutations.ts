// tslint:disable
// this is an auto generated file. This will be overwritten

export const createAlbum = `mutation CreateAlbum($input: CreateAlbumInput!) {
  createAlbum(input: $input) {
    id
    name
    photos {
      items {
        id
        url
      }
      nextToken
    }
  }
}
`;
export const updateAlbum = `mutation UpdateAlbum($input: UpdateAlbumInput!) {
  updateAlbum(input: $input) {
    id
    name
    photos {
      items {
        id
        url
      }
      nextToken
    }
  }
}
`;
export const deleteAlbum = `mutation DeleteAlbum($input: DeleteAlbumInput!) {
  deleteAlbum(input: $input) {
    id
    name
    photos {
      items {
        id
        url
      }
      nextToken
    }
  }
}
`;
export const createPhoto = `mutation CreatePhoto($input: CreatePhotoInput!) {
  createPhoto(input: $input) {
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
export const updatePhoto = `mutation UpdatePhoto($input: UpdatePhotoInput!) {
  updatePhoto(input: $input) {
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
export const deletePhoto = `mutation DeletePhoto($input: DeletePhotoInput!) {
  deletePhoto(input: $input) {
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
