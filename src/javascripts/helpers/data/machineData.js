// machine data is a git request to firebase. All that will change is the URL in the axios file

import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMachine = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/machines.json`)
    .then((response) => {
      const demMachines = response.data;
      const machines = [];
      Object.keys(demMachines).forEach((fbId) => {
        // let's make a new id on it called aid and shove it in there. Then we're pushing
        demMachines[fbId].id = fbId;
        machines.push(demMachines[fbId]);
        // this should now give you back an array with one machine
      });


      resolve(machines[0]); // Hard code to only return first machine that comes back.
    })
    .catch((error) => reject(error));
});

export default { getMachine };
