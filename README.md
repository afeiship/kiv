# kiv
> Key includes value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/kiv
```

## usage
```js
import kiv from '@jswork/kiv';

const str2icon = {
  '@beta': '🍏',
  '@production': '🍎',
  '@upload': '🚚',
  '@cache': '📦',
};


kiv('Current msg is __@beta__.', str2icon); // Current msg is 🍏.
kiv('Current msg is __@production__.', str2icon); // Current msg is 🍎.
kiv('Current msg is __@upload__.', str2icon); // Current msg is 🚚.
kiv('Current msg is __@cache__.', str2icon); // Current msg is 📦.
kiv('Current msg is __@unknown__.', str2icon); // Current msg is ''.
kiv('Current msg is __@unknown__.', str2icon, '🍌'); // Current msg is 🍌.
```

## license
Code released under [the MIT license](https://github.com/afeiship/kiv/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/kiv
[version-url]: https://npmjs.org/package/@jswork/kiv

[license-image]: https://img.shields.io/npm/l/@jswork/kiv
[license-url]: https://github.com/afeiship/kiv/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/kiv
[size-url]: https://github.com/afeiship/kiv/blob/master/dist/kiv.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/kiv
[download-url]: https://www.npmjs.com/package/@jswork/kiv
