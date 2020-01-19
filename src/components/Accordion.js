import React from "react";
import './accordion.css';
import Dropdown from "./Dropdown";

class Accordion extends React.Component {
    state = {
        opened: false,
        display: false
    }
    onToggle = () => {
        this.setState({ opened: !this.state.opened });
    };
    changePriority = () => {
        console.log('Hey I was clicked', this.state.display)
        this.setState({ display: !this.state.display })
    }
    deleteItem () {
        console.log('Hey I am for delete fn')        
    }
    onFnCallBack = (val, id) => {
        console.log('Hey I have a value ==>', val, id)
    } 
  render() {
    const { id, title } = this.props;
    return (
      <div>
        <dl className='accordion'>
          <dt className={this.state.opened ? 'title is-expanded' : 'title'}>
            <span className='label' onClick={this.onToggle}>
              {title}
            </span>
            <div className='alignRight'>
              <div className='dropDown'>
                <i onClick={this.changePriority}>
                  <span
                    className='iconify iconDetail'
                    data-icon='typcn:social-flickr'
                  ></span>
                </i>

                <div
                  className={
                    this.state.display
                      ? 'display--true dd-case'
                      : 'display--false dd-case'
                  }
                >
                  <div className='dd-item'>
                    <Dropdown id={id} callBack={this.onFnCallBack} pValue="low"/>
                    <Dropdown id={id} callBack={this.onFnCallBack} pValue="high"/>

                  </div>
                </div>
              </div>

              <i onClick={this.deleteItem}>
                <span
                  className='iconify iconDetail'
                  data-icon='typcn:delete'
                ></span>
              </i>
            </div>
          </dt>
          <dd
            className={this.state.opened ? 'content is-expanded' : 'content'}
            onClick={this.onToggle}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              interdum diam. Donec interdum porttitor risus non bibendum.
              Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo
              purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim
              arcu nec elit faucibus condimentum. Donec facilisis consectetur
              enim sit amet varius. Pellentesque justo dui, sodales quis luctus
              a, iaculis eget mauris.
            </p>
          </dd>
        </dl>
      </div>
    )
    
  }
}

export default Accordion