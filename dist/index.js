(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-animation", ["react"], factory);
	else if(typeof exports === 'object')
		exports["dyna-animation"] = factory(require("react"));
	else
		root["dyna-animation"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var DynaAnimation = /** @class */ (function (_super) {
    __extends(DynaAnimation, _super);
    function DynaAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaAnimation.prototype.getClassNameForDynaAnimations = function () {
        var animations = this.props.animations;
        return Object.keys(animations)
            .map(function (animationName) {
            if (animations[animationName] != null) {
                return "animation-" + animationName + "-" + (animations[animationName] ? 'on' : 'off');
            }
            return null;
        })
            .filter(function (v) { return !!v; });
    };
    ;
    DynaAnimation.prototype.getClassNameForCssTransitions = function () {
        var animations = this.props.animations;
        return Object.keys(animations)
            .map(function (animationName) {
            if (animations[animationName] != null) {
                return "css-transition-" + animationName + "-" + (animations[animationName] ? 'enter' : 'leave');
            }
            return null;
        })
            .filter(function (v) { return !!v; });
    };
    ;
    DynaAnimation.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, animations = _a.animations, style = _a.style, children = _a.children;
        var className = [
            'dyna-animation',
            userClassName || ''
        ].concat(this.getClassNameForDynaAnimations(), this.getClassNameForCssTransitions()).join(' ').trim();
        return (React.createElement("div", { className: className, style: style }, children));
    };
    DynaAnimation.defaultProps = {
        className: null,
        style: {},
        animations: {},
        children: null,
    };
    return DynaAnimation;
}(React.Component));
exports.DynaAnimation = DynaAnimation;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EOrientation;
(function (EOrientation) {
    EOrientation["HORIZONTAL"] = "HORIZONTAL";
    EOrientation["VERTICAL"] = "VERTICAL";
})(EOrientation = exports.EOrientation || (exports.EOrientation = {}));
var EAnimationDuration;
(function (EAnimationDuration) {
    EAnimationDuration["MS50"] = "MS50";
    EAnimationDuration["MS100"] = "MS100";
    EAnimationDuration["MS250"] = "MS250";
    EAnimationDuration["MS500"] = "MS500";
    EAnimationDuration["MS750"] = "MS750";
    EAnimationDuration["S1"] = "S1";
})(EAnimationDuration = exports.EAnimationDuration || (exports.EAnimationDuration = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaAnimation_1 = __webpack_require__(0);
exports.DynaAnimation = DynaAnimation_1.DynaAnimation;
var DynaAnimation3dFlip_1 = __webpack_require__(5);
exports.DynaAnimation3dFlip = DynaAnimation3dFlip_1.DynaAnimation3dFlip;
var interfaces_1 = __webpack_require__(2);
exports.EOrientation = interfaces_1.EOrientation;
exports.EAnimationDuration = interfaces_1.EAnimationDuration;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var DynaAnimation_1 = __webpack_require__(0);
var interfaces_1 = __webpack_require__(2);
__webpack_require__(6);
var DynaAnimation3dFlip = /** @class */ (function (_super) {
    __extends(DynaAnimation3dFlip, _super);
    function DynaAnimation3dFlip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaAnimation3dFlip.prototype.renderStyle = function () {
        // render additional needed style, where are the key frames for width and height
        var _a = this.props, width = _a.width, height = _a.height;
        return (React.createElement("style", null, "\n             @keyframes container-width-show {\n                from {\n                  width: 0;\n                }\n                to {\n                    width: " + width + "px;\n                }\n              }\n              @keyframes container-width-hide {\n                from {\n                  width: " + width + "px;\n                }\n                to {\n                  width: 0;\n                }\n              }\n             @keyframes container-height-show {\n                from {\n                  height: 0;\n                }\n                to {\n                  height: " + height + "px;\n                }\n              }\n              @keyframes container-height-hide {\n                from {\n                  height: " + height + "px;\n                }\n                to {\n                  height: 0;\n                }\n              }\n          "));
    };
    DynaAnimation3dFlip.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, show = _a.show, perspective = _a.perspective, direction = _a.direction, width = _a.width, height = _a.height, duration = _a.duration, children = _a.children;
        var className = [
            "dyna-animation-3d-flip",
            userClassName,
            "flip-direction-" + direction,
            "dyna-animation-3d-flip--duration-" + duration
        ].join(' ').trim();
        var child = React.cloneElement(children, { style: { width: width + 'px', height: height + 'px' } });
        var animations = {};
        if (show != null)
            animations.show = show;
        return (React.createElement(DynaAnimation_1.DynaAnimation, { className: className, animations: animations, style: { perspective: perspective + "px" } },
            this.renderStyle(),
            React.createElement("div", null, child)));
    };
    DynaAnimation3dFlip.defaultProps = {
        className: '',
        show: true,
        perspective: 400,
        width: null,
        height: null,
        duration: interfaces_1.EAnimationDuration.MS250,
        direction: interfaces_1.EOrientation.HORIZONTAL,
        children: null,
    };
    return DynaAnimation3dFlip;
}(React.Component));
exports.DynaAnimation3dFlip = DynaAnimation3dFlip;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaAnimation3dFlip.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./DynaAnimation3dFlip.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".dyna-animation-3d-flip {\n  -webkit-perspective: 333px;\n          perspective: 333px;\n  /*\tDev note:\n\t\tWhere are the\n\t\t\t@keyframes container-width-show\n\t\t\t@keyframes container-width-hide\n\t\t\t@keyframes container-height-show\n\t\t\t@keyframes container-height-hide ???\n\t\tSince the width ang height is configurable and browsers doesn't support height: auto\n\t\tfor animations, the width and height is updated from javascript.\n\t\tSo, these also key frames are \"generated\" from javascript.\n\t*/\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-enter.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-show 25ms forwards;\n          animation: container-width-show 25ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-enter.flip-direction-HORIZONTAL > div {\n  opacity: 0;\n  -webkit-animation: content-horizontal-show 25ms forwards;\n          animation: content-horizontal-show 25ms forwards;\n  -webkit-animation-delay: 25ms;\n          animation-delay: 25ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-enter.flip-direction-VERTICAL {\n  -webkit-animation: container-height-show 25ms forwards;\n          animation: container-height-show 25ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-enter.flip-direction-VERTICAL > div {\n  opacity: 0;\n  -webkit-animation: content-vertical-show 25ms forwards;\n          animation: content-vertical-show 25ms forwards;\n  -webkit-animation-delay: 25ms;\n          animation-delay: 25ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-off.flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-leave.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-hide 25ms forwards;\n          animation: container-width-hide 25ms forwards;\n  -webkit-animation-delay: 25ms;\n          animation-delay: 25ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-off.flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-leave.flip-direction-HORIZONTAL > div {\n  -webkit-animation: content-horizontal-hide 25ms forwards;\n          animation: content-horizontal-hide 25ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-off.flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-leave.flip-direction-VERTICAL {\n  -webkit-animation: container-height-hide 25ms forwards;\n          animation: container-height-hide 25ms forwards;\n  -webkit-animation-delay: 25ms;\n          animation-delay: 25ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-off.flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS50.animation-show-leave.flip-direction-VERTICAL > div {\n  -webkit-animation: content-vertical-hide 25ms forwards;\n          animation: content-vertical-hide 25ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-enter.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-show 50ms forwards;\n          animation: container-width-show 50ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-enter.flip-direction-HORIZONTAL > div {\n  opacity: 0;\n  -webkit-animation: content-horizontal-show 50ms forwards;\n          animation: content-horizontal-show 50ms forwards;\n  -webkit-animation-delay: 50ms;\n          animation-delay: 50ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-enter.flip-direction-VERTICAL {\n  -webkit-animation: container-height-show 50ms forwards;\n          animation: container-height-show 50ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-enter.flip-direction-VERTICAL > div {\n  opacity: 0;\n  -webkit-animation: content-vertical-show 50ms forwards;\n          animation: content-vertical-show 50ms forwards;\n  -webkit-animation-delay: 50ms;\n          animation-delay: 50ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-off.flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-leave.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-hide 50ms forwards;\n          animation: container-width-hide 50ms forwards;\n  -webkit-animation-delay: 50ms;\n          animation-delay: 50ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-off.flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-leave.flip-direction-HORIZONTAL > div {\n  -webkit-animation: content-horizontal-hide 50ms forwards;\n          animation: content-horizontal-hide 50ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-off.flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-leave.flip-direction-VERTICAL {\n  -webkit-animation: container-height-hide 50ms forwards;\n          animation: container-height-hide 50ms forwards;\n  -webkit-animation-delay: 50ms;\n          animation-delay: 50ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-off.flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS100.animation-show-leave.flip-direction-VERTICAL > div {\n  -webkit-animation: content-vertical-hide 50ms forwards;\n          animation: content-vertical-hide 50ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-enter.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-show 125ms forwards;\n          animation: container-width-show 125ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-enter.flip-direction-HORIZONTAL > div {\n  opacity: 0;\n  -webkit-animation: content-horizontal-show 125ms forwards;\n          animation: content-horizontal-show 125ms forwards;\n  -webkit-animation-delay: 125ms;\n          animation-delay: 125ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-enter.flip-direction-VERTICAL {\n  -webkit-animation: container-height-show 125ms forwards;\n          animation: container-height-show 125ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-enter.flip-direction-VERTICAL > div {\n  opacity: 0;\n  -webkit-animation: content-vertical-show 125ms forwards;\n          animation: content-vertical-show 125ms forwards;\n  -webkit-animation-delay: 125ms;\n          animation-delay: 125ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-off.flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-leave.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-hide 125ms forwards;\n          animation: container-width-hide 125ms forwards;\n  -webkit-animation-delay: 125ms;\n          animation-delay: 125ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-off.flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-leave.flip-direction-HORIZONTAL > div {\n  -webkit-animation: content-horizontal-hide 125ms forwards;\n          animation: content-horizontal-hide 125ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-off.flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-leave.flip-direction-VERTICAL {\n  -webkit-animation: container-height-hide 125ms forwards;\n          animation: container-height-hide 125ms forwards;\n  -webkit-animation-delay: 125ms;\n          animation-delay: 125ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-off.flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS250.animation-show-leave.flip-direction-VERTICAL > div {\n  -webkit-animation: content-vertical-hide 125ms forwards;\n          animation: content-vertical-hide 125ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-enter.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-show 250ms forwards;\n          animation: container-width-show 250ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-enter.flip-direction-HORIZONTAL > div {\n  opacity: 0;\n  -webkit-animation: content-horizontal-show 250ms forwards;\n          animation: content-horizontal-show 250ms forwards;\n  -webkit-animation-delay: 250ms;\n          animation-delay: 250ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-enter.flip-direction-VERTICAL {\n  -webkit-animation: container-height-show 250ms forwards;\n          animation: container-height-show 250ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-enter.flip-direction-VERTICAL > div {\n  opacity: 0;\n  -webkit-animation: content-vertical-show 250ms forwards;\n          animation: content-vertical-show 250ms forwards;\n  -webkit-animation-delay: 250ms;\n          animation-delay: 250ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-off.flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-leave.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-hide 250ms forwards;\n          animation: container-width-hide 250ms forwards;\n  -webkit-animation-delay: 250ms;\n          animation-delay: 250ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-off.flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-leave.flip-direction-HORIZONTAL > div {\n  -webkit-animation: content-horizontal-hide 250ms forwards;\n          animation: content-horizontal-hide 250ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-off.flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-leave.flip-direction-VERTICAL {\n  -webkit-animation: container-height-hide 250ms forwards;\n          animation: container-height-hide 250ms forwards;\n  -webkit-animation-delay: 250ms;\n          animation-delay: 250ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-off.flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS500.animation-show-leave.flip-direction-VERTICAL > div {\n  -webkit-animation: content-vertical-hide 250ms forwards;\n          animation: content-vertical-hide 250ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-enter.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-show 375ms forwards;\n          animation: container-width-show 375ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-enter.flip-direction-HORIZONTAL > div {\n  opacity: 0;\n  -webkit-animation: content-horizontal-show 375ms forwards;\n          animation: content-horizontal-show 375ms forwards;\n  -webkit-animation-delay: 375ms;\n          animation-delay: 375ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-enter.flip-direction-VERTICAL {\n  -webkit-animation: container-height-show 375ms forwards;\n          animation: container-height-show 375ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-enter.flip-direction-VERTICAL > div {\n  opacity: 0;\n  -webkit-animation: content-vertical-show 375ms forwards;\n          animation: content-vertical-show 375ms forwards;\n  -webkit-animation-delay: 375ms;\n          animation-delay: 375ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-off.flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-leave.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-hide 375ms forwards;\n          animation: container-width-hide 375ms forwards;\n  -webkit-animation-delay: 375ms;\n          animation-delay: 375ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-off.flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-leave.flip-direction-HORIZONTAL > div {\n  -webkit-animation: content-horizontal-hide 375ms forwards;\n          animation: content-horizontal-hide 375ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-off.flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-leave.flip-direction-VERTICAL {\n  -webkit-animation: container-height-hide 375ms forwards;\n          animation: container-height-hide 375ms forwards;\n  -webkit-animation-delay: 375ms;\n          animation-delay: 375ms;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-off.flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-MS750.animation-show-leave.flip-direction-VERTICAL > div {\n  -webkit-animation: content-vertical-hide 375ms forwards;\n          animation: content-vertical-hide 375ms forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-enter.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-show 0.5s forwards;\n          animation: container-width-show 0.5s forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-on:not(.animation-show-leave).flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-enter.flip-direction-HORIZONTAL > div {\n  opacity: 0;\n  -webkit-animation: content-horizontal-show 0.5s forwards;\n          animation: content-horizontal-show 0.5s forwards;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-enter.flip-direction-VERTICAL {\n  -webkit-animation: container-height-show 0.5s forwards;\n          animation: container-height-show 0.5s forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-on:not(.animation-show-leave).flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-enter.flip-direction-VERTICAL > div {\n  opacity: 0;\n  -webkit-animation: content-vertical-show 0.5s forwards;\n          animation: content-vertical-show 0.5s forwards;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-off.flip-direction-HORIZONTAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-leave.flip-direction-HORIZONTAL {\n  -webkit-animation: container-width-hide 0.5s forwards;\n          animation: container-width-hide 0.5s forwards;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-off.flip-direction-HORIZONTAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-leave.flip-direction-HORIZONTAL > div {\n  -webkit-animation: content-horizontal-hide 0.5s forwards;\n          animation: content-horizontal-hide 0.5s forwards;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-off.flip-direction-VERTICAL,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-leave.flip-direction-VERTICAL {\n  -webkit-animation: container-height-hide 0.5s forwards;\n          animation: container-height-hide 0.5s forwards;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-off.flip-direction-VERTICAL > div,\n.dyna-animation-3d-flip.dyna-animation-3d-flip--duration-S1.animation-show-leave.flip-direction-VERTICAL > div {\n  -webkit-animation: content-vertical-hide 0.5s forwards;\n          animation: content-vertical-hide 0.5s forwards;\n}\n@-webkit-keyframes content-horizontal-show {\n  from {\n    -webkit-transform: rotateY(270deg);\n            transform: rotateY(270deg);\n  }\n  0.001% {\n    opacity: 1;\n    -webkit-transform: rotateY(270deg);\n            transform: rotateY(270deg);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n  }\n}\n@keyframes content-horizontal-show {\n  from {\n    -webkit-transform: rotateY(270deg);\n            transform: rotateY(270deg);\n  }\n  0.001% {\n    opacity: 1;\n    -webkit-transform: rotateY(270deg);\n            transform: rotateY(270deg);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n  }\n}\n@-webkit-keyframes content-horizontal-hide {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n  99.999% {\n    -webkit-transform: rotateY(90deg);\n            transform: rotateY(90deg);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    overflow: hidden;\n  }\n}\n@keyframes content-horizontal-hide {\n  0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n  99.999% {\n    -webkit-transform: rotateY(90deg);\n            transform: rotateY(90deg);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    overflow: hidden;\n  }\n}\n@-webkit-keyframes content-vertical-show {\n  from {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg);\n  }\n  0.001% {\n    opacity: 1;\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n}\n@keyframes content-vertical-show {\n  from {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg);\n  }\n  0.001% {\n    opacity: 1;\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n}\n@-webkit-keyframes content-vertical-hide {\n  0% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n  99.999% {\n    -webkit-transform: rotateX(-90deg);\n            transform: rotateX(-90deg);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes content-vertical-hide {\n  0% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n  99.999% {\n    -webkit-transform: rotateX(-90deg);\n            transform: rotateX(-90deg);\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);
});