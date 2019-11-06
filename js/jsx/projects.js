//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

const e = React.createElement;
var projects = [
{
name: "EnergyHacks 2019",
date: "June 1-2, 2019",
about: `EnergyHacks is different than your regular, run-of-the-mill hackathon. This hackathon is focused solely around
a series of energy-related problems that exist in our world today, how will you solve them?`
},
];

class Projects extends React.Component {
constructor(props) {
super(props);
}

render() {

return (
<div className="row col-12">
	{
	projects.map((project) =>
	<div>
		<h1 id="subtitle">{project.name}</h1>
		<h5 id="subtitle black">{project.date}</h5>
		<p className="">{project.about}</p>
		<hr>
		</hr>
	</div>)
	}
</div>
)
}
}

const domContainer = document.querySelector('#projects');
ReactDOM.render(e(Projects), domContainer);