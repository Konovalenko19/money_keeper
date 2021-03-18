module.exports = (pathPrefix = 'src') => {
  const list = [
    { key: 'api', value: '/api' },
    { key: 'components', value: '/components' },
    { key: 'context', value: '/context' },
    { key: 'utils', value: '/utils' },
  ];

  return list.map((alias) => ({
    ...alias,
    value: `${pathPrefix}${alias.value}`,
  }));
};
