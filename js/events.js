//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Events = function (_React$Component) {
	_inherits(Events, _React$Component);

	function Events(props) {
		_classCallCheck(this, Events);

		var _this = _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this, props));

		_this.state = {
			events: []
		};
		return _this;
	}

	_createClass(Events, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTnOtXBodlDg_CylMgtqzJzgPKip8rhmpf9JAxAa9cHRUIvolKTSxU7nMeN4F5qZDIaGXVqmV_SYLUR/pub?output=csv", {
				download: true,
				complete: function (results) {
					console.log(results);
					var newEvents = results.data.map(function (item) {
						return {
							name: item[0],
							description: item[1],
							img: item[2]
						};
					});
					this.setState({
						events: newEvents
					});
				}.bind(this)
			});
		}
	}, {
		key: "render",
		value: function render() {
			console.log(this.state);
			return React.createElement(
				"div",
				{ className: "row col-12 m-0" },
				this.state.events.map(function (event) {
					return React.createElement(
						"div",
						null,
						React.createElement(
							"h1",
							{ id: "subtitle" },
							event.name
						),
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"p",
								{ className: "col-lg-6 col-md-12" },
								event.description
							),
							React.createElement(
								"div",
								{ className: "col-lg-6 col-md-8 mx-auto" },
								React.createElement("img", { className: "col-12 img-responsive events-image", src: "img/events/" + event.img })
							)
						),
						React.createElement("hr", null)
					);
				})
			);
		}
	}]);

	return Events;
}(React.Component);

var domContainer = document.querySelector('#events');
ReactDOM.render(e(Events), domContainer);