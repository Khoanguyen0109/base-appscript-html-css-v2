var data_work = [];
var vitri_dong_sua;
var hide_desk = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 21, 23];

var hide_mobile = [
  0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
var hide_info = window.innerWidth < 767 ? hide_mobile : hide_desk;

document.addEventListener("DOMContentLoaded", async function () {
  $(".fill-buttons").toggle();

  functionInit();

  var data = await get_data("get_data_initial_schedule");

  const regex = /{.*?}/gs;
  const matches = data.match(regex);
  const jsonObjects = matches.map((match) => JSON.parse(match));

  get_data_work(jsonObjects[0].values);
  select_list_process(jsonObjects[1].values);
  select_list_workers(jsonObjects[2].values);
});

async function getAllPlan() {
  document.getElementById("spin_icon_3").classList.remove("d-none");
  var data = await get_data("getAllPlan");

  const regex = /{.*?}/gs;
  const matches = data.match(regex);
  const jsonObjects = matches.map((match) => JSON.parse(match));
  get_data_work(jsonObjects[0].values);
  select_list_process(jsonObjects[1].values);
  select_list_workers(jsonObjects[2].values);
  document.getElementById("spin_icon_3").classList.add("d-none");
}

function get_data_work(data) {
  document.getElementById("spinner").style.display = "block";
  var today = moment().format("YYYY-MM-DD");
  var a = 0,
    b = 0,
    c = 0,
    d = 0,
    s = 0,
    f = 0;
  data_work = data.filter((item) => {
    a = a + 1;
    item[22] == "Đang sản xuất" ? (b = b + 1) : "";
    item[22] == "Dang dỡ" ? (c = c + 1) : "";
    item[22] == "Chờ sản xuất" ? (d = d + 1) : "";
    item[22] == "Hoàn thành" ? (s = s + 1) : "";
    item[4] == today ? (f = f + 1) : "";
    return item;
  });

  $("#tong_ke_hoach").text(a);
  $("#dang_san_xuat").text(b);
  $("#dang_do").text(c);
  $("#cho_san_xuat").text(d);
  $("#hoan_thanh").text(s);
  $("#hom_nay").text(f);

  install_init(data_work);
}

function install_init(data) {
  if (data != undefined) {
    if ($.fn.dataTable.isDataTable("#table_doc")) {
      $("#table_doc").DataTable().clear().rows.add(data).draw();
    } else {
      create_tabl_work(data);
    }
  } else {
    create_tabl_work([]);
  }
  document.getElementById("spinner").style.display = "none";
  return;
}

function create_tabl_work(data) {
  var table_doc = $("#table_doc").DataTable({
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
      if (window.innerWidth > 767) {
        $(".dataTables_scrollBody").slimscroll({
          height: $(window).height() - 360 + "px",
          color: "red",
          axis: "both",
        });
      }
    },
    responsive: true,
    autoWidth: true,
    destroy: true,
    deferRender: true,
    scrollY:
      window.innerWidth < 767 ? $(window).height() - 150 + "px" : "false",
    scrollX: false,
    bLengthChange: false,
    paging: true,
    info: false, // Hiển thị thông tin số bản ghi
    order: [4, "desc"],
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
      { title: "ID", className: "text-center" }, //0
      { title: "TIMESTAMP", className: "text-center" }, //1
      { title: "NGƯỜI CẬP NHẬT", className: "text-center" }, //2
      { title: "ID COMBINE", className: "text-center" }, //3
      { title: "NGÀY KẾ HOẠCH", className: "text-center" }, //4
      { title: "NGÀY SẢN XUẤT", className: "text-center" }, //5
      { title: "SỐ LỆNH", className: "text-center" }, //6
      { title: "MÃ ", className: "text-center" }, //7
      {
        title: "TÊN  SẢN PHẨM",
        render: function (data, type, row, meta) {
          var schedule = "";

          if (window.innerWidth < 767) {
            var num_per = (row[21] * 100).toFixed(1);
            var arrow =
              row[21] * 1 > 1
                ? `<p  class="m-0 p-0 text-warning fw-bold"><i class="fas fa-arrow-up me-5"></i>${num_per}% </p> `
                : row[21] * 1 < 1
                ? `<p  class="m-0 p-0 text-danger fw-bold"><i class="fas fa-arrow-down me-5 "></i>${num_per}% </p> `
                : row[21] * 1 == 1
                ? `<p  class="m-0 p-0 text-success fw-bold"><i class="far fa-check me-5"></i>${num_per}% </p> `
                : "";

            var check_class = "badge bg-csx";
            row[22] == "Hoàn thành" ? (check_class = "  badge bg-ht") : "";
            row[22] == "Dang dỡ" ? (check_class = "  badge bg-dd") : "";
            row[22] == "Đang sản xuất" ? (check_class = "  badge bg-dsx") : "";
            row[22] == ""
              ? ((check_class = "  badge bg-csx"), (row[22] = "Chờ sản xuất"))
              : "";

            schedule = `
          <div class="d-xl-inline-flex d-xl-none mt-10">
            <hr class="mt-5 mb-10"/>
            <div style="display:flex">
            <div style="display: grid;text-align-last:center;width:60px">
              <small class="fw-bold fs-8">XLBB</small>
              <small class="fw-bold text-primary fs-8" style="height:fit-content;width: 60px">${row[17]} </small>
            </div>
            <i class=" ms-5 me-5 fas fa-long-arrow-alt-right"></i>
            <div style="display: grid;text-align-last:center;width:60px">
              <small class="fw-bold fs-8">Chiết rót </small>
              <small class="fw-bold text-primary fs-8" style="height:fit-content;width: 60px">${row[18]} </small>
            </div>
            <i class=" ms-5 me-5 fas fa-long-arrow-alt-right"></i>
            <div style="display: grid;text-align-last:center;width:60px">
              <small class="fw-bold fs-8">Đóng gói </small>
              <small class="fw-bold text-primary fs-8" style="height:fit-content;width: 60px">${row[19]} </small>
            </div>
            <i class=" ms-5 me-5 fas fa-long-arrow-alt-right"></i>
            <div style="display: grid;text-align-last:center;width:60px">
              <small class="fw-bold fs-8">Nhập Kho </small>
              <small class="fw-bold text-primary fs-8" style="height:fit-content;width: 60px">${row[19]} <small class="text-mute">/ ${row[11]}</small>  </small>
            </div>
           
            </div>
             <hr class="mt-10 mb-0"/>
            <div style="display:flex;place-content: space-between;place-items:center">
              <span class="${check_class} fs-8" style="height:fit-content;width: 100px">${row[22]} </span>
               <div style="display:grid">
                ${arrow}
              </div>
              <div class="dropdown" style="display:flex;justify-content: center;align-items: center">
                <button  class=" btn  px-5 editor-edit-note me-10 comment-plan" id="${row[3]}"><i class="fas fa-user-check fs-16 text-info"></i></button>
                <button  class=" btn  px-5 editor-edit-note me-10" ><i class="fad fa-edit text-primary fs-16" ></i></button>
                <button  class=" btn  px-5 editor-delete"><i class="fad fa-trash-alt fs-16 text-danger"></i></button>
              </div>
            </div>
          </div>
          `;
          }

          var status_print = row[12]
            ? `<span class="badge bg-primary " style="width:fit-content">${row[12]}</span>`
            : "";

          var id_img = row[13]
            ? `https://drive.google.com/uc?id=${row[13]}`
            : "https://bst.icons8.com/wp-content/uploads/2021/11/lunacy_free_graphic_design_software.webp";

          var check_cb = row[14] ? "text-success" : "text-danger";

          return `
      <div style="display:grid" >
        <div style="display:flex">
        <img class="me-5" src="${id_img}" height="50px" width="50px" style="border-radius:5px">
          <div style="display:grid">
              <p class="view_doc_main mb-0 hover-danger fw-bold ${check_cb}" style=" display: block;width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: wrap;"> ${data}</p>
              <div>
                <span class="badge bg-csx" style="width:fit-content">${row[5]} </span>
                <span class="badge bg-csx " style="width:fit-content">${row[10]}</span>
                <span class="badge bg-csx " style="width:fit-content">${row[11]} ${row[9]} </span>
                ${status_print}
              </div>
          </div> 
        </div>
        ${schedule}
      </div>`;
        },
      }, //8
      { title: "ĐVT", className: "text-center" }, //9
      { title: "SỐ LOT", className: "text-center" }, //10
      { title: "SỐ LƯỢNG", className: "text-center" }, //11
      { title: "GHI CHÚ", className: "text-center" }, //12
      { title: "IMAGE", className: "text-center" }, //13
      { title: "CÔNG BỐ", className: "text-center" }, //14
      {
        title: "1. PHA CHẾ",
        className: "text-center",
        render: function (data, row) {
          var check_class = "  form-select bg-csx";

          data == "Hoàn thành" ? (check_class = "  form-select bg-ht") : "";
          data == "Dang dỡ" ? (check_class = "  form-select bg-dd") : "";

          data == ""
            ? ((check_class = "  form-select bg-csx"), (data = "Chờ sản xuất"))
            : "";

          const res = `<select class="${check_class}  text-center btn btn-sm"  id="pha_che_${row[0]}"  style="border:none" onchange="handleChange(this,'${row[0]}','U')">
    <option value="${data}" hidden >${data}</option>
    <option class="text-center btn btn-sm  form-select bg-ht"  >Hoàn thành</option>
    <option class=" text-center btn btn-sm  form-select bg-dd " >Dang dỡ</option>
    <option class=" text-center btn btn-sm  form-select bg-csx" >Chờ sản xuất</option>
  </select>`;
          return res;
        },
      }, //15
      {
        title: "2. XUẤT BAO BÌ",
        className: "text-center",
        render: function (data, row) {
          var check_class = "  form-select bg-csx";

          data == "Hoàn thành" ? (check_class = "  form-select bg-ht") : "";
          data == "Dang dỡ" ? (check_class = "  form-select bg-dd") : "";

          data == ""
            ? ((check_class = "  form-select bg-csx"), (data = "Chờ sản xuất"))
            : "";

          const res = `<select class="${check_class}  text-center btn btn-sm"  id="xuat_bao_bi_${row[0]}"  style="border:none" onchange="handleChange(this,'${row[0]}','U')">
    <option value="${data}" hidden >${data}</option>
    <option class="text-center btn btn-sm  form-select bg-ht"  >Hoàn thành</option>
    <option class=" text-center btn btn-sm  form-select bg-dd " >Dang dỡ</option>
    <option class=" text-center btn btn-sm  form-select bg-csx" >Chờ sản xuất</option>
  </select>`;
          return res;
        },
      }, //16
      { title: "3.XLBB", className: "text-center" }, //17
      { title: "4. CHIẾT RÓT", className: "text-center" }, //18
      { title: "5. ĐÓNG GÓI", className: "text-center" }, //19
      {
        title: "6. NHẬP KHO",
        className: "text-center",
        render: function (data, type, row, meta) {
          var num_per = (row[21] * 100).toFixed(1);
          var arrow =
            row[21] * 1 > 1
              ? `<p  class="m-0 p-0 text-warning fw-bold"><i class="fas fa-arrow-up me-5"></i>${num_per}% </p> `
              : row[21] * 1 < 1
              ? `<p  class="m-0 p-0 text-danger fw-bold"><i class="fas fa-arrow-down me-5 "></i>${num_per}% </p> `
              : row[21] * 1 == 1
              ? `<p  class="m-0 p-0 text-success fw-bold"><i class="far fa-check me-5"></i>${num_per}% </p> `
              : "";

          return `
        <div style="display:grid" >
        <p  class="m-0 p-0"> <strong class="text-info">${data} </strong>/ ${row[11]} </p>
        
         ${arrow} 
        </div>
    `;
        },
      }, //20
      { title: "TỶ LỆ HOÀN THÀNH", className: "text-center" }, //21
      {
        title: "TIẾN ĐỘ",
        className: "text-center",
        render: function (data, row) {
          var check_class = "form-select bg-csx";

          data == "Hoàn thành" ? (check_class = "  form-select bg-ht") : "";
          data == "Dang dỡ" ? (check_class = "  form-select bg-dd") : "";
          data == "Đang sản xuất" ? (check_class = "  form-select bg-dsx") : "";
          data == ""
            ? ((check_class = "  form-select bg-csx"), (data = "Chờ sản xuất"))
            : "";

          const res = `<select class="${check_class} btn btn-sm text-center"  id="tien_do_${row[0]}"  style="border:none" onchange="handleChange(this,'${row[0]}','U')">
          <option value="${data}" hidden >${data}</option>
          <option class="text-center  btn btn-sm form-select bg-ht"  >Hoàn thành</option>
          <option class=" text-center  btn btn-sm form-select bg-dd " >Dang dỡ</option>
          <option class=" text-center  btn btn-sm form-select bg-csx" >Chờ sản xuất</option>
          <option class=" text-center  btn btn-sm form-select bg-dsx" >Đang sản xuất</option>

        </select>`;
          return res;
        },
      }, //22
      {
        title: "HISTORY",
        className: "text-center",
        render: function (data, row) {
          var result = data ? data : "";
          return result;
        },
      }, //23

      {
        data: null,
        title: "HÀNH ĐỘNG",
        className: "uniqueClassName",
        orderable: false,
        render: function (data, type, row) {
          var res = `<div class="dropdown ms-10">
                        <button class=" btn  btn-sm fs-12 dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" ></button>
                
                        <div class="dropdown-menu dropdown-grid  cols-3" style="">
    <a class="dropdown-item text-warning print-hsl" href="#" id= "CD_${row[0]}" >
                        <span class="prev-iso icon fad fa-tasks text-warning me-10" ></span>
                        <span class="title fs-10">Công đoạn</span>
                        </a>
    <a class="dropdown-item text-success print-nvl " href="#" id= "NVL_${row[0]}" > 
                        <span class="prev-iso icon fad fa-box text-success me-10" ></span>
                        <span class="title fs-10">Nguyên vật liệu</span>
                        </a>
    <a class="dropdown-item text-danger print-ct" href="#" id= "CT_${row[0]}" >
                        <span class="prev-iso icon fad fa-clipboard-list text-danger me-10"></span>
                        <span class="title fs-10">Pha chế</span>
                        </a>
                        </div>
                        </div>`;

          return `<div style="display:flex;justify-content: center;align-items: center">
         <button  class=" btn  px-5 editor-edit-note me-10 comment-plan" id="${row[3]}"><i class="fas fa-info-square fs-16 text-info"></i></button>
         <button  class=" btn  px-5 edit-plan me-10" ><i class="fad fa-edit text-primary fs-14" ></i></button>
          <button  class=" btn  px-5 editor-delete"   ><i class="fad fa-trash-alt fs-14 text-danger"></i></button>

          ${res}
            </div>`;
        },
      }, //11
    ],

    columnDefs: [
      {
        targets: hide_info,
        visible: false,
      },
      // { responsivePriority: 1, targets: 5 },
      { responsivePriority: 0, targets: 8 },
    ],
    rowGroup: {
      dataSrc: function (row) {
        var name =
          '<p class="fw-bold me-10 mb-0 text-info"><i class="fas fa-notes-medical me-10"></i>' +
          row[4] +
          "</p>";
        return name;
      },
    },
  });
  // CLICK EDIT
  $("#table_doc").on("click", "tbody td .editor-edit", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    var position = document.getElementById("userPosition").innerHTML;
    if (position == "Admin") {
      plan_edit(data, idx);
    } else {
      sweetAlert("Bạn không có quyền sửa kế hoạch !", "error");
    }
  });

  // CLICK in hsl onclick="dowload_ncr('${row[3]}',0,false,'${row[12]}','${row[0]}')"
  $("#table_doc").on("click", "tbody td .print-hsl", async function (e) {
    document.getElementById("spin_icon_4").classList.remove("d-none");
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    vitri_dong_sua = idx;
    dowload_ncr(data[3], "0", false, data[12], data[0], data);
  });

  $("#table_doc").on("click", "tbody td .print-nvl", async function (e) {
    document.getElementById("spin_icon_4").classList.remove("d-none");
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    vitri_dong_sua = idx;
    dowload_ncr(data[3], "2045959136", true, data[12], data[0], data);
  });

  $("#table_doc").on("click", "tbody td .print-ct", async function (e) {
    document.getElementById("spin_icon_4").classList.remove("d-none");
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    vitri_dong_sua = idx;
    dowload_ncr(data[3], "118501597", true, data[12], data[0], data);
  });

  // SỬA KẾ HOẠCH
  $("#table_doc").on("click", "tbody td .edit-plan", function (e) {
    var data = table_doc.row($(this).parents("tr")).data();
    var idx = table_doc.row($(this).parents("tr")).index();
    plan_edit(data, idx);
  });

  // CLICK COMMENT
  $("#table_doc").on("click", "tbody td .comment-plan", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    data_row_current = data;
    show_modal_comment_plan(data);
  });
}

$("#filterbox").on("change", function () {
  var key_word = this.value.toLowerCase();
  console.log(data_work);
  var result = data_work.filter(function (e) {
    if (
      e[8].toLowerCase().includes(key_word) ||
      e[7].toLowerCase().includes(key_word)
    ) {
      return e;
    }
  });

  $("#table_doc").DataTable().clear().rows.add(result).draw();
});

function reset_table() {
  $("#filterbox").val("");
  $("#fill_muc_tai_lieu").val("");
  if ($(".fill-buttons").is(":visible")) {
    $(".fill-buttons").toggle();
  }

  boxes.forEach((otherBox) => {
    otherBox.classList.remove("active_but_1");
    otherBox.classList.add("inactive");
  });

  document.getElementById("spinner").style.display = "block";
  setTimeout(function () {
    $("#table_doc").DataTable().clear().rows.add(data_work).draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
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

// resize  table
$(window).on("resize", function () {
  var table = $("#table_doc").DataTable();
  table.columns.adjust();
});

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
  document.getElementById("spin_icon_4").classList.add("d-none");
}

function dowload_ncr(
  id,
  id_sheet,
  portrait,
  content_old,
  id_unique,
  data_table
) {
  let content = "";
  let check_split = content_old ? "|" : "";
  if (id_sheet == "0") {
    content = `HSL ${check_split} ${content_old}`;
  } else if (id_sheet == "2045959136") {
    content = `NVL ${check_split} ${content_old}`;
  } else if (id_sheet == "118501597") {
    content = `CT' ${check_split} ${content_old}`;
  }

  document.getElementById("spinner").style.display = "block";
  setTimeout(async function () {
    var values = [id, id_sheet, portrait, content, id_unique];

    var data = await push_data(values, "dowload_pdf_HSL");

    document.getElementById("spinner").style.display = "none";

    var uri =
      "data:application/pdf;charset=ISO-8859-1;base64," +
      encodeURIComponent(data.data);
    downloadURI(uri, "Hồ sơ lô - " + id + ".pdf");
  }, 100);

  var table = $("#table_doc").DataTable();
  data_table[12] = content;

  effec_action_table_edit(table, data_table, vitri_dong_sua);
}

function effec_action_table_edit(table, values, idx) {
  showAlert("Đã sửa thành công !", "warning");

  table.row(idx).data(values).draw(false);
  // Highlight the updated row

  var rowNode = table.row(idx).node();
  // console.log(rowNode)
  $(rowNode).toggleClass("highlight-row");

  // Remove the highlight class after 5 seconds
  setTimeout(function () {
    $(rowNode).toggleClass("highlight-row");
  }, 5000);
}

function filter_status_plan(id) {
  document.getElementById("spinner").style.display = "block";
  setTimeout(function () {
    var result = data_work.filter(function (e) {
      if (e[22] == id) {
        return e;
      }
    });
    console.log(result);
    $("#table_doc").DataTable().clear().rows.add(result).draw();
    $("#table_doc").DataTable().search("").draw();

    document.getElementById("spinner").style.display = "none";
  }, 100);
}

function filter_status_plan_today() {
  document.getElementById("spinner").style.display = "block";
  var today = moment().format("YYYY-MM-DD");
  setTimeout(function () {
    var result = data_work.filter(function (e) {
      if (e[4] == today) {
        return e;
      }
    });
    console.log(result);
    $("#table_doc").DataTable().clear().rows.add(result).draw();
    $("#table_doc").DataTable().search("").draw();

    document.getElementById("spinner").style.display = "none";
  }, 100);
}

function filter_status_plan_total() {
  document.getElementById("spinner").style.display = "block";

  setTimeout(function () {
    var result = data_work;
    $("#table_doc").DataTable().clear().rows.add(result).draw();
    $("#table_doc").DataTable().search("").draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}

function plan_edit(data, idx) {
  document.getElementById("edit_plan").reset();

  $("#ngayKH_edit_plan").datepicker({ format: "mm/dd/yyyy" });
  $("#ngaySX_edit_plan").datepicker({ format: "mm/dd/yyyy" });

  document.getElementById("index_edit_plan").value = idx;
  document.getElementById("ID_edit_plan").value = data[0];
  document.getElementById("id_combine_old").value = data[3];
  (document.getElementById("ngayKH_edit_plan").value = data[4]),
    (document.getElementById("ngaySX_edit_plan").value = data[5]),
    (document.getElementById("lenhSX_edit_plan").value = data[6]);
  document.getElementById("maSP_edit_plan").value = data[7];
  document.getElementById("tenSP_edit_plan").value = data[8];
  document.getElementById("dvt_edit_plan").value = data[9];
  document.getElementById("soLo_edit_plan").value = data[10];
  document.getElementById("slKeHoach_edit_plan").value = data[11];
  $("#modal_edit_plan").modal("show");
}

function submit_edit_plan(formObject) {
  var userName = document.getElementById("userName").innerHTML;
  var values = [];

  var id_combine_new = (
    formObject.elements["maSP_edit_plan"].value +
    formObject.elements["soLo_edit_plan"].value
  ).replace(/[\-/.]/g, "");

  var id_combine_old = formObject.elements["id_combine_old"].value;

  var result = [
    formObject.elements["ID_edit_plan"].value,
    getFormattedDate(),
    userName,
    id_combine_new,
    formObject.elements["ngayKH_edit_plan"].value,
    formObject.elements["ngaySX_edit_plan"].value,
    formObject.elements["lenhSX_edit_plan"].value,
    formObject.elements["maSP_edit_plan"].value,
    formObject.elements["tenSP_edit_plan"].value,
    formObject.elements["dvt_edit_plan"].value,
    formObject.elements["soLo_edit_plan"].value,
    formObject.elements["slKeHoach_edit_plan"].value,
  ];

  values.push(result);

  console.log(values);

  // google.script.run
  //   .withSuccessHandler(() => {
  //     showAlert("Đã sửa hoạch !", "success");
  //     $("#modal_edit_plan").modal("toggle");
  //     document.getElementById("edit_plan").reset();
  //     plan_getData_reset();

  //   })
  //   .edit_plan(values, id_combine_old);
}
