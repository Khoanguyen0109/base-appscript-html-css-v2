function filter_Human_status(state) {
  document.getElementById("spinner").style.display = "block";
  var name_state;
  if (state == "Waitting") {
    name_state = "DANH SÁCH NHÂN SỰ CHỜ PHÊ DUYỆT";
  } else if (state == "Stop") {
    name_state = "DANH SÁCH NHÂN SỰ ĐÃ NGHĨ VIỆC";
  } else {
    name_state = "DANH SÁCH NHÂN SỰ ĐANG LÀM VIỆC";
  }

  setTimeout(function () {
    var result = data_human_list.filter(function (e) {
      if (e[10] == state) {
        return e;
      }
    });
    $("#table_human").DataTable().clear().rows.add(result).draw();
    $("#table_human").DataTable().search("").draw();
    document.getElementById("title_data_table").innerHTML = name_state;
    document.getElementById("spinner").style.display = "none";
  }, 100);
}

function filter_Human_total() {
  document.getElementById("spinner").style.display = "block";
  setTimeout(function () {
    $("#table_human").DataTable().clear().rows.add(data_human_list).draw();
    $("#table_human").DataTable().search("").draw();
    document.getElementById("title_data_table").innerHTML =
      "DANH SÁCH NHÂN SỰ";
    document.getElementById("spinner").style.display = "none";
  }, 100);
}
