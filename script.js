var Counter = React.createClass({
	getInitialState: function () {
		return {
			counter: 0
		};
	},


	increment: function () {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function () {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	componentWillMount: function() {
		console.log('To jest metoda componentWillMount, używana zaraz przed render');
	},

	shouldComponentUpdate: function() {
		if (true) {
    	return console.log('To metoda, która sprawdza, czy komponent powinien zostać zaktualizowany');
		};
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
			React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, 'Dodaj'),
		);
	},

	componentDidMount: function() {
		console.log('To metoda componentDidMount');
	},

	componentWillUnmount: function() {
		console.log('Ta metoda zostanie wykorzystana, kiedy jakiś element należy odczepić od DOM');
	}
});


var element = React.createElement('div', {},
		React.createElement(Counter),
		React.createElement(Counter),
		React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById("app"));
