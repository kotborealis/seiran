import React, {Component} from 'react';
import './App.css';
import Seiran from 'seiran';
import AceEditor from 'react-ace';

class App extends Component {
    state = {
        chunk: 'for i = 1, 100 do\n' +
               '    if i % 15 == 0 then\n' +
               '        print("FizzBuzz")\n' +
               '    elseif i % 3 == 0 then\n' +
               '        print("Fizz")\n' +
               '    elseif i % 5 == 0 then\n' +
               '        print("Buzz")\n' +
               '    else\n' +
               '        print(i)\n' +
               '    end\n' +
               'end',
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

    componentDidMount() {
        this.run({preventDefault: () => 0});
    }

    render() {
        const {chunk} = this.state;
        return (
            <div className="App">
                <form onSubmit={this.run}>
                    <AceEditor
                        value={chunk}
                        width="100%"
                        height="500px"
                        mode="lua"
                        theme="github"
                        onChange={value => this.setState({chunk: value})}
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
