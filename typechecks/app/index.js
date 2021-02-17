'use strict';

const config = require('config');

module.exports = {

	/**
	 * getConfig
	 * @returns {Config}
	 * <p>Returns the loaded config Object
	 */
	'getConfig': function () {
		return config;
	},

	/**
	 * isCaseSensitiveValuesCheck
	 * @returns {*|boolean}
	 * <p>Returns the boolean config caseSensitiveValuesCheck. If not set the default 'false' will be used.
	 */
	'isCaseSensitiveValuesCheck': function () {
		return (this.getConfig().caseSensitiveValuesCheck || false);
	},

	/**
	 * typeOf
	 * @param obj
	 * @return {string}
	 * <p>Checks the type of the given parameter. Returns the following values:
	 * <dl>
	 *  <dt>'array'</dt>
	 *  <dd>If the param is not null and the method <code>Array.isArray()</code> returns true the String 'array' is returned.</dd>
	 *
	 *  <dt>'function'</dt>
	 *  <dd>If the param is a function the String 'object' is returned.</dd>
	 *
	 *  <dt>Primitives 'boolean', 'bigint', 'number', 'string', 'symbol'</dt>
	 *  <dd>If the param is type of Boolean, BigInt, Number, String or Symbol the lowercase String of the Type is returned.</dd>
	 *
	 *  <dt>'null'</dt>
	 *  <dd>If the param is null the String 'null' is returned.</dd>
	 *
	 *  <dt>'object'</dt>
	 *  <dd>
	 *      If the param is null or of type Object the String 'object' is returned. Special checked instances are:
	 *      <ul>
	 *          <li>Date
	 *          <li>Map
	 *          <li>RegExp
	 *          <li>Set
	 *          <li>WeakerMap
	 *          <li>WeakerSet
	 *      </ul>.
	 *      In these cases also the lowercase string of the type is returned.
	 *  </dd>
	 *
	 *  <dt>'undefined'</dt>
	 *  <dd>If the param is undefined the String 'undefined' is returned.</dd>
	 *
	 *  <dt>'unknown'</dt>
	 *  <dd>If the param is not null and not one of the other mentioned types the value 'unknown' is returned.</dd>
	 * </dl>
	 */
	'typeOf': function (obj) {
		if (this.isUndefined(obj)) {
			return 'undefined';
		}
		else if (this.isNull(obj)) {
			return 'null';
		}
		else {
			// primitive types
			if (this.isBoolean(obj)) {
				return 'boolean';
			}
			else if (this.isBigInt(obj)) {
				return 'bigint';
			}
			else if (this.isNumeric(obj)) {
				return 'number';
			}
			else if (this.isString(obj)) {
				return 'string';
			}
			else if (this.isSymbol(obj)) {
				return 'symbol';
			}
			else if (this.isArray(obj)) {
				return 'array';
			}
			else if (this.isFunction(obj)) {
				return 'function';
			}
			else if (this.isObject(obj)) {
				if (this.isDate(obj)) {
					return 'date';
				}
				else if (this.isMap(obj)) {
					return 'map';
				}
				else if (this.isRegExp(obj)) {
					return 'regexp';
				}
				else if (this.isSet(obj)) {
					return 'set';
				}
				else if (this.isWeakMap(obj)) {
					return 'weakmap';
				}
				else if (this.isWeakSet(obj)) {
					return 'weakset';
				}
				else {
					return (typeof obj);
				}
			}
			else {
				return 'unknown';
			}
		}
	},

	/**
	 * isArray
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'array' otherwise false.
	 */
	'isArray': function (obj) {
		return (Array.isArray(obj));
	},

	/**
	 * isBoolean
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'boolean' otherwise false.
	 */
	'isBoolean': function (obj) {
		return ('boolean' === typeof obj || '[object Boolean]' === toString.call(obj));
	},

	/**
	 * isBooleanValue
	 * @param obj
	 * @return {boolean}
	 * <p>TODO
	 */
	'isBooleanValue': function (obj) {
		return ( this.isTrue( obj ) || this.isFalse( obj ) );
	},

	/**
	 * isBigInt
	 * @param obj
	 * @return {boolean}
	 * <p>TODO
	 */
	'isBigInt': function (obj) {
		return ('bigint' === typeof obj || '[object BigInt]' === toString.call(obj));
	},

	/**
	 * isDate
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'date' otherwise false.
	 */
	'isDate': function (obj) {
		return (this.isObject(obj) && (obj instanceof Date));
	},

	/**
	 * isEmpty
	 * @param obj
	 * @return {boolean}
	 * <p>Checks the value depending on the type of the parameter object. Returns true, if the obj is null/undefined, an
	 * empty Array or an empty String, otherwise true will be returned.
	 */
	'isEmpty': function (obj) {
		if (this.isNull(obj) || this.isUndefined(obj)) {
			return true;
		}
		else if (this.isArray(obj)) {
			return (obj.length === 0);
		}
		else if (this.isString(obj)) {
			return (obj.trim().length === 0);
		}
		else if (this.isObject(obj)) {
			// because Object.keys(new Date()).length === 0;
			// we have to do some additional check
			return ( (Object.keys(obj).length === 0) && (obj.constructor === Object) );
		}
		return false;
	},

	/**
	 * isEmptyString
	 * @param string
	 * @return {boolean}
	 * <p>Checks the object for type String and its value on not empty.
	 */
	'isEmptyString': function (string) {
		return ( this.isString(string) && this.isEmpty(string) );
	},

	/**
	 * isFalse
	 * @param obj
	 * @return {boolean}
	 * <p>
	 */
	'isFalse': function (obj) {
		if (this.isBoolean(obj)) {
			return this.isFalseBoolean( obj );
		}
		else if (this.isNumeric(obj)) {
			return this.isFalseNumber(obj);
		}
		else if (this.isString(obj)) {
			return this.isFalseString(obj);
		}
		return false;
	},

	/**
	 * isFalseBoolean
	 * @param boolean {boolean}
	 * @return {boolean}
	 * <p>
	 */
	'isFalseBoolean': function (boolean) {
		return ( this.isBoolean(boolean) && ( false === boolean ) );
	},

	/**
	 * isFalseNumber
	 * @param number {number}
	 * @return {boolean}
	 * <p>
	 */
	'isFalseNumber': function (number) {
		let bIs = false;

		if (this.isNumeric(number)) {
			if (this.isArray(config.falseValues.numeric)) {
				for (var numericBool of config.falseValues.numeric) {

					if ( (bIs = (numericBool == number)) ) break;
				}
			}
			else {
				bIs = (config.falseValues.numeric == number);
			}
		}
		return bIs;
	},

	/**
	 * isFalseString
	 * @param string {string}
	 * @return {boolean}
	 * <p>
	 */
	'isFalseString': function (string) {
		let bIs = false;

		if (this.isString(string)) {
			let trimmedString = string.trim();
			if ( !this.isCaseSensitiveValuesCheck() ) {
				trimmedString = trimmedString.toLowerCase();
			}

			let stringBooleanValues;
			if (string.trim().length > 1) {
				stringBooleanValues = config.falseValues.string;
			}
			else {
				stringBooleanValues = config.falseValues.character;
			}

			if (this.isArray(stringBooleanValues)) {
				for (let stringBool of stringBooleanValues) {
					stringBool = stringBool.trim();

					if ( !this.isCaseSensitiveValuesCheck() ) {
						stringBool = stringBool.toLowerCase();
					}

					if ( (bIs = (trimmedString === stringBool)) )
						break;
				}
			}
			else {
				stringBooleanValues = stringBooleanValues.trim();

				if ( !this.isCaseSensitiveValuesCheck() ) {
					stringBooleanValues = stringBooleanValues.toLowerCase();
				}

				bIs = (trimmedString === stringBooleanValues);
			}
		}
		return bIs;
	},

	/**
	 * isFunction
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'function' otherwise false.
	 */
	'isFunction': function (obj) {
		return ('function' === typeof obj);
	},

	/**
	 * isJSONString
	 * @param string
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and checks for type 'string'. If true a JSON parse tests the object. When no exeption is thrown true will be returned otherwise false.
	 * Attention: Numbers, booleans and null will also return true - these are valid JSON values!
	 */
	'isJSONString': function (string) {
		let bIs = false;

		if (this.isString(string)) {
			try {
				JSON.parse(string);
				bIs = true;
			}
			catch (e) {}
		}
		return bIs;
	},

	/**
	 * isMap
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'map' otherwise false.
	 */
	'isMap': function (obj) {
		return (this.isObject(obj) && (obj instanceof Map));
	},

	/**
	 * isNaN
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>isNaN(obj)</code>.
	 */
	'isNaN': function (obj) {
		return isNaN(obj);
	},

	/**
	 * isNotEmpty
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>isEmpty</code> and returns the inverted value.
	 */
	'isNotEmpty': function (obj) {
		return (!this.isEmpty(obj));
	},

	/**
	 * isNotEmptyString
	 * @param string
	 * @return {boolean}
	 * <p>Checks the value depending on the type of the parameter object. Returns true, if the obj is null/undefined, an
	 * empty Array or an empty String, otherwise true will be returned.
	 */
	'isNotEmptyString': function (string) {
		return ( this.isString(string) && !this.isEmpty(string) );
	},

	/**
	 * isNull
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'null' otherwise false.
	 */
	'isNull': function (obj) {
		return (null === obj);
	},

	/**
	 * isNumeric
	 * @param number
	 * @returns {boolean}
	 * <p>Checks the value for numeric type.
	 */
	'isNumeric': function (number) {
//		return ( (!isNaN(number) && (!isNaN(parseFloat(number))) && isFinite(number)) );
//		return ( !isNaN(number) && 'number' === this.typeOf(number) );
		return ('number' === typeof number || '[object Number]' === toString.call(number));
	},

	/**
	 * isObject
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'object' otherwise false.
	 */
	'isObject': function (obj) {
		return ('object' === typeof obj);
	},

	/**
	 * isRegExp
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'set' otherwise false.
	 */
	'isRegExp': function (obj) {
		return (this.isObject(obj) && (obj instanceof RegExp));
	},

	/**
	 * isSet
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'set' otherwise false.
	 */
	'isSet': function (obj) {
		return (this.isObject(obj) && (obj instanceof Set));
	},

	/**
	 * isString
	 * @param string
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'string' otherwise false.
	 */
	'isString': function (string) {
		return ('string' === typeof string || '[object String]' === toString.call(string));
	},

	/**
	 * isSymbol
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'symbol' otherwise false.
	 */
	'isSymbol': function (obj) {
		return ('symbol' === typeof obj || '[object Symbol]' === toString.call(obj));
	},

	/**
	 * isTrue
	 * @param obj
	 * @return {boolean}
	 * <p>
	 */
	'isTrue': function (obj) {
		if (this.isBoolean(obj)) {
			return this.isTrueBoolean(obj);
		}
		else if (this.isNumeric(obj)) {
			return this.isTrueNumber(obj);
		}
		else if (this.isString(obj)) {
			return this.isTrueString(obj);
		}
		return false;
	},

	/**
	 * isTrueBoolean
	 * @param boolean {boolean}
	 * @return {boolean}
	 * <p>
	 */
	'isTrueBoolean': function (boolean) {
		return ( this.isBoolean(boolean) && ( true === boolean ) );
	},

	/**
	 * isTrueNumber
	 * @param number {number}
	 * @return {boolean}
	 * <p>
	 */
	'isTrueNumber': function (number) {
		let bIs = false;

		if (this.isNumeric(number)) {
			if (this.isArray(config.trueValues.numeric)) {
				for (var numericBool of config.trueValues.numeric) {

					if ( (bIs = (numericBool == number)) )
						break;
				}
			}
			else {
				bIs = (config.trueValues.numeric == number);
			}
		}
		return bIs;
	},

	/**
	 * isTrueString
	 * @param string {string}
	 * @return {boolean}
	 * <p>
	 */
	'isTrueString': function (string) {
		let bIs = false;

		if (this.isString(string)) {
			let trimmedString = string.trim();
			if ( !this.isCaseSensitiveValuesCheck() ) {
				trimmedString = trimmedString.toLowerCase();
			}

			let stringBooleanValues;
			if (string.trim().length > 1) {
				stringBooleanValues = config.trueValues.string;
			}
			else {
				stringBooleanValues = config.trueValues.character;
			}

			if (this.isArray(stringBooleanValues)) {
				for (let stringBool of stringBooleanValues) {
					stringBool = stringBool.trim();

					if ( !this.isCaseSensitiveValuesCheck() ) {
						stringBool = stringBool.toLowerCase();
					}

					if ( (bIs = (trimmedString === stringBool)) )
						break;
				}
			}
			else {
				stringBooleanValues = stringBooleanValues.trim();

				if ( !this.isCaseSensitiveValuesCheck() ) {
					stringBooleanValues = stringBooleanValues.toLowerCase();
				}

				bIs = (trimmedString === stringBooleanValues);
			}
		}
		// if (this.isString(string)) {
		// 	if (string.trim().length > 1) {
		// 		if (this.isArray(config.trueValues.string)) {
		// 			for (var stringBool of config.trueValues.string) {
		//
		// 				if ( (bIs = (stringBool === string.trim())) ) break;
		// 			}
		// 		}
		// 		else {
		// 			bIs = (config.trueValues.string === string.trim());
		// 		}
		// 	}
		// 	else {
		// 		if (this.isArray(config.trueValues.character)) {
		// 			for (var characterBool of config.trueValues.character) {
		//
		// 				if ( (bIs = (characterBool === string.trim())) ) break;
		// 			}
		// 		}
		// 		else {
		// 			bIs = (config.trueValues.character === string.trim());
		// 		}
		// 	}
		// }
		return bIs;
	},

	/**
	 * isUndefined
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'undefined' otherwise false.
	 */
	'isUndefined': function (obj) {
		return ('undefined' === typeof obj);
	},

	/**
	 * isUnknown
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'unknown' otherwise false.
	 */
	'isUnknown': function (obj) {
		return ('unknown' === this.typeOf(obj));
	},

	/**
	 * isWeakMap
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'weakmap' otherwise false.
	 */
	'isWeakMap': function (obj) {
		return (this.isObject(obj) && (obj instanceof WeakMap));
	},

	/**
	 * isWeakSet
	 * @param obj
	 * @return {boolean}
	 * <p>Delegates to <code>typeOf(obj)</code> and returns true if the returned type is 'weakset' otherwise false.
	 */
	'isWeakSet': function (obj) {
		return (this.isObject(obj) && (obj instanceof WeakSet));
	},

};
