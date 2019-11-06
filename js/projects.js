//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
var projects = [{
	name: "EnergyHacks",
	date: "Summer 2020",
	about: "Hosted at the University of Waterloo, EnergyHacks is a 24-hour hackathon that takes place annually during the summer. Attendance is estimated to comprise of over 400 university students from a variety of different disciplines. The hackathon is focused around a series of energy-related problems that exist in the industry today and allows participants to come up with unique solutions within the span of a day.",
	buttonLink: "https://hacks.uwen.ca"
}];

var Projects = function (_React$Component) {
	_inherits(Projects, _React$Component);

	function Projects(props) {
		_classCallCheck(this, Projects);

		return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));
	}

	_createClass(Projects, [{
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				{ className: "row col-12" },
				projects.map(function (project) {
					return React.createElement(
						"div",
						null,
						React.createElement(
							"h1",
							{ id: "subtitle" },
							project.name
						),
						React.createElement(
							"h5",
							{ id: "subtitle black" },
							project.date
						),
						React.createElement(
							"p",
							null,
							project.about
						),
						React.createElement(
							"a",
							{ href: "" + project.buttonLink },
							React.createElement(
								"button",
								{ type: "button", "class": "apply-button button col-lg-4 col-sm-5 col-xs-3 p-2" },
								"More"
							)
						),
						React.createElement("hr", null)
					);
				})
			);
		}
	}]);

	return Projects;
}(React.Component);

var domContainer = document.querySelector('#projects');
ReactDOM.render(e(Projects), domContainer);