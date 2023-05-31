// path: src/layouts/register.ts

/**
 * Register layouts in the app instance
 *
 * @param {App<Element>} app
 */
export function registerLayouts(app) {
  const layouts = import.meta.globEager('@/layouts/*.vue')
  Object.entries(layouts).forEach(([, layout]) => {
    const lay = layout
    lay.default.name = layout?.default?.__name
    app.component(lay?.default?.name, lay?.default)
  })
}
