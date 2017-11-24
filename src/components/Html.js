/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Html = ({
  styles, assets, state, content,
}) => {
  const helmet = Helmet.renderStatic()
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?rd5re8" />

        {assets.css.map(path => <link rel="stylesheet" type="text/css" key={path} href={path} />)}
        {styles}
      </head>
      <body {...bodyAttrs}>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {assets.js.map(path => <script key={path} src={path} />)}
      </body>
    </html>
  )
}

Html.propTypes = {
  styles: PropTypes.node.isRequired,
  assets: PropTypes.shape({
    css: PropTypes.array.isRequired,
    js: PropTypes.array.isRequired,
  }).isRequired,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Html
