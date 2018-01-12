const pkg = require('./package.json');

module.exports = {
	title: pkg.name,
	description: pkg.description,
	nav: {
		Source: 'https://github.com/gabrielcsapo/css-commons',
		Docs: './code/index.html'
	},
	body: [{
		type: 'text',
		value: '> [`css-commons`](https://github.com/gabrielcsapo/css-commons) aims to reduce the number of orphaned selectors that only contain one rule that is similar to other selectors rules.'
	}, {
		type: 'code',
		title: 'removed orphan selectors',
		value: `
    const commons = require('css-commons');

    const css = \`
      .alert.alert-black * {
        color: #fff;
      }
      .alert.alert-default {
        background-color: #cfcfc4;
        border: 1px solid #bdbdae;
      }
        .alert.alert-default * {
        color: #fff;
      }
      .badge.badge-white {
        background-color: #fff;
        color: #000;
      }
      .badge.border-white {
        color: #000;
      }
      .badge.badge-black {
        background-color: #000;
        color: #fff;
      }
      .badge.border-black {
        color: #000;
      }
      pre {
        display: block;
        padding: 10px;
        font-size: 13px;
        line-height: 1.42857143;
        word-break: break-all;
        word-wrap: break-word;
        white-space: normal;
        background-color: #f5f5f5;
        border-radius: 5px;
        border-left: 0.3rem solid transparent;
      }
      .grid > .col-1-12 {
        width: 8.333333333333332%;
        margin-left: 0%;
        margin-right: 0%;
      }
      @media screen and (min-width: 32em) {
        .grid > .col-sm-0-12 {
          display: none;
        }
        .grid > .col-sm-1-12 {
          width: 8.3333%;
          margin-left: 0%;
          margin-right: 0%;
        }
      }
    \`;

    console.log(commons(css));
  `
	}, {
		type: 'text',
		value: `
  > As you can see after pressing run, the rules that contained \`color: #fff;\` or \`color: #000;\` were combined.

  > This resulted in a bundle size that weighs in an at \`847B\` which used to be \`1206B\` this is a \`29%\` decrease in overall size.
  `
	}],
	output: './docs',
	externals: [
		'./dist/css-commons.js'
	]
};
