// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = `subscription OnCreateAlbum {
  onCreateAlbum {
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
export const onUpdateAlbum = `subscription OnUpdateAlbum {
  onUpdateAlbum {
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
export const onDeleteAlbum = `subscription OnDeleteAlbum {
  onDeleteAlbum {
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
export const onCreatePhoto = `subscription OnCreatePhoto {
  onCreatePhoto {
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
export const onUpdatePhoto = `subscription OnUpdatePhoto {
  onUpdatePhoto {
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
export const onDeletePhoto = `subscription OnDeletePhoto {
  onDeletePhoto {
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
