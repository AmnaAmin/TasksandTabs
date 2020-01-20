import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTask } from "../actions"

const Form = ({ addNewTask }) => {
  const task = {
    id : 9,
    title: "Hello task",
    priority: "low"
  };

  return (
    <div>
      <form>
        <div className="inputGroup">
          <label className="--label">Title</label>
          <input className="--input" type="text" name="title"  />
        </div>
        <div className="inputGroup">
          <label className="--label">Description</label>
          <textarea className="--input" type="text" name="description"  />
        </div>
        <div className="inputGroup">
          <button 
            onClick={() => addNewTask(task)}
            className="--input" type="submit" name="submitButton" id="submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = dispatch => ({
  addNewTask: task => dispatch(addNewTask(task)),
})
  
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
