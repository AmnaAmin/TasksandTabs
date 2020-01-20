import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      data: '',   
    };
  }
  
  selectPriority = ({ target: { id, value } }) => {
    // e.preventDefault()
    this.props.callBack(value, id);
  }

  render() {
    const { id, pValue } = this.props

    return (
      <div className='dd-item'>
        <button 
          value={pValue} 
          id={id} 
          onClick={this.selectPriority}
        >
          {pValue}
        </button>
      </div>
    )
  }
}

export default Dropdown;
