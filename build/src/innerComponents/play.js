import React from 'react';

//prop types
import { playPropTypes } from '../spec/propTypes';

const Play = (props) => {
  let {
    playing,
    handlePause,
    handlePlay,
    handleHoverOver,
    handleHoverOut,
    iconSize,
    renderPlayIcon,
  } = props;

  return (
    <div
      id="play"
      onLoad={handlePlay}
      onClick={playing ? handlePause : handlePlay}
      onMouseOver={(e) => handleHoverOver(e, 'play')}
      onMouseLeave={(e) => handleHoverOut(e, 'play')}
    >
      <img
        className="player-img"
        id="play-icon"
        style={{
          cursor: 'pointer',
          height: iconSize,
        }}
        src={renderPlayIcon()}
      />
    </div>
  );
};

Play.propTypes = playPropTypes;

export default Play;
