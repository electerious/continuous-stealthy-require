# continuous-stealthy-require

![Build](https://github.com/electerious/continuous-stealthy-require/workflows/Build/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/electerious/continuous-stealthy-require/badge.svg?branch=master)](https://coveralls.io/github/Malvid/components-lookup?branch=master)

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