(this["webpackJsonpreact-theme"] = this["webpackJsonpreact-theme"] || []).push([["main"],{

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PublicLibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PublicLibrary */ "./src/components/PublicLibrary.js");
/* harmony import */ var _components_EntryPage_EntryPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EntryPage/EntryPage */ "./src/components/EntryPage/EntryPage.js");
/* harmony import */ var _components_TourPage_TourPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TourPage/TourPage */ "./src/components/TourPage/TourPage.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/App.js";








function App(props) {
  const [editMode, setEditMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const setMode = mode => setEditMode(mode);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PublicLibrary__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, {
      editMode: editMode,
      setEditMode: setMode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/stop/:entryId",
    component: _components_EntryPage_EntryPage__WEBPACK_IMPORTED_MODULE_4__["default"],
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EntryPage_EntryPage__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, {
      editMode: editMode,
      setEditMode: setMode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/tour/:tourId",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TourPage_TourPage__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
      editMode: editMode,
      setEditMode: setMode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 8
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Button/CopyTour.js":
/*!*******************************************!*\
  !*** ./src/components/Button/CopyTour.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateTour.styles.css */ "./src/components/Button/CreateTour.styles.css");
/* harmony import */ var _CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/RestAPIHelper.js */ "./src/helpers/RestAPIHelper.js");
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Button/CopyTour.js";








function CopyTour(props) {
  const {
    id,
    name,
    date,
    visibility,
    entries
  } = props;
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [tourTitle, setTourTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(name + " Copy");
  const [tourVilisibity, setTourVilisibity] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(visibility);
  const [tourDate, setTourDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(date); // TODO: save the new id somewhere else in library/my tour component

  const [newTourId, setNewTourId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleCopy = (title, date, visibility, stops, event) => {
    // console.log(stops);
    if (!title || title.length === 0) {
      console.log("Empty tour name is not allowed");
      return;
    } // create new 


    Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_6__["RestAPICreateTour"])(title, date, visibility, stops).then(id => {
      setShow(false); // TODO: check created id 

      if (id == -1) {
        return;
      } // redirect


      window.location.reload();
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleShow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "COPY THIS TOUR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: handleClose,
    size: "md",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Copy This Tour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleClose,
    className: "overlay-close-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Tour Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: "create-tour-input",
    type: "text",
    value: tourTitle,
    onChange: event => setTourTitle(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Tour Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: "create-tour-input",
    type: "date",
    value: tourDate,
    onChange: event => setTourDate(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "Tour Visibility"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 58
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    id: "default-radio",
    value: "private",
    label: "COMPLETE",
    name: "tourTypeRadio",
    checked: tourVilisibity === 'private',
    onChange: event => setTourVilisibity(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "INCOMPLETE",
    value: "public",
    id: "disabled-default-radio",
    name: "tourTypeRadio",
    checked: tourVilisibity === 'public',
    onChange: event => setTourVilisibity(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: handleCopy.bind(this, tourTitle, tourDate, tourVilisibity, entries),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Save Changes"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(CopyTour));

/***/ }),

/***/ "./src/components/Button/CreateTour.js":
/*!*********************************************!*\
  !*** ./src/components/Button/CreateTour.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateTour.styles.css */ "./src/components/Button/CreateTour.styles.css");
/* harmony import */ var _CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Button/CreateTour.js";







async function createTour(title, date) {
  const data = {
    "title": title,
    "status": "publish",
    "content": "<h2>TourDate:" + date + "</h2>"
  };
  const response = await fetch('/wp-json/wp/v2/tour/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': reactInit.nonce
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    console.log(response);
    return -1;
  }

  const tour = await response.json();
  return tour.id;
}

function CreateTour(props) {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [tourTitle, setTourTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isPrivate, setPrivate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [tourDate, setTourDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // TODO: save the new id somewhere else in library/my tour component

  const [newTourId, setNewTourId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleCreate = (title, date, event) => {
    // TODO: validate
    if (!title || title.length === 0) {
      console.log("Empty tour name is not allowed");
      return;
    } // create new 


    createTour(title, date).then(id => {
      setShow(false); // TODO: check created id 

      if (id == -1) {
        return;
      } // redirect


      props.props.setEditMode(true);
      props.history.push(`/tour/${id}`);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "create-button-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: handleShow,
    id: "create-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "add-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), " CREATE A NEW TOUR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: handleClose,
    size: "md",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Create a New Tour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleClose,
    className: "overlay-close-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Tour Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: "create-tour-input",
    type: "text",
    onChange: event => setTourTitle(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "Tour Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    className: "create-tour-input",
    type: "date",
    onChange: event => setTourDate(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: handleCreate.bind(this, tourTitle, tourDate),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Create"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(CreateTour));

/***/ }),

/***/ "./src/components/Button/CreateTour.styles.css":
/*!*****************************************************!*\
  !*** ./src/components/Button/CreateTour.styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/EntryPage/EntryPage.js":
/*!***********************************************!*\
  !*** ./src/components/EntryPage/EntryPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EntryPage_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntryPage.styles.css */ "./src/components/EntryPage/EntryPage.styles.css");
/* harmony import */ var _EntryPage_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EntryPage_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-gallery */ "./node_modules/react-image-gallery/build/image-gallery.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bnb_gallery_dist_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bnb-gallery/dist/style.css */ "./node_modules/react-bnb-gallery/dist/style.css");
/* harmony import */ var react_bnb_gallery_dist_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bnb_gallery_dist_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/RestAPIHelper.js */ "./src/helpers/RestAPIHelper.js");
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/EntryPage/EntryPage.js";









const getContent = entry => {
  if (entry.content) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: entry.content.rendered
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  });
};

const _renderVideo = item => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: item.embedUrl,
    frameBorder: "0",
    allowFullScreen: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }));
};

const EntryPage = props => {
  let id = props.match.params.entryId;
  let time = new Date().getTime();
  const [searchStr, setSearchStr] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [entry, setEntry] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetStopById"])(id, time, setEntry);
  });

  const getMediaSearchLink = () => {
    if (searchStr === '') return "";
    return reactInit.searchMediaUrl + encodeURI(searchStr);
  }; // load media


  let Photos = [];

  if (entry.acf_media) {
    Photos = entry.acf_media.map(media => {
      const {
        type,
        thumbnail_url,
        full_url
      } = media;

      if (type === "video") {
        let video = {
          embedUrl: full_url,
          description: '',
          renderItem: _renderVideo,
          thumbnail: 'https://picsum.photos/150/150',
          original: ''
        };
        return video;
      }

      if (type === "audio") {
        let audio = {
          embedUrl: full_url,
          description: '',
          renderItem: _renderVideo,
          thumbnail: 'https://picsum.photos/150/150',
          original: ''
        };
        return audio;
      }

      let photo = {};
      photo['original'] = media.full_url;
      photo['thumbnail'] = media.thumbnail_url;
      photo['description'] = media.title;
      return photo;
    });
  } // console.log(Photos);
  // load tags


  let tag_lists = "None";

  if (entry.tag_names) {
    tag_lists = entry.tag_names.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: reactInit.searchStopTagUrl + tag[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, "#", tag[0])));
  } // const [isOpen, setIsOpen] = useState(false);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "close-icon",
    onClick: props.history.goBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, entry.title ? entry.title.rendered : "loading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "image-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default.a, {
    items: Photos,
    showPlayButton: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_collapsible__WEBPACK_IMPORTED_MODULE_4___default.a, {
    trigger: "Media Caption",
    open: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_collapsible__WEBPACK_IMPORTED_MODULE_4___default.a, {
    trigger: "Description",
    open: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, getContent(entry)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_collapsible__WEBPACK_IMPORTED_MODULE_4___default.a, {
    trigger: "Related Topics",
    open: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, tag_lists), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "media-search-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    placeholder: "Search Media",
    onChange: event => setSearchStr(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "primary",
    href: getMediaSearchLink(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 27
    }
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "primary",
    href: reactInit.adminUrl + 'post.php?post=' + id + '&action=edit',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 27
    }
  }, "Edit this Stop")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (EntryPage);

/***/ }),

/***/ "./src/components/EntryPage/EntryPage.styles.css":
/*!*******************************************************!*\
  !*** ./src/components/EntryPage/EntryPage.styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Jumbotron/Jumbotron.js":
/*!***********************************************!*\
  !*** ./src/components/Jumbotron/Jumbotron.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Jumbotron_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jumbotron.styles.css */ "./src/components/Jumbotron/Jumbotron.styles.css");
/* harmony import */ var _Jumbotron_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Jumbotron_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Jumbotron/Jumbotron.js";



const Jumbotron = () => {
  const bannerUrl = "https://mediad.publicbroadcasting.net/p/wesa/files/styles/x_large/public/201804/clayton_1-300_cmyk.jpg";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron jzumbotron-fluid",
    style: {
      'backgroundImage': `url(${bannerUrl})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Jumbotron);

/***/ }),

/***/ "./src/components/Jumbotron/Jumbotron.styles.css":
/*!*******************************************************!*\
  !*** ./src/components/Jumbotron/Jumbotron.styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Navbar/BrandingLogo.js":
/*!***********************************************!*\
  !*** ./src/components/Navbar/BrandingLogo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Navbar/BrandingLogo.js";



const getLogo = () => reactInit.logoUrl ? reactInit.logoUrl : "https://www.thefrickpittsburgh.org/Files/User/logo.png";

const BrandingLogo = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  id: "brading-logo-img",
  src: getLogo(),
  width: "130",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 18
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (BrandingLogo);

/***/ }),

/***/ "./src/components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.styles.css */ "./src/components/Navbar/Navbar.styles.css");
/* harmony import */ var _Navbar_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BrandingLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandingLogo */ "./src/components/Navbar/BrandingLogo.js");
/* harmony import */ var _StressTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StressTest */ "./src/components/Navbar/StressTest.js");
/* harmony import */ var _images_hamburger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/hamburger.png */ "./src/images/hamburger.png");
/* harmony import */ var _images_hamburger_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_hamburger_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_hamburger_close_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/hamburger-close.png */ "./src/images/hamburger-close.png");
/* harmony import */ var _images_hamburger_close_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_hamburger_close_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Navbar/Navbar.js";







class Navbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.toggleHamburger = () => {
      this.setState({
        showNavlink: !this.state.showNavlink
      });
    };

    this.state = {
      showNavlink: this.props.isTourPage == true ? false : true
    };
  }

  renderHamburger() {
    if (this.props.isTourPage == true) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-hamburger",
        onClick: this.toggleHamburger,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.showNavlink == true ? _images_hamburger_close_png__WEBPACK_IMPORTED_MODULE_5___default.a : _images_hamburger_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 78
        }
      }));
    }
  }

  renderNavlinks() {
    const navlinks = document.getElementsByClassName('nav-item');

    for (var i = 0; i < navlinks.length; i++) {
      if (!this.state.showNavlink) {
        navlinks[i].style['display'] = 'none';
      } else {
        navlinks[i].style['display'] = 'block';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "ml-auto navbar-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, console.log('this.state.showNavlink=', this.state.showNavlink), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, "LIBRARY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/wp-admin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, "DASHBOARD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: reactInit.logoutUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, "LOGOUT")), this.renderHamburger());
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "navbar navbar-light navbar-expand-md",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BrandingLogo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "nav-brand",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "navbar-toggler-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar-light collapse navbar-collapse",
      id: "navbarNav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, this.renderNavlinks()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Navbar/Navbar.styles.css":
/*!*************************************************!*\
  !*** ./src/components/Navbar/Navbar.styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Navbar/StressTest.js":
/*!*********************************************!*\
  !*** ./src/components/Navbar/StressTest.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/RestAPIHelper.js */ "./src/helpers/RestAPIHelper.js");
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Navbar/StressTest.js";




const generateTour = (num, stopStr, setText) => {
  const enteredStops = [];
  stopStr.split(',').map(block => {
    const id = parseInt(block);
    if (isNaN(id)) return;
    enteredStops.push(id);
  });
  const stops = [];

  for (let i = 0; i < enteredStops.length; i++) {
    stops.push({
      id: enteredStops[i]
    });
  }

  const title = "Stress Test - "; // RestAPICreateTour(title, "", "public", stops)

  const allRequests = [];

  for (let i = 1; i <= num; i++) {
    allRequests.push(Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_2__["RestAPICreateTour"])(title + i, "", "public", stops));
  }

  setText("Wait");
  Promise.all(allRequests).then(newTourIds => {
    console.log(newTourIds);
    setText("Done, refresh page");
  });
};

const StressTest = () => {
  const [num, setNum] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100);
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Generate");
  const [stopText, setStopText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("0,0,0,0,0");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Tour # ", num), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "range",
    value: num,
    onChange: e => setNum(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Stop ids (seperate by ,)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    value: stopText,
    onChange: e => setStopText(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn-primary",
    id: "button",
    disabled: text !== "Generate",
    onClick: generateTour.bind(undefined, num, stopText, setText),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (StressTest);

/***/ }),

/***/ "./src/components/Playlist/Entries/Entries.js":
/*!****************************************************!*\
  !*** ./src/components/Playlist/Entries/Entries.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Entries_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entries.styles.css */ "./src/components/Playlist/Entries/Entries.styles.css");
/* harmony import */ var _Entries_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Entries_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "./node_modules/@brainhubeu/react-carousel/lib/react-carousel.js");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brainhubeu/react-carousel/lib/style.css */ "./node_modules/@brainhubeu/react-carousel/lib/style.css");
/* harmony import */ var _brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_left_arrow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/left-arrow.png */ "./src/images/left-arrow.png");
/* harmony import */ var _images_left_arrow_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_left_arrow_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_right_arrow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/right-arrow.png */ "./src/images/right-arrow.png");
/* harmony import */ var _images_right_arrow_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_right_arrow_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/placeholder-thumbnail.png */ "./src/images/placeholder-thumbnail.png");
/* harmony import */ var _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Playlist/Entries/Entries.js";









const Entries = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  key: props.listId,
  className: "row stop-carousel",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
  arrows: true,
  slidesPerPage: 5,
  slidesPerScroll: 5,
  arrowLeft: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "carousel-arrow",
    src: _images_left_arrow_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 24
    }
  }),
  arrowRight: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "carousel-arrow",
    src: _images_right_arrow_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }),
  addArrowClickHandler: true,
  offset: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, props.entries.map(entry => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  key: entry.id,
  className: "entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  style: {
    width: "19rem"
  },
  alt: "entry",
  src: entry.medium_url == false ? _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_7___default.a : entry.medium_url,
  onClick: () => props.history.push(`/stop/${entry.id}`),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 17
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "entry-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 17
  }
}, " ", entry.name, " ")))));

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Entries));

/***/ }),

/***/ "./src/components/Playlist/Entries/Entries.styles.css":
/*!************************************************************!*\
  !*** ./src/components/Playlist/Entries/Entries.styles.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Playlist/Playlist.js":
/*!*********************************************!*\
  !*** ./src/components/Playlist/Playlist.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Entries_Entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entries/Entries */ "./src/components/Playlist/Entries/Entries.js");
/* harmony import */ var _Playlist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Playlist.styles.css */ "./src/components/Playlist/Playlist.styles.css");
/* harmony import */ var _Playlist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Playlist_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/esm/DropdownButton.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var _TourStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TourStatus */ "./src/components/Playlist/TourStatus.js");
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Playlist/Playlist.js";








 // copy tour function for the "copy tour" inside dropdown

async function copyTour(title, date, visibility, stops) {
  let str = "<ol>";
  stops.map(stop => {
    const {
      id
    } = stop;
    str += "<li>";
    str += id.toString();
    str += "</li>";
  });
  str += "</ol>";
  str += "<h2>TourDate:";
  str += date;
  str += "</h2>";
  str += "<h2>Visibility:";
  str += visibility;
  str += "</h2>";
  const data = {
    "title": title,
    "status": "publish",
    "content": str
  };
  const response = await fetch('/wp-json/wp/v2/tour/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': reactInit.nonce
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    console.log(response);
    return -1;
  }

  const tour = await response.json();
  return tour.id;
}

const Playlist = props => {
  const changeToEditMode = () => {
    props.props.setEditMode(true);
  };

  const changeToViewMode = () => {
    props.props.setEditMode(false);
  }; // <Entries entries={playlist.entries}


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "public-playlists",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 3
    }
  }, props.playlists.map(playlist => {
    // for copy tour
    const {
      id,
      name,
      date,
      author,
      visibility,
      entries
    } = playlist;
    const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const [showDelete, setShowDelete] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const [tourTitle, setTourTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(name + " Copy");
    const [tourVilisibity, setTourVilisibity] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(visibility);
    const [tourDate, setTourDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(date); // TODO: save the new id somewhere else in library/my tour component

    const [newTourId, setNewTourId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleShowDelete = () => setShowDelete(true);

    const handleCloseDelete = () => setShowDelete(false);

    const handleCopy = (title, date, visibility, stops, event) => {
      console.log(stops);

      if (!title || title.length === 0) {
        console.log("Empty tour name is not allowed");
        return;
      } // create new 


      copyTour(title, date, visibility, stops).then(id => {
        setShow(false); // TODO: check created id 

        if (id == -1) {
          return;
        } // redirect


        window.location.reload();
      });
    };

    const gotoEdit = () => {
      changeToEditMode();
      props.history.push(`/tour/${id}`);
    };

    const gotoView = () => {
      changeToViewMode();
      props.history.push(`/tour/${id}`);
    }; //for delete tour


    async function deleteTour() {
      const response = await fetch('/wp-json/wp/v2/tour/' + playlist.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-WP-Nonce': reactInit.nonce
        }
      });

      if (!response.ok) {
        console.log(response);
      }

      const tour = await response.json();
      window.location.reload();
    }

    const handleDelete = () => {
      deleteTour();
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: playlist.id,
      className: "public-playlist",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tour-title",
      onClick: gotoView,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }
    }, playlist.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "",
      id: "dropdown-menu-align-right",
      menuAlign: "right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
      onClick: gotoView,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, "VIEW ALL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
      onClick: handleShow,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "copy-tour-icon-img",
      style: {
        'width': '18px',
        'height': '20px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 61
      }
    }), " COPY THIS TOUR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
      show: show,
      onHide: handleClose,
      size: "md",
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
      closeButton: false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 33
      }
    }, "Copy This Tour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
      onClick: handleClose,
      className: "overlay-close-icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 37
      }
    }, "Tour Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
      className: "create-tour-input",
      type: "text",
      value: tourTitle,
      onChange: event => setTourTitle(event.target.value),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 37
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 37
      }
    }, "Tour Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
      className: "create-tour-input",
      type: "date",
      value: tourDate,
      onChange: event => setTourDate(event.target.value),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 37
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 37
      }
    }, "Tour Visibility"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 78
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Check, {
      type: "radio",
      id: "default-radio",
      value: "private",
      label: "COMPLETE",
      name: "tourTypeRadio",
      checked: tourVilisibity === 'private',
      onChange: event => setTourVilisibity(event.target.value),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 37
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Check, {
      type: "radio",
      label: "INCOMPLETE",
      value: "public",
      id: "disabled-default-radio",
      name: "tourTypeRadio",
      checked: tourVilisibity === 'public',
      onChange: event => setTourVilisibity(event.target.value),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 37
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "primary",
      onClick: handleCopy.bind(undefined, tourTitle, tourDate, tourVilisibity, entries),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 33
      }
    }, "Save Changes"))), visibility === 'public' || author[0] === reactInit.userId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
      onClick: gotoEdit,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "edit-tour-icon-img",
      style: {
        'width': '18px',
        'height': '20px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 67
      }
    }), " EDIT THIS TOUR") : "", author[0] === reactInit.userId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
      className: "delete-tour",
      onClick: handleShowDelete,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 33
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "delete-tour-icon-img",
      style: {
        'width': '18px',
        'height': '20px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 100
      }
    }), " DELETE THIS TOUR") : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
      show: showDelete,
      onHide: handleCloseDelete,
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
      closeButton: false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 33
      }
    }, "ARE YOU SURE?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
      onClick: handleCloseDelete,
      className: "overlay-close-icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
      className: "show-grid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 34
      }
    }, "Your're about to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 61
      }
    }, playlist.name.toUpperCase()), " and you won't be able to revert this. Are you sure?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      className: "delete-tour",
      onClick: handleDelete,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "delete-tour-icon-img",
      style: {
        'width': '18px',
        'height': '20px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 37
      }
    }), " YES, DELETE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "primary",
      onClick: handleCloseDelete,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 33
      }
    }, "NO, GO BACK"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TourStatus__WEBPACK_IMPORTED_MODULE_8__["default"], {
      visibility: visibility,
      date: date,
      username: author[1],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Entries_Entries__WEBPACK_IMPORTED_MODULE_2__["default"], {
      listId: playlist.id,
      entries: playlist.entries,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Playlist));

/***/ }),

/***/ "./src/components/Playlist/Playlist.styles.css":
/*!*****************************************************!*\
  !*** ./src/components/Playlist/Playlist.styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Playlist/TourStatus.js":
/*!***********************************************!*\
  !*** ./src/components/Playlist/TourStatus.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Playlist_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Playlist.styles.css */ "./src/components/Playlist/Playlist.styles.css");
/* harmony import */ var _Playlist_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Playlist_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/Playlist/TourStatus.js";



const renderStatus = status => status === 'private' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "complete-status",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 2
  }
}, "COMPLETE") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "incomplete-status",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 2
  }
}, "INCOMPLETE");

const creationDetails = status => status === 'private' ? "complete-details" : "incomplete-details";

const parseDate = date => {
  if (date) {
    const parts = date.split('-');
    if (parts.length != 3) return "";
    return parts[1] + '/' + parts[2] + '/' + parts[0];
  } // TODO: deal with empty date


  return "";
};

const TourStatus = props => {
  const {
    visibility,
    date,
    username
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tour-status",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, renderStatus(visibility), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: creationDetails(visibility),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, " Tour Date: ", parseDate(date), " | Tour Editor: ", username, " "));
};

/* harmony default export */ __webpack_exports__["default"] = (TourStatus);

/***/ }),

/***/ "./src/components/PublicLibrary.js":
/*!*****************************************!*\
  !*** ./src/components/PublicLibrary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar/Navbar */ "./src/components/Navbar/Navbar.js");
/* harmony import */ var _Jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Jumbotron/Jumbotron */ "./src/components/Jumbotron/Jumbotron.js");
/* harmony import */ var _Playlist_Playlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Playlist/Playlist */ "./src/components/Playlist/Playlist.js");
/* harmony import */ var _Button_CreateTour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button/CreateTour */ "./src/components/Button/CreateTour.js");
/* harmony import */ var _TourPage_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TourPage/Pagination */ "./src/components/TourPage/Pagination.js");
/* harmony import */ var _helpers_unescape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/unescape */ "./src/helpers/unescape.js");
/* harmony import */ var _helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/RestAPIHelper.js */ "./src/helpers/RestAPIHelper.js");
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/PublicLibrary.js";









class PublicLibrary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.getStopInfo = id => {
      let time = new Date().getTime();
      return fetch('/wp-json/wp/v2/stop/' + id + '?timestamp=' + time).then(res => {
        return res.ok && res.json ? res.json() : {
          id: -1
        };
      }).then(data => {
        const {
          id,
          thumbnail_url,
          title,
          medium_url
        } = data; // invalid stop

        if (id === -1) {
          return {
            id
          };
        }

        const e = {
          id,
          thumbnail_url,
          medium_url,
          name: Object(_helpers_unescape__WEBPACK_IMPORTED_MODULE_6__["default"])(title.rendered)
        };
        return e;
      });
    };

    this.state = {
      playlists: [],
      totalPageNum: 1,
      currentPage: 1,
      maxPerPage: 100
    };
  }

  parseContentStopId(content) {
    let res = content.match(/<li>\d+<\/li>/gm);
    let stops = res ? res.map(item => {
      let idStr = item.slice(4, -5);
      return parseInt(idStr);
    }) : [];
    return stops;
  }

  parseContentStopDate(content) {
    let res = content.match(/<h2>TourDate:.+<\/h2>/gm);
    let date = res ? res[0].slice(4, -5).split(":")[1] : "";
    return date;
  }

  parseContentStopVisibility(content) {
    let res = content.match(/<h2>Visibility:.+<\/h2>/gm);
    let status = res ? res[0].slice(4, -5).split(":")[1] : "public";
    return status;
  }

  getAllStopsInTours(data, totalPageNum) {
    let tourInfo = data.map(tour => {
      const {
        id,
        title,
        content,
        author
      } = tour;
      return {
        id,
        name: Object(_helpers_unescape__WEBPACK_IMPORTED_MODULE_6__["default"])(title.rendered),
        author,
        date: this.parseContentStopDate(content.rendered),
        visibility: this.parseContentStopVisibility(content.rendered),
        entries: this.parseContentStopId(content.rendered)
      };
    });
    let stopDic = {};
    tourInfo.map(tour => {
      const {
        entries
      } = tour;
      entries.map(stop => {
        if (!stopDic[stop]) {
          stopDic[stop] = {};
        }
      });
    });
    const allRequests = [];

    for (var stopId in stopDic) {
      allRequests.push(this.getStopInfo(stopId));
    }

    Promise.all(allRequests).then(stopData => {
      stopData.map(stop => {
        const {
          id
        } = stop;
        if (id !== -1) stopDic[id] = stop;
      });
      const finalInfo = tourInfo.map(tour => {
        const {
          id,
          name,
          author,
          date,
          visibility,
          entries
        } = tour;
        let newStopInfo = entries.filter(stopId => {
          return stopDic[stopId].hasOwnProperty('id');
        }).map(stopId => {
          return stopDic[stopId];
        });
        return {
          id,
          name,
          date,
          author,
          visibility,
          entries: newStopInfo
        };
      });
      this.setState({
        playlists: finalInfo,
        totalPageNum: totalPageNum
      });
    }).catch(console.log("Get stops in tour failed"));
  }

  componentDidMount() {
    const {
      totalPageNum,
      currentPage,
      maxPerPage
    } = this.state;
    let time = new Date().getTime();
    Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetTourByPage"])(maxPerPage, currentPage, time, this.getAllStopsInTours.bind(this));
  }

  handlePrevPage() {
    const {
      maxPerPage,
      currentPage
    } = this.state;
    let time = new Date().getTime();

    if (currentPage > 1) {
      const nextPageIdx = parseInt(currentPage) - 1;
      Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetTourByPage"])(maxPerPage, nextPageIdx, time, this.getAllStopsInTours.bind(this));
      this.setState({
        currentPage: nextPageIdx
      });
    }
  }

  handleNextPage() {
    const {
      maxPerPage,
      totalPageNum,
      currentPage
    } = this.state;
    let time = new Date().getTime(); // TO FIX: last page break the page (early return?)

    if (currentPage < totalPageNum) {
      const nextPageIdx = parseInt(currentPage) + 1;
      console.log("next page:", nextPageIdx);
      Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetTourByPage"])(maxPerPage, nextPageIdx, time, this.getAllStopsInTours.bind(this));
      this.setState({
        currentPage: nextPageIdx
      });
    }
  }

  renderPagination() {
    const {
      totalPageNum,
      currentPage
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TourPage_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
      pageNum: totalPageNum,
      currentPage: currentPage,
      handlePrevPage: this.handlePrevPage.bind(this),
      handleNextPage: this.handleNextPage.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    }));
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "public-library",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_CreateTour__WEBPACK_IMPORTED_MODULE_4__["default"], {
      props: this.props,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 22
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Playlist_Playlist__WEBPACK_IMPORTED_MODULE_3__["default"], {
      props: this.props,
      playlists: this.state.playlists,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }), this.renderPagination());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PublicLibrary);

/***/ }),

/***/ "./src/components/TourPage/AddStop.js":
/*!********************************************!*\
  !*** ./src/components/TourPage/AddStop.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StopCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StopCard */ "./src/components/TourPage/StopCard.js");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TourPage.styles.css */ "./src/components/TourPage/TourPage.styles.css");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TourPage_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AddStop_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddStop.styles.css */ "./src/components/TourPage/AddStop.styles.css");
/* harmony import */ var _AddStop_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AddStop_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SelectableCard_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableCard.scss */ "./src/components/TourPage/SelectableCard.scss");
/* harmony import */ var _SelectableCard_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SelectableCard_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/RestAPIHelper.js */ "./src/helpers/RestAPIHelper.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pagination */ "./src/components/TourPage/Pagination.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _images_no_result_sad_face_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/no-result-sad-face.png */ "./src/images/no-result-sad-face.png");
/* harmony import */ var _images_no_result_sad_face_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_no_result_sad_face_png__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/AddStop.js";













class StopCardList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const {
      selected
    } = props;
    this.state = {
      selected: selected
    };
  }

  componentDidUpdate(prevProps) {
    const {
      selected
    } = this.props;
    if (prevProps.selected !== selected) this.setState({
      selected: selected
    });
  }

  onItemSelected(index) {
    this.setState((prevState, props) => {
      // pass changing index
      props.onChange(index);
      const {
        selected
      } = props;
      selected[index] = !prevState.selected[index];
      return {
        selected: selected
      };
    });
  }

  render() {
    var {
      stops
    } = this.props;
    var stop = stops.map((cardContent, i) => {
      var {
        medium_url,
        name // selected

      } = cardContent;
      var selected = this.state.selected[i];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StopCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: i,
        stop: stop,
        medium_url: medium_url,
        name: name,
        selected: selected,
        onClick: e => this.onItemSelected(i),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      });
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stop-card-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, stop);
  }

}

class StopCardListSelection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const {
      preSelectedStops
    } = props;
    this.state = {};
  }

  onListChanged(selectedStopIdx) {
    const {
      stops,
      onSelectStop
    } = this.props;
    onSelectStop(stops[selectedStopIdx]);
  }

  render() {
    const {
      preSelectedStops
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StopCardList, {
      selected: preSelectedStops,
      stops: this.props.stops,
      onChange: this.onListChanged.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }));
  }

}

class AddStop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super();

    this.getPreSelectedStopStatus = () => {
      const {
        backendStops,
        selectedStops
      } = this.state;
      const status = backendStops.map(stop => {
        const {
          id
        } = stop;
        return selectedStops.has(id);
      });
      return status;
    };

    this.handleRestAPIResult = (data, pageNum) => {
      let allStopsInfo = data.map(stop => {
        const {
          id,
          thumbnail_url,
          medium_url,
          title
        } = stop;
        let stopInfo = {
          'id': id,
          'thumbnailUrl': thumbnail_url,
          'medium_url': medium_url,
          'name': title.rendered
        };
        return stopInfo;
      });
      this.setState({
        backendStops: allStopsInfo,
        pageNum: pageNum
      });
    };

    this.handleShow = () => {
      this.handleChangePage(1);
      this.setState({
        show: true
      });
    };

    this.handleStopToggle = stop => {
      // called everytime select/unselect a stop card
      const {
        id
      } = stop;
      const {
        selectedStops
      } = this.state;

      if (selectedStops.has(id)) {
        // unselect stop id
        selectedStops.delete(id);
      } else {
        // select stop id
        selectedStops.set(id, stop);
      }

      this.setState({
        selectedStops: selectedStops
      });
      console.log(stop);
    };

    this.handleDoneAddingStops = () => {
      const {
        selectedStops
      } = this.state;
      let stops = [];

      for (const stop of selectedStops.values()) {
        stops.push(stop);
      }

      this.props.onSelectStops(stops);
      selectedStops.clear(); // close overlay

      this.setState({
        show: false,
        searchKeyword: ""
      });
    };

    this.handleSearchByKeyword = e => {
      const keyword = e.target.value;
      const {
        stopPerPage
      } = this.state;
      let time = new Date().getTime();

      if (keyword === "" || keyword.trim() === "") {
        Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetStopsByPage"])(stopPerPage, 1, time, this.handleRestAPIResult);
      } else {
        Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetStopsBySearch"])(keyword.trim(), stopPerPage, 1, time, this.handleRestAPIResult);
      }

      this.setState({
        currentPage: 1,
        searchKeyword: keyword.trim()
      });
    };

    this.handleChangePage = nextPageIdx => {
      const {
        stopPerPage,
        searchKeyword
      } = this.state;
      let time = new Date().getTime();

      if (searchKeyword === "") {
        Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetStopsByPage"])(stopPerPage, nextPageIdx, time, this.handleRestAPIResult);
      } else {
        Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetStopsBySearch"])(searchKeyword, stopPerPage, nextPageIdx, time, this.handleRestAPIResult);
      }

      this.setState({
        currentPage: nextPageIdx
      });
    };

    this.state = {
      show: false,
      backendStops: [],
      pageNum: 1,
      currentPage: 1,
      stopPerPage: 8,
      selectedStops: new Map(),
      searchKeyword: ""
    };
  } // const [show, setShow] = useState(false);


  componentDidMount() {
    let time = new Date().getTime();
    const {
      stopPerPage
    } = this.state;
    Object(_helpers_RestAPIHelper_js__WEBPACK_IMPORTED_MODULE_7__["RestAPIGetStopsByPage"])(stopPerPage, 1, time, this.handleRestAPIResult);
  }

  handlePrevPage() {
    const {
      currentPage
    } = this.state;

    if (currentPage > 1) {
      const nextPageIdx = parseInt(currentPage) - 1;
      this.handleChangePage(nextPageIdx);
    }
  }

  handleNextPage() {
    const {
      pageNum,
      currentPage
    } = this.state;

    if (currentPage < pageNum) {
      const nextPageIdx = parseInt(currentPage) + 1;
      console.log("next page:", nextPageIdx);
      this.handleChangePage(nextPageIdx);
    }
  }

  renderPagination() {
    const {
      pageNum,
      currentPage
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
      pageNum: pageNum,
      currentPage: currentPage,
      handlePrevPage: this.handlePrevPage.bind(this),
      handleNextPage: this.handleNextPage.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 11
      }
    }));
  }

  renderModalBody() {
    const {
      backendStops
    } = this.state;

    if (backendStops.length === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "no-result-notification",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "cute-no-result-face",
        src: _images_no_result_sad_face_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        id: "no-result-first-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }
      }, "Sorry we can't find any stops matching your search!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        id: "no-result-second-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }
      }, "Please try another search."));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
      className: "show-grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StopCardListSelection, {
      preSelectedStops: this.getPreSelectedStopStatus(),
      stops: backendStops,
      onSelectStop: this.handleStopToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 18
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 11
      }
    }, this.renderPagination()));
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "tour-page-button",
      variant: "primary",
      onClick: this.handleShow,
      id: "add-stop-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }
    }), "  Add Stop(s)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      id: "add-stop-modal",
      show: this.state.show,
      onHide: () => this.setState({
        show: false
      }),
      size: "lg",
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
      id: "add-stop-modal-header",
      closeButton: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
      id: "add-stop-modal-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 19
      }
    }, "Add Stop(s) ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "selected-stops-count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 70
      }
    }, "Selected Stops: ", this.state.selectedStops.size)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-stop-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_10__["default"], {
      placeholder: "Search tour topic here...",
      className: "add-stop-search-input",
      inputProps: {
        'aria-label': 'search'
      },
      type: "text",
      onChange: this.handleSearchByKeyword.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 23
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: () => this.setState({
        show: false
      }),
      className: "overlay-close-icon",
      id: "add-stop-close-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn-primary",
      id: "add-stop-done-button",
      onClick: this.handleDoneAddingStops.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 19
      }
    }, "DONE")), this.renderModalBody()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddStop);

/***/ }),

/***/ "./src/components/TourPage/AddStop.styles.css":
/*!****************************************************!*\
  !*** ./src/components/TourPage/AddStop.styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/TourPage/CurrentStops.js":
/*!*************************************************!*\
  !*** ./src/components/TourPage/CurrentStops.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TourPage.styles.css */ "./src/components/TourPage/TourPage.styles.css");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TourPage_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/placeholder-thumbnail.png */ "./src/images/placeholder-thumbnail.png");
/* harmony import */ var _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/CurrentStops.js";






const StopBox = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableElement"])(({
  singleStop,
  index,
  handleRemove,
  handleSwapLeft,
  handleSwapRight
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "sortable-stop-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-stop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "edit-card-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: singleStop.name,
    src: singleStop.medium_url == false ? _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_5___default.a : singleStop.medium_url,
    style: {
      width: "18rem"
    },
    className: "stop-thumbnail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "swap-button",
    id: "swap-left",
    onClick: () => handleSwapLeft(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "swap-button",
    id: "swap-right",
    onClick: () => handleSwapRight(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "remove tour-page-button",
    onClick: () => handleRemove(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      'pointerEvents': 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 101
    }
  }), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "stop-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, singleStop.name)));
});
const StopBoxList = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableContainer"])(({
  stops,
  onRemoveStop,
  onSwapLeft,
  onSwapRight
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sortable-row stops-container-view",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, stops.map((singleStop, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StopBox, {
    index: index,
    singleStop: singleStop,
    key: `item-${index}`,
    handleRemove: () => onRemoveStop(index),
    handleSwapLeft: () => onSwapLeft(index),
    handleSwapRight: () => onSwapRight(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (StopBoxList);

/***/ }),

/***/ "./src/components/TourPage/MediaCard.js":
/*!**********************************************!*\
  !*** ./src/components/TourPage/MediaCard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourPage.styles.css */ "./src/components/TourPage/TourPage.styles.css");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TourPage_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/placeholder-thumbnail.png */ "./src/images/placeholder-thumbnail.png");
/* harmony import */ var _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/MediaCard.js";



function MediaCard({
  stop,
  onClick
}) {
  return (
    /*#__PURE__*/
    // <div className="single-stop" style={{width: "20rem"}} onClick={onClick}>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "single-stop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: stop.name,
      src: stop.medium_url == false ? _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_2___default.a : stop.medium_url,
      style: {
        width: "18rem"
      },
      className: "stop-thumbnail",
      onClick: onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "stop-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, stop.name))
  );
}

/***/ }),

/***/ "./src/components/TourPage/Pagination.js":
/*!***********************************************!*\
  !*** ./src/components/TourPage/Pagination.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_pagination_left_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/pagination-left.png */ "./src/images/pagination-left.png");
/* harmony import */ var _images_pagination_left_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_pagination_left_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_pagination_right_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/pagination-right.png */ "./src/images/pagination-right.png");
/* harmony import */ var _images_pagination_right_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_pagination_right_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_pagination_left_greyout_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/pagination-left-greyout.png */ "./src/images/pagination-left-greyout.png");
/* harmony import */ var _images_pagination_left_greyout_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_pagination_left_greyout_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_pagination_right_greyout_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/pagination-right-greyout.png */ "./src/images/pagination-right-greyout.png");
/* harmony import */ var _images_pagination_right_greyout_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_pagination_right_greyout_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pagination_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination.styles.css */ "./src/components/TourPage/Pagination.styles.css");
/* harmony import */ var _Pagination_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Pagination_styles_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/Pagination.js";







const Pagination = ({
  pageNum,
  currentPage,
  handlePrevPage,
  handleNextPage
}) => {
  var LeftIcon = _images_pagination_left_png__WEBPACK_IMPORTED_MODULE_1___default.a;
  var RightIcon = _images_pagination_right_png__WEBPACK_IMPORTED_MODULE_2___default.a;

  if (currentPage == 1) {
    LeftIcon = _images_pagination_left_greyout_png__WEBPACK_IMPORTED_MODULE_3___default.a;
  }

  if (currentPage == pageNum) {
    RightIcon = _images_pagination_right_greyout_png__WEBPACK_IMPORTED_MODULE_4___default.a;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-stop-pagination pagination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "pagination-arrow",
    src: LeftIcon,
    onClick: handlePrevPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "current-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, currentPage), " /", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "page-number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, pageNum)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "pagination-arrow",
    src: RightIcon,
    onClick: handleNextPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/components/TourPage/Pagination.styles.css":
/*!*******************************************************!*\
  !*** ./src/components/TourPage/Pagination.styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/TourPage/SelectableCard.scss":
/*!*****************************************************!*\
  !*** ./src/components/TourPage/SelectableCard.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/TourPage/StopCard.js":
/*!*********************************************!*\
  !*** ./src/components/TourPage/StopCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectableCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectableCard.scss */ "./src/components/TourPage/SelectableCard.scss");
/* harmony import */ var _SelectableCard_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SelectableCard_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_add_stop_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/add-stop-icon.png */ "./src/images/add-stop-icon.png");
/* harmony import */ var _images_add_stop_icon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_add_stop_icon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/placeholder-thumbnail.png */ "./src/images/placeholder-thumbnail.png");
/* harmony import */ var _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/StopCard.js";
 // import MediaCard from './MediaCard'





class Card extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    var isSelected = this.props.selected ? "selected" : "";
    var className = "card " + isSelected;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "middle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_add_stop_icon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    })));
  }

} //one single selectable stop card


class SelectableCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
      selected: this.props.selected,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "selectable",
      onClick: this.props.onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, this.props.children));
  }

}

class StopCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    var {
      medium_url,
      thumbnailUrl,
      name,
      selected
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectableCard, {
      selected: selected,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stop-card-selectable",
      onClick: this.props.onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "stop-card-thumbnail",
      src: medium_url == false ? _images_placeholder_thumbnail_png__WEBPACK_IMPORTED_MODULE_3___default.a : medium_url,
      style: {
        'width': "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "stop-card-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, name)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StopCard);

/***/ }),

/***/ "./src/components/TourPage/TourPage.js":
/*!*********************************************!*\
  !*** ./src/components/TourPage/TourPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar/Navbar */ "./src/components/Navbar/Navbar.js");
/* harmony import */ var _Jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Jumbotron/Jumbotron */ "./src/components/Jumbotron/Jumbotron.js");
/* harmony import */ var _AddStop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddStop */ "./src/components/TourPage/AddStop.js");
/* harmony import */ var _CurrentStops__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CurrentStops */ "./src/components/TourPage/CurrentStops.js");
/* harmony import */ var _MediaCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MediaCard */ "./src/components/TourPage/MediaCard.js");
/* harmony import */ var _Playlist_TourStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Playlist/TourStatus */ "./src/components/Playlist/TourStatus.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Button_CopyTour__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button/CopyTour */ "./src/components/Button/CopyTour.js");
/* harmony import */ var _Button_CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button/CreateTour.styles.css */ "./src/components/Button/CreateTour.styles.css");
/* harmony import */ var _Button_CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Button_CreateTour_styles_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/esm/Accordion/index.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/esm/AccordionSummary/index.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/esm/AccordionDetails/index.js");
/* harmony import */ var _images_dropdown_icon_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/dropdown-icon.png */ "./src/images/dropdown-icon.png");
/* harmony import */ var _images_dropdown_icon_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_dropdown_icon_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _helpers_unescape__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../helpers/unescape */ "./src/helpers/unescape.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TourPage.styles.css */ "./src/components/TourPage/TourPage.styles.css");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_TourPage_styles_css__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/TourPage.js";




 // import CollapseNavbar from './CollapseNavbar';
// import BrandingLogo from '../Navbar/BrandingLogo';












 // import hamburgerIcon from '../../images/hamburger.png';
// import hamburgerCloseIcon from '../../images/hamburger-close.png';





class TourPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props); //initial state

    this.handleAddedStops = selectedStops => {
      let joined = this.state.stops.concat(selectedStops);
      this.setState({
        'stops': joined
      });
    };

    this.handleRemoveStop = index => {
      let stops = this.state.stops; // splice will operate directly on stops and return removed stops

      stops.splice(index, 1);
      this.setState({
        'stops': stops
      });
    };

    this.onSortEnd = ({
      oldIndex,
      newIndex
    }) => {
      const newArray = array_move__WEBPACK_IMPORTED_MODULE_18___default()(this.state.stops, oldIndex, newIndex);
      this.setState({
        'stops': newArray
      });
    };

    this.onSwapLeft = index => {
      if (index > 0) {
        const newArray = array_move__WEBPACK_IMPORTED_MODULE_18___default()(this.state.stops, index, index - 1);
        this.setState({
          'stops': newArray
        });
      }
    };

    this.onSwapRight = index => {
      if (index < this.state.stops.length) {
        const newArray = array_move__WEBPACK_IMPORTED_MODULE_18___default()(this.state.stops, index, index + 1);
        this.setState({
          'stops': newArray
        });
      }
    };

    const {
      editMode,
      setEditMode
    } = props;
    this.state = {
      'id': props.match.params.tourId,
      'name': '',
      'visibility': 'public',
      'date': '',
      'stops': [],
      'authorId': 0,
      'authorName': "",
      'mode': editMode ? 'edit' : 'view',
      'showDeleteConfirmation': false
    };
    this.handleRemoveStop = this.handleRemoveStop.bind(this);
  }

  parseContent(content) {
    let info = {
      'stopIds': [],
      'tourDate': "",
      'visibility': ""
    };
    let res = content.match(/<li>\d+<\/li>/gm);
    let stops = res ? res.map(item => {
      let idStr = item.slice(4, -5);
      return parseInt(idStr);
    }) : [];
    info.stopIds = stops;
    res = content.match(/<h2>TourDate:.+<\/h2>/gm);
    let date = res ? res[0].slice(4, -5).split(":")[1] : "";
    info.tourDate = date;
    res = content.match(/<h2>Visibility:.+<\/h2>/gm);
    let status = res ? res[0].slice(4, -5).split(":")[1] : "public";
    info.visibility = status;
    return info;
  }

  componentDidMount() {
    let time = new Date().getTime();
    fetch('/wp-json/wp/v2/tour/' + this.state.id).then(res => res.json()).then(data => {
      // console.log(data);
      const {
        id,
        title,
        content,
        author
      } = data;
      let parsedContent = this.parseContent(content.rendered);
      console.log(parsedContent);
      this.setState({
        'name': Object(_helpers_unescape__WEBPACK_IMPORTED_MODULE_17__["default"])(title.rendered),
        'authorId': author[0],
        'authorName': author[1],
        'date': parsedContent.tourDate,
        'visibility': parsedContent.visibility
      }); // Get all stop details

      const allRequests = parsedContent.stopIds.map(tourId => {
        return fetch('/wp-json/wp/v2/stop/' + tourId + '?timestamp=' + time).then(res => {
          return res.ok && res.json ? res.json() : {
            id: -1
          };
        }).then(data => {
          const {
            id,
            thumbnail_url,
            title,
            medium_url
          } = data;
          if (id === -1) return {};
          const stop = {
            "id": id,
            "thumbnailUrl": thumbnail_url,
            "name": Object(_helpers_unescape__WEBPACK_IMPORTED_MODULE_17__["default"])(title.rendered),
            "medium_url": medium_url
          };
          return stop;
        });
      }); // wait for all requests to finish

      return Promise.all(allRequests);
    }).then(allStops => {
      this.setState({
        'stops': allStops.filter(stop => stop.hasOwnProperty('id'))
      });
    });
  }

  async deleteTour() {
    const response = await fetch('/wp-json/wp/v2/tour/' + this.state.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': reactInit.nonce
      }
    });

    if (!response.ok) {
      console.log(response);
    }

    const tour = await response.json();
    this.props.history.push(`/`);
  }

  getContentString() {
    let str = "<ol>";
    const {
      stops,
      date,
      visibility
    } = this.state;
    stops.map(stop => {
      const {
        id
      } = stop;
      str += "<li>";
      str += id.toString();
      str += "</li>";
    });
    str += "</ol>";
    str += "<h2>TourDate:";
    str += date;
    str += "</h2>";
    str += "<h2>Visibility:";
    str += visibility;
    str += "</h2>";
    return str;
  }

  sanitize(text) {}

  async updateTour(content) {
    const {
      name,
      stops,
      id
    } = this.state;
    const data = {
      "title": name,
      "content": content
    };
    const response = await fetch('/wp-json/wp/v2/tour/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': reactInit.nonce
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.log(response);
    }

    const tour = await response.json();
    console.log(tour);
  } //////////Edit vs. View mode///////////
  //toggling editing mode


  handleEditing() {
    if (this.state.mode === 'edit') {
      const content = this.getContentString();
      this.updateTour(content).then(() => {// show notice after update is done?
        //toggle editing mode
      });
      this.setState({
        'mode': 'view'
      });
    }

    if (this.state.mode === 'view') {
      this.setState({
        'mode': 'edit'
      });
    }
  }

  renderTourInfo() {
    // styling the collasible tour title
    const Accordion = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])({
      root: {
        border: 'none',
        boxShadow: 'none',
        '&:not(:last-child)': {
          borderBottom: 0
        },
        '&:before': {
          display: 'none'
        },
        '&$expanded': {
          margin: 'auto'
        }
      },
      expanded: {}
    })(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_13__["default"]);
    const AccordionSummary = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])({
      root: {
        backgroundColor: 'transparent',
        borderBottom: "1px solid #666E77",
        minHeight: 56,
        cursor: "auto !important",
        padding: "0",
        '&$expanded': {
          minHeight: 56
        }
      },
      content: {
        '&$expanded': {
          margin: '12px 0'
        }
      },
      expanded: {}
    })(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_14__["default"]);
    const AccordionDetails = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(theme => ({
      root: {}
    }))(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_15__["default"]);
    const {
      visibility,
      authorId,
      authorName,
      date
    } = this.state;
    const canEditVisibility = authorId === reactInit.userId;
    const canEdit = visibility === 'public' || authorId === reactInit.userId;
    const canDelete = authorId === reactInit.userId;

    if (this.state.mode === 'edit') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        id: "tour-info-form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        className: "form-label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 21
        }
      }, "Tour Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        className: "info-form",
        type: "text",
        value: this.state.name,
        onChange: e => this.setState({
          name: e.target.value
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        className: "form-label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }
      }, "Tour Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
        className: "info-form",
        type: "date",
        value: this.state.date,
        onChange: e => this.setState({
          date: e.target.value
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }
      }, "Tour Edit is"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
        type: "radio",
        disabled: !canEditVisibility,
        id: "default-radio",
        value: "private",
        checked: this.state.visibility === 'private',
        label: "COMPLETE",
        name: "tourTypeRadio",
        onChange: e => this.setState({
          visibility: e.target.value
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Check, {
        type: "radio",
        disabled: !canEditVisibility,
        label: "INCOMPLETE",
        value: "public",
        checked: this.state.visibility === 'public',
        id: "disabled-default-radio",
        name: "tourTypeRadio",
        onChange: e => this.setState({
          visibility: e.target.value
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }
      })));
    }

    if (this.state.mode === 'view') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tour-info-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Accordion, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionSummary, {
        expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _images_dropdown_icon_png__WEBPACK_IMPORTED_MODULE_16___default.a,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 37
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "tour-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 25
        }
      }, this.state.name.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccordionDetails, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Playlist_TourStatus__WEBPACK_IMPORTED_MODULE_8__["default"], {
        visibility: visibility,
        date: date,
        username: authorName,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "primary",
        id: "copy-tour-button",
        className: "tour-page-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "copy-tour-icon-img",
        style: {
          'width': '18px',
          'height': '20px',
          'marginRight': '0'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 37
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_CopyTour__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "copy-tour-button",
        id: this.state.id,
        name: this.state.name,
        date: date,
        visibility: visibility,
        entries: this.state.stops,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 37
        }
      })), canEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "primary",
        onClick: this.handleEditing.bind(this),
        className: "tour-page-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "edit-tour-icon-img",
        style: {
          'width': '18px',
          'height': '20px',
          'marginRight': '0'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 37
        }
      }), "   EDIT THIS TOUR") : "", canDelete ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "primary",
        onClick: this.handleDelete.bind(this),
        id: "delete-stop-button",
        className: "tour-page-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 37
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "delete-tour-icon-img",
        style: {
          'width': '18px',
          'height': '20px',
          'marginRight': '0'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 37
        }
      }), " DELETE TOUR") : ""))));
    }
  }

  renderTourStops() {
    if (this.state.mode === 'edit') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "top-button-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddStop__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSelectStops: this.handleAddedStops,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "primary",
        onClick: this.handleEditing.bind(this),
        id: "update-stop-button",
        className: "tour-page-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 29
        }
      }), " DONE EDITING")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "grid-list-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrentStops__WEBPACK_IMPORTED_MODULE_6__["default"], {
        stops: this.state.stops,
        onRemoveStop: this.handleRemoveStop,
        onSortEnd: this.onSortEnd,
        onSwapLeft: this.onSwapLeft,
        onSwapRight: this.onSwapRight,
        axis: "xy",
        useWindowAsScrollContainer: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 25
        }
      })));
    }

    if (this.state.mode === 'view') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stops-container-view",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 17
        }
      }, console.log("the last stop:", this.state.stops[this.state.stops.length - 1]), this.state.stops.map(singleStop => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MediaCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        stop: singleStop,
        onClick: () => this.props.history.push(`/stop/${singleStop.id}`),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 25
        }
      })));
    }
  }

  renderDeleteConfirmation() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      show: this.state.showDeleteConfirmation,
      onHide: () => this.setState({
        showDeleteConfirmation: false
      }),
      size: "md",
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
      closeButton: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 19
      }
    }, "Are you sure?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default.a, {
      onClick: () => this.setState({
        showDeleteConfirmation: false
      }),
      className: "overlay-close-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
      className: "show-grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 21
      }
    }, "Your're about to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 48
      }
    }, this.state.name.toUpperCase()), " and you won't be able to revert this. Are you sure?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Footer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "delete-tour",
      onClick: this.deleteTour.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "delete-tour-icon-img",
      style: {
        'width': '18px',
        'height': '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 29
      }
    }), " YES, DELETE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "primary",
      onClick: () => this.setState({
        showDeleteConfirmation: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 25
      }
    }, "NO, GO BACK")));
  }

  handleDelete() {
    // confirmation overlay
    this.setState({
      showDeleteConfirmation: true
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isTourPage: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "tour-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tour-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 21
      }
    }, this.renderTourInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 21
      }
    }), this.renderTourStops(), this.renderDeleteConfirmation()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(TourPage));

/***/ }),

/***/ "./src/components/TourPage/TourPage.styles.css":
/*!*****************************************************!*\
  !*** ./src/components/TourPage/TourPage.styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers/RestAPIHelper.js":
/*!**************************************!*\
  !*** ./src/helpers/RestAPIHelper.js ***!
  \**************************************/
/*! exports provided: RestAPICreateTour, RestAPIGetStopById, RestAPIGetTourByAuthorId, RestAPIGetStopsByPage, RestAPIGetStopsBySearch, RestAPIGetTourByPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestAPICreateTour", function() { return RestAPICreateTour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestAPIGetStopById", function() { return RestAPIGetStopById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestAPIGetTourByAuthorId", function() { return RestAPIGetTourByAuthorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestAPIGetStopsByPage", function() { return RestAPIGetStopsByPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestAPIGetStopsBySearch", function() { return RestAPIGetStopsBySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestAPIGetTourByPage", function() { return RestAPIGetTourByPage; });
function getTourContent(title, date, visibility, stops) {
  let str = "<ol>";
  if (stops) stops.map(stop => {
    const {
      id
    } = stop;
    str += "<li>";
    str += id.toString();
    str += "</li>";
  });
  str += "</ol>";
  str += "<h2>TourDate:";
  str += date;
  str += "</h2>";
  str += "<h2>Visibility:";
  str += visibility;
  str += "</h2>";
  return str;
}

async function RestAPICreateTour(title, date, visibility, stops) {
  const data = {
    "title": title,
    "status": "publish",
    "content": getTourContent(title, date, visibility, stops)
  };
  const response = await fetch('/wp-json/wp/v2/tour/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': reactInit.nonce
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    console.log(response);
    return -1;
  }

  const tour = await response.json();
  return tour.id;
}
async function RestAPIGetStopById(id, time, callback) {
  const response = await fetch('/wp-json/wp/v2/stop/' + id + '?timestamp=' + time);

  if (!response.ok) {
    console.log(response);
    return;
  }

  const stop = await response.json();
  callback(stop);
}
async function RestAPIGetTourByAuthorId(author, time, callback) {
  const response = await fetch('/wp-json/wp/v2/tour/?author=' + author + '?timestamp=' + time);

  if (!response.ok) {
    console.log(response);
    return;
  }

  const tours = await response.json();
  callback(tours);
}
async function RestAPIGetStopsByPage(per_page, page_num, time, callback) {
  const response = await fetch('/wp-json/wp/v2/stop/?timestamp=' + time + '&per_page=' + per_page + '&page=' + page_num);

  if (!response.ok) {
    console.log(response);
    return;
  }

  const stops = await response.json();
  const total_page_num = response.headers.get('x-wp-totalPages');
  callback(stops, total_page_num);
}
async function RestAPIGetStopsBySearch(search_keyword, per_page, page_num, time, callback) {
  const response = await fetch('/wp-json/wp/v2/stop/?timestamp=' + time + '&search=' + search_keyword + '&per_page=' + per_page + '&page=' + page_num);

  if (!response.ok) {
    console.log(response);
    return;
  }

  const stops = await response.json();
  const total_page_num = response.headers.get('x-wp-totalPages');
  callback(stops, total_page_num);
}
async function RestAPIGetTourByPage(per_page, page_num, time, callback) {
  const response = await fetch('/wp-json/wp/v2/tour/?timestamp=' + time + '&per_page=' + per_page + '&page=' + page_num);

  if (!response.ok) {
    console.log(response);
    return;
  }

  const tours = await response.json();
  const total_page_num = response.headers.get('x-wp-totalPages');
  callback(tours, total_page_num);
}

/***/ }),

/***/ "./src/helpers/unescape.js":
/*!*********************************!*\
  !*** ./src/helpers/unescape.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const {
  replace
} = '';
const es = /&(?:amp|#038|lt|#60|gt|#62|apos|#39|quot|#34|#8211|#8212|#8216|#8217|#8220|#8221|#338|#339|#352|#353|#376|#710|#732|#8195|#8364);/g;
const unes = {
  '&amp;': '&',
  '&#038;': '&',
  // '&lt;': '<',
  // '&#60;': '<',
  // '&gt;': '>',
  // '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  "&#8211;": "-",
  "&#8212;": "--",
  "&#8216;": "‘",
  "&#8217;": "’",
  "&#8220;": '“',
  "&#8221;": '”',
  "&#338;": "Œ",
  "&#339;": "œ",
  "&#352;": "Š",
  "&#353;": "š",
  "&#376;": "Ÿ",
  "&#710;": "ˆ",
  "&#732;": "˜",
  "&#8195;": "  ",
  "&#8364;": "€"
};

const cape = m => unes[m];

const unescape = un => replace.call(un, es, cape);

/* harmony default export */ __webpack_exports__["default"] = (unescape);

/***/ }),

/***/ "./src/images/add-stop-icon.png":
/*!**************************************!*\
  !*** ./src/images/add-stop-icon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACeSURBVHgB7dexCYRAFITh8bgC7iq460BLsgNbWDu0Ay3BDnSFtyCLkcwEwnwwwSbyBy8R4Bry5tMGEL3B9c37V2+aFx7EsSqOVXGsimNVHKviWBXHqjhW5fhTSLhvqd7txbsHSZO34Rk236zKcbMj7vtV7y5WTDEG+rmm+GhZApFvVsWxKo5VcayKY1Ucq+JYFceqOFalAdcnVqwxih0iMxHOnUA+DQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/dropdown-icon.png":
/*!**************************************!*\
  !*** ./src/images/dropdown-icon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAALCAYAAACUPhZAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgBrVI7TgJRFD13IEFjwxJmAxoKIQYtoLOUHWABEiPjWMDYDXSCiSIYQsAEXQFLEAsTLEzGHcwSaDR+53kfMIYgHzGc5t3cz3n3nPcARlLLmqmUoWIBSOmGuqcZhzKmRDoTJ1KaHHchRL5eKZbwTyQPsjtCoSYBfuY68qyFQ7YivMuciIBoez20pa6Gg3dWp/M6FzGr5/ka8yw5oJsVz9sJucVE+jgOEue9WwFbeUe0VivYs0h1Xfc/f/laRLycBG/sqqfhRumX4+CWQ7WfEbl6uZifRJzYzwTIq7QG/TbP7l5dFtpuncYOaUaJC/1HEbimD+RHVchHc4DcQKnFSmOjPYRJW7FNRMJ0txKfTqxRPbWkDS/CZ0JA72kDLhrlgj6OYyK5xC+bCCVmi3AUYNIuzfhdU8ldJDUjx4c5lPpRMm3Ogz/g8eG+HQhuPilEG0LA4m8WrVbObCwS0u95+r8BkU6JI3sqwhgAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/hamburger-close.png":
/*!****************************************!*\
  !*** ./src/images/hamburger-close.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAExSURBVHgB7VUxDsIwDLyQj/AHBgYYyk+YYIKRjrRjV5iAx1AGBgbeVJLSSkhtHDuREBI9KarUxr6r4/iAAQMG/DJW293eLgSAG6upBIDKzEom0xmej/sNAnJurKYTtOCLkMZqfwJeotDYUc9mBSdU5jpXNzmdt1MBo7KcTOd2c4L+RJ2/8ZMjPx+KjCVAKiKGvM4EAqttmpmH8ypVFUpT2ASB5Baa+uirhCEfI4LcK4AjIoacJSBABJvcQkGA9Sa9VsSZK9MTp2OxgACsCljU3a7UktxkekI6tlkCGFftU4XIO7wCZORyETqGvJkDY0SIGCGQ3CC/vBsud29xe0cLph13ydurFuIdpICQ2R4jQmjH7iHTvKeOI9qOvRMuJJZrx+zxGhPbgbXjxpK/GvtfeAEXP9Py5oBUpAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/hamburger.png":
/*!**********************************!*\
  !*** ./src/images/hamburger.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA9SURBVHgB7dShFQAgDAPRwLBILDNgkSwLrqK+L+a+rOmpSIBZy4cx11Oxe3b87TIjwB4AO3aAAHYAAAC7D5+7CBMtk+QjAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/left-arrow.png":
/*!***********************************!*\
  !*** ./src/images/left-arrow.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAZCAYAAAA8CX6UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHWSURBVHgBpZTNLjtRGMbfc86kXfw3lv9lXYCkQn2EBVaWLoGFEomaWVAraqe1MD4ik1qoGyBugEo0QQh2duYSJhGS+pjX+46pVBUz40nOnHNyTn7zPGfeOQB/0KSeTUxksjM8FhBRDHABcgRoAURDg5DSdb3lEeOLiKCzCwRY+6eeSqEcjU/NJoUm92mYIIAjEJeKGwWT1wI7qkUBjgJgqycYtKyCXVv/FcRRHjC+SlFGP6LIas60TKd+nwgTRaEwrI3lUrO9En6IApo8Ygi1a4rS/h2EpUWN0igRNUqjZNQojdK8AnuN75CDkTBRvoDuX2IDSkLSnzvkxAwLYXlnNKnPJ1wXD2nYyjDyZVBfKq4XAoMUPy5OT5y23tSuQvWf2D3URvglnV39x5fnlUCgLwWZzsznyNECrwmEsniGMcvK26FBLL8M9uA9qi29/+pnWNPK3t5auZZSDJGzK5om3BjcpafndAjr6JO7TNakTTP+brO4ljcigVieGyFW/WnTqIEvNr6fXRdqlW9Llz7CZr5cW1dBQRenFSfV23+ALoEE9KCA0Y7uPrg8qxyHclSvdCabo27RAyCUqqpqBHZUL3JRTqb6boQQw+xOYewW/iI+N98dvAGezMoAonYS5wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/no-result-sad-face.png":
/*!*******************************************!*\
  !*** ./src/images/no-result-sad-face.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/no-result-sad-face.2d8fa6dc.png";

/***/ }),

/***/ "./src/images/pagination-left-greyout.png":
/*!************************************************!*\
  !*** ./src/images/pagination-left-greyout.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAcCAYAAAC6YTVCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFZSURBVHgBjVTbUcMwEJRu8k/SgVNCqABTAUMDQAUkFSShAGIqIDQQKjDGDcBQAekAKrDZTeSJLKzHzWxkRV7t7Z0spRKjqqoxcMPnkUqPJTAvy3KqU96Gwj2GAvgFZpJAyDCszHSd5/leRwhjDJ8AiU8gzPl/TGlpCHtLTemASs8H0+rWxEPIlOPDXvelVwH0Qx+FuygDKhs14MOOnic07lZEns106qbVxchSyDBszHThI7jpdT62Qz7+kRwfCxUJMWkdTm/TNC/q2JcwyeT+cJiIsKEzbBQm8YceoEIf9LQDJiFSr+RQ+KAS8A5cYrPWq2TFNfANXACPdV2rqJJRI+GNa/B4h7TZgjDJEPndsA2s5DnVbeLggXUKQ9VJyNNpQWStTl/tzm6DlwQ1psbC/KhjYVYdMXob2YUxm7ymXmF2YeJXmEm1aNt2i8cz4Cr5htVa8/R/cYM/Y7aGjJYxH8UAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/pagination-left.png":
/*!****************************************!*\
  !*** ./src/images/pagination-left.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAcCAYAAAC6YTVCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgBlZS9TgJBEMd39owYK3wDSisjGlADJGBl7QuIRpGYQI5CiBVnZcDED0wszkJ9AQs7LdQCDYkXxCcAOzqhA0JunQVOLwFu10kuO7N7v8z8ZydLyD8sHs94+AqyQCyZzuLvGiE0SmWAuMozcKBvQogDpkmeB+GhXji6FUKmyTRcPPjV9EJOE2Ya6NjgAO2QiLUPgrKq/YhGeVnWGZXVYT+nsjocoXE67AayOkZmEukYCYl0DEEyOuwGUVV1T5qu717EWEq/yJ+JIKVSKrUWloJu7MgyAZj1eYP3hvHacMxkObuJzBMDEgFGXhglq/p5jhEnTT1agS1cqgiGcT2JJQ/Embjt7O3PwwQt9/fpJut2b64uj4cgxR6U39/qi/5AE7WtYVfCxGSPcwF/HXWPLs8y3j0Uwzvoxqx3hJEZx/LshneHZYK31xhgEb2QH5/p94DSdfLXGM3eGGUcZJSKDa8v9AlAcFIAQfjCO6wYRlH8hMUSaRUbc4puA0dsoTXVrkq9e9vJ9DXFiUO31qFtr9S716WdFF7BB7oel+nKKjIQn0/fSuiBMWhO03buB/xZtTI9nQxDAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/pagination-right-greyout.png":
/*!*************************************************!*\
  !*** ./src/images/pagination-right-greyout.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAcCAYAAAC6YTVCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFOSURBVHgBlVTtVcJAENy753+xg2gFagMR04BWYDqADkAbIFYAVBAbiKEEK1A6kAoSZ2VPLnhfzHvzNrnc7OxuciEC2radgCNKhG6aZopYgYtkEfCGuANLSRCFkvIeEGpZGwOboJPsYrdnWauRJIs6GWBzi3AHfojjzutk4RHcgtfgjELlGUjmMe0HM/UNRrkWUWWJsDzkGg5Gu0TYtOq67lVul8eDcYoYRVFwaRuQBXWSSPA3GLgtkkQyGBYOBqMoAdg8x+c2E/HNWUwgX/+T3K7hvlURAfV9v1JKsegLgite1yEB9yGCb/DePFMBwSX4+ZtZ6zLP87V57nO6AN/lurIFTidfHzb0sQCYuPpwiqw+5rL0wuMNioCR9MGxgqAiD7Tlwm884z7ocPSdUKYP2v/GuI9bX1m2U0YJfQxEOGwl4jlF+vgHPt6n/JZ/APAQh+TDOSrQAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/images/pagination-right.png":
/*!*****************************************!*\
  !*** ./src/images/pagination-right.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAcCAYAAAC6YTVCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgBlVQ9TwJBEJ3ZU7H0H4j/QEAhEUygswQrS40RiOHLQs5O6MRGQigMNpbaiPwCpTiDyJednZRaiZ2QcOcucMlxeHfrSy43O7dv37zZyQFQRKOiHf4BIZIQk7IAN2se72LzWarykMhQhlcEWALATDQm+nlIQqsudV0eH+WBX0EIrjt8t42G1DMjoRqE42KZroI07A5I33GdzxsSiRoMhP4eI9DHPj+0XYCZJzVgJxMCAQWghwi74Xg6BVblqdiPpYMCwfLoRBkCl8Xco36PoE+069KbpjF+2piKvjEzSioicfGBkWjYoY0JaBtDjEh9oR+CcWNWFxTbqWl5Kjq12o/TtVEFgju0HL/L7f1u1qWaKYmh9fL04XJvfiK7P8QtekiF5RA4cJAQ83RjEiYXT6wI4UQaUIHlyfJrdJ+mCofH7JWZjNc7GeA2SxiWF02dwHAwdOAcaY0SshIqFc/vWWiipKxQwt04xqxKMFRiPkBBderbpULOqf1OeH1ogbw+TJSMffypZOVjRonHx5QSrw+dkmLn8TFFov89Noj2sY+zDHCAXBVyR1Qta+VDi19TO7h/2x9HxAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/placeholder-thumbnail.png":
/*!**********************************************!*\
  !*** ./src/images/placeholder-thumbnail.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/placeholder-thumbnail.e012da90.png";

/***/ }),

/***/ "./src/images/right-arrow.png":
/*!************************************!*\
  !*** ./src/images/right-arrow.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAZCAYAAAA8CX6UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIISURBVHgBpZTfbhJBFMa/M5CSNCZt3wDfADXGGL0Qn0CeoL0QXJOyLBeyXGn1SjRp12gMAZPSF7D1BbS9aKKJpn2D8gZyZQuUGc9pd5st5c8u/RIyM5nlx/nNnAXgFOzKK8ty07hGVL74YgWgNT2Hg8Jq5QlmjOon+juA2eL5IhRtS3WYIRRMCra7xsM5xGBH9VGu12ttRAyFF09X3UdKYZOnaf60VQ/ZqDAVXnz5VNtlUFYgAuNzOyoUK04UEI3byNuux5sl/ymv8aFWxiwgyVk1RBv+8pBVc+NUJ4IkluOmtcYP+OdmTnWu+fn94fBziWmg3z/3O3fvP/wGjQz/bIYUWXfuPcCfX/t7sSoKJ9wiZNDqJrrllud1YoMk+WJ1hSkbJA0capHYIImc20DjIIBBm7KKC3EcZ1EblHwIHx3tzSd7u7Eq8m9wm6cZA3TImNeNj+882ZtaEVdwNj63K8uiIxCIzqnOBhAJTa6gipQ5WTpG6iW/yI6vsnVDnTief1tTQVwBtKKbRuPrKJXhJDFC5Z9JEYxZ5vO4uGZWyTVGdHQQNaxiDJZ4uj4AbTJkgVVa86p7qzkBckntme0KVlS+8zLNKn9Z5c04lSugQIVbvqS5/X2VI9Wjx/X62zYiRpnzL67zKOexwKPHKrfjQCTJ48EcvzsoBSrNiCojI39gllVN4xr5Dw6G2c9aOz5BAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
})), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenjiewen/Localdev/museum-live/wp-content/themes/react-theme/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map