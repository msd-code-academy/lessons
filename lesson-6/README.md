# Webpack

## Goal
- Understand redux enough so I know when to use it and how
- Know how Webpack can help me

## Redux recap

- Review TODO App Redux edition
- TODO:// Add Summary page
  - Show newest note added
  - Show total number of notes

## Webpack

## Why it is useful

*index-1.html*
```
  ...
  <link rel="stylesheet" type="text/css" href="syles1.css">
  <link rel="stylesheet" type="text/css" href="syles2.css">
  ...
  <script src="script-1.js"></script>
  <script src="script-2.js"></script>
  <script src="script-56.js"></script>
  ...
```

*index-2.html*
```
  ...
  <script src="bundle.js"></script>
  ...
```

## Grunt vs Webpack

```
  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    watch: {
      files: ['<%= js.files %>'],
      tasks: ['concat']
    }
  });
```

```
module.exports = {
  entry: [
    './src/app/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, 
        include:  __dirname + '/app',
        loader: 'babel?presets[]=es2015'
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  }
}
```

## Loaders



### CSS Loader

### File Loader

## Babel



## React Create App

### Eject

## Learning resources

* []()
