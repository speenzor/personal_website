(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(_,e,r){"use strict";r.d(e,"a",function(){return t});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function t(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})}},11:function(_,e,r){_.exports=r(12)},12:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9),react_dom__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__),_index_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17),_index_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__),_serviceWorker__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(10),projectName="javascript-calculator",App=function(_React$Component){function App(_){var e;return Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),(e=Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(App).call(this,_))).state={currentValue:["0"],formula:[""]},e.handleClear=e.handleClear.bind(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(e))),e.handleDigit=e.handleDigit.bind(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(e))),e.handleOperator=e.handleOperator.bind(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(e))),e.handleDecimal=e.handleDecimal.bind(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(e))),e.handleEquals=e.handleEquals.bind(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(e))),e}return Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App,_React$Component),Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"handleClear",value:function(){this.setState({currentValue:["0"],formula:[""]})}},{key:"handleDigit",value:function(_){var e=this.state.formula.map(function(_){return _.toString()}).reduce(function(_,e){return _+e}),r=this.state.currentValue.map(function(_){return _.toString()}).reduce(function(_,e){return _+e});if(/=/.test(e))this.setState({formula:[_.target.value],currentValue:[_.target.value]});else if(this.state.currentValue.length>=25)alert("Max-digit length reached");else{if("0"===r&&"0"===_.target.value)return;"0"===r&&"0"!==_.target.value?this.setState({formula:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.formula).concat([_.target.value]),currentValue:[_.target.value]}):/[-+*\/]/.test(r)?this.setState({formula:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.formula).concat([_.target.value]),currentValue:[_.target.value]}):this.setState({formula:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.formula).concat([_.target.value]),currentValue:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.currentValue).concat([_.target.value])})}_.preventDefault()}},{key:"handleOperator",value:function(_){var e=this.state.formula.map(function(_){return _.toString()}).reduce(function(_,e){return _+e}),r=this.state.currentValue.map(function(_){return _.toString()}).reduce(function(_,e){return _+e});if(/=/g.test(e))this.setState({currentValue:[_.target.value],formula:[r,_.target.value]});else if("0"===r&&"0"===e){if("-"!==_.target.value)return;this.setState({formula:[_.target.value],currentValue:[_.target.value]})}else if(/[-+*\/]/.test(r))this.setState({currentValue:[_.target.value],formula:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.formula.slice(0,this.state.formula.length-1)).concat([_.target.value])});else if("0"===r){if("-"!==_.target.value)return;this.setState({currentValue:[_.target.value],formula:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.formula).concat([_.target.value])})}else this.setState({currentValue:[_.target.value],formula:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.formula).concat([_.target.value])});_.preventDefault()}},{key:"handleEquals",value:function handleEquals(e){var formulaOutput=this.state.formula.map(function(_){return _.toString()}).reduce(function(_,e){return _+e}),next=formulaOutput.split(/([-+*\/])/),nextnext=next.filter(function(_){return""!==_}),preOutput=nextnext.map(function(_){return/[\s-+*\/]/.test(_)?_:parseFloat(_)}).join("");if(/\d/.test(preOutput[preOutput.length-1])){var output=eval(preOutput);this.setState({currentValue:[output],formula:[preOutput,"=",output]}),e.preventDefault()}}},{key:"handleDecimal",value:function(_){var e=this.state.currentValue.map(function(_){return _.toString()}).reduce(function(_,e){return _+e});if(this.state.currentValue.length>=25)alert("Max digit length reached");else{if(/\./g.test(e))return;/[-+*\/]/.test(e)?this.setState({currentValue:["0","."],formula:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.formula).concat(["0","."])}):this.setState({currentValue:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.currentValue).concat([_.target.value]),formula:Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.formula).concat([_.target.value])})}_.preventDefault()}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{id:"output"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Formula,{formula:this.state.formula}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Output,{currentValue:this.state.currentValue})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Buttons,{handleClear:this.handleClear,handleOperator:this.handleOperator,handleEquals:this.handleEquals,handleDigit:this.handleDigit,handleDecimal:this.handleDecimal}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),Buttons=function(_){function e(){return Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,e),Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(e).apply(this,arguments))}return Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(e,_),Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(e,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{id:"buttons"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"add",value:"+",onClick:this.props.handleOperator},"+"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"subtract",value:"-",onClick:this.props.handleOperator},"-"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"multiply",value:"*",onClick:this.props.handleOperator},"x"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"divide",value:"/",onClick:this.props.handleOperator},"/"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"one",value:"1",onClick:this.props.handleDigit},"1"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"two",value:"2",onClick:this.props.handleDigit},"2"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"three",value:"3",onClick:this.props.handleDigit},"3"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"clear",onClick:this.props.handleClear},"AC"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"four",value:"4",onClick:this.props.handleDigit},"4"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"five",value:"5",onClick:this.props.handleDigit},"5"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"six",value:"6",onClick:this.props.handleDigit},"6"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"seven",value:"7",onClick:this.props.handleDigit},"7"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"eight",value:"8",onClick:this.props.handleDigit},"8"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"nine",value:"9",onClick:this.props.handleDigit},"9"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"equals",value:"=",onClick:this.props.handleEquals},"="),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"zero",value:"0",onClick:this.props.handleDigit},"0"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{id:"decimal",value:".",onClick:this.props.handleDecimal},"."))}}]),e}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),Output=function(_){function e(){return Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,e),Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(e).apply(this,arguments))}return Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(e,_),Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(e,[{key:"render",value:function(){var _=this.props.currentValue.map(function(_){return _.toString()}).reduce(function(_,e){return _+e});return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{id:"display"},_)}}]),e}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),Formula=function(_){function e(){return Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,e),Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(e).apply(this,arguments))}return Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(e,_),Object(_Users_spencercorwin_Documents_Code_Projects_free_code_camp_front_end_libraries_projects_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(e,[{key:"render",value:function(){var _=this.props.formula.map(function(_){return _.toString()}).reduce(function(_,e){return _+e});return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{id:"formula"},_)}}]),e}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(App,null),document.getElementById("calculator-container")),_serviceWorker__WEBPACK_IMPORTED_MODULE_10__.a()},17:function(_,e,r){}},[[11,2,1]]]);
//# sourceMappingURL=main.e55032d5.chunk.js.map