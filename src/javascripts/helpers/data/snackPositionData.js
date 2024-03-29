import axios from 'axios';
import apiKeys from '../apiKeys.json';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllSnackPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  //  give me everything in the collection that macthes..
  axios.get(`${baseUrl}/snackPositions.json?orderBy="machineId"&equalTo="${machineId}"`)
    .then((response) => {
      const demSnackPositions = response.data;
      const snackPositions = [];
      Object.keys(demSnackPositions).forEach((fbId) => {
        demSnackPositions[fbId].id = fbId;
        snackPositions.push(demSnackPositions[fbId]);
      });
      resolve(snackPositions);
    })
    .catch((error) => reject(error));
});

const deleteSnackPosition = (snackPositionId) => axios.delete(`${baseUrl}/snackPositions/${snackPositionId}.json`);

const createSnackPosition = (newSnackPosition) => axios.post(`${baseUrl}/snackPositions.json`, newSnackPosition);

export default { getAllSnackPositionsByMachineId, deleteSnackPosition, createSnackPosition };
