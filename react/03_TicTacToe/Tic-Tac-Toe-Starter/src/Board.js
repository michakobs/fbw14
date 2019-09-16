import React from 'react';
import Square from './Square';



class Board extends React.Component {

    constructor(props){
      super(props);
      this.playerName = 'X';
      this.playStatus = ['','','','','','','','',''];
      this.playCounter = [0,0,0,0,0,0,0,0,0];
      this.playWon = '';
      this.moveCounter = 0;
      this.history = [[this.playerName,this.playStatus,this.playCounter,this.playWon,this.moveCounter,this.state]];
      this.state = {status: `Player begins: X`}
    }

    gameEngine(id){
      this.moveCounter++;
      console.log(id);
      this.playStatus[id] = this.playerName;
      console.log(this.playStatus);
      (this.playStatus[id] === "X")? this.playCounter[id] = 1 : this.playCounter[id] = -1;
      console.log(this.playCounter);
      
      let calc = [0,0,0,0,0,0,0,0]
      calc[0] = this.playCounter[0]+this.playCounter[1]+this.playCounter[2];
      calc[1] = this.playCounter[3]+this.playCounter[4]+this.playCounter[5];
      calc[2] = this.playCounter[6]+this.playCounter[7]+this.playCounter[8];
      calc[3] = this.playCounter[0]+this.playCounter[3]+this.playCounter[6];
      calc[4] = this.playCounter[1]+this.playCounter[4]+this.playCounter[7];
      calc[5] = this.playCounter[2]+this.playCounter[5]+this.playCounter[8];
      calc[6] = this.playCounter[0]+this.playCounter[4]+this.playCounter[8];
      calc[7] = this.playCounter[2]+this.playCounter[4]+this.playCounter[6];
      console.log(calc);

      for(let x=0; x<calc.length; x++){
        if(calc[x] === 3 || calc[x] === -3){
          this.playWon = this.playerName;
        } else if (this.moveCounter === 9){
          this.playWon = 'NOBODY'
        }
      }


    }

    updateStatus(event){
      if (this.playStatus[event.target.id] !== '' || this.playWon !== ''){
        return
      }else{
          this.gameEngine(event.target.id);
      }  
      

      (this.playerName === 'X')? this.playerName = 'O': this.playerName = 'X';
      let newString = `Next player: ${this.playerName}`;
      if(this.playWon !== ''){
        newString = `Player ${this.playWon} won!!!`
      }

      console.log(newString);
      this.history.push([this.playerName,this.playStatus,this.playCounter,this.playWon,this.moveCounter,this.state]);
      console.log(this.history);
      this.setState({status: newString});
    }

    changeGameHistory(){
      this.props.onChangeHistory(this.state.history);
    }

    renderSquare(i) {
      return <Square 
        idname={i} 
        changeStatus={this.updateStatus.bind(this)} 
        name={this.playerName} 
        playStatus = {this.playStatus[i]}
        />;
    };

    render() {
      return (
        <React.Fragment>
          <div className="status h2 text-center">{this.state.status}</div>
          <div className="board" onClick = {this.changeGameHistory.bind(this)}>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
          </div>
        </React.Fragment>
      );
    }
  }

export default Board;