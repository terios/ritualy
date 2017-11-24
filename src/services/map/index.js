
export const getCenterFromBounds = (bounds) => {
  return {
    lat: (bounds.sw.lat + bounds.ne.lat) / 2,
    lng: (bounds.sw.lng + bounds.ne.lng) / 2,
  }
}
