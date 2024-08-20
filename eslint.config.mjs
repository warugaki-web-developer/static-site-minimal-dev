import eslint from "@eslint/js"
import htmlEslint from "@html-eslint/eslint-plugin"

export default [
  {
    ignores: ["**/dist/**/*", "**/node_modules/**/*", ".*"],
  },
  eslint.configs.recommended,
  {
    rules: {
      // セミコロン省略スタイル
      semi: ["error", "never", { beforeStatementContinuationChars: "never" }],
      "semi-spacing": ["error", { after: true, before: false }],
      "semi-style": ["error", "first"],
      "no-extra-semi": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
    },
  },
  {
    // recommended configuration included in the plugin
    ...htmlEslint.configs["flat/recommended"],
    files: ["**/*.html"],
    rules: {
      ...htmlEslint.configs["flat/recommended"].rules,
      "@html-eslint/attrs-newline": "off",
      "@html-eslint/lowercase": "error",
      "@html-eslint/indent": ["error", "tab" | 2],
      "@html-eslint/element-newline": [
        "error",
        {
          skip: ["pre", "code", "textarea"],
        },
      ],
    },
  },
]
