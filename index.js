document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('survey-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const option = document.getElementById('dropdown').value;
    const accountType = document.querySelector('input[name="account-type"]:checked').value;
    const favoriteBrand = document.querySelector('#brands select').value;
    const transportation = [];
    const transportationCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    transportationCheckboxes.forEach((checkbox) => {
      transportation.push(checkbox.value);
    });
    const comments = document.getElementById('comments').value;

    // Aquí puedes manejar los datos, como enviarlos a un servidor o procesarlos de alguna forma.
    const datos = [
      name,
      email,
      age,
      option,
      accountType,
      favoriteBrand,
      transportation,
      comments,
    ];

    const visual = document.getElementById('FORMDATOS');
    datos.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('data-item');
      div.textContent = item;
      visual.appendChild(div);
    });

    // Puedes mostrar un mensaje de agradecimiento o redirigir a otra página
  });
});
