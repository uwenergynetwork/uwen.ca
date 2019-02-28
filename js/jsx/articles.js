//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

const e = React.createElement;
var articles = [
	{
		name: "The Unversity of Waterloo needs an Energy Engineering Program",
		date: "Febuary 27th, 2018",
		author: "Cameron Martin",
		program: "Nanotechnology Engineering",
		content: "I'll preface this article by saying that I am in no way an energy expert- I'm somewhat new to the energy community and while I have gained lots of knowledge and met some interesting people from the position I've been in since last semester, I'm always wanting to know more and broaden my horizons within renewable and alternative energy solutions. My problem is, how exactly does one go about this? I could watch countless youtube videos and read Wikipedia for days, but beyond an over-arching grasp of some abstract concepts (which is still useful), I don't think students have...",
		link: "https://medium.com/@uwenergynetwork/the-university-of-waterloo-needs-an-energy-engineering-program-ff3ba6724b15"
	},
	{
		name: "Soft law for the energy industry",
		date: "Febuary 26th, 2018",
		author: "Aidan O'Gorman",
		program: "Chemical Engineering",
		content: "Earlier last summer, when America announced its intention to withdraw from the Paris Agreement, many tried to rationalize what it meant for their country, the world, and the integrity of the agreement itself. Largely unaddressed in this discussion was the impact of various mechanisms that are created as a result of agreements such as this one and other forms of soft law. While many hard laws can often create further issues, division and resistance to implementation, soft law is a necessary tool to facilitate the transition towards more sustainable energy sources....",
		link: "https://medium.com/@uwenergynetwork/soft-law-for-the-energy-industry-126169cc25c1"
	}
];

class Articles extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="row col-12">
				{ 
					articles.map((article) => 
					<div>
						<h1 id="subtitle">{article.name}</h1>
						<h5 id="subtitle black">{article.date}</h5>
						<h5 id="subtitle black">{article.author}</h5>
						<p id="subtitle black">{article.program}</p>
						<p className="">{article.content}</p>
						<a href={article.link}>Read Full Article</a>
						<hr></hr>
					</div>)
				}
			</div>
		)
	}
}

const domContainer = document.querySelector('#articles');
ReactDOM.render(e(Articles), domContainer);
