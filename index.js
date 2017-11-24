/** @module css-commons */

const css = require('css');

/**
 * combines orphaned and similar selectors with others
 * @param  {string} original - the original css string
 * @return {string} - the mutated css string
 * @example
const commons = require('css-commons');
const css = `
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
`;
var output = commons(css);

 */
module.exports = (original) => {
	const obj = css.parse(original, {});

	let declartions = {};
	let pass = {};
	let output = '';

	obj.stylesheet.rules.forEach((rule) => {
		if(!rule.declarations) {
			output += css.stringify({
				'type': 'stylesheet',
				'stylesheet': {
					'rules': [rule]
				}
			}) + '\n';
			return;
		}
		rule.declarations.forEach((decl) => {
			var key = `${decl.property}:${decl.value}`;
			if(declartions[key]) {
				declartions[key] = declartions[key].concat(rule.selectors);
			} else {
				declartions[key] = rule.selectors;
			}
		});
	});

	Object.keys(declartions).forEach((s) => {
		// if there is only one child, stack these for later
		if(declartions[s].length === 1) {
			if(pass[declartions[s][0]]) {
				pass[declartions[s][0]].push(s);
			} else {
				pass[declartions[s][0]] = [s];
			}
		} else {
			// optimize by doing a second pass and collating selectors
			const key = `${declartions[s].join(',')}`;
			if(pass[key]) {
				pass[key] = pass[key].concat([s]);
			} else {
				pass[key] = [s];
			}
		}
	});

	// now output the final value
	Object.keys(pass).forEach((s) => {
		output += `${s} {\n\u00A0 ${pass[s].join(';\n\u00A0\u00A0')}; \n}` + '\n';
	});

	return output;
};
