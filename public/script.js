const mobileBtn = document.querySelector('#mobile-btn');
const mobileMenu = document.querySelector('#mobile-menu');

const handleClick = () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.add('flex');
};

const handleOutsideClick = ({ target }) => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
};

mobileBtn.addEventListener('click', handleClick);
mobileMenu.addEventListener('click', handleOutsideClick);

const temperatura = document.querySelector('#temperatura');
const tempo = document.querySelector('#tempo');
const dia = document.querySelector('#dia');
const video = document.querySelector('#video');

const random = Math.floor(Math.random() * 10) + 20;
const date = new Date();

temperatura.innerText = `${random}º`;
tempo.innerText = random < 25 ? `🌧️ ${random + 5}%` : '🌤️';
dia.innerText = date
  .toLocaleDateString('pt-BR', {
    weekday: 'long',
  })
  .replace('-feira', '');
video.src = random < 25 ? './img/video_chuva.mp4' : './img/video_sol.mp4';
