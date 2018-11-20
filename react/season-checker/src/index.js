import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";


// 함수형을 클래스형으로 옮긴형태
class App extends React.Component {

  // 처음에 무조건 시작
  constructor(props) {

    super(props); //Component를 그대로 상속받기위함.

    //생성된 instance의 state
    this.state = {
      lat: null //아직 모르지만 나중에 들어올것이다.
    };
  }

  //랜더전에 실행함
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    )
  }

  render() {
    // 거부
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    
    // 허용
    if (!this.state.errorMessage && this.state.lat) {
      return (<SeasonDisplay latitude={this.state.lat} />);
    }

    // 허용 거부 안한상태
    return <div>Loading....</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
