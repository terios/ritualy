import { foursquare as fs } from 'config'
import head from 'lodash/head'
// import { compose } from 'redux'


export const getImageForList = (photos, size = fs.sizes.list) => {
  console.log('head(head(photos))', photos);
  if(photos && photos.length>0 && head(photos).items) {
    const suffix = head(head(photos).items).suffix
    return `${fs.prefix}${size}${suffix}`
  }
  return ''
}
