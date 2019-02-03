//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
var articles = [{
	name: "Article 1",
	date: "Jan 1st 2019",
	author: "Cameron Martin",
	content: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge."
}, {
	name: "Article 2",
	date: "Jan 1st 2019",
	author: "Cameron Martin",
	content: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge."
}, {
	name: "Article 3",
	date: "Jan 1st 2019",
	author: "Cameron Martin",
	content: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge."
}];

var Articles = function (_React$Component) {
	_inherits(Articles, _React$Component);

	function Articles(props) {
		_classCallCheck(this, Articles);

		return _possibleConstructorReturn(this, (Articles.__proto__ || Object.getPrototypeOf(Articles)).call(this, props));
	}

	_createClass(Articles, [{
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				{ className: "row col-12" },
				articles.map(function (article) {
					return React.createElement(
						"div",
						null,
						React.createElement(
							"h1",
							{ id: "subtitle" },
							article.name
						),
						React.createElement(
							"h5",
							{ id: "subtitle black" },
							article.date
						),
						React.createElement(
							"h5",
							{ id: "subtitle black" },
							article.author
						),
						React.createElement(
							"p",
							{ className: "" },
							article.content
						),
						React.createElement("hr", null)
					);
				})
			);
		}
	}]);

	return Articles;
}(React.Component);

var domContainer = document.querySelector('#articles');
ReactDOM.render(e(Articles), domContainer);