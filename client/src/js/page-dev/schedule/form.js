var info_product = [];
async function show_modal_comment_plan(data) {
  info_form_detail_schedule(data);
  schedule_detail_table(data[3]);
  $("#modal_schedule_comment").modal("show");
}

// CREATE TABLE
async function schedule_detail_table(id) {
  var data = await push_data([[id]], "schedule_detail");
  const regex = /{.*?}/gs;
  const matches = data.data.match(regex);
  const jsonObjects = matches.map((match) => JSON.parse(match));

  create_table_detail(jsonObjects[0].values);

  info_product = jsonObjects[1].values;

  if (info_product[0][0]) {
    document.getElementById("semi_1").style.display = "block";
    document.getElementById("name_semi_1").innerHTML = info_product[0][11];
    document.getElementById("kl_semi_main_1").innerHTML = info_product[0][12];
    document.getElementById("kl_semi_main_2").innerHTML = info_product[0][13];
    document.getElementById("kl_semi_main_3").innerHTML =
      info_product[0][14] + "  ± " + info_product[0][15] + "&nbsp (g)";
  } else {
    document.getElementById("semi_1").style.display = "none";
  }

  if (info_product[0][24]) {
    document.getElementById("semi_2").style.display = "block";
    document.getElementById("name_semi_2").innerHTML = info_product[0][24];
    document.getElementById("kl_semi_sub_1").innerHTML = info_product[0][25];
    document.getElementById("kl_semi_sub_2").innerHTML = info_product[0][26];
    document.getElementById("kl_semi_sub_3").innerHTML =
      info_product[0][27] + "  ± " + info_product[0][28] + "&nbsp (g)";
  } else {
    document.getElementById("semi_2").style.display = "none";
  }
}

function create_table_detail(data_detail_schedule) {
  if (
    $.fn.dataTable.isDataTable("#schedule_detail_table") === true &&
    data_detail_schedule === undefined
  ) {
    $("#schedule_detail_table").DataTable().clear().draw();
  }

  if (data_detail_schedule) {
    var table_schedule_detail = $("#schedule_detail_table").DataTable({
      destroy: true,
      scrollY:
        window.innerWidth < 767 ? $(window).height() - 250 + "px" : "false",
      scrollX: false,
      paging: false,
      info: false,
      bFilter: false,
      bLengthChange: false,
      responsive: true,
      autoWidth: true,
      order: [[1, "desc"]],
      data: data_detail_schedule,
      columns: [
        { title: "ID", className: "text-center" }, //0
        { title: "TIMESTAMP", className: "text-center" }, //1
        { title: "NGƯỜI CẬP NHẬT", className: "text-center" }, //2
        { title: "ID COMBINE", className: "text-center" }, //3
        { title: "SL KẾ HOẠCH", className: "text-center" }, //4
        { title: "LOẠI CÔNG ĐOẠN", className: "text-center" }, //5
        {
          title: "CÔNG ĐOẠN",
          className: "text-center",
          render: function (data, type, row, meta) {
            var schedule_detail = "";

            var num_per = (row[16] * 100).toFixed(1);
            var arrow_detail =
              row[16] * 1 > 1
                ? `<p  class="m-0 p-0 text-warning fw-bold"><i class="fas fa-arrow-up me-5"></i>${num_per}% </p> `
                : row[16] * 1 < 1
                ? `<p  class="m-0 p-0 text-danger fw-bold"><i class="fas fa-arrow-down me-5 "></i>${num_per}% </p> `
                : row[16] * 1 == 1
                ? `<p  class="m-0 p-0 text-success fw-bold"><i class="far fa-check me-5"></i>${num_per}% </p> `
                : "";

            var check_class = "badge bg-csx";
            row[8] == "Hoàn thành" ? (check_class = "  badge bg-ht") : "";
            row[8] == "Dang dỡ" ? (check_class = "  badge bg-dd") : "";
            row[8] == "Đang sản xuất" ? (check_class = "  badge bg-dsx") : "";
            row[8] == ""
              ? ((check_class = "  badge bg-csx"), (row[8] = "Chờ sản xuất"))
              : "";

            schedule_detail = `
                <div style="display:flex;place-content: space-between;place-items:center">
                  <span class="${check_class} fs-8" style="height:fit-content;width: 100px">${row[8]} </span>
                  <div style="display:grid">
                    ${arrow_detail}
                    </div>
                    <div class="dropdown" style="display:flex;justify-content: center;align-items: center">
                      <button  class="btn px-5 edit-schedule-user me-10 " ><i class="fad fa-edit text-primary fs-16" ></i></button>
                    </div>
                </div>
              `;

            var res = `
            <div style="display:flex;place-content: space-between;place-items:center" >
             <p class="m-0 p-0 fw-bold text-info fs-14"> ${data}</p>
             <span class="badge badge-success-light fw-bold">${row[12]}</span>
            </div>
            <div style="text-align: left";>
             <p class="m-0 p-0 "><strong>Kiểm tra bởi: </strong> ${row[13]}</p>
             <p class="m-0 p-0 "><strong>Sản xuất bởi: </strong> ${row[10]}</p>
             <small><strong>Năng suất / phút</strong> : ${row[9]} ${row[7]} / ${row[11]} phút </small>
            </div>
              
             ${schedule_detail}
            `;
            return res;
          },
        }, //6
        { title: "ĐVT", className: "text-center" }, //7
        { title: "TRẠNG THÁI ", className: "text-center" }, //8
        { title: "NĂNG SUẤT", className: "text-center" }, //9
        { title: "CÔNG NHÂN" }, //10
        { title: "THỜI GIAN", className: "text-center" }, //11
        { title: "CHẤT LƯỢNG", className: "text-center" }, //12
        { title: "QC CHECK", className: "text-center" }, //13
        { title: "GHI CHÚ", className: "text-center" }, //14
        { title: "IMAGE", className: "text-center" }, //15
        { title: "%  HOÀN THÀNH", className: "text-center" }, //16
        {
          title: "HISTORY",
          className: "text-center",
          render: function (data, type, row, meta) {
            var val = data ? data : "";
            return val;
          },
        }, //17
      ],
      columnDefs: [
        {
          targets: [0, 1, 2, 3, 4, 5, 7, 9, 8, 11, 10, 12, 13, 14, 15, 16, 17],
          visible: false,
        },
        { responsivePriority: 0, targets: 6 },
      ],
      fnInitComplete: function () {},
    });
  }
  // CLICK update
  $("#schedule_detail_table").on(
    "click",
    "tbody td .edit-schedule-user",
    function () {
      var row = $(this).closest("tr");
      var data_schedule_user = $("#schedule_detail_table")
        .DataTable()
        .row($(this).parents("tr"))
        .data();

      console.log(data_schedule_user);
      if (pos_user == "Admin" || pos_user == "Manager" || pos_user == "QC") {
        console.log(data_schedule_user[13], user_name);
        if (data_schedule_user[13] == user_name) {
          document.getElementById("formSchedule").reset();
          $("#tenCongDoan").val("").trigger("change");
          $("#congNhan").val("").trigger("change");
          $("#modal_add_schedule").modal("show");
          schedule_edit(data_schedule_user);
        } else {
          console.log("123");
          new swal({
            title:
              "Công việc này của " + data_schedule_user[13] + " kiểm soát !",
            text: "Bạn không có quyền cập nhật",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "OK",
            closeOnConfirm: false,
          });
        }
      } else {
        new swal({
          title: "PHÂN QUYỀN",
          text: "Bạn không có quyền cập nhật",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "OK",
          closeOnConfirm: false,
        });
      }
    }
  );
}

// Tính năng suất
function calculator_nangSuat() {
  var nangSuat_new = document.getElementById("nangSuat_new").value * 1;
  var nangSuat_old = document.getElementById("nangSuat_old").value * 1;
  var res_nangSuat = nangSuat_new + nangSuat_old;
  document.getElementById("nangSuat").value = res_nangSuat;
}

// Tính thời gian
function calculator_time_product() {
  var time_new = document.getElementById("time_new").value * 1;
  var time_old = document.getElementById("time_old").value * 1;
  var res_time = time_new + time_old;
  document.getElementById("time_product").value = res_time;
}

//UPLOAD picture error TO GOOGLEDRIVER
function schedule_upload_picture_process_error(e) {
  document.getElementById("submit-form-process").style.display = "none";
  let imageFile = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var img = document.createElement("img");
    img.onload = function (event) {
      var elem = document.createElement("canvas");
      const width = Math.min(800, img.width);
      const scaleFactor = width / img.width;
      elem.width = width;
      elem.height = img.height * scaleFactor;

      const ctx = elem.getContext("2d");
      ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
      var dataurl = elem.toDataURL(imageFile.type);
      document.getElementById("picture_Error").src = dataurl;

      var fileData = dataurl.substr(dataurl.indexOf(",") + 1);
      var mimeTypeStart = dataurl.indexOf("data:") + 5;
      var mimeTypeEnd = dataurl.indexOf(";");
      var mimeType = dataurl.substr(mimeTypeStart, mimeTypeEnd - mimeTypeStart);
      var fileName = imageFile.name;

      google.script.run
        .withFailureHandler(() => {
          showAlert("Cập nhật file lên googleDriver thất bại !", "error");
          document.getElementById("submit-form-process").style.display =
            "inline-block";
        })
        .withSuccessHandler((url) => {
          showAlert("Cập nhật file lên googleDriver thành công !", "success");
          document.getElementById("input_picError").value = url;
          document.getElementById("submit-form-process").style.display =
            "inline-block";
        })
        .schedule_upload_picture_process_error(fileData, mimeType, fileName);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(imageFile);
}

function info_form_detail_schedule(data) {
  document.getElementById("comment_name_product").innerHTML = data[8];
  document.getElementById("comment_lot_product").innerHTML =
    data[5] +
    "&nbsp-&nbsp" +
    data[10] +
    "&nbsp-&nbsp" +
    data[11] +
    "&nbsp" +
    data[9];
  document.getElementById("comment_date_product").innerHTML = data[4];
  document.getElementById("comment_staff_plan").innerHTML = "Mỹ Tiên";
  data[13]
    ? (document.getElementById("comment_avatar_product").src =
        "https://drive.google.com/uc?export=download&id=" + data[13])
    : "https://bst.icons8.com/wp-content/uploads/2021/11/lunacy_free_graphic_design_software.webp";
}

// Mở form cập nhật tiến độ từ popup chi tiết tiết độ
function open_form_update_schedule() {
  $("#modal_add_schedule").modal("show");

  document.getElementById("nameModal_schedule_title").innerHTML =
    "Thêm Mới Công Đoạn";
  document.getElementById("nangSuat_text").style.display = "none";
  document.getElementById("time_text").style.display = "none";

  document.getElementById("formSchedule").reset();
  $("#tenCongDoan").val("").trigger("change");
  $("#congNhan").val("").trigger("change");

  schedule_add_new(data_row_current);

  $("#modal_add_schedule").modal("show");
  picture_prod_error_show();
}

// chọn công nhân
function select_list_workers(data) {
  var list_worker = [];
  data.map((item, index) => {
    list_worker.push({ id: item[4], text: item[4] });
  });

  $("#nguoi_nhan_nc").select2({
    dropdownParent: $("#div_nguoi_nhan_nc"),
    tags: true,
    data: list_worker,
  });

  $("#nguoi_phat_hien").select2({
    dropdownParent: $("#div_nguoi_phat_hien"),
    tags: true,
    data: list_worker,
  });

  $("#congNhan").select2({
    dropdownParent: $("#div_congNhan"),
    tags: true,
    data: list_worker,
  });
}

// chọn công đoạn
function select_list_process(data) {
  var list_process = [];
  data.map((item, index) => {
    list_process.push({ id: item[3], text: item[3], loaiCongDoan: item[4] });
  });
  $("#tenCongDoan")
    .select2({
      dropdownParent: $("#div_tenCongDoan"),
      tags: true,
      data: list_process,
    })
    .on("select2:select", function (e) {
      console.log(e.params.data.loaiCongDoan);
      $("#loaiCongDoan").val(e.params.data.loaiCongDoan);
    });
}

// push data vào form updateschedule
function schedule_add_new(data) {
  $("#search").val(data[8] + "-" + data[5] + "-" + data[10]);
  document.getElementById("search_infor").innerHTML =
    data[8] + "-" + data[5] + "-" + data[10];
  $("#ngayKH").val(data[4]);
  $("#ngaySX").val(data[5]);
  $("#lenhSX").val(data[6]);
  $("#maSP").val(data[7]);
  $("#tenSP").val(data[8]);
  $("#dvt").val(data[9]);
  $("#slKeHoach").val(data[11].replace(/,/g, "."));
  $("#soLo").val(data[10]);
  data[13]
    ? $("#img_SP").val(data[13])
    : $("#img_SP").val("1P8mJ8DCR8S7q6kNoeREb9Mxl3X7aOA00");

  calculator_nangSuat();
  calculator_time_product();
}

function picture_prod_error_show() {
  $("#NOK").is(":checked")
    ? $("#div_picture_prod_error_show").show()
    : $("#div_picture_prod_error_show").hide();
}

// submit tiến độ công đoạn LXBB , CR, DG
function submit_add_schedule(formObject) {
  var id_schedule = formObject.elements["ID_schedule"].value;
  if (id_schedule) {
    edit_schedule(formObject);
  } else {
    new_schedule(formObject);
  }
}

// submit add new
async function new_schedule(formObject) {
  document.getElementById("spin_icon").classList.remove("d-none");
  var id_combine = (
    formObject.elements["maSP"].value + formObject.elements["soLo"].value
  ).replace(/[\/.]/g, "");
  const timeStamp = moment().format("MM/DD/YYYY hh:mm");
  var values = [
    [
      new Date().getTime().toString(),
      timeStamp,
      user_name,
      id_combine,
      formObject.elements["slKeHoach"].value,
      $("#loaiCongDoan").val().toString(),
      $("#tenCongDoan").val().toString(),
      formObject.elements["loaiBaoBi"].value,
      formObject.elements["trangThai"].value,
      formObject.elements["nangSuat"].value,
      $("#congNhan").val().toString(),
      formObject.elements["time_product"].value,
      formObject.elements["result"].value,
      user_name,
      formObject.elements["ghiChu"].value,
      $("#id_file").val(),
      "",
      `${timeStamp} ${user_name} Kiểm tra công đoạn`,
      formObject.elements["img_SP"].value,
      formObject.elements["tenSP"].value,
      formObject.elements["maSP"].value,
      formObject.elements["soLo"].value,
      formObject.elements["ngayKH"].value,
    ],
  ];

  console.log(values);

  $("#modal_add_schedule").modal("toggle");
  document.getElementById("formSchedule").reset();
  $("#tenCongDoan").val("").trigger("change");
  $("#congNhan").val("").trigger("change");

  await push_data(values, "add_new_process");
  document.getElementById("spin_icon").classList.add("d-none");
}

// Tính năng suất
function calculator_nangSuat() {
  var nangSuat_new = document.getElementById("nangSuat_new").value * 1;
  var nangSuat_old = document.getElementById("nangSuat_old").value * 1;
  var res_nangSuat = nangSuat_new + nangSuat_old;
  document.getElementById("nangSuat").value = res_nangSuat;
}

// Tính thời gian
function calculator_time_product() {
  var time_new = document.getElementById("time_new").value * 1;
  var time_old = document.getElementById("time_old").value * 1;
  var res_time = time_new + time_old;
  document.getElementById("time_product").value = res_time;
}

// ADD DATA TO FORM EDIT
function schedule_edit(data) {
  document.getElementById("nameModal_schedule_title").innerHTML =
    "Cập Nhật Lại Công Đoạn";
  document.getElementById("search_infor").innerHTML =
    data_row_current[7] +
    "-" +
    data_row_current[8] +
    "-" +
    data_row_current[9] +
    "-" +
    data_row_current[10];

  $("#search").val(data[6] + "-" + data[8] + "-" + data[9]);
  document.getElementById("ID_schedule").value = data[0];
  document.getElementById("loaiCongDoan").value = data[5];
  document.getElementById("ngayKH").value = data_row_current[4];
  document.getElementById("maSP").value = data_row_current[7];
  document.getElementById("tenSP").value = data_row_current[8];
  document.getElementById("soLo").value = data_row_current[10];
  document.getElementById("slKeHoach").value = data[11];
  $("#tenCongDoan").val(data[6].split(",")).trigger("change");
  document.getElementById("loaiBaoBi").value = data[7];
  document.getElementById("trangThai").value = data[8];
  document.getElementById("nangSuat_old").value = data[9];
  document.getElementById("nangSuat_text").innerHTML =
    "(Đã sản xuất :" + data[4] + "/" + data[9] + ")";
  document.getElementById("time_text").innerHTML =
    "(Số phút sản xuất :" + data[11] + ")";
  document.getElementById("nangSuat_text").style.display = "block";
  document.getElementById("time_text").style.display = "block";

  $("#congNhan").val(data[10].split(",")).trigger("change");
  document.getElementById("time_old").value = data[11];
  document.getElementById(data[12]).checked = true;
  document.getElementById("ghiChu").value = data[14];
  document.getElementById("img_SP").value = data_row_current[13];
  calculator_nangSuat();
  calculator_time_product();
}

// submit add new
async function edit_schedule(formObject) {
  document.getElementById("spin_icon").classList.remove("d-none");
  var id_combine = (
    formObject.elements["maSP"].value + formObject.elements["soLo"].value
  ).replace(/[\/.]/g, "");
  const timeStamp = moment().format("MM/DD/YYYY hh:mm");
  var values = [
    [
      formObject.elements["ID_schedule"].value,
      timeStamp,
      user_name,
      id_combine,
      formObject.elements["slKeHoach"].value,
      $("#loaiCongDoan").val().toString(),
      $("#tenCongDoan").val().toString(),
      formObject.elements["loaiBaoBi"].value,
      formObject.elements["trangThai"].value,
      formObject.elements["nangSuat"].value,
      $("#congNhan").val().toString(),
      formObject.elements["time_product"].value,
      formObject.elements["result"].value,
      user_name,
      formObject.elements["ghiChu"].value,
      $("#id_file").val(),
      "",
      `${timeStamp} ${user_name} cập nhật công đoạn`,
      formObject.elements["img_SP"].value,
      formObject.elements["tenSP"].value,
      formObject.elements["maSP"].value,
      formObject.elements["soLo"].value,
      formObject.elements["ngayKH"].value,
    ],
  ];

  console.log(values);

  $("#modal_add_schedule").modal("toggle");
  document.getElementById("formSchedule").reset();
  $("#tenCongDoan").val("").trigger("change");
  $("#congNhan").val("").trigger("change");

  await push_data(values, "edit_schedule_process");
  document.getElementById("spin_icon").classList.add("d-none");
}

async function open_form_update_schedule_fill() {
  reset_form_info_product();
  $("#modal_update_product").modal("show");

  var isoDate = moment(info_product[0][35], "DD/MM/YYYY").format("YYYY-MM-DD");

  $("#id").val(info_product[0][0]);
  $("#timestamp").val(info_product[0][1]);
  $("#nguoi_cap_nhat").val(info_product[0][2]);
  $("#thuong_hieu").val(info_product[0][3]);
  $("#cong_dung").val(info_product[0][4]);
  $("#nhom_hang").val(info_product[0][5]);
  $("#dung_tich").val(info_product[0][6]);
  $("#tinh_trang").val(info_product[0][7]);
  $("#ma_hang").val(info_product[0][8]);
  $("#ten_san_pham").val(info_product[0][9]);
  $("#don_vi_tinh").val(info_product[0][10]);
  $("#ten_btp_I").val(info_product[0][11]);
  $("#dung_sai_1").val(info_product[0][12]);
  $("#kl_bao_bi_1").val(info_product[0][13]);
  $("#kl_btp_1").val(info_product[0][14]);
  $("#tong_kl_1").val(info_product[0][15]);
  $("#ngoai_quan_1").val(info_product[0][16]);
  $("#mau_1").val(info_product[0][17]);
  $("#mui_1").val(info_product[0][18]);
  $("#ph_1").val(info_product[0][19]);
  $("#do_nhot_1").val(info_product[0][20]);
  $("#ty_trong_1").val(info_product[0][21]);
  $("#ten_sp_2").val(info_product[0][22]);
  $("#don_vi_2").val(info_product[0][23]);
  $("#ten_btp_2").val(info_product[0][24]);
  $("#dung_sai_2").val(info_product[0][25]);
  $("#kl_bao_bi_2").val(info_product[0][26]);
  $("#kl_btp_2").val(info_product[0][27]);
  $("#tong_kl_2").val(info_product[0][28]);
  $("#ngoai_quan_2").val(info_product[0][29]);
  $("#mau_2").val(info_product[0][30]);
  $("#mui_2").val(info_product[0][31]);
  $("#ph_2").val(info_product[0][32]);
  $("#do_nhot_2").val(info_product[0][33]);
  $("#ty_trong_2").val(info_product[0][34]);
  $("#ngay_cong_bo").val(isoDate);
  $("#so_cong_bo").val(info_product[0][36]);
  $("#ten_cong_bo").val(info_product[0][37]);
  $("#hinh_anh").val(info_product[0][38]);
  $("#ghi_chu").val(info_product[0][39]);
  $("#lich_su_thay_doi").val(info_product[0][40]);

  info_product[0][38]
    ? info_product[0][38].split("/").map((e) => {
        console.log(e);
        e ? review_image(e) : "";
      })
    : "";
}

async function update_thong_tin_san_pham() {
  document.getElementById("spin_icon_2").classList.remove("d-none");
  var data_update = [
    $("#id").val(),
    $("#timestamp").val(),
    $("#nguoi_cap_nhat").val(),
    $("#thuong_hieu").val(),
    $("#cong_dung").val(),
    $("#nhom_hang").val(),
    $("#dung_tich").val(),
    $("#tinh_trang").val(),
    $("#ma_hang").val(),
    $("#ten_san_pham").val(),
    $("#don_vi_tinh").val(),
    $("#ten_btp_I").val(),
    $("#dung_sai_1").val(),
    $("#kl_bao_bi_1").val(),
    $("#kl_btp_1").val(),
    $("#tong_kl_1").val(),
    $("#ngoai_quan_1").val(),
    $("#mau_1").val(),
    $("#mui_1").val(),
    $("#ph_1").val(),
    $("#do_nhot_1").val(),
    $("#ty_trong_1").val(),
    $("#ten_sp_2").val(),
    $("#don_vi_2").val(),
    $("#ten_btp_2").val(),
    $("#dung_sai_2").val(),
    $("#kl_bao_bi_2").val(),
    $("#kl_btp_2").val(),
    $("#tong_kl_2").val(),
    $("#ngoai_quan_2").val(),
    $("#mau_2").val(),
    $("#mui_2").val(),
    $("#ph_2").val(),
    $("#do_nhot_2").val(),
    $("#ty_trong_2").val(),
    $("#ngay_cong_bo").val(),
    $("#so_cong_bo").val(),
    $("#ten_cong_bo").val(),
    $("#hinh_anh").val(),
    $("#ghi_chu").val(),
    $("#lich_su_thay_doi").val(),
  ];

  await push_data(data_update, "update_info_product");
  reset_form_info_product();
  $("#modal_update_product").modal("hide");
  showAlert("Đã sửa thành công !", "success");
  document.getElementById("spin_icon_2").classList.add("d-none");
}

function reset_form_info_product() {
  $("#form_update_info_product").trigger("reset");
  $("#kt_dropzonejs_example_2").empty();

  $("#kt_dropzonejs_example_2").append(`
    <div class="dz-message needsclick" style="display:block">
        <i class="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
        <div class="ms-4">
          <h3 class="fs-5 fw-bold mb-1 text-info">
            <i class="fad fa-cloud-upload me-10"></i>
            Click chọn file cần upload
          </h3>
          <input class="d-none" type="text" id="hinh_anh" />
        </div>
      </div>
  `);
}
