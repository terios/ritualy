import { foursquare as fs } from 'config'
import head from 'lodash/head'
//import { compose } from 'redux'


export const getImageForList = (photos, size = fs.sizes.list) => {
    const suffix = head(head(photos).items).suffix;
    return `${fs.prefix}${size}${suffix}`
}
