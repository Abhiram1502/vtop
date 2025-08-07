const regProfile = document.getElementById('regProfile');
const menuProfile = document.getElementById('profile');
regProfile.addEventListener('click', function() {
    const profileMenu = document.querySelector('.profile');
    profileMenu.classList.toggle('show');
});
menuProfile.addEventListener('click', function() {
    const profileMenu = document.querySelector('.profile-section');
    profileMenu.classList.toggle('show');
});
  const toggleBtn =  document.getElementById('cap');
  const academicsSection = document.getElementById('academicsSection');

  toggleBtn.addEventListener('click', function () {
    academicsSection.classList.toggle('showSlide');
    console.log('Toggle button clicked');
  });
