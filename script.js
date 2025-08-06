regProfile = document.getElementById('regProfile');
menuProfile = document.getElementById('profile');
regProfile.addEventListener('click', function() {
    const profileMenu = document.querySelector('.profile');
    profileMenu.classList.toggle('show');
});
menuProfile.addEventListener('click', function() {
    const profileMenu = document.querySelector('.profile-section');
    profileMenu.classList.toggle('show');
});