const webpack = require('webpack')
const {
  createConfig,
  match,

  // Feature blocks
  babel,
  css,
  devServer,
  file,
  uglify,

  // Shorthand setters
  addPlugins,
  setEnv,
  entryPoint,
  env,
  resolve,
  setOutput,
  sourceMaps,
  defineConstants,
} = require('webpack-blocks')
const postcss = require('@webpack-blocks/postcss')
const less = require('webpack-blocks-less')
const extractText = require('@webpack-blocks/extract-text')
const autoprefixer = require('autoprefixer')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith');
const happypack = require('webpack-blocks-happypack')


const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8000
const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')


const resolveModules = modules => () => ({
  resolve: {
    modules: [].concat(modules, ['node_modules']),
  },
})

module.exports = createConfig([
  entryPoint({
    app: sourcePath,
  }),
  setOutput({
    filename: '[name].[hash].js',
    path: outputPath,
    publicPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  resolve({
    modules: [].concat(sourceDir, ['node_modules']),
  }),
  happypack([
    babel(),
  ]),
  match('*.less', { exclude: path.resolve('node_modules') }, [
    postcss({
      plugins: [
        autoprefixer({ browsers: ['last 2 versions'] })
      ]
    }),
    css(),
    less({ minimize: true }),    
    env('production', [extractText()])
  ]),
  match(['*.gif', '*.jpg', '*.jpeg', '*.png', '*.webp'], [
    file()
  ]),
  addPlugins([
    new SpritesmithPlugin({
      src: {
          cwd: path.resolve(__dirname, 'src/images'),
          glob: '*.png'
      },
      target: {
          image: path.resolve(__dirname, 'public/sprite.png'),
          css: path.resolve(__dirname, 'src/less/sprite.less')
      },
      apiOptions: {
          cssImageRef: "/sprite.png"
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(process.cwd(), 'public/index.html'),
    }),
  ]),
  setEnv({
    NODE_ENV: process.env.NODE_ENV
  }),
  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
    }),
    devServer.proxy({
      '/api': { target: 'http://localhost:3000' }
    }),
    sourceMaps()
  ]),
  env('production', [
    uglify(),
    addPlugins([
      new webpack.LoaderOptionsPlugin({ minimize: true }),
    ])
  ])
])