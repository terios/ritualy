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
  babel(),
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
/*  match('*.css', { exclude: path.resolve('node_modules') }, [
    css(),
    postcss([
      autoprefixer({ browsers: ['last 2 versions'] })
    ])
  ]), */
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

/*
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const happypack = require('webpack-blocks-happypack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SpritesmithPlugin = require('webpack-spritesmith');


const {
  devServer, addPlugins, createConfig, entryPoint, env, setOutput,
  sourceMaps, defineConstants, webpack,
} = require('webpack-blocks')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8000
const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.join(process.cwd(), 'dist')

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

const babel = () => () => ({
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
})

const assets = () => () => ({
  module: {
    rules: [
      { test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/, loader: 'url-loader?limit=8000' },
    ],
  },
})

const spritesmith = () => () =>({
  module: {
    rules: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      use: extractSass.extract({ 
          use: [{
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                sourceMap: true
              }
          }, {
              loader: "sass-loader", // compiles Less to CSS,
              options: {
                sourceMap: true
              }
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
        {test: /\.png$/, loaders: [
            'file-loader?name=i/[hash].[ext]'
        ]}
    ]
  },
  resolve: {
      //webpack 2:
      modules: ["node_modules", "spritesmith-generated"]
  },
  plugins: [
      new SpritesmithPlugin({
          src: {
              cwd: path.resolve(__dirname, 'src/images'),
              glob: '*.png'
          },
          target: {
              image: path.resolve(__dirname, 'public/sprite.png'),
              css: path.resolve(__dirname, 'src/less/sprite.scss')
          },
          apiOptions: {
              cssImageRef: "~sprite.png"
          }
      }),
      extractSass,
  ]
})

const styles = () => () => ({
  module: {
    rules: [{
        test: /\.scss$/,
        use: extractSass.extract({
          // use style-loader in development
          fallback: "style-loader", 
          use: [{
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        })
    }]
  },
  plugins: [
      extractSass
  ]
})

const resolveModules = modules => () => ({
  resolve: {
    modules: [].concat(modules, ['node_modules']),
  },
})

const config = createConfig([
  entryPoint({
    app: sourcePath,
  }),
  setOutput({
    filename: '[name].js',
    path: outputPath,
    publicPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
    })
  ]),
  //spritesmith(),
  happypack([
    babel(),
    styles(),    
  ]),
  assets(),
  resolveModules(sourceDir),
  env('development', [
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
    }),
    sourceMaps(),
    addPlugins([
      new webpack.NamedModulesPlugin(),
    ]),
  ]),

  env('production', [
    splitVendor(),
    addPlugins([
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ]),
  ]),
])

module.exports = config
*/