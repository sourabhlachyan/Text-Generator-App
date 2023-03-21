import React, {Component} from 'react';

class Select extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChange(e){
    this.setState({value: e.target.value}, function(){
      this.props.onChange(this.state.value);
    });
  }

  render(){
    return (
      <div>
        <select className="form-control" onChange={this.onChange.bind(this)}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    )
  }
}

export default Select;

import React, {Component} from 'react';

class Text extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChange(e){
    this.setState({value: e.target.value}, function(){
      this.props.onChange(this.state.value);
    });
  }

  render(){
    return (
      <div>
        <input className="form-control" type="number" value={this.state.value} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}

export default Text;
