import React from "react";

class Form extends React.Component {
    render() {
        return(
            <div>
                <form onSubmit={this.submit}>
                    <div className="inputGroup">
                        <label className="--label">Title</label>
                        <input className="--input" type="text" name="title"  />
                    </div>
                    <div className="inputGroup">
                        <label className="--label">Description</label>
                        <textarea className="--input" type="text" name="description"  />
                    </div>
                    <div className="inputGroup">
                        <button className="--input" type="submit" name="submitButton" id="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
