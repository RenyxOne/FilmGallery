import React from "react";

type MySmartImageProps = {
  src: string;
  className: string;
  alt: string;
}


// export const MySmartImage: React.FC<MySmartImageProps> = ({src, className,alt}) => {
//   const [state, setState] = useState({img: src});
//   console.log(`work  ${src}  |||||||  ${state.img}`);
//   const set404img = () => {
//     setState({img: img404});
//   }
//
//   return <img
//     className={className}
//     src={state.img}
//     alt={alt}
//     onError={set404img}
//   />
// }

export class MySmartImage extends React.Component<MySmartImageProps, {wasError: boolean}> {
  constructor(props: MySmartImageProps) {
    super(props);
    this.state = {wasError: false};
  }

  static img404 = 'https://as1.ftcdn.net/v2/jpg/04/48/35/42/1000_F_448354225_HyekrXV3W7gFNaFjEVRY3XpWfGZsWeRc.jpg';

  set404img = () => {
     this.setState({wasError: true});
   }

   componentDidUpdate(prevProps: Readonly<MySmartImageProps>, prevState: Readonly<{ wasError: boolean }>, snapshot?: any) {
    if (prevProps.src !== this.props.src) {
      this.setState({wasError: false});
    }
   }

  render = () => <img
    className={this.props.className}
    src={this.state.wasError ? MySmartImage.img404 : this.props.src}
    alt={this.props.alt}
    onError={this.set404img}
  />

}

