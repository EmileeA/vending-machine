import machineData from './machineData';
import positionData from './positionData';
import snackPositionData from './snackPositionData';
import snackData from './snackData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
// resolve and reject are built in as call backs for a promise. if it goes through - resolve. It something is wrong - reject.
// 1. getMachines - returns first machine (hard coding) - DONE
// 2. use MachineId to get all positions for that machine - DONE
// 3.  use MachineId to get all snack positions - DONE
// 4.  use uid of snackPositions/positions to get available snacks for that machine - DONE
// 5.  SMASH EM' - return an array of positions (in order A1, A2, A3, B1 ....) .
// so positions should have position.snack if a snack exists at that position
  machineData.getMachine()
  // get singleMachine when it comes back use it to send into my next function
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    // get the position of my singleMachine
    .then((positions) => {
      // getAllSnackPositionsByMachineId is a method I built in exported snackPostionData object
      // (when you're exporting data you are creating an object then you call the object whatever you want "snackpositiondata"
      // and then you can refer to whatever methods are on that object by calling it.
      // It's a function when you write it its a method when you export it)
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
      // snackPositions is the data that's coming back from the promise.
        .then((snackPositions) => {
          snackData.getSnacksByUid(positions[0].uid).then((snacks) => {
            const newPositions = [];
            // "forEach((position)" position is the object that I'm iterating over
            positions.forEach((position) => {
              // "..." is a spread operator
              const newP = { ...position };
              // for each position, find those snacks that match this Id. ".find" is an array method.
              // Essentially, you are trying to find the snack position that where the position id and the new position id is equivlant
              const getSnackPosition = snackPositions.find((x) => x.positionId === newP.id);
              console.log(getSnackPosition);
              // if it finds a match then it's going to do... going and finding the snack that's in that position.
              if (getSnackPosition) {
                const snack = snacks.find((x) => x.id === getSnackPosition.snackId);
                newP.snack = snack;
              } else {
                // otherwise it's going to set the snack to an empty object so there won't be a snack for that position
                newP.snack = {};
              }
              // intaking that new snack whether there's a snack there or not and pushing it into new positions. Figuring out where each snack is in that machine.
              newPositions.push(newP);
            });
            // resolve is the end of that promise. So I'm taking the new positions and sending it back to where I called it from.
            resolve(newPositions);
          });
        });
    })
    // on the reject error it's going to create a log in the console so you can see what the error is.
    .catch((error) => reject(error));
});

const getSnacksWithPositions = (uid) => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnacksByUid(uid).then((snacks) => {
            const newSnacks = [];
            snacks.forEach((snack) => {
              const newSnack = { ...snack };
              const getSnackPosition = snackPositions.find((x) => x.snackId === newSnack.id);
              if (getSnackPosition) {
                const getPosition = positions.find((x) => x.id === getSnackPosition.positionId);
                newSnack.position = getPosition;
              } else {
                newSnack.position = {};
              }
              newSnacks.push(newSnack);
            });
            resolve(newSnacks);
          });
        });
    })
    .catch((error) => reject(error));
});

export default { getCompleteMachine, getSnacksWithPositions };
