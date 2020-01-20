import React, { Component } from "react";
import Accordion from "./Accordion";
import Form from "./Form";
import { connect } from "react-redux";
import { fetchTaskList } from "../actions"

class Card extends Component {
  componentDidMount() {
    this.props.fetchTaskList()
  }

  render() {
    const { form, title, info, tasks } = this.props

    console.log('tasks', tasks)
    // const modifiedTasks = tasks.map((task, index) =>
    //   task.priority === info ? 
    //   <Accordion key={index} id={task.id} title={task.title} /> 
    //   : ''
    // );

    const content = form ? <Form /> : <p className='--title'> {title} </p>

    return (
      <div className='card'>
        <div className='card_header'>
          {content}
        </div>
        <div className='card_content'>
          {/* {modifiedTasks} */}
        </div>
        <div className='card_footer'>
          <p>Some text to display</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = dispatch => ({
  fetchTaskList: () => dispatch(fetchTaskList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
