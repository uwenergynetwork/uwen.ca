//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var NavBar = function (_React$Component) {
	_inherits(NavBar, _React$Component);

	function NavBar(props) {
		_classCallCheck(this, NavBar);

		var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

		_this.state = {
			page: props.page
		};
		return _this;
	}

	_createClass(NavBar, [{
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				null,
				React.createElement(
					"nav",
					{ id: "navbar-custom", className: "col-xl-6 col-lg-7 col-md-9 mx-auto navbar navbar-expand-sm" },
					React.createElement(
						"div",
						{ className: "collapse navbar-collapse", id: "collapsibleNavbar" },
						React.createElement(
							"ul",
							{ className: "col-12 d-flex justify-content-center navbar-nav" },
							React.createElement(
								"li",
								{ className: "nav-item text-center" },
								React.createElement(
									"a",
									{ className: "pl-2 pr-2 navbar-link " + ((this.state.page == "index.html" || this.state.page == "") ? "current-page" : ""), href: "index.html" },
									"Home"
								)
							),
							React.createElement(
								"li",
								{ className: "nav-item text-center" },
								React.createElement(
									"a",
									{ className: "pl-2 pr-2 navbar-link " + (this.state.page == "about.html" ? "current-page" : ""), href: "about.html" },
									"About"
								)
							),
							React.createElement(
								"li",
								{ className: "nav-item text-center" },
								React.createElement(
									"a",
									{ className: "pl-2 pr-2 navbar-link " + (this.state.page == "events.html" ? "current-page" : ""), href: "events.html" },
									"Events"
								)
							),
							React.createElement(
								"li",
								{ className: "nav-item text-center" },
								React.createElement(
									"a",
									{ className: "pl-2 pr-2 navbar-link " + (this.state.page == "hacks.html" ? "current-page" : ""), href: "hacks.html" },
									"uwEnergyHacks"
								)
							),
							React.createElement(
								"li",
								{ className: "nav-item text-center" },
								React.createElement(
									"a",
									{ className: "pl-2 pr-2 navbar-link " + (this.state.page == "articles.html" ? "current-page" : ""), href: "articles.html" },
									"Articles"
								)
							)
						)
					),
					React.createElement(
						"button",
						{ className: "navbar-toggler col-12 p-0 m-0", "data-toggle": "collapse", "data-target": "#collapsibleNavbar" },
						React.createElement(
							"svg",
							{ width: "3vh", height: "3vh", className: "three-bars", viewBox: "0 0 12 16", version: "1.1", "aria-hidden": "true" },
							React.createElement("path", { d: "M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" })
						)
					)
				)
			);
		}
	}]);

	return NavBar;
}(React.Component);

var domContainer = document.querySelector('#navbar');
ReactDOM.render(e(NavBar, { page: window.location.pathname.split("/").pop() }), domContainer);
