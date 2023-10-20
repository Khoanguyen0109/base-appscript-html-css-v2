
var data_work;
var data_sale_list;

let newWindow;
var vitri_dong_sua;
var phong_ban = JSON.parse(localStorage.getItem("phong_ban"));
var id_staff = JSON.parse(localStorage.getItem("id_staff"));
var user_name = JSON.parse(localStorage.getItem("user_name"));
var role = JSON.parse(localStorage.getItem("role"));
var rule = role.split(",");

document.addEventListener("DOMContentLoaded", async function () {
  id_staff != "admin" ? $("#li_nhan_su").empty() : "";

  $(".fill-buttons").toggle();
  functionInit();

  var data = await get_data("get_data_initial_list_baobi");
  const regex = /{.*?}/gs;
  const matches = data.match(regex);

  const jsonObjects = matches.map((match) => JSON.parse(match));
  data_sale_list = jsonObjects[0].values
  get_data_work(jsonObjects[0].values,jsonObjects[1].values,);
  select_list_fill_pack(jsonObjects[2].values)

});

function get_data_work(data, report) {
  document.getElementById("spinner").style.display = "block";
  $("#tong_bao_bi").text(report[0][1]);
  $("#dang_su_dung").text(report[1][1]);
  $("#chua_su_dung").text(report[2][1]);
  $("#chua_thiet_ke").text(report[3][1]);
  $("#bo_mau").text(report[4][1]);
  $("#tl_tong_bao_bi").text(report[0][2]);
  $("#tl_dang_su_dung").text(report[1][2]);
  $("#tl_chua_su_dung").text(report[2][2]);
  $("#tl_chua_thiet_ke").text(report[3][2]);
  $("#tl_bo_mau").text(report[4][2]);

  install_init(data);

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

        $(".dataTables_scrollBody").slimscroll({
          height: $(window).height() - 260 + "px",
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
    paging: true,
    info: false, // Hiển thị thông tin số bản ghi
    order: [3, "asc"],
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
      { title: "ID" }, //0
      { title: "STT",className: "text-center" }, //1
      { title: "NGƯỜI CẬP NHẬT" }, //3
      { title: "MÃ BAO BÌ" ,className: "text-center",}, //4
      {
        title: "TÊN BAO BÌ",
        render: function (data, type, row, meta) {
          var image = row[11]
            ? "https://drive.google.com/uc?export=view&id=" + row[11]
            : "https://drive.google.com/uc?export=view&id=1ol7mZ9xsisiih6hJlskj2w_qjXADfTyj";
          return `
              <div style="display:flex" >
              <div style="display:grid;place-items: center;align-content: center;" class="me-10">
            <img class="zoom-image-prod " src="${image}" height="30px" style="border-radius: 5px">
         
          </div>
                <p title = ${data} class=" zoom-image-prod mb-0 hover-danger editor-view_doc_main text-primary" style="white-space: normal;cursor:pointer;width: 350px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> ${data}</p>
              </div>`;
        },
      }, //5
      { title: "ĐVT",className: "text-center", }, //6
      { title: "LOẠI" ,className: "text-center"}, //7
      { title: "NHÓM" }, //7
      { title: "DÒNG" ,className: "text-center",
      render: function (data, type, row, meta) {
        return `
            <div style="display:block" >
              <p class="mb-0 hover-danger" style="white-space: normal;cursor:pointer"> ${row[7]}</p>
              <span class="badge badge-secondary " style="height:fit-content;"> ${data}</span>
           
            </div>`;
      },
    }, //7
      { title: "THƯƠNG HIỆU" ,className: "text-center",}, //7
      {
        title: "TRẠNG THÁI", className: "text-center",
        render: function (data, type, row, meta) {
          if (data == "Process material") {
            var color_state = " badge badge-success";
          } else if (data == "Cancel Material") {
            var color_state = "badge badge-danger";
          } else if(data=="New Material - Y") {
            var color_state = "badge badge-warning";
          }else if(data=="New Material - N") {
            var color_state = "badge badge-primary";
          }
          return `<span class="${color_state} mt-5" style="height:fit-content;">${data}</span>`;
        },
      }, //8

      { title: "HÌNH ẢNH",className: "text-center" }, //9
      { title: "TỒN KHO",className: "text-center" ,
      render: function (data, type, row, meta) {
        return `
            <div style="display:block" >
              <p class="mb-0 fw-bold text-info fs-14" > ${data}</p>
           
            </div>`;
      },
    }, //10
      {
        title: "XUẤT XỨ",
        render: function (data, type, row, meta) {
          var check_node = data != undefined ? data : row[5];
          return check_node;
        },
      }, //10
      { title: "MÃ NCC",className: "text-center" }, //9

      { title: "TÊN NCC / XUẤT XỨ",className: "text-center",
      render: function (data, type, row, meta) {
     
        return `
        <p class="mb-0 hover-danger editor-view_doc_main text-primary" style="white-space: normal;cursor:pointer"> ${row[14]} - ${data}</p>
        <span class="badge badge-primary mt-5" style="height:fit-content;">${row[13]}</span>
        `;
      },
     }, //9
      { title: "CHECK",className: "text-center" }, //9

      // {
      //   data: null,
      //   title: "Act",
      //   className: "uniqueClassName",
      //   orderable: false,
      //   render: function (data, type, row) {
      //     var dis_edit =
      //       rule.includes(`Sửa ${row[9]}`) || id_staff == "admin"
      //         ? ""
      //         : "d-none";
      //     var dis_add =
      //       rule.includes(`Thêm note ${row[9]}`) || id_staff == "admin"
      //         ? ""
      //         : "d-none";
      //     var dis_delete =
      //       rule.includes(`Xóa ${row[9]}`) || id_staff == "admin"
      //         ? ""
      //         : "d-none";
      //     return `<div class="dropdown" style="display:flex;justify-content: center;align-items: center">
      //    <button  class=" ${dis_edit} btn  px-5 editor-edit-note me-10" data-bs-toggle="tooltip"  title="Sửa tài liệu hoặc ghi chú"><i class="fad fa-edit text-primary fs-14"></i></button>
      //    <button  class="${dis_add} btn  px-5 editor-add-note me-10" data-bs-toggle="tooltip"  title="Thêm ghi chú cho tài liệu này"><i class="fas fa-plus-square fs-14 text-warning"></i></button>
      //     <button  class=" ${dis_delete} btn  px-5 editor-delete" data-bs-toggle="tooltip"  title="Xóa tài liệu này"><i class="fad fa-trash-alt fs-14 text-danger"></i></button>
      //       </div>`;
      //   },
      // }, //11
    ],

    columnDefs: [
      { responsivePriority: 1, targets: 4 },
      { targets: [0,2,7,11,13,14,16], visible: false },
      
      // { responsivePriority: 2, targets: 10 },
    ],
    rowGroup: {
      dataSrc: function (row) {
        var name =
          '<p class="fw-bold me-10 mb-0"><i class="fas fa-notes-medical me-10"></i>' +
          row[9] +
          "</p>";
        return name;
      },
    },
  });

  table_doc
    .on("order.dt search.dt", function () {
      let i = 1;
      table_doc
        .cells(null, 1, { search: "applied", order: "applied" })
        .every(function (cell) {
          this.data(i++);
        });
    })
    .draw();

  table_doc
    .on("order.dt search.dt", function () {
      let i = 1;
      table_doc
        .cells(null, 1, { search: "applied", order: "applied" })
        .every(function (cell) {
          this.data(i++);
        });
    })
    .draw();

  //  zoom-image-prod
  $("#table_doc").on("click", "tbody td .zoom-image-prod", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    $('#show_note').modal('show')
    pack_detail(data)
    // $("#name_pic_title").text(`${data[3]} - ${data[4]}`)
    // $("#imagepreview").attr("src",`https://drive.google.com/uc?export=view&id=${data[11]}`)
    
  });
}

$("#filterbox").on("change", function () {
  var key_word = this.value.toLowerCase();
  var result = data_work.filter(function (e) {
    if (
      e[4].toLowerCase().includes(key_word) ||
      e[3].toLowerCase().includes(key_word) ||
      e[15].toLowerCase().includes(key_word)
    ) {
      return e;
    }
  });

  let result_fill = result.filter((item, index, self) => {
    return index === self.findIndex((t) => t[4] === item[4]);
  });

  $("#table_doc").DataTable().clear().rows.add(result_fill).draw();
  $("#table_doc").DataTable().search("").draw();
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


function show_hide_button() {
  $(".dt-buttons").toggle();
}

function show_hide_filter() {
  $(".fill-buttons").toggle();
}

function show_change_password() {
  $(".change-password").toggle();
}


function pack_detail(data) {
  $("#Pak_Modal_Detail").modal("show");
  $("#product_use").empty();

  if (data[10] === "Process material") {
    document.getElementById("status_pack").innerHTML = "Đang sử dụng"
    $("#background_status_pack").addClass("ribbon-two ribbon-two-success");
  } else if (data[10] === "New Material - N") {
    document.getElementById("status_pack").innerHTML = "Chưa thiết kế"
    $("#background_status_pack").addClass("ribbon-two ribbon-two-warning");
  } else if (data[10] === "New Material - Y") {
    document.getElementById("status_pack").innerHTML = "Chưa sử dụng"
    $("#background_status_pack").addClass("ribbon-two ribbon-two-primary");
  } else if (data[10] === "Cancel Material") {
    document.getElementById("status_pack").innerHTML = "Bỏ mẫu"
    $("#background_status_pack").addClass("ribbon-two ribbon-two-danger");
  }

  document.getElementById("code_pack").innerHTML = data[3]
  document.getElementById("name_pack").innerHTML = "<strong>" + data[3] + "</strong> &nbsp" + data[4]
  document.getElementById("driver_pack").innerHTML = data[6]
  document.getElementById("brand_pack").innerHTML = data[7]
  document.getElementById("suplier_pack").innerHTML = data[15]
  document.getElementById("stock_pack").innerHTML = data[12]
  document.getElementById("img_pack").src = "https://drive.google.com/uc?id=" + data[11]

}