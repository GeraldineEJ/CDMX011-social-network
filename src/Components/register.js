// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { registerUser, loginWithGoogle } from '../lib/firebase.js';

export const Register = () => {
  const registerDiv = document.createElement('div');

  const logo = document.createElement('img');
  logo.setAttribute('src', '../img/BeTheLight.png');

  const h1Presentation = document.createElement('h1');
  h1Presentation.textContent = 'Be the light te ayuda a comunicarte y compartir la luz que ha sido depositada en ti con las personas que forman parte de tu comunidad';

  const inputName = document.createElement('input');
  inputName.placeholder = 'Nombre';
  inputName.setAttribute('required', 'required');

  /* const iconName = document.createElement('div');
  iconName.classList.add = 'iconName'; */

  const iconUser = document.createElement('img');
  iconUser.setAttribute('src', '../img/user.png');

  let inputEmail = document.createElement('input');
  inputEmail.id = 'inputEmail';
  inputEmail.placeholder = 'Correo';
  inputEmail.id = 'inputEmail';
  inputEmail.required = 'true';
  inputEmail.type = 'email';

  const iconEmail = document.createElement('img');
  iconEmail.setAttribute('src', '../img/email.png');

  let inputPassword = document.createElement('input');
  inputPassword.placeholder = 'Contraseña';
  inputPassword.type = 'password';
  inputPassword.id = 'inputPassword';

  const iconOpenEye = document.createElement('img');
  iconOpenEye.setAttribute('src', '../img/openEye.png');

  const iconCloseEye = document.createElement('img');
  iconCloseEye.setAttribute('src', '../img/closeEye.png');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'REGISTRATE';
  buttonRegister.id = 'buttonRegister';

  const buttonLoginGoogle = document.createElement('button');
  buttonLoginGoogle.textContent = 'Registrate con tu cuenta Google';
  buttonLoginGoogle.id = 'buttonLoginGoogle';

  const iconGoogle = document.createElement('img');
  iconGoogle.setAttribute('src', '../img/google-logo.png');

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.id = 'buttonHome';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  buttonRegister.addEventListener('click', (event) => {
    inputEmail = document.getElementById('inputEmail').value;
    inputPassword = document.getElementById('inputPassword').value;
    event.preventDefault();
    registerUser(inputEmail, inputPassword);
  });

  buttonLoginGoogle.addEventListener('click', () => {
    loginWithGoogle();
  });

  registerDiv.appendChild(logo);
  registerDiv.appendChild(h1Presentation);
  // registerDiv.appendChild(iconName);
  registerDiv.appendChild(inputName);
  registerDiv.appendChild(iconUser);
  registerDiv.appendChild(inputEmail);
  registerDiv.appendChild(iconEmail);
  registerDiv.appendChild(inputPassword);
  registerDiv.appendChild(iconOpenEye);
  registerDiv.appendChild(iconCloseEye);
  registerDiv.appendChild(buttonRegister);
  registerDiv.appendChild(buttonLoginGoogle);
  registerDiv.appendChild(iconGoogle);
  registerDiv.appendChild(buttonHome);

  return registerDiv;
};
