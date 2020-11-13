import {combineReducers} from "redux";
/*import trscks(this is a reducer) from some adress*/
import authReducer from "./authReducer";
import allTracksReducer from "./allTracksReducer";
import indexOfCurrentTrackReducer from "./IndexOfCurrentTrackReducer";
import AllPlaylists from "./AllPLaylistsReducer";
import tracklistFindReducer from "./TracklistFindReducer";
import promiseReducer from "./promiceReducer";


export default combineReducers({
    authReducer,
    currentSongReducer: indexOfCurrentTrackReducer,
    allTracksReducer,
    AllPlaylists,
    tracklistFindReducer,
   promiseReducer

})



