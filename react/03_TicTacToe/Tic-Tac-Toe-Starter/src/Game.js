import React from 'react';
import Board from './Board';

class Game extends React.Component {

  constructor(){
    this.state={
      stepHistory: []
    }
  }

  onChangeHistory(){
    this.setState({
      stepHistory: history
    })
  }


    render() {
      return (
        <article className="game container mt-5">
          <section className="row">
            <div className="col-sm-8 game-board">
              <Board changeHistory={this.onChangeHistory.bind(this)}/>
            </div>
            <div className="col-sm-4 game-info">
              <p className="h2">{/* status */}</p>
              <ul className="nav nav-pills flex-column">
                {/* TODO */}
              </ul>
            </div>
          </section>
        </article>
      );
    }
  }

  export default Game;