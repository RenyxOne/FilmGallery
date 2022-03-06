import React from "react";
import "./MyCwithState.scss";

type MyCwithStateProps = {
  text: string;
};
type MyCwithStateState = {
  num: number;
};

export class MyCwithState extends React.Component<
  MyCwithStateProps,
  MyCwithStateState
> {
  constructor(props: MyCwithStateProps) {
    super(props);
    this.state = {
      num: 0
    };
  }

  inc = () => {
    console.log("plus");

    this.setState({ num: this.state.num + 1 });
  };

  dec = () => {
    console.log("minus");
    this.setState((current) => ({
      num: current.num - 1
    }));
  };

  render() {
    return (
      <div className="my-cwithstate">
        <p>text: {this.props.text}</p>
        <div>
          <span className="myc-withstate__counter">
            Counter: {this.state.num}
          </span>
          <button onClick={this.inc}>inc</button>
          <button onClick={this.dec}>dec</button>
        </div>
      </div>
    );
  }
}
