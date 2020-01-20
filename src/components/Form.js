import React from "react";
import { connect } from "react-redux";
import { addNewTask } from "../actions"
class Form extends React.Component {
    
    render() {
        let task = {
            id : 9,
            title: "Hello task",
            priority: "low"
        }
        return(
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
                        onClick={() => this.props.addNewTask(task)}
                        className="--input" type="submit" name="submitButton" id="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    // console.log(state)
    return { tasks: state.tasks }
}
  
export default connect(mapStateToProps, {addNewTask})(Form)
