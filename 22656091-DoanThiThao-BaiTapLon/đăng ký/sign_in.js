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

function isUserNameExist(username) {
  let userList = JSON.parse(localStorage.getItem("userList"));
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].username === username) {
      return true;
    }
  }
  return false;
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (localStorage.getItem("userList") === null) {
    let userList = [];
    let user = { username: username, password: password };
    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList));
    showModal("Đăng ký tài khoản thành công!!");
  } else {
    let userList = JSON.parse(localStorage.getItem("userList"));
    if (isUserNameExist(username)) {
      showModal("Tên đăng nhập đã tồn tại!!");
      return;
    } else {
      let user = { username: username, password: password };
      userList.push(user);
      showModal("Đăng ký tài khoản thành công!!");
    }
  }
});
