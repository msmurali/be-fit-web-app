export const apiConfig = {
  apiKey: process.env.REACT_APP_RAPID_API_KEY,
  baseUrl: {
    exercisesApiBaseUrl: process.env.REACT_APP_EXERCISES_API_BASE_URL,
    youtubeApiBaseUrl: process.env.REACT_APP_YOUTUBE_API_BASE_URL,
  },
  hosts: {
    exercisesApiHost: process.env.REACT_APP_EXERCISES_API_HOST,
    youtubeApiHost: process.env.REACT_APP_YOUTUBE_API_HOST,
  },
  paths: {
    exercisesApi: {
      exercises: "/exercises",
      exercise: "/exercises/exercise/",
      targetList: "/exercises/targetList",
      equipementList: "/exercises/equipmentList",
      bodyPartList: "/exercises/bodyPartList",
    },
    youtubeApi: {
      search: "/search",
    },
  },
  queryParams: {
    exercisesApi: {
        limit: 'limit',
        offset: 'offset'
    },
    youtubeApi: {
      query: "query",
      language: "hl",
      type: "type",
      duration: "duration",
      sort: "sort",
    },
  },
};
