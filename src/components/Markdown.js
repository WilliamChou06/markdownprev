import React, { Component } from 'react';
import marked from 'marked';

class Markdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        let output = e.target.value;
        this.setState({
            value: output
        })
    }

    rawMarkup(value){
        var rawMarkup = marked(value);
        return { __html: rawMarkup};
    }

    render() {
        return (
            <div className="row">
                <div className="col s6">
                    <textarea style={{height: '400px'}} className="materialize-textarea" ref="textarea" value={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
                </div>

                <div style={{height: '430px'}} className="col s6 card-panel">
                    <span style={{float: 'left'}} dangerouslySetInnerHTML={this.rawMarkup(this.state.value)}></span>
                </div>
            </div>
        )
    }
}

export default Markdown;