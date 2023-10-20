var data_human_list = [];
var list_human = [];
var vitri_dong_sua;
document.addEventListener("DOMContentLoaded", function () {
  functionInit();
  get_data_initial();
});

async function get_data_initial() {
  $("#tree_doc_show").hide();
  document.getElementById("spinner").style.display = "block";

  var data = await get_data("get_data_initial_human");

  data_human_list = data.values;
  initial_table_human(data_human_list);
  select_permision();
}

function initial_table_human(data_human_list) {
  if (data_human_list != undefined) {
    var l = 0;
    var k = 0;
    var j = 0;
    var h = 0;
    data_human_list.map((e) => {
      l = l + 1;
      if (e[10] == "Đang làm việc") {
        h = h + 1;
      } else if (e[10] == "Chờ phê duyệt") {
        j = j + 1;
      } else if (e[10] == "Đã nghỉ việc") {
        k = k + 1;
      }
      e[2] != "admin" ? list_human.push({ id: e[6], text: e[6] }) : "";
    });

    $("#total").text(l);
    $("#Stop").text(k);
    $("#Waitting").text(j);
    $("#Actived").text(h);

    if ($.fn.dataTable.isDataTable("#table_human")) {
      $("#table_human").DataTable().clear().rows.add(data_human_list).draw();
    } else {
      create_table_human(data_human_list);
    }
  } else {
    create_table_human([]);
  }

  document.getElementById("spinner").style.display = "none";
  return;
}

function create_table_human(data) {
  // $.fn.dataTable.moment("DD/MM/YYYY");

  var table_human = $("#table_human").DataTable({
    buttons: [
      {
        extend: "copy",
        className: "btn-success",
      },
      {
        extend: "excel",
        className: "btn-danger",
      },
      {
        extend: "pdf",
        className: "btn-warning",
      },
      {
        extend: "print",
        className: "btn-info",
      },
    ],
    dom: "Bfrtip",
    bFilter: false,
    fnInitComplete: function () {
      $(".dt-buttons").toggle();

      $(".dataTables_scrollBody").slimscroll({
        height: $(window).height() - 300 + "px",
        color: "red",
        axis: "both",
      });
    },
    responsive: true,
    autoWidth: true,
    destroy: true,
    scrollCollapse: true,
    deferRender: true,
    scrollY: true,
    scrollX: true,
    bLengthChange: false,
    order: [0, "asc"],
    info: false, // Hiển thị thông tin số bản ghi
    language: {
      paginate: {
        first: "Đầu",
        last: "Cuối",
        next: "Tiếp",
        previous: "Trước",
      },
    },
    data: data,
    columns: [
      { title: "ID" }, // 1
      { title: "Dấu thời gian" }, // 0
      { title: "Tên đăng nhập" }, // 3
      { title: "Mật khẩu" }, // 4
      { title: "Hình ảnh" }, //5
      { title: "Mã nhân viên" }, // 2
      {
        title: "Tên nhân viên",
        render: function (data, type, row, meta) {
          var image = row[4]
            ? "https://drive.google.com/uc?export=view&id=" + row[4]
            : "https://drive.google.com/uc?export=view&id=1ol7mZ9xsisiih6hJlskj2w_qjXADfTyj";
          return `<div style = "white-space: normal;display: flex;">
          <div style="display:grid;place-items: center;align-content: center;" class="me-10">
            <img class="zoom-image-prod " src="${image}" height="30px" style="border-radius: 5px">
          </div>
          <div>
            <p class="text-info fw-bold mb-0 open-link-prod hover-warning">
              ${data}
            </p>
          </div>

          </div>`;
        },
      }, // 6
      { title: "Chức vụ" }, // 7
      { title: "Số điện thoại" }, // 8
      { title: "Email" }, // 9
      {
        title: "Trạng thái",
        render: function (data, type, row, meta) {
          var combine_style = "";
          data == "Chờ phê duyệt"
            ? (combine_style =
                '<span class="icon fad fa-pause me-10 text-warning"></span>' +
                data)
            : "";
          data == "Đang làm việc"
            ? (combine_style =
                '<span class="icon fad fa-check-square me-10 text-success"></span>' +
                data)
            : "";
          data == "Đã nghỉ việc"
            ? (combine_style =
                '<span class="icon fad fa-window-close me-10 text-danger"></span>' +
                data)
            : "";
          var res =
            '<div class="dropdown">' +
            '<button class=" btn btn-primary-light btn-sm fs-12 dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" id="pd' +
            row[0] +
            '">' +
            combine_style +
            "</button>" +
            '<div class="dropdown-menu dropdown-grid  cols-3" style="">' +
            '<a class="dropdown-item text-primary" href="#" id="pd-4_' +
            row[0] +
            '">' +
            '<span class="pd-iso icon fad fa-pause text-warning me-10 hover-danger" name ="Chờ phê duyệt"></span>' +
            '<span class="title fs-10">Chờ phê duyệt</span>' +
            "</a>" +
            '<a class="dropdown-item text-success" href="#" id="pd-2_' +
            row[0] +
            '">' +
            '<span class="pd-iso icon fad fa-check-square text-success me-10 hover-danger" name ="Đang làm việc"></span>' +
            '<span class="title fs-10">Đang làm việc</span>' +
            "</a>" +
            '<a class="dropdown-item text-danger" href="#" id="pd-3_' +
            row[0] +
            '">' +
            '<span class="pd-iso icon fad fa-window-close text-info me-10 hover-danger" name ="Đã nghỉ việc"></span>' +
            '<span class="title fs-10">Đã nghỉ việc</span>' +
            "</a>" +
            "</div>" +
            "</div>";
          return res;
        },
      }, // 10
      {
        title: "Phân quyền",
        render: function (data, type, row, meta) {
          return `<div style = "white-space: normal;display: flex;">
            <p class="text-info hover-warning mb-0" style="width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; cursor:pointer" title="${data}">
            ${data}
            </p>
          </div>`;
        },
      }, // 11
      { title: "Bộ phận" }, // 12
      { title: "Quyền thêm  tài liệu" }, // 13
      { title: "Quyền cho phép user thêm tài liệu" }, // 14

      {
        data: null,
        title: "Thao tác",
        className: "uniqueClassName",
        orderable: false,
        render: function (data, type, row) {
          var dis_delete = id_staff != "admin" ? "d-none" : "";
          return `<div class="dropdown" style="display:flex;justify-content: center;align-items: center">
          <a href="#"  class=" btn  px-5 editor-edit me-10"><i class="fad fa-edit fs-14 text-warning"></i></a>
          <a href="#"  class="${dis_delete} btn  px-5 editor-delete"><i class="fad fa-trash-alt fs-14 text-danger"></i></a>
            </div>`;
        },
      },
    ],

    columnDefs: [
      { targets: [4, 13, 14], visible: false },
      { responsivePriority: 1, targets: 6 },
      { responsivePriority: 0, targets: -1 },
    ],
  });

  // thay đồi trạng thái
  $("#table_human").on("click", "tbody td .pd-iso ", function (e) {
    var idx = table_human.row($(this).parents("tr")).index();
    const data = table_human.row(idx).data();

    const myClass = $(this).attr("class");
    const values = $(this).attr("name");

    document.getElementById("pd" + data[0]).innerHTML =
      '<span class="' + myClass + '" name = "' + values + '"></span>' + values;
    data.splice(10, 1, values);
    console.log([data]);
    push_data([data], "change_status_human");
  });
  // fillter
  $("#filterbox").on("change", function () {
    var key_word = this.value.toLowerCase();
    var result = data_human_list.filter(function (e) {
      if (
        e[2].toLowerCase().includes(key_word) ||
        e[3].toLowerCase().includes(key_word) ||
        e[5].toLowerCase().includes(key_word) ||
        e[6].toLowerCase().includes(key_word)
      ) {
        return e;
      }
    });
    $("#table_human").DataTable().clear().rows.add(result).draw();
    $("#table_human").DataTable().search("").draw();
  });

  // CLICK EDIT
  $("#table_human").on("click", "tbody td .editor-edit", function (e) {
    var idx = table_human.row($(this).parents("tr")).index();

    console.log(idx);
    vitri_dong_sua = idx;
    var data = table_human.row(idx).data();
    reset_form();
    $("#title_form").text("SỬA DỮ LIỆU NHÂN VIÊN");
    $("#modal_human_form").modal("show");
    fill_form_human(data);
  });

  // CLICK DELETE
  $("#table_human").on("click", "tbody td .editor-delete", function (e) {
    var row = $(this).closest("tr");
    var table = table_human.row($(this).parents("tr"));
    var data = table.data();

    var id = data[0];

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
        table.remove().draw();

        deleta_data(id, "delete_data_human");
      }
    );
  });
}

function show_hide_button() {
  $(".dt-buttons").toggle();
}

// Lấy danh sách các thẻ có class là "box"
const boxes = document.querySelectorAll(".box_click");

// Lặp qua danh sách các thẻ và gán sự kiện click cho từng thẻ
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Nếu thẻ được click, thêm class "active" và loại bỏ class "inactive" (nếu có)
    box.classList.add("active_but_1");
    box.classList.remove("inactive");

    // Lặp qua danh sách các thẻ khác và loại bỏ class "active" và thêm class "inactive" (nếu có)
    boxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.remove("active_but_1");
        otherBox.classList.add("inactive");
      }
    });
  });

  // Gán sự kiện mouseleave cho từng thẻ để loại bỏ class "active" nếu thẻ không được click
  box.addEventListener("mouseleave", () => {
    if (!box.classList.contains("active_but_1")) {
      box.classList.remove("active_but_1");
      box.classList.add("inactive");
    }
  });
});
