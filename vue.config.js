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
      useRenderEventtrue,
      onlyProduction: true
    }
  }
}
