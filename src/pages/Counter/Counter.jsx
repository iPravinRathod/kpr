import React from "react";

class Counter extends React.Component {
	state = { count: 0 };

	handleClick = () => {
		this.setState({ count: this.state.count + 1 });
	};
	render() {
		return <p onClick={this.handleClick}>Count: {this.state.count}</p>;
	}
}

export default Counter;
