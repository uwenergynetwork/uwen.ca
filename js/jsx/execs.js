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
	},
	{
		name: "Gloria Li",
		position: "??",
		program: "Accounting and Financial Management",
		img: "gloria.png"
	},
	{
		name: "Akshar Goyal",
		position: "??",
		program: "Computer Science",
		img: "akshar.png"
	},
	{
		name: "Maya Gupta",
		position: "VP Events",
		program: "Management Engineering",
		img: "maya.png"
	},
	{
		name: "Guy Brodsky",
		position: "??",
		program: "??",
		img: "headshot.png"
	},
	{
		name: "Matthew Teelucksingh",
		position: "??",
		program: "??",
		img: "headshot.png"
	},
]

class Execs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="row col-12">
				{ 
					execs.map((exec) => 
					<div className="col-lg-4 col-md-6 col-sm-10 text-center p-2 mb-3">
						<img className="col-12 headshot" src={"img/headshots/" + exec.img} alt="img/headshots/headshot.png"/>
						<h3 className="p-3">{exec.name}</h3>
						<h4>{exec.position}</h4>
						<h4>{exec.program}</h4>
					</div>)
				}
			</div>
		)
	}
}

const domContainer = document.querySelector('#execs');
ReactDOM.render(e(Execs), domContainer);
