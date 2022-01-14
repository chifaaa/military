import React from "react";
import PropTypes from "prop-types";

const EmbedVideo = ({ embedId }) => (
    <iframe
      width="100%"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
);

EmbedVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default EmbedVideo;