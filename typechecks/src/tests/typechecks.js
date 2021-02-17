const expect    = require("chai").expect;
const assert    = require("chai").assert;
const typecheck = require("../../app/index");

describe("Type Checker", function() {

    describe("isCaseSensitiveValuesCheck", function() {
        it("config value lookup", function () {
            let isCaseSensitiveValuesCheck = typecheck.isCaseSensitiveValuesCheck();
            assert.isBoolean(isCaseSensitiveValuesCheck, 'isCaseSensitiveValuesCheck');
        });
    });

    describe("typeOf", function() {
        it("checks primitive types", function () {
            let typeBoolean = typecheck.typeOf(false);
            expect(typeBoolean).to.equal('boolean');

            let typeBigInt = typecheck.typeOf(42n);
            expect(typeBigInt).to.equal('bigint');

            let typeNumber = typecheck.typeOf(42);
            expect(typeNumber).to.equal('number');

            let typeString = typecheck.typeOf("Hello World!");
            expect(typeString).to.equal('string');

            let typeSymbol = typecheck.typeOf(Symbol('foo'));
            expect(typeSymbol).to.equal('symbol');

            let typeNull = typecheck.typeOf(null);
            expect(typeNull).to.equal('null');

            let undef;
            let typeUndefined = typecheck.typeOf(undef);
            expect(typeUndefined).to.equal('undefined');
        });

        it("checks object types/instances", function () {
            let typeArray = typecheck.typeOf([]);
            expect(typeArray).to.equal('array');

            let typeDate = typecheck.typeOf(new Date());
            expect(typeDate).to.equal('date');

            let typeMap = typecheck.typeOf(new Map());
            expect(typeMap).to.equal('map');

            let typeObject = typecheck.typeOf({});
            expect(typeObject).to.equal('object');

            let typeRegEx = typecheck.typeOf(/\d/);
            expect(typeRegEx).to.equal('regexp');

            let typeSet = typecheck.typeOf(new Set());
            expect(typeSet).to.equal('set');

            let typeWeakMap = typecheck.typeOf(new WeakMap());
            expect(typeWeakMap).to.equal('weakmap');

            let typeWeakSet = typecheck.typeOf(new WeakSet());
            expect(typeWeakSet).to.equal('weakset');
        });

        it("checks object types", function () {
            let typeFunction = typecheck.typeOf(() => {});
            expect(typeFunction).to.equal('function');
        });

        it("checks null/empty values", function () {
        });
    });

    describe("isArray", function() {
        it("checks for array type", function () {
            let bIsArray;
            bIsArray = typecheck.isArray([]);
            expect(bIsArray).is.true;

            bIsArray = typecheck.isArray(42n);
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(false);
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(new Date());
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(() => {});
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(new Map());
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(null);
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(42);
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray({});
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(/\d/);
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(new Set());
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray("Hello World!");
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(Symbol('foo'));
            expect(bIsArray).is.false;

            let undef;
            bIsArray = typecheck.isArray(undef);
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(new WeakMap());
            expect(bIsArray).is.false;

            bIsArray = typecheck.isArray(new WeakSet());
            expect(bIsArray).is.false;
        });
    });

    describe("isBoolean", function() {
        it("checks for array type", function () {
            let bIsBoolean;
            bIsBoolean = typecheck.isBoolean([]);
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(42n);
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(false);
            expect(bIsBoolean).is.true;

            bIsBoolean = typecheck.isBoolean(new Date());
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(() => {});
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(new Map());
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(null);
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(42);
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean({});
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(/\d/);
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(new Set());
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("Hello World!");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(Symbol('foo'));
            expect(bIsBoolean).is.false;

            let undef;
            bIsBoolean = typecheck.isBoolean(undef);
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(new WeakMap());
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(new WeakSet());
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean('n');
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean('N');
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean('0');
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(0);
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("false");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("failure");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("err");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("error");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("fault");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("no");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("wrong");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("off");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("FALSE");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("False");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("FaLsE");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("j");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("J");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("y");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("Y");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("1");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean(1);
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("true");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("success");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("ok");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("yes");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("right");
            expect(bIsBoolean).is.false;

            bIsBoolean = typecheck.isBoolean("on");
            expect(bIsBoolean).is.false;
        });
    });

    describe("isBooleanValue", function() {
        it("checks for array type", function () {
            let bIsBooleanValue;
            bIsBooleanValue = typecheck.isBooleanValue([]);
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(42n);
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(false);
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue(new Date());
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(() => {});
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(new Map());
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(null);
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(42);
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue({});
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(/\d/);
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(new Set());
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue("Hello World!");
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(Symbol('foo'));
            expect(bIsBooleanValue).is.false;

            let undef;
            bIsBooleanValue = typecheck.isBooleanValue(undef);
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(new WeakMap());
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue(new WeakSet());
            expect(bIsBooleanValue).is.false;

            bIsBooleanValue = typecheck.isBooleanValue('n');
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue('N');
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue('0');
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue(0);
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("false");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("failure");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("err");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("error");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("fault");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("no");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("wrong");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("off");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("FALSE");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("False");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("FaLsE");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("j");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("J");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("y");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("Y");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("1");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue(1);
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("true");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("success");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("ok");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("yes");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("right");
            expect(bIsBooleanValue).is.true;

            bIsBooleanValue = typecheck.isBooleanValue("on");
            expect(bIsBooleanValue).is.true;
        });
    });

    describe("isDate", function() {
        it("checks for array type", function () {
            let bIsDate;
            bIsDate = typecheck.isDate([]);
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(42n);
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(false);
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(new Date());
            expect(bIsDate).is.true;

            bIsDate = typecheck.isDate(() => {});
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(new Map());
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(null);
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(42);
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate({});
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(/\d/);
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(new Set());
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate("Hello World!");
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(Symbol('foo'));
            expect(bIsDate).is.false;

            let undef;
            bIsDate = typecheck.isDate(undef);
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(new WeakMap());
            expect(bIsDate).is.false;

            bIsDate = typecheck.isDate(new WeakSet());
            expect(bIsDate).is.false;
        });
    });

    describe("isEmpty", function() {
        it("checks for array type", function () {
            let bIsEmpty;
            bIsEmpty = typecheck.isEmpty([]);
            expect(bIsEmpty).is.true;

            bIsEmpty = typecheck.isEmpty(42n);
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty(false);
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty(new Date());
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty(() => {});
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty(new Map());
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty(null);
            expect(bIsEmpty).is.true;

            bIsEmpty = typecheck.isEmpty(42);
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty({});
            expect(bIsEmpty).is.true;

            bIsEmpty = typecheck.isEmpty(/\d/);
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty(new Set());
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty("Hello World!");
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty(Symbol('foo'));
            expect(bIsEmpty).is.false;

            let undef;
            bIsEmpty = typecheck.isEmpty(undef);
            expect(bIsEmpty).is.true;

            bIsEmpty = typecheck.isEmpty(new WeakMap());
            expect(bIsEmpty).is.false;

            bIsEmpty = typecheck.isEmpty(new WeakSet());
            expect(bIsEmpty).is.false;
        });
    });

    describe("isEmptyString", function() {
        it("checks for array type", function () {
            let bIsEmptyString;
            bIsEmptyString = typecheck.isEmptyString([]);
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(42n);
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(false);
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(new Date());
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(() => {});
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(new Map());
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(null);
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(42);
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString({});
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(/\d/);
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(new Set());
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString("Hello World!");
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(Symbol('foo'));
            expect(bIsEmptyString).is.false;

            let undef;
            bIsEmptyString = typecheck.isEmptyString(undef);
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(new WeakMap());
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString(new WeakSet());
            expect(bIsEmptyString).is.false;

            bIsEmptyString = typecheck.isEmptyString("");
            expect(bIsEmptyString).is.true;

            bIsEmptyString = typecheck.isEmptyString('');
            expect(bIsEmptyString).is.true;

        });
    });

    describe("isFalse", function() {
        it("checks for array type", function () {
            let bIsFalse;
            bIsFalse = typecheck.isFalse([]);
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(42n);
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(false);
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse(new Date());
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(() => {});
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(new Map());
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(null);
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(42);
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse({});
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(/\d/);
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(new Set());
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("Hello World!");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(Symbol('foo'));
            expect(bIsFalse).is.false;

            let undef;
            bIsFalse = typecheck.isFalse(undef);
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(new WeakMap());
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(new WeakSet());
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse('n');
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse('N');
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse('0');
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse(0);
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("false");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("failure");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("err");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("error");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("fault");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("no");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("wrong");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("off");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("FALSE");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("False");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("FaLsE");
            expect(bIsFalse).is.true;

            bIsFalse = typecheck.isFalse("j");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("J");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("y");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("Y");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("1");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse(1);
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("true");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("success");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("ok");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("yes");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("right");
            expect(bIsFalse).is.false;

            bIsFalse = typecheck.isFalse("on");
            expect(bIsFalse).is.false;
        });
    });

    describe("isFalseBoolean", function() {
        it("checks for array type", function () {
            let bIsFalseBoolean;
            bIsFalseBoolean = typecheck.isFalseBoolean([]);
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(42n);
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(false);
            expect(bIsFalseBoolean).is.true;

            bIsFalseBoolean = typecheck.isFalseBoolean(new Date());
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(() => {});
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(new Map());
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(null);
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(42);
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean({});
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(/\d/);
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(new Set());
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean("Hello World!");
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(Symbol('foo'));
            expect(bIsFalseBoolean).is.false;

            let undef;
            bIsFalseBoolean = typecheck.isFalseBoolean(undef);
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(new WeakMap());
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(new WeakSet());
            expect(bIsFalseBoolean).is.false;

            bIsFalseBoolean = typecheck.isFalseBoolean(true);
            expect(bIsFalseBoolean).is.false;
        });
    });

    describe("isFalseNumber", function() {
        it("checks for array type", function () {
            let bIsFalseNumber;
            bIsFalseNumber = typecheck.isFalseNumber([]);
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(42n);
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(false);
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(new Date());
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(() => {});
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(new Map());
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(null);
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(42);
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber({});
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(/\d/);
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(new Set());
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber("Hello World!");
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(Symbol('foo'));
            expect(bIsFalseNumber).is.false;

            let undef;
            bIsFalseNumber = typecheck.isFalseNumber(undef);
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(new WeakMap());
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(new WeakSet());
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(0);
            expect(bIsFalseNumber).is.true;

            bIsFalseNumber = typecheck.isFalseNumber(1);
            expect(bIsFalseNumber).is.false;

            bIsFalseNumber = typecheck.isFalseNumber(2);
            expect(bIsFalseNumber).is.false;
        });
    });

    describe("isFalseString", function() {
        it("checks for array type", function () {
            let bIsFalseString;
            bIsFalseString = typecheck.isFalseString([]);
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(42n);
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(false);
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(new Date());
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(() => {});
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(new Map());
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(null);
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(42);
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString({});
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(/\d/);
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(new Set());
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("Hello World!");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(Symbol('foo'));
            expect(bIsFalseString).is.false;

            let undef;
            bIsFalseString = typecheck.isFalseString(undef);
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(new WeakMap());
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString(new WeakSet());
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString('n');
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString('N');
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString('0');
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("false");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("failure");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("err");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("error");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("fault");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("no");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("wrong");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("off");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("FALSE");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("False");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("FaLsE");
            expect(bIsFalseString).is.true;

            bIsFalseString = typecheck.isFalseString("j");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("J");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("y");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("Y");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("1");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("true");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("success");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("ok");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("yes");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("right");
            expect(bIsFalseString).is.false;

            bIsFalseString = typecheck.isFalseString("on");
            expect(bIsFalseString).is.false;
        });
    });

    describe("isFunction", function() {
        it("checks for array type", function () {
            let bIsFunction;
            bIsFunction = typecheck.isFunction([]);
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(42n);
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(false);
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(new Date());
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(() => {});
            expect(bIsFunction).is.true;

            bIsFunction = typecheck.isFunction(new Map());
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(null);
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(42);
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction({});
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(/\d/);
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(new Set());
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction("Hello World!");
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(Symbol('foo'));
            expect(bIsFunction).is.false;

            let undef;
            bIsFunction = typecheck.isFunction(undef);
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(new WeakMap());
            expect(bIsFunction).is.false;

            bIsFunction = typecheck.isFunction(new WeakSet());
            expect(bIsFunction).is.false;
        });
    });

    describe("isJSONString", function() {
        it("checks for array type", function () {
            let bIsJSONString;
            bIsJSONString = typecheck.isJSONString([]);
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(42n);
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(false);
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(new Date());
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(() => {});
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(new Map());
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(null);
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(42);
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString({});
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(/\d/);
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(new Set());
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString("Hello World!");
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(Symbol('foo'));
            expect(bIsJSONString).is.false;

            let undef;
            bIsJSONString = typecheck.isJSONString(undef);
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(new WeakMap());
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString(new WeakSet());
            expect(bIsJSONString).is.false;

            bIsJSONString = typecheck.isJSONString('{}');
            expect(bIsJSONString).is.true;

            bIsJSONString = typecheck.isJSONString('{"key": "value"}');
            expect(bIsJSONString).is.true;

            bIsJSONString = typecheck.isJSONString('["val1", "val2", "val3"]');
            expect(bIsJSONString).is.true;
        });
    });

    describe("isNotEmpty", function() {
        it("checks for array type", function () {
            let bIsNotEmpty;
            bIsNotEmpty = typecheck.isNotEmpty([]);
            expect(bIsNotEmpty).is.false;

            bIsNotEmpty = typecheck.isNotEmpty(42n);
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty(false);
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty(new Date());
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty(() => {});
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty(new Map());
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty(null);
            expect(bIsNotEmpty).is.false;

            bIsNotEmpty = typecheck.isNotEmpty(42);
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty({});
            expect(bIsNotEmpty).is.false;

            bIsNotEmpty = typecheck.isNotEmpty(/\d/);
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty(new Set());
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty("Hello World!");
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty(Symbol('foo'));
            expect(bIsNotEmpty).is.true;

            let undef;
            bIsNotEmpty = typecheck.isNotEmpty(undef);
            expect(bIsNotEmpty).is.false;

            bIsNotEmpty = typecheck.isNotEmpty(new WeakMap());
            expect(bIsNotEmpty).is.true;

            bIsNotEmpty = typecheck.isNotEmpty(new WeakSet());
            expect(bIsNotEmpty).is.true;
        });
    });

    describe("isNotEmptyString", function() {
        it("checks for array type", function () {
            let bIsNotEmptyString;
            bIsNotEmptyString = typecheck.isNotEmptyString([]);
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(42n);
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(false);
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(new Date());
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(() => {});
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(new Map());
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(null);
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(42);
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString({});
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(/\d/);
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(new Set());
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString("Hello World!");
            expect(bIsNotEmptyString).is.true;

            bIsNotEmptyString = typecheck.isNotEmptyString(Symbol('foo'));
            expect(bIsNotEmptyString).is.false;

            let undef;
            bIsNotEmptyString = typecheck.isNotEmptyString(undef);
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(new WeakMap());
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(new WeakSet());
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString('');
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString('foo');
            expect(bIsNotEmptyString).is.true;

            bIsNotEmptyString = typecheck.isNotEmptyString(``);
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString(`foo`);
            expect(bIsNotEmptyString).is.true;

            bIsNotEmptyString = typecheck.isNotEmptyString("");
            expect(bIsNotEmptyString).is.false;

            bIsNotEmptyString = typecheck.isNotEmptyString("foo");
            expect(bIsNotEmptyString).is.true;
        });
    });

    describe("isNull", function() {
        it("checks for array type", function () {
            let bIsNull;
            bIsNull = typecheck.isNull([]);
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(42n);
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(false);
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(new Date());
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(() => {});
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(new Map());
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(null);
            expect(bIsNull).is.true;

            bIsNull = typecheck.isNull(42);
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull({});
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(/\d/);
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(new Set());
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull("Hello World!");
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(Symbol('foo'));
            expect(bIsNull).is.false;

            let undef;
            bIsNull = typecheck.isNull(undef);
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(new WeakMap());
            expect(bIsNull).is.false;

            bIsNull = typecheck.isNull(new WeakSet());
            expect(bIsNull).is.false;
        });
    });

    describe("isNumeric", function() {
        it("checks for array type", function () {
            let bIsNumeric;
            bIsNumeric = typecheck.isNumeric([]);
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(42n);
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(false);
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(new Date());
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(() => {});
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(new Map());
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(null);
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(42);
            expect(bIsNumeric).is.true;

            bIsNumeric = typecheck.isNumeric({});
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(/\d/);
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(new Set());
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric("Hello World!");
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(Symbol('foo'));
            expect(bIsNumeric).is.false;

            let undef;
            bIsNumeric = typecheck.isNumeric(undef);
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(new WeakMap());
            expect(bIsNumeric).is.false;

            bIsNumeric = typecheck.isNumeric(new WeakSet());
            expect(bIsNumeric).is.false;
        });
    });

    describe("isObject", function() {
        it("checks for array type", function () {
            let bIsObject;
            bIsObject = typecheck.isObject([]);
            expect(bIsObject).is.true;

            bIsObject = typecheck.isObject(42n);
            expect(bIsObject).is.false;

            bIsObject = typecheck.isObject(false);
            expect(bIsObject).is.false;

            bIsObject = typecheck.isObject(new Date());
            expect(bIsObject).is.true;

            bIsObject = typecheck.isObject(() => {});
            expect(bIsObject).is.false;

            bIsObject = typecheck.isObject(new Map());
            expect(bIsObject).is.true;

            bIsObject = typecheck.isObject(null);
            expect(bIsObject).is.true;

            bIsObject = typecheck.isObject(42);
            expect(bIsObject).is.false;

            bIsObject = typecheck.isObject({});
            expect(bIsObject).is.true;

            bIsObject = typecheck.isObject(/\d/);
            expect(bIsObject).is.true;

            bIsObject = typecheck.isObject(new Set());
            expect(bIsObject).is.true;

            bIsObject = typecheck.isObject("Hello World!");
            expect(bIsObject).is.false;

            bIsObject = typecheck.isObject(Symbol('foo'));
            expect(bIsObject).is.false;

            let undef;
            bIsObject = typecheck.isObject(undef);
            expect(bIsObject).is.false;

            bIsObject = typecheck.isObject(new WeakMap());
            expect(bIsObject).is.true;

            bIsObject = typecheck.isObject(new WeakSet());
            expect(bIsObject).is.true;
        });
    });

    describe("isString", function() {
        it("checks for array type", function () {
            let bIsString;
            bIsString = typecheck.isString([]);
            expect(bIsString).is.false;

            bIsString = typecheck.isString(42n);
            expect(bIsString).is.false;

            bIsString = typecheck.isString(false);
            expect(bIsString).is.false;

            bIsString = typecheck.isString(new Date());
            expect(bIsString).is.false;

            bIsString = typecheck.isString(() => {});
            expect(bIsString).is.false;

            bIsString = typecheck.isString(new Map());
            expect(bIsString).is.false;

            bIsString = typecheck.isString(null);
            expect(bIsString).is.false;

            bIsString = typecheck.isString(42);
            expect(bIsString).is.false;

            bIsString = typecheck.isString({});
            expect(bIsString).is.false;

            bIsString = typecheck.isString(/\d/);
            expect(bIsString).is.false;

            bIsString = typecheck.isString(new Set());
            expect(bIsString).is.false;

            bIsString = typecheck.isString("Hello World!");
            expect(bIsString).is.true;

            bIsString = typecheck.isString(Symbol('foo'));
            expect(bIsString).is.false;

            let undef;
            bIsString = typecheck.isString(undef);
            expect(bIsString).is.false;

            bIsString = typecheck.isString(new WeakMap());
            expect(bIsString).is.false;

            bIsString = typecheck.isString(new WeakSet());
            expect(bIsString).is.false;

            bIsString = typecheck.isString('');
            expect(bIsString).is.true;

            bIsString = typecheck.isString(``);
            expect(bIsString).is.true;

            bIsString = typecheck.isString("");
            expect(bIsString).is.true;
        });
    });

    describe("isSymbol", function() {
        it("checks for array type", function () {
            let bIsSymbol;
            bIsSymbol = typecheck.isSymbol([]);
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(42n);
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(false);
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(new Date());
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(() => {});
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(new Map());
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(null);
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(42);
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol({});
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(/\d/);
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(new Set());
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol("Hello World!");
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(Symbol('foo'));
            expect(bIsSymbol).is.true;

            let undef;
            bIsSymbol = typecheck.isSymbol(undef);
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(new WeakMap());
            expect(bIsSymbol).is.false;

            bIsSymbol = typecheck.isSymbol(new WeakSet());
            expect(bIsSymbol).is.false;
        });
    });

    describe("isTrue", function() {
        it("checks for array type", function () {
            let bIsTrue;
            bIsTrue = typecheck.isTrue([]);
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(42n);
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(false);
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(new Date());
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(() => {});
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(new Map());
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(null);
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(42);
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue({});
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(/\d/);
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(new Set());
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("Hello World!");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(Symbol('foo'));
            expect(bIsTrue).is.false;

            let undef;
            bIsTrue = typecheck.isTrue(undef);
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(new WeakMap());
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(new WeakSet());
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue('n');
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue('N');
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue('0');
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue(0);
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("false");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("failure");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("err");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("error");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("fault");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("no");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("wrong");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("off");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("FALSE");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("False");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("FaLsE");
            expect(bIsTrue).is.false;

            bIsTrue = typecheck.isTrue("j");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("J");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("y");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("Y");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("1");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue(1);
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("true");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("success");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("ok");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("yes");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("right");
            expect(bIsTrue).is.true;

            bIsTrue = typecheck.isTrue("on");
            expect(bIsTrue).is.true;
        });
    });

    describe("isTrueBoolean", function() {
        it("checks for array type", function () {
            let bIsTrueBoolean;
            bIsTrueBoolean = typecheck.isTrueBoolean([]);
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(42n);
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(false);
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(new Date());
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(() => {});
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(new Map());
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(null);
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(42);
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean({});
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(/\d/);
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(new Set());
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean("Hello World!");
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(Symbol('foo'));
            expect(bIsTrueBoolean).is.false;

            let undef;
            bIsTrueBoolean = typecheck.isTrueBoolean(undef);
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(new WeakMap());
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(new WeakSet());
            expect(bIsTrueBoolean).is.false;

            bIsTrueBoolean = typecheck.isTrueBoolean(true);
            expect(bIsTrueBoolean).is.true;
        });
    });

    describe("isTrueNumber", function() {
        it("checks for array type", function () {
            let bIsTrueNumber;
            bIsTrueNumber = typecheck.isTrueNumber([]);
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(42n);
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(false);
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(new Date());
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(() => {});
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(new Map());
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(null);
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(42);
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber({});
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(/\d/);
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(new Set());
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber("Hello World!");
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(Symbol('foo'));
            expect(bIsTrueNumber).is.false;

            let undef;
            bIsTrueNumber = typecheck.isTrueNumber(undef);
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(new WeakMap());
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(new WeakSet());
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(0);
            expect(bIsTrueNumber).is.false;

            bIsTrueNumber = typecheck.isTrueNumber(1);
            expect(bIsTrueNumber).is.true;

            bIsTrueNumber = typecheck.isTrueNumber(2);
            expect(bIsTrueNumber).is.false;
        });
    });

    describe("isTrueString", function() {
        it("checks for array type", function () {
            let bIsTrueString;
            bIsTrueString = typecheck.isTrueString([]);
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(42n);
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(false);
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(new Date());
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(() => {});
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(new Map());
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(null);
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(42);
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString({});
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(/\d/);
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(new Set());
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("Hello World!");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(Symbol('foo'));
            expect(bIsTrueString).is.false;

            let undef;
            bIsTrueString = typecheck.isTrueString(undef);
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(new WeakMap());
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString(new WeakSet());
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString('n');
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString('N');
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString('0');
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("false");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("failure");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("err");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("error");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("fault");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("no");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("wrong");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("off");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("FALSE");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("False");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("FaLsE");
            expect(bIsTrueString).is.false;

            bIsTrueString = typecheck.isTrueString("j");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("J");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("y");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("Y");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("1");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("true");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("success");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("ok");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("yes");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("right");
            expect(bIsTrueString).is.true;

            bIsTrueString = typecheck.isTrueString("on");
            expect(bIsTrueString).is.true;
        });
    });

    describe("isUndefined", function() {
        it("checks for array type", function () {
            let bIsUndefined;
            bIsUndefined = typecheck.isUndefined([]);
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(42n);
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(false);
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(new Date());
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(() => {});
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(new Map());
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(null);
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(42);
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined({});
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(/\d/);
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(new Set());
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined("Hello World!");
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(Symbol('foo'));
            expect(bIsUndefined).is.false;

            let undef;
            bIsUndefined = typecheck.isUndefined(undef);
            expect(bIsUndefined).is.true;

            bIsUndefined = typecheck.isUndefined(new WeakMap());
            expect(bIsUndefined).is.false;

            bIsUndefined = typecheck.isUndefined(new WeakSet());
            expect(bIsUndefined).is.false;
        });
    });

    describe("isUnknown", function() {
        it("checks for array type", function () {
            let bIsUnknown;
            bIsUnknown = typecheck.isUnknown([]);
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(42n);
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(false);
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(new Date());
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(() => {});
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(new Map());
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(null);
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(42);
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown({});
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(/\d/);
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(new Set());
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown("Hello World!");
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(Symbol('foo'));
            expect(bIsUnknown).is.false;

            let undef;
            bIsUnknown = typecheck.isUnknown(undef);
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(new WeakMap());
            expect(bIsUnknown).is.false;

            bIsUnknown = typecheck.isUnknown(new WeakSet());
            expect(bIsUnknown).is.false;
        });
    });

});
