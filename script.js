// Admin Login
const adminForm = document.getElementById('adminSection');
if (adminForm) {
  adminForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const correctUser = "admin";
    const correctPass = "adminlogin45654";

    if (username === correctUser && password === correctPass) {
      document.getElementById('feedbackList').style.display = 'block';
      alert("✅ Logged in as admin!");
    } else {
      alert("❌ Wrong credentials.");
    }
  });
}
