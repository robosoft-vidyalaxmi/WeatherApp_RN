// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);

// Wrap the config using Storybook's enhancer
module.exports = withStorybook(config);
