/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const displayMovies = __webpack_require__(/*! ./utils */ \"./scripts/utils.js\");\r\n\r\n// Llamada a la API para obtener las películas\r\n$.get(\"https://students-api.up.railway.app/movies\", (data, status) => {\r\n    if (status === \"success\") {\r\n        displayMovies(data); // Llamar a displayMovies con los datos obtenidos\r\n        console.log(\"concurrently es funcionando de mil maravillas!!!\")\r\n    } else {\r\n        console.error(\"Error al obtener los datos de la API.\");\r\n    };\r\n});\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/***/ ((module) => {

eval("// Función para mostrar las películas en el HTML\r\nfunction displayMovies(dataFromApi) {\r\n    const movieList = document.getElementById(\"moviesList\");\r\n    movieList.innerHTML = \"\"; // Limpiar el contenedor antes de agregar películas\r\n\r\n    dataFromApi.forEach((movie) => {\r\n        const movieCard = document.createElement(\"div\");\r\n        movieCard.classList.add(\"movie-card\");\r\n\r\n        // Extraer propiedades usando destructuring\r\n        const { title, year, director, duration, genre, rate, poster } = movie;\r\n\r\n        // Crear la estructura HTML para cada tarjeta de película\r\n        movieCard.innerHTML = `\r\n            <img src=\"${poster}\" alt=\"${title}\">\r\n            <h3>${title}</h3>\r\n            <p><strong>Año:</strong> ${year}</p>\r\n            <p><strong>Director:</strong> ${director}</p>\r\n            <p><strong>Duración:</strong> ${duration}</p>\r\n            <p><strong>Rating:</strong> ${rate}</p>\r\n            <p class=\"genre\"><strong>Géneros:</strong> ${genre.join(\", \")}</p>\r\n        `;\r\n\r\n        movieList.appendChild(movieCard);\r\n    });\r\n};\r\n\r\nmodule.exports = displayMovies;\n\n//# sourceURL=webpack://front/./scripts/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;