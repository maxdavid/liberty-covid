/* glug glug!!! */
const today = new Date();
const hour = today.getHours();
const happyHour = document.querySelector('.happy-hour');
if (14 < hour && hour < 18) {
  console.log('Happy hour!');
  happyHour.classList.add('active');
}
