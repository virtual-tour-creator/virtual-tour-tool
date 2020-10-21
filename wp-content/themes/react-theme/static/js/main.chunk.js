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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/App.js";








function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_PublicLibrary__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/entry/:entryId",
    component: _components_EntryPage_EntryPage__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/tour/:tourId",
    component: _components_TourPage_TourPage__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/Button/CreateTour.js";





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


      props.history.push(`/tour/${id}`);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: handleShow,
    id: "create-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Create a New Tour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: handleClose,
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Create a New Tour")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Tour Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    onChange: event => setTourTitle(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Tour Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "date",
    onChange: event => setTourDate(event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "Tour Visibility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    id: "default-radio",
    label: "Public",
    name: "tourTypeRadio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "radio",
    label: "Private",
    id: "disabled-default-radio",
    name: "tourTypeRadio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: handleCreate.bind(this, tourTitle, tourDate),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Save Changes"))));
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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/EntryPage/EntryPage.js";






const getContent = entry => {
  if (entry.content) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: entry.content.rendered
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  });
};

const EntryPage = props => {
  let id = props.match.params.entryId;
  let time = new Date().getTime();
  const [entry, setEntry] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function loadEntry() {
      const response = await fetch('/wp-json/wp/v2/stop/' + id + '?timestamp=' + time);

      if (!response.ok) {
        console.log(response);
        return;
      }

      const entry = await response.json();
      setEntry(entry);
    }

    loadEntry();
  }); // load media

  let media = "None";
  let Photos = [];

  if (entry.acf_media) {
    media = entry.acf_media.map(media => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "media",
      src: media.thumbnail_url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }));
    Photos = entry.acf_media.map(media => {
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
    tag_lists = entry.tag_names.map(name => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, "#", name));
  } // const [isOpen, setIsOpen] = useState(false);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "close-icon",
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 48
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "entry-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, entry.title ? entry.title.rendered : "loading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "image-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_2___default.a, {
    items: Photos,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_collapsible__WEBPACK_IMPORTED_MODULE_4___default.a, {
    trigger: "Description",
    open: "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, getContent(entry)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_collapsible__WEBPACK_IMPORTED_MODULE_4___default.a, {
    trigger: "Related Topics",
    open: "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, tag_lists)));
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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/Jumbotron/Jumbotron.js";



class Jumbotron extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "jumbotron jumbotron-fluid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "display-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "Library Database")));
  }

}

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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/Navbar/Navbar.js";



class Navbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "navbar navbar-dark navbar-expand-md",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "navbar-brand",
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, "BALTIMORE MUSEUM OF ART"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "navbar-toggler-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "navbar-dark collapse navbar-collapse",
      id: "navbarNav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "ml-auto navbar-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: "/wp-admin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, "Access Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "nav-link",
      href: reactInit.logoutUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, "Logout")))));
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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/Playlist/Entries/Entries.js";




const Entries = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  key: props.listId,
  className: "entries row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, props.entries.map(entry => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  key: entry.id,
  className: "entry",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  alt: "entry",
  src: entry.thumbnail_url,
  onClick: () => props.history.push(`/entry/${entry.id}`),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 17
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
}, " ", entry.name, " "))));

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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/Playlist/Playlist.js";





const Playlist = props => {
  // <Entries entries={playlist.entries}
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "public-playlists",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, props.playlists.map(playlist => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: playlist.id,
    className: "public-playlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    onClick: () => props.history.push(`/tour/${playlist.id}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, playlist.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Entries_Entries__WEBPACK_IMPORTED_MODULE_2__["default"], {
    listId: playlist.id,
    entries: playlist.entries,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }))));
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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/PublicLibrary.js";






class PublicLibrary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    this.getStopInfo = id => {
      let time = new Date().getTime();
      return fetch('/wp-json/wp/v2/stop/' + id + '?timestamp=' + time).then(res => res.json()).then(data => {
        // console.log(entry);
        const {
          id,
          thumbnail_url,
          title
        } = data;
        const e = {
          id,
          thumbnail_url,
          name: title.rendered
        };
        return e;
      });
    };

    this.state = {
      playlists: []
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

  componentDidMount() {
    let time = new Date().getTime();
    fetch('/wp-json/wp/v2/tour?timestamp=' + time).then(res => res.json()).then(data => {
      console.log(data);
      let tourInfo = data.map(tour => {
        const {
          id,
          title,
          content
        } = tour;
        return {
          id,
          name: title.rendered,
          entries: this.parseContentStopId(content.rendered)
        };
      }); // console.log(playlistInfo);

      return tourInfo;
    }).then(tourInfo => {
      // get stop per tour
      let stopDic = {};
      tourInfo.map(tour => {
        const {
          id,
          name,
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
      } // wait for all requests to finish


      return Promise.all(allRequests).then(stopData => {
        stopData.map(stop => {
          const {
            id
          } = stop;
          stopDic[id] = stop;
        });
        return tourInfo.map(tour => {
          const {
            id,
            name,
            entries
          } = tour;
          let newStopInfo = entries.map(stopId => {
            return stopDic[stopId];
          });
          return {
            id,
            name,
            entries: newStopInfo
          };
        });
      });
    }).then(finalInfo => {
      console.log(finalInfo);
      this.setState({
        playlists: finalInfo
      });
    }).catch(console.log);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "public-library",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_CreateTour__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Playlist_Playlist__WEBPACK_IMPORTED_MODULE_3__["default"], {
      playlists: this.state.playlists,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }));
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
/* harmony import */ var _StopCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StopCard */ "./src/components/TourPage/StopCard.js");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TourPage.styles.css */ "./src/components/TourPage/TourPage.styles.css");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TourPage_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectableCard_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectableCard.scss */ "./src/components/TourPage/SelectableCard.scss");
/* harmony import */ var _SelectableCard_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SelectableCard_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/AddStop.js";






class StopCardList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    var selected = [];
    var initialState = {
      selected: selected
    };
    this.state = initialState;
  }

  onItemSelected(index) {
    this.setState((prevState, props) => {
      var selectedIndexes = prevState.selected;
      var selectedIndex = selectedIndexes.indexOf(index);

      if (selectedIndex > -1) {
        selectedIndexes.splice(selectedIndex, 1);
        props.onChange(selectedIndexes);
      } else {
        selectedIndexes.push(index);
        props.onChange(selectedIndexes);
      }

      return {
        selected: selectedIndexes
      };
    });
  }

  render() {
    var {
      stops
    } = this.props;
    var stop = stops.map((cardContent, i) => {
      var {
        thumbnailUrl,
        name,
        selected
      } = cardContent;
      var selected = this.state.selected.indexOf(i) > -1;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StopCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        thumbnailUrl: thumbnailUrl,
        name: name,
        selected: selected,
        onClick: e => this.onItemSelected(i),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      });
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stop-card-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, stop);
  }

}

class StopCardListSelection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  onListChanged(selected) {
    this.setState({
      selected: this.getSelectedStops(selected)
    });
  }

  getSelectedStops(selectedIndexes) {
    const selectedStops = selectedIndexes.map(index => this.props.stops[index]);
    return selectedStops;
  }

  submit() {
    this.props.onSelectStops(this.state.selected);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StopCardList, {
      stops: this.props.stops,
      onChange: this.onListChanged.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "card",
      onClick: e => this.submit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, "Add"));
  }

}

class AddStop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super();

    this.handleShow = () => this.setState({
      show: true
    });

    this.handleStops = selectedStops => {
      this.props.onSelectStops(selectedStops);
      this.setState({
        show: false
      });
    };

    this.state = {
      show: false,
      backendStops: []
    };
  } // const [show, setShow] = useState(false);


  componentDidMount() {
    let time = new Date().getTime();
    fetch('/wp-json/wp/v2/stop?timestamp=' + time).then(res => res.json()).then(data => {
      // console.log(data);
      let allStopsInfo = data.map(stop => {
        const {
          id,
          thumbnail_url,
          title
        } = stop;
        let stopInfo = {
          'id': id,
          'thumbnailUrl': thumbnail_url,
          'name': title.rendered
        };
        return stopInfo;
      });
      this.setState({
        backendStops: allStopsInfo
      });
    });
  }

  // const stopsToAdd = backendStops.map(singleStop =>
  //     <div className='stop'>
  //         <StopCard>
  //             <img alt='stop' src={singleStop.thumbnailUrl} />
  //             <p> {singleStop.name} </p>
  //         </StopCard>
  //     </div>)
  render() {
    const {
      backendStops
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "tour-page-button",
      variant: "primary",
      onClick: this.handleShow,
      id: "add-stop-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "fas fa-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }), "  Add Stop(s)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: this.state.show,
      onHide: () => this.setState({
        show: false
      }),
      "aria-labelledby": "example-custom-modal-styling-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
      closeButton: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 19
      }
    }, "Add Stop(s)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
      className: "show-grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StopCardListSelection, {
      stops: backendStops,
      onSelectStops: this.handleStops,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddStop);

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
/* harmony import */ var _MediaCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaCard */ "./src/components/TourPage/MediaCard.js");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TourPage.styles.css */ "./src/components/TourPage/TourPage.styles.css");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TourPage_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/CurrentStops.js";





const StopBox = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableElement"])(({
  singleStop,
  index,
  handleRemove
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "edit-stop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "remove tour-page-button",
    onClick: () => handleRemove(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, " X "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MediaCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    stop: singleStop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
});
const StopBoxList = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableContainer"])(({
  stops,
  onRemoveStop
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "edit-stops",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, stops.map((singleStop, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index,
    className: "stop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StopBox, {
    index: index,
    singleStop: singleStop,
    key: index,
    handleRemove: () => onRemoveStop(index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/MediaCard.js";


function MediaCard({
  stop,
  onClick
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card single-stop",
    style: {
      width: "18rem"
    },
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: stop.name,
    src: stop.thumbnailUrl,
    className: "card-img-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body align-items-center d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, stop.name)));
}

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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/StopCard.js";



class Card extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 15
      }
    }, this.props.children);
  }

} //one single selectable stop card


class SelectableCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    var isSelected = this.props.selected ? "selected" : "";
    var className = "selectable " + isSelected;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className,
      onClick: this.props.onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "checkmark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 36
      }
    }, "\u2714"))));
  }

}

class StopCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    var {
      thumbnailUrl,
      name,
      selected
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectableCard, {
      onClick: this.props.onClick,
      selected: selected,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "stop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "stop-thumbnail",
      src: thumbnailUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/Navbar */ "./src/components/Navbar/Navbar.js");
/* harmony import */ var _Jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Jumbotron/Jumbotron */ "./src/components/Jumbotron/Jumbotron.js");
/* harmony import */ var _AddStop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddStop */ "./src/components/TourPage/AddStop.js");
/* harmony import */ var _CurrentStops__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CurrentStops */ "./src/components/TourPage/CurrentStops.js");
/* harmony import */ var _MediaCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaCard */ "./src/components/TourPage/MediaCard.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TourPage.styles.css */ "./src/components/TourPage/TourPage.styles.css");
/* harmony import */ var _TourPage_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_TourPage_styles_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/components/TourPage/TourPage.js";










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
      const newArray = array_move__WEBPACK_IMPORTED_MODULE_7___default()(this.state.stops, oldIndex, newIndex);
      this.setState({
        'stops': newArray
      });
    };

    this.state = {
      'id': props.match.params.tourId,
      'name': '',
      'visibility': 'public',
      'date': '',
      'stops': [],
      'mode': 'view',
      'showDeleteConfirmation': false
    };
    this.handleRemoveStop = this.handleRemoveStop.bind(this);
  }

  parseContent(content) {
    let info = {
      'stopIds': [],
      'tourDate': ""
    };
    let res = content.match(/<li>\d+<\/li>/gm);
    let stops = res ? res.map(item => {
      let idStr = item.slice(4, -5);
      return parseInt(idStr);
    }) : [];
    info.stopIds = stops;
    res = content.match(/<h2>.+<\/h2>/gm);
    let date = res ? res[0].slice(4, -5).split(":")[1] : "";
    info.tourDate = date;
    return info;
  }

  componentDidMount() {
    let time = new Date().getTime();
    fetch('/wp-json/wp/v2/tour/' + this.state.id).then(res => res.json()).then(data => {
      // console.log(data);
      const {
        id,
        title,
        content
      } = data;
      let parsedContent = this.parseContent(content.rendered);
      console.log(parsedContent);
      this.setState({
        'name': title.rendered,
        'date': parsedContent.tourDate
      }); // Get all stop details

      const allRequests = parsedContent.stopIds.map(tourId => {
        return fetch('/wp-json/wp/v2/stop/' + tourId + '?timestamp=' + time).then(res => res.json()).then(data => {
          const {
            id,
            thumbnail_url,
            title
          } = data;
          const stop = {
            "id": id,
            "thumbnailUrl": thumbnail_url,
            "name": title.rendered
          };
          return stop;
        });
      }); // wait for all requests to finish

      return Promise.all(allRequests);
    }).then(allStops => {
      this.setState({
        'stops': allStops
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
      date
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
    return str;
  }

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
      document.getElementById('update-stop-button').innerHTML = "<i class='fas fa-unlock-alt'></i>" + '    EDIT THIS TOUR';
    }

    if (this.state.mode === 'view') {
      this.setState({
        'mode': 'edit'
      });
      document.getElementById('update-stop-button').innerHTML = "<i class='fas fa-check'></i>" + '  DONE EDITING';
    }
  }

  renderTourInfo() {
    if (this.state.mode === 'edit') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        className: "form-label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }
      }, "Tour Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
        className: "info-form",
        type: "text",
        value: this.state.name,
        onChange: e => this.setState({
          name: e.target.value
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        className: "form-label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }
      }, "Tour Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
        className: "info-form",
        type: "date",
        value: this.state.date,
        onChange: e => this.setState({
          date: e.target.value
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }
      }, "Tour Visibility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
        type: "radio",
        id: "default-radio",
        label: "Public",
        name: "tourTypeRadio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
        type: "radio",
        label: "Private",
        id: "disabled-default-radio",
        name: "tourTypeRadio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }
      })));
    }

    if (this.state.mode === 'view') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "tour-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 26
        }
      }, this.state.name), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "tour-date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 72
        }
      }, this.state.date), " "));
    }
  }

  renderTourStops() {
    if (this.state.mode === 'edit') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddStop__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onSelectStops: this.handleAddedStops,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "tour-stops",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrentStops__WEBPACK_IMPORTED_MODULE_5__["default"], {
        stops: this.state.stops,
        onRemoveStop: this.handleRemoveStop,
        onSortEnd: this.onSortEnd,
        axis: "xy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }
      })));
    }

    if (this.state.mode === 'view') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 17
        }
      }, this.state.stops.map(singleStop => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MediaCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        stop: singleStop,
        onClick: () => this.props.history.push(`/entry/${singleStop.id}`),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }
      })));
    }
  }

  renderDeleteConfirmation() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: this.state.showDeleteConfirmation,
      onHide: () => this.setState({
        showDeleteConfirmation: false
      }),
      "aria-labelledby": "example-custom-modal-styling-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
      closeButton: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 19
      }
    }, "Confirm Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
      className: "show-grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 21
      }
    }, "Are you sure about deleting this tour?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      onClick: this.deleteTour.bind(this),
      id: "delete-stop-button",
      className: "tour-page-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-trash-alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 21
      }
    }), " DELETE")));
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
        lineNumber: 277,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Jumbotron_Jumbotron__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "tour-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      onClick: this.handleEditing.bind(this),
      id: "update-stop-button",
      className: "tour-page-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-unlock-alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 21
      }
    }), "   EDIT THIS TOUR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      onClick: this.handleDelete.bind(this),
      id: "delete-stop-button",
      className: "tour-page-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-trash-alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 21
      }
    }), " DELETE TOUR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "tour-info-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 21
      }
    }, this.renderTourInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 21
      }
    }), this.renderTourStops(), this.renderDeleteConfirmation()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TourPage);

/***/ }),

/***/ "./src/components/TourPage/TourPage.styles.css":
/*!*****************************************************!*\
  !*** ./src/components/TourPage/TourPage.styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
var _jsxFileName = "/Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/index.js";





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

module.exports = __webpack_require__(/*! /Users/nouyang/Desktop/museum-live/wp-content/themes/react-theme/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map