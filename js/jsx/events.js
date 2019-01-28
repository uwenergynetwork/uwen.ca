//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

const e = React.createElement;
const events = [
	{
		name: "Event 1",
		description: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge.",
		img: "future-of-energy.jpeg"
	},
	{
		name: "Event 2",
		description: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge.",
		img: "future-of-energy.jpeg"
	},
	{
		name: "Event 3",
		description: "The University of Waterloo Energy Network is a group of students bound together by a shared belief in a sustainable approach to the Energy Industry and Climate Change. UWEN offers the chance for like-minded students to attend educational seminars and panel discussions, participate in exciting competitions and network with industry professionals. We endeavor to provide a platform for all points of view with the aim of stimulating discussion and broadening knowledge.",
		img: "future-of-energy.jpeg"
	}
]
class Events extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="row col-12">
				{ 
					events.map((event) => 
					<div>
						<h1 id="subtitle">{event.name}</h1>
						<div className="row">
							<p className="col-lg-6 col-md-12">{event.description}</p>
							<div className="col-lg-6 col-md-8 mx-auto">
								<img className="col-12 img-responsive events-image" src={"img/events/" + event.img}/>
							</div>
						</div>
						<hr></hr>
					</div>)
				}
			</div>
		)
	}
}

const domContainer = document.querySelector('#events');
ReactDOM.render(e(Events), domContainer);
