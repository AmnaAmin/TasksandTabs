import React from "react";

class Dropdown extends React.Component {
  state = {
      val: '',
      data: ''
  }
  
  selectPriority = e => {
    let v = e.target.value
    let id = e.target.id
    e.preventDefault()
    this.props.callBack(v, id)
  }

  render() {
    let { id, pValue } = this.props

    return (
      <div className='dd-item'>
        <button value={pValue} id={id} onClick={this.selectPriority}>
          {pValue}
        </button>
      </div>
    )
  }
}

export default Dropdown