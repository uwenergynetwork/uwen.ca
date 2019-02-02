//use to convert jsx to js files
//npx babel --watch js/jsx --out-dir js --presets react-app/prod

'use strict';

const e = React.createElement;

class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			events: []
		}
	}

	componentDidMount() {
		Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTnOtXBodlDg_CylMgtqzJzgPKip8rhmpf9JAxAa9cHRUIvolKTSxU7nMeN4F5qZDIaGXVqmV_SYLUR/pub?output=csv", {
			download: true,
			complete: function(results) {
				console.log(results)
				var newEvents = results.data.map(function(item) {
					return {
						name: item[0],
						description: item[1],
						img: item[2],
					}
				});
				this.setState({
					events: newEvents
				});
			}.bind(this)
		});
	}

	render() {
		console.log(this.state)
		return (
			<div className="row col-12">
				{ 
					this.state.events.map((event) => 
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
