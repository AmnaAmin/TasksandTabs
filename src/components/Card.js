import React from "react";
import Accordion from "./Accordion";
import Form from "./Form";
import { connect } from "react-redux";

class Card extends React.Component {
    render() {
        let { form, title, info, tasks } = this.props
        return (
          <div className='card'>
            <div className='card_header'>
              {form ? <Form /> : <p className='--title'> {title} </p>}
            </div>
            <div className='card_content'>
              {tasks.map((task,index) => task.priority === info ? <Accordion key={index} id={task.id} title={task.title} /> : '')}
            </div>
            <div className='card_footer'>
              <p>Some text to display</p>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
  // console.log(state)
  return { tasks: state.tasks }
}

export default connect(mapStateToProps)(Card)