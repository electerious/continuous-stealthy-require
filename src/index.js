'use strict'

const stealthyRequire = require('stealthy-require')

/**
 * Requires a fresh, uncached module.
 * Applies an additional workaround to avoid a memory leak when running stealthyRequire multiple times.
 * This workaround is recommended by stealthyRequire.
 * @param {String} filePath - File to require.
 * @returns {*} Required module.
 */
module.exports = function(filePath) {

	// Create a shallow copy of the array
	const initialChildren = module.children.slice()

	// Force a fresh require by removing module from cache,
	// including all of its child modules.
	const requiredModule = stealthyRequire(require.cache, () => require(filePath))

	// Reset children to avoid a memory leak when repeatedly requiring fresh modules
	module.children = initialChildren

	return requiredModule

}