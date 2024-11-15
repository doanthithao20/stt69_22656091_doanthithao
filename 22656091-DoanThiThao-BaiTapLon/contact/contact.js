var modal = document.getElementById("myModal1");
        var close = document.getElementsByClassName("close1")[0];
        var btn = document.getElementsByClassName("submit1")[0]
        function showModal(message) {
            document.getElementById("modal-message1").innerHTML = message;
            modal.style.display = "block";
        }

        close.onclick = function () {
            modal.style.display = "none";
        }

        btn.onclick = function(){
          alert("Cảm ơn bạn đã gửi thông tin liên hệ")
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }