const mediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
};

const backdropPath = (imgEndpoint) => {
  return imgEndpoint
    ? `https://image.tmdb.org/t/p/original${imgEndpoint}`
    : null;
};

const posterPath = (imgEndpoint) => {
  return imgEndpoint ? `https://image.tmdb.org/t/p/w500${imgEndpoint}` : null;
};

const youtubePath = (videoId) => {
  return videoId ? `https://www.youtube.com/embed/${videoId}?controls=0` : null;
};

const tmdbConfigs = {
  mediaType,
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath,
};

export default tmdbConfigs;
