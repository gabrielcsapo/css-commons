# css-commons

> 👨‍👨‍👧‍👧 let's make our css a family again

`css-commons` aims to reduce the number of orphaned selectors that only contain one rule that is similar to other selectors rules.

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [css-commons](#css-commons)
	- [Installation](#installation)
	- [Usage](#usage)

<!-- /TOC -->

## Installation

```
npm install css-commons -g
```

## Usage

> `css-commons` is a commonjs module and can be placed as a script inside a page using `./dist/css-commons.js` (132k) or `./dist/css-commons.min.js` (42k)

```
cat main.css > css-commons > main.min.css
```

```js
const compile = require('css-commons')

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
```

> the above snippet will render the resulting css

```css
@media screen and (min-width: 32em) {
  .grid>.col-sm-0-12 {
    display: none;
  }
  .grid>.col-sm-1-12 {
    width: 8.3333%;
    margin-left: 0%;
    margin-right: 0%;
  }
}

.alert.alert-black *, .alert.alert-default *, .badge.badge-black {
  color: #fff;
}

.alert.alert-default {
  background-color: #cfcfc4;
  border: 1px solid #bdbdae;
}

.badge.badge-white {
  background-color: #fff;
}

.badge.badge-white, .badge.border-white, .badge.border-black {
  color: #000;
}

.badge.badge-black {
  background-color: #000;
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

.grid>.col-1-12 {
  width: 8.333333333333332%;
  margin-left: 0%;
  margin-right: 0%;
}
```

> The rules that contained `color: #fff;` or `color: #000;` were combined.

> This resulted in a bundle size that weighs in an at `847B` which used to be `1206B`, this is a 29% decrease in overall size.
