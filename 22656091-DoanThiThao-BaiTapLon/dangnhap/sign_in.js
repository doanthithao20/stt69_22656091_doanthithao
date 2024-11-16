var modal = document.getElementById("myModal");
var close = document.getElementsByClassName("close")[0];

function showModal(message) {
  document.getElementById("modal-message").innerHTML = message;
  modal.style.display = "block";
}

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (user.username === username && user.password === password) {
    showModal("Đăng nhập thành công!!");
  } else {
    showModal("Tên đăng nhập hoặc mật khẩu không chính xác!!");
  }
});
