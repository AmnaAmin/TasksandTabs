import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSong } from '../actions'

// Should be a Functional Component but have no time for this conversion :p 
// Just re-writing the logis ;)

class SongList extends Component {
  renderList() {
    const { songs, selectSong } = this.props;

    return songs.map((song) => {
      return (
        <div key={song.title}>
          <div>{song.title}</div>
          <div>{song.duration}</div>
          <div>
            <button 
              onClick={() => selectSong(song)}
            >
                Select Song
            </button>
          </div>
        </div>
      )
    })
  }

  render() {
      return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = ({ songs }) => ({
  songs,
});

const mapDispatchToProps = dispatch => ({
  selectSong: song => dispatch(selectSong(song)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SongList);
