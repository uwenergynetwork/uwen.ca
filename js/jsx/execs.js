//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

const e = React.createElement;
const execs = [
	{
		name: "Cameron Martin",
		position: "President",
		program: "Nanotechnology Engineering",
		img: "cameron.png"
	},
	{
		name: "Aidan O'Gorman",
		position: "VP External",
		program: "Chemical Engineering",
		img: "aidan.png"
	},
	{
		name: "Jamie Pinheiro",
		position: "VP Tech",
		program: "Computer Science",
		img: "jamie.png"
	},
	{
		name: "Emma Lozkins",
		position: "VP Tech",
		program: "Computer Engineering",
		img: "emma.png"
	},,
	{
		name: "Maya Gupta",
		position: "VP Events",
		program: "Management Engineering",
		img: "maya.png"
	},
	{
		name: "Guy Brodsky",
		position: "VP Finance/Sponsorship",
		program: "Environment, Resources and Sustainability",
		img: "guy.png"
	},
	{
		name: "Matthew Teelucksingh",
		position: "VP Operations",
		program: "Environment, Resources and Sustainability",
		img: "headshot.png"
	},
	{
		name: "Akshar Goyal",
		position: "Events Outreach Lead",
		program: "Computer Science",
		img: "akshar.png"
	},
	{
		name: "Gloria Li",
		position: "Events Outreach Lead",
		program: "Accounting and Financial Management",
		img: "gloria.png"
	},
]

class Execs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="row col-12 m-0">
				{ 
					execs.map((exec) => 
					<div className="col-lg-4 col-md-6 col-sm-10 text-center p-2 mb-3 mx-auto">
						<img className="col-12 headshot" src={"img/headshots/" + exec.img} alt="img/headshots/headshot.png"/>
						<h3 className="p-3">{exec.name}</h3>
						<h4>{exec.position}</h4>
						<h5>{exec.program}</h5>
					</div>)
				}
			</div>
		)
	}
}

const domContainer = document.querySelector('#execs');
ReactDOM.render(e(Execs), domContainer);
