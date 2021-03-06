const test = require('tape');

const commons = require('../');

test('css-commons', (t) => {
	t.plan(2);

	t.test('should be able to combine children', (t) => {
		var css = `
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
    `;
		var output = commons(css);
		t.deepEqual(output, '@media screen and (min-width: 32em) {\n  .grid > .col-sm-0-12 {\n    display: none;\n  }\n\n  .grid > .col-sm-1-12 {\n    width: 8.3333%;\n    margin-left: 0%;\n    margin-right: 0%;\n  }\n}\n.alert.alert-black *,.alert.alert-default *,.badge.badge-black {\n  color:#fff; \n}\n.alert.alert-default {\n  background-color:#cfcfc4;\n  border:1px solid #bdbdae; \n}\n.badge.badge-white {\n  background-color:#fff; \n}\n.badge.badge-white,.badge.border-white,.badge.border-black {\n  color:#000; \n}\n.badge.badge-black {\n  background-color:#000; \n}\npre {\n  display:block;\n  padding:10px;\n  font-size:13px;\n  line-height:1.42857143;\n  word-break:break-all;\n  word-wrap:break-word;\n  white-space:normal;\n  background-color:#f5f5f5;\n  border-radius:5px;\n  border-left:0.3rem solid transparent; \n}\n.grid > .col-1-12 {\n  width:8.333333333333332%;\n  margin-left:0%;\n  margin-right:0%; \n}\n');
		t.equal(output.length, 854);
		t.equal(css.length, 1206);
		t.end();
	});

	t.test('shouldn\'t break up already existing optimizations', (t) => {
		const css = `
			.tooltip:before,
			[data-tooltip]:before {
			  z-index: 1001;
			  border: 6px solid transparent;
			  background: transparent;
			  content: '';
			}
		`;
		t.equal(commons(css), '.tooltip:before,[data-tooltip]:before {\n  z-index:1001;\n  border:6px solid transparent;\n  background:transparent;\n  content:\'\'; \n}\n');
		t.end();
	});

});
