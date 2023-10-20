window.addEventListener("load", get_data_initial, true);
let info_user;

async function get_data_initial() {
  functionInit();
  var resp = await get_data("get_data_initial_human");
  info_user = resp.values;
}

async function check_login() {
  var user = $("#user_name").val();
  var password = $("#password").val();

  const check_user = info_user.filter((e) => {
    if (
      user.toLowerCase().trim() === e[2].toLowerCase().trim() &&
      password.toLowerCase().trim() === e[3].toLowerCase().trim() &&
      e[10] == "Đang làm việc"
    ) {
      localStorage.setItem("id_staff", JSON.stringify(e[2]));
      localStorage.setItem("user_name", JSON.stringify(e[6]));
      localStorage.setItem("img_user", JSON.stringify(e[4]));
      localStorage.setItem("pos_user", JSON.stringify(e[7]));
      localStorage.setItem("email_user", JSON.stringify(e[9]));
      localStorage.setItem("sdt", JSON.stringify(e[8]));
      localStorage.setItem("role", JSON.stringify(e[11]));
      localStorage.setItem("phong_ban", JSON.stringify(e[12]));
      localStorage.setItem("role_doc", JSON.stringify(e[13]));
      localStorage.setItem("role_human", JSON.stringify(e[14]));
      return e;
    }
  });
  console.log(check_user);
  if (check_user.length > 0) {
    window.location.href = "/schedule.html";
  } else {
    $("#check_pass").show();
  }
}

function functionInit() {
  var forms = document.querySelectorAll("form");
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function (event) {
      event.preventDefault();
    });
  }
}

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    check_login();
  }
});
