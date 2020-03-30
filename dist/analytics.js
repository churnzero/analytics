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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@churnzero/clientlibs/dist/main/enums.js":
/*!***************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/enums.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventTypes;
(function (EventTypes) {
    EventTypes[EventTypes["Mapped"] = 1] = "Mapped";
    EventTypes[EventTypes["Unmapped"] = 2] = "Unmapped";
})(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
var LocationTypes;
(function (LocationTypes) {
    LocationTypes[LocationTypes["Site"] = 1] = "Site";
    LocationTypes[LocationTypes["Page"] = 2] = "Page";
})(LocationTypes = exports.LocationTypes || (exports.LocationTypes = {}));
var SelectorTypes;
(function (SelectorTypes) {
    SelectorTypes[SelectorTypes["Suggested"] = 1] = "Suggested";
    SelectorTypes[SelectorTypes["Custom"] = 2] = "Custom";
})(SelectorTypes = exports.SelectorTypes || (exports.SelectorTypes = {}));
var TransportCodes;
(function (TransportCodes) {
    TransportCodes[TransportCodes["PubSubMirror"] = 1] = "PubSubMirror";
    TransportCodes[TransportCodes["FrameComm"] = 2] = "FrameComm";
    TransportCodes[TransportCodes["WalkthroughClickAudit"] = 3] = "WalkthroughClickAudit";
})(TransportCodes = exports.TransportCodes || (exports.TransportCodes = {}));
var ChurnZeroAppEvents;
(function (ChurnZeroAppEvents) {
    ChurnZeroAppEvents[ChurnZeroAppEvents["DIGEST"] = 1] = "DIGEST";
    ChurnZeroAppEvents[ChurnZeroAppEvents["HALT"] = 2] = "HALT";
    ChurnZeroAppEvents[ChurnZeroAppEvents["START"] = 3] = "START";
    ChurnZeroAppEvents[ChurnZeroAppEvents["PanelReady"] = 4] = "PanelReady";
    ChurnZeroAppEvents[ChurnZeroAppEvents["PanelShow"] = 5] = "PanelShow";
    ChurnZeroAppEvents[ChurnZeroAppEvents["PanelHide"] = 6] = "PanelHide";
    ChurnZeroAppEvents[ChurnZeroAppEvents["ChangePollInterval"] = 7] = "ChangePollInterval";
    ChurnZeroAppEvents[ChurnZeroAppEvents["AnnouncementClosed"] = 8] = "AnnouncementClosed";
    ChurnZeroAppEvents[ChurnZeroAppEvents["WalkthroughStart"] = 9] = "WalkthroughStart";
    ChurnZeroAppEvents[ChurnZeroAppEvents["SubframeRegistered"] = 10] = "SubframeRegistered";
})(ChurnZeroAppEvents = exports.ChurnZeroAppEvents || (exports.ChurnZeroAppEvents = {}));
var FrameCommCodes;
(function (FrameCommCodes) {
    FrameCommCodes[FrameCommCodes["SubframeBoot"] = 1001] = "SubframeBoot";
    FrameCommCodes[FrameCommCodes["SubframeBootResponse"] = 1002] = "SubframeBootResponse";
    FrameCommCodes[FrameCommCodes["SubFramePassback"] = 1003] = "SubFramePassback";
    FrameCommCodes[FrameCommCodes["MasterFrameComRePublish"] = 1004] = "MasterFrameComRePublish";
    FrameCommCodes[FrameCommCodes["MasterFramePassdown"] = 1005] = "MasterFramePassdown";
})(FrameCommCodes = exports.FrameCommCodes || (exports.FrameCommCodes = {}));
var DevlessEvents;
(function (DevlessEvents) {
    DevlessEvents[DevlessEvents["DevlessInit"] = 2001] = "DevlessInit";
    DevlessEvents[DevlessEvents["DevlessConnectionInfo"] = 2002] = "DevlessConnectionInfo";
    DevlessEvents[DevlessEvents["DevlessShow"] = 2003] = "DevlessShow";
    DevlessEvents[DevlessEvents["DevlessHide"] = 2004] = "DevlessHide";
    DevlessEvents[DevlessEvents["DevlessResize"] = 2005] = "DevlessResize";
    DevlessEvents[DevlessEvents["DevlessIframeResized"] = 2006] = "DevlessIframeResized";
    DevlessEvents[DevlessEvents["DevlessElementExistsCheck"] = 2007] = "DevlessElementExistsCheck";
    DevlessEvents[DevlessEvents["DevlessElementExistsCheckResponse"] = 2008] = "DevlessElementExistsCheckResponse";
    DevlessEvents[DevlessEvents["DevlessCurrentHref"] = 2009] = "DevlessCurrentHref";
    DevlessEvents[DevlessEvents["DevlessCurrentHrefResponse"] = 2010] = "DevlessCurrentHrefResponse";
    DevlessEvents[DevlessEvents["DevlessPush"] = 2011] = "DevlessPush";
    DevlessEvents[DevlessEvents["ElementFinderStart"] = 2012] = "ElementFinderStart";
    DevlessEvents[DevlessEvents["ElementFinderStop"] = 2013] = "ElementFinderStop";
    DevlessEvents[DevlessEvents["ElementFinderElementSelected"] = 2014] = "ElementFinderElementSelected";
    DevlessEvents[DevlessEvents["ElementFinderHoverUpdate"] = 2015] = "ElementFinderHoverUpdate";
    DevlessEvents[DevlessEvents["ElementFinderHighlightElement"] = 2016] = "ElementFinderHighlightElement";
    DevlessEvents[DevlessEvents["ElementFinderElementHighlighted"] = 2017] = "ElementFinderElementHighlighted";
    DevlessEvents[DevlessEvents["EditorSet"] = 2018] = "EditorSet";
    DevlessEvents[DevlessEvents["EditorChanged"] = 2019] = "EditorChanged";
})(DevlessEvents = exports.DevlessEvents || (exports.DevlessEvents = {}));
var SocketMessageTypes;
(function (SocketMessageTypes) {
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_DISCONNECT"] = -2] = "SOCKETMESSAGETYPE_DISCONNECT";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_INITIAL_CONNECTION"] = -1] = "SOCKETMESSAGETYPE_INITIAL_CONNECTION";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_ANNOUNCEMENT"] = 1] = "SOCKETMESSAGETYPE_ANNOUNCEMENT";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_USER_ACCOUNT_ALERT"] = 5] = "SOCKETMESSAGETYPE_USER_ACCOUNT_ALERT";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_TRACK_EVENT"] = 6] = "SOCKETMESSAGETYPE_TRACK_EVENT";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_SET_ATTRIBUTE"] = 7] = "SOCKETMESSAGETYPE_SET_ATTRIBUTE";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_IS_ACTIVE"] = 8] = "SOCKETMESSAGETYPE_IS_ACTIVE";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_MESSAGE_READ"] = 9] = "SOCKETMESSAGETYPE_MESSAGE_READ";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_MESSAGE_CLICKED"] = 10] = "SOCKETMESSAGETYPE_MESSAGE_CLICKED";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_CHECK_ONLINE"] = 11] = "SOCKETMESSAGETYPE_CHECK_ONLINE";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_CHECK_ONLINE_RESULT"] = 12] = "SOCKETMESSAGETYPE_CHECK_ONLINE_RESULT";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_UPDATE_APP_VERSION"] = 13] = "SOCKETMESSAGETYPE_UPDATE_APP_VERSION";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_EXPIRE_MESSAGE"] = 14] = "SOCKETMESSAGETYPE_EXPIRE_MESSAGE";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_CHECK_EVENT_MAP_CONFIG_VERSION"] = 15] = "SOCKETMESSAGETYPE_CHECK_EVENT_MAP_CONFIG_VERSION";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_REFRESH_EVENT_MAP_CONFIG"] = 16] = "SOCKETMESSAGETYPE_REFRESH_EVENT_MAP_CONFIG";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_TIME_IN_APP"] = 17] = "SOCKETMESSAGETYPE_TIME_IN_APP";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_CheckWalkthroughConfigVersion"] = 18] = "SOCKETMESSAGETYPE_CheckWalkthroughConfigVersion";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_RefreshWalkthroughConfig"] = 19] = "SOCKETMESSAGETYPE_RefreshWalkthroughConfig";
    SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_WalkthroughAction"] = 20] = "SOCKETMESSAGETYPE_WalkthroughAction";
})(SocketMessageTypes = exports.SocketMessageTypes || (exports.SocketMessageTypes = {}));
var AnnouncementPosition;
(function (AnnouncementPosition) {
    AnnouncementPosition[AnnouncementPosition["PanelOnly"] = 1] = "PanelOnly";
    AnnouncementPosition[AnnouncementPosition["PopUp"] = 2] = "PopUp";
    AnnouncementPosition[AnnouncementPosition["SlideBottomCenter"] = 3] = "SlideBottomCenter";
    AnnouncementPosition[AnnouncementPosition["SlideLeftBottom"] = 4] = "SlideLeftBottom";
    AnnouncementPosition[AnnouncementPosition["SlideTopLeft"] = 5] = "SlideTopLeft";
    AnnouncementPosition[AnnouncementPosition["SlideTopCenter"] = 6] = "SlideTopCenter";
    AnnouncementPosition[AnnouncementPosition["SlideTopRight"] = 7] = "SlideTopRight";
    AnnouncementPosition[AnnouncementPosition["SlideBottomLeft"] = 8] = "SlideBottomLeft";
    AnnouncementPosition[AnnouncementPosition["SlideBottomRight"] = 9] = "SlideBottomRight";
    AnnouncementPosition[AnnouncementPosition["SlideLeftTop"] = 10] = "SlideLeftTop";
    AnnouncementPosition[AnnouncementPosition["SlideLeftCenter"] = 11] = "SlideLeftCenter";
    AnnouncementPosition[AnnouncementPosition["SlideRightTop"] = 12] = "SlideRightTop";
    AnnouncementPosition[AnnouncementPosition["SlideRightCenter"] = 13] = "SlideRightCenter";
    AnnouncementPosition[AnnouncementPosition["SlideRightBottom"] = 14] = "SlideRightBottom";
    AnnouncementPosition[AnnouncementPosition["Tooltip"] = 15] = "Tooltip";
})(AnnouncementPosition = exports.AnnouncementPosition || (exports.AnnouncementPosition = {}));
var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition[TooltipPosition["Auto"] = 1] = "Auto";
    TooltipPosition[TooltipPosition["Top"] = 2] = "Top";
    TooltipPosition[TooltipPosition["Left"] = 3] = "Left";
    TooltipPosition[TooltipPosition["Bottom"] = 4] = "Bottom";
    TooltipPosition[TooltipPosition["Right"] = 5] = "Right";
})(TooltipPosition = exports.TooltipPosition || (exports.TooltipPosition = {}));
var WalkthroughActionType;
(function (WalkthroughActionType) {
    WalkthroughActionType[WalkthroughActionType["Unknown"] = 0] = "Unknown";
    WalkthroughActionType[WalkthroughActionType["WalkthroughStarted"] = 1] = "WalkthroughStarted";
    WalkthroughActionType[WalkthroughActionType["StepStarted"] = 2] = "StepStarted";
    WalkthroughActionType[WalkthroughActionType["StepClicked"] = 3] = "StepClicked";
    WalkthroughActionType[WalkthroughActionType["StepCompleted"] = 4] = "StepCompleted";
    WalkthroughActionType[WalkthroughActionType["StepAbandonded"] = 5] = "StepAbandonded";
    WalkthroughActionType[WalkthroughActionType["WalkthroughCompleted"] = 6] = "WalkthroughCompleted";
    WalkthroughActionType[WalkthroughActionType["WalkthroughAbandoned"] = 7] = "WalkthroughAbandoned";
    WalkthroughActionType[WalkthroughActionType["WalkthroughResumed"] = 8] = "WalkthroughResumed";
})(WalkthroughActionType = exports.WalkthroughActionType || (exports.WalkthroughActionType = {}));
var WalkthroughTriggerType;
(function (WalkthroughTriggerType) {
    WalkthroughTriggerType[WalkthroughTriggerType["Click"] = 1] = "Click";
    WalkthroughTriggerType[WalkthroughTriggerType["PageVisit"] = 2] = "PageVisit";
    WalkthroughTriggerType[WalkthroughTriggerType["Event"] = 3] = "Event";
})(WalkthroughTriggerType = exports.WalkthroughTriggerType || (exports.WalkthroughTriggerType = {}));
var ContainerType;
(function (ContainerType) {
    ContainerType[ContainerType["Body"] = 1] = "Body";
    ContainerType[ContainerType["Parent"] = 2] = "Parent";
})(ContainerType = exports.ContainerType || (exports.ContainerType = {}));
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./enums */ "./node_modules/@churnzero/clientlibs/dist/main/enums.js"));
__export(__webpack_require__(/*! ./models/eventmap/eventmap */ "./node_modules/@churnzero/clientlibs/dist/main/models/eventmap/eventmap.js"));
__export(__webpack_require__(/*! ./models/page-tag/location-options */ "./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/location-options.js"));
__export(__webpack_require__(/*! ./models/page-tag/location-part */ "./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/location-part.js"));
__export(__webpack_require__(/*! ./models/page-tag/page-tag */ "./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/page-tag.js"));
__export(__webpack_require__(/*! ./models/segment/segment */ "./node_modules/@churnzero/clientlibs/dist/main/models/segment/segment.js"));
__export(__webpack_require__(/*! ./models/walkthrough/walkthrough-step-config */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step-config.js"));
__export(__webpack_require__(/*! ./models/walkthrough/walkthrough-trigger-config */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-trigger-config.js"));
__export(__webpack_require__(/*! ./models/walkthrough/walkthrough-style-config */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-style-config.js"));
__export(__webpack_require__(/*! ./models/walkthrough/walkthrough-step */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step.js"));
__export(__webpack_require__(/*! ./models/walkthrough/walkthrough */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough.js"));
__export(__webpack_require__(/*! ./utils/ajax-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/ajax-utils.js"));
__export(__webpack_require__(/*! ./utils/core-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/core-utils.js"));
__export(__webpack_require__(/*! ./utils/data-type-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/data-type-utils.js"));
__export(__webpack_require__(/*! ./utils/iframe-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/iframe-utils.js"));
__export(__webpack_require__(/*! ./utils/model-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js"));
__export(__webpack_require__(/*! ./utils/style-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/style-utils.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/eventmap/eventmap.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/eventmap/eventmap.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ../../enums */ "./node_modules/@churnzero/clientlibs/dist/main/enums.js");
var model_utils_1 = __webpack_require__(/*! ../../utils/model-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js");
var EventMap = (function () {
    function EventMap(tenantId) {
        this.disabled = false;
        this.locationTypeId = enums_1.LocationTypes.Site;
        this.location = '*';
        this.selectorTypeId = enums_1.SelectorTypes.Suggested;
        this.descriptionSelectorTypeId = enums_1.SelectorTypes.Suggested;
        this.quantitySelectorTypeId = enums_1.SelectorTypes.Suggested;
        this.tenantId = tenantId;
        this.hidden = false;
        this.excludeChildren = false;
        this.createdDate = '';
        this.updatedDate = '';
    }
    EventMap.fromJSONString = function (input) {
        return EventMap.fromObject(JSON.parse(input));
    };
    EventMap.fromObject = function (input) {
        return model_utils_1.ModelUtils.create(new EventMap(), input);
    };
    return EventMap;
}());
exports.EventMap = EventMap;
//# sourceMappingURL=eventmap.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/location-options.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/location-options.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocationOptions = (function () {
    function LocationOptions(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.pathParts, pathParts = _c === void 0 ? [] : _c, _d = _b.hashParts, hashParts = _d === void 0 ? [] : _d, _e = _b.searchParts, searchParts = _e === void 0 ? [] : _e, _f = _b.allowChildStates, allowChildStates = _f === void 0 ? true : _f, _g = _b.allowChildPaths, allowChildPaths = _g === void 0 ? true : _g, _h = _b.excludeSearchParts, excludeSearchParts = _h === void 0 ? true : _h;
        this.pathParts = pathParts;
        this.hashParts = hashParts;
        this.searchParts = searchParts;
        this.allowChildStates = allowChildStates;
        if (allowChildStates !== false) {
            this.allowChildStates = true;
        }
        this.allowChildPaths = allowChildPaths;
        if (allowChildPaths !== false) {
            this.allowChildPaths = true;
        }
        this.excludeSearchParts = excludeSearchParts;
        if (excludeSearchParts !== false) {
            this.excludeSearchParts = true;
        }
    }
    LocationOptions.fromJson = function (locationOptionsJson, JsonRef) {
        if (JsonRef === void 0) { JsonRef = JSON; }
        var json;
        try {
            json = JsonRef.parse(locationOptionsJson);
        }
        catch (_a) {
            json = undefined;
        }
        return new LocationOptions(json);
    };
    return LocationOptions;
}());
exports.LocationOptions = LocationOptions;
//# sourceMappingURL=location-options.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/location-part.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/location-part.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocationPart = (function () {
    function LocationPart() {
    }
    return LocationPart;
}());
exports.LocationPart = LocationPart;
//# sourceMappingURL=location-part.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/page-tag.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/page-tag.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_utils_1 = __webpack_require__(/*! ../../utils/model-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js");
var PageTag = (function () {
    function PageTag(tenantId) {
        this.tenantId = tenantId;
        this.pageName = '';
        this.disabled = false;
        this.shouldFireEvent = true;
        this.eventName = '';
        this.shouldSetModule = false;
        this.moduleName = '';
        this.shouldSetExitModule = true;
        this.exitModuleName = 'Default';
    }
    PageTag.FromObject = function (item) {
        var newTag = model_utils_1.ModelUtils.create(new PageTag(), item);
        if (item.shouldSetExitModule) {
            newTag.shouldSetExitModule = item.shouldSetExitModule;
            newTag.exitModuleName = item.exitModuleName;
        }
        return newTag;
    };
    return PageTag;
}());
exports.PageTag = PageTag;
//# sourceMappingURL=page-tag.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/segment/segment.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/segment/segment.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_utils_1 = __webpack_require__(/*! ../../utils/model-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js");
var Segment = (function () {
    function Segment() {
    }
    Segment.fromObject = function (item) {
        return model_utils_1.ModelUtils.create(new Segment(), item);
    };
    return Segment;
}());
exports.Segment = Segment;
//# sourceMappingURL=segment.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step-config.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step-config.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var walkthrough_step_1 = __webpack_require__(/*! ./walkthrough-step */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./node_modules/@churnzero/clientlibs/dist/main/enums.js");
var WalkthroughStepConfig = (function () {
    function WalkthroughStepConfig() {
        this.backgroundColor = '#FFFFFF';
        this.closeColor = '#000000';
        this.borderRadius = 5;
        this.fontFamily = '';
        this.ctaText = 'Got it!';
        this.ctaButtonColor = '#FFFFFF';
        this.ctaButtonBorderColor = '#000000';
        this.ctaBackgroundColor = '#CCCCCC';
        this.ctaTextColor = '#000000';
        this.ctaAlignment = 'center';
    }
    WalkthroughStepConfig.fromJSONString = function (input, stepType) {
        switch (stepType) {
            case walkthrough_step_1.WalkthroughStepType.Slider:
                return SliderStepConfig.fromJSONString(input);
            case walkthrough_step_1.WalkthroughStepType.PopUp:
                return PopUpStepConfig.fromJSONString(input);
            case walkthrough_step_1.WalkthroughStepType.Tooltip:
                return TooltipStepConfig.fromJSONString(input);
            default:
                return new WalkthroughStepConfig();
        }
    };
    WalkthroughStepConfig.fromObject = function (input, stepType) {
        switch (stepType) {
            case walkthrough_step_1.WalkthroughStepType.Slider:
                return SliderStepConfig.fromObject(input);
            case walkthrough_step_1.WalkthroughStepType.PopUp:
                return PopUpStepConfig.fromObject(input);
            case walkthrough_step_1.WalkthroughStepType.Tooltip:
                return TooltipStepConfig.fromObject(input);
            default:
                return new WalkthroughStepConfig();
        }
    };
    return WalkthroughStepConfig;
}());
exports.WalkthroughStepConfig = WalkthroughStepConfig;
var PopUpStepConfig = (function (_super) {
    __extends(PopUpStepConfig, _super);
    function PopUpStepConfig() {
        var _this = _super.call(this) || this;
        _this.width = '340px';
        return _this;
    }
    PopUpStepConfig.fromJSONString = function (input) {
        return PopUpStepConfig.fromObject(JSON.parse(input));
    };
    PopUpStepConfig.fromObject = function (input) {
        var dest = new PopUpStepConfig();
        if (input) {
            Object.keys(input).forEach(function (k) {
                dest[k] = input[k];
            });
        }
        return dest;
    };
    return PopUpStepConfig;
}(WalkthroughStepConfig));
exports.PopUpStepConfig = PopUpStepConfig;
var SliderStepConfig = (function (_super) {
    __extends(SliderStepConfig, _super);
    function SliderStepConfig() {
        var _this = _super.call(this) || this;
        _this.position = enums_1.AnnouncementPosition.SlideTopCenter;
        return _this;
    }
    SliderStepConfig.fromJSONString = function (input) {
        return SliderStepConfig.fromObject(JSON.parse(input));
    };
    SliderStepConfig.fromObject = function (input) {
        var dest = new SliderStepConfig();
        if (input) {
            Object.keys(input).forEach(function (k) {
                dest[k] = input[k];
            });
        }
        return dest;
    };
    return SliderStepConfig;
}(WalkthroughStepConfig));
exports.SliderStepConfig = SliderStepConfig;
var TooltipStepConfig = (function (_super) {
    __extends(TooltipStepConfig, _super);
    function TooltipStepConfig() {
        var _this = _super.call(this) || this;
        _this.position = enums_1.TooltipPosition.Left;
        _this.container = enums_1.ContainerType.Body;
        return _this;
    }
    TooltipStepConfig.fromJSONString = function (input) {
        return TooltipStepConfig.fromObject(JSON.parse(input));
    };
    TooltipStepConfig.fromObject = function (input) {
        var dest = new TooltipStepConfig();
        if (input) {
            Object.keys(input).forEach(function (k) {
                dest[k] = input[k];
            });
        }
        return dest;
    };
    return TooltipStepConfig;
}(WalkthroughStepConfig));
exports.TooltipStepConfig = TooltipStepConfig;
//# sourceMappingURL=walkthrough-step-config.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var walkthrough_step_config_1 = __webpack_require__(/*! ./walkthrough-step-config */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step-config.js");
var data_type_utils_1 = __webpack_require__(/*! ../../utils/data-type-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/data-type-utils.js");
var model_utils_1 = __webpack_require__(/*! ../../utils/model-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js");
var walkthrough_style_config_1 = __webpack_require__(/*! ./walkthrough-style-config */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-style-config.js");
var WalkthroughStepType;
(function (WalkthroughStepType) {
    WalkthroughStepType[WalkthroughStepType["PopUp"] = 1] = "PopUp";
    WalkthroughStepType[WalkthroughStepType["Slider"] = 2] = "Slider";
    WalkthroughStepType[WalkthroughStepType["Tooltip"] = 3] = "Tooltip";
})(WalkthroughStepType = exports.WalkthroughStepType || (exports.WalkthroughStepType = {}));
var WalkthroughStep = (function () {
    function WalkthroughStep() {
        this.__oid = data_type_utils_1.DataTypeUtils.newGuid();
    }
    Object.defineProperty(WalkthroughStep.prototype, "stepType", {
        get: function () {
            return this.stepTypeId;
        },
        set: function (type) {
            this.stepTypeId = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughStep.prototype, "stepConfig", {
        get: function () {
            if (data_type_utils_1.DataTypeUtils.isStringNullOrEmpty(this.stepConfigJson)) {
                return undefined;
            }
            if (!this._stepConfig) {
                this._stepConfig = walkthrough_step_config_1.WalkthroughStepConfig.fromJSONString(this.stepConfigJson, this.stepTypeId);
            }
            return this._stepConfig;
        },
        set: function (newOptions) {
            this._stepConfig = newOptions;
            var tj = (newOptions || {})['toJSON'];
            if (tj) {
                newOptions['toJSON'] = undefined;
            }
            this.stepConfigJson = JSON.stringify(newOptions);
            if (tj) {
                newOptions['toJSON'] = tj;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughStep.prototype, "styleConfig", {
        get: function () {
            if (this._styleConfig instanceof walkthrough_style_config_1.WalkthroughStyleConfig) {
                return this._styleConfig;
            }
            try {
                var parsed = JSON.parse(this.styleConfigJson);
                this._styleConfig = model_utils_1.ModelUtils.create(new walkthrough_style_config_1.WalkthroughStyleConfig(), parsed);
            }
            catch (exc) {
                this._styleConfig = new walkthrough_style_config_1.WalkthroughStyleConfig();
            }
            return this._styleConfig;
        },
        set: function (config) {
            this._styleConfig = config;
            this.styleConfigJson = JSON.stringify(config);
        },
        enumerable: true,
        configurable: true
    });
    WalkthroughStep.fromJSONString = function (input) {
        return WalkthroughStep.fromObject(JSON.parse(input));
    };
    WalkthroughStep.fromObject = function (input) {
        var dest = model_utils_1.ModelUtils.create(new WalkthroughStep(), input);
        dest.stepConfig = walkthrough_step_config_1.WalkthroughStepConfig.fromObject(dest.stepConfig, dest.stepTypeId);
        return dest;
    };
    return WalkthroughStep;
}());
exports.WalkthroughStep = WalkthroughStep;
//# sourceMappingURL=walkthrough-step.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-style-config.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-style-config.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WalkthroughStyleConfig = (function () {
    function WalkthroughStyleConfig() {
    }
    return WalkthroughStyleConfig;
}());
exports.WalkthroughStyleConfig = WalkthroughStyleConfig;
//# sourceMappingURL=walkthrough-style-config.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-trigger-config.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-trigger-config.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var model_utils_1 = __webpack_require__(/*! ../../utils/model-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js");
var WalkthroughTriggerConfig = (function () {
    function WalkthroughTriggerConfig() {
    }
    return WalkthroughTriggerConfig;
}());
exports.WalkthroughTriggerConfig = WalkthroughTriggerConfig;
var WalkthroughClickTriggerConfig = (function (_super) {
    __extends(WalkthroughClickTriggerConfig, _super);
    function WalkthroughClickTriggerConfig() {
        var _this = _super.call(this) || this;
        _this.excludeChildren = false;
        return _this;
    }
    WalkthroughClickTriggerConfig.fromJSONString = function (input) {
        return WalkthroughClickTriggerConfig.fromObject(JSON.parse(input));
    };
    WalkthroughClickTriggerConfig.fromObject = function (input) {
        return model_utils_1.ModelUtils.create(new WalkthroughClickTriggerConfig(), input);
    };
    return WalkthroughClickTriggerConfig;
}(WalkthroughTriggerConfig));
exports.WalkthroughClickTriggerConfig = WalkthroughClickTriggerConfig;
var WalkthroughPageVisitTriggerConfig = (function (_super) {
    __extends(WalkthroughPageVisitTriggerConfig, _super);
    function WalkthroughPageVisitTriggerConfig() {
        return _super.call(this) || this;
    }
    WalkthroughPageVisitTriggerConfig.fromJSONString = function (input) {
        return WalkthroughPageVisitTriggerConfig.fromObject(JSON.parse(input));
    };
    WalkthroughPageVisitTriggerConfig.fromObject = function (input) {
        return model_utils_1.ModelUtils.create(new WalkthroughPageVisitTriggerConfig(), input);
    };
    return WalkthroughPageVisitTriggerConfig;
}(WalkthroughTriggerConfig));
exports.WalkthroughPageVisitTriggerConfig = WalkthroughPageVisitTriggerConfig;
//# sourceMappingURL=walkthrough-trigger-config.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var walkthrough_step_1 = __webpack_require__(/*! ./walkthrough-step */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-step.js");
var walkthrough_style_config_1 = __webpack_require__(/*! ./walkthrough-style-config */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-style-config.js");
var walkthrough_trigger_config_1 = __webpack_require__(/*! ./walkthrough-trigger-config */ "./node_modules/@churnzero/clientlibs/dist/main/models/walkthrough/walkthrough-trigger-config.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./node_modules/@churnzero/clientlibs/dist/main/enums.js");
var data_type_utils_1 = __webpack_require__(/*! ../../utils/data-type-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/data-type-utils.js");
var model_utils_1 = __webpack_require__(/*! ../../utils/model-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js");
var page_tag_1 = __webpack_require__(/*! ../page-tag/page-tag */ "./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/page-tag.js");
var segment_1 = __webpack_require__(/*! ../segment/segment */ "./node_modules/@churnzero/clientlibs/dist/main/models/segment/segment.js");
var Walkthrough = (function () {
    function Walkthrough() {
        this.__oid = data_type_utils_1.DataTypeUtils.newGuid();
        this.steps = [];
        this.segments = [];
        this.recurrence = true;
        this.disabled = true;
    }
    Object.defineProperty(Walkthrough.prototype, "triggerType", {
        get: function () {
            return this.triggerTypeId;
        },
        set: function (type) {
            this.triggerTypeId = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Walkthrough.prototype, "triggerConfig", {
        get: function () {
            if (!this._triggerConfig) {
                switch (this.triggerTypeId) {
                    case enums_1.WalkthroughTriggerType.PageVisit:
                        this._triggerConfig = walkthrough_trigger_config_1.WalkthroughPageVisitTriggerConfig.fromJSONString(this.triggerConfigJson);
                        break;
                    case enums_1.WalkthroughTriggerType.Click:
                        this._triggerConfig = walkthrough_trigger_config_1.WalkthroughClickTriggerConfig.fromJSONString(this.triggerConfigJson);
                        break;
                    default:
                        break;
                }
            }
            return this._triggerConfig;
        },
        set: function (newOptions) {
            this._triggerConfig = newOptions;
            var tj = newOptions['toJSON'];
            if (tj) {
                newOptions['toJSON'] = undefined;
            }
            this.triggerConfigJson = JSON.stringify(newOptions);
            if (tj) {
                newOptions['toJSON'] = tj;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Walkthrough.prototype, "styleConfig", {
        get: function () {
            if (this._styleConfig instanceof walkthrough_style_config_1.WalkthroughStyleConfig) {
                return this._styleConfig;
            }
            try {
                var parsed = JSON.parse(this.styleConfigJson);
                this._styleConfig = model_utils_1.ModelUtils.create(new walkthrough_style_config_1.WalkthroughStyleConfig(), parsed);
            }
            catch (exc) {
                this._styleConfig = new walkthrough_style_config_1.WalkthroughStyleConfig();
            }
            return this._styleConfig;
        },
        set: function (config) {
            this._styleConfig = config;
            this.styleConfigJson = JSON.stringify(config);
        },
        enumerable: true,
        configurable: true
    });
    Walkthrough.fromJSONString = function (input) {
        return Walkthrough.fromObject(JSON.parse(input));
    };
    Walkthrough.fromObject = function (input) {
        var dest = model_utils_1.ModelUtils.create(new Walkthrough(), input);
        if (dest.pageTag) {
            dest.pageTag = page_tag_1.PageTag.FromObject(dest.pageTag);
        }
        for (var i = 0; i < dest.steps.length; i++) {
            if (dest.steps[i]) {
                dest.steps[i] = walkthrough_step_1.WalkthroughStep.fromObject(dest.steps[i]);
            }
        }
        var segmentsArray = [];
        for (var i = 0; i < dest.segments.length; i++) {
            segmentsArray.push(segment_1.Segment.fromObject(dest.segments[i]));
        }
        dest.segments = segmentsArray;
        return dest;
    };
    Walkthrough.prototype.toJSON = function () {
        var output = {};
        for (var prop in this) {
            if (Walkthrough.toJSONIgnoreProps.indexOf(prop) !== -1) {
                continue;
            }
            else {
                output[prop] = this[prop];
            }
        }
        return output;
    };
    Walkthrough.toJSONIgnoreProps = ['__oid', '_triggerConfig', 'triggerConfig', '_styleConfig', 'styleConfig'];
    return Walkthrough;
}());
exports.Walkthrough = Walkthrough;
//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/utils/ajax-utils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/utils/ajax-utils.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var es6_promise_1 = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
var RequestOptions = (function () {
    function RequestOptions(options) {
        this.type = 'GET';
        this.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
        this.withCredentials = false;
        for (var p in this) {
            if (this.hasOwnProperty(p) && options[p] !== undefined) {
                this[p] = options[p];
            }
        }
    }
    return RequestOptions;
}());
exports.RequestOptions = RequestOptions;
var AjaxUtils;
(function (AjaxUtils) {
    function get(url, options) {
        var requestOptions = new RequestOptions(options);
        requestOptions.type = 'GET';
        requestOptions.url = url;
        return makeRequest(requestOptions);
    }
    AjaxUtils.get = get;
    function post(url, data, options) {
        var requestOptions = new RequestOptions(options);
        requestOptions.type = 'POST';
        requestOptions.url = url;
        requestOptions.data = data;
        return makeRequest(requestOptions);
    }
    AjaxUtils.post = post;
    function makeRequest(options) {
        return new es6_promise_1.Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open(options.type, options.url, true);
            if (options.withCredentials === true) {
                req.withCredentials = true;
            }
            req.setRequestHeader('Content-Type', options.contentType);
            req.onload = function () {
                if (req.status === 200) {
                    resolve(req.response);
                }
                else {
                    var errorObj = Error(req.statusText);
                    errorObj.status = req.status;
                    reject(errorObj);
                }
            };
            req.onerror = function () {
                reject(Error('Network Error'));
            };
            if (options.data) {
                req.send(options.data);
            }
            else {
                req.send();
            }
        });
    }
    AjaxUtils.makeRequest = makeRequest;
})(AjaxUtils = exports.AjaxUtils || (exports.AjaxUtils = {}));
//# sourceMappingURL=ajax-utils.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/utils/core-utils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/utils/core-utils.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var location_options_1 = __webpack_require__(/*! ../models/page-tag/location-options */ "./node_modules/@churnzero/clientlibs/dist/main/models/page-tag/location-options.js");
var style_utils_1 = __webpack_require__(/*! ./style-utils */ "./node_modules/@churnzero/clientlibs/dist/main/utils/style-utils.js");
var enums_1 = __webpack_require__(/*! ../enums */ "./node_modules/@churnzero/clientlibs/dist/main/enums.js");
var CoreUtils;
(function (CoreUtils) {
    function areCookiesEnabled() {
        try {
            document.cookie = 'czcookietest=1';
            var cookiesEnabled = document.cookie.indexOf('czcookietest=') !== -1;
            document.cookie = 'czcookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
            return cookiesEnabled;
        }
        catch (e) {
            return false;
        }
    }
    CoreUtils.areCookiesEnabled = areCookiesEnabled;
    function createCookie(name, value, days, now) {
        var expires = '';
        if (days) {
            var date = now;
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + expires + '; path=/';
    }
    CoreUtils.createCookie = createCookie;
    function readCookie(name) {
        var nameEQ = encodeURIComponent(name) + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }
    CoreUtils.readCookie = readCookie;
    function eraseCookie(name, now) {
        createCookie(name, '', -1, now);
    }
    CoreUtils.eraseCookie = eraseCookie;
    function loadScript(url, callbackfn) {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);
        script.onload = function () {
            return callbackfn();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    CoreUtils.loadScript = loadScript;
    function refreshScript(src, options) {
        options = options || {};
        var scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        if (options.onError) {
            scriptElement.onerror = function () {
                return options.onError();
            };
        }
        if (options.onLoad) {
            scriptElement.onload = function () {
                return options.onLoad();
            };
        }
        scriptElement.src = src + (options.includeTimeStamp ? '?' + options.timeStamp : '');
        scriptElement.async = true;
        document.getElementsByTagName('head')[0].appendChild(scriptElement);
    }
    CoreUtils.refreshScript = refreshScript;
    function createElementFromHTML(document, htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }
    CoreUtils.createElementFromHTML = createElementFromHTML;
    var FeatureDetection;
    (function (FeatureDetection) {
        function inIframe() {
            try {
                return window !== window.parent;
            }
            catch (e) {
                return true;
            }
        }
        FeatureDetection.inIframe = inIframe;
        function isLegacyIE() {
            return !navigator || !navigator.userAgent || navigator.userAgent.indexOf('MSIE') >= 0;
        }
        FeatureDetection.isLegacyIE = isLegacyIE;
        function isXHTML() {
            return document && document.doctype && document.doctype.systemId && (document.doctype.systemId || '').toLowerCase().indexOf('xhtml') > -1;
        }
        FeatureDetection.isXHTML = isXHTML;
        var BrowserInfo = (function () {
            function BrowserInfo() {
            }
            return BrowserInfo;
        }());
        FeatureDetection.BrowserInfo = BrowserInfo;
        function getBrowserInfo() {
            var browserInfo = new BrowserInfo();
            try {
                var unknown = '-';
                var screenSize = '';
                if (screen.width) {
                    var width = (screen.width) ? screen.width : '';
                    var height = (screen.height) ? screen.height : '';
                    screenSize += '' + width + ' x ' + height;
                }
                var nVer = navigator.appVersion;
                var nAgt = navigator.userAgent;
                var browser = navigator.appName;
                var version = '' + parseFloat(navigator.appVersion);
                var majorVersion = parseInt(navigator.appVersion, 10);
                var nameOffset = void 0, verOffset = void 0, ix = void 0;
                if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
                    browser = 'Opera';
                    version = nAgt.substring(verOffset + 6);
                    if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                        version = nAgt.substring(verOffset + 8);
                    }
                }
                if ((verOffset = nAgt.indexOf('OPR')) !== -1) {
                    browser = 'Opera';
                    version = nAgt.substring(verOffset + 4);
                }
                else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
                    browser = 'Microsoft Edge';
                    version = nAgt.substring(verOffset + 5);
                }
                else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
                    browser = 'Microsoft Internet Explorer';
                    version = nAgt.substring(verOffset + 5);
                }
                else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
                    browser = 'Chrome';
                    version = nAgt.substring(verOffset + 7);
                }
                else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
                    browser = 'Safari';
                    version = nAgt.substring(verOffset + 7);
                    if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                        version = nAgt.substring(verOffset + 8);
                    }
                }
                else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
                    browser = 'Firefox';
                    version = nAgt.substring(verOffset + 8);
                }
                else if (nAgt.indexOf('Trident/') !== -1) {
                    browser = 'Microsoft Internet Explorer';
                    version = nAgt.substring(nAgt.indexOf('rv:') + 3);
                }
                else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                    browser = nAgt.substring(nameOffset, verOffset);
                    version = nAgt.substring(verOffset + 1);
                    if (browser.toLowerCase() === browser.toUpperCase()) {
                        browser = navigator.appName;
                    }
                }
                if ((ix = version.indexOf(';')) !== -1)
                    version = version.substring(0, ix);
                if ((ix = version.indexOf(' ')) !== -1)
                    version = version.substring(0, ix);
                if ((ix = version.indexOf(')')) !== -1)
                    version = version.substring(0, ix);
                majorVersion = parseInt('' + version, 10);
                if (isNaN(majorVersion)) {
                    version = '' + parseFloat(navigator.appVersion);
                    majorVersion = parseInt(navigator.appVersion, 10);
                }
                var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
                var cookieEnabled = (navigator.cookieEnabled) ? true : false;
                if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
                    document.cookie = 'testcookie';
                    cookieEnabled = (document.cookie.indexOf('testcookie') !== -1) ? true : false;
                }
                var os = unknown;
                var clientStrings = [
                    { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
                    { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                    { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                    { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                    { s: 'Windows Vista', r: /Windows NT 6.0/ },
                    { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                    { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                    { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                    { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                    { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                    { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                    { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                    { s: 'Windows CE', r: /Windows CE/ },
                    { s: 'Windows 3.11', r: /Win16/ },
                    { s: 'Android', r: /Android/ },
                    { s: 'Open BSD', r: /OpenBSD/ },
                    { s: 'Sun OS', r: /SunOS/ },
                    { s: 'Linux', r: /(Linux|X11)/ },
                    { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                    { s: 'Mac OS X', r: /Mac OS X/ },
                    { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                    { s: 'QNX', r: /QNX/ },
                    { s: 'UNIX', r: /UNIX/ },
                    { s: 'BeOS', r: /BeOS/ },
                    { s: 'OS/2', r: /OS\/2/ },
                    {
                        s: 'Search Bot',
                        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                    }
                ];
                for (var id in clientStrings) {
                    var cs = clientStrings[id];
                    if (cs.r.test(nAgt)) {
                        os = cs.s;
                        break;
                    }
                }
                var osVersion = unknown, osVersionArray = void 0;
                if (/Windows/.test(os)) {
                    osVersionArray = /Windows (.*)/.exec(os);
                    osVersion = osVersionArray[1];
                    os = 'Windows';
                }
                switch (os) {
                    case 'Mac OS X':
                        osVersionArray = /Mac OS X (10[._\d]+)/.exec(nAgt);
                        osVersion = osVersionArray[1];
                        break;
                    case 'Android':
                        osVersionArray = /Android ([._\d]+)/.exec(nAgt);
                        osVersion = osVersionArray[1];
                        break;
                    case 'iOS':
                        osVersionArray = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                        osVersion = osVersionArray[1] + '.' + osVersionArray[2] + '.' + (osVersionArray[3] | 0);
                        break;
                }
                browserInfo = {
                    screen: screenSize,
                    browser: browser,
                    browserVersion: version,
                    browserMajorVersion: majorVersion,
                    mobile: mobile,
                    os: os,
                    osVersion: osVersion,
                    cookies: cookieEnabled
                };
            }
            catch (e) {
            }
            return browserInfo;
        }
        FeatureDetection.getBrowserInfo = getBrowserInfo;
    })(FeatureDetection = CoreUtils.FeatureDetection || (CoreUtils.FeatureDetection = {}));
    function convertFormSerializedArrayToObject(array) {
        var o = {};
        array.forEach(function (v) {
            o[v.name] = v.value || '';
        });
        return o;
    }
    CoreUtils.convertFormSerializedArrayToObject = convertFormSerializedArrayToObject;
    function expandFlattenedObject(flatObject) {
        var createObject = function (model, name, value) {
            var nameParts = name.split('.'), currentObject = model;
            for (var i = 0; i < nameParts.length; i++) {
                var part = nameParts[i];
                if (i === nameParts.length - 1) {
                    currentObject[part] = value;
                    break;
                }
                if (typeof currentObject[part] === 'undefined') {
                    currentObject[part] = {};
                }
                currentObject = currentObject[part];
            }
        };
        var model = {};
        for (var key in flatObject) {
            createObject(model, key, flatObject[key] || '');
        }
        return model;
    }
    CoreUtils.expandFlattenedObject = expandFlattenedObject;
    function extend(out) {
        var extendsArguments = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            extendsArguments[_i - 1] = arguments[_i];
        }
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }
        return out;
    }
    CoreUtils.extend = extend;
    var knownProblemClasses = ['ng-dirty', 'ng-touched', 'ng-untouched', 'ng-submitted', 'ng-pristine', 'ng-valid', 'ng-scope', 'ng-isolate-scope', 'active'];
    function removeKnownClasses(input) {
        if (input && input !== '' && input.length > 0) {
            return input.split(' ').filter(function (el) {
                return knownProblemClasses.indexOf(el.toLowerCase()) === -1;
            }).join(' ');
        }
        return '';
    }
    CoreUtils.removeKnownClasses = removeKnownClasses;
    function convertClassStringToEscapedSelector(input) {
        if (input && input !== '' && input.length > 0) {
            var removeEmpties = function (classString) {
                return classString.length !== 0;
            };
            var classNames = input.split(' ').filter(removeEmpties);
            for (var i = 0; i < classNames.length; i++) {
                classNames[i] = style_utils_1.StyleUtils.cssEscape(classNames[i]);
            }
            return '.' + classNames.filter(removeEmpties).join('.');
        }
        return '';
    }
    CoreUtils.convertClassStringToEscapedSelector = convertClassStringToEscapedSelector;
    function buildFullDomSelector(element) {
        var parents = CoreUtils.getParentsOfElement(element);
        var parentSelectors = [];
        for (var i = 0; i < parents.length; i++) {
            parentSelectors.push(CoreUtils.buildElementSelector(parents[i]));
        }
        parentSelectors = parentSelectors.reverse();
        var selector = parentSelectors
            .concat([CoreUtils.buildElementSelector(element)])
            .join('>');
        return selector;
    }
    CoreUtils.buildFullDomSelector = buildFullDomSelector;
    function buildElementSelector(element) {
        var internalTarget = element, tagName = element.tagName, internalId = (internalTarget.getAttribute('id') || '').trim(), ignoreClassesElements = ['html', 'body'], internalClassNames = '';
        if (internalId !== '') {
            internalId = '#' + internalId;
        }
        if (ignoreClassesElements.indexOf(internalTarget.tagName.toLowerCase()) === -1) {
            try {
                var cleanNames = [];
                for (var i = 0; i < internalTarget.classList.length; i++) {
                    cleanNames.push(internalTarget.classList[i]);
                }
                internalClassNames = (cleanNames.join(' ') || '').trim();
            }
            catch (ex) {
                internalClassNames = (internalTarget.getAttribute('class') || '').trim();
            }
            internalClassNames = removeKnownClasses(internalClassNames);
            internalClassNames = convertClassStringToEscapedSelector(internalClassNames);
        }
        switch (tagName.toLowerCase()) {
            case 'input':
                tagName += "[type=" + internalTarget.getAttribute('type') + "]";
                break;
        }
        return tagName + internalId + internalClassNames;
    }
    CoreUtils.buildElementSelector = buildElementSelector;
    function getTextFromElement(element) {
        var text;
        if (element.length === 0) {
            return text;
        }
        switch (element.get(0).tagName.toLowerCase()) {
            case 'html':
            case 'body':
                break;
            case 'select':
                text = element.val();
                break;
            case 'img':
                text = element.attr('alt');
                break;
            case 'input':
            case 'textarea':
                text = element.val();
                break;
            default:
                text = element.text();
                break;
        }
        return text;
    }
    CoreUtils.getTextFromElement = getTextFromElement;
    function getIntFromElement(element) {
        var text = getTextFromElement(element);
        return getIntFromString(text);
    }
    CoreUtils.getIntFromElement = getIntFromElement;
    function getIntFromString(text) {
        var intText;
        if (!Strings.isNullOrEmpty(text)) {
            intText = parseInt(text.replace(/[^0-9.]/g, ''));
            if (isNaN(intText)) {
                return null;
            }
        }
        return intText;
    }
    CoreUtils.getIntFromString = getIntFromString;
    function getParentsOfElement(element) {
        var parents = [];
        var d = element.ownerDocument;
        var p = element.parentNode;
        while (p != d) {
            var o = p;
            parents.push(o);
            p = o.parentNode;
        }
        return parents;
    }
    CoreUtils.getParentsOfElement = getParentsOfElement;
    var Times;
    (function (Times) {
        function formatWithAMPM(date) {
            var hours = date.getHours();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            var minutes = date.getMinutes();
            var minutesString = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutesString + ' ' + ampm;
        }
        Times.formatWithAMPM = formatWithAMPM;
    })(Times = CoreUtils.Times || (CoreUtils.Times = {}));
    var Dates;
    (function (Dates) {
        function formatWithSlashes(date) {
            return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        }
        Dates.formatWithSlashes = formatWithSlashes;
    })(Dates = CoreUtils.Dates || (CoreUtils.Dates = {}));
    var Strings;
    (function (Strings) {
        function isNullOrEmpty(inputString) {
            return !(typeof inputString === 'string' && inputString.trim().length > 0);
        }
        Strings.isNullOrEmpty = isNullOrEmpty;
        function escapeHtml(str) {
            var entityMap = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                '\'': '&#39;',
                '/': '&#x2F;'
            };
            return String(str).replace(/[&<>''\\/]/g, function (s) {
                return entityMap[s];
            });
        }
        Strings.escapeHtml = escapeHtml;
    })(Strings = CoreUtils.Strings || (CoreUtils.Strings = {}));
    var Numbers;
    (function (Numbers) {
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        Numbers.isNumeric = isNumeric;
    })(Numbers = CoreUtils.Numbers || (CoreUtils.Numbers = {}));
    var Urls;
    (function (Urls) {
        function parseUrlString(url) {
            var match = url.match(/^(https?:)?\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/) || {};
            var parser = {
                href: url,
                protocol: match[1] || ':',
                host: match[2] || '',
                hostname: match[3] || '',
                port: match[4] || '',
                pathname: match[5] || '',
                search: match[6] || '',
                hash: match[7] || ''
            };
            var parts = {
                protocol: parser.protocol,
                host: parser.host,
                hostname: parser.hostname,
                port: parser.port,
                pathname: parser.pathname,
                hash: parser.hash,
                search: parser.search
            };
            if (parts.hash && parts.hash.indexOf('?') !== -1) {
                var rawParts = parts.hash.split('?');
                parts.hash = rawParts[0];
                parts.search = '?' + rawParts[1];
            }
            return parts;
        }
        Urls.parseUrlString = parseUrlString;
        function getChurnZeroScriptSrc(doc) {
            var scriptTag = doc.querySelector('script[src*=\'churnzero.js\']');
            if (scriptTag) {
                var src = scriptTag.getAttribute('src');
                if (src) {
                    src = src.substring(0, src.lastIndexOf('/') + 1);
                    return src;
                }
            }
            return '';
        }
        Urls.getChurnZeroScriptSrc = getChurnZeroScriptSrc;
        function buildClientSideUrls(src) {
            var parsed = CoreUtils.Urls.parseUrlString(src);
            var apiUrl = 'https:', cdnUrl = 'https:', environment = 'p';
            if (parsed.host.indexOf('localhost:53156') >= 0) {
                apiUrl = 'http://localhost:53156/';
                cdnUrl = 'http://localhost:53156/external/';
                environment = 'd';
            }
            else if (parsed.host.indexOf('localhost:53157') >= 0) {
                apiUrl = 'https://analytics.localhost:53157/';
                cdnUrl = 'https://analytics.localhost:53157/external/';
                environment = 'd';
            }
            else if (parsed.host.indexOf('apptest.churnzerolabs.com') >= 0 || parsed.host.indexOf('analyticstest.churnzerolabs.com') >= 0) {
                apiUrl += '//analyticstest.churnzerolabs.com/';
                cdnUrl += '//analyticstest.churnzerolabs.com/external/';
                environment = 't';
            }
            else if (parsed.host.indexOf('appstaging.churnzerolabs.com') >= 0) {
                apiUrl += '//appstaging.churnzerolabs.com/';
                cdnUrl += '//appstaging.churnzerolabs.com/external/';
                environment = 's';
            }
            else if (parsed.host.indexOf('eu1analytics.churnzero.net') >= 0) {
                apiUrl += '//eu1analytics.churnzero.net/';
                cdnUrl += '//eu1analytics.churnzero.net/external/';
            }
            else {
                apiUrl += '//analytics.churnzero.net/';
                cdnUrl += '//analytics.churnzero.net/external/';
            }
            return {
                scriptSrc: src,
                cdn: cdnUrl,
                baseApiUrl: apiUrl,
                sockets: apiUrl + 'api/v1/sockets/',
                environment: environment
            };
        }
        Urls.buildClientSideUrls = buildClientSideUrls;
        function buildQueryStringString(queryString) {
            var queryStringProps = [], queryStringString = '';
            for (var property in queryString) {
                if (queryString.hasOwnProperty(property)) {
                    queryStringProps.push(property + '=' + queryString[property]);
                }
            }
            if (queryStringProps && queryStringProps.length > 0) {
                queryStringString = '?' + queryStringProps.join('&');
            }
            return queryStringString;
        }
        Urls.buildQueryStringString = buildQueryStringString;
        function parseUrlToLocationParts(location) {
            var url = CoreUtils.Urls.parseUrlString(location);
            var rawParts;
            if (url.hash && url.hash.indexOf('?') !== -1) {
                rawParts = url.hash.split('?');
                url.hash = rawParts[0];
                url.search = rawParts[1];
            }
            var ignores = ['#', '#!', ''];
            var mapTransform = function (value, index) {
                return { value: value, include: true, index: index, hidden: ignores.indexOf(value) !== -1 };
            };
            var pathParts = [];
            if (!CoreUtils.Strings.isNullOrEmpty(url.pathname)) {
                rawParts = url.pathname.split('/');
                pathParts = rawParts.map(mapTransform);
            }
            var hashParts = [];
            if (!CoreUtils.Strings.isNullOrEmpty(url.hash)) {
                rawParts = url.hash.split('/');
                hashParts = rawParts.map(mapTransform);
            }
            var searchParts = [];
            if (!CoreUtils.Strings.isNullOrEmpty(url.search)) {
                rawParts = url.search.split('&');
                searchParts = rawParts.map(mapTransform);
            }
            return { pathParts: pathParts, hashParts: hashParts, searchParts: searchParts };
        }
        Urls.parseUrlToLocationParts = parseUrlToLocationParts;
        function buildRegexFromLocationParts_Old(location, parsedParts) {
            var rawParts;
            var url = CoreUtils.Urls.parseUrlString(location);
            if (!parsedParts) {
                parsedParts = {
                    pathParts: [],
                    hashParts: [],
                    searchParts: []
                };
            }
            if (url.hash && url.hash.indexOf('?') !== -1) {
                rawParts = url.hash.split('?');
                url.hash = rawParts[0];
                url.search = rawParts[1];
            }
            var mapTransform = function (partsArray, excludedValue, prefixValue, skipFirstPrefix) {
                if (excludedValue === void 0) { excludedValue = '\\w+'; }
                if (prefixValue === void 0) { prefixValue = '\\/'; }
                if (skipFirstPrefix === void 0) { skipFirstPrefix = true; }
                return function (value, index, array) {
                    var isFirst = index === 0;
                    var replacementInfo = null;
                    partsArray.forEach(function (part) {
                        if (part.index === index && replacementInfo === null) {
                            replacementInfo = part;
                        }
                    });
                    if (replacementInfo === null || replacementInfo.value.trim() === '') {
                        return undefined;
                    }
                    var replacementValue = replacementInfo.value;
                    if (isFirst && replacementValue.indexOf('?') === 0) {
                        replacementValue = replacementValue.replace('?', '');
                    }
                    replacementValue = replacementValue.replace(/[[\]\\^$.|?*+(){}#]/g, function (value) {
                        return '\\' + value;
                    });
                    var prefix = '';
                    if (typeof prefixValue === 'function') {
                        prefix = prefixValue(replacementValue);
                    }
                    else {
                        prefix = prefixValue;
                    }
                    if (isFirst && skipFirstPrefix) {
                        prefix = '';
                    }
                    var returnValue = '';
                    if (replacementInfo.include) {
                        returnValue = replacementValue;
                    }
                    else {
                        returnValue = typeof excludedValue === 'function' ? excludedValue(replacementValue) : excludedValue;
                    }
                    return '(?:' + prefix + returnValue + ')' + (replacementInfo.include ? '' : '?');
                };
            };
            var parts, slash = '/';
            if (!CoreUtils.Strings.isNullOrEmpty(url.pathname)) {
                rawParts = url.pathname.split(slash);
                parts = rawParts.map(mapTransform(parsedParts.pathParts)).filter(function (value) { return value !== undefined; });
                if (rawParts[(rawParts.length - 1)] === '') {
                    parts.push(slash);
                }
                url.pathname = parts.join('');
            }
            if (!CoreUtils.Strings.isNullOrEmpty(url.hash)) {
                rawParts = url.hash.split(slash);
                parts = rawParts.map(mapTransform(parsedParts.hashParts)).filter(function (value) { return value !== undefined; });
                if (rawParts[(rawParts.length - 1)] === '') {
                    parts.push(slash);
                }
                url.hash = parts.join('');
            }
            if (!CoreUtils.Strings.isNullOrEmpty(url.search)) {
                rawParts = url.search.split('&');
                parts = rawParts.map(mapTransform(parsedParts.searchParts, function (value) {
                    return value.split('=')[0] + "=?\\w*";
                }, '&')).filter(function (value) { return value !== undefined; });
                url.search = '\\?' + parts.join('');
            }
            var modifiedHost = url.host.replace(/(\*|%2A)/g, '[^.]+');
            var fullUrlRegex = (url.protocol !== ':' ? url.protocol : '') + "\\/\\/" + modifiedHost;
            if (!CoreUtils.Strings.isNullOrEmpty(url.pathname)) {
                fullUrlRegex += url.pathname;
            }
            if (!CoreUtils.Strings.isNullOrEmpty(url.hash)) {
                fullUrlRegex += url.hash;
            }
            if (!CoreUtils.Strings.isNullOrEmpty(url.search)) {
                fullUrlRegex += url.search;
            }
            return fullUrlRegex.trim();
        }
        Urls.buildRegexFromLocationParts_Old = buildRegexFromLocationParts_Old;
        function buildRegexFromLocationParts(location, parsedParts) {
            var rawParts;
            var url = CoreUtils.Urls.parseUrlString(location);
            if (!parsedParts) {
                parsedParts = {
                    pathParts: [],
                    hashParts: [],
                    searchParts: [],
                    allowChildPaths: true,
                    allowChildStates: true,
                    excludeSearchParts: true
                };
            }
            if (parsedParts.allowChildPaths !== false) {
                parsedParts.allowChildPaths = true;
            }
            if (parsedParts.allowChildStates !== false) {
                parsedParts.allowChildStates = true;
            }
            if (parsedParts.excludeSearchParts !== false) {
                parsedParts.excludeSearchParts = true;
            }
            if (url.hash && url.hash.indexOf('?') !== -1) {
                rawParts = url.hash.split('?');
                url.hash = rawParts[0];
                url.search = rawParts[1];
            }
            var makeInvisibleGroup = function (text) {
                return '(?:' + text + ')';
            };
            var mapTransform = function (partsArray, excludedValue, prefixValue, skipFirstPrefix) {
                if (excludedValue === void 0) { excludedValue = '\\w+'; }
                if (prefixValue === void 0) { prefixValue = '\\/'; }
                if (skipFirstPrefix === void 0) { skipFirstPrefix = true; }
                return function (value, index, array) {
                    var isFirst = index === 0;
                    var replacementInfo = null;
                    partsArray.forEach(function (part) {
                        if (part.index === index && replacementInfo === null) {
                            replacementInfo = part;
                        }
                    });
                    if (replacementInfo === null || replacementInfo.value.trim() === '') {
                        return undefined;
                    }
                    var replacementValue = replacementInfo.value;
                    if (isFirst && replacementValue.indexOf('?') === 0) {
                        replacementValue = replacementValue.replace('?', '');
                    }
                    replacementValue = replacementValue.replace(/[[\]\\^$.|?*+(){}#]/g, function (value) {
                        return '\\' + value;
                    });
                    var prefix = '';
                    if (typeof prefixValue === 'function') {
                        prefix = prefixValue(replacementValue);
                    }
                    else {
                        prefix = prefixValue;
                    }
                    if (isFirst && skipFirstPrefix) {
                        prefix = '';
                    }
                    var returnValue = '';
                    if (replacementInfo.include) {
                        returnValue = replacementValue;
                    }
                    else {
                        returnValue = typeof excludedValue === 'function' ? excludedValue(replacementValue) : excludedValue;
                    }
                    return '(?:' + prefix + returnValue + ')' + (replacementInfo.include ? '' : '+');
                };
            };
            var parts, slash = '/';
            if (!CoreUtils.Strings.isNullOrEmpty(url.pathname)) {
                rawParts = url.pathname.split(slash);
                parts = rawParts.map(mapTransform(parsedParts.pathParts)).filter(function (value) { return value !== undefined; });
                url.pathname = parts.join('');
            }
            if (!CoreUtils.Strings.isNullOrEmpty(url.hash)) {
                rawParts = url.hash.split(slash);
                parts = rawParts.map(mapTransform(parsedParts.hashParts)).filter(function (value) { return value !== undefined; });
                url.hash = parts.join('');
            }
            if (!CoreUtils.Strings.isNullOrEmpty(url.search)) {
                rawParts = url.search.split('&');
                parts = rawParts.map(mapTransform(parsedParts.searchParts, function (value) {
                    return value.split('=')[0] + "=?\\w*";
                }, '&')).filter(function (value) { return value !== undefined; });
                url.search = '\\?' + parts.join('');
            }
            var modifiedHost = url.host.replace(/(\*|%2A){2}\./g, '(?:[^.]+\\.){0,}');
            modifiedHost = modifiedHost.replace(/(\*|%2A)/g, '[^.]+');
            var fullUrlRegex = (url.protocol !== ':' ? url.protocol : '') + "\\/\\/" + modifiedHost;
            var fullStop = '\\z|$', pathChars = '[a-zA-Z0-9\\.\\-_~\\$&\'()*+,;=:@]*', hasPath = !CoreUtils.Strings.isNullOrEmpty(url.pathname), hasHash = !CoreUtils.Strings.isNullOrEmpty(url.hash), hasSearch = !CoreUtils.Strings.isNullOrEmpty(url.search);
            if (hasPath) {
                fullUrlRegex += url.pathname;
            }
            if (parsedParts.allowChildPaths) {
                fullUrlRegex += makeInvisibleGroup('\\/' + pathChars + '\\/?') + '*';
            }
            else {
                fullUrlRegex += makeInvisibleGroup('\\/?');
            }
            if (hasHash) {
                var h = '';
                h = url.hash;
                if (parsedParts.allowChildStates) {
                    h += makeInvisibleGroup('\\/' + pathChars + '\\/?') + '*';
                }
                else {
                    h += '\\/?';
                }
                fullUrlRegex += h;
            }
            else if (parsedParts.allowChildStates) {
                fullUrlRegex += makeInvisibleGroup('[#!][^?]*') + '?';
            }
            if (hasSearch && !parsedParts.excludeSearchParts) {
                fullUrlRegex += url.search + '.*';
            }
            else if (!hasSearch && !parsedParts.excludeSearchParts) {
            }
            else {
                fullUrlRegex += makeInvisibleGroup('\\?.*') + (parsedParts.excludeSearchParts ? '?' : '');
            }
            fullUrlRegex += makeInvisibleGroup(fullStop);
            return fullUrlRegex.trim();
        }
        Urls.buildRegexFromLocationParts = buildRegexFromLocationParts;
        function checkUrlAgainstPageTag(url, pageTag) {
            if (CoreUtils.Strings.isNullOrEmpty(url) || CoreUtils.Strings.isNullOrEmpty(pageTag.location)) {
                return false;
            }
            var locationOptions = undefined;
            if (pageTag.locationOptionsJson === null || pageTag.locationOptionsJson === undefined || !pageTag.isCustomLocation) {
                locationOptions = new location_options_1.LocationOptions(CoreUtils.Urls.parseUrlToLocationParts(pageTag.location));
                if (!pageTag.isCustomLocation && !(pageTag.locationOptionsJson === null || pageTag.locationOptionsJson === undefined)) {
                    var parsedOptions = location_options_1.LocationOptions.fromJson(pageTag.locationOptionsJson);
                    locationOptions.allowChildPaths = parsedOptions.allowChildPaths;
                    locationOptions.allowChildStates = parsedOptions.allowChildStates;
                    locationOptions.excludeSearchParts = parsedOptions.excludeSearchParts;
                }
            }
            else {
                locationOptions = location_options_1.LocationOptions.fromJson(pageTag.locationOptionsJson);
            }
            var regExString = CoreUtils.Urls.buildRegexFromLocationParts(pageTag.location, locationOptions);
            var regEx = new RegExp(regExString);
            return regEx.test(url);
        }
        Urls.checkUrlAgainstPageTag = checkUrlAgainstPageTag;
    })(Urls = CoreUtils.Urls || (CoreUtils.Urls = {}));
    function noop() {
    }
    CoreUtils.noop = noop;
    function isObjectDigestible(object) {
        return object.onDigest !== undefined;
    }
    CoreUtils.isObjectDigestible = isObjectDigestible;
    function isObject(val) {
        return val === Object(val);
    }
    CoreUtils.isObject = isObject;
    function isArray(val) {
        return Array.isArray(val);
    }
    CoreUtils.isArray = isArray;
    function clone(original) {
        if (original === null || original === undefined) {
            return original;
        }
        if (Array.isArray(original)) {
            var temp = { value: original };
            return clone(temp).value;
        }
        var cloned;
        if (CoreUtils.isString(original)) {
            cloned = original;
            return cloned;
        }
        cloned = Object.create(original);
        Object.keys(original).forEach(function (k) {
            cloned[k] = original[k];
        });
        for (var attribute in cloned) {
            if (cloned[attribute] instanceof Date) {
                var copy = new Date();
                copy.setTime(cloned[attribute].getTime());
                cloned[attribute] = copy;
            }
            else if (Array.isArray(cloned[attribute])) {
                var copy = cloned[attribute].map(function (item) { return clone(item); });
                cloned[attribute] = copy;
            }
            else if (typeof cloned[attribute] === 'object') {
                cloned[attribute] = clone(cloned[attribute]);
            }
        }
        return cloned;
    }
    CoreUtils.clone = clone;
    function numKeys(val) {
        var res = 0;
        for (var k in val) {
            if (val.hasOwnProperty(k))
                res++;
        }
        return res;
    }
    CoreUtils.numKeys = numKeys;
    function isString(x) {
        return Object.prototype.toString.call(x) === '[object String]';
    }
    CoreUtils.isString = isString;
    function isNullOrUndefined(x) {
        return typeof x === 'undefined' || x === null;
    }
    CoreUtils.isNullOrUndefined = isNullOrUndefined;
    function buildEventMapSelector(e) {
        var selector = e.selector;
        if (!selector || selector.length === 0 || selector[selector.length - 1] === '*' || (e.selectorTypeId === enums_1.SelectorTypes.Custom && e.excludeChildren)) {
            return selector;
        }
        return selector + ', ' + selector + ' *';
    }
    CoreUtils.buildEventMapSelector = buildEventMapSelector;
    function concatEventMapSelectors(eventMaps) {
        return eventMaps.map(buildEventMapSelector).filter(function (selector) {
            return selector && selector.length > 0;
        }).join(', ');
    }
    CoreUtils.concatEventMapSelectors = concatEventMapSelectors;
    function concatWalkthroughSelectors(walkthroughs) {
        return walkthroughs.map(function (e) {
            return buildEventMapSelector(e.triggerConfig);
        }).filter(function (selector) {
            return selector && selector.length > 0;
        }).join(', ');
    }
    CoreUtils.concatWalkthroughSelectors = concatWalkthroughSelectors;
    function sortArrayBy(propertyName) {
        return function (a, b) {
            if (a[propertyName] < b[propertyName])
                return -1;
            if (a[propertyName] > b[propertyName])
                return 1;
            return 0;
        };
    }
    CoreUtils.sortArrayBy = sortArrayBy;
    function hasOwnProp(thisArg, prop) {
        return Object.prototype.hasOwnProperty.call(thisArg, prop);
    }
    CoreUtils.hasOwnProp = hasOwnProp;
})(CoreUtils = exports.CoreUtils || (exports.CoreUtils = {}));
//# sourceMappingURL=core-utils.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/utils/data-type-utils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/utils/data-type-utils.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DataTypeUtils = (function () {
    function DataTypeUtils() {
    }
    DataTypeUtils.newGuid = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    DataTypeUtils.isStringNullOrEmpty = function (input) {
        return !(typeof input === 'string' && input.trim().length > 0);
    };
    return DataTypeUtils;
}());
exports.DataTypeUtils = DataTypeUtils;
//# sourceMappingURL=data-type-utils.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/utils/iframe-utils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/utils/iframe-utils.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iFrameUtils;
(function (iFrameUtils) {
    var transportSalt = 'CZTPM';
    var transportKey = '30DDF99A-B7F0-4DB2-BCEC-AA5DD0A4561B';
    var TransportMessage = (function () {
        function TransportMessage() {
        }
        return TransportMessage;
    }());
    iFrameUtils.TransportMessage = TransportMessage;
    function attachTransportMessageListener(windowRef, origin, callback, JSONRef, onError) {
        var unwind = function (e) {
            try {
                if (!origin) {
                    return;
                }
                var o_1 = e.origin;
                if (origin !== '*') {
                    var allowedOrigins = origin.split(',');
                    var matchFound_1 = false;
                    allowedOrigins.forEach(function (os) {
                        if (!matchFound_1 && os === o_1) {
                            matchFound_1 = true;
                        }
                    });
                    if (!matchFound_1) {
                        console.log('!*!- Allowed Origins Violated (a, r)', origin, o_1);
                        return;
                    }
                }
                var transportMessage = void 0;
                if (Object.prototype.toString.call(e.data) === '[object String]' && e.data.indexOf(transportSalt) === 0) {
                    try {
                        var message = e.data.substr(transportSalt.length);
                        transportMessage = (JSONRef || JSON).parse(scramble(message, transportKey, true));
                    }
                    catch (ex) {
                        transportMessage = undefined;
                        if (typeof onError === 'function')
                            onError(ex, e);
                    }
                }
                else {
                    console.log('e.data not intended for CZ', e.data);
                    return;
                }
                if (transportMessage && transportMessage.hasOwnProperty('code') && transportMessage.hasOwnProperty('data')) {
                    callback(transportMessage, e);
                }
            }
            catch (ex) {
                if (typeof onError === 'function')
                    onError(ex, e);
            }
        };
        if (windowRef.addEventListener) {
            windowRef.addEventListener('message', unwind, false);
        }
        else if (windowRef.attachEvent) {
            windowRef.attachEvent('onmessage', unwind);
        }
        return unwind;
    }
    iFrameUtils.attachTransportMessageListener = attachTransportMessageListener;
    function buildTransportMessage(code, data) {
        return {
            code: code,
            data: data
        };
    }
    iFrameUtils.buildTransportMessage = buildTransportMessage;
    function scramble(text, key, reverse) {
        var bound = 0x10000;
        return String.fromCharCode.apply(null, text.split('').map(function (v, i) {
            var rotation = key[i % key.length].charCodeAt();
            if (reverse)
                rotation = -rotation;
            return (v.charCodeAt() + rotation + bound) % bound;
        }));
    }
    function encrypt(text) {
        return transportSalt + scramble(text, transportKey, false);
    }
    iFrameUtils.encrypt = encrypt;
})(iFrameUtils = exports.iFrameUtils || (exports.iFrameUtils = {}));
//# sourceMappingURL=iframe-utils.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/utils/model-utils.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ModelUtils = (function () {
    function ModelUtils() {
    }
    ModelUtils.create = function (dest, input) {
        if (input) {
            Object.keys(input).forEach(function (k) {
                dest[k] = input[k];
            });
        }
        return dest;
    };
    return ModelUtils;
}());
exports.ModelUtils = ModelUtils;
//# sourceMappingURL=model-utils.js.map

/***/ }),

/***/ "./node_modules/@churnzero/clientlibs/dist/main/utils/style-utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@churnzero/clientlibs/dist/main/utils/style-utils.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StyleUtils;
(function (StyleUtils) {
    function appendStyle(styleString) {
        return function (i, s) {
            return (s || '') + (styleString || '');
        };
    }
    StyleUtils.appendStyle = appendStyle;
    function replaceStyleValue(oldValue, newValue) {
        return function (i, s) {
            return (s || '').replace(new RegExp(oldValue, 'g'), newValue);
        };
    }
    StyleUtils.replaceStyleValue = replaceStyleValue;
    function whichTransitionEvent() {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }
    StyleUtils.whichTransitionEvent = whichTransitionEvent;
    function camelCaseToDash(myStr) {
        return !myStr ? null : myStr.replace(/([A-Z])/g, function (g) {
            return '-' + g[0].toLowerCase();
        });
    }
    StyleUtils.camelCaseToDash = camelCaseToDash;
    function isInViewport(elem) {
        var bounding = elem.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    StyleUtils.isInViewport = isInViewport;
    function cssEscape(value) {
        if (arguments.length == 0) {
            return '';
        }
        var string = String(value);
        var length = string.length;
        var index = -1;
        var codeUnit;
        var result = '';
        var firstCodeUnit = string.charCodeAt(0);
        while (++index < length) {
            codeUnit = string.charCodeAt(index);
            if (codeUnit == 0x0000) {
                result += '\uFFFD';
                continue;
            }
            if ((codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
                (index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
                (index == 1 &&
                    codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
                    firstCodeUnit == 0x002D)) {
                result += '\\' + codeUnit.toString(16) + ' ';
                continue;
            }
            if (index == 0 &&
                length == 1 &&
                codeUnit == 0x002D) {
                result += '\\' + string.charAt(index);
                continue;
            }
            if (codeUnit >= 0x0080 ||
                codeUnit == 0x002D ||
                codeUnit == 0x005F ||
                codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
                codeUnit >= 0x0041 && codeUnit <= 0x005A ||
                codeUnit >= 0x0061 && codeUnit <= 0x007A) {
                result += string.charAt(index);
                continue;
            }
            result += '\\' + string.charAt(index);
        }
        return result;
    }
    StyleUtils.cssEscape = cssEscape;
    StyleUtils.froalaViewerStyle = 'html{margin:0px;height:auto;}body{height:auto;padding:10px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:\'\';display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}body, body:focus{outline: transparent solid 0px;}body{background: transparent; position: relative; z-index: 2; user-select: auto;}body a{user-select: auto;}body.fr-disabled{user-select: none;}body [contenteditable=\'true\']{outline: transparent solid 0px;}body img{cursor: pointer;}body table td.fr-selected-cell, body table th.fr-selected-cell{border: 1px double rgb(30, 136, 229);}body table tr{user-select: none;}body table td, body table th{user-select: text;}body .fr-no-selection table td, body .fr-no-selection table th{user-select: none;}body .fr-video{user-select: none;}body .fr-video::after{position: absolute; content: \'\'; z-index: 1; top: 0px; left: 0px; right: 0px; bottom: 0px; cursor: pointer; display: block; background: transparent;}body .fr-video.fr-active > *{z-index: 2; position: relative;}body .fr-video > *{box-sizing: content-box; max-width: 100%; border: none;}body{overflow-wrap: break-word;}body span[style~=\'color:\'] a{color: inherit;}body strong{font-weight: 700;}body table{border: none; border-collapse: collapse; empty-cells: show; max-width: 100%;}body table td{min-width: 5px;}body table.fr-dashed-borders td, body table.fr-dashed-borders th{border-style: dashed;}body table.fr-alternate-rows tbody tr:nth-child(2n){background: rgb(245, 245, 245);}body table td, body table th{border: 1px solid rgb(221, 221, 221);}body table td:empty, body table th:empty{height: 20px;}body table td.fr-highlighted, body table th.fr-highlighted{border: 1px double red;}body table td.fr-thick, body table th.fr-thick{border-width: 2px;}body table th{background: rgb(230, 230, 230);}body hr{clear: both; user-select: none; break-after: page;}body .fr-file{position: relative;}body .fr-file::after{position: relative; content: \'📎\'; font-weight: 400;}body pre{white-space: pre-wrap; overflow-wrap: break-word; overflow: visible;}body[dir=\'rtl\'] blockquote{border-left: none; border-right: 2px solid rgb(94, 53, 177); margin-right: 0px; padding-right: 5px; padding-left: 0px;}body[dir=\'rtl\'] blockquote blockquote{border-color: rgb(0, 188, 212);}body[dir=\'rtl\'] blockquote blockquote blockquote{border-color: rgb(67, 160, 71);}body blockquote{border-left: 2px solid rgb(94, 53, 177); margin-left: 0px; padding-left: 5px; color: rgb(94, 53, 177);}body blockquote blockquote{border-color: rgb(0, 188, 212); color: rgb(0, 188, 212);}body blockquote blockquote blockquote{border-color: rgb(67, 160, 71); color: rgb(67, 160, 71);}body span.fr-emoticon{font-weight: 400; font-family: \'Apple Color Emoji\', \'Segoe UI Emoji\', NotoColorEmoji, \'Segoe UI Symbol\', \'Android Emoji\', EmojiSymbols; display: inline; line-height: 0;}body span.fr-emoticon.fr-emoticon-img{font-size: inherit; height: 1em; width: 1em; min-height: 20px; min-width: 20px; display: inline-block; margin: -0.1em 0.1em 0.1em; line-height: 1; vertical-align: middle; background-repeat: no-repeat !important;}body .fr-text-gray{color: rgb(170, 170, 170) !important;}body .fr-text-bordered{border-top: 1px solid rgb(34, 34, 34); border-bottom: 1px solid rgb(34, 34, 34); padding: 10px 0px;}body .fr-text-spaced{letter-spacing: 1px;}body .fr-text-uppercase{text-transform: uppercase;}body .fr-class-highlighted{background-color: rgb(255, 255, 0);}body .fr-class-code{border-color: rgb(204, 204, 204); border-radius: 2px; background: rgb(245, 245, 245); padding: 10px; font-family: \'Courier New\', Courier, monospace;}body .fr-class-transparency{opacity: 0.5;}body img{position: relative; max-width: 100%;}body img.fr-dib{margin: 5px auto; display: block; float: none; vertical-align: top;}body img.fr-dib.fr-fil{margin-left: 0px; text-align: left;}body img.fr-dib.fr-fir{margin-right: 0px; text-align: right;}body img.fr-dii{display: inline-block; float: none; vertical-align: bottom; margin-left: 5px; margin-right: 5px; max-width: calc(100% - 10px);}body img.fr-dii.fr-fil{float: left; margin: 5px 5px 5px 0px; max-width: calc(100% - 5px);}body img.fr-dii.fr-fir{float: right; margin: 5px 0px 5px 5px; max-width: calc(100% - 5px);}body span.fr-img-caption{position: relative; max-width: 100%;}body span.fr-img-caption.fr-dib{margin: 5px auto; display: block; float: none; vertical-align: top;}body span.fr-img-caption.fr-dib.fr-fil{margin-left: 0px; text-align: left;}body span.fr-img-caption.fr-dib.fr-fir{margin-right: 0px; text-align: right;}body span.fr-img-caption.fr-dii{display: inline-block; float: none; vertical-align: bottom; margin-left: 5px; margin-right: 5px; max-width: calc(100% - 10px);}body span.fr-img-caption.fr-dii.fr-fil{float: left; margin: 5px 5px 5px 0px; max-width: calc(100% - 5px);}body span.fr-img-caption.fr-dii.fr-fir{float: right; margin: 5px 0px 5px 5px; max-width: calc(100% - 5px);}body .fr-video{text-align: center; position: relative;}body .fr-video.fr-rv{padding-bottom: 56.25%; padding-top: 30px; height: 0px; overflow: hidden;}body .fr-video.fr-rv > iframe, body .fr-video.fr-rv embed, body .fr-video.fr-rv object{top: 0px; left: 0px; width: 100%; height: 100%; position: absolute !important;}body .fr-video > *{box-sizing: content-box; max-width: 100%; border: none;}body .fr-video.fr-dvb{display: block; clear: both;}body .fr-video.fr-dvb.fr-fvl{text-align: left;}body .fr-video.fr-dvb.fr-fvr{text-align: right;}body .fr-video.fr-dvi{display: inline-block;}body .fr-video.fr-dvi.fr-fvl{float: left;}body .fr-video.fr-dvi.fr-fvr{float: right;}body a.fr-strong{font-weight: 700;}body a.fr-green{color: green;}body .fr-img-caption{text-align: center;}body .fr-img-caption .fr-img-wrap{padding: 0px; display: inline-block; margin: auto; text-align: center; width: 100%;}body .fr-img-caption .fr-img-wrap img{display: block; margin: auto; width: 100%;}body .fr-img-caption .fr-img-wrap > span{margin: auto; display: block; padding: 5px 5px 10px; font-size: 14px; font-weight: 400; box-sizing: border-box; opacity: 0.9; width: 100%; text-align: center;}body button.fr-rounded, body input.fr-rounded, body textarea.fr-rounded{border-radius: 10px; background-clip: padding-box;}body button.fr-large, body input.fr-large, body textarea.fr-large{font-size: 24px;}';
})(StyleUtils = exports.StyleUtils || (exports.StyleUtils = {}));
//# sourceMappingURL=style-utils.js.map

/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global globalThis */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by George on 5/3/2016.
 */
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var _ChurnZeroApp_1 = __importDefault(__webpack_require__(/*! ./core/_ChurnZeroApp */ "./src/core/_ChurnZeroApp.ts"));
var errorLogger_1 = __importDefault(__webpack_require__(/*! ./core/errorLogger */ "./src/core/errorLogger.ts"));
__webpack_require__(/*! ./scss/csm_panel_styles.scss */ "./src/scss/csm_panel_styles.scss");
if (!clientlibs_1.CoreUtils.FeatureDetection.isLegacyIE()) {
    //the integration code sets window.ChurnZero equal to an array
    // so that window.ChurnZero.push will work even before
    // this script is loaded
    var queue = window["ChurnZero"] || [];
    //once this script has loaded, we want window.ChurnZero
    // to refer to the app itself not the event queue
    window["ChurnZero"] = new _ChurnZeroApp_1.default() || {};
    //after the app has been configured out of the preload state
    // boot it up.
    try {
        var start = function () {
            window.ChurnZero.boot(queue);
        };
        // @ts-ignore
        if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
            start();
        }
        else {
            document.addEventListener("DOMContentLoaded", start);
        }
    }
    catch (e) {
        //report?
        errorLogger_1.default.report("App.Main", e);
    }
}


/***/ }),

/***/ "./src/contentPanel/ElementFinder.ts":
/*!*******************************************!*\
  !*** ./src/contentPanel/ElementFinder.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorLogger_1 = __importDefault(__webpack_require__(/*! ../core/errorLogger */ "./src/core/errorLogger.ts"));
var ElementFinder = /** @class */ (function () {
    function ElementFinder(options, windowSvc) {
        this.windowSvc = windowSvc;
        this.isInited = false;
        this.options = this.windowSvc.czq.extend({}, ElementFinder.defaultOptions, (options || {}));
        this.init();
    }
    ElementFinder.prototype.init = function () {
        if (this.options.eventNamespace && this.options.eventNamespace.substring(0, 1) !== ".") {
            this.options.eventNamespace = "." + this.options.eventNamespace;
        }
        this.elements = {
            pubHub: this.windowSvc.czq(this.options.pubHubElement),
            iframes: null,
            borderElements: undefined,
            extraBorders: []
        };
    };
    ElementFinder.prototype.start = function () {
        var _this = this;
        this.stop();
        //inject hover style stylesheet into window
        this._initStylesheet();
        this._addBorderElements();
        //listen for a click indicating element found
        this.boundSelectionHandler = this._elementSelectedHandler.bind(this);
        this.elements.pubHub.get(0).addEventListener("click", this.boundSelectionHandler, true);
        //start monitoring mouse hover for selector
        this.elements.pubHub.on(this._nameSpaceEvent("mouseover"), this._mouseOverHandler.bind(this));
        this.elements.iframes = this.elements.pubHub.find("iframe");
        this.elements.iframes.each(function (i, e) {
            var iframe = _this.windowSvc.czq(e);
            try {
                iframe.contents()
                    .on(_this._nameSpaceEvent("mouseover"), function (e) {
                    _this._mouseOverHandler(e, iframe);
                })
                    .on(_this._nameSpaceEvent("click"), function (e) {
                    _this._elementSelectedHandler(e);
                });
            }
            catch (e) {
                //meh...
            }
        });
        this.IsFinding = true;
    };
    ElementFinder.prototype.stop = function (keepBorders) {
        var _this = this;
        //clean everything up
        if (!keepBorders) {
            this._removeBorderElements();
            this.currentHover = null;
        }
        this.elements.pubHub.get(0).removeEventListener("click", this.boundSelectionHandler, true);
        this.boundSelectionHandler = null;
        this.elements.pubHub.off(this.options.eventNamespace);
        if (this.elements.iframes) {
            this.elements.iframes.each(function (i, e) {
                try {
                    _this.windowSvc.czq(e).contents().off(_this.options.eventNamespace);
                }
                catch (e) {
                    //meh...
                }
            });
        }
        this.IsFinding = false;
    };
    ElementFinder.prototype.highlightElement = function (elementToHighlight) {
        var _this = this;
        //inject hover style stylesheet into window
        this._initStylesheet();
        this._addBorderElements();
        var element, jqueryResult;
        if (typeof elementToHighlight === "string") {
            jqueryResult = this.windowSvc.czq(elementToHighlight);
            if (jqueryResult.length > 0) {
                element = jqueryResult;
            }
            else {
                return;
            }
        }
        else {
            element = this.windowSvc.czq(elementToHighlight);
        }
        if (element.length > 0) {
            this._removeBorderElements();
            element.each(function (i, e) {
                var borders = _this.buildBorderElements();
                _this.elements.extraBorders.push(borders);
                _this._updateBorderPositions(borders, e);
            });
            //trigger event with hovered element
            if (this.options.onHighlightFunction && typeof this.options.onHighlightFunction === "function") {
                this.options.onHighlightFunction(element);
            }
        }
    };
    //Setup
    ElementFinder.prototype._initStylesheet = function () {
        if (this.isInited !== true) {
            var css = "" +
                "." + this.options.elementNamespace + " {" +
                "    background: mediumpurple;" +
                "    position: absolute;" +
                "    z-index: 1000000;" +
                "}";
            this._writeStylesheet(css);
            this.isInited = true;
        }
    };
    //Event Handlers
    ElementFinder.prototype._elementSelectedHandler = function (e) {
        try {
            //turn everything off
            e.preventDefault();
            e.stopPropagation();
            var target = e.target;
            if (this._isIgnorableElement(target)) {
                if (this.currentHover && !this._isIgnorableElement(this.currentHover)) {
                    console.log("using hovered element", this.currentHover);
                    target = this.currentHover;
                }
                else {
                    return false;
                }
            }
            //trigger event with hovered element
            if (this.options.onSelectedFunction && typeof this.options.onSelectedFunction === "function") {
                this.options.onSelectedFunction(e, target);
            }
            this.stop(this.options.keepBordersOnClick);
        }
        catch (ex) {
            //report?
            errorLogger_1.default.report("ElementFinder.SelectedHandler", ex);
        }
        return false;
    };
    ElementFinder.prototype._mouseOverHandler = function (e, iframeParent) {
        var target = e.target;
        if (this._isIgnorableElement(target)) {
            return;
        }
        //add highlight borders
        var offset;
        if (typeof iframeParent !== "undefined") {
            offset = iframeParent.offset();
        }
        this._updateBorderPositions(this.elements.BorderElements, target, offset);
        this.currentHover = target;
        if (this.options.onHoverFunction && typeof this.options.onHoverFunction === "function") {
            this.options.onHoverFunction(e, target);
        }
    };
    //Border Control
    ElementFinder.prototype._addBorderElements = function () {
        this._removeBorderElements();
        var borderElements = this.buildBorderElements();
        this.elements.BorderElements = this.elements.BorderElements || {};
        this.elements.BorderElements.top = borderElements.top;
        this.elements.BorderElements.right = borderElements.right;
        this.elements.BorderElements.bottom = borderElements.bottom;
        this.elements.BorderElements.left = borderElements.left;
    };
    ElementFinder.prototype.buildBorderElements = function () {
        var borderElements = {
            top: this.windowSvc.czq("<div></div>").addClass(this.options.elementNamespace).appendTo("body"),
            right: this.windowSvc.czq("<div></div>").addClass(this.options.elementNamespace).appendTo("body"),
            bottom: this.windowSvc.czq("<div></div>").addClass(this.options.elementNamespace).appendTo("body"),
            left: this.windowSvc.czq("<div></div>").addClass(this.options.elementNamespace).appendTo("body")
        };
        return borderElements;
    };
    ElementFinder.prototype._removeBorderElements = function () {
        var _this = this;
        this.windowSvc.czq.each((this.elements.BorderElements || {}), function (name, element) {
            element.remove();
        });
        this.elements.extraBorders.forEach(function (borders) {
            _this.windowSvc.czq.each((borders || {}), function (name, element) {
                element.remove();
            });
        });
    };
    ElementFinder.prototype._updateBorderPositions = function (borders, element, offset) {
        if (!element || (this.options.elementNamespace && element.className && (element.className).indexOf(this.options.elementNamespace) !== -1)) {
            return;
        }
        var b = 3;
        var scrollTop = this.windowSvc.elementCache.window.scrollTop();
        var pos = element.getBoundingClientRect();
        var top = pos.top + scrollTop;
        var left = pos.left;
        if (offset && typeof offset.top !== "undefined" && typeof offset.left !== "undefined") {
            top = pos.top + offset.top;
            left = left + offset.left;
        }
        borders.top.css({
            top: Math.max(0, top - b),
            left: left - b,
            width: pos.width + b,
            height: b
        });
        borders.bottom.css({
            top: top + pos.height,
            left: left - b,
            width: pos.width + b,
            height: b
        });
        borders.left.css({
            top: top - b,
            left: Math.max(0, left - b),
            width: b,
            height: (pos.height + b)
        });
        borders.right.css({
            top: top - b,
            left: left + pos.width,
            width: b,
            height: (pos.height + (b * 2))
        });
    };
    //Utils
    ElementFinder.prototype._writeStylesheet = function (css) {
        var element = document.createElement("style");
        element.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(element);
        if (element.styleSheet) {
            element.styleSheet.cssText = css; // IE
        }
        else {
            element.innerHTML = css; // Non-IE
        }
    };
    ElementFinder.prototype._nameSpaceEvent = function (event) {
        return event + this.options.eventNamespace;
    };
    ElementFinder.prototype._isIgnorableElement = function (target) {
        //items specified as should be ignored or the highlight borders
        var ignoreContainer = document.getElementById(this.options.ignoreContainerFilter);
        if (ignoreContainer && ignoreContainer.contains(target) || target.classList.contains("element-finder-border")) {
            return true;
        }
        //tag type specific ignore rules
        var isIgnorable = false;
        switch ((target.tagName || "").toLowerCase()) {
            case "input":
                //inputs of type password
                isIgnorable = (target.type || "").toLowerCase() === "password";
                break;
            case "option":
                isIgnorable = true;
                break;
        }
        return isIgnorable;
    };
    //Default Options
    ElementFinder.defaultOptions = {
        elementNamespace: "element-finder-border",
        pubHubElement: "body",
        ignoreContainerFilter: "",
        eventNamespace: ".element-finder-event",
        keepBordersOnClick: false,
        onHoverFunction: false,
        onSelectedFunction: false,
        onHighlightFunction: false
    };
    return ElementFinder;
}());
exports.default = ElementFinder;


/***/ }),

/***/ "./src/core/Enums.ts":
/*!***************************!*\
  !*** ./src/core/Enums.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums;
(function (Enums) {
    //Used to describe the eventMap Type
    var EventTypes;
    (function (EventTypes) {
        EventTypes[EventTypes["Mapped"] = 1] = "Mapped";
        EventTypes[EventTypes["Unmapped"] = 2] = "Unmapped";
    })(EventTypes = Enums.EventTypes || (Enums.EventTypes = {}));
    //Used to describe the location where an eventMap is relevant
    var LocationTypes;
    (function (LocationTypes) {
        LocationTypes[LocationTypes["Site"] = 1] = "Site";
        LocationTypes[LocationTypes["Page"] = 2] = "Page";
    })(LocationTypes = Enums.LocationTypes || (Enums.LocationTypes = {}));
    //Used to describe the origin of an eventMap selector
    var SelectorTypes;
    (function (SelectorTypes) {
        SelectorTypes[SelectorTypes["Suggested"] = 1] = "Suggested";
        SelectorTypes[SelectorTypes["Custom"] = 2] = "Custom";
    })(SelectorTypes = Enums.SelectorTypes || (Enums.SelectorTypes = {}));
    var TransportCodes;
    (function (TransportCodes) {
        TransportCodes[TransportCodes["PubSubMirror"] = 1] = "PubSubMirror";
        TransportCodes[TransportCodes["FrameComm"] = 2] = "FrameComm";
        TransportCodes[TransportCodes["WalkthroughClickAudit"] = 3] = "WalkthroughClickAudit";
    })(TransportCodes = Enums.TransportCodes || (Enums.TransportCodes = {}));
    var ChurnZeroAppEvents;
    (function (ChurnZeroAppEvents) {
        //CoreEvents
        ChurnZeroAppEvents[ChurnZeroAppEvents["DIGEST"] = 1] = "DIGEST";
        ChurnZeroAppEvents[ChurnZeroAppEvents["HALT"] = 2] = "HALT";
        ChurnZeroAppEvents[ChurnZeroAppEvents["START"] = 3] = "START";
        //Panel Events
        ChurnZeroAppEvents[ChurnZeroAppEvents["PanelReady"] = 4] = "PanelReady";
        ChurnZeroAppEvents[ChurnZeroAppEvents["PanelShow"] = 5] = "PanelShow";
        ChurnZeroAppEvents[ChurnZeroAppEvents["PanelHide"] = 6] = "PanelHide";
        ChurnZeroAppEvents[ChurnZeroAppEvents["ChangePollInterval"] = 7] = "ChangePollInterval";
        ChurnZeroAppEvents[ChurnZeroAppEvents["AnnouncementClosed"] = 8] = "AnnouncementClosed";
        ChurnZeroAppEvents[ChurnZeroAppEvents["WalkthroughStart"] = 9] = "WalkthroughStart";
        ChurnZeroAppEvents[ChurnZeroAppEvents["SubframeRegistered"] = 10] = "SubframeRegistered";
    })(ChurnZeroAppEvents = Enums.ChurnZeroAppEvents || (Enums.ChurnZeroAppEvents = {}));
    //Commands issued between the Master and Sub Frames
    var FrameCommCodes;
    (function (FrameCommCodes) {
        FrameCommCodes[FrameCommCodes["SubframeBoot"] = 1001] = "SubframeBoot";
        FrameCommCodes[FrameCommCodes["SubframeBootResponse"] = 1002] = "SubframeBootResponse";
        FrameCommCodes[FrameCommCodes["SubFramePassback"] = 1003] = "SubFramePassback";
        FrameCommCodes[FrameCommCodes["MasterFrameComRePublish"] = 1004] = "MasterFrameComRePublish";
        FrameCommCodes[FrameCommCodes["MasterFramePassdown"] = 1005] = "MasterFramePassdown"; //master frame sends something down to subframes
    })(FrameCommCodes = Enums.FrameCommCodes || (Enums.FrameCommCodes = {}));
    var DevlessEvents;
    (function (DevlessEvents) {
        DevlessEvents[DevlessEvents["DevlessInit"] = 2001] = "DevlessInit";
        DevlessEvents[DevlessEvents["DevlessConnectionInfo"] = 2002] = "DevlessConnectionInfo";
        DevlessEvents[DevlessEvents["DevlessShow"] = 2003] = "DevlessShow";
        DevlessEvents[DevlessEvents["DevlessHide"] = 2004] = "DevlessHide";
        DevlessEvents[DevlessEvents["DevlessResize"] = 2005] = "DevlessResize";
        DevlessEvents[DevlessEvents["DevlessIframeResized"] = 2006] = "DevlessIframeResized";
        DevlessEvents[DevlessEvents["DevlessElementExistsCheck"] = 2007] = "DevlessElementExistsCheck";
        DevlessEvents[DevlessEvents["DevlessElementExistsCheckResponse"] = 2008] = "DevlessElementExistsCheckResponse";
        DevlessEvents[DevlessEvents["DevlessCurrentHref"] = 2009] = "DevlessCurrentHref";
        DevlessEvents[DevlessEvents["DevlessCurrentHrefResponse"] = 2010] = "DevlessCurrentHrefResponse";
        DevlessEvents[DevlessEvents["DevlessPush"] = 2011] = "DevlessPush";
        DevlessEvents[DevlessEvents["ElementFinderStart"] = 2012] = "ElementFinderStart";
        DevlessEvents[DevlessEvents["ElementFinderStop"] = 2013] = "ElementFinderStop";
        DevlessEvents[DevlessEvents["ElementFinderElementSelected"] = 2014] = "ElementFinderElementSelected";
        DevlessEvents[DevlessEvents["ElementFinderHoverUpdate"] = 2015] = "ElementFinderHoverUpdate";
        DevlessEvents[DevlessEvents["ElementFinderHighlightElement"] = 2016] = "ElementFinderHighlightElement";
        DevlessEvents[DevlessEvents["ElementFinderElementHighlighted"] = 2017] = "ElementFinderElementHighlighted";
        DevlessEvents[DevlessEvents["EditorSet"] = 2018] = "EditorSet";
        DevlessEvents[DevlessEvents["EditorChanged"] = 2019] = "EditorChanged";
    })(DevlessEvents = Enums.DevlessEvents || (Enums.DevlessEvents = {}));
    //negative values are clientside only
    var SocketMessageTypes;
    (function (SocketMessageTypes) {
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_DISCONNECT"] = -2] = "SOCKETMESSAGETYPE_DISCONNECT";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_INITIAL_CONNECTION"] = -1] = "SOCKETMESSAGETYPE_INITIAL_CONNECTION";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_ANNOUNCEMENT"] = 1] = "SOCKETMESSAGETYPE_ANNOUNCEMENT";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_USER_ACCOUNT_ALERT"] = 5] = "SOCKETMESSAGETYPE_USER_ACCOUNT_ALERT";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_TRACK_EVENT"] = 6] = "SOCKETMESSAGETYPE_TRACK_EVENT";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_SET_ATTRIBUTE"] = 7] = "SOCKETMESSAGETYPE_SET_ATTRIBUTE";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_IS_ACTIVE"] = 8] = "SOCKETMESSAGETYPE_IS_ACTIVE";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_MESSAGE_READ"] = 9] = "SOCKETMESSAGETYPE_MESSAGE_READ";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_MESSAGE_CLICKED"] = 10] = "SOCKETMESSAGETYPE_MESSAGE_CLICKED";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_CHECK_ONLINE"] = 11] = "SOCKETMESSAGETYPE_CHECK_ONLINE";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_CHECK_ONLINE_RESULT"] = 12] = "SOCKETMESSAGETYPE_CHECK_ONLINE_RESULT";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_UPDATE_APP_VERSION"] = 13] = "SOCKETMESSAGETYPE_UPDATE_APP_VERSION";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_EXPIRE_MESSAGE"] = 14] = "SOCKETMESSAGETYPE_EXPIRE_MESSAGE";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_CHECK_EVENT_MAP_CONFIG_VERSION"] = 15] = "SOCKETMESSAGETYPE_CHECK_EVENT_MAP_CONFIG_VERSION";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_REFRESH_EVENT_MAP_CONFIG"] = 16] = "SOCKETMESSAGETYPE_REFRESH_EVENT_MAP_CONFIG";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_TIME_IN_APP"] = 17] = "SOCKETMESSAGETYPE_TIME_IN_APP";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_CheckWalkthroughConfigVersion"] = 18] = "SOCKETMESSAGETYPE_CheckWalkthroughConfigVersion";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_RefreshWalkthroughConfig"] = 19] = "SOCKETMESSAGETYPE_RefreshWalkthroughConfig";
        SocketMessageTypes[SocketMessageTypes["SOCKETMESSAGETYPE_WalkthroughAction"] = 20] = "SOCKETMESSAGETYPE_WalkthroughAction"; //outgoing
    })(SocketMessageTypes = Enums.SocketMessageTypes || (Enums.SocketMessageTypes = {}));
    var AnnouncementPosition;
    (function (AnnouncementPosition) {
        AnnouncementPosition[AnnouncementPosition["PanelOnly"] = 1] = "PanelOnly";
        AnnouncementPosition[AnnouncementPosition["PopUp"] = 2] = "PopUp";
        AnnouncementPosition[AnnouncementPosition["SlideBottomCenter"] = 3] = "SlideBottomCenter";
        AnnouncementPosition[AnnouncementPosition["SlideLeftBottom"] = 4] = "SlideLeftBottom";
        AnnouncementPosition[AnnouncementPosition["SlideTopLeft"] = 5] = "SlideTopLeft";
        AnnouncementPosition[AnnouncementPosition["SlideTopCenter"] = 6] = "SlideTopCenter";
        AnnouncementPosition[AnnouncementPosition["SlideTopRight"] = 7] = "SlideTopRight";
        AnnouncementPosition[AnnouncementPosition["SlideBottomLeft"] = 8] = "SlideBottomLeft";
        AnnouncementPosition[AnnouncementPosition["SlideBottomRight"] = 9] = "SlideBottomRight";
        AnnouncementPosition[AnnouncementPosition["SlideLeftTop"] = 10] = "SlideLeftTop";
        AnnouncementPosition[AnnouncementPosition["SlideLeftCenter"] = 11] = "SlideLeftCenter";
        AnnouncementPosition[AnnouncementPosition["SlideRightTop"] = 12] = "SlideRightTop";
        AnnouncementPosition[AnnouncementPosition["SlideRightCenter"] = 13] = "SlideRightCenter";
        AnnouncementPosition[AnnouncementPosition["SlideRightBottom"] = 14] = "SlideRightBottom";
        AnnouncementPosition[AnnouncementPosition["Tooltip"] = 15] = "Tooltip";
    })(AnnouncementPosition = Enums.AnnouncementPosition || (Enums.AnnouncementPosition = {}));
    var ContainerType;
    (function (ContainerType) {
        ContainerType[ContainerType["Body"] = 1] = "Body";
        ContainerType[ContainerType["Parent"] = 2] = "Parent";
    })(ContainerType = Enums.ContainerType || (Enums.ContainerType = {}));
    var TooltipPosition;
    (function (TooltipPosition) {
        TooltipPosition[TooltipPosition["Auto"] = 1] = "Auto";
        TooltipPosition[TooltipPosition["Top"] = 2] = "Top";
        TooltipPosition[TooltipPosition["Left"] = 3] = "Left";
        TooltipPosition[TooltipPosition["Bottom"] = 4] = "Bottom";
        TooltipPosition[TooltipPosition["Right"] = 5] = "Right";
    })(TooltipPosition = Enums.TooltipPosition || (Enums.TooltipPosition = {}));
    var WalkthroughActionType;
    (function (WalkthroughActionType) {
        WalkthroughActionType[WalkthroughActionType["Unknown"] = 0] = "Unknown";
        WalkthroughActionType[WalkthroughActionType["WalkthroughStarted"] = 1] = "WalkthroughStarted";
        WalkthroughActionType[WalkthroughActionType["StepStarted"] = 2] = "StepStarted";
        WalkthroughActionType[WalkthroughActionType["StepClicked"] = 3] = "StepClicked";
        WalkthroughActionType[WalkthroughActionType["StepCompleted"] = 4] = "StepCompleted";
        WalkthroughActionType[WalkthroughActionType["StepAbandonded"] = 5] = "StepAbandonded";
        WalkthroughActionType[WalkthroughActionType["WalkthroughCompleted"] = 6] = "WalkthroughCompleted";
        WalkthroughActionType[WalkthroughActionType["WalkthroughAbandoned"] = 7] = "WalkthroughAbandoned";
        WalkthroughActionType[WalkthroughActionType["WalkthroughResumed"] = 8] = "WalkthroughResumed";
    })(WalkthroughActionType = Enums.WalkthroughActionType || (Enums.WalkthroughActionType = {}));
})(Enums = exports.Enums || (exports.Enums = {}));


/***/ }),

/***/ "./src/core/EventSpider.ts":
/*!*********************************!*\
  !*** ./src/core/EventSpider.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/core/Enums.ts");
var errorLogger_1 = __importDefault(__webpack_require__(/*! ./errorLogger */ "./src/core/errorLogger.ts"));
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var tenant_service_1 = __webpack_require__(/*! ../services/tenant.service */ "./src/services/tenant.service.ts");
var EventSpider = /** @class */ (function () {
    function EventSpider(appSvc, tenantSvc, eventSvc, walkthroughSvc, windowSvc, commSvc, sessionSvc) {
        var _this = this;
        this.appSvc = appSvc;
        this.tenantSvc = tenantSvc;
        this.eventSvc = eventSvc;
        this.walkthroughSvc = walkthroughSvc;
        this.windowSvc = windowSvc;
        this.commSvc = commSvc;
        this.sessionSvc = sessionSvc;
        //subscribe to events
        this.startId = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.START, function () { return _this.onStart(); });
        this.digestId = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.DIGEST, function () { return _this.onDigest(); });
        this.haltId = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.HALT, function () { return _this.onHalt(); });
    }
    EventSpider.prototype.Stop = function () {
        this.onHalt();
    };
    EventSpider.prototype.onStart = function () {
        var _this = this;
        //wire up Update Mapped Events listener
        this.updateMappedEventHandlersId = this.commSvc.registerListener(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_REFRESH_EVENT_MAP_CONFIG, function (message) { return _this.updateMappedEventHandlers(message.info); });
        this.updateMappedWalkthroughsHandlersId = this.commSvc.registerListener(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_RefreshWalkthroughConfig, function (message) { return _this.updateMappedWalkthroughHandlers(message.info); });
        //start click tracking events
        this.trackMappedClicks();
    };
    EventSpider.prototype.onDigest = function () {
        //poll for eventmap updates
        this.eventSvc.RefreshEventMapConfig();
        //poll for walkthrough updates
        if (this.tenantSvc.FeatureEnabled(tenant_service_1.FeatureFlags.Walkthroughs)) {
            this.walkthroughSvc.RefreshWalkthroughConfig();
        }
    };
    EventSpider.prototype.onHalt = function () {
        console.log('Halting - Event Spider');
        //stop tracking events
        this.removeMappedClickHandlers();
        //unsubscribe
        if (this.updateMappedEventHandlersId) {
            this.updateMappedEventHandlersId.remove();
            this.updateMappedEventHandlersId = undefined;
        }
        if (this.updateMappedWalkthroughsHandlersId) {
            this.updateMappedWalkthroughsHandlersId.remove();
            this.updateMappedWalkthroughsHandlersId = undefined;
        }
        if (this.startId) {
            this.startId.remove();
            this.startId = null;
        }
        if (this.digestId) {
            this.digestId.remove();
            this.digestId = null;
        }
        if (this.haltId) {
            this.haltId.remove();
            this.haltId = null;
        }
    };
    //refresh the mapped event handlers
    EventSpider.prototype.updateMappedEventHandlers = function (data) {
        //short circuit
        if (this.eventSvc.eventMapVersion === data.eventMapVersion) {
            return;
        }
        this.appSvc.debug("Updated EventMap Config Received", data);
        //update the event services data
        this.eventSvc.LoadEventMapConfig(data);
        //stop old event handlers
        this.removeMappedClickHandlers();
        //restart event handlers
        this.trackMappedClicks();
    };
    //refresh the mapped event handlers
    EventSpider.prototype.updateMappedWalkthroughHandlers = function (data) {
        //short circuit
        if (this.walkthroughSvc.walkthroughsVersion === data.version) {
            return;
        }
        this.appSvc.debug("Updated Walkthrough Config Received", data);
        //update the event services data
        this.walkthroughSvc.LoadWalkthroughConfig(data);
        //stop old event handlers
        this.removeMappedClickHandlers();
        //restart event handlers
        this.trackMappedClicks();
    };
    /**************************
     *  Devless Event Tracking
     **************************/
    EventSpider.prototype.trackMappedClicks = function () {
        var _this = this;
        var relevantEvents = this.eventSvc.RelevantMappedEvents().all, relevantWalkthroughs = this.walkthroughSvc.GetClickWalkthroughs(), itemFilter, walkthroughFilter;
        //remove any preexisting handlers
        this.removeMappedClickHandlers();
        if (relevantEvents.length > 0 || relevantWalkthroughs.length > 0) {
            itemFilter = clientlibs_1.CoreUtils.concatEventMapSelectors(relevantEvents);
            walkthroughFilter = clientlibs_1.CoreUtils.concatWalkthroughSelectors(relevantWalkthroughs);
            this.boundEventClickHandler = function (e) {
                try {
                    var target = _this.windowSvc.czq(e.target);
                    if (itemFilter && target.is(itemFilter)) {
                        e['data'] = relevantEvents;
                        _this.mappedEventClickHandler(e);
                    }
                    if (walkthroughFilter && target.is(walkthroughFilter)) {
                        e['data'] = relevantWalkthroughs;
                        _this.walkthroughClickHandler(e);
                    }
                }
                catch (ex) {
                    //report?
                    errorLogger_1.default.report('EventSpider.boundEventClickHandler', ex);
                }
            };
            this.windowSvc.elementCache.document.get(0).addEventListener('click', this.boundEventClickHandler, true);
        }
    };
    EventSpider.prototype.removeMappedClickHandlers = function () {
        this.windowSvc.elementCache.document.get(0).removeEventListener('click', this.boundEventClickHandler, true);
        this.boundEventClickHandler = null;
        this.windowSvc.elementCache.document.off('click.mappedEvents');
    };
    EventSpider.prototype.mappedEventClickHandler = function (evt) {
        var _this = this;
        var allEventMaps = evt.data;
        if (allEventMaps && allEventMaps.length > 0) {
            var target_1 = this.windowSvc.czq(evt.target);
            allEventMaps.forEach(function (eventMap) {
                var doesLocationMatch = _this.checkEventMapMatchesCurrentUrl(eventMap), selector = clientlibs_1.CoreUtils.buildEventMapSelector(eventMap), doesSelectorMatch = target_1.is(selector);
                if (doesSelectorMatch && doesLocationMatch) {
                    evt.WasMapped = true;
                    var a = _this.buildEventArrayFromEventMap(eventMap);
                    _this.appSvc.debug('[Devless Event Mapping]', a);
                    _this.eventSvc.TrackEvent.apply(_this.eventSvc, a);
                }
            });
        }
    };
    EventSpider.prototype.walkthroughClickHandler = function (evt) {
        var _this = this;
        var allClickWalkthroughs = evt.data;
        if (allClickWalkthroughs && allClickWalkthroughs.length > 0) {
            var target_2 = this.windowSvc.czq(evt.target);
            allClickWalkthroughs.forEach(function (walkthrough) {
                if (walkthrough.pageTag && walkthrough.pageTag.disabled) {
                    return;
                }
                var doesLocationMatch = _this.checkLocationMatchesCurrentUrl(walkthrough.pageTag), selector = clientlibs_1.CoreUtils.buildEventMapSelector(walkthrough.triggerConfig), doesSelectorMatch = target_2.is(selector);
                if (doesSelectorMatch && doesLocationMatch) {
                    evt.WasMapped = true;
                    _this.appSvc.debug('[Devless Walkthrough Mapping]', walkthrough);
                    //dont track events or engage walkthroughs if the devless panel enabled
                    if (_this.sessionSvc.ShouldPreventUsageSends) {
                        return;
                    }
                    _this.appSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.WalkthroughStart, walkthrough);
                }
            });
        }
    };
    /** Devless Event Tracking Helpers **/
    EventSpider.prototype.buildEventArrayFromEventMap = function (e) {
        var tempEventArray = [e.eventName], element, text;
        if (e.descriptionSelector) {
            element = this.windowSvc.czq(e.descriptionSelector);
            if (element.length > 0) {
                text = clientlibs_1.CoreUtils.getTextFromElement(element);
                tempEventArray = tempEventArray.concat([text]);
            }
        }
        element = text = null;
        if (e.quantitySelector) {
            element = this.windowSvc.czq(e.quantitySelector);
            if (element.length > 0) {
                text = clientlibs_1.CoreUtils.getIntFromElement(element);
                if (tempEventArray.length === 1) {
                    tempEventArray = tempEventArray.concat([null]);
                }
                tempEventArray = tempEventArray.concat([text]);
            }
        }
        return tempEventArray;
    };
    EventSpider.prototype.checkEventMapMatchesCurrentUrl = function (eventMap) {
        return (eventMap.locationTypeId === Enums_1.Enums.LocationTypes.Site || (eventMap.locationTypeId === Enums_1.Enums.LocationTypes.Page && (eventMap.location || this.windowSvc.href()) === this.windowSvc.href()));
    };
    EventSpider.prototype.checkLocationMatchesCurrentUrl = function (pageTag) {
        var regExString = clientlibs_1.CoreUtils.Urls.buildRegexFromLocationParts(pageTag.location, clientlibs_1.LocationOptions.fromJson(pageTag.locationOptionsJson));
        var regEx = new RegExp(regExString);
        return this.windowSvc.href().match(regEx);
    };
    return EventSpider;
}());
exports.default = EventSpider;


/***/ }),

/***/ "./src/core/HashHandler.ts":
/*!*********************************!*\
  !*** ./src/core/HashHandler.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HashHandler = /** @class */ (function () {
    function HashHandler(onChangeEvent, stopOnChange, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 100; }
        this.oldHash = window.location.hash;
        this.onChangeEvent = onChangeEvent;
        this.stopOnChange = stopOnChange;
        this.Check = window.setInterval(function () {
            try {
                _this.detect();
            }
            catch (ex) {
                //meh
            }
        }, timeout);
    }
    HashHandler.prototype.detect = function () {
        if (this.oldHash !== window.location.hash) {
            console.log("Hash Changed");
            this.onChangeEvent();
            if (this.stopOnChange) {
                this.Stop();
            }
            this.oldHash = window.location.hash;
        }
    };
    HashHandler.prototype.Stop = function () {
        if (this.Check) {
            window.clearInterval(this.Check);
            this.Check = null;
        }
    };
    return HashHandler;
}());
exports.default = HashHandler;


/***/ }),

/***/ "./src/core/Herald.ts":
/*!****************************!*\
  !*** ./src/core/Herald.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/core/Enums.ts");
var PubSuber_1 = __importDefault(__webpack_require__(/*! ./PubSuber */ "./src/core/PubSuber.ts"));
var errorLogger_1 = __importDefault(__webpack_require__(/*! ./errorLogger */ "./src/core/errorLogger.ts"));
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var Herald = /** @class */ (function () {
    function Herald(appSvc, tenantSvc, sessionSvc, messageSvc, walkthroughSvc, windowSvc, commSvc) {
        this.appSvc = appSvc;
        this.tenantSvc = tenantSvc;
        this.sessionSvc = sessionSvc;
        this.messageSvc = messageSvc;
        this.walkthroughSvc = walkthroughSvc;
        this.windowSvc = windowSvc;
        this.commSvc = commSvc;
        this.subIds = {};
        this.seenWalkthroughIds = [];
        this.lastShownAnnouncementDate = null;
        //walkthroughs
        this.currentWalkthrough = undefined;
        this.currentWalkthroughStep = undefined;
        this.walkthroughPopupClass = "cz-walk-popup";
        this.walkthroughPopupContentClass = "cz-walk-popup-content";
        this.walkthroughSliderClass = "cz-walk-slider";
        this.walkthroughSliderContainerClass = "cz-walk-slider-container";
        this.walkthroughSliderContentClass = "cz-walk-slider-content";
        //tooltips
        this.tooltipClass = "cz-walk-tooltip-container";
        this.tooltipContentClass = "cz-walk-tooltip-container-content";
        this.callToActionContainerClass = "cz-walk-cta-container";
        this.callToActionButtonClass = "cz-walk-cta-button";
        this.overAnnouncementiFrame = -1;
        this.overWalkthroughiFrame = -1;
        this.defaultTestMessageContent = "<p><em>This is a test message</em></p>";
        this.onStartWalkthrough = this.onStartWalkthrough.bind(this);
        this.TestAnnouncement = this.TestAnnouncement.bind(this);
        this.UpdateAnnouncement = this.UpdateAnnouncement.bind(this);
        this.HideAnyAnnouncement = this.HideAnyAnnouncement.bind(this);
        this.AnnouncementLinkClickHandler = this.AnnouncementLinkClickHandler.bind(this);
        this.CloseSliderClickHandler = this.CloseSliderClickHandler.bind(this);
        this.ShowNPSClickHandler = this.ShowNPSClickHandler.bind(this);
        this.CompletelyAbandonAnyCurrentWalkthrough = this.CompletelyAbandonAnyCurrentWalkthrough.bind(this);
        this.onInit();
    }
    Object.defineProperty(Herald.prototype, "templateCache", {
        //private walkthroughQueue = [];
        get: function () {
            return this.windowSvc.ChurnZero.templateCache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Herald.prototype, "popupDiv", {
        //popups
        get: function () {
            return this.windowSvc.document.getElementById("cz_popover");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Herald.prototype, "popupContainer", {
        get: function () {
            return this.windowSvc.document.getElementById("cz_popover_content");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Herald.prototype, "sliderContainer", {
        //sliders
        get: function () {
            return this.windowSvc.czq(".cz-slide-announcement");
        },
        enumerable: true,
        configurable: true
    });
    /* Lifecycle Hooks */
    Herald.prototype.onInit = function () {
        var _this = this;
        //if the panel is silenced exit now
        if (this.sessionSvc.IsSilent) {
            console.info("Silent Mode");
            return;
        }
        this.addPopOverDiv();
        this.checkForLastAdvancedDisplayAnnouncement();
        //subscribe to events
        //this.subIds["startId"] = this.appSvc.pubsub.subscribe(Enums.ChurnZeroAppEvents.START, () => this.onStart());
        this.subIds["digestId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.DIGEST, function () { return _this.onDigest(); });
        this.subIds["haltId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.HALT, function () { return _this.onHalt(); });
        this.subIds["walkthroughId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.WalkthroughStart, function (message) { return _this.onStartWalkthrough(message.info); });
        //set up socket for incoming announcements
        this.subIds["announcementListenerId"] = this.commSvc.registerListener(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_ANNOUNCEMENT, function (message) {
            console.info("announcement received");
            _this.createNewAnnouncement(message.info);
        });
        //set up socket for expire notifications
        this.subIds["expireListenerId"] = this.commSvc.registerListener(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_EXPIRE_MESSAGE, function (message) {
            console.info("expire message received", message.info);
            _this.expireAnnouncement(message.info);
        });
        //add event handler for closing popups
        this.windowSvc.elementCache.body.on(this.windowSvc.namespaceEvent("click"), ".cz-close-popover-trigger", function (e) {
            try {
                var target = _this.windowSvc.czq(e.currentTarget);
                var announcementCont = target.closest(".cz-popover");
                var announcement = announcementCont.find(".cz-announcement");
                if (announcement.length === 0) {
                    announcement = announcementCont.find("#cz_nps_frame");
                }
                var showMessageBubble = (announcement.attr("data-info-message") || "true").toLowerCase() === "true";
                _this.closePopUpAnnouncement();
                if (showMessageBubble) {
                    _this.announceClosure(_this.sessionSvc.CurrentAccountContent.clickToSeeMoreText);
                }
                _this.onAdvancedDisplayClose();
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report("Herald.closePopoverEvent", ex);
            }
        });
        //add event handler for closing slider announcements
        this.windowSvc.elementCache.body.on(this.windowSvc.namespaceEvent("click"), ".cz-close-announcement", this.CloseSliderClickHandler);
        //add event handler for showing nps popup
        // announcementNpsTemplate.html || announcementNpsTemplatePanel.html
        this.windowSvc.elementCache.body.on(this.windowSvc.namespaceEvent("click"), ".cz-nps-click", this.ShowNPSClickHandler);
        //event handler for when announcements/messages that contain a link are clicked
        this.windowSvc.elementCache.body.on(this.windowSvc.namespaceEvent("click"), ".cz-click-audit a", this.AnnouncementLinkClickHandler);
        //attach listener for any messages posted from ChurnZero
        this.boundwalkthroughClickAuditHandler = clientlibs_1.iFrameUtils.attachTransportMessageListener(this.windowSvc.window, "*", function (transportMessage) {
            switch (transportMessage.code) {
                case clientlibs_1.TransportCodes.WalkthroughClickAudit:
                    _this.walkthroughMessageClicked(transportMessage.data);
                    break;
            }
        }, null, function (ex, e) {
            errorLogger_1.default.report("iFrameUtils.attachTransportMessageListener at Herald.ts", ex, (e.data || "e.data is falsy").toString());
        });
        this.windowSvc.elementCache.body
            .on(this.windowSvc.namespaceEvent("mouseenter"), ".cz-click-audit .fr-video iframe", function (e) {
            var auditContainer = _this.windowSvc.czq(e.currentTarget).closest(".cz-click-audit");
            //if there is no audit container then bailout
            if (!auditContainer || auditContainer.length === 0) {
                return;
            }
            var messageId = auditContainer.attr("data-message-id");
            if (messageId) {
                _this.overAnnouncementiFrame = messageId;
            }
            if (_this.currentWalkthroughStep && !_this.currentWalkthroughStep["testing"]) {
                _this.overWalkthroughiFrame = {
                    wId: _this.currentWalkthroughStep.walkthroughId,
                    sId: _this.currentWalkthroughStep.id
                };
            }
        })
            .on(this.windowSvc.namespaceEvent("mouseleave"), ".cz-click-audit .fr-video iframe", function () {
            _this.overAnnouncementiFrame = -1;
            _this.overWalkthroughiFrame = -1;
        });
        this.windowSvc.elementCache.window.on(this.windowSvc.namespaceEvent("blur"), function () {
            if (_this.overAnnouncementiFrame !== -1) {
                _this.messageClicked(_this.overAnnouncementiFrame);
            }
            if (_this.overWalkthroughiFrame !== -1) {
                _this.walkthroughMessageClicked(_this.overWalkthroughiFrame);
            }
            if (_this.currentWalkthroughStep) {
                _this.popupContainer.querySelectorAll("iframe").forEach(function (iframe) {
                    iframe.contentWindow.postMessage("czCodeBlur", "*");
                });
                _this.sliderContainer.find("iframe").each(function (i, iframe) {
                    iframe.contentWindow.postMessage("czCodeBlur", "*");
                });
                _this.windowSvc.elementCache.body.find(".cz-walk-tooltip-container iframe").each(function (i, iframe) {
                    iframe.contentWindow.postMessage("czCodeBlur", "*");
                });
            }
        });
        //attempt to record that the current walkthrough was abandoned
        this.windowSvc.elementCache.window.on(this.windowSvc.namespaceEvent("beforeunload"), function () {
            if (_this.currentWalkthroughStep) {
                _this.endWalkthroughStep(false, "Abandoned");
            }
            if (_this.currentWalkthrough) {
                _this.endWalkthrough(true);
            }
        });
    };
    Herald.prototype.onDigest = function () {
    };
    Herald.prototype.onHalt = function () {
        console.log("Halting - Herald");
        PubSuber_1.default.removeAll(this.subIds);
        this.windowSvc.window.removeEventListener("message", this.boundwalkthroughClickAuditHandler);
        this.CompletelyAbandonAnyCurrentWalkthrough();
        //remove all injected HTML
        this.windowSvc.elementCache.body.find(".cz-tooltip-container").remove();
        this.windowSvc.elementCache.body.find("#cz_transBG").remove();
        this.popoverDivLoaded = false;
    };
    /* Event Handlers */
    Herald.prototype.onStartWalkthrough = function (walkthrough) {
        //ignore disabled walkthroughs
        if (!walkthrough["testing"] && walkthrough.disabled) {
            return;
        }
        //dont show onetime walkthroughs more than once
        if (!walkthrough["testing"] && !walkthrough.recurrence && walkthrough.id && this.seenWalkthroughIds.indexOf(walkthrough.id) !== -1) {
            return;
        }
        //only allow one walkthrough at a time
        if (this.currentWalkthrough) {
            this.appSvc.debug("[Devless Walkthrough Prevented (Another In Progress)]", walkthrough);
            return;
        }
        if (this.announcementVisible === true) {
            this.appSvc.debug("[Devless Walkthrough Prevented (In-App Announcement Visible)]", walkthrough);
            //this.walkthroughQueue.push(walkthrough);
            return;
        }
        //stash the current walkthrough
        this.currentWalkthrough = walkthrough;
        if (!this.currentWalkthrough["testing"] && this.currentWalkthrough.id) {
            this.seenWalkthroughIds.push(this.currentWalkthrough.id);
        }
        this.appSvc.debug("[Devless Walkthrough Started]", this.currentWalkthrough);
        if (this.currentWalkthrough && !this.currentWalkthrough["testing"] && this.currentWalkthrough.id) {
            this.walkthroughSvc.SendActionMessage(Enums_1.Enums.WalkthroughActionType.WalkthroughStarted, this.currentWalkthrough.id);
        }
        //if there are no steps then bail out
        if (!this.currentWalkthrough.steps || this.currentWalkthrough.steps.length === 0) {
            this.endWalkthrough(false);
            return;
        }
        var step = this.currentWalkthrough.steps[0];
        this.doWalkthroughStep(step);
    };
    Herald.prototype.ReplayAnnouncement = function (id) {
        var message = null;
        var announcements = this.messageSvc.Announcements;
        for (var i = 0; i < announcements.length; i++) {
            if (announcements[i].id === id) {
                message = announcements[i];
                message.isReplay = true;
                i = announcements.length + 1;
            }
        }
        if (message && this.messageSvc.isAdvancedDisplayAnnouncement(message)) {
            this.addAdvancedDisplayAnnouncement(message);
        }
    };
    Herald.prototype.TestAnnouncement = function (type, message, includeInPanel, config) {
        this.HideAnyAnnouncement();
        var baseMessage = {
            messageKey: -1 * this.windowSvc.Date.now(),
            isRead: false,
            deliveryDate: this.windowSvc.Date.now(),
            announcementIncludeInPanel: (includeInPanel === true),
            announcementIncludeInPanelString: (includeInPanel === true).toString(),
            id: -1,
            announcementPositionId: Enums_1.Enums.AnnouncementPosition.PopUp,
            messageContent: "" + (message || this.defaultTestMessageContent)
        };
        if (baseMessage.messageContent.charAt(0) !== "<") {
            baseMessage.messageContent = "<p>" + baseMessage.messageContent + "</p>";
        }
        if (typeof message === 'object') {
            baseMessage['messageData'] = message;
            delete baseMessage.messageContent;
        }
        if (config) {
            config["testing"] = true;
        }
        switch (type) {
            case Enums_1.Enums.AnnouncementPosition.PopUp:
                if (config) {
                    this.showWalkthroughPopup(baseMessage.messageContent, config);
                }
                else {
                    this.createNewAnnouncement(baseMessage);
                }
                break;
            case Enums_1.Enums.AnnouncementPosition.SlideBottomRight:
            case Enums_1.Enums.AnnouncementPosition.SlideBottomCenter:
            case Enums_1.Enums.AnnouncementPosition.SlideBottomLeft:
            case Enums_1.Enums.AnnouncementPosition.SlideLeftBottom:
            case Enums_1.Enums.AnnouncementPosition.SlideLeftCenter:
            case Enums_1.Enums.AnnouncementPosition.SlideLeftTop:
            case Enums_1.Enums.AnnouncementPosition.SlideTopLeft:
            case Enums_1.Enums.AnnouncementPosition.SlideTopCenter:
            case Enums_1.Enums.AnnouncementPosition.SlideTopRight:
            case Enums_1.Enums.AnnouncementPosition.SlideRightTop:
            case Enums_1.Enums.AnnouncementPosition.SlideRightCenter:
            case Enums_1.Enums.AnnouncementPosition.SlideRightBottom:
                if (config) {
                    this.showWalkthroughSlider(baseMessage.messageContent, config);
                }
                else {
                    baseMessage.announcementPositionId = type;
                    this.createNewAnnouncement(baseMessage);
                }
                break;
            case Enums_1.Enums.AnnouncementPosition.PanelOnly:
                baseMessage.announcementIncludeInPanel = true;
                baseMessage.announcementIncludeInPanelString = "true";
                baseMessage.announcementPositionId = Enums_1.Enums.AnnouncementPosition.PanelOnly;
                this.createNewAnnouncement(baseMessage);
                break;
            case Enums_1.Enums.AnnouncementPosition.Tooltip:
                this.showTooltip(message || this.defaultTestMessageContent, config);
                break;
        }
    };
    Herald.prototype.UpdateAnnouncement = function (type, message, includeInPanel, config) {
        switch (type) {
            case Enums_1.Enums.AnnouncementPosition.PopUp:
                if (this.popupContainer) {
                    this.popupContainer.innerHTML = message;
                }
                break;
            case Enums_1.Enums.AnnouncementPosition.SlideBottomRight:
            case Enums_1.Enums.AnnouncementPosition.SlideBottomCenter:
            case Enums_1.Enums.AnnouncementPosition.SlideBottomLeft:
            case Enums_1.Enums.AnnouncementPosition.SlideLeftBottom:
            case Enums_1.Enums.AnnouncementPosition.SlideLeftCenter:
            case Enums_1.Enums.AnnouncementPosition.SlideLeftTop:
            case Enums_1.Enums.AnnouncementPosition.SlideTopLeft:
            case Enums_1.Enums.AnnouncementPosition.SlideTopCenter:
            case Enums_1.Enums.AnnouncementPosition.SlideTopRight:
            case Enums_1.Enums.AnnouncementPosition.SlideRightTop:
            case Enums_1.Enums.AnnouncementPosition.SlideRightCenter:
            case Enums_1.Enums.AnnouncementPosition.SlideRightBottom:
                this.closeSlider();
                this.showWalkthroughSlider(message || this.defaultTestMessageContent, config);
                break;
            case Enums_1.Enums.AnnouncementPosition.PanelOnly:
                // baseMessage.announcementIncludeInPanel = true;
                // baseMessage.announcementIncludeInPanelString = "true";
                // baseMessage.announcementPositionId = Enums.AnnouncementPosition.PanelOnly;
                // this.createNewAnnouncement(baseMessage);
                break;
            case Enums_1.Enums.AnnouncementPosition.Tooltip:
                this.closeTooltips();
                this.showTooltip(message || this.defaultTestMessageContent, config);
                break;
        }
    };
    //Hide any visible announcement
    Herald.prototype.HideAnyAnnouncement = function () {
        this.closePopUpAnnouncement();
        this.closeSlider();
        this.closeTooltips();
    };
    Herald.prototype.TestWalkthrough = function (walkthrough) {
        walkthrough = clientlibs_1.Walkthrough.fromObject(walkthrough);
        walkthrough["testing"] = true;
        this.HideAnyAnnouncement();
        this.onStartWalkthrough(walkthrough);
    };
    Herald.prototype.CompletelyAbandonAnyCurrentWalkthrough = function () {
        this.HideAnyAnnouncement();
        if (this.currentWalkthroughStep) {
            this.endWalkthroughStep(false, "Abandoned");
        }
        if (this.currentWalkthrough) {
            this.endWalkthrough(true);
        }
    };
    Herald.prototype.AnnouncementLinkClickHandler = function (e) {
        try {
            var auditContainer = this.windowSvc.czq(e.currentTarget).closest(".cz-click-audit");
            //if there is no audit container then bailout
            if (!auditContainer || auditContainer.length === 0) {
                return;
            }
            var messageId = auditContainer.attr("data-message-id");
            this.messageClicked(messageId);
        }
        catch (ex) {
            //report?
            errorLogger_1.default.report("Herald.auditClick", ex);
        }
    };
    Herald.prototype.CloseSliderClickHandler = function (e) {
        try {
            var target = this.windowSvc.czq(e.currentTarget);
            var announcementCont = target.closest(".cz-slide-announcement"); //announcementSliderTemplate.html
            var announcement = announcementCont.find(".cz-announcement"); //announcementTemplate.html || announcementNpsTemplate.html
            if (announcement.length === 0) {
                announcement = announcementCont.find("#cz_nps_frame");
            }
            var showMessageBubble = (announcement.attr("data-info-message") || "true").toLowerCase() === "true";
            this.closeSlider();
            if (showMessageBubble) {
                this.announceClosure(this.sessionSvc.CurrentAccountContent.clickToSeeMoreText);
            }
            this.onAdvancedDisplayClose();
        }
        catch (ex) {
            //report?
            errorLogger_1.default.report("Herald.closeAnnouncementEvent", ex);
        }
    };
    Herald.prototype.ShowNPSClickHandler = function (e) {
        try {
            this.closeSlider();
            var target = this.windowSvc.czq(e.currentTarget);
            var url = target.attr("data-nps-url");
            var announcement = target.closest(".cz-announcement");
            var showMessageBubble = (announcement.attr("data-info-message") || "true").toLowerCase() === "true";
            this.showNPSPopup(url, showMessageBubble);
        }
        catch (ex) {
            //report?
            errorLogger_1.default.report("Herald.npsClickEvent", ex);
        }
    };
    /* Announcement & Popup Functionality */
    //Entry point for Announcements workflow
    Herald.prototype.createNewAnnouncement = function (message) {
        var addToUI = this.messageSvc.AddNewAnnouncement(message);
        if (addToUI) {
            //take special actions for other message types
            if (this.messageSvc.isAdvancedDisplayAnnouncement(message)) {
                this.addAdvancedDisplayAnnouncement(message);
            }
        }
    };
    Herald.prototype.announceClosure = function (infoMessage) {
        this.appSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.AnnouncementClosed, infoMessage);
    };
    //send click audit for messages
    Herald.prototype.messageClicked = function (id) {
        this.appSvc.debug("[Click Audit]");
        //if there is no Id then bailout
        if (!id || (id || "").trim().length === 0) {
            return;
        }
        this.messageSvc.SendReadReceipt(id);
        console.log("Announcement Clicked: ", id);
        this.messageSvc.SendClickAudit(id);
    };
    Herald.prototype.walkthroughMessageClicked = function (clickAuditData) {
        this.appSvc.debug("[Devless Walkthrough Click Audit]");
        //if there is no Id then bailout
        if (!clickAuditData) {
            return;
        }
        var action = Enums_1.Enums.WalkthroughActionType.StepClicked;
        this.walkthroughSvc.SendActionMessage(action, clickAuditData.wId, clickAuditData.sId);
    };
    Herald.prototype.expireAnnouncement = function (message) {
        this.messageSvc.ExpireAnnouncement(message);
        //this.adjustPanelFooter();
    };
    //validate that the non panel only announcements can be displayed right now
    Herald.prototype.validateAdvancedAnnouncementDisplay = function (announcement) {
        if (!announcement.announcementPositionId || announcement.announcementPositionId < Enums_1.Enums.AnnouncementPosition.PopUp) {
            console.log("No announcementPositionId or it is panel only");
            return false;
        }
        if (this.announcementVisible === true) {
            console.log("Another announcement has been shown");
            return false;
        }
        if (announcement.isReplay === true) {
            return true;
        }
        if (this.lastShownAnnouncementDate && (announcement.deliveryDate.getTime() < this.lastShownAnnouncementDate.getTime())) {
            console.log("Announcement is old");
            return false;
        }
        if (announcement.isRead === true) {
            console.log("Announcement has already been read");
            return false;
        }
        return true;
    };
    /**
     * Add Popup, Slider, or NPS to the UI
     * @param announcement
     */
    Herald.prototype.addAdvancedDisplayAnnouncement = function (announcement) {
        var isValid = this.validateAdvancedAnnouncementDisplay(announcement);
        if (!isValid) {
            return;
        }
        var isNpsAnnouncement = this.messageSvc.isNPSAnnouncement(announcement);
        if (announcement.announcementPositionId === Enums_1.Enums.AnnouncementPosition.PopUp) {
            if (isNpsAnnouncement) {
                this.showNPSPopup(announcement.messageData.responseUrl, announcement.showInfoMessageString);
            }
            else {
                var messageHtml = this.appSvc.templater.populateTemplate(this.templateCache.announcementTemplate, announcement);
                this.showPopUpAnnouncement(messageHtml);
            }
        }
        else if (announcement.announcementPositionId > Enums_1.Enums.AnnouncementPosition.PopUp) {
            //Slider Announcements
            if (isNpsAnnouncement) {
                this.showNPSSlider(announcement);
            }
            else {
                this.showBasicSlider(announcement);
            }
        }
        this.lastShownAnnouncementDate = announcement.deliveryDate;
        this.messageSvc.SendReadReceipt(announcement.id);
    };
    /* Sliders */
    Herald.prototype.showSlider = function (messageHtml) {
        if (clientlibs_1.CoreUtils.isString(messageHtml)) {
            this.windowSvc.elementCache.body.append(messageHtml);
        }
        else {
            this.windowSvc.elementCache.body.get(0).appendChild(messageHtml);
        }
        this.announcementVisible = true;
    };
    Herald.prototype.showBasicSlider = function (announcement) {
        // we use the default announcement template
        var messageHtml = this.appSvc.templater.populateTemplate(this.templateCache.announcementTemplate, announcement);
        var announcementPositionClass = Herald.getAnnouncementPositionClassFromId(announcement.announcementPositionId);
        var sliderDiv = this.appSvc.templater.populateTemplate(this.templateCache.announcementSliderTemplate, {
            announcementPositionClass: announcementPositionClass,
            closeClass: "cz-close-announcement",
            messageHtml: messageHtml
        });
        this.showSlider(sliderDiv);
    };
    Herald.prototype.showNPSSlider = function (announcement) {
        var announcementPositionClass = Herald.getAnnouncementPositionClassFromId(announcement.announcementPositionId);
        announcementPositionClass += " cz-nps-announcement";
        announcement.NpsQuestion = announcement.messageData.question;
        announcement.NpsUrl = announcement.messageData.responseUrl;
        announcement.NpsLogoUrl = announcement.messageData.logoUrl;
        announcement.NpsLogoStyle = announcement.messageData.logoUrl ? '' : 'display: none';
        announcement.NpsLowScoreText = announcement.messageData.lowScoreText || 'Not at all likely';
        announcement.NpsHighScoreText = announcement.messageData.highScoreText || 'Extremely likely';
        //add the nps urls
        var valueParam = announcement.NpsUrl.indexOf('?') === -1 ? '?value=' : '&value=';
        for (var i = 1; i < 11; i++) {
            announcement["NpsUrl" + i] = announcement.NpsUrl + valueParam + i;
        }
        var messageHtml = this.appSvc.templater.populateTemplate(this.templateCache.announcementNpsTemplate, announcement);
        var sliderDiv = this.appSvc.templater.populateTemplate(this.templateCache.announcementSliderTemplate, {
            announcementPositionClass: announcementPositionClass,
            closeClass: "cz-close-announcement",
            messageHtml: messageHtml
        });
        this.showSlider(sliderDiv);
    };
    Herald.prototype.showWalkthroughSlider = function (content, config, clickAuditData) {
        var _this = this;
        var announcementPositionClass = Herald.getAnnouncementPositionClassFromId(config.position);
        var frame = this.windowSvc.document.createElement("div");
        frame.classList.add(this.walkthroughSliderContainerClass);
        frame.style.backgroundColor = config.backgroundColor;
        var sliderContentContainer = this.windowSvc.document.createElement("div");
        sliderContentContainer.classList.add(this.walkthroughSliderContentClass);
        sliderContentContainer.appendChild(this.buildContentiFrame(content, config, clickAuditData, undefined, 'slider'));
        frame.appendChild(sliderContentContainer);
        var tooltipContentCTA = this.buildCTAContainer(clientlibs_1.CoreUtils.extend({ borderRadius: 0 }, config), false);
        frame.appendChild(tooltipContentCTA);
        var sliderDiv = this.windowSvc.document.createElement("div");
        sliderDiv.classList.add("cz-slide-announcement");
        sliderDiv.classList.add(announcementPositionClass);
        sliderDiv.classList.add(this.walkthroughSliderClass);
        sliderDiv.innerHTML = "<span style='color:" + config.closeColor + "' class=\"cz-close-walk\"><i class=\"czi czi-times\"></i></span>";
        sliderDiv.appendChild(frame);
        this.showSlider(sliderDiv);
        setTimeout(function () {
            _this.boundTooltipCloseHandler = function (evt) {
                var isInCTA = _this.wasClickEventInCTA(evt);
                var isCloseHandle = _this.wasClickEventInWalkCloseButton(evt);
                if (!isInCTA && !isCloseHandle) {
                    return;
                }
                _this.closeWalkthroughSlider(isInCTA);
            };
            _this.windowSvc.elementCache.body.on(_this.windowSvc.namespaceEvent("click"), _this.boundTooltipCloseHandler);
        }, 0);
    };
    //close the slider
    Herald.prototype.closeSlider = function () {
        this.sliderContainer.remove();
        this.announcementVisible = false;
    };
    Herald.prototype.closeWalkthroughSlider = function (wasInCta) {
        //ensure true/false value
        wasInCta = wasInCta === true;
        this.closeSlider();
        if (this.boundTooltipCloseHandler) {
            this.windowSvc.elementCache.body.off(this.windowSvc.namespaceEvent("click"), this.boundTooltipCloseHandler);
        }
        if (this.currentWalkthroughStep !== undefined) {
            this.endWalkthroughStep(wasInCta, wasInCta ? "CTA Clicked" : "Close Handle Clicked");
        }
    };
    /* Pop Ups */
    //an announcement that pops up in the center of the screen with a modal background
    Herald.prototype.showPopUpAnnouncement = function (content, popupWidth) {
        // SHOW THE BG
        this.windowSvc.czq("#cz_transBG").removeClass("hidden").get(0).style.display = "flex";
        // Load the content
        var contentContainer = document.getElementById("cz_popover_content");
        if (contentContainer) {
            if (clientlibs_1.CoreUtils.isString(content)) {
                contentContainer.innerHTML = content;
            }
            else {
                contentContainer.appendChild(content);
            }
            contentContainer.classList.remove("nps");
        }
        if (typeof popupWidth === "undefined") {
            popupWidth = "340px";
        }
        // SHOW THE DIV
        var popOverContainer = this.popupDiv;
        if (!popOverContainer) {
            this.addPopOverDiv();
            popOverContainer = this.popupDiv;
        }
        if (popOverContainer) {
            popOverContainer.style.width = popupWidth;
            popOverContainer.classList.remove("walk");
            //reset any styles
            popOverContainer.style.borderRadius = "";
            popOverContainer.style.backgroundColor = "";
            //make close image visible
            this.windowSvc.czq("#cz_popover img").attr("style", "");
        }
        this.windowSvc.czq(popOverContainer).removeClass("hidden").addClass("shown");
        //set the max height of the inner container to the dynamic height of the outer container
        // so that proper scolling will happen when needed
        /* let cc = this.windowSvc.czq(contentContainer);
             cc.height('')
             .height(this.windowSvc.czq(popOverContainer).height());*/
        var frame = this.windowSvc.czq("#cz_nps_frame"), setFrameHeight = function () {
            /*let popOver = document.getElementById("cz_popover"),
                ph = popOver.clientHeight - 40;*/
            var ch = parseInt(frame.attr("data-content-size")), mx = ((window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight) * 0.75) - 45;
            var heightValueToUse = ch + 1;
            //if the content height is greater than the max height
            // use the max height
            if (ch > mx) {
                heightValueToUse = mx;
            }
            frame.height(heightValueToUse + "px");
        };
        if (frame.length > 0) {
            this.windowSvc.elementCache.window.off(this.windowSvc.namespaceEvent("message.npsPopup"));
            this.windowSvc.elementCache.window.on(this.windowSvc.namespaceEvent("message.npsPopup"), function (e) {
                try {
                    if (!e.originalEvent.data || !e.originalEvent.data.height) {
                        return;
                    }
                    var fh = parseInt(e.originalEvent.data.height); // - 24;
                    frame.attr("data-content-size", fh);
                    setFrameHeight();
                }
                catch (ex) {
                    //report?
                    errorLogger_1.default.report("Herald.npsResizeMessage", ex);
                }
            });
            this.windowSvc.elementCache.window.on(this.windowSvc.namespaceEvent("resize.popup"), function () {
                try {
                    setFrameHeight();
                }
                catch (ex) {
                    //report?
                    errorLogger_1.default.report("Herald.npsResizePopUpEvent", ex);
                }
            });
        }
        //center the outer container on the vert axis
        // popOverContainer.style.top = (h / 2 - popOverContainer.clientHeight / 2) + 'px';
        this.announcementVisible = true;
    };
    //a special case popup announcement that houses an iframe for the nps survey
    Herald.prototype.showNPSPopup = function (url, infoMessageString) {
        url = this.windowSvc.clientSideUrls.baseApiUrl + url;
        var content = "<iframe id='cz_nps_frame' src=" + url + " width='100%' height='100%' data-info-message='" + infoMessageString + "'  frameborder='0'></iframe>";
        this.showPopUpAnnouncement(content, "640px");
        //Add NPS class
        var contentContainer = this.windowSvc.document.getElementById("cz_popover_content");
        contentContainer.classList.add("nps");
    };
    //a special case popup that has call to action buttons
    Herald.prototype.showWalkthroughPopup = function (content, config, clickAuditData) {
        var _this = this;
        //build the popup content container
        var frame = this.windowSvc.document.createElement("div");
        frame.classList.add(this.walkthroughPopupClass);
        frame.style.backgroundColor = config.backgroundColor;
        frame.innerHTML = "<span style='color:" + config.closeColor + "' class=\"cz-close-walk\"><i class=\"czi czi-times\"></i></span>";
        var popupContentContainer = this.windowSvc.document.createElement("div");
        popupContentContainer.classList.add(this.walkthroughPopupContentClass);
        var cFrame = this.buildContentiFrame(content, config, clickAuditData, undefined, 'popup');
        cFrame.style.width = '100%'; //set content frame to 100% so content will resize for different width popups
        popupContentContainer.appendChild(cFrame);
        frame.appendChild(popupContentContainer);
        var tooltipContentCTA = this.buildCTAContainer(config, false);
        frame.appendChild(tooltipContentCTA);
        this.showPopUpAnnouncement(frame, config.width);
        //Add walk class
        this.popupDiv.classList.add("walk");
        if (!clientlibs_1.CoreUtils.isNullOrUndefined(config.borderRadius)) {
            this.popupDiv.style.borderRadius = config.borderRadius + "px";
        }
        this.popupDiv.style.backgroundColor = config.backgroundColor || "";
        setTimeout(function () {
            _this.boundTooltipCloseHandler = function (evt) {
                var isInCTA = _this.wasClickEventInCTA(evt);
                var isCloseHandle = _this.wasClickEventInWalkCloseButton(evt);
                if (!isInCTA && !isCloseHandle) {
                    return;
                }
                _this.closePopUpAnnouncement();
                _this.windowSvc.elementCache.body.off(_this.windowSvc.namespaceEvent("click"), _this.boundTooltipCloseHandler);
                if (_this.currentWalkthroughStep !== undefined) {
                    _this.endWalkthroughStep(isInCTA, isInCTA ? "CTA Clicked" : "Close Handle Clicked");
                }
            };
            _this.windowSvc.elementCache.body.on(_this.windowSvc.namespaceEvent("click"), _this.boundTooltipCloseHandler);
        }, 0);
    };
    //close the modal
    Herald.prototype.closePopUpAnnouncement = function () {
        // HIDE THE BG
        this.windowSvc.czq("#cz_transBG").css("display", "none");
        // HIDE THE DIV
        this.windowSvc.czq("#cz_popover").removeClass("shown").removeClass("walk");
        //reset any styles
        var popupDiv = this.popupDiv;
        if (popupDiv) {
            this.popupDiv.style.borderRadius = "";
            this.popupDiv.style.backgroundColor = "";
        }
        //empty the content
        var contentContainer = this.popupContainer;
        if (contentContainer) {
            contentContainer.innerHTML = "";
            contentContainer.classList.remove("nps");
        }
        this.windowSvc.elementCache.window.off(this.windowSvc.namespaceEvent("resize.popup"));
        this.announcementVisible = false;
    };
    /* Tooltips */
    Herald.prototype.showTooltip = function (content, iconfig, clickAuditData, retryNumber) {
        var _this = this;
        var target = this.windowSvc.findElement(iconfig.selector);
        if (!target || target.length === 0) {
            this.closeTooltips();
            if (retryNumber === undefined || retryNumber === null) {
                retryNumber = 1;
            }
            if (retryNumber <= 4) {
                this.appSvc.debug("[Devless Walkthrough Step Target Not Found. Attempt " + retryNumber + "/4]");
                setTimeout(function () {
                    _this.showTooltip(content, iconfig, clickAuditData, ++retryNumber);
                }, 250);
                return;
            }
            this.endWalkthroughStep(false, "Target Not Found");
            return;
        }
        target.each(function (i, t) {
            //build the tooltip container
            var frame = _this.windowSvc.document.createElement("div");
            var ttConfig = clientlibs_1.CoreUtils.clone(iconfig);
            ttConfig.wasScrolled = false;
            frame.classList.add(_this.tooltipClass);
            frame.classList.add("cz-click-audit");
            frame.style.borderColor = ttConfig.backgroundColor || "white";
            frame.innerHTML = "<span style='color:" + ttConfig.closeColor + "' class=\"cz-close-walk\"><i class=\"czi czi-times\"></i></span>";
            var wrapper = _this.windowSvc.document.createElement("div");
            wrapper.classList.add("cz-tooltip-content-wrapper");
            if (ttConfig.borderRadius) {
                wrapper.style.borderRadius = ttConfig.borderRadius + "px";
                wrapper.style.overflow = "hidden";
            }
            var tooltipContentContainer = _this.windowSvc.document.createElement("div");
            tooltipContentContainer.classList.add(_this.tooltipContentClass);
            tooltipContentContainer.appendChild(_this.buildContentiFrame(content, iconfig, clickAuditData, function () {
                _this.calcTooltipPosition(ttConfig, t, frame, i === 0);
            }, 'tooltip'));
            tooltipContentContainer.style.borderColor = ttConfig.backgroundColor || "white";
            tooltipContentContainer.style.backgroundColor = ttConfig.backgroundColor || "white";
            wrapper.appendChild(tooltipContentContainer);
            var tooltipContentCTA = _this.buildCTAContainer(ttConfig, true);
            wrapper.appendChild(tooltipContentCTA);
            frame.appendChild(wrapper);
            //set off screen so we can get the sizing
            frame.style.setProperty("position", "fixed", "important");
            frame.style.opacity = "0";
            frame.style.top = "0";
            frame.style.left = "0";
            var container = _this.windowSvc.elementCache.body.get(0);
            if (ttConfig.container === Enums_1.Enums.ContainerType.Parent) {
                container = t.parentElement;
            }
            container.appendChild(frame);
            _this.calcTooltipPosition(ttConfig, t, frame, i === 0);
        });
        setTimeout(function () {
            _this.boundTooltipCloseHandler = function (evt) {
                /* let isInTooltip = this.windowSvc.czq(evt.target).is("." + this.tooltipClass) || this.windowSvc.czq(evt.target).parents("." + this.tooltipClass).length > 0;*/
                var isInCTA = _this.wasClickEventInCTA(evt);
                var isCloseHandle = _this.wasClickEventInWalkCloseButton(evt);
                if (!isInCTA && !isCloseHandle) {
                    return;
                }
                _this.closeTooltips();
                _this.windowSvc.elementCache.body.off(_this.windowSvc.namespaceEvent("click"), _this.boundTooltipCloseHandler);
                if (_this.currentWalkthroughStep !== undefined) {
                    _this.endWalkthroughStep(isInCTA, isInCTA ? "CTA Clicked" : "Close Handle Clicked");
                }
            };
            _this.windowSvc.elementCache.body.on(_this.windowSvc.namespaceEvent("click"), _this.boundTooltipCloseHandler);
        }, 0);
    };
    Herald.prototype.calcTooltipPosition = function (config, t, frame, scrollToView) {
        //calculate the position
        var offset = 25;
        var targetPos = t.getBoundingClientRect();
        var tooltipPos = frame.getBoundingClientRect();
        var tooltipContentContainer = frame.querySelector("." + this.tooltipContentClass);
        var cPos = tooltipContentContainer.getBoundingClientRect();
        var top;
        var left;
        switch (config.container) {
            case Enums_1.Enums.ContainerType.Parent:
                top = t.offsetTop;
                left = t.offsetLeft;
                break;
            case Enums_1.Enums.ContainerType.Body:
            default:
                top = targetPos.top + this.windowSvc.elementCache.window.scrollTop();
                left = targetPos.left + this.windowSvc.elementCache.window.scrollLeft();
                break;
        }
        function calcTopLeft(position) {
            var newTop, newLeft;
            switch (position) {
                case Enums_1.Enums.TooltipPosition.Top:
                    //should be above target, horizontally centered
                    newTop = top - (offset + tooltipPos.height);
                    newLeft = ((left + (targetPos.width / 2)) - (tooltipPos.width / 2));
                    break;
                case Enums_1.Enums.TooltipPosition.Bottom:
                    //should be below target, horizontally centered
                    newTop = top + (offset + targetPos.height);
                    newLeft = ((left + (targetPos.width / 2)) - (tooltipPos.width / 2));
                    break;
                case Enums_1.Enums.TooltipPosition.Left:
                    //should be left of target, vertically centered
                    newLeft = left - (tooltipPos.width + offset);
                    newTop = ((top + (targetPos.height / 2)) - (cPos.height / 2));
                    break;
                case Enums_1.Enums.TooltipPosition.Right:
                default:
                    //should be right of target, vertically centered
                    newLeft = left + (targetPos.width + offset);
                    newTop = ((top + (targetPos.height / 2)) - (cPos.height / 2));
                    break;
            }
            return { top: newTop, left: newLeft };
        }
        var tl = calcTopLeft(config.position);
        var minLeft = 10;
        var maxLeft = document.documentElement.scrollWidth - (tooltipPos.width + offset);
        var minTop = 10;
        var maxTop = document.documentElement.scrollHeight - (tooltipPos.height + offset);
        var positionForArrow = config.position;
        //is Left but off screen
        if (tl.left < minLeft && config.position === Enums_1.Enums.TooltipPosition.Left) {
            //try right
            positionForArrow = Enums_1.Enums.TooltipPosition.Right;
            tl.left = calcTopLeft(positionForArrow).left;
            if (tl.left > maxLeft) {
                //try top
                positionForArrow = Enums_1.Enums.TooltipPosition.Top;
                tl = calcTopLeft(positionForArrow);
                if (tl.top < minTop) {
                    //try bottom
                    positionForArrow = Enums_1.Enums.TooltipPosition.Bottom;
                    tl = calcTopLeft(positionForArrow);
                }
            }
        }
        //is Right but off screen
        if (tl.left > maxLeft && config.position === Enums_1.Enums.TooltipPosition.Right) {
            //try left
            positionForArrow = Enums_1.Enums.TooltipPosition.Left;
            tl.left = calcTopLeft(positionForArrow).left;
            if (tl.left < minLeft) {
                //try top
                positionForArrow = Enums_1.Enums.TooltipPosition.Top;
                tl = calcTopLeft(positionForArrow);
                if (tl.top < minTop) {
                    //try bottom
                    positionForArrow = Enums_1.Enums.TooltipPosition.Bottom;
                    tl = calcTopLeft(positionForArrow);
                }
            }
        }
        if (config.container === Enums_1.Enums.ContainerType.Body && (config.position === Enums_1.Enums.TooltipPosition.Right || config.position === Enums_1.Enums.TooltipPosition.Left)) {
            if (tl.top > maxTop) {
                tl.top = maxTop;
            }
            if (tl.top < minTop) {
                tl.top = 10;
            }
        }
        //is Top but off screen
        if (tl.top < minTop && config.position === Enums_1.Enums.TooltipPosition.Top) {
            //try bottom
            positionForArrow = Enums_1.Enums.TooltipPosition.Bottom;
            tl.top = calcTopLeft(positionForArrow).top;
            if (tl.top > maxTop) {
                //try left
                positionForArrow = Enums_1.Enums.TooltipPosition.Left;
                tl = calcTopLeft(positionForArrow);
                if (tl.left > maxLeft) {
                    //try right
                    positionForArrow = Enums_1.Enums.TooltipPosition.Right;
                    tl = calcTopLeft(positionForArrow);
                }
            }
        }
        //is Bottom but off screen
        if (tl.top > maxTop && config.position === Enums_1.Enums.TooltipPosition.Bottom) {
            //try top
            positionForArrow = Enums_1.Enums.TooltipPosition.Bottom;
            tl.top = calcTopLeft(positionForArrow).top;
            if (tl.top < minTop) {
                //try left
                positionForArrow = Enums_1.Enums.TooltipPosition.Left;
                tl = calcTopLeft(positionForArrow);
                if (tl.left > maxLeft) {
                    //try right
                    positionForArrow = Enums_1.Enums.TooltipPosition.Right;
                    tl = calcTopLeft(positionForArrow);
                }
            }
        }
        if (config.container === Enums_1.Enums.ContainerType.Body && (config.position === Enums_1.Enums.TooltipPosition.Top || config.position === Enums_1.Enums.TooltipPosition.Bottom)) {
            if (tl.left > maxLeft) {
                tl.left = maxLeft;
            }
            if (tl.left < minLeft) {
                tl.left = minLeft;
            }
        }
        frame.style.setProperty("position", "absolute", "important");
        frame.style.opacity = "1";
        frame.style.top = tl.top + "px";
        frame.style.left = tl.left + "px";
        //add the triangle
        var triangleWidth = 15;
        var triangleBorderColorString = 'rgba(0,0,0,0.25)';
        var innerTriangleWidth = (triangleWidth - 1);
        //(targetTop) - (contentTop) + (targetHeight/2) - triangleWidth
        var triangleTop = targetPos.top - cPos.top + (targetPos.height / 2) - triangleWidth; // ((cPos.height + 5) / 2) - triangleWidth;
        var triangleLeft = ((cPos.width) / 2) - (triangleWidth);
        var triangle = frame.querySelector(".cz-tooltip-triangle");
        var innerTriangle = frame.querySelector('.cz-tooltip-triangle-inner');
        if (!triangle) {
            triangle = this.windowSvc.document.createElement("div");
            triangle.classList.add("cz-tooltip-triangle");
            triangle.style.setProperty("border-width", triangleWidth + "px", "important");
            innerTriangle = this.windowSvc.document.createElement("div");
            innerTriangle.classList.add("cz-tooltip-triangle-inner");
            innerTriangle.style.setProperty("border-width", (innerTriangleWidth) + "px", "important");
            triangle.appendChild(innerTriangle);
            frame.appendChild(triangle);
        }
        switch (positionForArrow) {
            case Enums_1.Enums.TooltipPosition.Top:
                triangle.style.setProperty("border-top-color", triangleBorderColorString, "important");
                triangle.style.setProperty("bottom", triangleWidth * -2 + "px", "important");
                triangle.style.setProperty("left", triangleLeft + "px", "important");
                innerTriangle.style.setProperty("border-top-color", config.ctaBackgroundColor, "important");
                innerTriangle.style.setProperty("bottom", (innerTriangleWidth - 1) * -1 + "px", "important");
                innerTriangle.style.setProperty("left", innerTriangleWidth * -1 + "px", "important");
                break;
            case Enums_1.Enums.TooltipPosition.Right:
                triangle.style.setProperty("border-right-color", triangleBorderColorString, "important");
                triangle.style.setProperty("left", triangleWidth * -2 + "px", "important");
                triangle.style.setProperty("top", triangleTop + "px", "important");
                innerTriangle.style.setProperty("border-right-color", config.backgroundColor, "important");
                innerTriangle.style.setProperty("left", (innerTriangleWidth - 1) * -1 + "px", "important");
                innerTriangle.style.setProperty("top", innerTriangleWidth * -1 + "px", "important");
                break;
            case Enums_1.Enums.TooltipPosition.Bottom:
                triangle.style.setProperty("border-bottom-color", triangleBorderColorString, "important");
                triangle.style.setProperty("top", triangleWidth * -2 + "px", "important");
                triangle.style.setProperty("left", triangleLeft + "px", "important");
                innerTriangle.style.setProperty("border-bottom-color", config.backgroundColor, "important");
                innerTriangle.style.setProperty("top", (innerTriangleWidth - 1) * -1 + "px", "important");
                innerTriangle.style.setProperty("left", innerTriangleWidth * -1 + "px", "important");
                break;
            case Enums_1.Enums.TooltipPosition.Left:
                triangle.style.setProperty("border-left-color", triangleBorderColorString, "important");
                triangle.style.setProperty("right", triangleWidth * -2 + "px", "important");
                triangle.style.setProperty("top", triangleTop + "px", "important");
                innerTriangle.style.setProperty("border-left-color", config.backgroundColor, "important");
                innerTriangle.style.setProperty("right", (innerTriangleWidth - 1) * -1 + "px", "important");
                innerTriangle.style.setProperty("top", innerTriangleWidth * -1 + "px", "important");
                break;
        }
        //fudge the top padding
        if (config.borderRadius) {
            var topPadding = (config.borderRadius / 4);
            if (topPadding < 20) {
                topPadding = 20;
            }
            if (topPadding > 150) {
                topPadding = 150;
            }
            tooltipContentContainer.style.setProperty("padding-top", topPadding + "px", "important");
        }
        if (scrollToView && !config.wasScrolled && !clientlibs_1.StyleUtils.isInViewport(frame)) {
            //t.scrollIntoView();
            frame.scrollIntoView();
            config.wasScrolled = true;
        }
    };
    //close any open tooltips
    Herald.prototype.closeTooltips = function () {
        this.windowSvc.elementCache.body.find("." + this.tooltipClass).remove();
        if (this.boundTooltipCloseHandler) {
            this.windowSvc.elementCache.body.off(this.windowSvc.namespaceEvent("click"), this.boundTooltipCloseHandler);
            this.boundTooltipCloseHandler = null;
        }
    };
    /* Walkthroughs */
    Herald.prototype.doWalkthroughStep = function (step) {
        this.appSvc.debug("[Devless Walkthrough Starting Step " + step.sequence + "]", step);
        this.currentWalkthroughStep = step;
        var clickAuditData = {
            wId: step.walkthroughId,
            sId: step.id
        };
        if (this.currentWalkthrough && !this.currentWalkthrough["testing"] && this.currentWalkthrough.id && this.currentWalkthroughStep.id) {
            var action = Enums_1.Enums.WalkthroughActionType.StepStarted;
            this.walkthroughSvc.SendActionMessage(action, this.currentWalkthrough.id, this.currentWalkthroughStep.id);
        }
        switch (step.stepTypeId) {
            case clientlibs_1.WalkthroughStepType.PopUp:
                this.showWalkthroughPopup(step.content || "", step.stepConfig, clickAuditData);
                break;
            case clientlibs_1.WalkthroughStepType.Slider:
                this.showWalkthroughSlider(step.content || "", step.stepConfig, clickAuditData);
                break;
            case clientlibs_1.WalkthroughStepType.Tooltip:
                this.showTooltip(step.content || "", step.stepConfig, clickAuditData);
                break;
        }
    };
    Herald.prototype.endWalkthroughStep = function (tryNext, reason) {
        if (tryNext === void 0) { tryNext = true; }
        reason = reason ? " : " + reason : "";
        this.appSvc.debug("[Devless Walkthrough Ended Step " + this.currentWalkthroughStep.sequence + "]" + reason, this.currentWalkthroughStep);
        if (this.currentWalkthrough && !this.currentWalkthrough["testing"] && this.currentWalkthrough.id && this.currentWalkthroughStep.id) {
            var action = tryNext ? Enums_1.Enums.WalkthroughActionType.StepCompleted : Enums_1.Enums.WalkthroughActionType.StepAbandonded;
            this.walkthroughSvc.SendActionMessage(action, this.currentWalkthrough.id, this.currentWalkthroughStep.id);
        }
        //check if we should try next step in walkthrough
        var nextSequence = this.currentWalkthroughStep.sequence + 1;
        var hasNext = nextSequence < (this.currentWalkthrough.steps.length);
        //clear out the current step
        this.currentWalkthroughStep = undefined;
        if (hasNext && tryNext) {
            this.doWalkthroughStep(this.currentWalkthrough.steps[nextSequence]);
        }
        else {
            this.endWalkthrough(!tryNext);
        }
    };
    Herald.prototype.endWalkthrough = function (wasAbandoned) {
        if (wasAbandoned === void 0) { wasAbandoned = false; }
        this.appSvc.debug("[Devless Walkthrough " + (wasAbandoned ? "Abandoned" : "Completed") + "]", this.currentWalkthrough);
        if (this.currentWalkthrough && !this.currentWalkthrough["testing"] && this.currentWalkthrough.id) {
            var action = wasAbandoned ? Enums_1.Enums.WalkthroughActionType.WalkthroughAbandoned : Enums_1.Enums.WalkthroughActionType.WalkthroughCompleted;
            this.walkthroughSvc.SendActionMessage(action, this.currentWalkthrough.id);
        }
        //clear out the current walkthrough
        this.currentWalkthrough = undefined;
    };
    Herald.prototype.buildContentiFrame = function (content, config, clickAuditData, onResizeCallback, contentTypeClass) {
        var contentiFrame = this.windowSvc.document.createElement("iframe");
        contentiFrame.style.margin = "0";
        contentiFrame.style.padding = "0";
        contentiFrame.style.border = "none";
        contentiFrame.style.display = "inline-block";
        contentiFrame.style.height = "0";
        //contentiFrame.innerHTML = `<html><body>${content}</body></html>`;
        console.log('ClickAuditData', clickAuditData);
        var transportPod = clientlibs_1.iFrameUtils.buildTransportMessage(clientlibs_1.TransportCodes.WalkthroughClickAudit, clickAuditData);
        var customCss = clientlibs_1.StyleUtils.froalaViewerStyle;
        if (this.sessionSvc.CurrentAccountContent && this.sessionSvc.CurrentAccountContent.css) {
            customCss += this.sessionSvc.CurrentAccountContent.css;
        }
        if (config.fontFamily) {
            customCss += "body{font-family:" + config.fontFamily + ";}";
        }
        contentiFrame.onload = (function (c, fs, tp, ctc) {
            var contentiFrameResizeInterval = undefined;
            return function () {
                var b = contentiFrame.contentDocument.body;
                b.innerHTML = c;
                b.style.display = "inline-block";
                b.style.margin = "0";
                b.style.padding = "0";
                b.style.width = "100%";
                b.id = 'cz_walkthrough_content_body';
                if (ctc) {
                    b.classList.add(ctc);
                }
                if (!Element.prototype.matches)
                    Element.prototype.matches = Element.prototype["msMatchesSelector"];
                if (!Element.prototype.closest)
                    Element.prototype.closest = function (selector) {
                        var el = this;
                        while (el) {
                            if (el.matches(selector)) {
                                return el;
                            }
                            el = el.parentElement;
                        }
                    };
                var s = contentiFrame.contentDocument.createElement("style");
                s.innerText = fs;
                contentiFrame.contentDocument.head.appendChild(s);
                var overVideoIframe = -1;
                //ensure all videos are playable
                var videos = contentiFrame.contentDocument.body.querySelectorAll(".fr-video");
                for (var i = 0; i < videos.length; i++) {
                    var vid = videos[i];
                    vid.classList.add("fr-active");
                    vid.addEventListener("mouseenter", function () {
                        overVideoIframe = tp;
                    });
                    vid.addEventListener("mouseleave", function () {
                        overVideoIframe = -1;
                    });
                    var vFrame = vid.querySelector('iframe');
                    if (vFrame) {
                        var vidProps = vid.getBoundingClientRect();
                        var vidWidth = vidProps.width || 298;
                        //let frameProps = vFrame.getBoundingClientRect();
                        var ratio = 0.5625; //((frameProps.height||360)/(frameProps.width||640));
                        console.log('vid width', vidWidth);
                        console.log('vid ratio', ratio);
                        var h = ratio * vidWidth;
                        //recalc for impending scroll bar
                        if ((h / window.innerHeight) > 0.75) {
                            vidWidth = vidWidth - 12;
                            h = vidWidth * ratio;
                        }
                        vFrame.style.setProperty('width', vidWidth + 'px', 'important');
                        //vFrame.style.setProperty( 'height', 'auto', 'important' );
                        vFrame.style.setProperty('height', h + 'px', 'important');
                        vFrame.setAttribute('width', vidWidth.toString());
                        //vFrame.removeAttribute('height');
                        vFrame.setAttribute('height', h.toString());
                    }
                }
                //ensure images are the correct size
                var images = contentiFrame.contentDocument.body.querySelectorAll(".fr-fic");
                for (var i = 0; i < images.length; i++) {
                    var img = images[i];
                    if (img.style.width.indexOf('%') === -1) {
                        var width = parseInt(img.style.width || '300');
                        if (width >= 300) {
                            img.style.width = '100%';
                        }
                        else {
                            img.style.width = ((width / 651) * 100) + '%';
                        }
                    }
                }
                var pm = function (target, message, o) {
                    var em = clientlibs_1.iFrameUtils.encrypt(JSON.stringify(message));
                    target.postMessage(em, o || '*');
                };
                //Listen for when the content frame loses focus
                contentiFrame.contentWindow.addEventListener("blur", function () {
                    if (overVideoIframe !== -1) {
                        pm(contentiFrame.contentWindow.parent, overVideoIframe);
                    }
                });
                //Listen for when a message is sent from another frame
                contentiFrame.contentWindow.addEventListener("message", function (e) {
                    if (e.data && e.data.toLowerCase() === "czcodeblur") {
                        if (overVideoIframe !== -1) {
                            var sourceWindow = e.source;
                            pm(sourceWindow, overVideoIframe, e.origin);
                        }
                    }
                });
                //Listen for when a click happens inside the body of the content frame
                contentiFrame.contentDocument.body.addEventListener("click", function (evt) {
                    if (tp && evt.target) {
                        var target = evt.target;
                        var sendAudit = false;
                        //links
                        if (target.tagName.toLowerCase() === "a" || target.closest("a")) {
                            tp.data["props"] = { href: evt.target.getAttribute("href") };
                            sendAudit = true;
                        }
                        else if (target.classList.contains("fr-video")) {
                            sendAudit = true;
                        }
                        if (sendAudit) {
                            pm(contentiFrame.contentWindow.parent, tp);
                        }
                    }
                });
                //ensure the iframe element on the parent page has the same height as its content inside
                var checkHeight = function () {
                    try {
                        var cs = contentiFrame.contentWindow.getComputedStyle(contentiFrame.contentDocument.body);
                        contentiFrame.style.height = cs.height;
                        if (onResizeCallback && typeof onResizeCallback === "function") {
                            onResizeCallback();
                        }
                    }
                    catch (ex) {
                        if (contentiFrameResizeInterval) {
                            window.clearInterval(contentiFrameResizeInterval);
                            contentiFrameResizeInterval = undefined;
                        }
                    }
                };
                contentiFrameResizeInterval = window.setInterval(checkHeight, 100);
                checkHeight();
                //Clear the checkHeight interval when iframe is destroyed
                contentiFrame.contentDocument.defaultView.onunload = function () {
                    if (contentiFrameResizeInterval) {
                        window.clearInterval(contentiFrameResizeInterval);
                        contentiFrameResizeInterval = undefined;
                    }
                };
            };
        })(content, customCss, transportPod, contentTypeClass);
        return contentiFrame;
    };
    Herald.prototype.buildCTAContainer = function (config, setBorderRadius) {
        var ctaContainer = this.windowSvc.document.createElement("div");
        ctaContainer.classList.add(this.callToActionContainerClass);
        ctaContainer.style.textAlign = config.ctaAlignment || "center";
        var ctaButton = this.windowSvc.document.createElement("button");
        ctaButton.classList.add(this.callToActionButtonClass);
        ctaButton.style.backgroundColor = config.ctaButtonColor || "#FFFFFF";
        ctaButton.style.borderColor = config.ctaButtonColor || "#FFFFFF";
        ctaButton.style.color = config.ctaTextColor || "white";
        ctaButton.textContent = config.ctaText || "Got it!";
        ctaContainer.appendChild(ctaButton);
        ctaContainer.style.borderColor = config.ctaBackgroundColor || "white";
        ctaContainer.style.borderTopColor = "transparent";
        ctaContainer.style.backgroundColor = config.ctaBackgroundColor || "white";
        if (setBorderRadius && !clientlibs_1.CoreUtils.isNullOrUndefined(config.borderRadius)) {
            ctaContainer.style.borderTopLeftRadius = "0";
            ctaContainer.style.borderTopRightRadius = "0";
            ctaContainer.style.borderBottomLeftRadius = config.borderRadius + "px";
            ctaContainer.style.borderBottomRightRadius = config.borderRadius + "px";
        }
        return ctaContainer;
    };
    Herald.prototype.wasClickEventInCTA = function (evt) {
        return this.windowSvc.czq(evt.target).is("." + this.callToActionButtonClass) || this.windowSvc.czq(evt.target).parents("." + this.callToActionButtonClass).length > 0;
    };
    Herald.prototype.wasClickEventInWalkCloseButton = function (evt) {
        return this.windowSvc.czq(evt.target).is(".cz-close-walk") || this.windowSvc.czq(evt.target).parents(".cz-close-walk").length > 0;
    };
    /* Shared Announcement/Walkthrough Functionality */
    Herald.prototype.onAdvancedDisplayClose = function () {
        //check for any walkthroughs that might have queued up
        //if(this.walkthroughQueue && this.walkthroughQueue.length){
        //let walkthroughToStart = this.walkthroughQueue.shift();
        //start walkthrough
        //this.appSvc.pubsub.publish(Enums.ChurnZeroAppEvents.WalkthroughStart, walkthroughToStart);
        //}
    };
    /* Start Up Utils */
    //inject the container for pop over style announcements
    Herald.prototype.addPopOverDiv = function () {
        this.popoverDivLoaded = this.popoverDivLoaded || this.windowSvc.czq("#cz_popover").length > 0;
        if (!this.popoverDivLoaded) {
            var popoverContainer = this.appSvc.templater.populateTemplate(this.templateCache.popoverContainerTemplate, {});
            this.windowSvc.elementCache.body.append(popoverContainer);
            this.popoverDivLoaded = true;
        }
    };
    Herald.prototype.checkForLastAdvancedDisplayAnnouncement = function () {
        var slideAnnouncement = null;
        for (var i = this.messageSvc.Announcements.length - 1; i >= 0; i--) {
            var current = this.messageSvc.Announcements[i];
            //keep track of only the last slide or popup announcement
            if (this.messageSvc.isAdvancedDisplayAnnouncement(current)) {
                slideAnnouncement = null;
                if (current.isRead === false) {
                    slideAnnouncement = current;
                }
            }
        }
        //display only the last slide announcement
        if (slideAnnouncement) {
            this.addAdvancedDisplayAnnouncement(slideAnnouncement);
        }
    };
    /* Position Utils */
    Herald.getAnnouncementPositionClassFromId = function (announcementPositionId) {
        switch (announcementPositionId) {
            case Enums_1.Enums.AnnouncementPosition.SlideBottomCenter:
                return "bottom-center";
            case Enums_1.Enums.AnnouncementPosition.SlideLeftBottom:
                return "left-bottom";
            case Enums_1.Enums.AnnouncementPosition.SlideTopLeft:
                return "top-left";
            case Enums_1.Enums.AnnouncementPosition.SlideTopCenter:
                return "top-center";
            case Enums_1.Enums.AnnouncementPosition.SlideTopRight:
                return "top-right";
            case Enums_1.Enums.AnnouncementPosition.SlideBottomLeft:
                return "bottom-left";
            case Enums_1.Enums.AnnouncementPosition.SlideBottomRight:
                return "bottom-right";
            case Enums_1.Enums.AnnouncementPosition.SlideLeftTop:
                return "left-top";
            case Enums_1.Enums.AnnouncementPosition.SlideLeftCenter:
                return "left-center";
            case Enums_1.Enums.AnnouncementPosition.SlideRightTop:
                return "right-top";
            case Enums_1.Enums.AnnouncementPosition.SlideRightCenter:
                return "right-center";
            case Enums_1.Enums.AnnouncementPosition.SlideRightBottom:
                return "right-bottom";
            default:
                console.error("Unknown AnnouncementPositionId " + announcementPositionId);
                return "bottom-center";
        }
    };
    return Herald;
}());
exports.default = Herald;


/***/ }),

/***/ "./src/core/PanelDisplay.ts":
/*!**********************************!*\
  !*** ./src/core/PanelDisplay.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* global globalThis */
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
//TODO:
// this is not correct. The BasePanel should have an active panel or something
// that is where the children panels should live and which ever is the active one
// will be visible. THis class would then be responsible for the basic functionality of
// getting the container on the page and managing state of which panel is active.
// It is the way it is currently because there isnt time to refactor it again.
var BasePanelDisplay = /** @class */ (function () {
    function BasePanelDisplay(appSvc, tenantSvc, windowSvc, storageSvc, sessionSvc, messageSvc) {
        this.appSvc = appSvc;
        this.tenantSvc = tenantSvc;
        this.windowSvc = windowSvc;
        this.storageSvc = storageSvc;
        this.sessionSvc = sessionSvc;
        this.messageSvc = messageSvc;
        this.tabbedAvatarPosition = "bottom"; // or ['top', 'center']
        this.panelOpenStatusKey = "PANEL_OPEN_STATUS";
    }
    Object.defineProperty(BasePanelDisplay.prototype, "basePanelVisible", {
        get: function () {
            //if the current IsPanelOpen does not exist,
            // try to load it from storage
            if (typeof (this._basePanelVisible) === "undefined") {
                this._basePanelVisible = this.storageSvc.get(this.panelOpenStatusKey, this._basePanelVisible);
            }
            return this._basePanelVisible;
        },
        set: function (PanelOpenStatus) {
            this._basePanelVisible = PanelOpenStatus;
            //store current state of IsPanelOpen
            this.storageSvc.set(this.panelOpenStatusKey, this._basePanelVisible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelDisplay.prototype, "templateCache", {
        get: function () {
            return window.ChurnZero.templateCache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelDisplay.prototype, "templater", {
        get: function () {
            return this.appSvc.templater;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelDisplay.prototype, "basePanel", {
        //Common Elements
        get: function () {
            return this.windowSvc.czq("#cz-csm-panel");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelDisplay.prototype, "panelToggle", {
        get: function () {
            return this.windowSvc.czq("#czChatButtonWrapper");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelDisplay.prototype, "panelToggleContent", {
        get: function () {
            return this.panelToggle.find(".cz-chat-button-2");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelDisplay.prototype, "alertMessageBody", {
        //Click here to see that again container
        get: function () {
            return this.windowSvc.czq(".cz-alert-message-body");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelDisplay.prototype, "unreadBadge", {
        get: function () {
            return this.windowSvc.czq(".cz-unread-badge");
        },
        enumerable: true,
        configurable: true
    });
    BasePanelDisplay.prototype.removeAllInjectedHtml = function () {
        this.windowSvc.czq("link#cz-styles, div#cz-panel-container").remove();
    };
    //inject the churnzero stylesheet for the button and panel
    BasePanelDisplay.prototype.loadCZStyles = function () {
        if (!this.baseStylesLoaded) {
            this.baseStylesLoaded = true;
        }
    };
    BasePanelDisplay.prototype.openBasePanel = function (forceOpen, onOpen) {
        if (!this.basePanelVisible || forceOpen) {
            this.basePanel
                .removeClass('hidden')
                .removeClass("panel-" + this.sessionSvc.PanelPosition + "-collapsed")
                .addClass("panel-" + this.sessionSvc.PanelPosition)
                .one(clientlibs_1.StyleUtils.whichTransitionEvent(), function () {
                if (typeof onOpen === "function") {
                    onOpen();
                }
            });
            //hide the alert message
            this.alertMessageBody.attr("style", clientlibs_1.StyleUtils.replaceStyleValue("block", "none"));
            //hide the panel avatar
            this.panelToggle.attr("style", clientlibs_1.StyleUtils.replaceStyleValue("block", "none"));
            this.basePanelVisible = true;
            //let others know panel was shown
            this.appSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.PanelShow);
        }
    };
    BasePanelDisplay.prototype.closeBasePanel = function (onClose) {
        if (this.basePanelVisible) {
            this.basePanel
                .removeClass("panel-" + this.sessionSvc.PanelPosition)
                .addClass("panel-" + this.sessionSvc.PanelPosition + "-collapsed")
                .one(clientlibs_1.StyleUtils.whichTransitionEvent(), function () {
                if (typeof onClose === "function") {
                    onClose();
                }
            });
            this.panelToggle.attr("style", clientlibs_1.StyleUtils.replaceStyleValue("none", "block"));
            this.basePanelVisible = false;
            //let others know panel was hidden
            this.appSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.PanelHide);
        }
    };
    BasePanelDisplay.prototype.setupBasePanelFunctionality = function () {
        var _this = this;
        this.basePanel.addClass("panel-" + this.sessionSvc.PanelPosition + "-collapsed");
        var csmButton = this.panelToggle.get(0);
        if (this.sessionSvc.AvatarType === "tabbed") {
            csmButton.className += " tabbed-avatar";
            csmButton.className += " " + this.tabbedAvatarPosition + "-tab";
            csmButton.className += " " + this.sessionSvc.PanelPosition + "-tab";
        }
        else {
            csmButton.className += " floating-avatar-" + this.sessionSvc.PanelPosition;
        }
        this.panelToggleContent.on(this.windowSvc.namespaceEvent("click"), function () { return _this.show(); });
        var alertMessageBody = this.alertMessageBody;
        alertMessageBody.on(this.windowSvc.namespaceEvent("mousedown"), function () { return _this.show(); });
        alertMessageBody.addClass("alert-message-" + this.sessionSvc.PanelPosition);
        alertMessageBody.addClass("alert-message-" + this.sessionSvc.AvatarType);
    };
    return BasePanelDisplay;
}());
exports.BasePanelDisplay = BasePanelDisplay;


/***/ }),

/***/ "./src/core/PubSuber.ts":
/*!******************************!*\
  !*** ./src/core/PubSuber.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errorLogger_1 = __importDefault(__webpack_require__(/*! ./errorLogger */ "./src/core/errorLogger.ts"));
var PubSubMessage = /** @class */ (function () {
    function PubSubMessage() {
    }
    return PubSubMessage;
}());
exports.PubSubMessage = PubSubMessage;
var PubSubSubscription = /** @class */ (function () {
    function PubSubSubscription() {
    }
    return PubSubSubscription;
}());
exports.PubSubSubscription = PubSubSubscription;
var PubSuber = /** @class */ (function () {
    function PubSuber() {
        this.sourceId = this.guid();
        this.topics = {};
        this.hOP = this.topics.hasOwnProperty;
        this.mirrors = [];
    }
    PubSuber.prototype.addMirror = function (mirror) {
        var _this = this;
        var len = this.mirrors.push(mirror);
        var index = len - 1;
        // Provide handle back for removal of mirror
        return {
            remove: function () {
                delete _this.mirrors[index];
            }
        };
    };
    PubSuber.prototype.subscribe = function (topic, listener) {
        var _this = this;
        // Create the topic's object if not yet created
        if (!this.hOP.call(this.topics, topic))
            this.topics[topic] = [];
        // Add the listener to queue
        var index = this.topics[topic].push(listener) - 1;
        // Provide handle back for removal of topic
        return {
            remove: function () {
                try {
                    delete _this.topics[topic][index];
                }
                catch (ex) {
                    //report?
                    errorLogger_1.default.report("PubSuber.remove", ex);
                }
            }
        };
    };
    PubSuber.prototype.publish = function (topic, info, isMirroredEvent, sourceId) {
        if (isMirroredEvent === void 0) { isMirroredEvent = false; }
        if (sourceId === void 0) { sourceId = this.sourceId; }
        // If the topic doesn't exist, or there's no listeners in queue, just leave
        var topicExists = this.hOP.call(this.topics, topic);
        if (!topicExists && this.mirrors.length === 0)
            return;
        var message = {
            sourceId: this.sourceId,
            topic: topic,
            info: info
        };
        var isOtherSource = sourceId !== this.sourceId;
        // Cycle through topics queue, fire!
        if (topicExists) {
            this.topics[topic].forEach(function (item, index, array) {
                if (item === null || item === undefined) {
                    return;
                }
                if (!isMirroredEvent || isOtherSource) {
                    try {
                        item(message);
                    }
                    catch (ex) {
                        //report?
                        if (errorLogger_1.default.isFreedScriptError(ex)) {
                            array[index] = undefined;
                        }
                        else {
                            errorLogger_1.default.report("PubSuber.publish." + topic, ex);
                        }
                    }
                }
            });
        }
        if (!isMirroredEvent && this.mirrors.length) {
            this.mirrors.forEach(function (mirror, index, array) {
                if (mirror === null || mirror === undefined) {
                    return;
                }
                try {
                    mirror(message);
                }
                catch (ex) {
                    //report?
                    if (errorLogger_1.default.isFreedScriptError(ex)) {
                        array[index] = undefined;
                    }
                    else {
                        errorLogger_1.default.report("PubSuber.publishMirrored." + topic, ex);
                    }
                }
            });
        }
    };
    PubSuber.prototype.publishMirrored = function (message) {
        this.publish(message.topic, message.info, true, message.sourceId);
    };
    PubSuber.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
    };
    PubSuber.removeAll = function (subIds) {
        //remove any subscriptions
        for (var key in subIds) {
            if (!Object.prototype.hasOwnProperty.call(subIds, key))
                continue;
            if (subIds[key]) {
                subIds[key].remove();
                subIds[key] = null;
            }
        }
    };
    return PubSuber;
}());
exports.default = PubSuber;


/***/ }),

/***/ "./src/core/SessionStorageQueue.ts":
/*!*****************************************!*\
  !*** ./src/core/SessionStorageQueue.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var SessionStorageQueue = /** @class */ (function () {
    function SessionStorageQueue(storageSvc, windowSvc, key) {
        this.storageSvc = storageSvc;
        this.windowSvc = windowSvc;
        this.key = key;
    }
    SessionStorageQueue.prototype._getQueue = function () {
        var s = this.storageSvc.get(this.key, []);
        //if it is a string try parsing again...
        if (clientlibs_1.CoreUtils.isString(s)) {
            try {
                s = this.windowSvc.JSON.parse(s);
            }
            catch (ex) {
                //meh
                s = [];
            }
        }
        return s;
    };
    SessionStorageQueue.prototype._setQueue = function (queue) {
        var valueToStore = queue;
        if (queue.length === 0) {
            this.storageSvc.remove(this.key);
        }
        else {
            this.storageSvc.set(this.key, valueToStore);
        }
    };
    SessionStorageQueue.prototype.push = function (item) {
        try {
            var queueStorage = this._getQueue();
            queueStorage.push(item);
            this._setQueue(queueStorage);
        }
        catch (err) {
            return false;
        }
        return true;
    };
    Object.defineProperty(SessionStorageQueue.prototype, "length", {
        get: function () {
            try {
                var queueStorage = this._getQueue();
                return queueStorage.length;
            }
            catch (err) {
                return -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    SessionStorageQueue.prototype.remove = function (item, filterFunc) {
        if (filterFunc === void 0) { filterFunc = null; }
        var queueStorage = this._getQueue();
        queueStorage = queueStorage.filter(function (q) {
            if (typeof filterFunc === "function") {
                return filterFunc(q, item);
            }
            return q !== item;
        });
        this._setQueue(queueStorage);
    };
    SessionStorageQueue.prototype.removeAll = function (items, filterFunc) {
        if (filterFunc === void 0) { filterFunc = null; }
        var queueStorage = this._getQueue();
        queueStorage = queueStorage.filter(function (q) {
            if (typeof filterFunc === "function") {
                return filterFunc(q);
            }
            return items.indexOf(q) !== -1;
        });
        this._setQueue(queueStorage);
    };
    SessionStorageQueue.prototype.shift = function () {
        var returnItem = null;
        try {
            var queueStorage = this._getQueue();
            returnItem = queueStorage.shift();
            this._setQueue(queueStorage);
        }
        catch (err) {
            return returnItem;
        }
        return returnItem;
    };
    SessionStorageQueue.prototype.unshift = function (item) {
        var returnItem = -1;
        try {
            var queueStorage = this._getQueue();
            returnItem = queueStorage.unshift(item);
            this._setQueue(queueStorage);
        }
        catch (err) {
            return returnItem;
        }
        return returnItem;
    };
    SessionStorageQueue.prototype.empty = function () {
        try {
            this._setQueue([]);
        }
        catch (err) { } // eslint-disable-line no-empty
    };
    SessionStorageQueue.prototype.getAllItems = function () {
        return this._getQueue();
    };
    return SessionStorageQueue;
}());
exports.default = SessionStorageQueue;


/***/ }),

/***/ "./src/core/SuccessPanel.ts":
/*!**********************************!*\
  !*** ./src/core/SuccessPanel.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by George on 5/4/2016.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/core/Enums.ts");
var PanelDisplay_1 = __webpack_require__(/*! ./PanelDisplay */ "./src/core/PanelDisplay.ts");
var PubSuber_1 = __importDefault(__webpack_require__(/*! ./PubSuber */ "./src/core/PubSuber.ts"));
var errorLogger_1 = __importDefault(__webpack_require__(/*! ./errorLogger */ "./src/core/errorLogger.ts"));
var SuccessPanel = /** @class */ (function (_super) {
    __extends(SuccessPanel, _super);
    function SuccessPanel(appSvc, tenantSvc, windowSvc, storageSvc, sessionSvc, messageSvc, commSvc, openOnStart) {
        var _this = _super.call(this, appSvc, tenantSvc, windowSvc, storageSvc, sessionSvc, messageSvc) || this;
        _this.commSvc = commSvc;
        _this.openOnStart = openOnStart;
        _this.fileNames = {
            CSMPanelTemplate: 'template/csmPanel.html'
        };
        _this.previousUnreadCount = 0;
        _this.subIds = {};
        _this.resizeTimeout = null;
        _this.onInit();
        return _this;
    }
    Object.defineProperty(SuccessPanel.prototype, "panelHeader", {
        get: function () {
            return this.windowSvc.czq('#cz-csm-panel header');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuccessPanel.prototype, "panelBody", {
        get: function () {
            return this.windowSvc.czq('#cz-csm-panel .cz-sidebar-panel');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuccessPanel.prototype, "announcementsContainer", {
        get: function () {
            return this.windowSvc.czq('#cz-csm-panel #cz-announcements');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuccessPanel.prototype, "panelFooter", {
        get: function () {
            return this.windowSvc.czq('#cz-csm-panel .cz-footer');
        },
        enumerable: true,
        configurable: true
    });
    SuccessPanel.prototype.onInit = function () {
        var _this = this;
        this.isDefaultAnnouncementActive = false;
        //if the panel is disabled exit now
        if (!this.sessionSvc.PanelEnabled) {
            console.info('Panel Disabled via Functionality');
            return;
        }
        //if the panel is silenced exit now
        if (this.sessionSvc.IsSilent) {
            console.info('Panel Silent');
            return;
        }
        this.compileCSMPanel();
        this.subIds['digestSubId'] = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.DIGEST, function () { return _this.onDigest(); });
        this.subIds['haltSubId'] = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.HALT, function () { return _this.onHalt(); });
    };
    SuccessPanel.prototype.show = function (forceOpen) {
        var _this = this;
        try {
            //open base panel
            this.openBasePanel(forceOpen, function () {
                //CSM specific open changes
                _this.panelBody.scrollTop(0);
                _this.adjustPanelHeader();
                _this.adjustPanelFooter();
            });
            setTimeout(function () {
                try {
                    _this.adjustPanelHeader();
                    _this.adjustPanelFooter();
                }
                catch (ex) {
                    //report?
                    errorLogger_1.default.report('SuccessPanel.showTimeout', ex);
                }
            }, 333);
        }
        catch (ex) {
            //report?
            errorLogger_1.default.report('SuccessPanel.show', ex);
        }
    };
    SuccessPanel.prototype.hide = function () {
        try {
            //close base panel
            this.closeBasePanel();
        }
        catch (ex) {
            //report?
            errorLogger_1.default.report('SuccessPanel.hide', ex);
        }
    };
    SuccessPanel.prototype.compileCSMPanel = function () {
        var _this = this;
        //Build Data Context for Templating Full Panel
        var data = {};
        // Manipulate initialConnection for merge
        data.avatarUrl = this.sessionSvc.LaunchAvatarUrl;
        //Map Account Owner data to be templated
        var currentUserAccount = this.tenantSvc.accountOwner;
        if (currentUserAccount) {
            data.userAccount = currentUserAccount;
            data.userAccountName = currentUserAccount.firstName + " " + currentUserAccount.lastName;
            data.userAccountEmail = currentUserAccount.email || '';
            data.userAccountTitle = currentUserAccount.title || '';
            data.userAccountPhone = currentUserAccount.officePhone || '';
        }
        //setup the css style tag if it exists
        if (this.sessionSvc.CurrentAccountContent.css) {
            data.cssOverride = "<style>" + this.sessionSvc.CurrentAccountContent.css + "</style>";
        }
        else {
            data.cssOverride = '';
        }
        //add the headerHtml content
        data.headerContent = this.sessionSvc.CurrentAccountContent.header;
        //add the footerHtml content
        data.footerContent = this.sessionSvc.CurrentAccountContent.footer;
        this.appSvc.templater.compile_template(this.appSvc.addCdn(this.fileNames.CSMPanelTemplate + '?ak=' + encodeURIComponent(this.commSvc.appKey)), data, function (result) { return _this.buildCSMPanel(result); });
    };
    SuccessPanel.prototype.buildCSMPanel = function (result) {
        var _this = this;
        console.info('Finished compiling panel. Beginning injection into DOM.');
        //remove styles and panel if they exist
        this.removeAllInjectedHtml();
        //load base styles
        this.loadCZStyles();
        //add panel to body
        this.windowSvc.elementCache.body.append(result);
        if (this.sessionSvc.CurrentAccountContent.branding) {
            this.applyBranding(this.sessionSvc.CurrentAccountContent.branding);
        }
        //setup the UI//
        this.setupBasePanelFunctionality();
        //window resize event handler
        this.windowSvc.elementCache.window.on(this.windowSvc.namespaceEvent('resize'), function (e) {
            try {
                if (_this.resizeTimeout) {
                    _this.windowSvc.window.clearTimeout(_this.resizeTimeout);
                    _this.resizeTimeout = null;
                }
                _this.resizeTimeout = _this.windowSvc.window.setTimeout(function () {
                    try {
                        if (_this.basePanelVisible) {
                            _this.adjustPanelFooter();
                        }
                    }
                    catch (ex) {
                        //report?
                        errorLogger_1.default.report('SuccessPanel.resizeTimeout', ex);
                    }
                }, 250);
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report('SuccessPanel.resizeEvent', ex);
            }
        });
        //close button event handler
        this.basePanel.on(this.windowSvc.namespaceEvent('click'), '.cz-widget-controls .cz-customer', function () { return _this.hide(); });
        //devless panel toggle event handler
        if (this.sessionSvc.ContentPanelEnabled) {
            //listen for devless gear icon clicks
            this.basePanel.on(this.windowSvc.namespaceEvent('click'), '.cz-widget-controls .cz-admin', function () { return _this.showDevlessPanel(); });
            //listen for devless panel hide events to reshow the gear icon
            this.subIds['DevlessHideSubId'] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessHide, function (message) {
                _this.windowSvc.czq('#cz-csm-panel .cz-admin').removeClass('hidden');
            });
            if (!this.sessionSvc.IsContentPanelOpen)
                this.windowSvc.czq('#cz-csm-panel .cz-admin').removeClass('hidden');
        }
        //add account owner avatar
        if (this.sessionSvc.AccountOwnerAvatarUrl) {
            this.windowSvc.elementCache.body.one(this.windowSvc.namespaceEvent('load'), '.cz-avatar-img', function (event) {
                this.adjustPanelHeader(true);
            }.bind(this));
        }
        this.windowSvc.czq('#cz-account-rep-pane').prepend(this.getAccountOwnerAvatarHtml());
        //Enable Available Panes
        this.setupAccountRep();
        this.setupAnnouncements({
            announcements: this.messageSvc.Announcements,
            showMoreText: this.sessionSvc.CurrentAccountContent.clickToSeeMoreText
        });
        if (!this.sessionSvc.CurrentAccountContent.header) {
            this.windowSvc.czq('#cz-header').attr('style', clientlibs_1.StyleUtils.appendStyle('display: none !important;'));
        }
        this.windowSvc.window.setTimeout(function () {
            try {
                //the basePanel Container
                _this.windowSvc.czq('#cz-panel-container').removeClass('hidden').attr('style', '');
                //if panel was open reopen it
                if (_this.basePanelVisible || _this.openOnStart) {
                    _this.show(true);
                }
                _this.appSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.PanelReady);
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report('SuccessPanel.buildCsmPanelTimeout', ex);
            }
        }, 500);
    };
    SuccessPanel.prototype.applyBranding = function (branding) {
        var container = this.windowSvc.czq('#cz-panel-container');
        var brandingStyleSheet = '';
        var wrapInRule = function (selector, rules) {
            return selector + " { " + rules.join(' ') + " }";
        };
        var mapBrandingItemToCSSProps = function (brandingItem) {
            var rules = [];
            for (var k in brandingItem) {
                if (brandingItem.hasOwnProperty(k) && brandingItem[k] != null && (brandingItem[k] || '').trim().length > 0) {
                    rules.push(clientlibs_1.StyleUtils.camelCaseToDash(k) + ':' + brandingItem[k] + ' !important;');
                }
            }
            return rules;
        };
        if (branding.avatar) {
            //Avatar Glow Color
            if (branding.avatar.glowColor && branding.avatar.glowColor.trim().length > 0) {
                var glowStyle = "@keyframes czGlowCustom { 20% { box-shadow: 0 0 10px " + branding.avatar.glowColor + " ; }} ";
                glowStyle += '.cz-chat-button-2 {animation-name: czGlowCustom !important;}';
                brandingStyleSheet += glowStyle;
            }
            //Tabbed Avatar Background Color
            if (branding.avatar.tabBackgroundColor && branding.avatar.tabBackgroundColor.trim().length > 0) {
                var tabStyles = mapBrandingItemToCSSProps({ backgroundColor: branding.avatar.tabBackgroundColor });
                brandingStyleSheet += wrapInRule('#czChatButtonWrapper.tabbed-avatar', tabStyles);
                tabStyles = mapBrandingItemToCSSProps({ borderColor: branding.avatar.tabBackgroundColor });
                brandingStyleSheet += wrapInRule('#czChatButtonWrapper.tabbed-avatar .cz-chat-button-2', tabStyles);
            }
        }
        if (branding.moreInfo) {
            //More Info Bubble Background Color
            if (branding.moreInfo.backgroundColor && branding.moreInfo.backgroundColor.trim().length > 0) {
                var tabStyles = mapBrandingItemToCSSProps({ borderRightColor: branding.moreInfo.backgroundColor });
                brandingStyleSheet += wrapInRule('#czChatButtonWrapper .cz-alert-message-body.alert-message-left:before', tabStyles);
                tabStyles = mapBrandingItemToCSSProps({ borderLeftColor: branding.moreInfo.backgroundColor });
                brandingStyleSheet += wrapInRule('#czChatButtonWrapper .cz-alert-message-body.alert-message-right:before', tabStyles);
            }
        }
        if (branding.panel) {
            //Apply whole panel z-index to launcher
            if (branding.panel.zIndex) {
                var zIndexStyles = mapBrandingItemToCSSProps({ zIndex: branding.panel.zIndex });
                brandingStyleSheet += wrapInRule('#czChatButtonWrapper', zIndexStyles);
            }
        }
        var standardItemsSelectors = {
            panel: 'div#cz-csm-panel',
            closeIcon: '#cz-csm-panel .cz-widget-controls span',
            header: '#cz-header',
            accountRepPane: '#cz-account-rep-pane',
            accountRepPaneName: '#cz-account-rep-pane .cz-user-account-name',
            accountRepPaneDetails: '#cz-account-rep-pane .cz-user-account-name small, #cz-account-rep-pane .cz-message-preview',
            announcements: '#cz-announcements .cz-announcement',
            announcementLinks: '#cz-announcements .cz-announcement a, #cz_popover_content .cz-announcement a, .cz-slide-announcement .cz-announcement a',
            announcementLinksHover: '#cz-announcements .cz-announcement a:hover, #cz_popover_content .cz-announcement a:hover, .cz-slide-announcement .cz-announcement a:hover',
            moreInfo: '#czChatButtonWrapper .cz-alert-message-body',
            footer: '#cz-csm-panel .cz-footer',
            footerLinks: '#cz-csm-panel .cz-footer a',
            footerLinksHover: '#cz-csm-panel .cz-footer a:hover'
        };
        for (var k in standardItemsSelectors) {
            if (standardItemsSelectors.hasOwnProperty(k) && branding.hasOwnProperty(k)) {
                var styles = mapBrandingItemToCSSProps(branding[k]);
                brandingStyleSheet += wrapInRule(standardItemsSelectors[k], styles);
            }
        }
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = brandingStyleSheet;
        container.prepend(style);
        if (branding.panel && branding.panel.zIndex) {
            this.basePanel.attr('style', clientlibs_1.StyleUtils.replaceStyleValue('z-index: 999999 !important;', ''));
        }
    };
    /* Account Rep Functionality */
    SuccessPanel.prototype.setupAccountRep = function () {
        var pane = this.windowSvc.czq('#cz-account-rep-pane');
        if (this.sessionSvc.ShowAccountOwner) {
            pane.css({ display: '' });
        }
        else {
            pane.attr('style', clientlibs_1.StyleUtils.appendStyle('display: none !important;'));
        }
    };
    SuccessPanel.prototype.getAccountOwnerAvatarHtml = function () {
        var currentUserAccount = this.tenantSvc.accountOwner, imageTemplate = this.templateCache.avatarImageTemplate, data = {
            avatarSrc: ''
        };
        if (this.sessionSvc.AccountOwnerAvatarUrl) {
            data.avatarSrc = this.sessionSvc.AccountOwnerAvatarUrl;
        }
        else if (currentUserAccount) {
            imageTemplate = this.templateCache.avatarInitialsTemplate;
            data.avatarSrc = (currentUserAccount.firstName || ' ').substring(0, 1) + (currentUserAccount.lastName || ' ').substring(0, 1);
        }
        return this.appSvc.templater.populateTemplate(imageTemplate, data);
    };
    /* Announcement & Popup Functionality */
    SuccessPanel.prototype.setupAnnouncements = function (announcementSetup) {
        //add announcements to csm panel
        var _this = this;
        for (var i = announcementSetup.announcements.length - 1; i >= 0; i--) {
            var current = announcementSetup.announcements[i];
            if (this.messageSvc.isPanelAnnouncement(current)) {
                this.addAnnouncementToPanelUi(current);
            }
        }
        //display the default announcement
        if (announcementSetup.announcements.length === 0) {
            this.displayDefaultAnnouncement();
        }
        //set up socket for incoming announcements
        this.subIds['announcementListenerId'] = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.AnnouncementClosed, function (message) {
            console.info('announcement closure received');
            _this.showMessageBubble(message.info);
        });
    };
    SuccessPanel.prototype.displayDefaultAnnouncement = function () {
        if (this.sessionSvc.CurrentAccountContent.defaultAnnouncement) {
            var defaultAnnouncement = {
                messageContent: this.sessionSvc.CurrentAccountContent.defaultAnnouncement,
                deliveryDate: new this.windowSvc.Date(),
                isRead: true // this is set so the digest wont emit a read event
            };
            this.addAnnouncementToPanelUi(defaultAnnouncement);
            //set after calling addAnnouncement because addAnnouncement resets default
            this.isDefaultAnnouncementActive = true;
        }
    };
    //Adds announcement to the Success Panel HTML
    SuccessPanel.prototype.addAnnouncementToPanelUi = function (announcement) {
        var announcementsContainer = this.windowSvc.czq('#cz-announcements');
        //if the default is active, remove it and turn off
        if (this.isDefaultAnnouncementActive) {
            announcementsContainer.empty();
            this.isDefaultAnnouncementActive = false;
        }
        //template the announcement,
        // remove any unreplaced placeholders,
        // and then add it to the top of the announcements container
        var messageTemplate = this.templateCache.announcementTemplate;
        if (this.messageSvc.isNPSAnnouncement(announcement)) {
            messageTemplate = this.templateCache.announcementNpsTemplatePanel;
            announcement.npsUrl = announcement.messageData.responseUrl;
            announcement.npsQuestion = announcement.messageData.question;
        }
        var messageHtml = this.appSvc.templater.populateTemplate(messageTemplate, announcement);
        if (messageHtml) {
            messageHtml = this.appSvc.templater.purge(messageHtml);
            announcementsContainer.prepend(messageHtml);
        }
        this.panelBody.scrollTop(0);
        this.adjustPanelFooter();
    };
    SuccessPanel.prototype.adjustPanelHeader = function (forceAdjust) {
        //adjust the content panel top offset to fit header
        if (!this.firstTimeOpened || forceAdjust) {
            var headerHeight = this.panelHeader.outerHeight(true);
            if (headerHeight < 40) {
                headerHeight = 40;
            }
            this.panelBody.attr('style', clientlibs_1.StyleUtils.appendStyle('top: ' + headerHeight + 'px !important;'));
            this.firstTimeOpened = true;
        }
    };
    SuccessPanel.prototype.adjustPanelFooter = function () {
        var panelHeight = this.panelBody.outerHeight(true), footerHeight = this.panelFooter.outerHeight(true);
        this.announcementsContainer.css('min-height', '');
        var announcementsHeight = this.announcementsContainer.outerHeight(true);
        //console.log("announcements Height", announcementsHeight);
        //if both > panelHeight do nothing
        //if both < panelHieght, stick footer to bottom
        if ((announcementsHeight + footerHeight) < panelHeight) {
            this.announcementsContainer.attr('style', clientlibs_1.StyleUtils.appendStyle('min-height: ' + (panelHeight - footerHeight) + 'px !important;'));
        }
    };
    //show the extra message bubble on the side of the launcher icon
    SuccessPanel.prototype.showMessageBubble = function (messageText) {
        //if the panel is open, short circuit
        if (this.basePanelVisible) {
            return;
        }
        //build the new message
        var messageHtml = this.appSvc.templater.populateTemplate(this.templateCache.messageBubbleTemplate, {}, true);
        //insert the message as text so that it is xss safe
        var messageElement = clientlibs_1.CoreUtils.createElementFromHTML(this.windowSvc.document, messageHtml);
        messageElement.textContent = messageText;
        //add the new message to the alert message
        this.alertMessageBody.empty().append(messageElement);
        //show the alert message
        this.alertMessageBody.attr('style', clientlibs_1.StyleUtils.replaceStyleValue('none', 'block'));
        //show the panel toggle
        this.panelToggleContent.css('display', '');
    };
    SuccessPanel.prototype.showDevlessPanel = function () {
        try {
            this.appSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.DevlessShow, true);
            this.windowSvc.czq('#cz-csm-panel .cz-admin').addClass('hidden');
        }
        catch (ex) {
            //report?
            errorLogger_1.default.report('SuccessPanel.showDevlessPanelEvent', ex);
        }
    };
    /* Other Functionality */
    SuccessPanel.prototype.onDigest = function () {
        var unreadCount = 0;
        for (var i = 0; i < this.messageSvc.Announcements.length; i++) {
            var msg = this.messageSvc.Announcements[i];
            if (!msg) {
                continue;
            }
            var msgDom = this.windowSvc.czq("#cz-sidebar-note-" + msg.sequence);
            if (msg.announcementIncludeInPanel) {
                if (msgDom.length === 0) {
                    this.addAnnouncementToPanelUi(msg);
                    msgDom = this.windowSvc.czq("#cz-sidebar-note-" + msg.sequence);
                }
                //if the panel is open check for read items
                //mark any visible announcements as read
                if (this.basePanelVisible) {
                    if (!msg.isRead) {
                        //console.info("Checking Visiblilty #cz-sidebar-note-" + msg.sequence);
                        if (this.windowSvc.isVisible(msgDom, true)) {
                            //console.info(`Visible #cz-sidebar-note-${msg.sequence}`);
                            this.messageSvc.SendReadReceipt(msg.id);
                        }
                        else {
                            //console.info(`NOT Visible #cz-sidebar-note-${msg.sequence}`);
                        }
                    }
                }
                else if (!msg.isRead) { //count unread for badge
                    unreadCount++;
                }
            }
            //expire any content
            //expiryDate
            if (msg.expiryDate) {
                var isExpired = new this.windowSvc.Date() > new this.windowSvc.Date(msg.expiryDate);
                if (isExpired) {
                    /* if (!this.messageSvc.isNPSAnnouncement(msg)) {
                         if (this.messageSvc.isPopupAnnouncement(msg)) {
                             //if popup, close
                             this.closePopUpAnnouncement();
                         } else if (this.messageSvc.isSliderAnnouncement(msg)) {
                             //if slider, close
                             this.closeSlider();
                         }
                     }*/
                    //remove from panel ui
                    msgDom.remove();
                    this.messageSvc.Announcements[i] = undefined;
                }
            }
        }
        var badgeStyles;
        if (unreadCount !== this.previousUnreadCount) {
            if (unreadCount > 0) {
                this.unreadBadge.text(unreadCount > 9 ? '9+' : unreadCount);
                badgeStyles = clientlibs_1.StyleUtils.replaceStyleValue('none', 'block');
            }
            else {
                badgeStyles = clientlibs_1.StyleUtils.replaceStyleValue('block', 'none');
            }
            if (unreadCount)
                console.log('Unread styles:', badgeStyles);
            this.unreadBadge.attr('style', badgeStyles);
        }
        this.previousUnreadCount = unreadCount;
        //sanitize the Announcements array
        this.messageSvc.SanitizeAnnouncements();
        var panelAnnouncements = this.messageSvc.Announcements.filter(this.messageSvc.isPanelAnnouncement), zeroAnnouncements = panelAnnouncements.length === 0;
        if (zeroAnnouncements && !this.isDefaultAnnouncementActive) {
            //show default announcement if no panel announcements
            this.displayDefaultAnnouncement();
        }
        //if only show when messages exist and zero announcements
        // hide the toggle
        if (zeroAnnouncements && this.sessionSvc.OnlyShowWhenMessagesExist) {
            this.panelToggle.addClass('hidden');
        }
        else {
            this.panelToggle.removeClass('hidden');
        }
    };
    SuccessPanel.prototype.onHalt = function () {
        console.log('Halting - Customer Panel');
        this.hide();
        this.removeAllInjectedHtml();
        PubSuber_1.default.removeAll(this.subIds);
    };
    return SuccessPanel;
}(PanelDisplay_1.BasePanelDisplay));
exports.default = SuccessPanel;


/***/ }),

/***/ "./src/core/TemplateCache.ts":
/*!***********************************!*\
  !*** ./src/core/TemplateCache.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TemplateCache = /** @class */ (function () {
    function TemplateCache() {
    }
    return TemplateCache;
}());
exports.default = TemplateCache;


/***/ }),

/***/ "./src/core/Templater.ts":
/*!*******************************!*\
  !*** ./src/core/Templater.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChurnZeroTemplater = /** @class */ (function () {
    function ChurnZeroTemplater(czq) {
        this.czq = czq;
        this.globals = {};
    }
    ChurnZeroTemplater.prototype.compile_template = function (url, replacementDictionary, callback) {
        var _this = this;
        this.czq.get(url, function (src) {
            var template = _this.populateTemplate(src, replacementDictionary);
            callback(template, replacementDictionary);
        });
    };
    ;
    ChurnZeroTemplater.prototype.populateTemplate = function (template, replacementDictionary, postPopulatePurge) {
        if (!template) {
            return;
        }
        //ensure the globals exists in the
        // replacement dictionary
        for (var x in this.globals) {
            if (!replacementDictionary[x]) {
                replacementDictionary[x] = this.globals[x];
            }
        }
        for (var x in replacementDictionary) {
            template = template.split("{{" + x + "}}").join((replacementDictionary[x] || ""));
        }
        if (postPopulatePurge === true) {
            template = this.purge(template);
        }
        return template;
    };
    ;
    ChurnZeroTemplater.prototype.addGlobal = function (key, value) {
        this.globals[key] = value;
    };
    ;
    ChurnZeroTemplater.prototype.purge = function (templateString) {
        if (!templateString) {
            return templateString;
        }
        return templateString.replace(ChurnZeroTemplater.PlaceHolderRegex, "");
    };
    ;
    ChurnZeroTemplater.PlaceHolderRegex = /{{[^}]*}}/g;
    return ChurnZeroTemplater;
}());
exports.default = ChurnZeroTemplater;


/***/ }),

/***/ "./src/core/UrlChangeHandler.ts":
/*!**************************************!*\
  !*** ./src/core/UrlChangeHandler.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UrlChangeHandler = /** @class */ (function () {
    function UrlChangeHandler(onChangeEvent, stopOnChange, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 100; }
        this.oldLocation = window.location.toString();
        this.onChangeEvent = onChangeEvent;
        this.stopOnChange = stopOnChange;
        this.Check = window.setInterval(function () {
            try {
                _this.detect();
            }
            catch (ex) {
                //meh
            }
        }, timeout);
    }
    UrlChangeHandler.prototype.detect = function () {
        if (this.oldLocation !== window.location.toString()) {
            console.log("URL Changed");
            this.onChangeEvent();
            if (this.stopOnChange) {
                this.Stop();
            }
            this.oldLocation = window.location.toString();
        }
    };
    UrlChangeHandler.prototype.Stop = function () {
        if (this.Check) {
            window.clearInterval(this.Check);
            this.Check = null;
        }
    };
    return UrlChangeHandler;
}());
exports.default = UrlChangeHandler;


/***/ }),

/***/ "./src/core/_ChurnZeroApp.ts":
/*!***********************************!*\
  !*** ./src/core/_ChurnZeroApp.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/core/Enums.ts");
var HashHandler_1 = __importDefault(__webpack_require__(/*! ./HashHandler */ "./src/core/HashHandler.ts"));
var TemplateCache_1 = __importDefault(__webpack_require__(/*! ./TemplateCache */ "./src/core/TemplateCache.ts"));
var SuccessPanel_1 = __importDefault(__webpack_require__(/*! ./SuccessPanel */ "./src/core/SuccessPanel.ts"));
var EventSpider_1 = __importDefault(__webpack_require__(/*! ./EventSpider */ "./src/core/EventSpider.ts"));
var activityMonitor_1 = __importDefault(__webpack_require__(/*! ./activityMonitor */ "./src/core/activityMonitor.ts"));
var contentPanel_1 = __importDefault(__webpack_require__(/*! ./contentPanel */ "./src/core/contentPanel.ts"));
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var errorLogger_1 = __importDefault(__webpack_require__(/*! ./errorLogger */ "./src/core/errorLogger.ts"));
var tenant_service_1 = __importStar(__webpack_require__(/*! ../services/tenant.service */ "./src/services/tenant.service.ts"));
var Herald_1 = __importDefault(__webpack_require__(/*! ./Herald */ "./src/core/Herald.ts"));
var UrlChangeHandler_1 = __importDefault(__webpack_require__(/*! ./UrlChangeHandler */ "./src/core/UrlChangeHandler.ts"));
var window_service_1 = __importDefault(__webpack_require__(/*! ../services/window.service */ "./src/services/window.service.ts"));
var http_service_1 = __importDefault(__webpack_require__(/*! ../services/http.service */ "./src/services/http.service.ts"));
var storage_service_1 = __importDefault(__webpack_require__(/*! ../services/storage.service */ "./src/services/storage.service.ts"));
var simpleStorage_repository_1 = __importDefault(__webpack_require__(/*! ../repositories/simpleStorage.repository */ "./src/repositories/simpleStorage.repository.ts"));
var application_service_1 = __importDefault(__webpack_require__(/*! ../services/application.service */ "./src/services/application.service.ts"));
var socket_repository_1 = __importDefault(__webpack_require__(/*! ../repositories/socket.repository */ "./src/repositories/socket.repository.ts"));
var communication_service_1 = __importDefault(__webpack_require__(/*! ../services/communication.service */ "./src/services/communication.service.ts"));
var session_service_1 = __importDefault(__webpack_require__(/*! ../services/session.service */ "./src/services/session.service.ts"));
var message_service_1 = __importDefault(__webpack_require__(/*! ../services/message.service */ "./src/services/message.service.ts"));
var event_service_1 = __importDefault(__webpack_require__(/*! ../services/event.service */ "./src/services/event.service.ts"));
var walkthrough_service_1 = __importDefault(__webpack_require__(/*! ../services/walkthrough.service */ "./src/services/walkthrough.service.ts"));
var attribute_service_1 = __importDefault(__webpack_require__(/*! ../services/attribute.service */ "./src/services/attribute.service.ts"));
var subframe_repository_1 = __importDefault(__webpack_require__(/*! ../repositories/subframe.repository */ "./src/repositories/subframe.repository.ts"));
var clientlibs_2 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var ChurnZeroApp = /** @class */ (function () {
    function ChurnZeroApp() {
        this.name = "ChurnZeroApp";
        this.version = "localhost-2020-03-18T17:47:22.537Z"; //gets replaced by build task
        this.isRunning = false;
        this.isRegistered = false;
        this.sfSubIds = {};
        //DBDisconnected Properties
        this.lastReconnectPing = null;
        this.reconnectAttemptInterval = 1000 * 60 * 5;
        //PubSub subscriptions
        this.subIds = {};
        this.bootRetryMaxAttempts = 5;
        this.bootRetryCount = 5;
        this.reregisterRetryCount = 10;
        this.templateCache = new TemplateCache_1.default();
        this.loadTemplates();
        this.appQueue = [];
        this.isMasterFrame = true;
        this.booted = false;
        this.isConnecting = false;
        this.isUpdating = false;
    }
    Object.defineProperty(ChurnZeroApp.prototype, "lastPageTag", {
        //Last page tag that was active
        get: function () {
            return this.storageSvc.get("CZ_PageTag", null);
        },
        set: function (value) {
            if (value) {
                this.storageSvc.set("CZ_PageTag", value);
            }
            else {
                this.storageSvc.remove("CZ_PageTag");
            }
        },
        enumerable: true,
        configurable: true
    });
    /********************
     * Exposed API
     *********************/
    //boot sequence
    ChurnZeroApp.prototype.boot = function (previousAppState) {
        var _this = this;
        if (this.bootRetryCount === this.bootRetryMaxAttempts)
            console.time("BOOTTIME");
        if (!clientlibs_1.CoreUtils.areCookiesEnabled()) {
            console.info("**Cookies Disabled - Shut it down");
            console.timeEnd("BOOTTIME");
            return;
        }
        //detect if master frame
        this.isIniFrame = clientlibs_1.CoreUtils.FeatureDetection.inIframe();
        try {
            if (this.isIniFrame && window["czDontClimb"] !== true) {
                this.isMasterFrame = false;
            }
        }
        catch (ex) {
            //meh
        }
        //set up core registries since we now know the dom is ready
        try {
            this.windowSvc = new window_service_1.default(window);
            this.httpSvc = new http_service_1.default(this.windowSvc.coder(), this.windowSvc.XMLHttpRequestReference());
            this.storageSvc = new storage_service_1.default(new simpleStorage_repository_1.default(this.windowSvc.coder()));
            this.applicationSvc = new application_service_1.default(this.storageSvc, this.windowSvc);
            this.applicationSvc.isMaster = this.isMasterFrame;
            this.tenantSvc = new tenant_service_1.default(this.storageSvc);
        }
        catch (e) {
            if (this.bootRetryCount--) {
                window.setTimeout(function () {
                    if (!_this.booted) {
                        console.info("Delaying boot, attempt #", (_this.bootRetryMaxAttempts - _this.bootRetryCount));
                        _this.boot(previousAppState);
                    }
                }, 1000);
            }
            else {
                console.timeEnd("BOOTTIME");
                errorLogger_1.default.report("ChurnZeroApp.boot.registryInit", e);
            }
            return;
        }
        if (!this.tenantSvc) {
            return;
        }
        //Unsupported Browser ... shut it down...
        if (!this.windowSvc.isSupportedBrowser()) {
            console.info("**Unsupported Browser - Shut it down");
            console.timeEnd("BOOTTIME");
            return;
        }
        if (this.windowSvc.window._czDebugging === true) {
            this.applicationSvc.isDebugging = true;
        }
        this.applicationSvc.debug("Boot - Begin");
        //process any previous appState
        if (previousAppState) {
            this.applicationSvc.debug("Loading previous application state", previousAppState);
            var wasSimpleArray = Array.isArray(previousAppState), wasChurnZeroAppInstance = !wasSimpleArray && (previousAppState.name === this.name);
            //we need to set what was previously the event queue
            // to the apps queue so any events in the previous queue will get
            // processed
            if (wasSimpleArray) {
                for (var i = 0; i < previousAppState.length; i++) {
                    var item = previousAppState[i];
                    if ((item[0] || "").toLowerCase() === 'origins') {
                        (item[1] || "").split(',').forEach(function (o) {
                            _this.windowSvc.addOrigin(o);
                        });
                        this.applicationSvc.debug('SubFrame Allowed Origins Expanded to:', this.windowSvc.origins);
                    }
                    else {
                        this.appQueue.push(item);
                    }
                }
            }
            else if (wasChurnZeroAppInstance) {
                //if the previousAppState was an instance of the ChurnZero App
                // we need to get some app state data to carry forward
                var previousQueue = previousAppState.getQueue();
                for (var i = 0; i < previousQueue.length; i++) {
                    this.appQueue.push(previousQueue[i]);
                }
            }
        }
        //setup the urls object
        this.applicationSvc.setupClientSideUrls();
        this.windowSvc.addOrigin(this.windowSvc.clientSideUrls.baseApiUrl.slice(0, -1));
        //add post message listener for frame communication
        if (this.applicationSvc.removeFrameComListener) {
            this.applicationSvc.removeFrameComListener();
        }
        this.applicationSvc.addFrameComListener();
        //if we are booting in an iframe
        // we need to check for a parent frame that has ChurnZero enabled
        // so we can leverage their connection instead of creating a duplicate
        if (this.isMasterFrame) {
            this.bootMasterFrame();
            this.booted = true;
            this.applicationSvc.debug("**Boot Finished - Master Frame");
            console.timeEnd("BOOTTIME");
        }
        else {
            this.bootSubFrame();
        }
    };
    //method for adding items to queue for processing
    ChurnZeroApp.prototype.push = function (arr) {
        this.appQueue.push(arr);
        if (this.booted) {
            this.processQueue();
        }
    };
    //stop all kernel functionality
    ChurnZeroApp.prototype.halt = function () {
        this.applicationSvc.debug("Halting");
        //check for exit modules
        this.checkPageTagExitModule();
        //stop the digest interval
        if (this.digestIntervalTimer) {
            this.windowSvc.window.clearInterval(this.digestIntervalTimer);
            this.digestIntervalTimer = null;
        }
        //also stop any registered sub-frames
        this.applicationSvc.messageSubFrames({
            code: Enums_1.Enums.FrameCommCodes.MasterFramePassdown,
            data: { code: Enums_1.Enums.ChurnZeroAppEvents.HALT }
        });
        //remove the stuff
        //call any registered digest functions
        this.applicationSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.HALT);
        //turn off events
        this.windowSvc.removeNamespacedEvents();
        if (this.hashHandler) {
            this.hashHandler.Stop();
            this.hashHandler = null;
        }
        if (this.pageMonitorUrlChangeHandler) {
            this.pageMonitorUrlChangeHandler.Stop();
            this.pageMonitorUrlChangeHandler = null;
        }
        //unload content panel so iframe is removed
        this.unloadContentPanel();
        //disconnect from socket
        this.commSvc.disconnect();
        this.isRunning = false;
    };
    //verify the credentials
    ChurnZeroApp.prototype.verify = function () {
        var verifyObject = {
            AppHost: { value: this.commSvc.appHost },
            AppKey: { value: this.commSvc.appKey },
            AccountId: { value: null },
            ContactId: { value: null },
            IsConnected: { value: this.commSvc.isConnected() },
            Module: { value: this.sessionSvc.CurrentModule || "Unknown" },
            SilentMode: { value: true },
            State: { value: "Master Frame" }
        };
        var ids = this.commSvc.splitContactKey(this.commSvc.contactKey);
        verifyObject.AccountId.value = ids.accountExternalId;
        verifyObject.ContactId.value = ids.contactExternalId;
        if (!this.sessionSvc.IsSilent) {
            delete verifyObject.SilentMode;
        }
        if (this.isMasterFrame) {
            verifyObject.State.value += " w/ " + Object.keys(this.applicationSvc.registeredSubFrames || {}).length + " children";
        }
        else {
            verifyObject.State.value = "Child Frame";
            verifyObject.IsConnected.value = verifyObject.IsConnected.value + " via Master Frame";
        }
        window["console"]["table"](verifyObject);
    };
    //toggle debug mode
    ChurnZeroApp.prototype.debug = function () {
        this.applicationSvc.isDebugging = !this.applicationSvc.isDebugging;
        if (this.applicationSvc.isDebugging) {
            this.windowSvc.window["console"]["info"]("ChurnZero debugging is now on. Any subsequent requests will be logged out to the console until ChurnZero.debug() is called again.");
            this.verify();
        }
        else {
            this.windowSvc.window["console"]["info"]("ChurnZero debugging is now off.");
        }
    };
    /********************
     * Setup Utils - Exposed
     *********************/
    //Expose internal Queue for updating app code
    ChurnZeroApp.prototype.getQueue = function () {
        return this.appQueue;
    };
    /********************
     * Public Functions Internals
     *********************/
    //master frame boot sub-routine
    ChurnZeroApp.prototype.bootMasterFrame = function () {
        var _this = this;
        //remove any subframe subscriptions that might have been created
        if (this.sfSubIds) {
            for (var key in this.sfSubIds) {
                if (this.sfSubIds.hasOwnProperty((key))) {
                    this.sfSubIds[key].remove();
                }
            }
        }
        //Setup Comm Service
        var commRepo = new socket_repository_1.default(this.storageSvc, this.httpSvc, this.windowSvc);
        this.commSvc = new communication_service_1.default(commRepo);
        //App Level
        this.setupInstanceServices();
        this.applicationSvc.debug("**Version - " + this.commSvc.appVersion);
        //try to emit any events
        this.processQueue();
        //setup the server response handlers
        //wire up initial connection listener
        this.subIds['initialConnectionSubId'] = this.commSvc.registerListener(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_INITIAL_CONNECTION, function (message) {
            try {
                _this.onInitialConnectionHandler(message.info);
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report("ChurnZeroApp.bootMasterFrame.initialConnectionSub", ex);
            }
        });
        //wire up subframe boot handler
        this.subIds['subframeRegisteredSubId'] = this.applicationSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.SubframeRegistered, function (message) {
            var eMapConfig = {
                eventMaps: _this.eventSvc.eventMaps,
                eventMapVersion: _this.eventSvc.eventMapVersion
            };
            var responseData = {
                source: null,
                vcode: message.info.vcode,
                isRunning: _this.isRunning,
                tenantId: _this.tenantSvc.currentTenantId(),
                contact: _this.tenantSvc.contact,
                featureFlags: _this.tenantSvc.featureFlags,
                eventMapConfig: eMapConfig,
            };
            _this.applicationSvc.sendFrameCom(_this.applicationSvc.getRegisteredSubFrameById(message.info.source), {
                code: Enums_1.Enums.FrameCommCodes.SubframeBootResponse,
                data: responseData
            });
        });
        //wire up subframes mirror for incomming socket messages to get pushed downward
        this.commSvc.registerMirror(function (info) {
            var data = clientlibs_2.iFrameUtils.buildTransportMessage(clientlibs_2.TransportCodes.PubSubMirror, info);
            _this.applicationSvc.messageSubFrames({
                code: Enums_1.Enums.FrameCommCodes.MasterFrameComRePublish,
                data: data
            });
        });
        //wire up listener for subframe to pass stuff back
        this.subIds['subframePassbackSubId'] = this.applicationSvc.pubsub.subscribe(Enums_1.Enums.FrameCommCodes.SubFramePassback, function (message) {
            switch (message.info.type) {
                case "send":
                    _this.commSvc.send(message.info.data.socketMessageTypeId, message.info.data.messageContent);
                    break;
                case "push":
                    _this.push(message.info.data);
                    break;
            }
        });
        //init the connection to the server
        console.log("initConnection from boot_master_frame");
        this.initConnection();
    };
    //sub frame boot sub-routine
    ChurnZeroApp.prototype.bootSubFrame = function () {
        var _this = this;
        var vcode = clientlibs_1.DataTypeUtils.newGuid();
        //wire up listener for master frame responses to boot announcement
        if (!this.sfSubIds["subframeBootResponseSubId"]) {
            this.sfSubIds["subframeBootResponseSubId"] = this.applicationSvc.pubsub.subscribe(Enums_1.Enums.FrameCommCodes.SubframeBootResponse, function (message) {
                //iFrame boot process
                try {
                    var mastersResponse = message.info;
                    //if I didnt init the communication reject it
                    if (mastersResponse.vcode !== vcode) {
                        return;
                    }
                    if (!mastersResponse.source) {
                        window["console"].warn("Can only boot ChurnZero sub-frames if top has ChurnZero");
                        return;
                    }
                    _this.applicationSvc.debug("Master Frame Found. Sub Frame initializing");
                    _this.masterFrameResponded = true;
                    //Setup Comm Service
                    var subframeRepo = new subframe_repository_1.default(_this.windowSvc, _this.applicationSvc, mastersResponse.source);
                    _this.commSvc = new communication_service_1.default(subframeRepo);
                    //App Level
                    _this.setupInstanceServices();
                    _this.applicationSvc.debug("Version - " + _this.commSvc.appVersion);
                    //wire up listener for comm pubs from master
                    _this.sfSubIds['masterFrameComRepublishSubId'] = _this.applicationSvc.pubsub.subscribe(Enums_1.Enums.FrameCommCodes.MasterFrameComRePublish, function (mirrorMessage) {
                        if (mirrorMessage.info.code === Enums_1.Enums.TransportCodes.PubSubMirror) {
                            _this.commSvc.publishMirrored(mirrorMessage.info.data);
                        }
                    });
                    //wire up listener for master frame application events
                    _this.sfSubIds['MasterFramePassdownSubId'] = _this.applicationSvc.pubsub.subscribe(Enums_1.Enums.FrameCommCodes.MasterFramePassdown, function (passdownMessage) {
                        switch (passdownMessage.info.code) {
                            case Enums_1.Enums.ChurnZeroAppEvents.HALT:
                                _this.halt();
                                break;
                            case Enums_1.Enums.ChurnZeroAppEvents.START:
                                _this.preStartLoad(passdownMessage.info.data);
                                _this.processQueue();
                                _this.startKernel();
                                break;
                        }
                    });
                    var config = {
                        tenantId: mastersResponse.tenantId,
                        contact: mastersResponse.contact,
                        featureFlags: mastersResponse.featureFlags,
                        eventMapConfig: mastersResponse.eventMapConfig
                    };
                    _this.preStartLoad(config);
                    //process anything that was queued during load
                    _this.processQueue();
                    //start the kernel if the master is already running
                    // otherwise the masters kernel start will trigger a MasterFramePassdown:START
                    if (mastersResponse.isRunning) {
                        _this.startKernel();
                    }
                    _this.isRegistered = true;
                    _this.booted = true;
                    _this.applicationSvc.debug("**Boot Finished - Sub Frame");
                    console.timeEnd("BOOTTIME");
                }
                catch (ex) {
                    if (_this.reregisterRetryCount--) {
                        window.setTimeout(function () {
                            if (!_this.isRegistered) {
                                console.info("Delaying registration, attempt #", (10 - _this.reregisterRetryCount));
                                _this.bootSubFrame();
                            }
                        }, 1000);
                    }
                    else {
                        //only log errors not about registerSubFrame
                        if (ex && ex.message && ex.message.indexOf("registerSubFrame") !== -1) {
                            return;
                        }
                        var extraInfo = { retriesRemaining: _this.reregisterRetryCount };
                        errorLogger_1.default.report("ChurnZeroApp.bootsubFrame", ex, extraInfo);
                    }
                }
            });
        }
        //do boot announcement
        this.applicationSvc.debug('Doing boot announcement to top');
        this.applicationSvc.sendFrameCom({ window: this.windowSvc.window.top, origin: '*' }, {
            code: Enums_1.Enums.FrameCommCodes.SubframeBoot,
            data: vcode
        });
        //check for parent
        if (this.subframeParentTimeout) {
            this.windowSvc.window.clearTimeout(this.subframeParentTimeout);
            this.subframeParentTimeout = null;
        }
        this.subframeParentTimeout = this.windowSvc.window.setTimeout(function () {
            if (!_this.isMasterFrame && !_this.masterFrameResponded) {
                _this.applicationSvc.debug('Doing boot announcement to parent');
                _this.applicationSvc.sendFrameCom({ window: _this.windowSvc.window.parent, origin: '*' }, {
                    code: Enums_1.Enums.FrameCommCodes.SubframeBoot,
                    data: vcode
                });
                //boot as master frame after 1050 ms timeout
                _this.windowSvc.window.setTimeout(function () {
                    if (!_this.isMasterFrame && !_this.masterFrameResponded) {
                        _this.applicationSvc.debug('Master frame not present above. Booting as Master');
                        _this.isMasterFrame = true;
                        _this.applicationSvc.isMaster = true;
                        _this.bootMasterFrame();
                        _this.booted = true;
                        _this.applicationSvc.debug("**Boot Finished - Master Frame");
                        console.timeEnd("BOOTTIME");
                    }
                }, 1050);
            }
        }, 1050);
    };
    ChurnZeroApp.prototype.processQueue = function () {
        console.info("Processing Queue", JSON.stringify(this.appQueue));
        while (this.appQueue.length > 0) {
            var queueItem = this.appQueue.shift(), method = void 0, args = [];
            if (Array.isArray(queueItem)) {
                method = queueItem.shift();
                args = queueItem;
            }
            else {
                method = queueItem;
            }
            //case insensitivity helpers
            switch ((method || "").toLowerCase()) {
                case "trackevent":
                    method = "trackEvent";
                    break;
                case "setattribute":
                    method = "setAttribute";
                    break;
                case "incrementattribute":
                    method = "incrementAttribute";
                    break;
                case "setappkey":
                    method = "setAppKey";
                    break;
                case "setcontact":
                    method = "setContact";
                    break;
                case "setmodule":
                    method = "setModule";
                    break;
                case "silent":
                    method = "setSilent";
                    break;
                case "setcontactfromcache":
                    method = "setContactFromCache";
                    break;
                case "stop":
                    method = "stop";
                    break;
                case "urltracking":
                    method = "setUrlTracking";
                    break;
                case "testannouncement":
                    method = "testAnnouncement";
                    break;
                case "replayannouncement":
                    method = "replayAnnouncement";
                    break;
                case "updateannouncement":
                    method = "updateAnnouncement";
                    break;
                case "hideannouncement":
                    method = "hideAnnouncement";
                    break;
                case "testwalkthrough":
                    method = "testWalkthrough";
                    break;
                case "open":
                    method = "openPanel";
                    break;
                case "close":
                    method = "closePanel";
                    break;
            }
            try {
                console.log("Trying:", method);
                this.applicationSvc.debug("Received " + method + ": ", args);
                this[method].apply(this, args);
            }
            catch (err) {
                console.warn("Warning - " + method + " - " + err + " - " + args);
                console.warn(err);
            }
        }
    };
    ChurnZeroApp.prototype.setAppKey = function (appKey) {
        var currentKey = this.commSvc.appKey;
        if (currentKey && this.commSvc.isConnected() && appKey === currentKey) {
            console.info("Already connected and same appkey so no need to reconnect");
            return;
        }
        if (currentKey && currentKey !== appKey) {
            this.halt();
        }
        if (!this.isMasterFrame) {
            //console.info("Not the master frame so no need for connection.(setAppKey)");
            this.pushToMaster(["setAppKey", appKey]);
            return;
        }
        this.commSvc.appKey = appKey;
        console.info("App Key set to : ", this.commSvc.appKey);
        //during boot we call process queue so that the appKey can be set at anypoint during load
        // then we call initConnection so we want to avoid double connections. To do that we prevent set app key
        // from calling initConnection until after booting has completed.
        //
        // tldr: calling setAppKey after churnzero is ready will initConnection.
        // calling before will not as it is handled in the boot process.
        if (this.booted) {
            console.log("initConnection from setAppKey");
            this.initConnection();
        }
    };
    //retrieve the contactKey from the cache
    ChurnZeroApp.prototype.setContactFromCache = function () {
        var wouldBeFullKey = this.commSvc.getContactKeyFromCache();
        this._setContactKey(wouldBeFullKey);
    };
    //use supplied accountExternalId and contactExternalId for new contactKey
    ChurnZeroApp.prototype.setContact = function (accountExternalId, contactExternalId, accountExternalIdHash, contactExternalIdHash) {
        if (contactExternalId && contactExternalId.toString().trim().length === 0) {
            window["console"]["warn"]("Contact ExternalId can not be empty.");
            return;
        }
        var wouldBeFullKey = null;
        if (accountExternalId && contactExternalId) {
            wouldBeFullKey = this.commSvc.generateContactKey(accountExternalId, contactExternalId);
        }
        else if (this.commSvc.isContactKeyValid(accountExternalId)) {
            wouldBeFullKey = accountExternalId;
        }
        //allow null wouldBeFullKey to be passed in so that
        // it is possible to clear out previous contactKey
        this._setContactKey(wouldBeFullKey, accountExternalIdHash, contactExternalIdHash);
    };
    ChurnZeroApp.prototype._setContactKey = function (wouldBeFullKey, accountExternalIdHash, contactExternalIdHash) {
        var currentKey = this.commSvc.contactKey;
        //if the new key is different than the old key
        // reset the app so we can start fresh with
        // the new key
        var keyChanged = currentKey && currentKey !== wouldBeFullKey;
        if (keyChanged) {
            this.stop();
        }
        if (!this.isMasterFrame) {
            //console.info("Not the master frame so no need for connection.(setAppKey)");
            var keyParts = this.commSvc.splitContactKey(wouldBeFullKey);
            var items = ["setContact", keyParts.accountExternalId, keyParts.contactExternalId];
            if (accountExternalIdHash || contactExternalIdHash) {
                items = items.concat([accountExternalIdHash, contactExternalIdHash]);
            }
            this.pushToMaster(items);
            return;
        }
        //if wouldBeFullKey is null, contactKey will be cleared (in mem and in storage)
        this.commSvc.contactKey = wouldBeFullKey;
        this.commSvc.accountHash = accountExternalIdHash;
        this.commSvc.contactHash = contactExternalIdHash;
        console.info("Contact Unique Value set to : ", this.commSvc.contactKey);
        if (this.commSvc.isConnected() && wouldBeFullKey === currentKey) {
            console.info("Already connected and same contactkey so no need to reconnect");
            return;
        }
        //during boot we call process queue so that the contact can be set at any point during load
        // then we call initConnection so we want to avoid double connections. To do that we prevent set contact
        // from calling initConnection until after booting has completed.
        if (this.booted) {
            console.log("initConnection from _setContact");
            this.initConnection();
        }
    };
    ChurnZeroApp.prototype.pushToMaster = function (items) {
        try {
            this.applicationSvc.debug("Pushing to Master:", items);
            this.applicationSvc.messageMaster({
                code: Enums_1.Enums.FrameCommCodes.SubFramePassback,
                data: {
                    type: 'push',
                    data: items
                }
            });
        }
        catch (ex) {
            //meh
        }
    };
    //stop all churnzero functionality
    ChurnZeroApp.prototype.stop = function () {
        //flush
        this.commSvc.flush();
        //reset the contact
        this.tenantSvc.resetContact();
        this.commSvc.contactKey = null;
        this.commSvc.accountHash = null;
        this.commSvc.contactHash = null;
        //halt the app
        this.halt();
    };
    //Track an event that occurred in the UI
    ChurnZeroApp.prototype.trackEvent = function (eventName, description, quantity, customFields) {
        this.eventSvc.TrackEvent(eventName, description, quantity, customFields);
    };
    //Set an attribute about the current User
    ChurnZeroApp.prototype.setAttribute = function (entity, name, value) {
        this.attributeSvc.SetAttribute(entity, name, value);
    };
    //Increment an attribute about the current User
    ChurnZeroApp.prototype.incrementAttribute = function (entity, name, value) {
        this.attributeSvc.IncrementAttribute(entity, name, value);
    };
    //Set current Module for tracking purposes
    ChurnZeroApp.prototype.setModule = function (module) {
        if (this.isMasterFrame) {
            this.wasModuleSet = true;
            this.sessionSvc.SetModule(module);
        }
        else {
            this.pushToMaster(['setModule', module]);
        }
    };
    //Set Silent mode for force hiding the panel
    ChurnZeroApp.prototype.setSilent = function (isSilent) {
        this.sessionSvc.SetSilent(isSilent);
        if (isSilent) {
            if (this._successPanel) {
                //shut down panel
                this.unloadSuccessPanel();
            }
            //else !this._successPanel => be silent; panel doesn't exist
            if (this._contentPanel) {
                this.unloadContentPanel();
            }
        }
        else {
            if (!this._successPanel) {
                //startup panel
                this.loadSuccessPanel();
            }
            //else this._successPanel => stop being silent; panel already exists
        }
    };
    //Set  URL Tracking Flag
    ChurnZeroApp.prototype.setUrlTracking = function (enabled) {
        this.commSvc.urlTracking = enabled;
    };
    //Set Connection Domain
    ChurnZeroApp.prototype.setConnectionDomain = function (connectionDomain) {
        if (clientlibs_1.CoreUtils.Strings.isNullOrEmpty(connectionDomain)) {
            this.applicationSvc.debug("Could not set connection domain to empty string");
            return;
        }
        this.applicationSvc.debug("Setting connection domain to ", connectionDomain);
        this.windowSvc.czHost = connectionDomain;
        //reparse the urls based on what was set
        this.applicationSvc.setupClientSideUrls();
        this.windowSvc.addOrigin(this.windowSvc.clientSideUrls.baseApiUrl.slice(0, -1));
        //if isConnected, disconnect and reconnect
        /*if (this.commSvc.isConnected()) {

            /!*!//add post message listener for frame communication
            if (this.applicationSvc.removeFrameComListener) {
                this.applicationSvc.removeFrameComListener();
            }
            this.applicationSvc.addFrameComListener();*!/

            //wire up initial connection listener
            this.subIds['initialConnectionSubId'] = this.commSvc.registerListener(Enums.SocketMessageTypes.SOCKETMESSAGETYPE_INITIAL_CONNECTION, (message: PubSubMessage<SocketIoInitialConnection>) => {
                try {
                    this.onInitialConnectionHandler(message.info);
                }
                catch (ex) {
                    //report?
                    ErrorLogger.report("ChurnZeroApp.setConnectionDomain.initialConnectionSub", ex);
                }
            });
            this.initConnection();
        }*/
    };
    //set panel state
    ChurnZeroApp.prototype.openPanel = function () {
        if (!this.isMasterFrame) {
            return;
        }
        if (this._successPanel) {
            this._successPanel.show(true);
        }
        this.wasOpenRequested = true;
    };
    ChurnZeroApp.prototype.closePanel = function () {
        if (!this.isMasterFrame) {
            return;
        }
        if (this._successPanel) {
            this._successPanel.hide();
        }
    };
    //testing content
    ChurnZeroApp.prototype.testAnnouncement = function (type, message, includeInPanel, config) {
        if (this._herald) {
            this._herald.TestAnnouncement(type, message, includeInPanel, config);
        }
    };
    ChurnZeroApp.prototype.updateAnnouncement = function (type, message, includeInPanel, config) {
        if (this._herald) {
            this._herald.UpdateAnnouncement(type, message, includeInPanel, config);
        }
    };
    ChurnZeroApp.prototype.hideAnnouncement = function () {
        if (this._herald) {
            this._herald.HideAnyAnnouncement();
        }
    };
    ChurnZeroApp.prototype.replayAnnouncement = function (id) {
        if (this._herald) {
            this._herald.ReplayAnnouncement(id);
        }
    };
    ChurnZeroApp.prototype.testWalkthrough = function (walkthrough) {
        if (this._herald) {
            this._herald.TestWalkthrough(walkthrough);
        }
    };
    /********************
     * Core Functionality
     *********************/
    //initializes kernel functionality
    ChurnZeroApp.prototype.preStartLoad = function (config) {
        //Set Feature Flags
        this.tenantSvc.featureFlags = config.featureFlags;
        //Set the tenant data
        this.tenantSvc.setTenantId(config.tenantId);
        //Load contact data if not already present
        var currentContact = this.tenantSvc.contact;
        currentContact.id = config.contact.id;
        this.tenantSvc.SetContact(currentContact);
        //Load Events Map
        this.eventSvc.LoadEventMapConfig(config.eventMapConfig);
        //Load Page Tags
        this.tenantSvc.LoadPageTagConfig(config.pageTagConfig);
        //Load Walkthroughs
        this.walkthroughSvc.LoadWalkthroughConfig(config.walkthroughConfig);
    };
    ChurnZeroApp.prototype.startKernel = function () {
        var _this = this;
        //if the app is already running don't start again
        if (this.isRunning) {
            this.applicationSvc.debug("Attempted to start but was already running.");
            return;
        }
        //reset the Kernel
        //if there is a digestInterval already clear it
        try {
            if (this.digestIntervalTimer) {
                this.windowSvc.window.clearInterval(this.digestIntervalTimer);
                this.digestIntervalTimer = null;
            }
        }
        catch (ex) {
            errorLogger_1.default.report('_ChurnZeroApp.startKernel.clearDigestInterval', ex);
            return;
        }
        this.applicationSvc.debug("Kernel Started");
        try {
            //Check DB state
            this.dbDisconnected = false;
            var currentContact = this.tenantSvc.contact;
            if (currentContact && currentContact.hasOwnProperty("id") && currentContact.id !== null) {
                this.dbDisconnected = currentContact.id.toString() === "0";
                this.dbMigrating = currentContact.id.toString() === "-1";
            }
            this.lastReconnectPing = this.windowSvc.Date.now();
        }
        catch (ex) {
            errorLogger_1.default.report('_ChurnZeroApp.startKernel.checkDBState', ex);
            return;
        }
        //load any new app objects here:
        try {
            this.loadEventSpider();
        }
        catch (ex) {
            errorLogger_1.default.report('_ChurnZeroApp.startKernel.loadEventSpider', ex);
            return;
        }
        try {
            this.loadPageMonitor();
        }
        catch (ex) {
            errorLogger_1.default.report('_ChurnZeroApp.startKernel.loadPageMonitor', ex);
            return;
        }
        if (this.isMasterFrame) {
            if (!this.dbDisconnected && !this.dbMigrating) {
                try {
                    //if the contact has a panel enabled kick it off
                    if (this.sessionSvc.PanelEnabled && !this.sessionSvc.IsSilent) {
                        this.loadSuccessPanel();
                    }
                }
                catch (ex) {
                    errorLogger_1.default.report('_ChurnZeroApp.startKernel.loadSuccessPanel', ex);
                    return;
                }
                try {
                    //if devless is enabled listen for open messages
                    if (this.sessionSvc.ContentPanelEnabled) {
                        if (!this.subIds["loadContentPanelSubId"]) {
                            this.subIds["loadContentPanelSubId"] = this.applicationSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessShow, function (message) {
                                //guard against silent mode
                                if (_this.sessionSvc.IsSilent)
                                    return;
                                //load the content panel child object
                                _this.loadContentPanel(message.info);
                            });
                        }
                        //if it was previously visible... show it again
                        if (this.sessionSvc.IsContentPanelOpen) {
                            this.applicationSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.DevlessShow);
                        }
                    }
                }
                catch (ex) {
                    errorLogger_1.default.report('_ChurnZeroApp.startKernel.loadDevless', ex);
                    return;
                }
            }
            try {
                this.loadActivityMonitor();
            }
            catch (ex) {
                errorLogger_1.default.report('_ChurnZeroApp.startKernel.loadActivityMonitor', ex);
                return;
            }
        }
        //tell everyone to start their engines
        try {
            this.applicationSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.START);
        }
        catch (ex) {
            errorLogger_1.default.report('_ChurnZeroApp.startKernel.publishStart', ex);
            return;
        }
        try {
            //set contact active status
            this.sessionSvc.triggerHeartbeat(this.isMasterFrame);
        }
        catch (ex) {
            errorLogger_1.default.report('_ChurnZeroApp.startKernel.triggerHeartbeat', ex);
            return;
        }
        try {
            //setup the digest cycle
            // set to 2 seconds so unread messages are evaluated
            this.digestIntervalTimer = setInterval(function () {
                try {
                    _this.digestInterval();
                }
                catch (ex) {
                    //meh
                }
            }, 2000);
        }
        catch (ex) {
            errorLogger_1.default.report('_ChurnZeroApp.startKernel.digestInterval', ex);
        }
        this.isRunning = true;
    };
    //kernel loop
    ChurnZeroApp.prototype.digestInterval = function () {
        //console.info((this.isMasterFrame ? "" : "iFrame ") + "Digest Interval");
        //if someone tried to dispose of the ChurnZeroObject without calling stop first
        // halt the instance to clean everything up
        if (this.windowSvc.wasDisposed()) {
            console.log("Was Disposed");
            this.halt();
            return;
        }
        //if unacceptable location, halt the app
        if (!this.windowSvc.isAcceptableLocation()) {
            this.halt();
            return;
        }
        //try to reconnect to the db
        if (this.isMasterFrame && (this.dbDisconnected || this.dbMigrating) && +this.windowSvc.Date.now() - +this.lastReconnectPing > (this.reconnectAttemptInterval)) {
            this.lastReconnectPing = this.windowSvc.Date.now();
            this.initConnection();
        }
        if (this.isMasterFrame) {
            //ping back that user is active still
            this.sessionSvc.triggerHeartbeat(this.isMasterFrame);
        }
        //call any registered digest functions
        this.applicationSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.DIGEST);
    };
    //connect to the ChurnZero server
    ChurnZeroApp.prototype.initConnection = function () {
        var _this = this;
        if (this.isConnecting) {
            console.info("already connecting...");
            return;
        }
        if (!this.isMasterFrame) {
            console.info("Not Master Frame so no need for connection.(initConnection)");
            return;
        }
        console.info("New connection requested");
        //make sure any hash change event setup for login redirect is turned off
        if (this.hashHandler) {
            this.hashHandler.Stop();
            this.hashHandler = null;
        }
        var acceptableLocation = this.windowSvc.isAcceptableLocation(), validContactKey = this.commSvc.isContactKeyValid(this.commSvc.contactKey), validAppKey = this.commSvc.isAppKeyValid(this.commSvc.appKey);
        if (acceptableLocation && validContactKey && validAppKey) {
            //disconnect from socket
            this.commSvc.disconnect();
            //locking connection
            this.isConnecting = true;
            this.applicationSvc.debug("Connecting - from: " + this.windowSvc.href() + " to: " + this.windowSvc.clientSideUrls.baseApiUrl);
            //connect new socket
            this.commSvc.connect(this.windowSvc.socketServerApiUrl, function (initialConnection) {
                _this.applicationSvc.debug("Connection Success");
                //unlock connecting
                _this.isConnecting = false;
                //check for a connectionDomain and if so prevent the initialConnection from triggering
                if (initialConnection.connectionDomain && initialConnection.connectionDomain !== _this.windowSvc.clientSideUrls.baseApiUrl) {
                    //this.removeSubById("initialConnectionSubId");
                    _this.setConnectionDomain(initialConnection.connectionDomain);
                    return _this.windowSvc.socketServerApiUrl;
                    //return false;
                }
            }, function () {
                _this.applicationSvc.debug("Error Connecting");
                //unlock connecting
                _this.isConnecting = false;
            });
            //If it is not an acceptable location (Login/Logout/etc)
            // setup an on UrlChange handler to try to init
            // when the page changes
        }
        else if (!acceptableLocation) {
            this.hashHandler = new HashHandler_1.default(this.initConnection.bind(this), true);
        }
    };
    ChurnZeroApp.prototype.onInitialConnectionHandler = function (initialConnection) {
        //setup all of our services with
        // data from the server passed in on the
        // initial connection
        this.removeSubById("initialConnectionSubId");
        //Set Functionality Enabled Flags
        this.sessionSvc.SetFunctionality(initialConnection.functionality);
        this.applicationSvc.WebAppDomain = initialConnection.webAppDomain || this.windowSvc.clientSideUrls.baseApiUrl;
        if (this.applicationSvc.WebAppDomain && this.sessionSvc.ContentPanelEnabled) {
            this.windowSvc.addOrigin(this.applicationSvc.WebAppDomain.slice(0, -1));
            //rebind with webapp domain message listener for frame communication
            if (this.applicationSvc.removeFrameComListener) {
                this.applicationSvc.removeFrameComListener();
            }
            this.applicationSvc.addFrameComListener();
        }
        //Set Account Specific Content
        this.sessionSvc.SetAccountContent(initialConnection.functionality);
        if (this.sessionSvc.HasAccountOwner) {
            this.tenantSvc.setAccountOwner(initialConnection.contact.userAccount);
        }
        //Load message data
        this.messageSvc.SeedAnnouncements(initialConnection.announcements);
        var preStartConfig = {
            tenantId: initialConnection.tenantId.toString(),
            contact: initialConnection.contact,
            featureFlags: initialConnection.featureFlags,
            eventMapConfig: initialConnection.eventMapConfig,
            pageTagConfig: initialConnection.pageTagConfig,
            walkthroughConfig: initialConnection.walkthroughConfig
        };
        //tell any children that are halted to start again
        this.applicationSvc.messageSubFrames({
            code: Enums_1.Enums.FrameCommCodes.MasterFramePassdown,
            data: {
                code: Enums_1.Enums.ChurnZeroAppEvents.START,
                data: preStartConfig
            }
        });
        this.preStartLoad(preStartConfig);
        //start up the kernel
        try {
            this.startKernel();
        }
        catch (ex) {
            errorLogger_1.default.report('_ChurnZeroApp.startKernel', ex);
        }
    };
    /**
     * Object Loaders
     */
    ChurnZeroApp.prototype.loadSuccessPanel = function () {
        var _this = this;
        //setup the Success Panel
        this._successPanel = new SuccessPanel_1.default(this.applicationSvc, this.tenantSvc, this.windowSvc, this.storageSvc, this.sessionSvc, this.messageSvc, this.commSvc, this.wasOpenRequested);
        this._herald = new Herald_1.default(this.applicationSvc, this.tenantSvc, this.sessionSvc, this.messageSvc, this.walkthroughSvc, this.windowSvc, this.commSvc);
        this.subIds["showSuccessPanelSubId"] = this.applicationSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.PanelShow, function (message) {
            _this.commSvc.setPollInterval(2500);
        });
        this.subIds["hideSuccessPanelSubId"] = this.applicationSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.PanelHide, function (message) {
            _this.commSvc.resetPollIntervalToDefault();
        });
    };
    ChurnZeroApp.prototype.unloadSuccessPanel = function () {
        if (this._successPanel) {
            this._successPanel.onHalt();
            this._successPanel = null;
        }
        if (this._herald) {
            this._herald.onHalt();
            this._herald = null;
        }
    };
    ChurnZeroApp.prototype.loadContentPanel = function (wasManualOpen) {
        var _this = this;
        if (wasManualOpen === void 0) { wasManualOpen = false; }
        if (this._contentPanel) {
            return;
        }
        this._contentPanel = new contentPanel_1.default(this.windowSvc, this.storageSvc, this.sessionSvc, this.applicationSvc, this.commSvc, this.tenantSvc, this.eventSvc, this.walkthroughSvc, wasManualOpen);
        //devless panel show
        this.subIds["devlessShowSubId"] = this.applicationSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessShow, function () {
            _this._successPanel.hide();
            _this.commSvc.setPollInterval(2500);
        });
        //devless panel hide
        this.subIds["devlessHideSubId"] = this.applicationSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessHide, function () {
            _this._successPanel.show();
            if (_this._successPanel.basePanelVisible) {
                _this.commSvc.setPollInterval(2500);
            }
            else {
                _this.commSvc.resetPollIntervalToDefault();
            }
        });
    };
    ChurnZeroApp.prototype.unloadContentPanel = function () {
        if (this._contentPanel) {
            this._contentPanel.onHalt();
            this._contentPanel = null;
        }
    };
    ChurnZeroApp.prototype.loadEventSpider = function () {
        //reset if previously existed
        if (this._eventSpider) {
            this._eventSpider.Stop();
            this._eventSpider = null;
        }
        this._eventSpider = new EventSpider_1.default(this.applicationSvc, this.tenantSvc, this.eventSvc, this.walkthroughSvc, this.windowSvc, this.commSvc, this.sessionSvc);
    };
    ChurnZeroApp.prototype.loadPageMonitor = function () {
        var _this = this;
        var lastUrl = this.windowSvc.href().toString();
        var monitorPageFunction = function () {
            try {
                var currentUrl = (_this.windowSvc.href() || "").toString();
                if (lastUrl === currentUrl) {
                    console.log("Same Url");
                    return;
                }
                lastUrl = currentUrl;
                //At this point we know the page changed
                _this.checkUrlAgainstPageTags(lastUrl);
                if (_this._herald) {
                    _this._herald.CompletelyAbandonAnyCurrentWalkthrough();
                }
                _this.checkUrlAgainstWalkthroughs(lastUrl);
                if (_this.isMasterFrame && _this._contentPanel) {
                    _this.applicationSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.DevlessCurrentHref);
                }
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report("ChurnZeroApp.loadPageMonitor", ex);
            }
        };
        //monitor hashchanges
        this.pageMonitorUrlChangeHandler = new UrlChangeHandler_1.default(monitorPageFunction, false, 500);
        //monitor history api
        this.windowSvc.window.addEventListener("popstate", monitorPageFunction, true);
        //check current url
        this.checkUrlAgainstPageTags(this.windowSvc.href());
        //wait for the panel to be ready then check for walkthroughs
        this.applicationSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.PanelReady, function () {
            _this.checkUrlAgainstWalkthroughs(_this.windowSvc.href());
        });
    };
    ChurnZeroApp.prototype.checkUrlAgainstPageTags = function (url) {
        if (!this.tenantSvc.FeatureEnabled(tenant_service_1.FeatureFlags.PageTags)) {
            return;
        }
        if (clientlibs_1.CoreUtils.Strings.isNullOrEmpty(url)) {
            return;
        }
        this.checkPageTagExitModule();
        if (this.tenantSvc.pageTags) {
            for (var i = 0; i < this.tenantSvc.pageTags.length; i++) {
                var pageTag = this.tenantSvc.pageTags[i];
                //skip disabled page tags
                if (!pageTag.disabled) {
                    if (clientlibs_1.CoreUtils.Urls.checkUrlAgainstPageTag(url, pageTag)) {
                        this.applicationSvc.debug("[Devless Page Tagging]", "Page Tag Active:", pageTag.pageName);
                        if (pageTag.shouldFireEvent) {
                            this.applicationSvc.debug("[Devless Page Tagging]", "Track Event:", pageTag.eventName);
                            this.trackEvent(pageTag.eventName);
                        }
                        if (pageTag.shouldSetModule) {
                            this.applicationSvc.debug("[Devless Page Tagging]", "Set Module:", pageTag.moduleName);
                            this.setModule(pageTag.moduleName);
                        }
                        this.lastPageTag = pageTag;
                    }
                }
            }
        }
    };
    ChurnZeroApp.prototype.checkPageTagExitModule = function () {
        //since we default shouldSetExitModule to true we need to check if shouldSetModule is also true
        // so that we are only setting the exit module when the entry module was set
        if (this.lastPageTag && this.lastPageTag.shouldSetModule && this.lastPageTag.shouldSetExitModule) {
            this.applicationSvc.debug("[Devless Page Tagging]", "Set Exit Module:", this.lastPageTag.exitModuleName);
            this.setModule(this.lastPageTag.exitModuleName);
            this.lastPageTag = null;
        }
    };
    ChurnZeroApp.prototype.checkUrlAgainstWalkthroughs = function (url) {
        if (!this.tenantSvc.FeatureEnabled(tenant_service_1.FeatureFlags.Walkthroughs)) {
            return;
        }
        //dont track events or engage walkthroughs if the devless panel enabled
        if (this.sessionSvc.ShouldPreventUsageSends) {
            return;
        }
        var pageVisitWalkthroughs = this.walkthroughSvc.GetPageVisitWalkthroughs();
        for (var i = 0; i < pageVisitWalkthroughs.length; i++) {
            var walkthrough = pageVisitWalkthroughs[i];
            var pageTag = walkthrough.pageTag, locationOptions = undefined;
            if (!pageTag.disabled) {
                if (pageTag.locationOptionsJson === null || pageTag.locationOptionsJson === undefined || !pageTag.isCustomLocation) {
                    locationOptions = new clientlibs_1.LocationOptions(clientlibs_1.CoreUtils.Urls.parseUrlToLocationParts(pageTag.location));
                    if (!pageTag.isCustomLocation && !(pageTag.locationOptionsJson === null || pageTag.locationOptionsJson === undefined)) {
                        var parsedOptions = clientlibs_1.LocationOptions.fromJson(pageTag.locationOptionsJson);
                        locationOptions.allowChildPaths = parsedOptions.allowChildPaths;
                        locationOptions.allowChildStates = parsedOptions.allowChildStates;
                        locationOptions.excludeSearchParts = parsedOptions.excludeSearchParts;
                    }
                }
                else {
                    locationOptions = clientlibs_1.LocationOptions.fromJson(pageTag.locationOptionsJson, this.windowSvc.JSON);
                }
                var regExString = clientlibs_1.CoreUtils.Urls.buildRegexFromLocationParts(pageTag.location, locationOptions);
                var regEx = new RegExp(regExString);
                if (url.match(regEx)) {
                    this.applicationSvc.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.WalkthroughStart, walkthrough);
                }
            }
        }
    };
    ChurnZeroApp.prototype.loadActivityMonitor = function () {
        var _this = this;
        if (!this.isMasterFrame) {
            return;
        }
        //reset if previously existed
        if (this._activityMonitor) {
            this._activityMonitor.Stop();
            this._activityMonitor = null;
        }
        this._activityMonitor = new activityMonitor_1.default(this.applicationSvc, this.windowSvc);
        this._activityMonitor.addIdleCallback(function () {
            _this.sessionSvc.SetModuleActivityInactive();
            _this.sessionSvc.triggerHeartbeat(_this.isMasterFrame);
            _this.commSvc.setPollInterval(300000);
        });
        this._activityMonitor.addActiveCallback(function () {
            _this.sessionSvc.SetModuleActivityActive();
            _this.sessionSvc.triggerHeartbeat(_this.isMasterFrame);
            _this.commSvc.resetPollIntervalToDefault();
        });
        if (!this.wasModuleSet) {
            this.sessionSvc.SetModule("Default");
        }
    };
    // noinspection JSMethodCanBeStatic
    ChurnZeroApp.prototype.loadTemplates = function () {
        this.templateCache.announcementNpsTemplate = __webpack_require__(/*! ../templateCache/announcementNpsTemplate.html */ "./src/templateCache/announcementNpsTemplate.html");
        this.templateCache.announcementNpsTemplatePanel = __webpack_require__(/*! ../templateCache/announcementNpsTemplatePanel.html */ "./src/templateCache/announcementNpsTemplatePanel.html");
        this.templateCache.announcementSliderTemplate = __webpack_require__(/*! ../templateCache/announcementSliderTemplate.html */ "./src/templateCache/announcementSliderTemplate.html");
        this.templateCache.announcementTemplate = __webpack_require__(/*! ../templateCache/announcementTemplate.html */ "./src/templateCache/announcementTemplate.html");
        this.templateCache.avatarImageTemplate = __webpack_require__(/*! ../templateCache/avatarImageTemplate.html */ "./src/templateCache/avatarImageTemplate.html");
        this.templateCache.avatarInitialsTemplate = __webpack_require__(/*! ../templateCache/avatarInitialsTemplate.html */ "./src/templateCache/avatarInitialsTemplate.html");
        this.templateCache.messageBubbleTemplate = __webpack_require__(/*! ../templateCache/messageBubbleTemplate.html */ "./src/templateCache/messageBubbleTemplate.html");
        this.templateCache.popoverContainerTemplate = __webpack_require__(/*! ../templateCache/popoverContainerTemplate.html */ "./src/templateCache/popoverContainerTemplate.html");
    };
    ChurnZeroApp.prototype.setupInstanceServices = function () {
        this.sessionSvc = new session_service_1.default(this.storageSvc, this.commSvc, this.applicationSvc, this.tenantSvc, this.windowSvc);
        this.messageSvc = new message_service_1.default(this.commSvc, this.windowSvc, this.storageSvc);
        this.eventSvc = new event_service_1.default(this.commSvc, this.windowSvc, this.applicationSvc, this.sessionSvc);
        this.walkthroughSvc = new walkthrough_service_1.default(this.commSvc, this.windowSvc, this.applicationSvc, this.sessionSvc);
        this.attributeSvc = new attribute_service_1.default(this.commSvc, this.sessionSvc);
    };
    ChurnZeroApp.prototype.removeSubById = function (subId) {
        if (this.subIds[subId]) {
            this.subIds[subId].remove();
            this.subIds[subId] = undefined;
        }
    };
    return ChurnZeroApp;
}());
exports.default = ChurnZeroApp;


/***/ }),

/***/ "./src/core/activityMonitor.ts":
/*!*************************************!*\
  !*** ./src/core/activityMonitor.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/core/Enums.ts");
var errorLogger_1 = __importDefault(__webpack_require__(/*! ./errorLogger */ "./src/core/errorLogger.ts"));
var ActivityMonitor = /** @class */ (function () {
    function ActivityMonitor(appSvc, windowSvc) {
        var _this = this;
        this.appSvc = appSvc;
        this.windowSvc = windowSvc;
        this.idleTimeoutMs = 15 * 60 * 1000; //15 minutes
        this.visibilityCheckIntervalMs = 500;
        this.currentIdleTimeMs = 0;
        this.active = false;
        this.idleTimeoutExpired = false;
        this.onActiveCallbacks = [];
        this.onIdleCallbacks = [];
        this.isHalted = false;
        //subscribe to events
        this.startId = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.START, function () { return _this.onStart(); });
        this.haltId = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.HALT, function () { return _this.onHalt(); });
    }
    ActivityMonitor.prototype.Stop = function () {
        this.onHalt();
    };
    ActivityMonitor.prototype.addIdleCallback = function (callback) {
        this.onIdleCallbacks.push(callback);
    };
    ActivityMonitor.prototype.addActiveCallback = function (callback) {
        this.onActiveCallbacks.push(callback);
    };
    //privates
    //start up behavior
    ActivityMonitor.prototype.onStart = function () {
        var _this = this;
        this.setEventNames();
        this.initEvents();
        this.triggerUserActive("onStart");
        this.visibilityCheckInterval = setInterval(function () {
            try {
                _this.checkIdleTimeout();
            }
            catch (ex) {
                //meh
            }
        }, this.visibilityCheckIntervalMs);
        this.isHalted = false;
    };
    //shutdown behavior
    ActivityMonitor.prototype.onHalt = function () {
        console.log("Halting - Activity Monitor");
        this.isHalted = true;
        if (this.visibilityCheckInterval) {
            clearInterval(this.visibilityCheckInterval);
            this.visibilityCheckInterval = null;
        }
        this.triggerUserIdle("Halting");
        if (this.startId) {
            this.startId.remove();
            this.startId = null;
        }
        if (this.haltId) {
            this.haltId.remove();
            this.haltId = null;
        }
        //clean up event listeners
        if (this.visibilityAPIFunction) {
            document.removeEventListener(this.visibilityChangeEventName, this.visibilityAPIFunction);
            this.visibilityAPIFunction = null;
        }
        if (this.windowBlurFunction) {
            this.windowSvc.window.removeEventListener("blur", this.windowBlurFunction);
            this.windowBlurFunction = null;
        }
        if (this.windowFocusFunction) {
            this.windowSvc.window.removeEventListener("focus", this.windowFocusFunction);
            this.windowFocusFunction = null;
        }
        if (this.resetIdleCountdownFunction) {
            document.removeEventListener("mousemove", this.resetIdleCountdownFunction);
            document.removeEventListener("keyup", this.resetIdleCountdownFunction);
            document.removeEventListener("touchstart", this.resetIdleCountdownFunction);
            this.windowSvc.window.removeEventListener("scroll", this.resetIdleCountdownFunction);
            this.resetIdleCountdownFunction = null;
        }
    };
    //check if the user has gone idle
    ActivityMonitor.prototype.checkIdleTimeout = function () {
        if (this.idleTimeoutExpired === false && this.currentIdleTimeMs > this.idleTimeoutMs) {
            this.idleTimeoutExpired = true;
            this.triggerUserIdle("Idle Timeout");
        }
        else {
            this.currentIdleTimeMs += this.visibilityCheckIntervalMs;
        }
    };
    //get the appropriate page visibility api event names
    ActivityMonitor.prototype.setEventNames = function () {
        //TODO : clean up use of document
        if (typeof document.hidden !== "undefined") {
            this.hiddenPropName = "hidden";
            this.visibilityChangeEventName = "visibilitychange";
        }
        else if (typeof document.msHidden !== "undefined") {
            this.hiddenPropName = "msHidden";
            this.visibilityChangeEventName = "msvisibilitychange";
        }
        else if (typeof document.webkitHidden !== "undefined") {
            this.hiddenPropName = "webkitHidden";
            this.visibilityChangeEventName = "webkitvisibilitychange";
        }
    };
    //set up all the event listeners
    ActivityMonitor.prototype.initEvents = function () {
        //TODO : clean up use of document?
        var _this = this;
        //Check page visibility API
        this.visibilityAPIFunction = function () {
            try {
                if (document[_this.hiddenPropName]) {
                    _this.triggerUserIdle("Document Visibility API");
                }
                else {
                    _this.triggerUserActive("Document Visibility API");
                }
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report("ActivityMonitor.visibilityAPIFunction", ex);
            }
        };
        document.addEventListener(this.visibilityChangeEventName, this.visibilityAPIFunction, false);
        //Check window focus/blur
        this.windowBlurFunction = function (e) {
            try {
                if (!_this.isIframeActive()) {
                    _this.triggerUserIdle("Window Blur");
                }
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report("ActivityMonitor.windowBlurFunction", ex);
            }
        };
        this.windowSvc.window.addEventListener("blur", this.windowBlurFunction);
        this.windowFocusFunction = function () {
            try {
                _this.triggerUserActive("Window Focus");
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report("ActivityMonitor.windowFocusFunction", ex);
            }
        };
        this.windowSvc.window.addEventListener("focus", this.windowFocusFunction);
        //Indicate the user is actively doing stuff
        this.resetIdleCountdownFunction = function (e) {
            try {
                _this.resetIdleCountdown(e);
            }
            catch (ex) {
                //report?
                errorLogger_1.default.report("ActivityMonitor.resetIdleCountdownFunction", ex);
            }
        };
        document.addEventListener("mousemove", this.resetIdleCountdownFunction);
        document.addEventListener("keyup", this.resetIdleCountdownFunction);
        document.addEventListener("touchstart", this.resetIdleCountdownFunction);
        this.windowSvc.window.addEventListener("scroll", this.resetIdleCountdownFunction);
    };
    //set the user as active
    ActivityMonitor.prototype.triggerUserActive = function (src) {
        if (!this.active) {
            //trigger onActiveCallbacks with boolean of
            // if the user went idle via lack of activity
            for (var i = 0; i < this.onActiveCallbacks.length; i++) {
                this.onActiveCallbacks[i]();
            }
            this.active = true;
        }
    };
    //set the user as idle
    ActivityMonitor.prototype.triggerUserIdle = function (src) {
        console.log("User gone idle", src);
        if (this.active) {
            //trigger onIdleCallbacks with boolean of
            // if the user had been idle for timeout period
            for (var i = 0; i < this.onIdleCallbacks.length; i++) {
                this.onIdleCallbacks[i]();
            }
            this.active = false;
        }
    };
    //set user as active and clear idle time
    ActivityMonitor.prototype.resetIdleCountdown = function (e) {
        if (this.idleTimeoutExpired) {
            this.triggerUserActive(e.type);
        }
        this.idleTimeoutExpired = false;
        this.currentIdleTimeMs = 0;
    };
    ActivityMonitor.prototype.isIframeActive = function () {
        return (document.activeElement && (document.activeElement.tagName || "").toUpperCase() === "IFRAME");
    };
    return ActivityMonitor;
}());
exports.default = ActivityMonitor;


/***/ }),

/***/ "./src/core/contentPanel.ts":
/*!**********************************!*\
  !*** ./src/core/contentPanel.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PubSuber_1 = __importDefault(__webpack_require__(/*! ./PubSuber */ "./src/core/PubSuber.ts"));
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/core/Enums.ts");
var ElementFinder_1 = __importDefault(__webpack_require__(/*! ../contentPanel/ElementFinder */ "./src/contentPanel/ElementFinder.ts"));
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var tenant_service_1 = __webpack_require__(/*! ../services/tenant.service */ "./src/services/tenant.service.ts");
var ContentPanel = /** @class */ (function () {
    function ContentPanel(windowSvc, storageSvc, sessionSvc, appSvc, commSvc, tenantSvc, eventSvc, walkthroughSvc, wasUserDriven) {
        var _this = this;
        if (wasUserDriven === void 0) { wasUserDriven = false; }
        this.windowSvc = windowSvc;
        this.storageSvc = storageSvc;
        this.sessionSvc = sessionSvc;
        this.appSvc = appSvc;
        this.commSvc = commSvc;
        this.tenantSvc = tenantSvc;
        this.eventSvc = eventSvc;
        this.walkthroughSvc = walkthroughSvc;
        this.subIds = {};
        this._adminPanelState = null;
        this.buildIframe();
        this.initEventHandlers(wasUserDriven);
        this.subIds["onHaltSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.ChurnZeroAppEvents.HALT, function () { return _this.onHalt; });
    }
    Object.defineProperty(ContentPanel.prototype, "AdminPanelState", {
        get: function () {
            //if the current _adminPanelState does not exist,
            // try to load it from storage
            if (!this._adminPanelState) {
                this._adminPanelState = this.storageSvc.get(ContentPanel.storageKeys.AdminPanelState, {
                    height: this.tenantSvc.FeatureEnabled(tenant_service_1.FeatureFlags.NewDevless) ? "365px" : "265px",
                    lastStatus: "",
                    lastStatusData: ""
                });
            }
            return this._adminPanelState;
        },
        set: function (AdminPanelOpenStatus) {
            this._adminPanelState = AdminPanelOpenStatus;
            //store current state of _adminPanelState
            this.persistState();
        },
        enumerable: true,
        configurable: true
    });
    ContentPanel.prototype.onHalt = function () {
        //persist state
        this.persistState();
        PubSuber_1.default.removeAll(this.subIds);
        if (this.frame) {
            this.frame.parentNode.removeChild(this.frame);
            this.frame = null;
        }
        if (this.frameResizer) {
            this.frameResizer.parentNode.removeChild(this.frameResizer);
            this.frameResizer = null;
        }
    };
    ContentPanel.prototype.persistState = function () {
        this.storageSvc.set(ContentPanel.storageKeys.AdminPanelState, this._adminPanelState);
    };
    ContentPanel.prototype.buildIframe = function () {
        //Setup the iframe
        var iframeSrc = this.appSvc.WebAppDomain + "external/template/contentPanel.html";
        var useNewDevless = this.tenantSvc.FeatureEnabled(tenant_service_1.FeatureFlags.NewDevless);
        if (useNewDevless) {
            iframeSrc = this.appSvc.WebAppDomain + "devless/";
        }
        iframeSrc += "?ak=" + encodeURIComponent(this.commSvc.appKey) + "&ti=" + this.tenantSvc.currentTenantId();
        var iframe = this.windowSvc.document.createElement("iframe");
        var resizerHeight = 40;
        var iframeHeight;
        try {
            iframeHeight = parseInt(this.AdminPanelState.height || "265px");
        }
        catch (ex) {
            iframeHeight = 265;
        }
        var resizerBottom = iframeHeight - (resizerHeight / 2);
        iframe.id = "cz-devless-iframe";
        iframe.src = iframeSrc;
        iframe.style.display = useNewDevless ? "block" : "none";
        iframe.style.position = "fixed";
        iframe.style.bottom = "0";
        iframe.style.left = "0";
        iframe.style.right = "0";
        iframe.style.height = iframeHeight + "px";
        iframe.style.width = "100%";
        iframe.style.zIndex = "1000000";
        iframe.style.border = "none";
        var iframeResizer = this.windowSvc.document.createElement("div");
        iframeResizer.id = "cz-devless-iframe-resizer";
        iframeResizer.style.display = useNewDevless ? "block" : "none";
        iframeResizer.style.position = "fixed";
        iframeResizer.style.bottom = resizerBottom + "px";
        iframeResizer.style.left = "50px";
        iframeResizer.style.right = "50px";
        iframeResizer.style.height = resizerHeight + "px";
        iframeResizer.style.zIndex = "1000002";
        iframeResizer.style.cursor = "row-resize";
        iframeResizer.ondragstart = function () {
            return false;
        };
        this.windowSvc.elementCache.body[0].appendChild(iframeResizer);
        this.windowSvc.elementCache.body[0].appendChild(iframe);
        this.frame = iframe;
        this.frameResizer = iframeResizer;
    };
    ContentPanel.prototype.initEventHandlers = function (wasUserDriven) {
        var _this = this;
        if (wasUserDriven === void 0) { wasUserDriven = false; }
        //Add a mirror to the pubsub so core events get propagated to the devlessIframe
        this.appSvc.pubsub.addMirror(function (message) {
            var transportMessage = clientlibs_1.iFrameUtils.encrypt(_this.windowSvc.JSON.stringify(clientlibs_1.iFrameUtils.buildTransportMessage(clientlibs_1.TransportCodes.PubSubMirror, message)));
            if (_this.frame) {
                //this is the iframe we created for hosting the devless panel so * is fine here
                _this.frame.contentWindow.postMessage(transportMessage, '*');
            }
        });
        //Add a listener for messages coming from the devlessIframe
        this.appSvc.addChildFrameListener();
        //attach listener for devlessInit
        this.subIds["devlessInitSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessInit, function () {
            var connectionInfo = {
                clientSideUrls: _this.windowSvc.clientSideUrls,
                webAppDomain: _this.appSvc.WebAppDomain,
                height: _this.AdminPanelState.height,
                currentTenantId: _this.tenantSvc.currentTenantId(),
                locationHref: _this.windowSvc.href(),
                wasUserDrivenOpen: wasUserDriven,
                featureFlags: _this.tenantSvc.featureFlags
            };
            _this.appSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.DevlessConnectionInfo, connectionInfo);
            _this.initElementFinder();
        });
        //devless panel show
        this.subIds["devlessShowSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessShow, function () {
            _this.frame.style.display = "block";
            _this.frameResizer.style.display = "block";
            _this.commSvc.setPollInterval(2500);
            _this.sessionSvc.IsContentPanelOpen = true;
        });
        //devless panel hide
        this.subIds["devlessHideSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessHide, function () {
            _this.frame.style.display = "none";
            _this.frameResizer.style.display = "none";
            _this.sessionSvc.IsContentPanelOpen = false;
        });
        //devless panel resize
        this.subIds["devlessResizeSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessResize, function (message) {
            var resizeInfo = message.info;
            if (resizeInfo.height) {
                _this.frame.style.height = resizeInfo.height || _this.frame.style.height;
            }
            if (resizeInfo.width) {
                _this.frame.style.width = resizeInfo.width || _this.frame.style.width;
            }
            if (resizeInfo.left) {
                _this.frame.style.left = resizeInfo.left || _this.frame.style.width;
            }
            if (resizeInfo.disableResizing) {
                _this.frameResizer.style.display = "none";
            }
            else {
                _this.frameResizer.style.display = "block";
            }
        });
        //devless check visibility
        this.subIds["devlessElementExistsSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessElementExistsCheck, function (message) {
            var exists = _this.windowSvc.czq(message.info.selector).length > 0;
            _this.appSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.DevlessElementExistsCheckResponse, {
                selector: message.info.selector,
                exists: exists
            });
        });
        this.subIds["devlessCurrentHrefSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessCurrentHref, function (message) {
            _this.appSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.DevlessCurrentHrefResponse, { currentHref: _this.windowSvc.href() });
        });
        this.subIds["devlessPushSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.DevlessPush, function (message) {
            var infoArray = message.info;
            _this.windowSvc.window.ChurnZero.push(infoArray);
        });
        //panel resize handler
        this.initResizer();
    };
    ContentPanel.prototype.initResizer = function () {
        var that = this;
        var target = this.frameResizer;
        var frame = this.frame;
        var guard = null;
        this.frameResizer.addEventListener("mousedown", initDrag);
        var startX, startY, startBottom, startHeight;
        function initDrag(e) {
            var frameStyle = document.defaultView.getComputedStyle(frame);
            guard = document.createElement("DIV");
            guard.classList.add("cz-resize-guard");
            guard.style.position = 'fixed';
            guard.style.zIndex = '1000001';
            guard.style.left = '0';
            guard.style.right = '0';
            guard.style.bottom = '0';
            guard.style.height = parseInt(frameStyle.height, 10) + 'px';
            guard.style.backgroundColor = "transparent";
            //startX = e.clientX;
            startY = e.clientY;
            //startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
            startHeight = parseInt(frameStyle.height, 10);
            startBottom = parseInt(document.defaultView.getComputedStyle(target).bottom, 10);
            document.documentElement.addEventListener("mousemove", doDrag);
            target.addEventListener("mouseup", stopDrag);
            //document.body.addEventListener("mouseleave", stopDrag, false);
            target.style.backgroundColor = "rgba(0,0,0,0.5)";
            target.style.position = 'fixed';
            document.body.append(target);
            document.body.append(guard);
        }
        function doDrag(e) {
            //p.style.width = (startWidth + e.clientX - startX) + "px";
            var diff = (startY - e.clientY);
            target.style.bottom = (startBottom + diff) + "px";
            frame.style.height = (startHeight + diff) + "px";
            guard.style.height = (startHeight + diff) + "px";
        }
        function stopDrag(e) {
            document.documentElement.removeEventListener("mousemove", doDrag);
            target.removeEventListener("mouseup", stopDrag);
            // document.body.removeEventListener("mouseleave", stopDrag, false);
            target.style.backgroundColor = "transparent";
            target.style.position = 'fixed';
            that.AdminPanelState.height = frame.style.height;
            that.persistState();
            that.appSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.DevlessIframeResized, { height: frame.style.height });
            //guard.parentElement.removeChild(guard);
            var guards = document.querySelectorAll('.cz-resize-guard');
            if (guards) {
                for (var i = 0; i < guards.length; i++) {
                    var currentGuard = guards[i];
                    if (currentGuard && currentGuard.parentElement) {
                        currentGuard.parentElement.removeChild(currentGuard);
                    }
                }
            }
        }
    };
    //Internal Methods
    ContentPanel.prototype.initElementFinder = function () {
        var _this = this;
        if (!this.elementFinder) {
            this.elementFinder = new ElementFinder_1.default({
                elementNamespace: "element-finder-border",
                pubHubElement: "body",
                ignoreContainerFilter: "cz-devless-iframe",
                eventNamespace: "element-finder-event",
                keepBordersOnClick: true,
                onHoverFunction: this.updateHoverTextHandler.bind(this),
                onSelectedFunction: this.elementSelectedHandler.bind(this),
                onHighlightFunction: this.elementHighlightedHandler.bind(this)
            }, this.windowSvc);
        }
        this.subIds["elementFinderStartSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.ElementFinderStart, function (message) {
            _this.elementFinder.start();
            _this.raiseDevlessFrame();
        });
        this.subIds["elementFinderStopSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.ElementFinderStop, function (message) {
            _this.elementFinder.stop(message.info);
            _this.lowerDevlessFrame();
        });
        this.subIds["elementFinderHighlightElementSubId"] = this.appSvc.pubsub.subscribe(Enums_1.Enums.DevlessEvents.ElementFinderHighlightElement, function (message) {
            _this.elementFinder.highlightElement(message.info.selector);
        });
    };
    ContentPanel.prototype.updateHoverTextHandler = function (e, hoveredElement) {
        var hoverElementInfo = {
            description: this.windowSvc.buildSelector(hoveredElement),
            textValue: clientlibs_1.CoreUtils.getTextFromElement(this.windowSvc.czq(hoveredElement))
        };
        this.appSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.ElementFinderHoverUpdate, hoverElementInfo);
    };
    ContentPanel.prototype.elementSelectedHandler = function (e, selectedElement) {
        var selectedElementInfo = {
            description: this.windowSvc.buildSelector(selectedElement),
            textValue: clientlibs_1.CoreUtils.getTextFromElement(this.windowSvc.czq(selectedElement))
        };
        this.appSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.ElementFinderElementSelected, selectedElementInfo);
        this.lowerDevlessFrame();
    };
    ContentPanel.prototype.elementHighlightedHandler = function (highlightedElements) {
        var highlightElementInfo = {
            description: this.windowSvc.buildSelector(highlightedElements.get(0)),
            textValue: clientlibs_1.CoreUtils.getTextFromElement(highlightedElements)
        };
        this.appSvc.pubsub.publish(Enums_1.Enums.DevlessEvents.ElementFinderElementHighlighted, highlightElementInfo);
        this.lowerDevlessFrame();
    };
    ContentPanel.prototype.raiseDevlessFrame = function () {
        this.frame.style.zIndex = "1000001";
    };
    ContentPanel.prototype.lowerDevlessFrame = function () {
        this.frame.style.zIndex = "1000000";
    };
    ContentPanel.storageKeys = {
        AdminPanelState: "ADMIN_PANEL__STATE"
    };
    return ContentPanel;
}());
exports.default = ContentPanel;


/***/ }),

/***/ "./src/core/errorLogger.ts":
/*!*********************************!*\
  !*** ./src/core/errorLogger.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var http_service_1 = __importDefault(__webpack_require__(/*! ../services/http.service */ "./src/services/http.service.ts"));
var ErrorLogger = /** @class */ (function () {
    function ErrorLogger(reportUrl, coder, dateConstructor) {
        this.reportUrl = reportUrl;
        this.coder = coder;
        this.dateConstructor = dateConstructor;
        this.debounceTimer = null;
        this.throttleSet = null;
        this.later = null;
        this.throttleTime = 30 * 1000;
        //AppVersion
        this._appVersion = "localhost-2020-03-18T17:47:22.537Z"; //gets replaced by build task
        if (!this.reportUrl) {
            var src = clientlibs_1.CoreUtils.Urls.getChurnZeroScriptSrc(document);
            if (src) {
                this.reportUrl = clientlibs_1.CoreUtils.Urls.buildClientSideUrls(src).sockets;
            }
            else {
                this.reportUrl = "";
            }
        }
        if (!this.dateConstructor) {
            this.dateConstructor = Date;
        }
        if (!this.coder) {
            this.coder = { encode: JSON.stringify, decode: JSON.parse };
        }
        this.httpService = new http_service_1.default(this.coder);
    }
    ErrorLogger.report = function (code, exception, extraInfo) {
        if (!window["__tracerCZ"]) {
            window["__tracerCZ"] = new ErrorLogger(""); //__CZHost__ gets set during build process
        }
        //dont log freed script errors as they can occur when page navigates or is closed
        if (ErrorLogger.isFreedScriptError(exception)) {
            return;
        }
        if (ErrorLogger.isJSONRefError(exception)) {
            extraInfo = extraInfo || {};
            extraInfo["JSONRefInfo"] = true;
            try {
                extraInfo["docType"] = window.document.doctype.systemId;
            }
            catch (e) {
                //meh
            }
            try {
                extraInfo["cleanRoomExists"] = window.document.getElementById("cz-clean-room") !== null;
            }
            catch (e) {
                //meh
            }
        }
        window["__tracerCZ"].log(code, exception, extraInfo);
    };
    ErrorLogger.isFreedScriptError = function (ex) {
        if (ex && ex.number && ex.number.toString() === "-2146823277") {
            return true;
        }
        return false;
    };
    ErrorLogger.isJSONRefError = function (ex) {
        if (!ex) {
            return false;
        }
        try {
            var mess = (ex.toString() || "");
            if (mess.indexOf("'JSON'") > -1 || mess.indexOf("getOriginalJson") > -1) {
                return true;
            }
        }
        catch (e) {
            //meh
        }
        return false;
    };
    ErrorLogger.prototype.log = function (code, exception, extraInfo) {
        if (!this.reportUrl) {
            console.warn("No Report Url! Error Logging wont be working.");
            return;
        }
        var now = this.dateConstructor.now();
        if (this.throttleSet === null || (now - this.throttleSet) > this.throttleTime) {
            this.doLog(code, exception, extraInfo);
            this.throttleSet = now;
        }
        if (true) {
            throw exception;
        }
    };
    ErrorLogger.prototype.doLog = function (code, exception, extraInfo) {
        var queryString = {
            t: this.dateConstructor.now(),
            v: this.appVersion
        }, data = {
            code: code,
            message: "",
            stack: "",
            extraInfo: undefined
        }, url = this.reportUrl, queryStringString = clientlibs_1.CoreUtils.Urls.buildQueryStringString(queryString), urlBase = url + "error";
        data.message = (exception || "Logged null or undefined exception").toString();
        data.stack = exception.stack || (exception.backtrace || exception.stacktrace);
        try {
            if (!data.stack) {
                data.stack = this.generateStackTrace();
            }
        }
        catch (ex) {
            data.stack = "Generating Stack Trace caused error.";
        }
        data.stack = this.coder.encode(data.stack);
        if (extraInfo) {
            data.extraInfo = this.coder.encode(extraInfo);
        }
        this.httpService.Post(urlBase + queryStringString, data, false, clientlibs_1.CoreUtils.noop, clientlibs_1.CoreUtils.noop);
    };
    ErrorLogger.prototype.generateStackTrace = function () {
        var stackTraceLimit = 10, anonString = "[anonymous]", functionRegex = /function\s*([\w\-$]+)?\s*\(/i;
        var stackTrace;
        try {
            throw Error("");
        }
        catch (testError) {
            stackTrace = testError.stack || testError.backtrace || testError.stacktrace;
        }
        if (!stackTrace) {
            stackTrace = [];
            try {
                for (var t = arguments.callee.caller.caller; t && stackTrace.length < stackTraceLimit;) {
                    var g = functionRegex.test(t.toString()) ?
                        RegExp.$1 || anonString : anonString;
                    stackTrace.push(g);
                    t = t.caller;
                }
            }
            catch (n) {
                //this.log("ErrorLogger.generateStackTrace", n);
            }
            try {
                stackTrace = "Manually Rebuilt\n" + stackTrace.join("\n");
            }
            catch (m) {
                stackTrace = "Could not manually rebuild stack trace.";
            }
        }
        return stackTrace;
    };
    Object.defineProperty(ErrorLogger.prototype, "appVersion", {
        get: function () {
            //getter
            return this._appVersion;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorLogger;
}());
exports.default = ErrorLogger;


/***/ }),

/***/ "./src/czq/czq.js":
/*!************************!*\
  !*** ./src/czq/czq.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * jQuery JavaScript Library v2.1.1 -core/ready
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-12-22T16:30Z
 */

(function( global, factory ) {

	if (  true && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.1 -core/ready",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android < 4.0, iOS < 6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== strundefined && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", function() {
				setDocument();
			}, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", function() {
				setDocument();
			});
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowclip^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android < 4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Math.random();
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android < 4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



/*
	Implementation Summary

	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// #11217 - WebKit loses check when the name is after the checked attribute
	// Support: Windows Web Apps (WWA)
	// `name` and `type` need .setAttribute for WWA
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE9-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome < 28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Support: IE >= 9
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Support: IE >= 9
		// Fix Cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') in IE9, see #12537
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	support.checkOn = input.value !== "";

	// Must access the parent to make an option select properly
	// Support: IE9, IE10
	support.optSelected = opt.selected;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Check if an input maintains its value after becoming a radio
	// Support: IE9, IE10
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// We assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "czq", [], function() {
		return jQuery;
	});
}



jQuery.noConflict = function() {};



return jQuery;

}));


/***/ }),

/***/ "./src/models/SocketIoInitialConnection.ts":
/*!*************************************************!*\
  !*** ./src/models/SocketIoInitialConnection.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SocketIoInitialConnection = /** @class */ (function () {
    function SocketIoInitialConnection(args) {
        var _this = this;
        if (args === void 0) { args = {}; }
        Object.keys(args).forEach(function (k) {
            _this[k] = args[k];
        });
    }
    return SocketIoInitialConnection;
}());
exports.default = SocketIoInitialConnection;


/***/ }),

/***/ "./src/repositories/simpleStorage.repository.ts":
/*!******************************************************!*\
  !*** ./src/repositories/simpleStorage.repository.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SimpleStorageRepository = /** @class */ (function () {
    function SimpleStorageRepository(coder) {
        var _this = this;
        this.store = SimpleStorageRepository.checkForLocalStorage();
        var userCoder = {
            encode: JSON.stringify,
            decode: JSON.parse
        };
        if (coder) {
            userCoder.encode = coder.encode;
            userCoder.decode = coder.decode;
        }
        if (window.btoa) {
            this.encode = function (value) {
                return _this.btou(userCoder.encode(value));
                //return userCoder.encode(value);
            };
            this.decode = function (value) {
                if (_this.isUBase64(value)) {
                    return userCoder.decode(_this.utob(value));
                }
                else if (_this.isBase64(value)) {
                    return userCoder.decode(window.atob(value));
                }
                else {
                    return userCoder.decode(value);
                }
            };
        }
        else {
            this.encode = userCoder.encode;
            this.decode = userCoder.decode;
        }
    }
    //Statics
    SimpleStorageRepository.checkForLocalStorage = function () {
        try {
            if (typeof (Storage) !== "undefined") {
                return sessionStorage;
            }
            else {
                // Sorry! No Web Storage support..
                return {};
            }
        }
        catch (e) {
            return {};
        }
    };
    SimpleStorageRepository.formatKey = function (key) {
        return "cz." + key.toLowerCase();
    };
    SimpleStorageRepository.prototype.isUBase64 = function (str) {
        try {
            return this.btou(this.utob(str)) == str;
        }
        catch (err) {
            return false;
        }
    };
    SimpleStorageRepository.prototype.isBase64 = function (str) {
        try {
            return btoa(atob(str)) == str;
        }
        catch (err) {
            return false;
        }
    };
    SimpleStorageRepository.prototype.btou = function (str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        }));
    };
    SimpleStorageRepository.prototype.utob = function (str) {
        return decodeURIComponent(atob(str).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    SimpleStorageRepository.prototype.set = function (key, value) {
        try {
            this.store[SimpleStorageRepository.formatKey(key)] = this.encode(value);
        }
        catch (e) {
        }
    };
    SimpleStorageRepository.prototype.get = function (key, defaultValue) {
        try {
            return this.decode(this.store[SimpleStorageRepository.formatKey(key)]);
        }
        catch (e) {
        }
        return defaultValue;
    };
    SimpleStorageRepository.prototype.remove = function (key) {
        try {
            delete this.store[SimpleStorageRepository.formatKey(key)];
        }
        catch (e) {
        }
    };
    return SimpleStorageRepository;
}());
exports.default = SimpleStorageRepository;


/***/ }),

/***/ "./src/repositories/socket.repository.ts":
/*!***********************************************!*\
  !*** ./src/repositories/socket.repository.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
var PubSuber_1 = __importDefault(__webpack_require__(/*! ../core/PubSuber */ "./src/core/PubSuber.ts"));
var SessionStorageQueue_1 = __importDefault(__webpack_require__(/*! ../core/SessionStorageQueue */ "./src/core/SessionStorageQueue.ts"));
var SocketIoInitialConnection_1 = __importDefault(__webpack_require__(/*! ../models/SocketIoInitialConnection */ "./src/models/SocketIoInitialConnection.ts"));
var errorLogger_1 = __importDefault(__webpack_require__(/*! ../core/errorLogger */ "./src/core/errorLogger.ts"));
var SocketRepository = /** @class */ (function () {
    function SocketRepository(storageSvc, httpSvc, windowSvc) {
        this.storageSvc = storageSvc;
        this.httpSvc = httpSvc;
        this.windowSvc = windowSvc;
        //Private Properties
        this._pollInterval = SocketRepository.defaultPollInterval;
        this._isConnected = false;
        this._preventUsageSends = false;
        this._listeners = {};
        this._pollTimer = null;
        this._connectionTimer = null;
        this._connectionStart = null;
        this._connectionTimeout = (60 * 1000);
        this._lastSocketMessageId = "";
        this._numberOfPollFails = 0;
        this._polling = false;
        this._pollingData = [];
        this._apiUrl = null;
        //UrlTracking
        this._urlTracking = true;
        //ContactKey
        this._contactKey = null;
        //AppVersion
        this._appVersion = "localhost-2020-03-18T17:47:22.537Z"; //gets replaced by build task
        this._disconnectedQueuedSocketMessages = new SessionStorageQueue_1.default(this.storageSvc, this.windowSvc, SocketRepository.storageKeys.DisconnectedQueueKey); //[];
        this.pubsub = new PubSuber_1.default();
        this.appHost = this.windowSvc.hostName();
        // TODO - How to get Admin Host
        // http://localhost:53156/api/v1/sockets/;
        // applicationSvc.clientSideUrls().adminHost
        this._apiUrl = null;
    }
    Object.defineProperty(SocketRepository.prototype, "IsConnected", {
        //Public Properties
        get: function () {
            return this._isConnected;
        },
        enumerable: true,
        configurable: true
    });
    SocketRepository.prototype.connect = function (apiUrl, onConnectCallback, onFailureCallback) {
        var _this = this;
        //stash the apiUrl
        this._apiUrl = apiUrl;
        var connectUrl = this.baseUrl("connect");
        var data = {
            contactKey: this.contactKey,
            contactExternalIdHash: this.contactHash,
            accountExternalIdHash: this.accountHash,
            appKey: this.appKey,
            additionalData: {
                browserInfo: clientlibs_1.CoreUtils.FeatureDetection.getBrowserInfo()
            }
        };
        if (this.urlTracking) {
            data.appKeyHost = this.appHost;
        }
        if (console["table"]) {
            console.info("Connection Data");
            console["table"]({
                appKey: { value: data.appKey },
                appHost: { value: data.appKeyHost || "Url Tracking Disabled" },
                contactKey: { value: data.contactKey }
            });
        }
        console.log("Connection Data", data);
        var failureCallback = function (response) {
            if (typeof onFailureCallback === "function") {
                onFailureCallback(response);
            }
            _this._connectionXHR = null;
        };
        var successCallback = function (response) {
            _this._connectionXHR = null;
            _this.connectionSuccessHandler(response, onConnectCallback, onFailureCallback);
        };
        this._connectionStart = new this.windowSvc.Date().getTime();
        this._connectionXHR = this.httpSvc.Post(connectUrl, data, true, successCallback, failureCallback);
    };
    SocketRepository.prototype.connectionSuccessHandler = function (response, onConnectCallback, onFailureCallback) {
        this._isConnected = true;
        var connectInfo = new SocketIoInitialConnection_1.default(response);
        if (!clientlibs_1.CoreUtils.Strings.isNullOrEmpty(connectInfo.connectionKey)) {
            this.connectionPoll(connectInfo.connectionKey, onConnectCallback, onFailureCallback);
            return;
        }
        if (!connectInfo.tenantId || clientlibs_1.CoreUtils.Strings.isNullOrEmpty(connectInfo.authKey)) {
            errorLogger_1.default.report("SocketRepository.successCallback", new Error("Bad ConnectionInfo"));
            if (typeof onFailureCallback === "function") {
                onFailureCallback(response);
            }
            this._connectionXHR = null;
            return;
        }
        this._authKey = connectInfo.authKey;
        this._tenantId = connectInfo.tenantId;
        this._preventUsageSends = ((connectInfo.functionality || {})["devlessEnabled"]) || false;
        this._queuedSocketMessages = new SessionStorageQueue_1.default(this.storageSvc, this.windowSvc, SocketRepository.storageKeys.QueueKey + "-" + connectInfo.appKey + "-" + this.contactKey);
        var shortCircuitConnect = false;
        if (typeof onConnectCallback === "function") {
            var callbackResponse = onConnectCallback(connectInfo);
            if (callbackResponse === false) {
                shortCircuitConnect = true;
            }
            if (typeof callbackResponse === 'string') {
                this._apiUrl = callbackResponse;
            }
        }
        if (shortCircuitConnect) {
            return;
        }
        //trigger any registered initial connection methods
        this.pubsub.publish(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_INITIAL_CONNECTION, connectInfo);
        //start polling loop
        this.poll();
    };
    SocketRepository.prototype.disconnect = function () {
        this._isConnected = false;
        if (this._connectionXHR) {
            this._connectionXHR.abort();
        }
        this._authKey = null;
        this._tenantId = null;
        this._apiUrl = null;
        this._queuedSocketMessages = null;
        if (this._pollTimer) {
            clearTimeout(this._pollTimer);
        }
        //trigger any registered disconnect methods
        this.pubsub.publish(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_DISCONNECT);
    };
    SocketRepository.prototype.connectionPoll = function (connectionKey, onConnectCallback, onFailureCallback) {
        var _this = this;
        var connectStatus = this.baseUrl("connectStatus");
        var failureCallback = function (response) {
            if (typeof onFailureCallback === "function") {
                onFailureCallback(response);
            }
            _this._connectionXHR = null;
        };
        var data = {
            appKey: this.appKey,
            additionalData: {
                connectionKey: connectionKey
            }
        };
        this.windowSvc.window.clearTimeout(this._connectionTimer);
        this.windowSvc.window.setTimeout(function () {
            _this._connectionXHR = _this.httpSvc.Post(connectStatus, data, true, function (response) {
                console.log('Status response:', response);
                var duration = (new _this.windowSvc.Date().getTime()) - _this._connectionStart;
                if (response) {
                    _this._connectionStart = null;
                    _this.connectionSuccessHandler(response, onConnectCallback, onFailureCallback);
                }
                else if (duration <= _this._connectionTimeout) {
                    _this.connectionPoll(connectionKey, onConnectCallback, onFailureCallback);
                }
                else {
                    _this.windowSvc.window.setTimeout(function () {
                        _this.connect(_this._apiUrl, onConnectCallback, onFailureCallback);
                    }, (15000));
                }
            }, failureCallback);
        }, 1000);
    };
    SocketRepository.prototype.send = function (socketMessageTypeId, messageContent) {
        var socketMessage = this.buildProperSocketMessage(socketMessageTypeId, messageContent);
        if (this.IsConnected) {
            this._queuedSocketMessages.push(socketMessage);
        }
        else {
            this._disconnectedQueuedSocketMessages.push(socketMessage);
        }
        if (socketMessageTypeId === Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_MESSAGE_READ) {
            this.poll();
        }
    };
    SocketRepository.prototype.setPollInterval = function (pollInterval) {
        var doPoll = false;
        if (pollInterval < this._pollInterval && this._numberOfPollFails === 0) {
            doPoll = true;
        }
        this._pollInterval = pollInterval;
        if (doPoll) {
            //console.log("Poll Interval Changed. Polling now...");
            this.poll();
        }
        else {
            //console.log("Poll Interval Changed. Polling in " + pollInterval / 1000);
        }
    };
    SocketRepository.prototype.resetPollIntervalToDefault = function () {
        this.setPollInterval(SocketRepository.defaultPollInterval);
    };
    SocketRepository.prototype.destroy = function () {
        this.reset();
    };
    SocketRepository.prototype.reset = function () {
        this.disconnect();
        this._disconnectedQueuedSocketMessages.empty();
    };
    SocketRepository.prototype.registerListener = function (eventName, callbackFunction) {
        return this.pubsub.subscribe(eventName, callbackFunction);
    };
    SocketRepository.prototype.registerMirror = function (mirrorFn) {
        return this.pubsub.addMirror(mirrorFn);
    };
    SocketRepository.prototype.publishMirrored = function (message) {
        this.pubsub.publishMirrored(message);
    };
    SocketRepository.prototype.clearAllListeners = function () {
        this._listeners = {};
    };
    SocketRepository.prototype.flush = function () {
        this.poll();
    };
    /**
     * Initiate an http call to the server with any queued socket messages
     */
    SocketRepository.prototype.poll = function () {
        var _this = this;
        //if already polling short circuit
        if (this._polling)
            return;
        //if not connected, short circuit
        if (!this.IsConnected) {
            console.log("stopping POLL not connected");
            return;
        }
        //lock polling
        this._polling = true;
        if (this._pollTimer)
            this.windowSvc.window.clearTimeout(this._pollTimer);
        //move over any items that were queued while disconnected
        // this is done specifically in such a way to reduce likelihood of
        // infinite loop.
        var currentQueLength = this._disconnectedQueuedSocketMessages.length;
        while (currentQueLength > 0) {
            var item = this._disconnectedQueuedSocketMessages.shift();
            this._queuedSocketMessages.push(item);
            currentQueLength--;
        }
        //these variables are used to ensure that only one instance of
        // the given type of message is ever sent. Each variable here
        // will have a corresponding case statement in the switch below
        //
        // For example, if the
        // queuedSocketMessages contains multiple CheckOnline messages
        // we dont really care because just 1 will do the job so only
        // push the last instance.
        var lastIsActiveSocketMessage = null;
        //var lastCheckOnlineMessage = null;
        var lastCheckEventMapConfigMessage = null;
        var lastCheckWalkthroughConfigMessage = null;
        //create a new queue of messages so that while we are polling
        // messages can still be added to the queue and if our poll fails
        // we can preserve the messages that were attempted to be sent
        this._pollingData = this._queuedSocketMessages.getAllItems();
        var currentQueuedSocketMessages = [];
        var queLength = this._pollingData.length;
        for (var i = 0; i < queLength; i++) {
            var socketMessage = this._pollingData[i];
            if (!socketMessage || socketMessage === null || socketMessage === undefined) {
                continue;
            }
            switch (socketMessage.socketMessageTypeId) {
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_IS_ACTIVE:
                    if (!this._preventUsageSends) {
                        lastIsActiveSocketMessage = socketMessage;
                    }
                    break;
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_CHECK_EVENT_MAP_CONFIG_VERSION:
                    lastCheckEventMapConfigMessage = socketMessage;
                    break;
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_CheckWalkthroughConfigVersion:
                    lastCheckWalkthroughConfigMessage = socketMessage;
                    break;
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_TRACK_EVENT:
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_SET_ATTRIBUTE:
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_TIME_IN_APP:
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_WalkthroughAction:
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_MESSAGE_READ:
                case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_MESSAGE_CLICKED:
                    if (!this._preventUsageSends) {
                        currentQueuedSocketMessages.push(socketMessage);
                    }
                    break;
                default:
                    currentQueuedSocketMessages.push(socketMessage);
                    break;
            }
        }
        //this is where we actually add the single instance of message
        // types we only want 1 instance of to the currentQueue
        if (lastIsActiveSocketMessage) {
            currentQueuedSocketMessages.push(lastIsActiveSocketMessage);
        }
        if (lastCheckEventMapConfigMessage) {
            currentQueuedSocketMessages.push(lastCheckEventMapConfigMessage);
        }
        if (lastCheckWalkthroughConfigMessage) {
            currentQueuedSocketMessages.push(lastCheckWalkthroughConfigMessage);
        }
        //certain types of socket messages need session identifiers only present
        // when a connection is present
        currentQueuedSocketMessages.forEach(function (item) {
            if (_this.needsSessionIdentifiers(item)) {
                _this.addSessionIdentifiersToObject(item.messageContent);
            }
        });
        var url = this.baseUrl("poll");
        //if there is a lastSocketMessageId then append it
        // to the query string params so that only messages
        // since that id will be returned
        if (this._lastSocketMessageId) {
            url = url + "&lastId=" + encodeURIComponent(this._lastSocketMessageId);
        }
        //remove any nulls or undefined
        var cleanedQueue = currentQueuedSocketMessages.filter(function (item) {
            return item !== null && item !== undefined;
        });
        //console.log("Polling with", cleanedQueue);
        //if there are no queued messages to send
        // do a get to pickup any messages the server might need to send down
        //if there are queued messages to send
        // do a post to push the queued messages up to the server and pickup
        // any messages the server might need to send down
        //console.time("POLLTIME");
        if (currentQueuedSocketMessages.length === 0) {
            this.httpSvc.Get(url, function (socketMessages) { return _this.pollSuccess(socketMessages); }, function (responseText, failedQueuedSocketMessages) { return _this.pollFailure(failedQueuedSocketMessages); });
        }
        else {
            /*console.info("Polling with...");
            console["table"](currentQueuedSocketMessages);*/
            this.httpSvc.Post(url, cleanedQueue, false, function (socketMessages) { return _this.pollSuccess(socketMessages); }, function (responseText, failedQueuedSocketMessages) { return _this.pollFailure(failedQueuedSocketMessages); });
        }
    };
    /**
     * Notify any listeners of any received SocketMessages
     * If still connected, setup the next poll interval
     * If there are already queued socket messages repoll immediately
     * @param socketMessages
     */
    SocketRepository.prototype.pollSuccess = function (socketMessages) {
        var _this = this;
        //console.log("Polling Success");
        //remove sent data from storage queue
        if (this._pollingData && this._pollingData.length && this._queuedSocketMessages) {
            var ids_1 = this._pollingData.map(function (q) {
                return q.id;
            });
            this._queuedSocketMessages.removeAll(this._pollingData, function (a) {
                return ids_1.indexOf(a.id) === -1;
            });
        }
        //clear out polling data for next poll
        this._pollingData = [];
        //loop over any returned messages and call any listeners for the given MessageTypeId
        // update _lastSocketMessageId to be the last message that was announced
        for (var i = 0; i < socketMessages.length; i++) {
            this.pubsub.publish(socketMessages[i].socketMessageTypeId, socketMessages[i].messageContent);
            if (socketMessages[i].id) {
                this._lastSocketMessageId = socketMessages[i].id;
            }
        }
        //unlock polling
        this._polling = false;
        //console.timeEnd("POLLTIME");
        //reset fail counter
        this._numberOfPollFails = 0;
        if (this._isConnected) {
            if (this._queuedSocketMessages.length > 0) {
                //if there are already queued messages, just repoll
                console.log("re-polling");
                this.poll();
            }
            else {
                //reset the poll interval
                this._pollTimer = this.windowSvc.window.setTimeout(function () {
                    try {
                        _this.poll();
                    }
                    catch (ex) {
                        //report?
                        errorLogger_1.default.report("SocketRepository.pollSuccess", ex);
                    }
                }, this._pollInterval);
            }
        }
    };
    /**
     * Requeue any SocketMessages that were attempted to be sent.
     * If still connected, setup the next poll interval
     * @param failedQueuedSocketMessages
     */
    SocketRepository.prototype.pollFailure = function (failedQueuedSocketMessages) {
        var _this = this;
        failedQueuedSocketMessages = failedQueuedSocketMessages || [];
        var queueLength = failedQueuedSocketMessages.length;
        if (queueLength > 0) {
            //requeue any messages
            while (queueLength > 0) {
                var queuedSocketMessage = failedQueuedSocketMessages.pop();
                queueLength--;
                if (this.needsSessionIdentifiers(queuedSocketMessage)) {
                    this.removeSessionIdentifiersFromObject(queuedSocketMessage.messageContent);
                }
                var alreadyExists = false;
                try {
                    var currentQueueItems = void 0;
                    if (this.IsConnected) {
                        currentQueueItems = this._queuedSocketMessages.getAllItems();
                    }
                    else {
                        currentQueueItems = this._disconnectedQueuedSocketMessages.getAllItems();
                    }
                    var currentQueueLength = (currentQueueItems || []).length;
                    for (var i = 0; i < currentQueueLength; i++) {
                        if (currentQueueItems[i].id === queuedSocketMessage.id) {
                            alreadyExists = true;
                            i = currentQueueLength + 1;
                        }
                    }
                }
                catch (err) {
                    //meh?
                }
                if (!alreadyExists) {
                    console.log("Requeueing:", queuedSocketMessage.messageContent);
                    if (this.IsConnected) {
                        this._queuedSocketMessages.unshift(queuedSocketMessage);
                    }
                    else {
                        this._disconnectedQueuedSocketMessages.unshift(queuedSocketMessage);
                    }
                }
            }
        }
        //unlock polling
        this._polling = false;
        //console.timeEnd("POLLTIME");
        //bump the failure count
        if (this._numberOfPollFails < 5) {
            this._numberOfPollFails++;
        }
        var failBuffer = (1000 * 60);
        //reset the poll interval
        if (this._isConnected) {
            this._pollTimer = this.windowSvc.window.setTimeout(function () {
                try {
                    _this.poll();
                }
                catch (ex) {
                    //report?
                    errorLogger_1.default.report("SocketRepository.pollFailure", ex);
                }
            }, this._pollInterval + (failBuffer * this._numberOfPollFails));
        }
    };
    /**
     * Create a SocketMessage to be sent back to the server
     * @param socketMessageTypeId
     * @param messageContent
     */
    SocketRepository.prototype.buildProperSocketMessage = function (socketMessageTypeId, messageContent) {
        if (!socketMessageTypeId) {
            throw new Error("message type can not be blank");
        }
        var socketMessage = {
            id: clientlibs_1.DataTypeUtils.newGuid(),
            socketMessageTypeId: socketMessageTypeId,
            messageDate: new this.windowSvc.Date().toISOString(),
            messageContent: messageContent //this.windowSvc.clone(messageContent)
        };
        if (messageContent && messageContent["messageKey"]) {
            socketMessage.id = messageContent["messageKey"];
        }
        return socketMessage;
    };
    /**
     * Generate the base action url for a given method
     * param: methodName
     */
    SocketRepository.prototype.baseUrl = function (methodName) {
        var queryString = {
            t: this.windowSvc.Date.now(),
            v: this.appVersion
        };
        if (this._authKey) {
            queryString["socketKey"] = encodeURIComponent(this._authKey);
        }
        var queryStringString = clientlibs_1.CoreUtils.Urls.buildQueryStringString(queryString), urlBase = "" + this._apiUrl + methodName;
        if (this._tenantId) {
            urlBase += "/" + this._tenantId;
        }
        return urlBase + queryStringString;
    };
    //Session Identifier Methods
    SocketRepository.prototype.hasValidSessionIdentifiers = function () {
        var appKeyValid = this.isAppKeyValid(this.appKey);
        var appHostValid = this.urlTracking ? this.isAppHostValid() : true;
        var contactKeyValid = this.isContactKeyValid(this.contactKey);
        return appKeyValid && appHostValid && contactKeyValid;
    };
    SocketRepository.prototype.needsSessionIdentifiers = function (socketMessage) {
        switch (socketMessage.socketMessageTypeId) {
            case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_SET_ATTRIBUTE:
            case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_TRACK_EVENT:
            case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_WalkthroughAction:
            case Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_CheckWalkthroughConfigVersion:
                return true;
            default:
                return false;
        }
    };
    SocketRepository.prototype.addSessionIdentifiersToObject = function (item) {
        item["appKey"] = this.appKey;
        if (this.urlTracking) {
            item["appKeyHost"] = this.appHost;
        }
        var key = (this.contactKey || "").split(SocketRepository.separator);
        item["accountExternalId"] = key[0];
        item["contactExternalId"] = key[1];
    };
    SocketRepository.prototype.removeSessionIdentifiersFromObject = function (item) {
        delete item.appKey;
        delete item.appKeyHost;
        delete item.accountExternalId;
        delete item.contactExternalId;
    };
    Object.defineProperty(SocketRepository.prototype, "appKey", {
        get: function () {
            //if the current appkey does not exist,
            // try to load it from storage
            //if (!this._appKey) {
            //    this._appKey = this.storageSvc.get(SocketRepository.storageKeys.AppKey, this._appKey);
            //}
            return this._appKey;
        },
        set: function (appKey) {
            this._appKey = appKey;
            //store current state of AppKey
            //this.storageSvc.set(SocketRepository.storageKeys.AppKey, this._appKey);
        },
        enumerable: true,
        configurable: true
    });
    SocketRepository.prototype.isAppKeyValid = function (keyToValidate) {
        if (keyToValidate && keyToValidate.length > 0) {
            return true;
        }
        return false;
    };
    Object.defineProperty(SocketRepository.prototype, "appHost", {
        get: function () {
            return this._appHost;
        },
        set: function (host) {
            this._appHost = host;
        },
        enumerable: true,
        configurable: true
    });
    SocketRepository.prototype.isAppHostValid = function () {
        return (this.appHost !== undefined && this.appHost.length > 0) && this.appHost.length > 0;
    };
    Object.defineProperty(SocketRepository.prototype, "urlTracking", {
        get: function () {
            return this._urlTracking;
        },
        set: function (enabled) {
            this._urlTracking = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketRepository.prototype, "contactKey", {
        get: function () {
            return this._contactKey;
        },
        set: function (newValue) {
            this._setDisconnectedQueue(newValue);
            //if empty values are found
            // set everything to empty
            if (!newValue) {
                this._resetContactKey();
                return;
            }
            this._contactKey = newValue;
        },
        enumerable: true,
        configurable: true
    });
    SocketRepository.prototype.isContactKeyValid = function (keyToValidate) {
        //if there is no contactKey short circuit
        if (!keyToValidate) {
            return false;
        }
        if (keyToValidate.length === 0 || keyToValidate.indexOf(SocketRepository.separator) === -1) {
            return false;
        }
        var ids = this.splitContactKey(keyToValidate);
        ids.accountExternalId = ids.accountExternalId || "";
        var validAccount = false;
        if (ids.accountExternalId !== undefined && ids.accountExternalId !== null) {
            validAccount = ids.accountExternalId.length > 0;
        }
        var validContact = false;
        if (ids.contactExternalId !== undefined && ids.contactExternalId !== null) {
            validContact = ids.contactExternalId.length > 0;
        }
        return validAccount && validContact;
    };
    SocketRepository.prototype.splitContactKey = function (keyToSplit) {
        var splitContactKey = (keyToSplit || "").split(SocketRepository.separator);
        var accountExternalId = null;
        var contactExternalId = null;
        if (splitContactKey && splitContactKey.length === 2) {
            accountExternalId = splitContactKey[0];
            contactExternalId = splitContactKey[1];
        }
        return { accountExternalId: accountExternalId, contactExternalId: contactExternalId };
    };
    SocketRepository.prototype.generateContactKey = function (accountExternalId, contactExternalId) {
        return "" + accountExternalId + SocketRepository.separator + contactExternalId;
    };
    SocketRepository.prototype.getContactKeyFromCache = function () {
        //if the contactKey has not been set yet
        // first try local storage
        var contactKey = this.storageSvc.get(SocketRepository.storageKeys.ContactKey, null);
        // then try the cookie
        if (!contactKey) {
            contactKey = clientlibs_1.CoreUtils.readCookie(SocketRepository.storageKeys.ContactKeyCookie);
        }
        console.log("get key from cache:", contactKey);
        return contactKey;
    };
    Object.defineProperty(SocketRepository.prototype, "accountHash", {
        get: function () {
            return this._accountHash;
        },
        set: function (newValue) {
            this._accountHash = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketRepository.prototype, "contactHash", {
        get: function () {
            return this._contactHash;
        },
        set: function (newValue) {
            this._contactHash = newValue;
        },
        enumerable: true,
        configurable: true
    });
    SocketRepository.prototype._setDisconnectedQueue = function (newValue) {
        var key = "" + SocketRepository.storageKeys.DisconnectedQueueKey;
        if (newValue) {
            key += "-" + newValue;
        }
        var knownDisconnect = new SessionStorageQueue_1.default(this.storageSvc, this.windowSvc, key);
        //if the new key is the default and the old one was not the default, dont copy items over
        if (key !== SocketRepository.storageKeys.DisconnectedQueueKey && this._disconnectedQueuedSocketMessages.key !== SocketRepository.storageKeys.DisconnectedQueueKey) {
            //copy items from old disconnected queue to new one
            var count = this._disconnectedQueuedSocketMessages.length;
            while (count > 0) {
                knownDisconnect.push(this._disconnectedQueuedSocketMessages.shift());
                count--;
            }
        }
        //set disconnected queue to new one
        this._disconnectedQueuedSocketMessages = knownDisconnect;
    };
    SocketRepository.prototype._resetContactKey = function () {
        this._contactKey = null;
        this._accountHash = null;
        this._contactHash = null;
        this.storageSvc.remove(SocketRepository.storageKeys.ContactKey);
        clientlibs_1.CoreUtils.eraseCookie(SocketRepository.storageKeys.ContactKeyCookie, new this.windowSvc.Date());
    };
    Object.defineProperty(SocketRepository.prototype, "appVersion", {
        get: function () {
            //getter
            return this._appVersion;
        },
        enumerable: true,
        configurable: true
    });
    //Statics
    SocketRepository.separator = "~|~";
    SocketRepository.defaultPollInterval = 10000;
    SocketRepository.storageKeys = {
        AppKey: "APP_KEY",
        ContactKey: "CONTACTKEY_KEY",
        QueueKey: "CZ_QUEUE_KEY",
        DisconnectedQueueKey: "CZ_DISCONNECTED_QUEUE_KEY",
        ContactKeyCookie: "ChurnZeroUser"
    };
    return SocketRepository;
}());
exports.default = SocketRepository;


/***/ }),

/***/ "./src/repositories/subframe.repository.ts":
/*!*************************************************!*\
  !*** ./src/repositories/subframe.repository.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PubSuber_1 = __importDefault(__webpack_require__(/*! ../core/PubSuber */ "./src/core/PubSuber.ts"));
var socket_repository_1 = __importDefault(__webpack_require__(/*! ./socket.repository */ "./src/repositories/socket.repository.ts"));
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
var SubframeRepository = /** @class */ (function () {
    function SubframeRepository(windowSvc, applicationSvc, masterFrame) {
        this.windowSvc = windowSvc;
        this.applicationSvc = applicationSvc;
        this.masterFrame = masterFrame;
        this._listeners = {};
        //AppVersion
        this._appVersion = "localhost-2020-03-18T17:47:22.537Z"; //gets replaced by build task
        this.pubsub = new PubSuber_1.default();
        this.appHost = this.windowSvc.hostName();
    }
    Object.defineProperty(SubframeRepository.prototype, "appVersion", {
        get: function () {
            //getter
            return this._appVersion;
        },
        enumerable: true,
        configurable: true
    });
    SubframeRepository.prototype.clearAllListeners = function () {
        this._listeners = {};
    };
    SubframeRepository.prototype.connect = function (apiUrl, onConnectCallback, onFailureCallback) {
    };
    SubframeRepository.prototype.destroy = function () {
        this.reset();
    };
    SubframeRepository.prototype.disconnect = function () {
    };
    SubframeRepository.prototype.generateContactKey = function (accountExternalId, contactExternalId) {
        return "";
    };
    SubframeRepository.prototype.getContactKeyFromCache = function () {
        return "";
    };
    SubframeRepository.prototype.isAppHostValid = function () {
        return false;
    };
    SubframeRepository.prototype.isAppKeyValid = function (keyToValidate) {
        return false;
    };
    SubframeRepository.prototype.isContactKeyValid = function (keyToValidate) {
        return false;
    };
    SubframeRepository.prototype.reset = function () {
        this.disconnect();
    };
    SubframeRepository.prototype.resetPollIntervalToDefault = function () {
    };
    SubframeRepository.prototype.send = function (socketMessageTypeId, messageContent) {
        this.applicationSvc.messageMaster({
            code: Enums_1.Enums.FrameCommCodes.SubFramePassback,
            data: {
                type: 'send',
                data: { socketMessageTypeId: socketMessageTypeId, messageContent: messageContent }
            }
        });
    };
    SubframeRepository.prototype.flush = function () {
        //do nothing as the master will handle
    };
    SubframeRepository.prototype.setPollInterval = function (pollInterval) {
    };
    SubframeRepository.prototype.splitContactKey = function (keyToSplit) {
        var splitContactKey = (keyToSplit || "").split(socket_repository_1.default.separator);
        var accountExternalId = null;
        var contactExternalId = null;
        if (splitContactKey && splitContactKey.length === 2) {
            accountExternalId = splitContactKey[0];
            contactExternalId = splitContactKey[1];
        }
        return { accountExternalId: accountExternalId, contactExternalId: contactExternalId };
    };
    SubframeRepository.prototype.registerListener = function (eventName, callbackFunction) {
        return this.pubsub.subscribe(eventName, callbackFunction);
    };
    SubframeRepository.prototype.publishMirrored = function (message) {
        this.pubsub.publishMirrored(message);
    };
    SubframeRepository.prototype.registerMirror = function (mirrorFn) {
        return this.pubsub.addMirror(mirrorFn);
    };
    return SubframeRepository;
}());
exports.default = SubframeRepository;


/***/ }),

/***/ "./src/scss/csm_panel_styles.scss":
/*!****************************************!*\
  !*** ./src/scss/csm_panel_styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/services/application.service.ts":
/*!*********************************************!*\
  !*** ./src/services/application.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Templater_1 = __importDefault(__webpack_require__(/*! ../core/Templater */ "./src/core/Templater.ts"));
var PubSuber_1 = __importDefault(__webpack_require__(/*! ../core/PubSuber */ "./src/core/PubSuber.ts"));
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
var clientlibs_2 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var errorLogger_1 = __importDefault(__webpack_require__(/*! ../core/errorLogger */ "./src/core/errorLogger.ts"));
var ApplicationService = /** @class */ (function () {
    function ApplicationService(storageSvc, windowSvc) {
        this.storageSvc = storageSvc;
        this.windowSvc = windowSvc;
        //get an array of all registered sub frames (window objects)
        this._registeredSubframes = {};
        this.isChildFrameListenerAttached = false;
        this.isFrameComListenerAttached = false;
        //**********************//
        // Self Hosted
        //**********************//
        this._isSelfHosted = false;
        this.pubsub = new PubSuber_1.default();
        this._registeredSubframes = {};
        //setup templater
        this.templater = new Templater_1.default(this.windowSvc.czq);
    }
    Object.defineProperty(ApplicationService.prototype, "registeredSubFrames", {
        get: function () {
            return this._registeredSubframes;
        },
        set: function (subFrames) {
            this._registeredSubframes = subFrames;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationService.prototype.getRegisteredSubFrameById = function (id) {
        return this._registeredSubframes[id];
    };
    //Keep track of a subframe widnow object
    ApplicationService.prototype.registerSubFrame = function (subFrame, origin, vcode) {
        var key = clientlibs_2.DataTypeUtils.newGuid();
        this._registeredSubframes[key] = { window: subFrame, origin: origin };
        this.pubsub.publish(Enums_1.Enums.ChurnZeroAppEvents.SubframeRegistered, { source: key, vcode: vcode });
    };
    //**********************//
    // ClientSide Urls
    //**********************//
    ApplicationService.prototype.setupClientSideUrls = function () {
        //add CDN to the templater
        this.templater.addGlobal("cdn", this.windowSvc.cdnUrl);
    };
    /**
     * Prepend a path with the CDN host
     * If url is a fully url no change made.
     * @param url
     * @returns string
     */
    ApplicationService.prototype.addCdn = function (url) {
        //if empty, no change
        if (url.length === 0) {
            return url;
        }
        //if already url, no change
        if (url.substring(0, 5) === "http:" || url.substring(0, 6) === "https:" || url.substring(0, 3) === "//:") {
            return url;
        }
        if (!this.windowSvc.clientSideUrls.baseApiUrl) {
            throw new Error("Urls Cache must be built before adding cdn");
        }
        return this.windowSvc.cdnUrl + url;
    };
    //Add a listener for messages coming from devless frame
    ApplicationService.prototype.addChildFrameListener = function () {
        var _this = this;
        if (this.isChildFrameListenerAttached)
            return;
        var devlessOrigin = this.WebAppDomain;
        devlessOrigin = devlessOrigin.substr(0, devlessOrigin.length - 1);
        var unwind = clientlibs_1.iFrameUtils.attachTransportMessageListener(this.windowSvc.window, devlessOrigin, function (transportMessage, e) {
            switch (transportMessage.code) {
                case clientlibs_1.TransportCodes.PubSubMirror:
                    _this.pubsub.publishMirrored(transportMessage.data);
                    break;
            }
        }, this.windowSvc.JSON);
        this.removeChildFrameListener = function () {
            if (_this.windowSvc.window.removeEventListener) {
                _this.windowSvc.window.removeEventListener('message', unwind, false);
            }
            _this.isChildFrameListenerAttached = false;
            _this.removeChildFrameListener = undefined;
        };
        this.isChildFrameListenerAttached = true;
    };
    ApplicationService.prototype.addFrameComListener = function () {
        var _this = this;
        if (this.isFrameComListenerAttached)
            return;
        var origins = this.windowSvc.origins.join(',');
        var unwind = clientlibs_1.iFrameUtils.attachTransportMessageListener(this.windowSvc.window, origins, function (transportMessage, e) {
            if (transportMessage.code !== clientlibs_1.TransportCodes.FrameComm) {
                return;
            }
            var message = transportMessage.data;
            try {
                _this.handleFrameComMessage(message, e);
            }
            catch (ex) {
                //meh
                //ErrorLogger.report("applicationService.addFrameComListener.handleFrameComMessage", ex, "message.code:" + (message.code || "message.code is falsy").toString());
            }
        }, this.windowSvc.JSON, function (ex, e) {
            errorLogger_1.default.report("iFrameUtils.attachTransportMessageListener at application.service.ts", ex, (e.data || "e.data is falsy").toString());
        });
        this.removeFrameComListener = function () {
            if (_this.windowSvc.window.removeEventListener) {
                _this.windowSvc.window.removeEventListener('message', unwind, false);
            }
            _this.isFrameComListenerAttached = false;
            _this.removeFrameComListener = undefined;
        };
        this.isFrameComListenerAttached = true;
    };
    ApplicationService.prototype.messageMaster = function (data) {
        //guard
        if (!this.masterFrame) {
            return;
        }
        this.sendFrameCom(this.masterFrame, data);
    };
    ApplicationService.prototype.messageSubFrames = function (data) {
        //guard
        if (!this.registeredSubFrames) {
            return;
        }
        var keysToDelete = [];
        for (var key in this._registeredSubframes) {
            if (this._registeredSubframes.hasOwnProperty(key)) {
                var windowRegistration = this._registeredSubframes[key];
                if (windowRegistration && windowRegistration.window) {
                    this.sendFrameCom(windowRegistration, data);
                }
                else {
                    keysToDelete.push(key);
                }
            }
        }
        for (var i = 0; i < keysToDelete.length; i++) {
            try {
                var key = keysToDelete[i];
                if (key && this._registeredSubframes.hasOwnProperty(key)) {
                    this._registeredSubframes[key] = undefined;
                    delete this._registeredSubframes[key];
                }
            }
            catch (ex) {
                //meh
            }
        }
    };
    ApplicationService.prototype.sendFrameCom = function (target, data) {
        var message = clientlibs_1.iFrameUtils.buildTransportMessage(clientlibs_1.TransportCodes.FrameComm, data);
        //guard
        if (!target || !target.window) {
            return;
        }
        //this.debug('Sending to the following origins', target.origin);
        try {
            target.window.postMessage(clientlibs_1.iFrameUtils.encrypt(this.windowSvc.JSON.stringify(message)), target.origin);
        }
        catch (ex) {
            //ErrorLogger.report("applicationService.sendFrameCom", ex, "frameComCode:"+ data.code);
        }
    };
    ApplicationService.prototype.handleFrameComMessage = function (message, e) {
        //master frame listens for children to boot and then registers them
        if (message.code === Enums_1.Enums.FrameCommCodes.SubframeBoot) {
            if (this.isMaster) {
                this.registerSubFrame(e.source, e.origin, message.data);
            }
            return;
        }
        //subframe listens for responses from its boot announcement
        if (message.code === Enums_1.Enums.FrameCommCodes.SubframeBootResponse) {
            if (!this.isMaster) {
                this.masterFrame = { window: e.source, origin: e.origin };
                message.data.source = e.source;
                this.pubsub.publish(Enums_1.Enums.FrameCommCodes.SubframeBootResponse, message.data);
            }
            return;
        }
        if (this.isMaster) {
            //if the master receives a message that isn't from a registered source reject it
            var registered = false;
            for (var key in this.registeredSubFrames) {
                if (!registered && this.registeredSubFrames.hasOwnProperty(key)) {
                    if (this.registeredSubFrames[key].window === e.source) {
                        registered = true;
                    }
                }
            }
            if (!registered) {
                console.log('Message from unregistered subframe.');
                return;
            }
        }
        else {
            //verify from master
            if (!this.masterFrame || this.masterFrame.window !== e.source) {
                console.log('Message from source other than master');
                return;
            }
        }
        //only handle known codes
        switch (message.code) {
            case Enums_1.Enums.FrameCommCodes.MasterFrameComRePublish:
            case Enums_1.Enums.FrameCommCodes.MasterFramePassdown:
                if (!this.isMaster) {
                    this.pubsub.publish(message.code, message.data);
                }
                break;
            case Enums_1.Enums.FrameCommCodes.SubFramePassback:
                if (this.isMaster) {
                    this.pubsub.publish(message.code, message.data);
                }
                break;
        }
    };
    Object.defineProperty(ApplicationService.prototype, "isSelfHosted", {
        get: function () {
            return this._isSelfHosted.trim().toLowerCase() === "true";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "isDebugging", {
        //**********************//
        // Debugging
        //**********************//
        get: function () {
            return this.storageSvc.get(ApplicationService.storageKeys.IsDebugging, false);
        },
        set: function (value) {
            if (value) {
                this.storageSvc.set(ApplicationService.storageKeys.IsDebugging, value);
            }
            else {
                this.storageSvc.remove(ApplicationService.storageKeys.IsDebugging);
            }
        },
        enumerable: true,
        configurable: true
    });
    ApplicationService.prototype.debug = function (item) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.isDebugging) {
            return;
        }
        //let message = ["%c", item].concat(args || []).join(" ");
        //let infoArray = [message, "color:blue;"];
        var infoArray = [item].concat(args || []);
        if (!this.isMaster && infoArray.length > 0) {
            infoArray[0] = '**Sub** - ' + infoArray[0];
        }
        this.windowSvc.window["console"]["info"].apply(this.windowSvc.window["console"], infoArray);
    };
    Object.defineProperty(ApplicationService.prototype, "WebAppDomain", {
        get: function () {
            return this.webAppDomain;
        },
        set: function (value) {
            this.webAppDomain = value;
        },
        enumerable: true,
        configurable: true
    });
    //Statics
    ApplicationService.storageKeys = {
        AdminPanelState: "ADMIN_PANEL__STATE",
        IsDebugging: "IS_DEBUGGING"
    };
    return ApplicationService;
}());
exports.default = ApplicationService;


/***/ }),

/***/ "./src/services/attribute.service.ts":
/*!*******************************************!*\
  !*** ./src/services/attribute.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var AttributeService = /** @class */ (function () {
    //Privates
    function AttributeService(commSvc, sessionSvc) {
        this.commSvc = commSvc;
        this.sessionSvc = sessionSvc;
    }
    AttributeService.prototype.SetAttribute = function (entity, name, value) {
        this.executeAttribute("setAttribute", entity, name, value);
    };
    AttributeService.prototype.IncrementAttribute = function (entity, name, value) {
        this.executeAttribute("incrementAttribute", entity, name, value);
    };
    AttributeService.prototype.executeAttribute = function (action, entity, name, value) {
        var attributeItem = {
            action: action,
            entity: entity,
            attributes: null
        };
        if (value == null && clientlibs_1.CoreUtils.isObject(name)) {
            //name = {name: value, name:value}
            attributeItem.attributes = name;
        }
        else if (clientlibs_1.CoreUtils.isString(name) && name.trim().substr(0, 1) !== "{") {
            //name = string, value = any
            attributeItem.attributes = {};
            attributeItem.attributes[name] = value;
        }
        else {
            try {
                name = JSON.parse(name);
                attributeItem.attributes = name;
            }
            catch (ex) {
                //meh, validation will handle barking
            }
        }
        if (!this.validateAttributeItem(attributeItem)) {
            return;
        }
        //dont send attributes for when the devless panel is open
        if (this.sessionSvc.ShouldPreventUsageSends) {
            return;
        }
        this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_SET_ATTRIBUTE, attributeItem);
    };
    AttributeService.prototype.validateAttributeItem = function (attributeItem) {
        var c = window["console"], isValid = true;
        if (typeof attributeItem.action === "undefined" || attributeItem.action === null || attributeItem.action.toString().length === 0) {
            c.warn("Action parameter must be defined. Attribute ignored.");
            isValid = false;
        }
        if (typeof attributeItem.entity === "undefined" || attributeItem.entity === null || attributeItem.entity.toString().length === 0 || (attributeItem.entity.toLowerCase() !== "contact" && attributeItem.entity.toLowerCase() !== "account")) {
            c.warn("Entity value must be either 'contact' or 'account'. Attribute ignored.");
            isValid = false;
        }
        if (typeof attributeItem.attributes === "undefined" || attributeItem.attributes === null || clientlibs_1.CoreUtils.numKeys(attributeItem.attributes) === 0) {
            c.warn("Name parameter must be defined. Attribute ignored.");
            isValid = false;
        }
        if (typeof attributeItem.attributes !== "undefined" && attributeItem.attributes !== null && clientlibs_1.CoreUtils.numKeys(attributeItem.attributes) > 0) {
            for (var k in attributeItem.attributes) {
                if (attributeItem.attributes.hasOwnProperty(k) && k.trim().length === 0) {
                    c.warn("Name parameter must be defined for each attribute. Attributes ignored.");
                    isValid = false;
                    break;
                }
            }
        }
        return isValid;
    };
    return AttributeService;
}());
exports.default = AttributeService;


/***/ }),

/***/ "./src/services/communication.service.ts":
/*!***********************************************!*\
  !*** ./src/services/communication.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommunicationService = /** @class */ (function () {
    function CommunicationService(commRepo) {
        this.commRepo = commRepo;
    }
    Object.defineProperty(CommunicationService.prototype, "appVersion", {
        get: function () {
            return this.commRepo.appVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommunicationService.prototype, "appKey", {
        //appKey
        get: function () {
            return this.commRepo.appKey;
        },
        set: function (newValue) {
            this.commRepo.appKey = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommunicationService.prototype, "appHost", {
        //appHost
        get: function () {
            if (this.urlTracking) {
                return this.commRepo.appHost;
            }
            else {
                return "Url Tracking Disabled";
            }
        },
        set: function (newValue) {
            this.commRepo.appHost = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommunicationService.prototype, "urlTracking", {
        //urlTracking
        get: function () {
            return this.commRepo.urlTracking;
        },
        set: function (enabled) {
            this.commRepo.urlTracking = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommunicationService.prototype, "contactKey", {
        //contactKey
        get: function () {
            return this.commRepo.contactKey;
        },
        set: function (newValue) {
            this.commRepo.contactKey = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommunicationService.prototype, "accountHash", {
        //accountHash
        get: function () {
            return this.commRepo.accountHash;
        },
        set: function (newValue) {
            this.commRepo.accountHash = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommunicationService.prototype, "contactHash", {
        //contactHash
        get: function () {
            return this.commRepo.contactHash;
        },
        set: function (newValue) {
            this.commRepo.contactHash = newValue;
        },
        enumerable: true,
        configurable: true
    });
    CommunicationService.prototype.registerListener = function (eventName, callbackFunction) {
        return this.commRepo.registerListener(eventName, callbackFunction);
    };
    CommunicationService.prototype.registerMirror = function (mirrorFn) {
        return this.commRepo.registerMirror(mirrorFn);
    };
    CommunicationService.prototype.publishMirrored = function (message) {
        this.commRepo.publishMirrored(message);
    };
    CommunicationService.prototype.generateContactKey = function (accountExternalId, contactExternalId) {
        return this.commRepo.generateContactKey(accountExternalId, contactExternalId);
    };
    CommunicationService.prototype.getContactKeyFromCache = function () {
        return this.commRepo.getContactKeyFromCache();
    };
    CommunicationService.prototype.isContactKeyValid = function (keyToValidate) {
        return this.commRepo.isContactKeyValid(keyToValidate);
    };
    CommunicationService.prototype.splitContactKey = function (keyToSplit) {
        return this.commRepo.splitContactKey(keyToSplit);
    };
    CommunicationService.prototype.isAppKeyValid = function (keyToValidate) {
        return this.commRepo.isAppKeyValid(keyToValidate);
    };
    CommunicationService.prototype.send = function (socketMessageTypeId, messageData) {
        try {
            this.commRepo.send(socketMessageTypeId, messageData);
        }
        catch (ex) {
            console.warn("Send Failed.", socketMessageTypeId, messageData, ex);
        }
    };
    CommunicationService.prototype.flush = function () {
        this.commRepo.flush();
    };
    CommunicationService.prototype.isConnected = function () {
        return this.commRepo.IsConnected;
    };
    CommunicationService.prototype.connect = function (apiUrl, onConnectCallback, onFailureCallback) {
        this.commRepo.connect(apiUrl, onConnectCallback, onFailureCallback);
    };
    CommunicationService.prototype.setPollInterval = function (pollInterval) {
        this.commRepo.setPollInterval(pollInterval);
    };
    CommunicationService.prototype.resetPollIntervalToDefault = function () {
        this.commRepo.resetPollIntervalToDefault();
    };
    CommunicationService.prototype.clearAllListeners = function () {
        this.commRepo.clearAllListeners();
    };
    CommunicationService.prototype.disconnect = function () {
        this.commRepo.disconnect();
    };
    CommunicationService.prototype.reset = function () {
        this.commRepo.reset();
    };
    CommunicationService.prototype.destroy = function () {
        this.commRepo.destroy();
    };
    return CommunicationService;
}());
exports.default = CommunicationService;


/***/ }),

/***/ "./src/services/event.service.ts":
/*!***************************************!*\
  !*** ./src/services/event.service.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var EventService = /** @class */ (function () {
    function EventService(commSvc, windowSvc, applicationSvc, sessionSvc) {
        //Privates
        this.commSvc = commSvc;
        this.windowSvc = windowSvc;
        this.applicationSvc = applicationSvc;
        this.sessionSvc = sessionSvc;
        this.lastEventMapPing = null;
        this.pingInterval = 60 * 1000;
        this._eventMapConfig = { eventMaps: [], eventMapVersion: "-1" };
    }
    Object.defineProperty(EventService.prototype, "eventMapVersion", {
        get: function () {
            return this._eventMapConfig.eventMapVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventService.prototype, "eventMaps", {
        get: function () {
            return this._eventMapConfig.eventMaps;
        },
        enumerable: true,
        configurable: true
    });
    //Basic Event Tracking
    EventService.prototype.TrackEvent = function (eventName, description, quantity, customFields) {
        var event = {
            eventDate: new this.windowSvc.Date().toISOString(),
            name: eventName,
            quantity: quantity || 1,
            description: description || "",
            customFields: customFields
        };
        if (!this.ValidateEvent(event)) {
            return;
        }
        //dont send events for when the devless panel is open
        if (this.sessionSvc.ShouldPreventUsageSends) {
            return;
        }
        this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_TRACK_EVENT, event);
    };
    EventService.prototype.ValidateEvent = function (event) {
        var c = window["console"], isValid = true;
        if (typeof event.name === "undefined" || event.name === null || event.name.toString().length === 0) {
            c.warn("Track Event EventName is required. Event ignored.");
            isValid = false;
        }
        if (typeof event.quantity !== "undefined" && (Array.isArray(event.quantity) || !clientlibs_1.CoreUtils.Numbers.isNumeric(event.quantity))) {
            c.warn("Track Event Quantity field is restricted to numeric values only. Any non-numeric values will be ignored.");
            event.quantity = 1;
        }
        return isValid;
    };
    EventService.prototype.Exp_TrackEvent = function (eventName, description, quantity) {
        var detailsArray = eventName;
        if (typeof detailsArray === "string") {
            detailsArray = [eventName, description, quantity];
        }
        console.log("Event Tracked : ", detailsArray);
    };
    //Event Maps
    EventService.prototype.RefreshEventMapConfig = function (force) {
        //let the master frame worry about refreshes
        if (!this.applicationSvc.isMaster) {
            return;
        }
        // every 60 seconds
        //check for an updated eventmap
        if (+this.windowSvc.Date.now() - +this.lastEventMapPing > this.pingInterval || force) {
            this.lastEventMapPing = this.windowSvc.Date.now();
            this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_CHECK_EVENT_MAP_CONFIG_VERSION, { version: this.eventMapVersion });
        }
    };
    EventService.prototype.LoadEventMapConfig = function (eventMapConfig) {
        if (eventMapConfig) {
            this._eventMapConfig = eventMapConfig;
        }
    };
    EventService.prototype.AddEventMaps = function (EventMaps, ResetFirst) {
        if (ResetFirst) {
            this._eventMapConfig.eventMaps = [];
        }
        this._eventMapConfig.eventMaps = this._eventMapConfig.eventMaps.concat(EventMaps);
    };
    EventService.prototype.RelevantMappedEvents = function () {
        if (typeof this._eventMapConfig.eventMaps === "undefined") {
            this._eventMapConfig.eventMaps = [];
        }
        var allEvents = this.eventMaps.filter(function (e) {
            return !e.disabled;
        }), suggestedEvents = this.eventMaps.filter(function (e) {
            return e.selectorTypeId === Enums_1.Enums.SelectorTypes.Suggested && !e.disabled;
        }), customEvents = this.eventMaps.filter(function (e) {
            return e.selectorTypeId === Enums_1.Enums.SelectorTypes.Custom && !e.disabled;
        });
        return {
            all: allEvents,
            suggested: suggestedEvents,
            custom: customEvents
        };
    };
    return EventService;
}());
exports.default = EventService;


/***/ }),

/***/ "./src/services/http.service.ts":
/*!**************************************!*\
  !*** ./src/services/http.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpService = /** @class */ (function () {
    function HttpService(coder, XMLHttpRequestRef) {
        if (coder) {
            this.encode = coder.encode;
            this.decode = coder.decode;
        }
        else {
            this.encode = JSON.stringify;
            this.decode = JSON.parse;
        }
        this.XMLHttpRequestFactory = function () { return new (XMLHttpRequestRef || XMLHttpRequest)(); };
    }
    HttpService.prototype.Get = function (url, successCallback, failureCallback) {
        return this.http("GET", url, null, false, successCallback, failureCallback);
    };
    HttpService.prototype.Post = function (url, postObject, withCredentials, successCallback, failureCallback) {
        return this.http("POST", url, postObject, withCredentials, successCallback, failureCallback);
    };
    HttpService.prototype.http = function (method, url, postObject, withCredentials, successCallback, failureCallback) {
        var _this = this;
        var xhr = this.XMLHttpRequestFactory();
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 204) {
                if (successCallback) {
                    var response = xhr.responseText;
                    if (response.substring(0, 1) === "{" || response.substring(0, 1) === "[") {
                        response = _this.decode(response);
                    }
                    return successCallback(response);
                }
            }
            else {
                console.warn("Request Failed (" + xhr.status + ") [" + url + "]:" + xhr.responseText);
                if (failureCallback) {
                    failureCallback(xhr.responseText, postObject);
                }
            }
        };
        xhr.onabort = function () {
            console.warn("Request Aborted[" + url + "]:" + xhr.responseText);
            if (failureCallback) {
                failureCallback("Request Aborted", postObject);
            }
        };
        xhr.onerror = function () {
            console.warn("Request Failed (onerror) [" + url + "]:" + xhr.responseText);
            if (failureCallback) {
                failureCallback("Request Failed", postObject);
            }
        };
        var formData = null;
        if (postObject) {
            formData = "=" + encodeURIComponent(this.encode(postObject));
        }
        xhr.open(method, url);
        xhr.withCredentials = withCredentials;
        // Have to use www-form-urlencoded otherwise CORS requires two requests (OPTIONS, method)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        try {
            if (formData) {
                xhr.send(formData);
            }
            else {
                xhr.send();
            }
        }
        catch (ex) {
            if (failureCallback) {
                failureCallback("Request Failed", postObject);
            }
        }
        return xhr;
    };
    return HttpService;
}());
exports.default = HttpService;


/***/ }),

/***/ "./src/services/message.service.ts":
/*!*****************************************!*\
  !*** ./src/services/message.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var MessageService = /** @class */ (function () {
    function MessageService(commSvc, windowSvc, storageService) {
        this.commSvc = commSvc;
        this.windowSvc = windowSvc;
        this.storageService = storageService;
        //Privates
        this._announcements = [];
    }
    Object.defineProperty(MessageService.prototype, "Announcements", {
        get: function () {
            return this._announcements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageService.prototype, "SeenAnnouncementIdsKey", {
        get: function () {
            return "SeenAnnouncementIds-" + this.commSvc.appKey + "-" + this.commSvc.contactKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageService.prototype, "SeenAnnouncementIds", {
        get: function () {
            try {
                return this.storageService.get(this.SeenAnnouncementIdsKey, []);
            }
            catch (ex) {
                return [];
            }
        },
        set: function (value) {
            this.storageService.set(this.SeenAnnouncementIdsKey, value);
        },
        enumerable: true,
        configurable: true
    });
    MessageService.prototype.SeedAnnouncements = function (baseAnnouncements) {
        //reset announcements
        this._announcements = [];
        //process each seeded announcement
        for (var i = 0; i < baseAnnouncements.length; i++) {
            var processedAnnouncement = this.processAnnouncement(baseAnnouncements[i]);
            if (processedAnnouncement) {
                //store the announcement
                this._announcements.push(processedAnnouncement);
            }
        }
        //this._announcements = baseAnnouncements;
    };
    MessageService.prototype.SendReadReceipt = function (messageId) {
        if (messageId > 0) {
            for (var i = 0; i < this.Announcements.length; i++) {
                if (this.Announcements[i] && this.Announcements[i].id === messageId) {
                    if (!this.Announcements[i].isRead) {
                        console.info("marking message as read");
                        this.Announcements[i].isRead = true;
                        this.SeenAnnouncementIds = this.SeenAnnouncementIds.concat([messageId]);
                        this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_MESSAGE_READ, messageId);
                    }
                }
            }
        }
    };
    MessageService.prototype.SendClickAudit = function (messageId) {
        if (messageId > 0) {
            this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_MESSAGE_CLICKED, messageId);
        }
    };
    MessageService.prototype.SanitizeAnnouncements = function () {
        this._announcements = this.Announcements.filter(function (n) {
            return n !== undefined && n !== null;
        });
    };
    //Entry point for Announcements workflow
    MessageService.prototype.AddNewAnnouncement = function (message) {
        var processedAnnouncement = this.processAnnouncement(message);
        if (processedAnnouncement) {
            this._announcements.push(processedAnnouncement);
        }
        return processedAnnouncement;
    };
    MessageService.prototype.ExpireAnnouncement = function (message) {
        for (var i = 0; i < this._announcements.length; i++) {
            var msg = this._announcements[i];
            if (msg.messageKey === message.messageKey) {
                //merge the old announcement object with what is passed from the server
                // the digest cycle will handle refreshing the UI
                this._announcements[i] = clientlibs_1.CoreUtils.extend({}, msg, message);
            }
        }
    };
    /**
     * Ensure an announcement is only added once and set the UI properties like sequence and deliveryDate
     * @param announcement
     */
    MessageService.prototype.processAnnouncement = function (announcement) {
        //ensure announcements only get added once
        var alreadyExists = false;
        for (var i = 0; i < this._announcements.length; i++) {
            if (announcement.messageKey === this._announcements[i].messageKey) {
                announcement.isRead = this._announcements[i].isRead;
                alreadyExists = true;
            }
        }
        if (alreadyExists) {
            return;
        }
        announcement.sequence = this._announcements.length + 1;
        announcement.deliveryDate = new this.windowSvc.Date(announcement.deliveryDate);
        announcement.at = clientlibs_1.CoreUtils.Dates.formatWithSlashes(announcement.deliveryDate);
        announcement.time = clientlibs_1.CoreUtils.Times.formatWithAMPM(announcement.deliveryDate);
        announcement.announcementIncludeInPanelString = (announcement.announcementIncludeInPanel).toString();
        announcement.showInfoMessageString = (announcement.announcementIncludeInPanel).toString();
        if (this.SeenAnnouncementIds.indexOf(announcement.id) !== -1) {
            announcement.isRead = true;
        }
        //never show info message for NPS
        if (this.isNPSAnnouncement(announcement)) {
            announcement.showInfoMessageString = "false";
        }
        return announcement;
    };
    //Should announcement be added to static announcements
    MessageService.prototype.isPanelAnnouncement = function (announcement) {
        return announcement.announcementIncludeInPanel;
    };
    MessageService.prototype.isPopupAnnouncement = function (announcement) {
        return (announcement.announcementPositionId && announcement.announcementPositionId === Enums_1.Enums.AnnouncementPosition.PopUp);
    };
    MessageService.prototype.isSliderAnnouncement = function (announcement) {
        return (announcement.announcementPositionId && announcement.announcementPositionId > Enums_1.Enums.AnnouncementPosition.PopUp);
    };
    MessageService.prototype.isNPSAnnouncement = function (announcement) {
        //{"Type": "Nps", "Question": "How likely would you recommend Blue Product to a friend or colleague?", "ResponseUrl": "http://localhost:53156/nps?key=1!vxF49bXsbXwqda2OYL6EziHp2lCuth4qOq5BB8YUu9Y%3D"}
        if (announcement.messageData) {
            //normalize data
            if (announcement.messageData.Type) {
                announcement.messageData.type = announcement.messageData.Type;
            }
            if (announcement.messageData.Question) {
                announcement.messageData.question = announcement.messageData.Question;
            }
            if (announcement.messageData.ResponseUrl) {
                announcement.messageData.responseUrl = announcement.messageData.ResponseUrl;
            }
            return (announcement.messageData.type || "").toLowerCase() === "nps";
        }
        return false;
    };
    MessageService.prototype.isAdvancedDisplayAnnouncement = function (announcement) {
        return (this.isPopupAnnouncement(announcement) || this.isSliderAnnouncement(announcement));
    };
    MessageService.prototype.getAnnouncementPositionClassFromId = function (announcementPositionId) {
        switch (announcementPositionId) {
            case Enums_1.Enums.AnnouncementPosition.SlideBottomCenter:
                return "bottom-center";
            case Enums_1.Enums.AnnouncementPosition.SlideLeftBottom:
                return "left-bottom";
            case Enums_1.Enums.AnnouncementPosition.SlideTopLeft:
                return "top-left";
            case Enums_1.Enums.AnnouncementPosition.SlideTopCenter:
                return "top-center";
            case Enums_1.Enums.AnnouncementPosition.SlideTopRight:
                return "top-right";
            case Enums_1.Enums.AnnouncementPosition.SlideBottomLeft:
                return "bottom-left";
            case Enums_1.Enums.AnnouncementPosition.SlideBottomRight:
                return "bottom-right";
            case Enums_1.Enums.AnnouncementPosition.SlideLeftTop:
                return "left-top";
            case Enums_1.Enums.AnnouncementPosition.SlideLeftCenter:
                return "left-center";
            case Enums_1.Enums.AnnouncementPosition.SlideRightTop:
                return "right-top";
            case Enums_1.Enums.AnnouncementPosition.SlideRightCenter:
                return "right-center";
            case Enums_1.Enums.AnnouncementPosition.SlideRightBottom:
                return "right-bottom";
            default:
                console.error("Unknown AnnouncementPositionId " + announcementPositionId);
                return "bottom-center";
        }
    };
    return MessageService;
}());
exports.default = MessageService;


/***/ }),

/***/ "./src/services/session.service.ts":
/*!*****************************************!*\
  !*** ./src/services/session.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
var SessionStorageQueue_1 = __importDefault(__webpack_require__(/*! ../core/SessionStorageQueue */ "./src/core/SessionStorageQueue.ts"));
var SessionService = /** @class */ (function () {
    function SessionService(storageSvc, commSvc, appSvc, tenantSvc, windowSvc) {
        this.storageSvc = storageSvc;
        this.commSvc = commSvc;
        this.appSvc = appSvc;
        this.tenantSvc = tenantSvc;
        this.windowSvc = windowSvc;
        this.minimumModuleDurationInSeconds = 1; //anything less than this will not be pushed to server
        //Privates
        this.heartbeatInterval = SessionService.heartbeatIntervals.active;
        this.functionality = {
            panelEnabled: false,
            alwaysUseLaunchAvatar: false,
            showAccountOwnerSection: false,
            hasAccountOwner: false,
            onlyShowWhenMessagesExist: false,
            //use accountPanelContent Versions
            headerHtml: null,
            footerHtml: null,
            launchAvatarUrl: null
        };
        this.contentPanelEnabled = false;
        this.accountContent = {
            defaultAnnouncement: null,
            header: null,
            footer: null,
            launchAvatarUrl: null,
            clickToSeeMoreText: "Click here to see that info again",
            branding: null,
            css: null
        };
        this.lastHeartbeat = null;
        this.moduleActivities = new SessionStorageQueue_1.default(this.storageSvc, this.windowSvc, SessionService.storageKeys.TimeInAppQueueKey);
        this.isSilent = false;
    }
    Object.defineProperty(SessionService.prototype, "currentActivity", {
        get: function () {
            return this.storageSvc.get(SessionService.storageKeys.TimeInAppCurrentKey, null);
        },
        enumerable: true,
        configurable: true
    });
    SessionService.prototype.updateCurrentActivity = function (activity) {
        this.storageSvc.set(SessionService.storageKeys.TimeInAppCurrentKey, activity);
    };
    SessionService.prototype.clearCurrentActivity = function () {
        this.storageSvc.remove(SessionService.storageKeys.TimeInAppCurrentKey);
    };
    SessionService.prototype.SetFunctionality = function (Functionality) {
        this.functionality = Functionality;
    };
    SessionService.prototype.CurrentFunctionality = function () {
        return this.functionality;
    };
    //IsActive
    SessionService.prototype.triggerHeartbeat = function (isMasterFrame) {
        if (this.ShouldPreventUsageSends) {
            return;
        }
        // only do heartbeat every 30 seconds
        if (+this.windowSvc.Date.now() - +this.lastHeartbeat > this.heartbeatInterval) {
            this.lastHeartbeat = this.windowSvc.Date.now();
            //ping back that user is active
            //console.info((CoreUtils.FeatureDetection.inIframe() ? "iFrame " : "") + "Client Active Heartbeat");
            var userActiveData = {
                title: this.windowSvc.title(),
                location: this.windowSvc.href()
            };
            this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_IS_ACTIVE, this.commSvc.urlTracking ? userActiveData : null);
            //send any in app time activity
            if (isMasterFrame) {
                var moduleActivities = this.popModuleActivities();
                if (moduleActivities && moduleActivities.length > 0) {
                    this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_TIME_IN_APP, moduleActivities);
                }
            }
        }
    };
    SessionService.prototype.changeHeartbeatInterval = function (newInterval) {
        if (this.heartbeatInterval === newInterval) {
            return;
        }
        this.heartbeatInterval = newInterval;
        this.lastHeartbeat = 0;
    };
    Object.defineProperty(SessionService.prototype, "LaunchAvatarUrl", {
        //******************************//
        // Avatar Urls
        //*****************************//
        //Url of image to use for the open panel button
        get: function () {
            var avatarUrl;
            //if always use launch avatar or showAccountOwner is disabled
            // use the launchAvatarUrl
            if (this.AlwaysUseLaunchAvatar || !this.HasAccountOwner || (this.AccountOwnerAvatarUrl || "").length === 0) {
                avatarUrl = this.accountContent.launchAvatarUrl;
            }
            else {
                avatarUrl = this.AccountOwnerAvatarUrl;
            }
            //ultimate fall back!
            if (!avatarUrl) {
                avatarUrl = "img/info.png";
            }
            return this.appSvc.addCdn(avatarUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "AccountOwnerAvatarUrl", {
        //Url of image to use for the account owner
        get: function () {
            var currentUserAccount = this.tenantSvc.accountOwner;
            if (currentUserAccount && currentUserAccount.avatarUrl) {
                return this.appSvc.addCdn(currentUserAccount.avatarUrl);
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "PanelEnabled", {
        //******************************//
        // Feature Flags
        //*****************************//
        //Display Panel
        get: function () {
            return this.getBoolFuncFlag("panelEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "ContentPanelEnabled", {
        get: function () {
            return this.getBoolFuncFlag("devlessEnabled"); //this.tenantSvc.contact.hasApplicationPanelAdminAccess;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "ShouldPreventUsageSends", {
        //If this is a devless session we dont want to track usage but we want debug logging to still output
        get: function () {
            //return false;
            return this.getBoolFuncFlag("devlessEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "ShowAccountOwner", {
        //Account Owner Section Enabled
        get: function () {
            return this.getBoolFuncFlag("showAccountOwnerSection");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "AlwaysUseLaunchAvatar", {
        //Always show the Launch avatar for the chat button toggle
        get: function () {
            return this.getBoolFuncFlag("alwaysUseLaunchAvatar");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "HasAccountOwner", {
        //if the current user is assigned to an account owner
        get: function () {
            return this.getBoolFuncFlag("hasAccountOwner");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "OnlyShowWhenMessagesExist", {
        get: function () {
            return this.getBoolFuncFlag("onlyShowWhenMessagesExist");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "PanelPosition", {
        get: function () {
            return this.functionality.panelPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "AvatarType", {
        get: function () {
            return this.functionality.avatarType;
        },
        enumerable: true,
        configurable: true
    });
    //******************************//
    // Default Content
    //*****************************//
    SessionService.prototype.SetAccountContent = function (Functionality) {
        this.accountContent = {
            defaultAnnouncement: Functionality.defaultAnnouncementContent,
            header: Functionality.headerHtml,
            footer: Functionality.footerHtml,
            launchAvatarUrl: Functionality.launchAvatarUrl,
            css: Functionality.css,
            clickToSeeMoreText: Functionality.clickToSeeMoreText,
            branding: null
        };
        //try to merge in the specified branding options
        if (Functionality.branding && Functionality.branding.trim().length > 0) {
            try {
                var brandingJson = this.windowSvc.JSON.parse(Functionality.branding);
                this.accountContent.branding = clientlibs_1.CoreUtils.extend(this.accountContent.branding, brandingJson);
            }
            catch (ex) {
                //eh?
            }
        }
    };
    Object.defineProperty(SessionService.prototype, "CurrentAccountContent", {
        get: function () {
            return this.accountContent;
        },
        enumerable: true,
        configurable: true
    });
    //******************************//
    // Module Activity
    //*****************************//
    SessionService.prototype.SetModule = function (module) {
        //if the new module is the same as the old, short circuit
        if (this.CurrentModule === module && this.currentActivity) {
            return;
        }
        var timeStamp = new this.windowSvc.Date().toISOString();
        if (this.currentActivity) {
            //close out previous
            this.endCurrentActivity(timeStamp);
        }
        this.CurrentModule = module;
        this.startNewActivity(timeStamp);
    };
    //Take the last known module and start a new activity
    SessionService.prototype.SetModuleActivityActive = function () {
        this.SetModule(this.CurrentModule);
        this.changeHeartbeatInterval(SessionService.heartbeatIntervals.active);
    };
    //if there is a current activity, end it
    SessionService.prototype.SetModuleActivityInactive = function () {
        if (this.currentActivity) {
            this.endCurrentActivity(new this.windowSvc.Date().toISOString());
        }
        //this.changeHeartbeatInterval(SessionService.heartbeatIntervals.inActive);
    };
    //******************************//
    // Silent Mode
    //*****************************//
    SessionService.prototype.SetSilent = function (isSilent) {
        this.isSilent = isSilent;
    };
    Object.defineProperty(SessionService.prototype, "IsSilent", {
        get: function () {
            return this.isSilent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "CurrentAdminUserAccount", {
        get: function () {
            return this.adminUserAccount;
        },
        set: function (userAccount) {
            this.adminUserAccount = userAccount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "IsContentPanelOpen", {
        get: function () {
            return this.storageSvc.get(SessionService.storageKeys.ContentPanelKey, false);
        },
        set: function (newValue) {
            this.storageSvc.set(SessionService.storageKeys.ContentPanelKey, newValue);
        },
        enumerable: true,
        configurable: true
    });
    //Internal Methods
    SessionService.prototype.getBoolFuncFlag = function (flagName) {
        return (this.functionality[flagName] || false);
    };
    SessionService.prototype.startNewActivity = function (timeStamp) {
        var newActivity = {
            module: this.CurrentModule,
            startDate: timeStamp,
            location: null,
            title: null,
            endDate: null,
            duration: null
        };
        if (this.commSvc.urlTracking) {
            newActivity.location = this.windowSvc.href();
            newActivity.title = this.windowSvc.title();
        }
        this.updateCurrentActivity(newActivity);
    };
    SessionService.prototype.endCurrentActivity = function (timeStamp) {
        var ca = this.currentActivity;
        if (ca !== null) {
            ca.module = ca.module || SessionService.defaultModule;
            ca.endDate = timeStamp;
            ca.duration = (new this.windowSvc.Date(ca.endDate) - new this.windowSvc.Date(ca.startDate)) / 1000;
            if (ca.duration >= this.minimumModuleDurationInSeconds) {
                this.moduleActivities.push(ca);
            }
            this.clearCurrentActivity();
        }
    };
    //remove all activities from the buffer
    SessionService.prototype.popModuleActivities = function () {
        var timeStamp = new this.windowSvc.Date().toISOString();
        var wasActive = false;
        if (this.currentActivity) {
            //if there isn't a current module somehow
            // ensure it is set to the same as the previous activity
            if (!this.CurrentModule) {
                this.CurrentModule = this.currentActivity.module;
            }
            //close out previous
            this.endCurrentActivity(timeStamp);
            wasActive = true;
        }
        var count = this.moduleActivities.length;
        var returnActivities = [];
        while (count) {
            var act = this.moduleActivities.shift();
            if (act !== null && act !== undefined) {
                returnActivities.push(act);
            }
            count--;
        }
        this.moduleActivities.empty();
        if (wasActive) {
            this.startNewActivity(timeStamp);
        }
        return returnActivities;
    };
    //statics
    SessionService.heartbeatIntervals = {
        active: 1000 * 30,
        inActive: 1000 * 60 * 5 // 5 min
    };
    SessionService.storageKeys = {
        TimeInAppCurrentKey: "CZ_TIME_IN_APP_CURRENT_KEY",
        TimeInAppQueueKey: "CZ_TIME_IN_APP_QUEUE_KEY",
        ContentPanelKey: "CZ_CONTENT_PANEL_OPEN_KEY"
    };
    SessionService.defaultModule = "Default";
    return SessionService;
}());
exports.default = SessionService;


/***/ }),

/***/ "./src/services/storage.service.ts":
/*!*****************************************!*\
  !*** ./src/services/storage.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StorageService = /** @class */ (function () {
    function StorageService(storageRepo) {
        this.storageRepo = storageRepo;
    }
    StorageService.prototype.set = function (key, value) {
        this.storageRepo.set(key, value);
    };
    StorageService.prototype.get = function (key, defaultValue) {
        return this.storageRepo.get(key, defaultValue);
    };
    StorageService.prototype.remove = function (key) {
        this.storageRepo.remove(key);
    };
    return StorageService;
}());
exports.default = StorageService;


/***/ }),

/***/ "./src/services/tenant.service.ts":
/*!****************************************!*\
  !*** ./src/services/tenant.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var FeatureFlags;
(function (FeatureFlags) {
    FeatureFlags["PageTags"] = "pageTaggingEnabled";
    FeatureFlags["Walkthroughs"] = "walkthroughsEnabled";
    FeatureFlags["NewDevless"] = "newDevlessEnabled";
})(FeatureFlags = exports.FeatureFlags || (exports.FeatureFlags = {}));
var TenantService = /** @class */ (function () {
    function TenantService(storageSvc) {
        this.storageSvc = storageSvc;
        //Privates
        this._accountOwner = null;
        this._tenantId = null;
        this.resetContact();
        this._pageTagConfig = { pageTags: [], pageTagVersion: "-1" };
        //default all feature flags to false
        this.featureFlags = {};
        this.featureFlags[FeatureFlags.PageTags] = false;
        this.featureFlags[FeatureFlags.Walkthroughs] = false;
        this.featureFlags[FeatureFlags.NewDevless] = false;
    }
    //************************//
    // Tenant Id
    //************************//
    TenantService.prototype.setTenantId = function (TenantId) {
        this._tenantId = TenantId;
    };
    TenantService.prototype.currentTenantId = function () {
        return this._tenantId;
    };
    Object.defineProperty(TenantService.prototype, "accountOwner", {
        //************************//
        // User Account
        //************************//
        get: function () {
            //if the current userAccount does not exist,
            // try to load it from storage
            if (!this._accountOwner) {
                this._accountOwner = this.storageSvc.get(TenantService.storageKeys.UserAccount, this._accountOwner);
            }
            return this._accountOwner;
        },
        enumerable: true,
        configurable: true
    });
    TenantService.prototype.setAccountOwner = function (newAccountOwner) {
        this._accountOwner = newAccountOwner;
        //store current state of userAccount
        //this.storageSvc.remove(TenantService.storageKeys.UserAccount);
        this.storageSvc.set(TenantService.storageKeys.UserAccount, this._accountOwner);
    };
    Object.defineProperty(TenantService.prototype, "contact", {
        //************************//
        // User Account
        //************************//
        get: function () {
            //if the current contact does not exist,
            // try to load it from storage
            if (!this._contact) {
                this._contact = this.storageSvc.get(TenantService.storageKeys.Contact, this._contact);
            }
            return this._contact;
        },
        enumerable: true,
        configurable: true
    });
    //Methods
    //Contact Object Methods
    TenantService.prototype.SetContact = function (newContact) {
        this._contact = newContact;
        //store current state of contact
        this.storageSvc.set(TenantService.storageKeys.Contact, this._contact);
    };
    //Reset Contact
    TenantService.prototype.resetContact = function () {
        //clear out the contact
        this._contact = {
            id: null
        };
        this.storageSvc.remove(TenantService.storageKeys.Contact);
    };
    Object.defineProperty(TenantService.prototype, "pageTags", {
        //Page Tags
        get: function () {
            return this._pageTagConfig.pageTags;
        },
        enumerable: true,
        configurable: true
    });
    TenantService.prototype.LoadPageTagConfig = function (pageTagConfig) {
        if (pageTagConfig) {
            if (pageTagConfig.pageTags) {
                var c = pageTagConfig.pageTags.length;
                for (var i = 0; i < c; i++) {
                    var pageTag = pageTagConfig.pageTags[i];
                    pageTagConfig.pageTags[i] = clientlibs_1.PageTag.FromObject(pageTag);
                }
            }
            this._pageTagConfig = pageTagConfig;
        }
    };
    TenantService.prototype.AddPageTags = function (PageTags, ResetFirst) {
        if (ResetFirst) {
            this._pageTagConfig.pageTags = [];
        }
        this._pageTagConfig.pageTags = this._pageTagConfig.pageTags.concat(PageTags);
    };
    //Feature Flags
    TenantService.prototype.FeatureEnabled = function (name) {
        try {
            return !!this.featureFlags[name];
        }
        catch (ex) {
            return false;
        }
    };
    //Statics
    TenantService.storageKeys = {
        Contact: "CONTACT_KEY",
        UserAccount: "USERACCOUNT_KEY"
    };
    return TenantService;
}());
exports.default = TenantService;


/***/ }),

/***/ "./src/services/walkthrough.service.ts":
/*!*********************************************!*\
  !*** ./src/services/walkthrough.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = __webpack_require__(/*! ../core/Enums */ "./src/core/Enums.ts");
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var WalkthroughService = /** @class */ (function () {
    function WalkthroughService(commSvc, windowSvc, applicationSvc, sessionSvc) {
        this.commSvc = commSvc;
        this.windowSvc = windowSvc;
        this.applicationSvc = applicationSvc;
        this.sessionSvc = sessionSvc;
        this.lastWalkthroughPing = null;
        this.pingInterval = 1000 * 30;
        //Privates
        this._walkthroughConfig = { items: [], version: "-1" };
    }
    Object.defineProperty(WalkthroughService.prototype, "walkthroughsVersion", {
        get: function () {
            return this._walkthroughConfig.version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughService.prototype, "walkthroughs", {
        get: function () {
            return this._walkthroughConfig.items;
        },
        enumerable: true,
        configurable: true
    });
    WalkthroughService.prototype.RefreshWalkthroughConfig = function (force) {
        //let the master frame worry about refreshes
        if (!this.applicationSvc.isMaster) {
            return;
        }
        // every 60 seconds
        //check for an updated walkthrough config
        if (+this.windowSvc.Date.now() - +this.lastWalkthroughPing > this.pingInterval || force) {
            this.lastWalkthroughPing = this.windowSvc.Date.now();
            var data = {
                version: this.walkthroughsVersion
            };
            this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_CheckWalkthroughConfigVersion, data);
        }
    };
    WalkthroughService.prototype.LoadWalkthroughConfig = function (walkthroughConfig) {
        if (walkthroughConfig) {
            for (var i = 0; i < walkthroughConfig.items.length; i++) {
                if (walkthroughConfig.items[i]) {
                    walkthroughConfig.items[i] = clientlibs_1.Walkthrough.fromObject(walkthroughConfig.items[i]);
                }
            }
            this._walkthroughConfig = walkthroughConfig;
            if (!this.lastWalkthroughPing) {
                this.lastWalkthroughPing = this.windowSvc.Date.now();
            }
        }
    };
    WalkthroughService.prototype.AddWalkthroughs = function (Walkthroughs, ResetFirst) {
        if (ResetFirst) {
            this._walkthroughConfig.items = [];
        }
        this._walkthroughConfig.items = this._walkthroughConfig.items.concat(Walkthroughs);
    };
    WalkthroughService.prototype.GetClickWalkthroughs = function () {
        return this._walkthroughConfig.items.filter(function (item) {
            return !item.disabled && item.triggerTypeId === clientlibs_1.WalkthroughTriggerType.Click;
        });
    };
    WalkthroughService.prototype.GetPageVisitWalkthroughs = function () {
        return this._walkthroughConfig.items.filter(function (item) {
            return !item.disabled && item.triggerTypeId === clientlibs_1.WalkthroughTriggerType.PageVisit;
        });
    };
    //WalkthroughContactActions
    WalkthroughService.prototype.SendActionMessage = function (actionId, walkthroughId, walkthroughStepId) {
        if (walkthroughId && walkthroughId > 0) {
            var actionInfo = {
                actionId: actionId,
                actionDate: new this.windowSvc.Date().toISOString(),
                walkthroughId: walkthroughId,
                walkthroughStepId: walkthroughStepId
            };
            //dont send walkthrough actions for when the devless panel is open
            if (this.sessionSvc.ShouldPreventUsageSends) {
                return;
            }
            this.commSvc.send(Enums_1.Enums.SocketMessageTypes.SOCKETMESSAGETYPE_WalkthroughAction, actionInfo);
        }
    };
    return WalkthroughService;
}());
exports.default = WalkthroughService;


/***/ }),

/***/ "./src/services/window.service.ts":
/*!****************************************!*\
  !*** ./src/services/window.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var czq = __webpack_require__(/*! ../czq/czq.js */ "./src/czq/czq.js");
var clientlibs_1 = __webpack_require__(/*! @churnzero/clientlibs */ "./node_modules/@churnzero/clientlibs/dist/main/index.js");
var errorLogger_1 = __importDefault(__webpack_require__(/*! ../core/errorLogger */ "./src/core/errorLogger.ts"));
var WindowService = /** @class */ (function () {
    function WindowService(inputWindow, useWindowsObjects) {
        if (useWindowsObjects === void 0) { useWindowsObjects = false; }
        this.useWindowsObjects = useWindowsObjects;
        //Privates
        this.eventNamespace = "czEvent";
        //Public Properties
        this._czHost = ""; //gets replaced by build task
        this._origins = [];
        this._window = inputWindow;
        this.errorLogger = new errorLogger_1.default(this.socketServerApiUrl, this.coder());
    }
    Object.defineProperty(WindowService.prototype, "czHost", {
        get: function () {
            return this._czHost;
        },
        set: function (newHost) {
            this._czHost = newHost;
            this._clientSideUrls = this.buildClientSideUrlsFromSetHost(newHost);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "clientSideUrls", {
        get: function () {
            if (!this._clientSideUrls) {
                this._clientSideUrls = this.parseClientSideUrls();
            }
            return this._clientSideUrls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "socketServerApiUrl", {
        get: function () {
            return this.clientSideUrls.baseApiUrl + 'api/v1/sockets/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "cdnUrl", {
        get: function () {
            return this.clientSideUrls.baseApiUrl + 'external/';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "JSON", {
        get: function () {
            if (!this._json) {
                this._json = this.getOriginalJson();
            }
            return this._json;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "Date", {
        get: function () {
            if (!this._date) {
                this._date = this.getOriginalDate();
            }
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "czq", {
        get: function () {
            if (typeof (this._czq) === "undefined") {
                this._czq = czq;
            }
            return this._czq;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "ChurnZero", {
        get: function () {
            return this.window["ChurnZero"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "originalObjectIframe", {
        get: function () {
            if (this.useWindowsObjects) {
                return {
                    contentWindow: window
                };
            }
            if (!this._originalObjectIFrame) {
                var id = "cz-clean-room";
                var frame = this.window.document.getElementById(id);
                if (frame) {
                    console.log("Reclaimed Clean Room Frame");
                    this._originalObjectIFrame = frame;
                }
                else {
                    console.log("Adding Clean Room Frame");
                    var iframeSrc = "about:blank";
                    var iframe = this.window.document.createElement("iframe");
                    iframe.id = id;
                    iframe.src = iframeSrc;
                    iframe.style.display = "none";
                    iframe.height = iframe.width = "0";
                    var root = this.window.document.getElementsByTagName("body");
                    if (root.length === 0) {
                        root = this.window.document.getElementsByTagName("head");
                    }
                    if (root.length === 0) {
                        root = this.window.document.getElementsByTagName("html");
                    }
                    if (root.length > 0) {
                        root[0].appendChild(iframe);
                    }
                    this._originalObjectIFrame = iframe;
                }
            }
            return this._originalObjectIFrame;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "elementCache", {
        get: function () {
            if (typeof (this._elementCache) === "undefined") {
                this._elementCache = this.buildElementCache();
            }
            return this._elementCache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "window", {
        get: function () {
            return this._window;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "document", {
        get: function () {
            return this._window.document;
        },
        enumerable: true,
        configurable: true
    });
    //Host Name
    WindowService.prototype.hostName = function () {
        return this.window.location.hostname;
    };
    //Title
    WindowService.prototype.title = function () {
        return this.window.document.title;
    };
    //href
    WindowService.prototype.href = function () {
        return this.window.location.href;
    };
    /**
     * Object to encode and decode values to/from strings and objects
     */
    WindowService.prototype.coder = function () {
        var coder = this.JSON;
        return { encode: coder.stringify, decode: coder.parse };
    };
    WindowService.prototype.XMLHttpRequestReference = function () {
        return this.getOriginalXMLHttpRequest();
    };
    /**
     * Determine if the current browser is supported
     */
    WindowService.prototype.isSupportedBrowser = function () {
        if (clientlibs_1.CoreUtils.FeatureDetection.isLegacyIE()) {
            return false;
        }
        if (this.isBrowserCaptureUserAgent()) {
            return false;
        }
        if (!this.supportsISOStringParsing()) {
            return false;
        }
        return true;
    };
    /**
     * Determine if the current href is an acceptable location
     * @param additionalLocations
     */
    WindowService.prototype.isAcceptableLocation = function (additionalLocations) {
        var href = this.href();
        var badLocations = WindowService.defaultUnacceptableLocations;
        if (Array.isArray(additionalLocations)) {
            badLocations = badLocations.concat(additionalLocations);
        }
        for (var i = 0; i < badLocations.length; i++) {
            if (href.indexOf(badLocations[i]) !== -1) {
                return false;
            }
        }
        return true;
    };
    Object.defineProperty(WindowService.prototype, "origins", {
        get: function () {
            if (!this._origins || this._origins.length === 0) {
                this._origins = [this.window.location.origin];
            }
            return this._origins;
        },
        set: function (newOrigins) {
            this._origins = newOrigins;
        },
        enumerable: true,
        configurable: true
    });
    WindowService.prototype.addOrigin = function (origin) {
        if (this.origins.indexOf(origin) === -1) {
            this.origins = this.origins.concat([origin]);
        }
    };
    /**
     * Determine if the ChurnZero object exists on the window
     */
    WindowService.prototype.wasDisposed = function () {
        var cz = this._window["ChurnZero"];
        if (!cz) {
            return true;
        }
        if (cz.name !== "ChurnZeroApp") {
            return true;
        }
        return false;
    };
    /**
     * UI Event Items
     **/
    WindowService.prototype.namespaceEvent = function (events) {
        if (typeof (events) === "string") {
            events = [events];
        }
        for (var i = 0; i < events.length; i++) {
            events[i] = events[i].trim() + "." + this.eventNamespace;
        }
        return events.join(" ");
    };
    WindowService.prototype.removeNamespacedEvents = function () {
        console.info("Removing Namespaced Dom Event Listeners");
        var ns = "." + this.eventNamespace;
        this.elementCache.body.off(ns);
        this.elementCache.document.off(ns);
        this.elementCache.window.off(ns);
    };
    /**
     * Generate a selector for the given element
     * @param element
     */
    WindowService.prototype.buildSelector = function (element) {
        var page = this.href(), 
        //target = this.czq(element),
        selector = clientlibs_1.CoreUtils.buildFullDomSelector(element);
        //uniqueness;
        //we have to traverse the tree to build a specific selector
        /*
        let parents = CoreUtils.getParentsOfElement(element);
        let parentSelectors:string[]=[];
        for(let i=0; i<parents.length;i++){
            parentSelectors.push(CoreUtils.buildElementSelector(parents[i]));
        }

        parentSelectors = parentSelectors.reverse();

        let parentSelectors: any = target.parents()
            .map((i, e) => {
                return CoreUtils.buildElementSelector(e as HTMLElement);
            })
            .get()
            .reverse();

        selector = (parentSelectors as string[])
            .concat([CoreUtils.buildElementSelector(element)])
            .join(">");

         */
        //test uniqueness
        //uniqueness = this.czq(selector);
        /*if (uniqueness.length > 1) {
            uniqueness.each(function (i, e) {

                if (e === element) {
                    selector += ":eq(" + i + ")";
                    return false;
                }

            });
        }*/
        return {
            page: page,
            selector: selector,
            full: page + " | " + selector
        };
    };
    /**
     * Checks whether elements are within the user visible viewport of a web browser.
     * Note: Only accounts for vertical position, not horizontal.
     * @param t
     * @param partial
     * @param hidden
     * @param direction
     */
    WindowService.prototype.isVisible = function (t, partial, hidden, direction) {
        /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *       the user visible viewport of a web browser.
         *       only accounts for vertical position, not horizontal.
         */
        if (t.length < 1)
            return false;
        var $t = t.length > 1 ? t.eq(0) : t;
        var $w = this.elementCache.window;
        var vpWidth = $w.width(), vpHeight = $w.height(), clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;
        direction = direction || 'both';
        if (typeof t.getBoundingClientRect === "function") {
            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(), tViz = rec.top >= 0 && rec.top < vpHeight, bViz = rec.bottom > 0 && rec.bottom <= vpHeight, lViz = rec.left >= 0 && rec.left < vpWidth, rViz = rec.right > 0 && rec.right <= vpWidth, vVisible = partial ? tViz || bViz : tViz && bViz, hVisible = partial ? lViz || rViz : lViz && rViz;
            if (direction === "both")
                return clientSize > 0 && vVisible && hVisible;
            else if (direction === "vertical")
                return clientSize > 0 && vVisible;
            else if (direction === "horizontal")
                return clientSize > 0 && hVisible;
        }
        else {
            var viewTop = $w.scrollTop(), viewBottom = viewTop + vpHeight, viewLeft = $w.scrollLeft(), viewRight = viewLeft + vpWidth, offset = $t.offset(), _top = offset.top, _bottom = _top + $t.height(), _left = offset.left, _right = _left + $t.width(), compareTop = partial === true ? _bottom : _top, compareBottom = partial === true ? _top : _bottom, compareLeft = partial === true ? _right : _left, compareRight = partial === true ? _left : _right;
            if (direction === "both")
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if (direction === "vertical")
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if (direction === "horizontal")
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };
    /**
     * Center an element within the body.
     * @param element
     */
    WindowService.prototype.centerElementOnScreen = function (element) {
        if (element === null || typeof element === "undefined") {
            return;
        }
        var bodyElement = this.document.querySelector("body");
        if (!bodyElement) {
            return;
        }
        var top = (bodyElement.clientHeight / 2) - (element.clientHeight / 4); // + bodyElement.scrollTop;
        var left = (bodyElement.clientWidth / 2) - (element.clientWidth / 4); // + bodyElement.scrollLeft;
        element.style.position = "fixed";
        element.style.margin = 0;
        element.style.top = (top > 0 ? top : 0) + "px";
        element.style.left = (left > 0 ? left : 0) + "px";
    };
    /**
     * Get the offset of an element relative to the window
     * @param el
     */
    WindowService.prototype.offset = function (el) {
        var $w = this.window, rect = el.getBoundingClientRect(), scrollLeft = $w.pageXOffset || this.document.documentElement.scrollLeft, scrollTop = $w.pageYOffset || this.document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };
    WindowService.prototype.findElement = function (elementToFind) {
        var element, jqueryResult;
        if (typeof elementToFind === "string") {
            jqueryResult = this.czq(elementToFind);
            if (jqueryResult.length > 0) {
                element = jqueryResult;
            }
            else {
                return;
            }
        }
        else {
            element = this.czq(elementToFind);
        }
        return element;
    };
    /**
     * Generate the necessary urls to communicate with the server.
     * If _czHost is blank, get the source from the Churn Zero script element
     */
    WindowService.prototype.parseClientSideUrls = function () {
        var src = this._czHost;
        if (!src || (src || "").trim().length === 0) {
            src = this.getChurnZeroScriptSrc(this.document);
        }
        return this.buildClientSideUrls(src);
    };
    /**
     * Encode a value so it can be used as an attribute value in HTML
     * @param value
     */
    WindowService.prototype.escapeObjectForDom = function (value) {
        return btoa(this.JSON.stringify(value));
    };
    /**
     * Decode a value that was encoded to be used as an attribute value in HTML
     * @param value
     */
    WindowService.prototype.unescapeObjectFromDom = function (value) {
        return this.JSON.parse(atob(value));
    };
    /**
     * Creates a copy of the given object
     * @param obj
     */
    WindowService.prototype.clone = function (obj) {
        return this.JSON.parse(this.JSON.stringify(obj));
    };
    //Internal Methods
    WindowService.prototype.supportsISOStringParsing = function () {
        try {
            return !isNaN(new this.Date(new this.Date().toISOString()).getTime());
        }
        catch (err) {
            return false;
        }
    };
    WindowService.prototype.isBrowserCaptureUserAgent = function () {
        try {
            var nAgt = navigator.userAgent, iswkhtmlto = nAgt.indexOf('wkhtmlto') !== -1;
            return iswkhtmlto;
        }
        catch (err) {
            return false;
        }
    };
    WindowService.prototype.buildElementCache = function () {
        var body = this.czq("body");
        if (body.length === 0) {
            body = this.czq("html");
        }
        return {
            window: this.czq(window),
            document: this.czq(document),
            head: this.czq("head"),
            body: body
        };
    };
    WindowService.prototype.getOriginalJson = function () {
        var f = this.originalObjectIframe.contentWindow;
        var oj = f.JSON;
        //check if prototypejs is in global space
        if (window && window["Prototype"] && window["Prototype"].Version) {
            var fn_1 = oj.stringify;
            oj.stringify = function (o) {
                var tmp, toJSON;
                if (o.toJSON) {
                    toJSON = o.toJSON;
                    o.toJSON = undefined;
                }
                tmp = fn_1.apply(this, arguments);
                toJSON && (o.toJSON = toJSON);
                return tmp;
            };
        }
        return oj;
    };
    WindowService.prototype.getOriginalDate = function () {
        return this.originalObjectIframe.contentWindow.Date;
    };
    WindowService.prototype.getOriginalXMLHttpRequest = function () {
        if (!this.xmlHttpRequestRef) {
            var f = this.originalObjectIframe.contentWindow;
            this.xmlHttpRequestRef = f.XMLHttpRequest;
        }
        return this.xmlHttpRequestRef;
    };
    /**
     * Find the ChurnZero Script and get the host
     */
    WindowService.prototype.getChurnZeroScriptSrc = function (doc) {
        //cant use czq here because it might not be loaded yet!
        var scriptTag = doc.querySelector('script[src*=\'churnzero.js\']');
        if (scriptTag) {
            var src = scriptTag.getAttribute('src');
            if (src) {
                src = src.substring(0, src.lastIndexOf('/') + 1);
                return src;
            }
        }
        return '';
    };
    WindowService.prototype.buildClientSideUrls = function (src) {
        //setup the apiUrl and the cdnUrl
        var parsed = clientlibs_1.CoreUtils.Urls.parseUrlString(src);
        var apiUrl = 'https:', //parsed.protocol, // + '//' + parsed.host + '/',
        environment = 'p';
        if (parsed.host.indexOf('localhost:53157') >= 0) {
            //localhost
            apiUrl = 'https://analytics.localhost:53157/';
            environment = 'd';
        }
        else if (parsed.host.indexOf('apptest.churnzerolabs.com') >= 0 || parsed.host.indexOf('analyticstest.churnzerolabs.com') >= 0) {
            //test
            apiUrl += '//analyticstest.churnzerolabs.com/';
            environment = 't';
        }
        else if (parsed.host.indexOf('appstaging.churnzerolabs.com') >= 0) {
            //staging
            apiUrl += '//appstaging.churnzerolabs.com/';
            environment = 's';
        }
        else if (parsed.host.indexOf('eu1analytics.churnzero.net') >= 0) {
            //production europe / asia
            apiUrl += '//eu1analytics.churnzero.net/'; //'//' + parsed.host + '/'; //
        }
        else { //if (parsed.host.indexOf('analytics.churnzero.net') >= 0) {
            //production
            apiUrl += '//analytics.churnzero.net/'; //'//' + parsed.host + '/'; //
        }
        return {
            scriptSrc: src,
            baseApiUrl: apiUrl,
            environment: environment,
            //deprecated
            sockets: apiUrl + 'api/v1/sockets/',
            cdn: apiUrl + 'external/',
        };
    };
    WindowService.prototype.buildClientSideUrlsFromSetHost = function (src) {
        //setup the apiUrl and the cdnUrl
        var parsed = clientlibs_1.CoreUtils.Urls.parseUrlString(src);
        var apiUrl = 'https://' + parsed.host + '/', environment = 'p';
        if (parsed.host.indexOf('localhost:53157') >= 0) {
            //localhost
            environment = 'd';
        }
        else if (parsed.host.indexOf('apptest.churnzerolabs.com') >= 0 || parsed.host.indexOf('analyticstest.churnzerolabs.com') >= 0) {
            //test
            environment = 't';
        }
        else if (parsed.host.indexOf('appstaging.churnzerolabs.com') >= 0) {
            //staging
            environment = 's';
        }
        else { //if (parsed.host.indexOf('analytics.churnzero.net') >= 0) {
            //production
        }
        return {
            scriptSrc: src,
            baseApiUrl: apiUrl,
            environment: environment,
            //deprecated
            sockets: apiUrl + 'api/v1/sockets/',
            cdn: apiUrl + 'external/',
        };
    };
    //Statics
    WindowService.defaultUnacceptableLocations = [];
    return WindowService;
}());
exports.default = WindowService;


/***/ }),

/***/ "./src/templateCache/announcementNpsTemplate.html":
/*!********************************************************!*\
  !*** ./src/templateCache/announcementNpsTemplate.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cz-announcement cz-sidebar-note cz-hover-click \" style=\"display: block !important;\" data-message-id=\"{{id}}\" data-info-message=\"{{showInfoMessageString}}\"\r\n     id=\"cz-sidebar-note-{{sequence}}\">\r\n    <div align=\"center\" class=\"cz-nps-container\">\r\n        <div style=\"{{NpsLogoStyle}}\">\r\n            <div style=\"width: 33.3%; padding: 0 15px;\">\r\n                <img src=\"{{NpsLogoUrl}}\" !inline style=\"display: block; max-width: 100%; height: auto\">\r\n            </div>\r\n        </div>\r\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"table\">\r\n            <!-- QUESTION -->\r\n            <tr>\r\n                <td align=\"center\" class=\"survey\">\r\n                    <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"\r\n                           class=\"questiontextcontainer\">\r\n                        <tr>\r\n                            <td align=\"center\" class=\"questiontext\" dir=\"ltr\">{{NpsQuestion}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"table\">\r\n            <!-- LABELS -->\r\n            <tr>\r\n                <td width=\"9\"></td>\r\n                <td class=\"labels\">\r\n                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n                        <tr>\r\n                            <td class=\"left\" align=\"left\" width=\"50%\">{{NpsLowScoreText}}</td>\r\n                            <td class=\"right\" align=\"right\" width=\"50%\">{{NpsHighScoreText}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n                <td width=\"9\"></td>\r\n            </tr>\r\n\r\n            <!-- SCORES -->\r\n            <tr>\r\n                <td width=\"9\"></td>\r\n                <td class=\"scores\">\r\n                    <!-- 10 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\" width=\"44\"\r\n                           height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" class=\"score-10\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\">\r\n                                <a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl10}}\">\r\n                                                <span class=\"score10text\" dir=\"ltr\"\r\n                                                      data-label=\" - {{NpsHighScoreText}}\">10</span>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (img) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\"\r\n                           width=\"5\" height=\"44\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 9 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\" width=\"44\"\r\n                           height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\" width=\"42\" height=\"40\">\r\n                                <a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl9}}\">\r\n                                    <span>9</span>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (nbsp) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 8 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\" width=\"44\"\r\n                           height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\">\r\n                                <a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl8}}\">\r\n                                    <span>8</span>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (nbsp) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 7 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\" width=\"44\"\r\n                           height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\"\r\n\r\n                                width=\"42\" height=\"40\">\r\n                                <a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl7}}\">\r\n                                    <span>7</span>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (nbsp) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 6 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\"\r\n                           width=\"44\" height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\">\r\n                                <a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl6}}\">\r\n                                    <span>6</span></a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (nbsp) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 5 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\"\r\n                           width=\"44\" height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\"><a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl5}}\">\r\n                                <span>5</span></a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (nbsp) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 4 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\"\r\n                           width=\"44\" height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\">\r\n                                <a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl4}}\">\r\n                                    <span>4</span>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (nbsp) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 3 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\" width=\"44\"\r\n                           height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\"><a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl3}}\">\r\n                                <span>3</span></a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (nbsp) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 2 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\"\r\n                           width=\"44\" height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\">\r\n                                <a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl2}}\">\r\n                                    <span>2</span>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (nbsp) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 1-->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\"\r\n                           width=\"44\" height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\"><a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl1}}\">\r\n                                <span>1</span></a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- spacer (img) -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"spacer\">\r\n                        <tr>\r\n                            <td width=\"5\" height=\"44\">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                    <!-- 0 -->\r\n                    <table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"score\"\r\n                           width=\"44\" height=\"44\">\r\n                        <tr>\r\n                            <td align=\"center\" class=\"score-0\" valign=\"middle\"\r\n                                width=\"42\" height=\"40\">\r\n                                <a class=\"cz-nps-click\" data-nps-url=\"{{NpsUrl}}\">\r\n                                                <span class=\"score0text\" dir=\"ltr\"\r\n                                                      data-label=\" - {{NpsLowScoreText}}\">0</span>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </td>\r\n                <td width=\"9\"></td>\r\n            </tr>\r\n        </table>\r\n\r\n    </div>\r\n    <span class=\"cz-announcement-timestamp\">{{at}}</span>\r\n</div>\r\n";

/***/ }),

/***/ "./src/templateCache/announcementNpsTemplatePanel.html":
/*!*************************************************************!*\
  !*** ./src/templateCache/announcementNpsTemplatePanel.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cz-announcement cz-sidebar-note cz-hover-click \" style=\"display: block !important;\" data-message-id=\"{{id}}\" id=\"cz-sidebar-note-{{sequence}}\"\r\n     data-info-message=\"{{showInfoMessageString}}\">\r\n    <p>\r\n        <a class=\"cz-nps-click\" data-nps-url=\"{{npsUrl}}\" >{{npsQuestion}}</a>\r\n    </p>\r\n    <span class=\"cz-announcement-timestamp\">{{at}}</span>\r\n</div>\r\n";

/***/ }),

/***/ "./src/templateCache/announcementSliderTemplate.html":
/*!***********************************************************!*\
  !*** ./src/templateCache/announcementSliderTemplate.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cz-slide-announcement {{announcementPositionClass}}\">\r\n    <span class=\"{{closeClass}}\"><i class=\"czi czi-times\"></i></span>\r\n    {{messageHtml}}\r\n</div>\r\n";

/***/ }),

/***/ "./src/templateCache/announcementTemplate.html":
/*!*****************************************************!*\
  !*** ./src/templateCache/announcementTemplate.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cz-announcement cz-sidebar-note cz-hover-click cz-click-audit\" style=\"display: block !important;\" data-message-id=\"{{id}}\" id=\"cz-sidebar-note-{{sequence}}\"  data-info-message=\"{{showInfoMessageString}}\">\r\n    {{messageContent}}\r\n<span class=\"cz-announcement-timestamp\">{{at}}</span>\r\n</div>\r\n";

/***/ }),

/***/ "./src/templateCache/avatarImageTemplate.html":
/*!****************************************************!*\
  !*** ./src/templateCache/avatarImageTemplate.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"cz-avatar\">\r\n    <img !inline class=\"cz-avatar-img\" src=\"{{avatarSrc}}\" alt=\"...\">\r\n</span>\r\n";

/***/ }),

/***/ "./src/templateCache/avatarInitialsTemplate.html":
/*!*******************************************************!*\
  !*** ./src/templateCache/avatarInitialsTemplate.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"cz-avatar\">\r\n    <span class=\"cz-avatar-name\">{{avatarSrc}}</span>\r\n</span>\r\n";

/***/ }),

/***/ "./src/templateCache/messageBubbleTemplate.html":
/*!******************************************************!*\
  !*** ./src/templateCache/messageBubbleTemplate.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cz-alert-message-text\">\r\n{{message}}\r\n</div>\r\n";

/***/ }),

/***/ "./src/templateCache/popoverContainerTemplate.html":
/*!*********************************************************!*\
  !*** ./src/templateCache/popoverContainerTemplate.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cz_transBG\" class=\"cz-transBG hidden\">\r\n    <div id=\"cz_popover\" class=\"cz-popover hidden\" align=\"center\">\r\n        <span class=\"cz-popover-close cz-close-popover-trigger\">\r\n                <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAH60AAB+tAEJr8JXAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAotJREFUeNrsmz9LHUEUxY8bwUoweYhFitf6CSSFiI2V1toF0sWvkcpv8DoRVDApUuZVRwTBzj9p1SpuYxMQ7HywNnfg8XDd2fXOuH9ucao3Ozvnt29n5965AwKIoD6BFQLfCAwI7OZoIG1W5JrgYwvZ+TSBNQI/CBwTuCUwIpAVaCRtj+XaL9JXYwAsE9gjcO9h1lf30udynQFsEjhXNJ2nc7lXbQBsRTL+Eoit9wSwSGD4DsYnNZSxRAXw3XNCi6URga8xACQEftbI+KQOZIxBAHwgcFVj805XMlZVAElDzI9DSLQAJAQuG2Te6dIHgg+AJpofhzD1FgC/G2ze6VdVANstMO+0WRZAv0XmnfplAJy1EMCZL4CNFpp32vABcN1iANdFANaVb/hUkz7Gtf4agBvFG10Q+Ezg6A19HEkfF4rjuskDsBRwFTasGOaGWo0uvQRgP/A6PC3RRxo4HtmfBJAQeFT61ORFYj1PCKm0zYtINT7Rj+4haf79HzziiiIIr5kf14PWa+A63FHKyhx6DP5TDoRUfiu6/lApG7XjACwQoOIEc+rxFCf/CT5P/iOBP4rjJIEFEFglcKf8rU09IfwT+bTVHuMdgdWQUZ8PhKmieL3E5FlF25D9uCwgBJ/3uux8oaUBJJOaBYbQq2C+F9h8RuAAsiubRYAwX8L8fATzGYHdWAAyAv8JzHqYn5W2mQFoEYBavwKdnwQ7/xns/EKoKUvhNNRSWDsY+hsoGOpJoKUeDHU+HLaEiKXEwidF5yokRWdiJkVDp8WrlNGdxE6Ld35jxLbGbHPUtsetQMJKZKxIysrkrFDSSmWtWNrK5e3AhB2ZsUNTdmzODk7a0Vk7PN2B4/PPAwCf6Ytzs73kxgAAAABJRU5ErkJggg==\" style=\"display:none !important;\" inline/>\r\n                </span>\r\n        <div id=\"cz_popover_content\"></div>\r\n    </div>\r\n</div>\r\n";

/***/ })

/******/ });
//# sourceMappingURL=churnzero.js.map