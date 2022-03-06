import React from "react";
import "./MyFC.scss";

type MyFCProps = {
  text: string;
  num: number;
};

export const MyFC: React.FC<MyFCProps> = ({ text, num }) => (
    <div className="MyFC">
      <p>
        text: {text} num: {num}
      </p>
    </div>
  );
