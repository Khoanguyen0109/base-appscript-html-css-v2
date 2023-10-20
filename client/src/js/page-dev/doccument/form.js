var arr_id = ["0"];
var arr_record_combo = [];

function show_modal_add_new_doc() {
  reset_form();
  $(".box_khach_hang").empty();
  $("#phan_loai").empty();
  $("#packing_form_import").modal("show");
  $("#title").text("THÊM TÀI LIỆU MỚI");
  $("#btn_upload_file").show();
  $("#btn_up_cus").show();
  $("#btn_them_note").show();
  $("#xoa_all_note").show();
  $("#btn_edit_tai_lieu").hide();


}

function add_product_from_list_order() {
  var element = arr_id[arr_id.length - 1];
  var number = +element + 1;
  arr_id.push(`${number}`);
  input_form(number);
}

function input_form(index) {
  $(".box_khach_hang").append(
    `
   <div class="row" id="cost_box_${index}">
      <div class="col-12">
          <div class="row">
              <div class="form-group col-8 col-sm-8 col-xl-8">
              <input type="text" id="id_note_${index}" class="d-none" >
                  <div class="controls">
                      <input type="text" id="ghi_chu_${index}" class="form-control text-primary fw-bold"
                          autocomplete="off" required >
                  </div>
              </div>
              <div class="form-group col-2 col-sm-2  col-xl-3 ">
                  <div class="controls">
                       <input type="number" id="trang_${index}" class="form-control text-primary fw-bold"
                          autocomplete="off" required min="1" value="1">
                  </div>
              </div>
              <div class="form-group col-2 col-sm-2  col-xl-1">
                  <button type = "button" class="btn-danger  btn-sm hover-danger " onclick ="remove_box('${index}')">
                        <i class="fad fa-trash-alt fs-14 "></i> 
                  </button>
              </div>
          </hr>
          </div>
      </div>
  </div>`
  );
}

// ADD NEW
function check_add_new_doc_or_note() {
  var id = $(`#id_tai_lieu`).val();

  if (id) {
    add_new_note(id);
  } else {
    add_new_doc();
  }
}

// add doc
async function add_new_doc() {
  var values_child = [];
  var values_parent = [];

  var uid = new Date().getTime().toString(36);
  var date = moment($(`#date`).val()).format("DD/MM/YYYY");
  var link_file = `https://drive.google.com/file/d/${$( "#id_file").val()}/view?usp=drivesdk`;

  var them_ghi_chu = "";
  
  arr_id.shift();

  arr_id.map((e, idx) => {
    them_ghi_chu = them_ghi_chu + $(`#ghi_chu_${e}`).val();
    values_child.push([
      uid + idx,
      uid,
      $(`#ghi_chu_${e}`).val(),
      $(`#trang_${e}`).val(),
    ]);
    $(`#cost_box_${e}`).remove();
  });

  values_parent = [
    [
      uid,
      "",
      $(`#muc_chua_tai_lieu`).val(),
      user_name,
      $(`#ma_doc`).val(),
      $(`#name_doc`).val(),
      date,
      link_file,
      $(`#status`).val(),
      $(`#phan_loai`).val(),
      $("#nhan_vien").val().toString(),
    ],
  ];

  $("#packing_form_import").modal("hide");

  await push_data(values_parent, "update_new_doc_parent");

  // ==============
  var table = $("#table_doc").DataTable();
  effec_action_table_add_new(table, values_parent[0]);
  showAlert("Đã cập nhật thành công !", "success");
  arr_id = ["0"];
  reset_form();
}

// add note
async function add_new_note(id) {
  var values_child = [];
  var uid = new Date().getTime().toString(36);
  arr_id.shift();

  arr_id.map((e, idx) => {
    values_child.push([
      uid,
      id,
      $(`#ghi_chu_${e}`).val(),
      $(`#trang_${e}`).val(),
      $(`#id_file`).val(),
    ]);
    $(`#cost_box_${e}`).remove();
  });

  data_chill.push(values_child[0]);
  $("#packing_form_import").modal("hide");

  await push_data(values_child, "update_new_doc_child");

  showAlert("Đã cập nhật thành công !", "success");
  arr_id = ["0"];
  reset_form();
}

// RESET
function reset_form() {
  $("#packing_excell").val("");
  $("#nhan_vien").val("").trigger("change");
  remove_all();
  document.getElementById("form_packing_import").reset();
}

function remove_box(id) {
  $(`#cost_box_${id}`).remove(); //This removes the a tag
  var index = arr_id.indexOf(id);
  index > -1 ? arr_id.splice(index, 1) : "";
}

function remove_all() {
  arr_id.map((e) => {
    $(`#cost_box_${e}`).remove();
  });
  arr_id = ["0"];
  $("#packing_excell").val("");
  $("#excell_json").val("");
}

//  fill form thêm note
function fill_form(data) {
  var isoDate = moment(data[6], "DD/MM/YYYY").format("YYYY-MM-DD");
  $(".box_khach_hang").empty();
  $("#btn_them_note").show();
  $("#xoa_all_note").show();
  $("#btn_upload_file").hide();
  $("#btn_edit_tai_lieu").hide();
  $("#btn_up_cus").show();

  $("#title").text("THÊM NOTE CHO TÀI LIỆU"),
    $("#btn_upload_file").hide(),
    $(`#id_tai_lieu`).val(data[0]),
    $(`#ma_doc`).val(data[4]);
  $(`#name_doc`).val(data[5]);

  $(`#id_file`).val(data[7]);

  $(`#muc_chua_tai_lieu`).val(data[2]);
  $(`#date`).val(isoDate);
  $(`#status`).val(data[8]);
  $(`#phan_loai`).val(data[9]);
  $("#nhan_vien").val(data[10].split(",")).trigger("change");
}

//  fill form edit note / tài liệu
function fill_form_edit(data) {
  var isoDate = moment(data[6], "DD/MM/YYYY").format("YYYY-MM-DD");
  $(".box_khach_hang").empty();
  $("#btn_them_note").hide();
  $("#xoa_all_note").hide();

  $("#btn_up_cus").hide();
  $("#btn_edit_tai_lieu").show();
  $("#title").text("SỬA TÀI LIỆU / NOTE "),
    $("#btn_upload_file").hide(),
    $(`#id_tai_lieu`).val(data[0]),
    $(`#muc_chua_tai_lieu`).val(data[2]).trigger("change");
  $(`#ma_doc`).val(data[4]);
  $(`#name_doc`).val(data[5]);
  $(`#id_file`).val(data[7]);
  $(`#date`).val(isoDate);
  $(`#status`).val(data[8]);
  $(`#phan_loai`).val(data[9]);
  $("#nhan_vien").val(data[10].split(",")).trigger("change");

  data_chill.map((e, index) => {
    if (data[0] == e[1]) {
      input_form_edit(index);
      $(`#id_note_${index}`).val(e[0]);
      $(`#ghi_chu_${index}`).val(e[2]);
      $(`#trang_${index}`).val(e[3]);
    }
  });
}

function input_form_edit(index) {
  $(".box_khach_hang").append(
    `
   <div class="row" id="cost_box_${index}">
      <div class="col-12">
          <div class="row">
              <div class="form-group col-6 col-sm-12 col-xl-8">
              <input type="text" id="id_note_${index}" class="d-none" >
                  <div class="controls">
                      <input type="text" id="ghi_chu_${index}" class="form-control text-primary fw-bold"
                          autocomplete="off" required >
                  </div>
              </div>
              <div class="form-group col-2 col-sm-12  col-xl-2 ">
                  <div class="controls">
                       <input type="number" id="trang_${index}" class="form-control text-primary fw-bold"
                          autocomplete="off" required min="1" value="1">
                  </div>
              </div>
              <div class="form-group col-4 col-sm-12  col-xl-2">
                  <button type = "button" class="btn-success  btn-sm  me-10" onclick ="edit_note_tai_lieu('${index}')" data-bs-toggle="tooltip" data-bs-placement="top"
												title="Cập nhật lại ghi chú này">
                        <i class="fas fa-paper-plane fs-14 "></i>
                  </button>
                  <button type = "button" class="btn-danger  btn-sm  " onclick ="delete_data_doc_childrent('${index}')" data-bs-toggle="tooltip" data-bs-placement="top"
												title="Xóa ghi chú này">
                        <i class="fad fa-trash-alt fs-14 "></i> 
                  </button>
              </div>
          </hr>
          </div>
      </div>
  </div>`
  );
}

// Sửa tài liệu
async function edit_tai_lieu() {
  var date = moment($(`#date`).val()).format("DD/MM/YYYY");
  var id = $(`#id_tai_lieu`).val();
  values_parent = [
    [
      $(`#id_tai_lieu`).val(),
      "",
      $(`#muc_chua_tai_lieu`).val(),
      user_name,
      $(`#ma_doc`).val(),
      $(`#name_doc`).val(),
      date,
      $(`#id_file`).val(),
      $(`#status`).val(),
      $(`#phan_loai`).val(),
      $("#nhan_vien").val().toString(),
    ],
  ];
  var check = check_id_add_array(id, data_work);
  data_work[check] = values_parent[0];

  $("#packing_form_import").modal("hide");
  await push_data(values_parent, "edit_tai_lieu");

  // ==============
  var table = $("#table_doc").DataTable();
  effec_action_table_edit(table, values_parent[0], vitri_dong_sua);
  showAlert("Đã cập nhật lại tài liệu thành công !", "success");
  reset_form();
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

// Sữa note
async function edit_note_tai_lieu(index) {
  value_childrent = [
    [
      $(`#id_note_${index}`).val(),
      $(`#id_tai_lieu`).val(),
      $(`#ghi_chu_${index}`).val(),
      $(`#trang_${index}`).val(),
      $(`#id_file`).val(),
    ],
  ];

  $("#packing_form_import").modal("hide");

  data_chill[index] = value_childrent[0];

  await push_data(value_childrent, "edit_note_tai_lieu");

  showAlert("Đã cập nhật lại tài liệu thành công !", "success");
  reset_form();
}

// Xóa note
async function delete_data_doc_childrent(index) {
  var id = $(`#id_note_${index}`).val();
  swal(
    {
      title: "Bạn Muốn Xóa Dữ Liệu?",
      text: "Xóa sẽ không thể phục hồi !",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Xóa",
      closeOnConfirm: false,
    },
    function () {
      swal("Đã Xóa!", "File xóa rồi ko khôi phục được", "success");
      deleta_data(id, "delete_data_doc_childrent");
      $(`#cost_box_${index}`).remove();
    }
  );
}

//  SCROLL
$(".input_lis_box").slimscroll({
  height: $(window).height() - 360 + "px",
  color: "blue",
});

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

function check_muc_chua_tai_lieu(data) {
  var data_muc_chua_tai_lieu = [];

  data.map((item) => {
    data_muc_chua_tai_lieu.push({ id: item[0], text: item[0] });
    $("#fill_muc_tai_lieu").append(`<option>${item[0]}</option>`);
  });

  $("#muc_chua_tai_lieu")
    .select2({
      dropdownParent: $("#div_muc_chua_tai_lieu"),
      data: data_muc_chua_tai_lieu,
      tags: true,
    })
    .on("select2:select", function (e) {
      if (e.params.data.isNew) {
        var newOption = new Option(
          e.params.data.text,
          e.params.data.id,
          false,
          false
        );

        $("#muc_chua_tai_lieu").append(newOption).trigger("change");
      }
    });
}

function check_id_add_array(valueToFind, arr) {
  let foundIndex = null;
  // Duyệt qua các phần tử trong mảng arr
  for (let i = 0; i < arr.length; i++) {
    // Nếu phần tử có giá trị bằng valueToFind, lưu lại chỉ số của phần tử và thoát vòng lặp
    if (arr[i][0] === valueToFind) {
      foundIndex = i;
      break;
    }
    // Nếu đã tìm thấy phần tử cần tìm, thoát khỏi vòng lặp ngoài cùng
    if (foundIndex !== null) {
      break;
    }
  }
  return foundIndex;
}

$(".fill-input-table").on("change", function () {
  var key_1 = $("#fill_muc_tai_lieu").val().toLowerCase();

  var result = data_work.filter(function (e) {
    var condition_1 = key_1 == "" || e[2].toLowerCase().includes(key_1);
    return condition_1;
  });
  $("#table_doc").DataTable().clear().rows.add(result).draw();
  $("#table_doc").DataTable().search("").draw();
});

function get_data_human(data) {
  var human = [];
  data.map((e) => {
    human.push({ id: e[9], text: e[9] });
  });

  $("#nguoi_duyet").select2({
    dropdownParent: $("#div_nguoi_duyet"),
    placeholder: "Chọn email người duyệt",
    closeOnSelect: false,
    allowClear: true,
    data: human,
    width: "resolve",
  });

  $("#nguoi_xem_xet").select2({
    dropdownParent: $("#div_nguoi_xem_xet"),
    placeholder: "Chọn email người xem xét",
    closeOnSelect: false,
    allowClear: true,
    data: human,
    width: "resolve",
  });
}

async function create_file_doc() {
  var namefile = $("#ten_tai_lieu").val();
  if (namefile) {
    Swal.fire({
      title: " Bạn có chắc là muốn tạo một file DOC?",
      text: `${namefile}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Tạo mới & mở",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "Tài liệu đang được tạo !",
          html: "Hãy chờ  <b> 5s </b> tài liệu sẽ tự mở",
          timer: 5000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });

        var data = await push_data(namefile, "createShareAndMoveGoogleDoc");
        var url = `https://docs.google.com/document/d/${data.data}/edit`;
        window.open(url, "_blank");
      }
    });
  } else {
    Swal.fire(
      'Chú ý!',
      'Hãy đặt tên cho tài liệu này nhé !',
      'warning'
    )
  }
}



