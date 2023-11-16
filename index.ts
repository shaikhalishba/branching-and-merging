let inputs = document.querySelectorAll('input');

let pattern = {
     name :/^[\w]{5,12}$/i,
    email:/^([\w\.-]+)@([\w-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  

    password:/^[\w@-]{8,20}$/,
    number:/^\d{11}$/
}
function validate(field, regex) {
    const nameAttribute = field.getAttribute('name');
    if (nameAttribute && regex.test(field.value)) {
      field.className = 'valid';
    } else {
      field.className = 'invalid';
    }
  }
  

  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      validate(e.target, pattern[(e.target as HTMLInputElement)!.getAttribute('name')!]);
    });
  });
  
