module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-order"],
  "rules": {
    "indentation": 2,
    "number-leading-zero": "always",
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "selector-class-pattern": ["^[a-z0-9-_]+$", {
      "resolveNestedSelectors": true,
      "message": "Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)"
    }],
    "order/order": [
      [
        "custom-properties",
        "declarations",
        {
          "type": "at-rule",
          "name": "media"
        },
        "rules"
      ]
    ]
  }
};
