function update_new_human() {
  reset_form();
  $("#modal_human_form").modal("show");
  $("#title_form").text("THÊM MỚI NHÂN SỰ");
  $("#kt_dropzonejs_example_1").empty();
  $("#kt_dropzonejs_example_1").append(`
    <div class="dz-message needsclick" style="display:block">
      <i
        class="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
      <div class="ms-4">
        <h3 class="fs-5 fw-bold mb-1 text-info">
          CLICK UPLOAD HÌNH ẢNH
        </h3>
        <span class="fs-7 fw-semibold">tối đa 10
          file</span>
      </div>
    </div>
`);
}

function handle_submit_update_new_human(formObject) {
  if ($("#ID_human").val() == "") {
    form_update_data_new(formObject);
  } else if ($("#ID_human").val()) {
    form_edit_data_old(formObject);
  }
}

async function form_update_data_new(formObject) {
  effect_click_button_start("btn_capnhat");
  $("#modal_human_form").modal("hide");

  var uid = new Date().getTime().toString(36);
  var values = [
    [
      uid,
      moment().format("DD/MM/YYYY hh:mm:ss"),
      formObject.elements["ID_Login"].value,
      formObject.elements["password"].value,
      formObject.elements["id_file"].value,
      formObject.elements["code_staff"].value,
      formObject.elements["full_name"].value,
      formObject.elements["position"].value,
      formObject.elements["phone"].value,
      formObject.elements["email"].value,
      formObject.elements["approved_human"].value,
      $("#permission").val().toString(),
      formObject.elements["Category"].value,
      $("#loai_tai_lieu_dc_add").val().toString(),
      $("#nguoi_duoc_them").val().toString(),
    ],
  ];

  await push_data(values, "update_new_data_human");

  effect_click_button_end("btn_capnhat");

  var table = $("#table_human").DataTable();
  effec_action_table_add_new(table, values[0]);

  reset_form();
}

function effec_action_table_add_new(table, values) {
  table.row.add(values).draw(false);
  table.order(2, ["asc"]).draw();
  table.order(1, ["asc"]).draw();

  var index = table.rows().count() - 1;
  table.row(index).node().classList.add("highlight-row");
  // Thêm lớp CSS để định dạng dòng vừa mới
  setTimeout(function () {
    table.row(index).node().classList.remove("highlight-row");
    // Xóa lớp CSS để xóa định dạng dòng vừa mới
  }, 5000);
  showAlert("Đã cập nhật thành công !", "success");
}

async function form_edit_data_old(formObject) {
  effect_click_button_start("btn_capnhat");
  $("#modal_human_form").modal("hide");
  const id = formObject.elements["ID_human"].value;

  var values = [
    [
      id,
      moment().format("DD/MM/YYYY hh:mm:ss"),
      formObject.elements["ID_Login"].value,
      formObject.elements["password"].value,
      formObject.elements["id_file"].value,
      formObject.elements["code_staff"].value,
      formObject.elements["full_name"].value,
      formObject.elements["position"].value,
      formObject.elements["phone"].value,
      formObject.elements["email"].value,
      formObject.elements["approved_human"].value,
      $("#permission").val().toString(),
      formObject.elements["Category"].value,
      $("#loai_tai_lieu_dc_add").val().toString(),
      $("#nguoi_duoc_them").val().toString(),
    ],
  ];

  await push_data(values, "edit_data_human");

  var table = $("#table_human").DataTable();

  effec_action_table_edit(table, values[0], vitri_dong_sua);

  reset_form();
  effect_click_button_end("btn_capnhat");
}

function effec_action_table_edit(table, values, idx) {
  showAlert("Đã sửa thành công !", "warning");

  table.row(idx).data(values).draw();
  // Highlight the updated row

  var rowNode = table.row(idx).node();
  // console.log(rowNode)
  $(rowNode).toggleClass("highlight-row");

  // Remove the highlight class after 5 seconds
  setTimeout(function () {
    $(rowNode).toggleClass("highlight-row");
  }, 5000);
}

function fill_form_human(data) {
  $("#ID_human").val(data[0]),
    $("#ID_Login").val(data[2]),
    $("#password").val(data[3]),
    $("#id_file").val(data[4]),
    $("#code_staff").val(data[5]),
    $("#full_name").val(data[6]),
    $("#position").val(data[7]),
    $("#phone").val(data[8]),
    $("#email").val(data[9]),
    $("#approved_human").val(data[10]),
    $("#permission").val(data[11].split(",")).trigger("change"),
    $("#Category").val(data[12]);
  $("#loai_tai_lieu_dc_add").val(data[13].split(",")).trigger("change"),
    $("#nguoi_duoc_them").val(data[14].split(",")).trigger("change"),
    $("#kt_dropzonejs_example_1").empty();

  data[4].split("/").map((e) => {
    e ? review_image(e) : "";
  });
}

function reset_form() {
  document.getElementById("form_add_human").reset();
}

function select_permision(data) {
  var data = [
    ["Thêm note Nội Bộ", "Thêm note tài liệu Nội Bộ"],
    ["Thêm note Khác", "Thêm note tài liệu Khác"],
    ["Thêm note EVN", "Thêm note tài liệu EVN"],
    ["Thêm note CPC", "Thêm note tài liệu CPC"],
    ["Thêm note QNaPC", "Thêm note tài liệu QNaPC"],
    ["Thêm note TL Liên Quan", "Thêm note tài liệu Liên Quan"],
    ["Sửa Nội Bộ", "Sửa tài liệu Nội Bộ"],
    ["Sửa Khác", "Sửa tài liệu Khác"],
    ["Sửa EVN", "Sửa tài liệu EVN"],
    ["Sửa CPC", "Sửa tài liệu CPC"],
    ["Sửa QNaPC", "Sửa tài liệu QNaPC"],
    ["Sửa TL Liên Quan", "Sửa tài liệu Liên Quan"],
    ["Xóa Nội Bộ", "Xóa tài liệu Nội Bộ"],
    ["Xóa Khác", "Xóa tài liệu Khác"],
    ["Xóa EVN", "Xóa tài liệu EVN"],
    ["Xóa CPC", "Xóa tài liệu CPC"],
    ["Xóa QNaPC", "Xóa tài liệu QNaPC"],
    ["Xóa TL Liên Quan", "Xóa tài liệu Liên Quan"],
  ];
  var list_permission = [];

  data.map((item) => {
    list_permission.push({ id: item[0], text: item[1] });
  });

  $("#permission").select2({
    dropdownParent: $("#div_list_permission"),
    tags: true,
    data: list_permission,
  });

  $("#loai_tai_lieu_dc_add").select2({
    dropdownParent: $("#div_list_loai_tai_lieu_dc_add"),
    tags: true,
  });

  $("#nguoi_duoc_them").select2({
    dropdownParent: $("#div_list_nguoi_duoc_them"),
    tags: true,
    data: list_human,
  });
}
