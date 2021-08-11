import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      grid: [[{ value: 1 }, { value: 3 }], [{ value: 2 }, { value: 4 }]],
      name: '大哥'
    };
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>展示信息</p>

        <ReactDataSheet
          data={this.state.grid}
          valueRenderer={cell => cell.value}
          onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row]);
            changes.forEach(({ cell, row, col, value }) => {
              grid[row][col] = { ...grid[row][col], value };
            });
            this.setState({ grid });
          }}
        />
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
