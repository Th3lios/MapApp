import env from 'react-native-config'

const config = {
  api: {
    google_maps: env.GOOGLE_MAPS_API_KEY,
  }
};

const GOOGLE_MAPS_API_KEY = config.api.google_maps;

export {
    GOOGLE_MAPS_API_KEY
}

export default config