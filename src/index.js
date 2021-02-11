"use strict";

module.exports = {
	extends: "stylelint-config-standard",
	defaultSeverity: "warning",
	rules: {
		"indentation": 2,
		"selector-type-no-unknown": [
			true,
			{
				"ignore": [
					"custom-elements",
					"default-namespace"
				]
			}
		]
	}
};