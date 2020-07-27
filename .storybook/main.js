const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const custom = require('./webpack.config.js');

module.exports = {
  //stories: ["../stories/**/*.stories.js"],
  stories: ["../src/components/atoms/button/button.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    webpackFinal: (config) => {
      return { ...config, module: { ...config.module, rules: custom.module.rules } };
    }

    /*
    config.module.rules.map(rule => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.slice().map(subRule => {
          if (subRule.test instanceof RegExp && subRule.test.test(".scss")) {
            return {
              ...subRule,
              use: [
                ...subRule.use,
                {
                  loader: require.resolve("sass-resources-loader"),
                  options: {
                    resources: [
                      path.resolve(__dirname, "../src/styles/global.scss"),
                    ],
                  },
                },
              ],
            }
          }
          return subRule
        })
      }
      return rule
    })
    return config
  },
  */

}
