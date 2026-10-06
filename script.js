// ===== Падающие сердечки на фоне =====
const heartsBg = document.getElementById('heartsBg');
const emojis = ['💜', '💖', '💗', '🌸', '✨', '💫', '🦋'];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart-fall';
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = (16 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (6 + Math.random() * 6) + 's';
  heart.style.animationDelay = Math.random() * 2 + 's';
  heartsBg.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 500);
for (let i = 0; i < 8; i++) setTimeout(createHeart, i * 200);

// ===== Комплименты =====
const compliments = [
  'Ты самая красивая 💜',
  'Твоя улыбка — топ ✨',
  'Ты умница 🌸',
  'С тобой всегда весело 🦋',
  'Ты лучшая подруга 💖',
  'Ты — солнышко ☀️',
  'Ты очень добрая 💗',
  'У тебя отличный вкус 🎀',
  'Ты супер талантливая ⭐',
  'Ты делаешь мир лучше 🌈'
];

let count = 0;
const counter = document.getElementById('counter');
const loveBtn = document.getElementById('loveBtn');

loveBtn.addEventListener('click', () => {
  count++;
  counter.textContent = `Комплиментов получено: ${count} 💜`;
  counter.style.transform = 'scale(1.15)';
  setTimeout(() => counter.style.transform = 'scale(1)', 200);

  // Всплывающее сердечко
  const heart = document.createElement('div');
  heart.className = 'pop-heart';
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  const rect = loveBtn.getBoundingClientRect();
  heart.style.left = (rect.left + rect.width / 2 + (Math.random() * 60 - 30)) + 'px';
  heart.style.top = (rect.top + rect.height / 2) + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1200);

  // Меняем текст кнопки на комплимент
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];
  loveBtn.textContent = compliment;
});

// ===== Модалка с секретом =====
const modal = document.getElementById('modal');
const secretBtn = document.getElementById('secretBtn');
const closeModal = document.getElementById('closeModal');

secretBtn.addEventListener('click', () => modal.classList.add('active'));
closeModal.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});
