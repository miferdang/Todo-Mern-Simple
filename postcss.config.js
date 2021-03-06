module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': { browsers: ['last 2 versions', '> 5%'] },
    'postcss-reporter': { clearReportedMessages: true },
	},
  autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] },
};
