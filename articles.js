//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;
var articles = [{
	name: "The Unversity of Waterloo needs an Energy Engineering Program",
	date: "Febuary 27th, 2018",
	author: "Cameron Martin",
	program: "Nanotechnology Engineering",
	content: "I'll preface this article by saying that I am in no way an energy expert- I'm somewhat new to the energy community and while I have gained lots of knowledge and met some interesting people from the position I've been in since last semester, I'm always wanting to know more and broaden my horizons within renewable and alternative energy solutions. My problem is, how exactly does one go about this? I could watch countless youtube videos and read Wikipedia for days, but beyond an over-arching grasp of some abstract concepts (which is still useful), I don't think students have...",
	link: "https://medium.com/@uwenergynetwork/the-university-of-waterloo-needs-an-energy-engineering-program-ff3ba6724b15"
}, {
	name: "Soft law for the energy industry",
	date: "Febuary 26th, 2018",
	author: "Aidan O'Gorman",
	program: "Chemical Engineering",
	content: "Earlier last summer, when America announced its intention to withdraw from the Paris Agreement, many tried to rationalize what it meant for their country, the world, and the integrity of the agreement itself. Largely unaddressed in this discussion was the impact of various mechanisms that are created as a result of agreements such as this one and other forms of soft law. While many hard laws can often create further issues, division and resistance to implementation, soft law is a necessary tool to facilitate the transition towards more sustainable energy sources....",
	link: "https://medium.com/@uwenergynetwork/soft-law-for-the-energy-industry-126169cc25c1"
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
							{ id: "subtitle black" },
							article.program
						),
						React.createElement(
							"p",
							{ className: "" },
							article.content
						),
						React.createElement(
							"a",
							{ href: article.link },
							"Read Full Article"
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