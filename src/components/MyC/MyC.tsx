import React from 'react';
import './MyC.scss';

type MyCProps = {
  text: string;
  num: number;
};

export class MyC extends React.Component<MyCProps> {
  render() {
    return (
      <div className="my-c">
        <p>
          text: {this.props.text} num: {this.props.num}
        </p>
      </div>
    );
  }
}
