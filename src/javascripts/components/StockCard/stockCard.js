import './stockCard.scss';

const makeASnack = (snack) => {
  const domString = `
  <div class="card col-3 snack-card">
  <div class="card-body">
    <h5 class="card-title">${snack.name}</h5>
    <p class="card-text">$${snack.price / 100}</p>
    <p class="card-text">${snack.position.position}</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-danger delete-snack-position" id="${snack.snackPositionId}">Remove from ${snack.position.position}</button>
    </div>
  </div>
    `;
  return domString;
};

export default { makeASnack };


// think about stocker and machine as the files that hold all the information
