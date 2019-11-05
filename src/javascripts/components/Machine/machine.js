import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';

import snack from '../Snack/snack';
import './machine.scss';

const buildTheMachine = () => {
  // if it's connected by a . it's a method or a property
  smash.getCompleteMachine()
  // I am getting back a promise with my getCompleteMachine method returns a promise. .then is my resolve of the promise with the data I'm wanting (positions)
    .then((positions) => {
      // build a dom string - done
      // h2 that says VENDING MACHINE - done
      // div with an id = snack-section, class=d-flex flex-wrap - done
      // forEach over positions - call a component called snacks - done
      // snacks component should return a bootstrap card - done
      // printToDom('stock', domString) - done
      let domString = '<h2>VENDING MACHINE</h2>';
      // the += is appending the exisiting domString
      domString += '<div id="snack-section" class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snack.makeASnack(position);
      });
      // you put items into the div in the forEach, when it's done running then close the div.
      domString += '</div>';
      utilities.printToDom('machine', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
