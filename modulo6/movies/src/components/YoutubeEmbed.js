import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const VideoContainer = styled.div`
padding-left: 80px;
@media(max-width: 800px) {
    padding-left: 0px;
    iframe{
  height: 100%;
  width: 100%;
    }
    }
`

const YoutubeEmbed = ({ embedId }) => (
  <VideoContainer>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoContainer>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;