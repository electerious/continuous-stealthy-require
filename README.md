# continuous-stealthy-require

[![Travis Build Status](https://travis-ci.org/electerious/continuous-stealthy-require.svg?branch=master)](https://travis-ci.org/electerious/continuous-stealthy-require) [![Coverage Status](https://coveralls.io/repos/github/electerious/continuous-stealthy-require/badge.svg?branch=master)](https://coveralls.io/github/electerious/continuous-stealthy-require?branch=master) [![Dependencies](https://david-dm.org/electerious/continuous-stealthy-require.svg)](https://david-dm.org/electerious/continuous-stealthy-require#info=dependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/electerious/continuous-stealthy-require.svg)](https://greenkeeper.io/)

Like [`stealthy-require`](https://github.com/analog-nico/stealthy-require), but with a build-in workaround to avoid a memory leak when running `stealthyRequire` multiple times.

## Install

```
npm install continuous-stealthy-require
```

## Usage

```js
const continuousStealthyRequire = require('continuous-stealthy-require')

continuousStealthyRequire('fs')
```

## API

### Parameters

- `path` `{String}` Module name or path to a module.

### Returns

- `requiredModule` `{*}` Fresh, uncached module.