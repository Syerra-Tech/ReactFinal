import axios from "axios";
import {GET_ERRORS, GET_PROJECT_TASKS} from "./types";

export const addProjectTask = (project_task, history) => async dispatch => {
    try{
        await axios.post("http://baeldung-env.e2dpzqqyit.us-east-2.elasticbeanstalk.com/api/board", project_task);
        history.push("/projectBoard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }

};

export const getBacklog = () => async dispatch =>{
    const res = await axios.get("http://baeldung-env.e2dpzqqyit.us-east-2.elasticbeanstalk.com/api/board/all");
    dispatch({
        type:GET_PROJECT_TASKS,
        payload:res.data
    });
}