import './style.css';
const targetDate = new Date(2026, 7, 15, 8, 0, 0).getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const countdownContainer = document.getElementById('countdown');

  if (distance < 0) {
    countdownContainer.innerHTML = '<span class="text-2xl font-bold text-rose-600">Zaczynamy przygodę! 🎉</span>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  countdownContainer.innerHTML = `
    <div class="flex flex-col bg-rose-50 rounded-xl p-3 w-20 shadow-sm border border-rose-100">
      <span class="text-3xl font-bold">${days}</span>
      <span class="text-[10px] text-rose-400 uppercase tracking-wider font-semibold mt-1">Dni</span>
    </div>
    <div class="flex flex-col bg-rose-50 rounded-xl p-3 w-20 shadow-sm border border-rose-100">
      <span class="text-3xl font-bold">${hours}</span>
      <span class="text-[10px] text-rose-400 uppercase tracking-wider font-semibold mt-1">Godz.</span>
    </div>
    <div class="flex flex-col bg-rose-50 rounded-xl p-3 w-20 shadow-sm border border-rose-100">
      <span class="text-3xl font-bold">${minutes}</span>
      <span class="text-[10px] text-rose-400 uppercase tracking-wider font-semibold mt-1">Min.</span>
    </div>
  `;
};


setInterval(updateCountdown, 1000);
updateCountdown(); 