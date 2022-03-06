import React from "react";
import "./MyPC.scss";

type MyPCProps = {
  text: string;
  num: number;
};

export class MyPC extends React.PureComponent<MyPCProps> {
  render() {
    return (
      <div className="my-pc">
        <p>
          text: {this.props.text} num: {this.props.num}
        </p>
      </div>
    );
  }
}
