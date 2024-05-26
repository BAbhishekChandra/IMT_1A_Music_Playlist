import {IoMdTrash} from 'react-icons/io'

import './index.css'

const SongsList = props => {
  const {trackDetails, deleteTrackItem} = props
  // console.log(trackDetails)
  const {id, imageUrl, name, genre, duration} = trackDetails
  // console.log(id, imageUrl, name, genre, duration)

  const onDeleteTrack = () => {
    deleteTrackItem(id)
  }

  return (
    <li className="tracks-container">
      <div className="name-image-container">
        <img className="track-image" src={imageUrl} alt="track" />
        <div className="name-genre-container">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="track-duration">{duration}</p>
        <button
          type="button"
          className="track-delete-bin"
          data-testid="delete"
          onClick={onDeleteTrack}
          aria-label={`Delete ${name}`}
        >
          <IoMdTrash className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default SongsList
