import React from 'react';





class Square extends React.Component {
    


    render(props) {
      return (
        <button className="square"  onClick = {this.props.changeStatus} id={this.props.idname}>
          {this.props.playStatus}
        </button>
      );
    }
  }




  export default Square;