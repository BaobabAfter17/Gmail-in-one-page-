/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nlet Inbox = {\n    render: function() {\n        const ul = document.createElement(\"ul\");\n        ul.className = \"messages\";\n        const inboxMessages = MessageStore.getInboxMessages();\n        inboxMessages.forEach((msg) => {\n            ul.appendChild(\n                this.renderMessage(msg)\n            );\n        });\n        return ul;\n    },\n\n    renderMessage: function(msg) {\n        const msgLi = document.createElement(\"li\");\n        msgLi.className = \"messages\";\n        msgLi.innerHTML = `\n            <span class=\"from\">${msg.from}</span><br />\n            <span class=\"subject\">subject: ${msg.subject}</span><br />\n            <span class=\"body\">body: ${msg.body}</span>\n        `;\n        return msgLi;\n    }\n\n}\n\nmodule.exports = Inbox;\n\n//# sourceURL=webpack:///./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! ./router */ \"./src/router.js\");\nconst Inbox = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\nconst Sent = __webpack_require__(/*! ./sent */ \"./src/sent.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", (event) => {\n    const sidebarEls = document.querySelectorAll(\".sidebar-nav li\");\n    sidebarEls.forEach((el) => {\n        el.addEventListener(\"click\", (event) => {\n            const location = el.innerText;\n            window.location.hash = location.toLowerCase();\n        });\n    });\n    const content = document.querySelector(\".content\");\n    const routes = {inbox: Inbox, sent: Sent};\n    const router = new Router(content, routes);\n    router.start();\n    window.location.hash = \"#inbox\";\n});\n\n\n\n\n//test\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let messages = {\n  sent: [\n    {\n      to: \"harrypotter@hogwarts.edu.com\",\n      subject: \"You booklist for the coming semester!\",\n      body: \"History of Magic by Bathilda Bagshot\"\n    },\n    {\n      to: \"ronwesley@hogwarts.edu.com\",\n      subject: \"Wanna join the Quidditch team?\",\n      body: \"Come to the court for training next Saturday morning at 9:00.\"\n    },\n  ],\n  inbox: [\n    {\n        from: \"gellertgrindelward@durmstrang.edu.com\",\n        subject: \"How are you doing?\",\n        body: \"Missing you, my old friend. Love.\"\n    },\n    {\n        from: \"severussnape@hogwarts.edu.com\",\n        subject: \"What's next step against the Dark Lord?\",\n        body: \"Really? Beat him with a cookie?\"\n    }\n  ]\n};\n\nlet MessageStore = {\n    getInboxMessages: function() {\n        return messages.inbox;\n    },\n\n    getSentMessages: function() {\n        return messages.sent;\n    }\n};\n\nmodule.exports = MessageStore;\n\n//# sourceURL=webpack:///./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Router(node, routes) {\n    this.node = node;\n    this.routes = routes;\n}\n\nRouter.prototype.start = function () {\n    this.render();\n    window.addEventListener(\"hashchange\", (event) => {\n        this.render();\n    });\n}\n\nRouter.prototype.activeRoute = function () {\n   const route = window.location.hash.slice(1);\n   return this.routes[route];\n}\n\nRouter.prototype.render = function () {\n    this.node.innerHTML = \"\";\n    const component = this.activeRoute();\n    if (typeof component !== \"undefined\") {\n        this.node.appendChild(component.render());\n    }\n}\n\nmodule.exports = Router;\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nlet Sent = {\n  render: function () {\n    const ul = document.createElement(\"ul\");\n    ul.className = \"messages\";\n    const sentMessages = MessageStore.getSentMessages();\n    sentMessages.forEach((msg) => {\n      ul.appendChild(this.renderMessage(msg));\n    });\n    return ul;\n  },\n\n  renderMessage: function (msg) {\n    const msgLi = document.createElement(\"li\");\n    msgLi.className = \"messages\";\n    msgLi.innerHTML = `\n            <span class=\"to\">To: ${msg.to}</span><br />\n            <span class=\"subject\">subject: ${msg.subject}</span><br />\n            <span class=\"body\">body: ${msg.body}</span>\n        `;\n    return msgLi;\n  },\n};\n\nmodule.exports = Sent;\n\n\n//# sourceURL=webpack:///./src/sent.js?");

/***/ })

/******/ });