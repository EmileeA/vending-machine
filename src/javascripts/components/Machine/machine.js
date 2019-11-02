import smash from '../../helpers/data/smash';
import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((error) => console.error(error));

// 1. getMachines - returns first machine (hard coding)
// 2. use MachineId to get all positions for that machine
// 3. user MachineId to get all snack positions
// 4. use UID of snackPOsitions/positions to get available snakcs for that machine
// 5. SMASH EM' - return an array of positions (in order A1, A2, A3, B1 ...)..
// so positions should have position.snack if a snack exists at that position
//
};

export default { buildTheMachine };
