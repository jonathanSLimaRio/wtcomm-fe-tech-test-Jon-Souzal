(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/routes/actors/index.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/routes/actors/index.ts ***!
  \*************************************************/
/*! exports provided: router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
/**
 * @swagger
 *  components:
 *    schemas:
 *      Actors&Directors:
 *        type: object
 *        properties:
 *          count:
 *            type: number
 *            example: 1
 *          values:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: ridley scott
 *                info:
 *                  type: object
 *                  properties:
 *                    movies:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          title:
 *                            type: string
 *                            example: Blade Runner
 *                          type:
 *                            type: string
 *                            enum: [movie,series]
 *                            example: movie
 *                    awards:
 *                      type: array
 *                      items:
 *                        type: string
 *                      example: ["Nominated for 2 Oscars. Another 5 wins & 6 nominations."]
 */
/**
 * @swagger
 * name: Actors
 * path:
 *  /api/actors/:
 *    get:
 *      summary: Get list of all actors
 *      tags: [Actors]
 *      responses:
 *        "200":
 *          description: Actors schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Actors&Directors'
 */
router.get('/', (req, res) => {
    const { mapOfActors } = req['context'].maps;
    const actors = {
        actors: {
            count: mapOfActors.size,
            values: [...mapOfActors].map(([name, info]) => ({
                name,
                info,
            })),
        },
    };
    res.send(actors);
});
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/app/routes/directors/index.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/routes/directors/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
/**
 * @swagger
 *  components:
 *    schemas:
 *      Actors&Directors:
 *        type: object
 *        properties:
 *          count:
 *            type: number
 *            example: 1
 *          values:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: Harrison Ford
 *                info:
 *                  type: object
 *                  properties:
 *                    movies:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          title:
 *                            type: string
 *                            example: Blade Runner
 *                          type:
 *                            type: string
 *                            enum: [movie,series]
 *                            example: movie
 *                    awards:
 *                      type: array
 *                      items:
 *                        type: string
 *                      example: ["Nominated for 2 Oscars. Another 5 wins & 6 nominations."]
 */
/**
 * @swagger
 * name: Directors
 * path:
 *  /api/directors/:
 *    get:
 *      summary: Get list of all directors
 *      tags: [Directors]
 *      responses:
 *        "200":
 *          description: Directors schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Actors&Directors'
 */
router.get('/', (req, res) => {
    const { mapOfDirectors } = req['context'].maps;
    const directors = {
        directors: {
            count: mapOfDirectors.size,
            values: [...mapOfDirectors].map(([name, info]) => ({
                name,
                info,
            })),
        },
    };
    res.send(directors);
});
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/app/routes/facetView/facetActors/index.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/app/routes/facetView/facetActors/index.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./apps/api/src/app/routes/facetView/utils/index.ts");
/* harmony import */ var _mono_nx_test_with_nextjs_api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/utils */ "./apps/api/src/utils/index.ts");


const facetActors = (mapOfActors) => {
    const arrayOfActors = Object(_mono_nx_test_with_nextjs_api_utils__WEBPACK_IMPORTED_MODULE_1__["transformMapIntoArrayOfInfo"])(mapOfActors);
    return {
        actors: {
            label: 'Actors',
            filters: {
                movies: {
                    label: 'Number of movies done',
                    values: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortAlphabetically"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getNumberOf"])(arrayOfActors, (info) => info.movies.length)),
                },
            },
        },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (facetActors);


/***/ }),

/***/ "./apps/api/src/app/routes/facetView/facetDirectors/index.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/routes/facetView/facetDirectors/index.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./apps/api/src/app/routes/facetView/utils/index.ts");
/* harmony import */ var _mono_nx_test_with_nextjs_api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/utils */ "./apps/api/src/utils/index.ts");


const facetDirectors = (mapOfDirectors) => {
    const arrayOfDirectors = Object(_mono_nx_test_with_nextjs_api_utils__WEBPACK_IMPORTED_MODULE_1__["transformMapIntoArrayOfInfo"])(mapOfDirectors);
    return {
        directors: {
            label: 'Directors',
            filters: [
                {
                    label: 'Number of movies directed',
                    values: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortAlphabetically"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getNumberOf"])(arrayOfDirectors, (info) => info.movies.length)),
                },
                {
                    label: 'Number of awards won',
                    values: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortAlphabetically"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getNumberOf"])(arrayOfDirectors, (info) => info.awards.length)),
                },
            ],
        },
    };
};
/* harmony default export */ __webpack_exports__["default"] = (facetDirectors);


/***/ }),

/***/ "./apps/api/src/app/routes/facetView/facetMovies/index.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/app/routes/facetView/facetMovies/index.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _facetView_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../facetView/utils */ "./apps/api/src/app/routes/facetView/utils/index.ts");
/* harmony import */ var _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/constants */ "./apps/api/src/constants.ts");
/* harmony import */ var _mono_nx_test_with_nextjs_api_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/utils */ "./apps/api/src/utils/index.ts");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../movies */ "./apps/api/src/app/routes/movies/index.ts");




const prettifyRangeValues = (map) => [...map].map(([key, { count, filterCode }]) => ({
    label: key,
    count,
    filterCode,
}));
const setElementInMap = (map, elem) => {
    const value = map.get(elem);
    if (value) {
        map.set(elem, value + 1);
    }
    else {
        map.set(elem, 1);
    }
};
const setValuesInMap = (arrayOfElements, callback) => {
    const map = new Map();
    arrayOfElements.forEach((element) => {
        const numberOfElements = callback(element);
        // If the elements are an array, I need to check for all the elements, not just one
        if (Array.isArray(numberOfElements)) {
            numberOfElements.forEach((elem) => {
                setElementInMap(map, elem.trim());
            });
        }
        else {
            setElementInMap(map, numberOfElements);
        }
    });
    return map;
};
const setRangeValuesInMap = (arrayOfElements, rangeValues, callback) => {
    const map = new Map();
    // It adds the labels in the map
    rangeValues.forEach(({ label, startValue, filterCode }) => {
        const elem = {
            count: startValue,
            filterCode: filterCode,
        };
        map.set(label, elem);
    });
    arrayOfElements.forEach((element) => {
        const value = callback(element);
        // It adds the element in the correct place
        rangeValues.some((elem) => {
            if (elem.logic(value)) {
                const elemInMap = map.get(elem.label);
                map.set(elem.label, Object.assign(Object.assign({}, elemInMap), { count: elemInMap.count + 1 }));
                return true;
            }
            return false;
        });
    });
    return map;
};
/**
 * It returns the correct label based on the value passed.
 * @param {string} value - true|false
 * @returns {string} - YES | NO
 */
const booleanValue = (value) => value && String(value).toLowerCase() === _movies__WEBPACK_IMPORTED_MODULE_3__["LOWER_CASE_TRUE"] ? 'Yes' : 'No';
/**
 * It builds the facets for the movies available in the data
 * @param {Map} mapOfMovies - Map of the available movies
 * @returns {object} -
 */
const facetMovies = (mapOfMovies) => {
    const listOfMovies = mapOfMovies.get(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_TITLES"]);
    if (listOfMovies) {
        const arrayOfMovies = Object(_mono_nx_test_with_nextjs_api_utils__WEBPACK_IMPORTED_MODULE_2__["transformMapIntoArrayOfInfo"])(listOfMovies);
        const getRangeValues = (objOfValues) => Object.entries(objOfValues).map(([key, values]) => (Object.assign({ filterCode: key }, values)));
        const moviesTypes = setValuesInMap(arrayOfMovies, (element) => element.info.Type);
        const moviesYears = setValuesInMap(arrayOfMovies, (element) => element.info.Year);
        const moviesGenre = setValuesInMap(arrayOfMovies, (element) => element.info.Genre.split(','));
        const moviesWatched = setValuesInMap(arrayOfMovies, (element) => booleanValue(element.info.Watched));
        const moviesSaved = setValuesInMap(arrayOfMovies, (element) => booleanValue(element.info.Saved));
        const moviesMetaScore = setRangeValuesInMap(arrayOfMovies, getRangeValues(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["METASCORE"]), (element) => element.info.Metascore);
        return {
            movies: {
                label: 'Movies',
                filters: {
                    type: {
                        label: 'Type',
                        values: Object(_facetView_utils__WEBPACK_IMPORTED_MODULE_0__["getPrettifiedValues"])(moviesTypes),
                    },
                    years: {
                        label: 'Years',
                        values: Object(_facetView_utils__WEBPACK_IMPORTED_MODULE_0__["sortAlphabetically"])(Object(_facetView_utils__WEBPACK_IMPORTED_MODULE_0__["getPrettifiedValues"])(moviesYears)),
                    },
                    metascore: {
                        label: 'Metascore',
                        values: prettifyRangeValues(moviesMetaScore),
                    },
                    genre: {
                        label: 'Genre',
                        values: Object(_facetView_utils__WEBPACK_IMPORTED_MODULE_0__["sortAlphabetically"])(Object(_facetView_utils__WEBPACK_IMPORTED_MODULE_0__["getPrettifiedValues"])(moviesGenre)),
                    },
                    watched: {
                        label: 'Watched',
                        values: Object(_facetView_utils__WEBPACK_IMPORTED_MODULE_0__["getPrettifiedValues"])(moviesWatched),
                    },
                    saved: {
                        label: 'Saved in wishlist',
                        values: Object(_facetView_utils__WEBPACK_IMPORTED_MODULE_0__["getPrettifiedValues"])(moviesSaved),
                    },
                },
            },
        };
    }
    return {};
};
/* harmony default export */ __webpack_exports__["default"] = (facetMovies);


/***/ }),

/***/ "./apps/api/src/app/routes/facetView/index.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/routes/facetView/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _facetActors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facetActors */ "./apps/api/src/app/routes/facetView/facetActors/index.ts");
/* harmony import */ var _facetDirectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facetDirectors */ "./apps/api/src/app/routes/facetView/facetDirectors/index.ts");
/* harmony import */ var _facetMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facetMovies */ "./apps/api/src/app/routes/facetView/facetMovies/index.ts");

const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();



/**
 * @swagger
 *  components:
 *    schemas:
 *      Facets:
 *        type: object
 *        properties:
 *          movies:
 *            type: object
 *            properties:
 *              label:
 *                type: number
 *                example: Movies
 *              filters:
 *                type: object
 *                properties:
 *                  type:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: Movies
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: movie
 *                            count:
 *                              type: number
 *                              example: 21
 *                  years:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: Years
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: 1939
 *                            count:
 *                              type: number
 *                              example: 21
 *                  metascore:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: Metascore
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: < 60
 *                            count:
 *                              type: number
 *                              example: 12
 *                            filterCode:
 *                              type: string
 *                              example: 0
 *                  genre:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: Genre
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: Action
 *                            count:
 *                              type: number
 *                              example: 10
 *          actors:
 *            type: object
 *            properties:
 *              label:
 *                type: number
 *                example: Actors
 *              filters:
 *                type: object
 *                properties:
 *                  movies:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: "Number of movies done"
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: Adam Sandler
 *                            count:
 *                              type: number
 *                              example: 2
 *          directors:
 *            type: object
 *            properties:
 *              label:
 *                type: number
 *                example: Directors
 *              filters:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    label:
 *                      type: string
 *                      example: "Number of movies directed"
 *                    values:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          label:
 *                            type: string
 *                            example: Billy Wilder
 *                          count:
 *                            type: number
 *                            example: 2
 */
/**
 * @swagger
 * name: Facets
 * path:
 *  /api/facets/:
 *    get:
 *      summary: Get list of all facets
 *      tags: [Facets]
 *      responses:
 *        "200":
 *          description: Facets schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Facets'
 */
router.use('/', (req, res) => {
    const { mapOfActors, mapOfDirectors, mapOfMovies } = req['context'].maps;
    const facetFilters = Object.assign(Object.assign(Object.assign({}, Object(_facetMovies__WEBPACK_IMPORTED_MODULE_3__["default"])(mapOfMovies)), Object(_facetActors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapOfActors)), Object(_facetDirectors__WEBPACK_IMPORTED_MODULE_2__["default"])(mapOfDirectors));
    res.send(facetFilters);
});
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/app/routes/facetView/utils/index.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/routes/facetView/utils/index.ts ***!
  \**********************************************************/
/*! exports provided: getNumberOf, sortAlphabetically, getPrettifiedValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOf", function() { return getNumberOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortAlphabetically", function() { return sortAlphabetically; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrettifiedValues", function() { return getPrettifiedValues; });
const getNumberOf = (arrayOfElements, callback) => arrayOfElements.map(({ name, info }) => {
    return {
        label: name,
        count: callback(info),
    };
});
const sortAlphabetically = (arr) => arr.sort((a, b) => a.label.localeCompare(b.label));
const getPrettifiedValues = (map) => [...map].map(([key, value]) => ({
    label: key,
    count: value,
}));


/***/ }),

/***/ "./apps/api/src/app/routes/index.ts":
/*!******************************************!*\
  !*** ./apps/api/src/app/routes/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actors */ "./apps/api/src/app/routes/actors/index.ts");
/* harmony import */ var _directors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directors */ "./apps/api/src/app/routes/directors/index.ts");
/* harmony import */ var _facetView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facetView */ "./apps/api/src/app/routes/facetView/index.ts");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies */ "./apps/api/src/app/routes/movies/index.ts");




/* harmony default export */ __webpack_exports__["default"] = ({
    actors: _actors__WEBPACK_IMPORTED_MODULE_0__["default"],
    directors: _directors__WEBPACK_IMPORTED_MODULE_1__["default"],
    movies: _movies__WEBPACK_IMPORTED_MODULE_3__["default"],
    facetView: _facetView__WEBPACK_IMPORTED_MODULE_2__["default"],
});


/***/ }),

/***/ "./apps/api/src/app/routes/movies/index.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/routes/movies/index.ts ***!
  \*************************************************/
/*! exports provided: VALID_MOVIES_TYPES_STRINGS, LOWER_CASE_TRUE, LOWER_CASE_FALSE, VALID_BOOLEAN_STRINGS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_MOVIES_TYPES_STRINGS", function() { return VALID_MOVIES_TYPES_STRINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOWER_CASE_TRUE", function() { return LOWER_CASE_TRUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOWER_CASE_FALSE", function() { return LOWER_CASE_FALSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_BOOLEAN_STRINGS", function() { return VALID_BOOLEAN_STRINGS; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/constants */ "./apps/api/src/constants.ts");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validate.js */ "validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_upperfirst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.upperfirst */ "lodash.upperfirst");
/* harmony import */ var lodash_upperfirst__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_upperfirst__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mono_nx_test_with_nextjs_api_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/assets */ "./apps/api/src/assets/list.ts");





const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
const VALID_MOVIES_TYPES_STRINGS = [_mono_nx_test_with_nextjs_api_assets__WEBPACK_IMPORTED_MODULE_4__["MOVIE_TYPE"], _mono_nx_test_with_nextjs_api_assets__WEBPACK_IMPORTED_MODULE_4__["SERIES_TYPE"]];
const LOWER_CASE_TRUE = 'true';
const LOWER_CASE_FALSE = 'false';
const VALID_BOOLEAN_STRINGS = [LOWER_CASE_TRUE, LOWER_CASE_FALSE];
/**
 * It converts a string of elements into an array:
 * "element" => [element]
 * "elem1, elem2, elem3" => [elem1, elem2, elem3]
 * @param {string} str - This can be something like "element" or "elem1, elem2, elem3" etc.
 * @returns {array} - An array with the elements in the original string
 */
const convertStringToArray = (str) => [
    ...new Set(str.split(',').map((elem) => elem.trim())),
];
/**
 * It gets the list of movies per single actor/director
 * @param {MapOfArtistsHistory} mapOfPeople - Map of either actors or directors
 * @param {MapOfMoviesTitles} mapOfMovies - Map of movies
 * @param {string} name - Name or either the actor or director
 * @returns {array} -
 */
const getListOfMoviesPerSinglePerson = (mapOfPeople, mapOfMovies, name) => {
    const person = mapOfPeople.get(name.toLowerCase());
    if (person) {
        const { movies } = person;
        if (movies) {
            return movies.reduce((acc, { title }) => {
                const movie = mapOfMovies.get(title.toLowerCase());
                return [...acc, [title, movie]];
            }, []);
        }
    }
    return [];
};
/**
 * It gets the entire list of movies of all the actors/directors
 * @param mapOfPeople - Map of either actors or directors
 * @param mapOfMovies - Map of movies
 * @param people - Array of names of either actors or directors
 */
const getList = (mapOfPeople, mapOfMovies, people) => {
    const tempMap = new Map();
    people.forEach((actor) => {
        [
            ...getListOfMoviesPerSinglePerson(mapOfPeople, mapOfMovies, actor),
        ].forEach((elem) => {
            const key = elem[0];
            if (!tempMap.has(key)) {
                tempMap.set(key, elem);
            }
        });
    }, []);
    return [...tempMap].map(([, movie]) => movie);
};
/**
 * It filters the data based on boolean values
 * @param {array} data - The array of data
 * @param {string} value - The value sent to filter by
 * @param {string} property - The name of the property to filter by
 */
const filterBooleanValue = (data, value, property) => {
    return data.filter(([, movie]) => {
        const paramValue = lodash_upperfirst__WEBPACK_IMPORTED_MODULE_3__(value);
        const movieValue = movie[property];
        return (movieValue === paramValue ||
            (paramValue === 'False' && movieValue === 'undefined'));
    });
};
const updateMovieState = (mapOfMovies, movieId, propertyName, propertyValue) => {
    const capitalizedProperty = lodash_upperfirst__WEBPACK_IMPORTED_MODULE_3__(propertyName);
    const listOfMovies = mapOfMovies.get(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_TITLES"]);
    const listOfIds = mapOfMovies.get(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_IDS"]);
    const movieTitle = listOfIds.get(movieId);
    const movie = listOfMovies.get(movieTitle);
    if (movie) {
        const updatedMovie = Object.assign(Object.assign({}, movie), { [capitalizedProperty]: lodash_upperfirst__WEBPACK_IMPORTED_MODULE_3__(propertyValue) });
        listOfMovies.set(movieTitle, updatedMovie);
        return true;
    }
    return false;
};
/**
 * @swagger
 * name: Update Movie's State
 * path:
 *  /api/movies/id/{imdbID}:
 *    put:
 *      summary: Update movie's state for watched and saved
 *      produces: application/json
 *      tags: [Update Movie's State]
 *      parameters:
 *        - in: path
 *          name: imdbID
 *          required: true
 *          description: movie's imdbID
 *          schema:
 *            type: string
 *            example: tt0083658
 *      requestBody:
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *              properties:
 *                saved:
 *                  type: string
 *                  enum: [true, false]
 *                  example: "true"
 *                  description: Whether the user has already seen the movie
 *                watched:
 *                  type: string
 *                  enum: [true, false]
 *                  example: "false"
 *                  description: Whether the user has saved the movie in the watch list
 *      responses:
 *        "200":
 *          description: Movie's updated successfully
 *        "412":
 *          description: Precondition failed
 */
router.put('/id/:imdbID', (req, res) => {
    let result = false;
    const { mapOfMovies } = req['context'].maps;
    const { watched, saved } = req.body;
    const { imdbID } = req.params;
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](saved) &&
        validate_js__WEBPACK_IMPORTED_MODULE_2__({ saved }, { saved: { inclusion: VALID_BOOLEAN_STRINGS } }) == null) {
        result = updateMovieState(mapOfMovies, imdbID, 'saved', saved);
    }
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](watched) &&
        validate_js__WEBPACK_IMPORTED_MODULE_2__({ watched }, { watched: { inclusion: VALID_BOOLEAN_STRINGS } }) ==
            null) {
        result = updateMovieState(mapOfMovies, imdbID, 'watched', watched);
    }
    return result ? res.sendStatus(200) : res.sendStatus(412);
});
/**
 * @swagger
 * name: Movies
 * path:
 *  /api/movies/:
 *    get:
 *      summary: Get list of all movies
 *      tags: [Movies]
 *      parameters:
 *        - in: query
 *          name: type
 *          schema:
 *            type: string
 *            example: movie
 *          description: Type of movie - (SINGLE 1982 OR MULTIPLE movie,series)
 *        - in: query
 *          name: year
 *          schema:
 *            type: string
 *            example: 1982,1989
 *          description: year of production - (SINGLE 1982 OR MULTIPLE 1982,1989)
 *        - in: query
 *          name: metascore
 *          schema:
 *            type: string
 *            example: 2
 *          description: Metascore value - (SINGLE 2 OR MULTIPLE 0,1,2,3)
 *                       (0 = < 60)
 *                       (1 = Between 60 & 80)
 *                       (2 = Between 80 & 90)
 *                       (3 = > 90)
 *        - in: query
 *          name: actor
 *          schema:
 *            type: string
 *            example: Harrison Ford
 *          description: The actor's name - (SINGLE Harrison Ford OR MULTIPLE Harrison Ford, Michael Parks, Rutger Hauer)
 *        - in: query
 *          name: director
 *          schema:
 *            type: string
 *            example: Ridley Scott
 *          description: The director's name (SINGLE Ridley Scott OR MULTIPLE Akira Kurosawa, Quentin Tarantino)
 *        - in: query
 *          name: genre
 *          schema:
 *            type: string
 *            example: Action
 *          description: The movie's genre (SINGLE Action OR MULTIPLE Action, Thriller, Drama)
 *        - in: query
 *          name: watched
 *          schema:
 *            type: string
 *            enum: [true,false]
 *            example: true
 *          description: Whether the movie has been already seen by the user
 *        - in: query
 *          name: saved
 *          schema:
 *            type: string
 *            enum: [true,false]
 *            example: 'false'
 *          description: Whether the movie has been added to the wishlist
 *      responses:
 *        "200":
 *          description: Movies schema
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *
 */
router.get('/', (req, res) => {
    const { type, year, metascore, actor, director, genre, watched, saved, } = req.query;
    const { mapOfMovies, mapOfActors, mapOfDirectors } = req['context'].maps;
    const listOfMovies = mapOfMovies.get(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_TITLES"]);
    let data = [...listOfMovies];
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](actor) || !validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](director)) {
        let listOfMoviesWithActorsAndDirectors = [];
        if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](actor) && validate_js__WEBPACK_IMPORTED_MODULE_2__["isString"](actor)) {
            const actors = convertStringToArray(actor.trim().toLowerCase());
            listOfMoviesWithActorsAndDirectors = getList(mapOfActors, listOfMovies, actors);
        }
        if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](director) && validate_js__WEBPACK_IMPORTED_MODULE_2__["isString"](director)) {
            const directors = convertStringToArray(director.trim().toLowerCase());
            listOfMoviesWithActorsAndDirectors =
                listOfMoviesWithActorsAndDirectors.length > 0 // if actors have been filtered already
                    ? listOfMoviesWithActorsAndDirectors.filter(([, movie]) => movie.Director.split(',').some((currentDirector // filter out the one without chosen directors
                    ) => director.includes(currentDirector.trim())))
                    : getList(mapOfDirectors, listOfMovies, directors);
        }
        data = [...listOfMoviesWithActorsAndDirectors];
    }
    // Filter by type
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](type) &&
        validate_js__WEBPACK_IMPORTED_MODULE_2__({ type }, { type: { inclusion: VALID_MOVIES_TYPES_STRINGS } }) ==
            null) {
        const types = convertStringToArray(type.trim().toLowerCase());
        data = data.filter(([, movie]) => types.includes(movie.Type));
    }
    // Filter by year
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](year) && validate_js__WEBPACK_IMPORTED_MODULE_2__["isString"](year)) {
        const years = convertStringToArray(year);
        data = data.filter(([, movie]) => years.includes(movie.Year));
    }
    // Filter by metascore
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](metascore) && validate_js__WEBPACK_IMPORTED_MODULE_2__["isString"](metascore)) {
        const metascores = convertStringToArray(metascore);
        const areAllValidScores = metascores.every((meta) => {
            return (validate_js__WEBPACK_IMPORTED_MODULE_2__({ meta }, { meta: { inclusion: Object.keys(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["METASCORE"]) } }) ==
                null);
        });
        if (areAllValidScores) {
            data = metascores.reduce((acc, currValue) => {
                const filteredData = data.filter(([, movie]) => _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["METASCORE"][currValue].logic(movie.Metascore));
                return [...acc, ...filteredData];
            }, []);
        }
    }
    // Filter by genre
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](genre) && validate_js__WEBPACK_IMPORTED_MODULE_2__["isString"](genre)) {
        const genres = convertStringToArray(genre.trim().toLowerCase());
        data = data.filter(([, movie]) => movie.Genre.split(',').some((genre) => genres.indexOf(genre.trim().toLowerCase()) !== -1));
    }
    // Filter by watched
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](watched) &&
        validate_js__WEBPACK_IMPORTED_MODULE_2__({ watched }, { watched: { inclusion: VALID_BOOLEAN_STRINGS } }) ==
            null) {
        data = filterBooleanValue(data, watched, 'Watched');
    }
    // Filter by saved
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](saved) &&
        validate_js__WEBPACK_IMPORTED_MODULE_2__({ saved }, { saved: { inclusion: VALID_BOOLEAN_STRINGS } }) == null) {
        data = filterBooleanValue(data, saved, 'Saved');
    }
    return res.send(data.map(([, movie]) => movie));
});
/**
 * @swagger
 * name: MovieById
 * path:
 *  /api/movies/id/{imdbID}:
 *    get:
 *      summary: Get specific movie by imdbID
 *      tags: [MovieById]
 *      parameters:
 *      - in: path
 *        name: imdbID
 *        required: true
 *        description: movie's imdbID
 *        schema:
 *          type: string
 *          example: tt0083658
 *      responses:
 *        "200":
 *          description: Movies schema
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *
 */
router.get('/id/:imdbID', (req, res) => {
    const { imdbID } = req.params;
    const { mapOfMovies } = req['context'].maps;
    if (!validate_js__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](imdbID) && validate_js__WEBPACK_IMPORTED_MODULE_2__["isString"](imdbID)) {
        const listOfMovies = mapOfMovies.get(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_TITLES"]);
        const listOfIds = mapOfMovies.get(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_IDS"]);
        const movieTitle = listOfIds.get(imdbID);
        const movie = listOfMovies.get(movieTitle);
        if (movie) {
            const data = [[imdbID, movie]];
            return res.send(data.map(([, movie]) => movie));
        }
    }
    return res.send([]);
});
/**
 * @swagger
 * name: MovieByName
 * path:
 *  /api/movies/name/{name}:
 *    get:
 *      summary: Get specific movie by name
 *      tags: [MovieByName]
 *      parameters:
 *      - in: path
 *        name: name
 *        required: true
 *        description: movie's name
 *        schema:
 *          type: string
 *          example: Blade Runner
 *      responses:
 *        "200":
 *          description: Movies schema
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *
 */
router.get('/name/:name', (req, res) => {
    const { name } = req.params;
    const { mapOfMovies } = req['context'].maps;
    const listOfMovies = mapOfMovies.get(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_TITLES"]);
    const movieNameLowerCase = name.toLowerCase();
    const movie = listOfMovies.get(movieNameLowerCase);
    if (movie) {
        const data = [[name, movie]];
        return res.send(data.map(([, movie]) => movie));
    }
    return res.send([]);
});
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api/src/assets/list.ts":
/*!*************************************!*\
  !*** ./apps/api/src/assets/list.ts ***!
  \*************************************/
/*! exports provided: MOVIE_TYPE, SERIES_TYPE, FIRST_LETTER_UPPERCASE_TRUE, FIRST_LETTER_UPPERCASE_FALSE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_TYPE", function() { return MOVIE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERIES_TYPE", function() { return SERIES_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_LETTER_UPPERCASE_TRUE", function() { return FIRST_LETTER_UPPERCASE_TRUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_LETTER_UPPERCASE_FALSE", function() { return FIRST_LETTER_UPPERCASE_FALSE; });
const MOVIE_TYPE = 'movie';
const SERIES_TYPE = 'series';
const FIRST_LETTER_UPPERCASE_TRUE = 'True';
const FIRST_LETTER_UPPERCASE_FALSE = 'False';
const movies = [
    {
        Title: 'Blade Runner',
        Year: '1982',
        Rated: 'R',
        Released: '25 Jun 1982',
        Runtime: '117 min',
        Genre: 'Action, Sci-Fi, Thriller',
        Director: 'Ridley Scott',
        Writer: 'Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)',
        Actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        Plot: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
        Language: 'English, German, Cantonese, Japanese, Hungarian, Arabic',
        Country: 'USA',
        Awards: 'Nominated for 2 Oscars. Another 12 wins & 16 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.1/10' },
            { Source: 'Rotten Tomatoes', Value: '90%' },
            { Source: 'Metacritic', Value: '84/100' },
        ],
        Metascore: '84',
        imdbRating: '8.1',
        imdbVotes: '663,604',
        imdbID: 'tt0083658',
        Type: 'movie',
        DVD: '27 Aug 1997',
        BoxOffice: 'N/A',
        Production: 'Warner Bros. Pictures',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'False',
    },
    {
        Title: 'Gladiator',
        Year: '2000',
        Rated: 'R',
        Released: '05 May 2000',
        Runtime: '155 min',
        Genre: 'Action, Adventure, Drama',
        Director: 'Ridley Scott',
        Writer: 'David Franzoni (story), David Franzoni (screenplay), John Logan (screenplay), William Nicholson (screenplay)',
        Actors: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed',
        Plot: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        Language: 'English',
        Country: 'USA, UK, Malta, Morocco',
        Awards: 'Won 5 Oscars. Another 54 wins & 104 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.5/10' },
            { Source: 'Rotten Tomatoes', Value: '77%' },
            { Source: 'Metacritic', Value: '67/100' },
        ],
        Metascore: '67',
        imdbRating: '8.5',
        imdbVotes: '1,281,029',
        imdbID: 'tt0172495',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: 'N/A',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'False',
    },
    {
        Title: 'Seven Samurai',
        Year: '1954',
        Rated: 'Not Rated',
        Released: '19 Nov 1956',
        Runtime: '207 min',
        Genre: 'Action, Adventure, Drama',
        Director: 'Akira Kurosawa',
        Writer: 'Akira Kurosawa (screenplay), Shinobu Hashimoto (screenplay), Hideo Oguni (screenplay)',
        Actors: 'Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki',
        Plot: 'A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.',
        Language: 'Japanese',
        Country: 'Japan',
        Awards: 'Nominated for 2 Oscars. Another 5 wins & 6 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjI1ZjhmMzktMDZhMy00MDhjLTk3YjAtMTNlZTA5MDI3NzQ3XkEyXkFqcGdeQXVyODkxNzAwMDI@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.6/10' },
            { Source: 'Rotten Tomatoes', Value: '100%' },
            { Source: 'Metacritic', Value: '98/100' },
        ],
        Metascore: '98',
        imdbRating: '8.6',
        imdbVotes: '301,458',
        imdbID: 'tt0047478',
        Type: 'movie',
        DVD: '01 Mar 1999',
        BoxOffice: 'N/A',
        Production: 'Columbia Pictures',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'False',
    },
    {
        Title: 'Get Serious: Seven Deadly Sins',
        Year: '1995',
        Rated: 'N/A',
        Released: '01 Jul 1995',
        Runtime: '30 min',
        Genre: 'N/A',
        Director: 'N/A',
        Writer: 'Michael French',
        Actors: 'Brent Butt, Dana Gould, Kevin Rooney, Eric Tunney',
        Plot: 'N/A',
        Language: 'English',
        Country: 'Canada',
        Awards: 'N/A',
        Poster: 'https://m.media-amazon.com/images/M/MV5BM2U1ZjQ0ZmItNGE3Mi00MmIyLTk3YWQtNmZlMTQwNTVlZTViXkEyXkFqcGdeQXVyMTkwNDA0OA@@._V1_SX300.jpg',
        Ratings: [{ Source: 'Internet Movie Database', Value: '5.5/10' }],
        Metascore: 'N/A',
        imdbRating: '5.5',
        imdbVotes: '13',
        imdbID: 'tt0346278',
        Type: 'series',
        totalSeasons: '3',
        Watched: 'False',
        Saved: 'True',
    },
    {
        Title: 'Pulp Fiction',
        Year: '1994',
        Rated: 'R',
        Released: '14 Oct 1994',
        Runtime: '154 min',
        Genre: 'Crime, Drama',
        Director: 'Quentin Tarantino',
        Writer: 'Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino',
        Actors: 'Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta',
        Plot: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.',
        Language: 'English, Spanish, French',
        Country: 'USA',
        Awards: 'Won 1 Oscar. Another 68 wins & 74 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.9/10' },
            { Source: 'Rotten Tomatoes', Value: '92%' },
            { Source: 'Metacritic', Value: '94/100' },
        ],
        Metascore: '94',
        imdbRating: '8.9',
        imdbVotes: '1,744,145',
        imdbID: 'tt0110912',
        Type: 'movie',
        DVD: '19 May 1998',
        BoxOffice: 'N/A',
        Production: 'Miramax Films',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'True',
    },
    {
        Title: 'Kill Bill: Vol. 1',
        Year: '2003',
        Rated: 'R',
        Released: '10 Oct 2003',
        Runtime: '111 min',
        Genre: 'Action, Crime, Thriller',
        Director: 'Quentin Tarantino',
        Writer: 'Quentin Tarantino, Quentin Tarantino (character The Bride), Uma Thurman (character The Bride)',
        Actors: 'Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah',
        Plot: 'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
        Language: 'English, Japanese, French',
        Country: 'USA, Japan',
        Awards: 'Nominated for 1 Golden Globe. Another 28 wins & 101 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.1/10' },
            { Source: 'Rotten Tomatoes', Value: '85%' },
            { Source: 'Metacritic', Value: '69/100' },
        ],
        Metascore: '69',
        imdbRating: '8.1',
        imdbVotes: '961,349',
        imdbID: 'tt0266697',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: 'N/A',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'False',
    },
    {
        Title: 'Kill Bill: Vol. 2',
        Year: '2004',
        Rated: 'R',
        Released: '16 Apr 2004',
        Runtime: '137 min',
        Genre: 'Action, Crime, Thriller',
        Director: 'Quentin Tarantino',
        Writer: 'Quentin Tarantino, Quentin Tarantino (character The Bride), Uma Thurman (character The Bride)',
        Actors: 'Vivica A. Fox, Ambrosia Kelley, Michael Parks, James Parks',
        Plot: 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.',
        Language: 'English, Cantonese, Mandarin, Spanish',
        Country: 'USA',
        Awards: 'Nominated for 2 Golden Globes. Another 22 wins & 82 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.0/10' },
            { Source: 'Rotten Tomatoes', Value: '84%' },
            { Source: 'Metacritic', Value: '83/100' },
        ],
        Metascore: '83',
        imdbRating: '8.0',
        imdbVotes: '657,553',
        imdbID: 'tt0378194',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: 'N/A',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'False',
    },
    {
        Title: 'The Silence of the Lambs',
        Year: '1991',
        Rated: 'R',
        Released: '14 Feb 1991',
        Runtime: '118 min',
        Genre: 'Crime, Drama, Thriller',
        Director: 'Jonathan Demme',
        Writer: 'Thomas Harris (novel), Ted Tally (screenplay)',
        Actors: 'Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz',
        Plot: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        Language: 'English, Latin',
        Country: 'USA',
        Awards: 'Won 5 Oscars. Another 63 wins & 51 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.6/10' },
            { Source: 'Rotten Tomatoes', Value: '96%' },
            { Source: 'Metacritic', Value: '85/100' },
        ],
        Metascore: '85',
        imdbRating: '8.6',
        imdbVotes: '1,205,175',
        imdbID: 'tt0102926',
        Type: 'movie',
        DVD: '01 Jul 1998',
        BoxOffice: 'N/A',
        Production: 'Orion Pictures Corporation',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: 'The Rainmaker',
        Year: '1997',
        Rated: 'PG-13',
        Released: '21 Nov 1997',
        Runtime: '135 min',
        Genre: 'Crime, Drama, Thriller',
        Director: 'Francis Ford Coppola',
        Writer: 'John Grisham (novel), Francis Ford Coppola (screenplay), Michael Herr (narration)',
        Actors: 'Matt Damon, Danny DeVito, Claire Danes, Jon Voight',
        Plot: 'An underdog lawyer takes on a fraudulent insurance company.',
        Language: 'English',
        Country: 'USA, Germany',
        Awards: 'Nominated for 1 Golden Globe. Another 2 wins & 9 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjdlMjI2ZjgtN2ViOS00ZmI0LWE0ZTMtZjg1ZjczYWYzOGZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '7.2/10' },
            { Source: 'Rotten Tomatoes', Value: '83%' },
            { Source: 'Metacritic', Value: '72/100' },
        ],
        Metascore: '72',
        imdbRating: '7.2',
        imdbVotes: '60,219',
        imdbID: 'tt0119978',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: 'N/A',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: 'The Godfather',
        Year: '1972',
        Rated: 'R',
        Released: '24 Mar 1972',
        Runtime: '175 min',
        Genre: 'Crime, Drama',
        Director: 'Francis Ford Coppola',
        Writer: 'Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)',
        Actors: 'Marlon Brando, Al Pacino, James Caan, Richard S. Castellano',
        Plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        Language: 'English, Italian, Latin',
        Country: 'USA',
        Awards: 'Won 3 Oscars. Another 26 wins & 30 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '9.2/10' },
            { Source: 'Rotten Tomatoes', Value: '98%' },
            { Source: 'Metacritic', Value: '100/100' },
        ],
        Metascore: '100',
        imdbRating: '9.2',
        imdbVotes: '1,532,092',
        imdbID: 'tt0068646',
        Type: 'movie',
        DVD: '09 Oct 2001',
        BoxOffice: 'N/A',
        Production: 'Paramount Pictures',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'True',
    },
    {
        Title: 'The Skin I Live In',
        Year: '2011',
        Rated: 'R',
        Released: '02 Sep 2011',
        Runtime: '120 min',
        Genre: 'Drama, Horror, Thriller',
        Director: 'Pedro Almodóvar',
        Writer: 'Thierry Jonquet (novel), Pedro Almodóvar, Agustín Almodóvar (collaboration)',
        Actors: 'Antonio Banderas, Elena Anaya, Marisa Paredes, Jan Cornet',
        Plot: 'A brilliant plastic surgeon, haunted by past tragedies, creates a type of synthetic skin that withstands any kind of damage. His guinea pig: a mysterious and volatile woman who holds the key to his obsession.',
        Language: 'Spanish',
        Country: 'Spain',
        Awards: 'Nominated for 1 Golden Globe. Another 28 wins & 68 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYmFmNjY5NDYtZjlhNi00YjQ5LTgzNzctNWRiNWUzNmIyNjc4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '7.6/10' },
            { Source: 'Rotten Tomatoes', Value: '81%' },
            { Source: 'Metacritic', Value: '70/100' },
        ],
        Metascore: '70',
        imdbRating: '7.6',
        imdbVotes: '130,820',
        imdbID: 'tt1189073',
        Type: 'movie',
        DVD: '06 Mar 2012',
        BoxOffice: '$3,185,193',
        Production: 'Sony Pictures Classics',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'False',
    },
    {
        Title: 'Volver',
        Year: '2006',
        Rated: 'R',
        Released: '26 Jan 2007',
        Runtime: '121 min',
        Genre: 'Comedy, Drama',
        Director: 'Pedro Almodóvar',
        Writer: 'Pedro Almodóvar (screenplay)',
        Actors: 'Penélope Cruz, Carmen Maura, Lola Dueñas, Blanca Portillo',
        Plot: "After her death, a mother returns to her home town in order to fix the situations she couldn't resolve during her life.",
        Language: 'Spanish',
        Country: 'Spain',
        Awards: 'Nominated for 1 Oscar. Another 61 wins & 92 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjA0NTUxMjY1OV5BMl5BanBnXkFtZTcwNjI2OTMzMQ@@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '7.6/10' },
            { Source: 'Rotten Tomatoes', Value: '91%' },
            { Source: 'Metacritic', Value: '84/100' },
        ],
        Metascore: '84',
        imdbRating: '7.6',
        imdbVotes: '91,900',
        imdbID: 'tt0441909',
        Type: 'movie',
        DVD: '03 Apr 2007',
        BoxOffice: '$12,830,604',
        Production: 'Sony Pictures Classics',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'True',
    },
    {
        Title: 'Gone with the Wind',
        Year: '1939',
        Rated: 'Passed',
        Released: '17 Jan 1940',
        Runtime: '238 min',
        Genre: 'Drama, History, Romance, War',
        Director: 'Victor Fleming, George Cukor, Sam Wood',
        Writer: 'Margaret Mitchell (story of the old south "Gone with the Wind"), Sidney Howard (screenplay)',
        Actors: "Thomas Mitchell, Barbara O'Neil, Vivien Leigh, Evelyn Keyes",
        Plot: 'A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.',
        Language: 'English',
        Country: 'USA',
        Awards: 'Won 8 Oscars. Another 12 wins & 12 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.1/10' },
            { Source: 'Rotten Tomatoes', Value: '91%' },
            { Source: 'Metacritic', Value: '97/100' },
        ],
        Metascore: '97',
        imdbRating: '8.1',
        imdbVotes: '276,652',
        imdbID: 'tt0031381',
        Type: 'movie',
        DVD: '07 Mar 2000',
        BoxOffice: 'N/A',
        Production: "Loew's Inc.",
        Website: 'N/A',
        Watched: 'False',
        Saved: 'True',
    },
    {
        Title: 'Some Like It Hot',
        Year: '1959',
        Rated: 'Not Rated',
        Released: '19 Mar 1959',
        Runtime: '121 min',
        Genre: 'Comedy, Music, Romance',
        Director: 'Billy Wilder',
        Writer: 'Billy Wilder (screenplay), I.A.L. Diamond (screenplay), Robert Thoeren (suggested by a story by), Michael Logan (suggested by a story by)',
        Actors: 'Marilyn Monroe, Tony Curtis, Jack Lemmon, George Raft',
        Plot: 'After two male musicians witness a mob hit, they flee the state in an all-female band disguised as women, but further complications set in.',
        Language: 'English',
        Country: 'USA',
        Awards: 'Won 1 Oscar. Another 14 wins & 15 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.2/10' },
            { Source: 'Rotten Tomatoes', Value: '95%' },
            { Source: 'Metacritic', Value: '98/100' },
        ],
        Metascore: '98',
        imdbRating: '8.2',
        imdbVotes: '233,258',
        imdbID: 'tt0053291',
        Type: 'movie',
        DVD: '22 May 2001',
        BoxOffice: 'N/A',
        Production: 'United Artists',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: 'Indiana Jones and the Last Crusade',
        Year: '1989',
        Rated: 'PG-13',
        Released: '24 May 1989',
        Runtime: '127 min',
        Genre: 'Action, Adventure',
        Director: 'Steven Spielberg',
        Writer: 'Jeffrey Boam (screenplay), George Lucas (story), Menno Meyjes (story), George Lucas (characters), Philip Kaufman (characters)',
        Actors: 'Harrison Ford, Sean Connery, Denholm Elliott, Alison Doody',
        Plot: 'In 1938, after his father Professor Henry Jones, Sr. goes missing while pursuing the Holy Grail, Professor Henry "Indiana" Jones, Jr. finds himself up against Adolf Hitler\'s Nazis again to stop them from obtaining its powers.',
        Language: 'English, German, Greek, Arabic',
        Country: 'USA',
        Awards: 'Won 1 Oscar. Another 7 wins & 22 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.2/10' },
            { Source: 'Rotten Tomatoes', Value: '88%' },
            { Source: 'Metacritic', Value: '65/100' },
        ],
        Metascore: '65',
        imdbRating: '8.2',
        imdbVotes: '664,861',
        imdbID: 'tt0097576',
        Type: 'movie',
        DVD: '21 Oct 2003',
        BoxOffice: 'N/A',
        Production: 'Paramount Pictures',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: 'Blade Runner 2049',
        Year: '2017',
        Rated: 'R',
        Released: '06 Oct 2017',
        Runtime: '164 min',
        Genre: 'Action, Drama, Mystery, Sci-Fi, Thriller',
        Director: 'Denis Villeneuve',
        Writer: 'Hampton Fancher (screenplay by), Michael Green (screenplay by), Hampton Fancher (story by), Philip K. Dick (based on characters from the novel "Do Androids Dream of Electric Sheep?" by)',
        Actors: 'Ryan Gosling, Dave Bautista, Robin Wright, Mark Arnold',
        Plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        Language: 'English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish',
        Country: 'USA, UK, Hungary, Canada, Spain',
        Awards: 'Won 2 Oscars. Another 97 wins & 159 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '8.0/10' },
            { Source: 'Rotten Tomatoes', Value: '87%' },
            { Source: 'Metacritic', Value: '81/100' },
        ],
        Metascore: '81',
        imdbRating: '8.0',
        imdbVotes: '429,166',
        imdbID: 'tt1856101',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: 'N/A',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: '50 First Dates',
        Year: '2004',
        Rated: 'PG-13',
        Released: '13 Feb 2004',
        Runtime: '99 min',
        Genre: 'Comedy, Drama, Romance',
        Director: 'Peter Segal',
        Writer: 'George Wing',
        Actors: 'Adam Sandler, Drew Barrymore, Rob Schneider, Sean Astin',
        Plot: "Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams, until he discovers she has short-term memory loss and forgets him the next day.",
        Language: 'English, Hawaiian, Mandarin, None',
        Country: 'USA',
        Awards: '6 wins & 10 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '6.8/10' },
            { Source: 'Rotten Tomatoes', Value: '45%' },
            { Source: 'Metacritic', Value: '48/100' },
        ],
        Metascore: '48',
        imdbRating: '6.8',
        imdbVotes: '316,552',
        imdbID: 'tt0343660',
        Type: 'movie',
        DVD: '15 Jun 2004',
        BoxOffice: '$120,776,832',
        Production: 'Sony Pictures',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'True',
    },
    {
        Title: 'Just Go with It',
        Year: '2011',
        Rated: 'PG-13',
        Released: '11 Feb 2011',
        Runtime: '117 min',
        Genre: 'Comedy, Romance',
        Director: 'Dennis Dugan',
        Writer: 'Allan Loeb (screenplay), Timothy Dowling (screenplay), I.A.L. Diamond (screenplay "Cactus Flower"), Abe Burrows (stage play), Pierre Barillet (French play), Jean-Pierre Grédy (French play)',
        Actors: 'Adam Sandler, Jennifer Aniston, Nicole Kidman, Nick Swardson',
        Plot: 'On a weekend trip to Hawaii, a plastic surgeon convinces his loyal assistant to pose as his soon-to-be-divorced wife in order to cover up a careless lie he told to his much-younger girlfriend.',
        Language: 'English',
        Country: 'USA',
        Awards: '5 wins & 13 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTM3MzM3NDE5MV5BMl5BanBnXkFtZTcwNDE5MTUxNA@@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '6.4/10' },
            { Source: 'Rotten Tomatoes', Value: '19%' },
            { Source: 'Metacritic', Value: '33/100' },
        ],
        Metascore: '33',
        imdbRating: '6.4',
        imdbVotes: '211,733',
        imdbID: 'tt1564367',
        Type: 'movie',
        DVD: '07 Jun 2011',
        BoxOffice: '$103,028,109',
        Production: 'Sony Pictures',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: "I'm So Excited!",
        Year: '2013',
        Rated: 'R',
        Released: '08 Mar 2013',
        Runtime: '90 min',
        Genre: 'Comedy',
        Director: 'Pedro Almodóvar',
        Writer: 'Pedro Almodóvar',
        Actors: 'Antonio Banderas, Penélope Cruz, Coté Soler, Antonio de la Torre',
        Plot: 'When it appears as though the end is in sight, the pilots, flight crew, and passengers of a plane heading to Mexico City look to forget the anguish of the moment and face the greatest danger, which we carry within ourselves.',
        Language: 'Spanish',
        Country: 'Spain',
        Awards: '3 wins & 10 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTYxODgwNDQyOF5BMl5BanBnXkFtZTcwMzM2NjkwOQ@@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '5.6/10' },
            { Source: 'Rotten Tomatoes', Value: '49%' },
            { Source: 'Metacritic', Value: '55/100' },
        ],
        Metascore: '55',
        imdbRating: '5.6',
        imdbVotes: '21,084',
        imdbID: 'tt2243389',
        Type: 'movie',
        DVD: '03 Sep 2013',
        BoxOffice: '$1,367,846',
        Production: 'Sony Pictures Classics',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: 'Law of Desire',
        Year: '1987',
        Rated: 'NC-17',
        Released: '05 Mar 1987',
        Runtime: '102 min',
        Genre: 'Comedy, Drama, Thriller',
        Director: 'Pedro Almodóvar',
        Writer: 'Pedro Almodóvar (screenplay), Pedro Almodóvar (story)',
        Actors: 'Eusebio Poncela, Carmen Maura, Antonio Banderas, Miguel Molina',
        Plot: 'A film maker has a fling with a homicidal possessive fan who threatens his true love and sister.',
        Language: 'Spanish',
        Country: 'Spain',
        Awards: '12 wins & 5 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMDdjZDhlOWUtOWQ4YS00ZjdhLWJkOTktMTVlYTY2Y2IwMTMxXkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '7.1/10' },
            { Source: 'Rotten Tomatoes', Value: '100%' },
        ],
        Metascore: 'N/A',
        imdbRating: '7.1',
        imdbVotes: '10,130',
        imdbID: 'tt0093412',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: 'N/A',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: 'Women on the Verge of a Nervous Breakdown',
        Year: '1988',
        Rated: 'R',
        Released: '11 Nov 1988',
        Runtime: '88 min',
        Genre: 'Comedy, Drama',
        Director: 'Pedro Almodóvar',
        Writer: 'Pedro Almodóvar (screenplay)',
        Actors: 'Carmen Maura, Antonio Banderas, Julieta Serrano, María Barranco',
        Plot: 'A television actress encounters a variety of eccentric characters after embarking on a journey to discover why her lover abruptly left her.',
        Language: 'Spanish',
        Country: 'Spain',
        Awards: 'Nominated for 1 Oscar. Another 22 wins & 22 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYWM1NWFjMDItODg5OS00MWUwLWFjNWUtOGZkZWM3NmRiMWNjXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '7.6/10' },
            { Source: 'Rotten Tomatoes', Value: '89%' },
            { Source: 'Metacritic', Value: '85/100' },
        ],
        Metascore: '85',
        imdbRating: '7.6',
        imdbVotes: '33,622',
        imdbID: 'tt0095675',
        Type: 'movie',
        DVD: '10 Apr 2001',
        BoxOffice: 'N/A',
        Production: 'Orion Classics',
        Website: 'N/A',
        Watched: 'False',
        Saved: 'False',
    },
    {
        Title: 'Tie Me Up! Tie Me Down!',
        Year: '1989',
        Rated: 'NC-17',
        Released: '22 Jan 1990',
        Runtime: '101 min',
        Genre: 'Comedy, Crime, Drama, Romance',
        Director: 'Pedro Almodóvar',
        Writer: 'Pedro Almodóvar (screenplay), Pedro Almodóvar (story)',
        Actors: 'Victoria Abril, Antonio Banderas, Loles León, María Barranco',
        Plot: 'An unbalanced but alluring former mental patient takes a porn star prisoner in the hopes of convincing her to marry him.',
        Language: 'Spanish',
        Country: 'Spain',
        Awards: '8 wins & 19 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjExMDM0OTItY2E1YS00N2Y4LWFlNGMtOTgyNmFlMjIyOTgxXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg',
        Ratings: [
            { Source: 'Internet Movie Database', Value: '7.0/10' },
            { Source: 'Rotten Tomatoes', Value: '70%' },
            { Source: 'Metacritic', Value: '55/100' },
        ],
        Metascore: '55',
        imdbRating: '7.0',
        imdbVotes: '23,039',
        imdbID: 'tt0101026',
        Type: 'movie',
        DVD: '12 Dec 2000',
        BoxOffice: 'N/A',
        Production: 'Miramax',
        Website: 'N/A',
        Watched: 'True',
        Saved: 'False',
    },
];
/* harmony default export */ __webpack_exports__["default"] = (movies);


/***/ }),

/***/ "./apps/api/src/constants.ts":
/*!***********************************!*\
  !*** ./apps/api/src/constants.ts ***!
  \***********************************/
/*! exports provided: MOVIES_ROUTE, MOVIE_BY_NAME_ROUTE, MOVIE_BY_ID_ROUTE, FACETS_ROUTE, DIRECTORS_ROUTE, ACTORS_ROUTE, MOVIES_TITLES, MOVIES_IDS, NOT_APPLICABLE, METASCORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIES_ROUTE", function() { return MOVIES_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_BY_NAME_ROUTE", function() { return MOVIE_BY_NAME_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_BY_ID_ROUTE", function() { return MOVIE_BY_ID_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACETS_ROUTE", function() { return FACETS_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTORS_ROUTE", function() { return DIRECTORS_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTORS_ROUTE", function() { return ACTORS_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIES_TITLES", function() { return MOVIES_TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIES_IDS", function() { return MOVIES_IDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_APPLICABLE", function() { return NOT_APPLICABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METASCORE", function() { return METASCORE; });
const ROUTE_PREFIX = `/api`;
const ROUTE_MOVIES_PREFIX = `${ROUTE_PREFIX}/movies`;
// Routes
const MOVIES_ROUTE = ROUTE_MOVIES_PREFIX;
const MOVIE_BY_NAME_ROUTE = `${ROUTE_MOVIES_PREFIX}/name`;
const MOVIE_BY_ID_ROUTE = `${ROUTE_MOVIES_PREFIX}/id`;
const FACETS_ROUTE = `${ROUTE_PREFIX}/facets/`;
const DIRECTORS_ROUTE = `${ROUTE_PREFIX}/directors/`;
const ACTORS_ROUTE = `${ROUTE_PREFIX}/actors/`;
const MOVIES_TITLES = 'titles';
const MOVIES_IDS = 'imdbIDs';
const NOT_APPLICABLE = 'N/A';
const METASCORE = {
    '0': {
        label: '< 60',
        startValue: 0,
        logic: (value) => Number(value) < 60,
    },
    '1': {
        label: 'Between 60 & 80',
        startValue: 0,
        logic: (value) => Number(value) > 60 && Number(value) < 80,
    },
    '2': {
        label: 'Between 80 & 90',
        startValue: 0,
        logic: (value) => Number(value) > 80 && Number(value) < 90,
    },
    '3': {
        label: '> 90',
        startValue: 0,
        logic: (value) => Number(value) > 90,
    },
    '4': {
        label: NOT_APPLICABLE,
        startValue: 0,
        logic: (value) => String(value) === NOT_APPLICABLE,
    },
};


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! exports provided: app, server, mapOfMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOfMovies", function() { return mapOfMovies; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mono_nx_test_with_nextjs_api_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/routes */ "./apps/api/src/app/routes/index.ts");
/* harmony import */ var _mono_nx_test_with_nextjs_api_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/utils */ "./apps/api/src/utils/index.ts");
/* harmony import */ var _mono_nx_test_with_nextjs_api_assets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/assets */ "./apps/api/src/assets/list.ts");
/* harmony import */ var _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/constants */ "./apps/api/src/constants.ts");
/**
 * This is not a production server!
 * This is only a minimal API server to get started.
 */










 // The API data

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Wunderman Thompson Commerce movies API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3333',
            },
        ],
    },
    host: 'http://localhost:3333',
    basePath: '/',
    apis: [
        path__WEBPACK_IMPORTED_MODULE_6__["resolve"](__dirname, '../../../apps/api/src/app/routes/**/index.ts'),
    ],
};
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_3__(options);
const maps = Object(_mono_nx_test_with_nextjs_api_utils__WEBPACK_IMPORTED_MODULE_9__["getMapOf"])(_mono_nx_test_with_nextjs_api_assets__WEBPACK_IMPORTED_MODULE_10__["default"]);
const { mapOfMovies } = maps;
const app = express__WEBPACK_IMPORTED_MODULE_0__();
app.use((req, res, next) => {
    req['context'] = { maps };
    next();
});
app.use(helmet__WEBPACK_IMPORTED_MODULE_4__());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["json"]()); // support json encoded bodies
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["urlencoded"]({ extended: true })); // support encoded bodies
app.use(morgan__WEBPACK_IMPORTED_MODULE_5__('tiny'));
app.use(cors__WEBPACK_IMPORTED_MODULE_7__());
app.use('/swagger-doc', swagger_ui_express__WEBPACK_IMPORTED_MODULE_2__["serve"], swagger_ui_express__WEBPACK_IMPORTED_MODULE_2__["setup"](swaggerSpec, { explorer: true }));
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});
// Routes
app.use(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_11__["MOVIES_ROUTE"], _mono_nx_test_with_nextjs_api_routes__WEBPACK_IMPORTED_MODULE_8__["default"].movies);
app.use(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_11__["ACTORS_ROUTE"], _mono_nx_test_with_nextjs_api_routes__WEBPACK_IMPORTED_MODULE_8__["default"].actors);
app.use(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_11__["DIRECTORS_ROUTE"], _mono_nx_test_with_nextjs_api_routes__WEBPACK_IMPORTED_MODULE_8__["default"].directors);
app.use(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_11__["FACETS_ROUTE"], _mono_nx_test_with_nextjs_api_routes__WEBPACK_IMPORTED_MODULE_8__["default"].facetView);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);



/***/ }),

/***/ "./apps/api/src/utils/filterEmptyString/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/utils/filterEmptyString/index.ts ***!
  \*******************************************************/
/*! exports provided: filterEmptyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterEmptyString", function() { return filterEmptyString; });
/* harmony import */ var _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/constants */ "./apps/api/src/constants.ts");

/**
 * It return true when the string is different from "N/A", false otherwise
 * @param { string } param - string to compare
 * @returns { Boolean } -
 **/
const filterEmptyString = (param) => param !== _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_0__["NOT_APPLICABLE"];


/***/ }),

/***/ "./apps/api/src/utils/getMapOf/index.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/utils/getMapOf/index.ts ***!
  \**********************************************/
/*! exports provided: getMapOf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMapOf", function() { return getMapOf; });
/* harmony import */ var _filterEmptyString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filterEmptyString */ "./apps/api/src/utils/filterEmptyString/index.ts");
/* harmony import */ var _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mono-nx-test-with-nextjs/api/constants */ "./apps/api/src/constants.ts");


const filterAwardsForOldObj = (award, obj) => award !== _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["NOT_APPLICABLE"] ? [...obj.awards, award] : obj.awards;
const filterAwardsForNewObj = (award) => award !== _mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["NOT_APPLICABLE"] ? [award] : [];
/**
 * It creates the directors' map
 * @param {JSON} data - List of movies from json file
 * @returns {Map<string,string>} - Map of directors
 */
const getDirectorsMap = (data) => {
    const mapOfDirectors = new Map();
    data.forEach((movie) => {
        const { Title, Awards, Director, Type } = movie;
        const listOfDirectors = Director.split(',')
            .map((str) => str.trim())
            .filter((directorName) => Object(_filterEmptyString__WEBPACK_IMPORTED_MODULE_0__["filterEmptyString"])(directorName));
        listOfDirectors.forEach((directorName) => {
            const directorNameLowerCase = directorName.toLowerCase();
            const director = mapOfDirectors.get(directorNameLowerCase);
            const newMovie = { title: Title, type: Type };
            if (director) {
                mapOfDirectors.set(directorNameLowerCase, {
                    movies: [...director.movies, newMovie],
                    awards: filterAwardsForOldObj(Awards, director),
                });
            }
            else {
                mapOfDirectors.set(directorNameLowerCase, {
                    movies: [newMovie],
                    awards: filterAwardsForNewObj(Awards),
                });
            }
        });
    });
    return mapOfDirectors;
};
/**
 * It creates the actors' map
 * @param {JSON} data - List of movies from json file
 * @returns {Map<string,string>} - Map of actors
 */
const getActorsMap = (data) => {
    const mapOfActors = new Map();
    data.forEach((movie) => {
        const { Actors, Title, Awards, Type } = movie;
        const listOfActors = Actors.split(',').map((str) => str.trim());
        listOfActors.forEach((actorName) => {
            const actorNameLowerCase = actorName.toLowerCase();
            const actor = mapOfActors.get(actorNameLowerCase);
            const newMovie = { title: Title, type: Type };
            if (actor) {
                mapOfActors.set(actorNameLowerCase, {
                    movies: [...actor.movies, newMovie],
                    awards: filterAwardsForOldObj(Awards, actor),
                });
            }
            else {
                mapOfActors.set(actorNameLowerCase, {
                    movies: [newMovie],
                    awards: filterAwardsForNewObj(Awards),
                });
            }
        });
    });
    return mapOfActors;
};
/**
 * It creates the movies' map
 * @param {JSON} data - List of movies from json file
 * @returns {MapOfMovies} - Map of movies
 */
const getMoviesMap = (data) => {
    const mapOfMovies = new Map();
    const moviesTitlesMap = new Map();
    const moviesImdbIDsMap = new Map();
    data.forEach((movie) => {
        const { Title, imdbID } = movie;
        const titleLowerCase = Title.toLowerCase();
        moviesTitlesMap.set(titleLowerCase, movie);
        moviesImdbIDsMap.set(imdbID, titleLowerCase);
    });
    mapOfMovies.set(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_TITLES"], moviesTitlesMap);
    mapOfMovies.set(_mono_nx_test_with_nextjs_api_constants__WEBPACK_IMPORTED_MODULE_1__["MOVIES_IDS"], moviesImdbIDsMap);
    return mapOfMovies;
};
/**
 * Maps
 * @typedef {Object} Maps
 * @property {MapOfActors} mapOfActors - Map of actors
 * @property {MapOfDirectors} mapOfDirectors - Map of artists
 * @property {MapOfMovies} mapOfMovies - Map of movies
 */
/**
 * It returns the Maps
 * @param {JSON} data - List of movies from json file
 * @returns {Maps} - Maps of movies, actors and directors
 */
const getMapOf = (data) => {
    return {
        mapOfActors: getActorsMap(data),
        mapOfDirectors: getDirectorsMap(data),
        mapOfMovies: getMoviesMap(data),
    };
};
/* harmony default export */ __webpack_exports__["default"] = (getMapOf);


/***/ }),

/***/ "./apps/api/src/utils/index.ts":
/*!*************************************!*\
  !*** ./apps/api/src/utils/index.ts ***!
  \*************************************/
/*! exports provided: transformMapIntoArrayOf, transformMapIntoArrayOfInfo, getMapOf, filterEmptyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transformMapIntoArrayOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformMapIntoArrayOf */ "./apps/api/src/utils/transformMapIntoArrayOf/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformMapIntoArrayOf", function() { return _transformMapIntoArrayOf__WEBPACK_IMPORTED_MODULE_0__["transformMapIntoArrayOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformMapIntoArrayOfInfo", function() { return _transformMapIntoArrayOf__WEBPACK_IMPORTED_MODULE_0__["transformMapIntoArrayOfInfo"]; });

/* harmony import */ var _getMapOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMapOf */ "./apps/api/src/utils/getMapOf/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMapOf", function() { return _getMapOf__WEBPACK_IMPORTED_MODULE_1__["getMapOf"]; });

/* harmony import */ var _filterEmptyString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterEmptyString */ "./apps/api/src/utils/filterEmptyString/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterEmptyString", function() { return _filterEmptyString__WEBPACK_IMPORTED_MODULE_2__["filterEmptyString"]; });






/***/ }),

/***/ "./apps/api/src/utils/transformMapIntoArrayOf/index.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/utils/transformMapIntoArrayOf/index.ts ***!
  \*************************************************************/
/*! exports provided: transformMapIntoArrayOf, transformMapIntoArrayOfInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMapIntoArrayOf", function() { return transformMapIntoArrayOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMapIntoArrayOfInfo", function() { return transformMapIntoArrayOfInfo; });
/**
 * It transforms the map into an array of elements specified by the callback passed as arguments
 * @param map {MapOfMovies | MapOfArtistsHistory} - Map to transform
 * @param callback { Function } - Callback to use to transform the map
 * @returns {Array}
 */
const transformMapIntoArrayOf = (map, callback) => [...map].map((mapElement) => callback(mapElement));
/**
 * It transforms the map into an array of InfoShow elements
 * @param map {MapOfMovies | MapOfArtistsHistory} - Map to transform
 * @param callback { Function } - Callback to use to transform the map's element into InfoShow elements
 * @returns {Array<InfoShow>}
 */
const transformMapIntoArrayOfInfoCallback = ([name, info]) => ({ name, info });
const transformMapIntoArrayOfInfo = (map) => transformMapIntoArrayOf(map, transformMapIntoArrayOfInfoCallback);


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jdslima/Desktop/wtcomm-fe-tech-test-Jon-Souzal/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "lodash.upperfirst":
/*!************************************!*\
  !*** external "lodash.upperfirst" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.upperfirst");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "validate.js":
/*!******************************!*\
  !*** external "validate.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validate.js");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map