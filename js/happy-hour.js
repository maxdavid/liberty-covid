/* glug glug!!! */
const today = new Date();
const hour = today.getHours();
const happyHour = document.querySelectorAll('.happy-hour');
if (happyHour.length && 14 < hour && hour < 18) {
  happyHour.forEach((block) => {
    block.classList.add('active');
  });
}
