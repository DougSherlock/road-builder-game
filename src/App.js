import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [board, setBoard] = useState(
  [
    [
      {type:'City', id:0}, 
      { type:'Road', closed:0, cities:[0, 1]}, 
      {type:'City', id:1}, 
      { type:'Road', closed:0, cities:[1, 2]}, 
      {type:'City', id:2}],
    [
      {type:'Road', closed:0, cities:[0, 3] }, 
      { type:'Empty' }, 
      {type:'Road', closed:0, cities:[1, 4]}, 
      { type:'Empty' }, 
      {type:'Road', closed:0, cities:[2, 5]}],
    [
      {type:'City', id:3}, 
      { type:'Road', closed:0, cities:[3, 4]}, 
      {type:'City', id:4}, 
      { type:'Road', closed:0, cities:[4, 5]}, 
      {type:'City', id:5}],
    [
      {type:'Road', closed:0, cities:[3, 6] }, 
      { type:'Empty' }, 
      {type:'Road', closed:0, cities:[4, 7]}, 
      { type:'Empty' }, 
      {type:'Road', closed:0, cities:[5, 8]}],
    [
      {type:'City', id:6}, 
      { type:'Road', closed:0, cities:[6, 7]}, 
      {type:'City', id:7}, 
      { type:'Road', closed:0, cities:[7, 8]}, 
      {type:'City', id:8}
    ]
  ])

  const driveRoads = () => {
    alert('driveRoads - this function is not yet implemented');
  }
  const onRoadClicked = (e) => {
    let boardCopy = JSON.parse(JSON.stringify(board));
    const row = e.target.getAttribute('row');
    if (row === undefined || row >= boardCopy.length) {
      alert('Row error: ' + row);
      return;
    }
    const col = e.target.getAttribute('col');
    if (col === undefined || col >= boardCopy[row].length) {
      alert('Col error: ' + col);
      return;
    }
    boardCopy[row][col].closed = !boardCopy[row][col].closed;
    setBoard(boardCopy);
  }
  return (
    <div className="App">
      <div>
        <h1>Road Builder Game </h1>        
        <p>by Doug Sherlock</p>
        <p>[Note that this game is still in development.]</p>
      </div>
      <div>
      {/* <table className="Board">
        <tr><td className="City">0</td><td className="Road">0:1</td><td className="City">1</td><td className="Road">1:2</td><td className="City">2</td></tr>
        <tr><td className="Road">0:3</td><td></td><td className="Road">1:4</td><td></td><td className="Road">2:5</td></tr>
        <tr><td className="City">3</td><td className="Road">3:4</td><td className="City">4</td><td className="Road">4:5</td><td className="City">5</td></tr>
        <tr><td className="Road">3:6</td><td></td><td className="Road">4:7</td><td></td><td className="Road">5:8</td></tr>
        <tr><td className="City">6</td><td className="Road">6:7</td><td className="City">7</td><td className="Road">7:8</td><td className="City">8</td></tr>
      </table> */}
      <table className="Board">
        {
          board.map((row, rowIndex) => {
            return <tr>
              {
                row.map((item, colIndex) => {
                  switch (item.type) 
                  {
                    case 'City':
                      return <td className={item.type} row={rowIndex} col={colIndex} id={rowIndex+":"+colIndex}><span className="glyphicon glyphicon-home"></span> {item.id}</td>
                    case 'Road':
                      const cls = item.closed ? item.type + ' closed ' : item.type;                      
                      return <td className={cls} 
                        row={rowIndex} 
                        col={colIndex} 
                        id={rowIndex+":"+colIndex} 
                        onClick={onRoadClicked}>
                          <span className="glyphicon glyphicon-road"></span> {item.cities[0]+":"+item.cities[1]}
                      </td>
                    default:
                      return <td className={item.type} row={rowIndex} col={colIndex} id={rowIndex+":"+colIndex} ></td>
                    }
                })
              }
              </tr>
          })
        }
      </table>
      </div>
      <div>
      <p><strong>Click on a road to mark it as broken or closed.</strong></p>
      </div>
      <div>
      <p><strong>Click the 'Drive the Roads' button to determine if there are enough roads to connect all the cities.</strong></p>
      <button onClick={driveRoads}>Drive the Roads</button>
      </div>
    </div>
  );
}

export default App;
