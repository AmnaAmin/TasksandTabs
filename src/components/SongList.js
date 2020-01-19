import React from 'react';
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div key={song.title}>
                    <div>{song.title}</div>
                    <div>{song.duration}</div>
                    <div>
                        <button 
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select Song
                        </button>
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log(this.props)
        return <div> {this.renderList()} </div>
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { songs: state.songs}
}

export default  connect(mapStateToProps, {selectSong})(SongList)