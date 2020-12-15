module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules', 'stylelint-config-recess-order'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  syntax: 'scss',
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-length': 'short',
    'declaration-colon-newline-after': null,
    'length-zero-no-unit': true,
    'number-leading-zero': 'always',
    'scss/at-rule-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'value-list-comma-newline-after': null,
  },
  root: true,
};
