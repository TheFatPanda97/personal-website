module.exports = {
  "publicPath": "/",

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: false,
      onlyProduction: true
    }
  }
}
