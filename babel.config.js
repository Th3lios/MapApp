module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ]
    ,'module:metro-react-native-babel-preset'],
  
  plugins: [
    ["module-resolver", {
      root: ["./src"],
      alias: {
        actions: './src/redux/actions',
        assets: './src/assets',
        components: './src/components',
        screens: './src/screens',
        constants: './src/constants',
        reducers: './src/reducers',
        config: './src/config',
        utils: './src/utils',
        underscore: "lodash"
      }
    }]
  ]
};

module.exports = {
  presets: [[
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ]
  ]
}