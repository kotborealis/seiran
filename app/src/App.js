import React, {Component} from 'react';
import './App.css';
import Seiran from 'seiran';

class App extends Component {
    state = {
        chunk: 'x = 10\n' +
               'i = 0\n' +
               '\n' +
               'while i<=x do\n' +
               '  local x = i*2    -- local to the while body\n' +
               '  print(x)         --> 2, 4, 6, 8, ...\n' +
               '  i = i + 1\n' +
               'end\n' +
               '\n' +
               'print(sqrt(x))',
        log: []
    };

    run = (e) => {
        e.preventDefault();

        this.setState({log: []});

        Seiran(this.state.chunk, {writer: this.log});
    };

    log = (...args) => {
        this.setState(({log}) => ({
            log: [...log, args]
        }));
    };

    render() {
        const {chunk} = this.state;
        return (
            <div className="App">
                <form onSubmit={this.run}>
                    <textarea value={chunk}
                              onChange={({target: {value}}) =>
                                  this.setState({chunk: value})}
                    />
                    <input type="submit" value="Submit"/>
                    <pre>
                        {this.state.log.map(l => (Array.isArray(l) ? l.join(' ') : l) + '\n')}
                    </pre>
                </form>
            </div>
        );
    }
}

export default App;
