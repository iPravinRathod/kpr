import React from "react";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	componentDidMount() {
		// Fetch data or set up subscriptions
		console.log("Component mounted");
	}

	componentDidUpdate() {
		// Perform side effects after update
		console.log("Component updated");
	}

	componentWillUnmount() {
		// Clean up subscriptions
		console.log("Component will unmount");
	}

	handleClick = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<p>Count: {this.state.count}</p>
				<button onClick={this.handleClick}>Increment</button>
			</div>
		);
	}
}

export default Counter;
