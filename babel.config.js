module.exports = {
  presets: [['react-app', { flow: false, typescript: true }]],
  env: {
    development: {
      plugins: ['babel-plugin-styled-components'],
    },
  },
};
