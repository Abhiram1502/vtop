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
  const MentorBtn =  document.getElementById('mentorBtn');
  const mentorSection = document.getElementById('mentor-options');

  MentorBtn.addEventListener('click', function () {
    mentorSection.classList.toggle('showSlide');
    console.log('Toggle button clicked');
  });
  document.addEventListener('click', function(event) {
    const academicsSection = document.getElementById('academicsSection');
    const mentorSection = document.getElementById('mentor-options');
    if (!academicsSection.contains(event.target) && !toggleBtn.contains(event.target)) {
        academicsSection.classList.remove('showSlide');
    }
    if (!mentorSection.contains(event.target) && !MentorBtn.contains(event.target)) {
        mentorSection.classList.remove('showSlide');
    }
  });
function mentorPage() {
  document.querySelector('.mentor-page').style.display = 'flex';
  document.querySelector('.home-page').style.display = 'none';
  document.querySelector('.timetable-page').style.display = 'none';
  console.log('Mentor page toggled');
}

function timetablePage() {
  document.querySelector('.mentor-page').style.display = 'none';
  document.querySelector('.home-page').style.display = 'none';
  document.querySelector('.timetable-page').style.display = 'flex';
  console.log('Time table page toggled');
}
