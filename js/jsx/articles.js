//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

const e = React.createElement;
const articles = [
	{
		name: "Article 1",
		date: "Jan 1st 2019",
		author: "Cameron Martin",
		content: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge.",
	},
	{
		name: "Article 2",
		date: "Jan 1st 2019",
		author: "Cameron Martin",
		content: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge.",
	},
	{
		name: "Article 3",
		date: "Jan 1st 2019",
		author: "Cameron Martin",
		content: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge.",
	}
]

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
						<p className="">{article.content}</p>
						<hr></hr>
					</div>)
				}
			</div>
		)
	}
}

const domContainer = document.querySelector('#articles');
ReactDOM.render(e(Articles), domContainer);
