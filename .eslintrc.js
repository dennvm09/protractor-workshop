module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:protractor/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": [
    "@typescript-eslint",
    "protractor"
  ],
  "rules": {
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "only-multiline"]
  }
}
