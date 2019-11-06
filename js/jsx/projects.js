//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

const e = React.createElement;
var projects = [
{
name: "EnergyHacks",
date: "Summer 2020",
about: `Hosted at the University of Waterloo, EnergyHacks is a 24-hour hackathon that takes place annually during the summer. Attendance is estimated to comprise of over 400 university students from a variety of different disciplines. The hackathon is focused around a series of energy-related problems that exist in the industry today and allows participants to come up with unique solutions within the span of a day.`,
buttonLink: `https://hacks.uwen.ca`
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
		<p>{project.about}</p>
		<a href={`${project.buttonLink}`}><button type="button" class="apply-button button col-lg-4 col-sm-5 col-xs-3 p-2">More</button></a>
		<hr></hr>
	</div>)
	}
</div>
)
}
}

const domContainer = document.querySelector('#projects');
ReactDOM.render(e(Projects), domContainer);