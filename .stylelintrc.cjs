module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",

    /* ALL */
    "stylelint-config-html",
    /* OR */
    // 'stylelint-config-html/html',
    // 'stylelint-config-html/astro',
    // 'stylelint-config-html/vue',
    // 'stylelint-config-html/xml',
    // 'stylelint-config-html/svelte',
    // 'stylelint-config-html/php',
  ],
  plugins: ["stylelint-declaration-block-no-ignored-properties"],
  rules: {
    "comment-whitespace-inside": "always",
    "plugin/declaration-block-no-ignored-properties": true,
  },
}
