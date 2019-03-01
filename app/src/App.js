import React, {Component, createRef} from 'react';
import styles from './App.module.css';
import Seiran from 'seiran';

class App extends Component {
    state = {
        chunk: '',
        log: []
    };

    constructor(...args) {
        super(...args);
        this.lua = new Seiran({print_fn: this.log});

        this.consoleEl = createRef();
    }

    componentDidMount() {
        this.log("-- Welcome to Lua-like language interpreter REPL");
    }

    run = () => {
        const {chunk} = this.state;

        this.setState({chunk: ''});

        this.log(">", chunk);
        try{
            const stat = `print(${chunk})`;
            const tree = this.lua.compile(stat, true);
            this.lua.evaluate(stat, tree);
        }
        catch(e){
            try{
                this.lua.evaluate(chunk);
            }
            catch(e){
                this.log(e);
            }
        }
    };

    log = (...args) => {
        this.setState(({log}) => ({
            log: [...log, args.map(this.format)]
        }), () => {
            const el = this.consoleEl.current;
            el.scrollTo(0, el.scrollHeight);
        });
    };

    format = (val) => {
        if(val === undefined)
            return `undefined`;
        if(val instanceof Map)
            return `Map(${val.size}) {${[...val.entries()].map(([k,v]) => `${this.format(k)} => ${this.format(v)}`).join(', ')}}`;
        if(typeof val === "function")
            return `function`;
        else
            return val;
    };

    render() {
        const {chunk, log} = this.state;

        return (
            <div className={styles.App}>
                <code className={styles.console}
                      ref={this.consoleEl}>
                    {log
                        .map(entry => entry.join(' '))
                        .map(entry => [<pre className={styles.console_entry}>{entry}</pre>])
                    }
                </code>

                <div className={styles['input-container']}>
                    <label className={styles.prompt}>></label>
                    <textarea className={styles.input}
                              rows="1"
                              placeholder="Type some Lua here..."
                              value={chunk}
                              onChange={({target: {value}}) => this.setState({chunk: value})}
                              onKeyDown={e => {
                                  const {keyCode, shiftKey} = e;
                                  if(keyCode === 13 && !shiftKey){
                                      e.preventDefault();
                                      this.run();
                                  }
                              }}
                    />
                </div>
            </div>
        );
    }
}

export default App;
