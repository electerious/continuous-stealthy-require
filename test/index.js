'use strict'

const assert = require('chai').assert
const index = require('./../src/index')

describe('index()', function() {

	it('should require a module', function() {

		const result = index('path')

		assert.isObject(result)

	})

})