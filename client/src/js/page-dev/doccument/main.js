var data_treeview = [
  {
    id: "Lãnh Đạo",
    parent: "#",
    text: '<p class=" text-info text-bold"> 1. LÃNH ĐẠO</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "Nhân Sự",
    parent: "#",
    text: '<p class=" text-info text-bold"> 2. NHÂN SỰ</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "Kế Toán",
    parent: "#",
    text: '<p class=" text-info text-bold"> 3. KẾ TOÁN</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "Thu Mua",
    parent: "#",
    text: '<p class=" text-info text-bold">4. THU MUA</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "R&D",
    parent: "#",
    text: '<p class=" text-info text-bold"> 5. R&D</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "Sản Xuất",
    parent: "#",
    text: '<p class=" text-info text-bold"> 6. SẢN XUẤT</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "Chất Lượng",
    parent: "#",
    text: '<p class=" text-info text-bold"> 7. CHẤT LƯỢNG</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "Kho",
    parent: "#",
    text: '<p class=" text-info text-bold"> 8. KHO</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "Marketing",
    parent: "#",
    text: '<p class=" text-info text-bold"> 9. MARKETING</p>',
    state: { opened: true, disabled: true },
  },

  {
    id: "Kinh Doanh",
    parent: "#",
    text: '<p class=" text-info text-bold"> 10. KINH DOANH</p>',
    state: { opened: true, disabled: true },
  },
];
var data_work;
var data_after_fill = [];
let newWindow;
var vitri_dong_sua;

var role = JSON.parse(localStorage.getItem("role"));
var rule = role.split(",");

document.addEventListener("DOMContentLoaded", async function () {
  // id_staff != "admin" ? $("#li_nhan_su").empty() : "";
  $(".fill-buttons").toggle();

  functionInit();

  var data = await get_data("get_data_initial_doc");

  const regex = /{.*?}/gs;

  const matches = data.match(regex);

  const jsonObjects = matches.map((match) => JSON.parse(match));

  get_data_work(jsonObjects[0].values);

  get_data_human(jsonObjects[1].values)
  
  draw_charst_doc(jsonObjects[2].values)

});

function get_data_work(data, data_childrent) {
  document.getElementById("spinner").style.display = "block";

  var a = 0,
    b = 0,
    c = 0,
    d = 0,
    s = 0,
    f = 0,
    g = 0,
    h = 0,
    j = 0,
    k = 0,
    l = 0,
    m = 0;

  data_work = data.filter((item) => {
    a = a + 1;
    item[9] == "1" ? ((b = b + 1), data_after_fill.push(item)) : "";
    item[9] == "2" ? ((c = c + 1), data_after_fill.push(item)) : "";
    item[9] == "3" ? ((d = d + 1), data_after_fill.push(item)) : "";
    item[9] == "4" ? (s = s + 1) : "";
    item[9] == "5" ? (f = f + 1) : "";

    item[11] == "Đang Soạn" ? (g = g + 1) : "";
    item[11] == "Chờ Xem Xét" ? (h = h + 1) : "";
    item[11] == "Chờ Duyệt" ? (j = j + 1) : "";
    item[11] == "Chờ Ban Hành" ? (k = k + 1) : "";
    item[11] == "Hiệu Lực" ? (l = l + 1) : "";
    item[11] == "Hết Hiệu Lực" ? (m = m + 1) : "";

    var eKey;
    var style_text;
    item[4] == ""
      ? ((eKey = item[12]),
        (style_text = `<p class="fs-10 text-bold" style=" display: block;width: 350px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" >🔸 ${item[5]}</p>`))
      : ((eKey = item[4]),
        (style_text = `
                  <p class="no-margin fs-12 text-primary" style="display: block;width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">🔹${item[5]}</p>
                `));

    data_treeview.push({ id: item[3], parent: eKey, text: style_text });
  });

  $("#tong_tl").text(a);
  $("#tl_cap_1").text(b);
  $("#tl_cap_2").text(c);
  $("#tl_cap_3").text(d);
  $("#tl_cap_4").text(s);
  $("#tl_ngoai").text(f);

  $("#dang_soan").text(g);
  $("#cho_xem_xet").text(h);
  $("#cho_duyet").text(j);
  $("#cho_ban_hanh").text(k);
  $("#hieu_luc").text(l);
  $("#het_hieu_luc").text(m);

  install_init(data_after_fill);
  tree_doc(data_treeview);
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

$(window).on("resize", function () {
  var table = $("#table_doc").DataTable();
  table.columns.adjust();
});

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
        height:
          window.innerWidth < 767
            ? $(window).height() - 180 + "px"
            : $(window).height() - 360 + "px",
        color: "red",
        axis: "both",
      });
      var table = $("#table_doc").DataTable();
      table.columns.adjust();
    },
    responsive: true,
    autoWidth: true,
    destroy: true,
    deferRender: true,
    scrollY: false,
    scrollX: false,
    bLengthChange: false,
    paging: true,
    info: false, // Hiển thị thông tin số bản ghi
    order: [2, "asc"],
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
      { title: "No.", className: "text-center" }, //0
      { title: "người tạo" }, //0
      { title: "MÃ TÀI LIỆU", className: "text-center" }, //4
      { title: "ID cha" }, //4
      {
        title: "TÊN TÀI LIỆU",
        render: function (data, type, row, meta) {
          return `
              <div style="display:grid" >
              <p class="view_doc_main mb-0 hover-danger fw-bold " style=" display: block;width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> ${data}</p>
              <div>
              <span class="badge badge-info-light fw-bold" style="width:fit-content">${row[3]}</span>
              <span class="badge badge-primary-light " style="width:fit-content">${row[7]}</span>
              </div>
            

              </div>`;
        },
      }, //5
      { title: "PHIÊN BẢN", className: "text-center" }, //6
      { title: "NGÀY LẬP", className: "text-center" }, //6
      { title: "NGÀY BAN HÀNH", className: "text-center" }, //6
      { title: "CẤP TÀI LIỆU", className: "text-center" }, //7
      { title: "SỐ TRANG", className: "text-center" }, //7
      {
        title: "TRẠNG THÁI",
        className: "text-center",

        render: function (data, type, row, meta) {
          if (data == "Hiệu Lực") {
            var color_state = " badge badge-success";
          } else if (data == "Hết Hiệu Lực") {
            var color_state = "badge badge-danger";
          } else {
            var color_state = "badge badge-warning";
          }
          return `<span class="${color_state} mt-5" style="height:fit-content;">${data}</span>`;
        },
      }, //8
      { title: "PHÒNG BAN", className: "text-center" }, //9
      { title: "ÁP DỤNG", className: "text-center" }, //10
      { title: "PHÂN PHỐI" }, //10
      { title: "GHI CHÚ" }, //10
      { title: "ID FILE" }, //10
      { title: "LOẠI FILE" }, //10
      { title: "NGƯỜI XEM" }, //10
      { title: "NGƯỜI XÉT" }, //10
      { title: "NGƯỜI DUYỆT" }, //10
      { title: "LỊCH SỬ" }, //10

      {
        data: null,
        title: "HÀNH ĐỘNG",
        className: "uniqueClassName",
        orderable: false,
        render: function (data, type, row) {
          var dis_edit =
            rule.includes(`Sửa ${row[9]}`) || id_staff == "admin"
              ? ""
              : "d-none";
          var dis_add =
            rule.includes(`Thêm note ${row[9]}`) || id_staff == "admin"
              ? ""
              : "d-none";
          var dis_delete =
            rule.includes(`Xóa ${row[9]}`) || id_staff == "admin"
              ? ""
              : "d-none";
          return `<div class="dropdown" style="display:flex;justify-content: center;align-items: center">
         <button  class=" ${dis_edit} btn  px-5 editor-edit-note me-10" ><i class="fad fa-edit text-primary fs-14"></i></button>
         <button  class="${dis_add} btn  px-5 editor-add-note me-10"  ><i class="fas fa-plus-square fs-14 text-success"></i></button>
         <button  class="${dis_add} btn  px-5 email-sent me-10"   tit><i class="fas fa-envelope text-warning email-sent" ></i></button>
          <button  class=" ${dis_delete} btn  px-5 editor-delete"   ><i class="fad fa-trash-alt fs-14 text-danger"></i></button>
            </div>`;
        },
      }, //11
    ],

    columnDefs: [
      { targets: [0, 2, 3, 4, 7, 8, 12, 15, 16, 17, 18, 19,20,21], visible: false },
      // { responsivePriority: 1, targets: 5 },
      { responsivePriority: 0, targets: -1 },
    ],
    rowGroup: {
      dataSrc: function (row) {
        var name =
          '<p class="fw-bold me-10 mb-0 text-info"><i class="fas fa-notes-medical me-10"></i>' +
          row[12] +
          "</p>";
        return name;
      },
    },
  });
  // CLICK view
  $("#table_doc").on("click", "tbody td .editor-view", function (e) {
    document.getElementById("spinner").style.display = "block";
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    var url = data[8];
    view_pdf(url, data[7], data[0]);
  });

// Xem tài liệu
  $("#table_doc").on("click", "tbody td .view_doc_main", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    if (data[16]) {
      document.getElementById("file_doc_view").src = "";
      $("#doc_view").modal("show");
      $("#name_doc").text(data[5].toUpperCase());
      var link = `https://docs.google.com/viewer?srcid=${data[16]}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;
      document.getElementById("file_doc_view").src = link;
    } else {
      showAlert("Không có tập tin đính kèm !", "error");
    }
  });

  // CLICK DELETE
  $("#table_doc").on("click", "tbody td .editor-delete", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var table = table_doc.row(idx);
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
        deleta_data(id, "delete_data_doc_parrent");
      }
    );
  });


  // CLICK add note
  $("#table_doc").on("click", "tbody td .editor-add-note", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();

    show_modal_add_new_doc();
    fill_form(data);
  });


  // CLICK edit note
  $("#table_doc").on("click", "tbody td .editor-edit-note", function (e) {
    var idx = table_doc.row($(this).parents("tr")).index();
    var data = table_doc.row(idx).data();
    vitri_dong_sua = idx;
    show_modal_add_new_doc();
    fill_form_edit(data);
  });


 // email-sent
  $("#table_doc").on("click", "tbody td .email-sent", async function (e) {


    var idx = table_doc.row($(this).parents("tr")).index();
    var timestamp = moment().format("DD/MM/YYYY - hh:mm:ss ");
    var data = table_doc.row(idx).data();
    var history = `${data[20]} 🔹 ${timestamp}  - ${user_name} Đã gửi Email . ${data[14]}`;

    swal(
          {
            title: `<p class="text-info fs-14"> ${data[5]}</p>`,

            html:
            'You can use <b>bold text</b>, ' +
            '<a href="//sweetalert2.github.io">links</a> ' +
            'and other HTML tags',
            text: `${user_name}  - Email sẽ được gửi với trạng thái ${data[11]} `,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Gửi Email",
            closeOnConfirm: false,
          },
          function () {
            data[19] = data[14];
            effec_action_table_edit(table_doc, data, idx);
            swal(
              user_name,
              "Mail đã được gửi & lịch sử gửi đã được ghi nhận!",
              "success"
            );
            sent_email([data], "email_cong_van_den", history, unique_email);
          }
      )

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
}

$("#filterbox").on("change", function () {
  var key_word = this.value.toLowerCase();
  var result = data_work.filter(function (e) {
    if (
      e[4].toLowerCase().includes(key_word) ||
      e[5].toLowerCase().includes(key_word) ||
      e[11].toLowerCase().includes(key_word)
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

function fill_doc(value, box) {
  document.getElementById("spinner").style.display = "block";

  setTimeout(function () {
    var result = data_work.filter(function (e) {
      return e[9] == value;
    });

    $("#table_doc").DataTable().clear().rows.add(result).draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}

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

function tree_doc(data_treeview) {
  $("#jstree").jstree({
    getFilterTree: function () {
      return $("#jstree");
    },
    core: {
      themes: { icons: false },
      data: data_treeview,
    },
    search: {
      show_only_matches: true,
      show_only_matches_children: true,
    },
    plugins: ["dnd", "types", "contextmenu", "crrm", "search", "html_data"],
  });
}

$("#search_field").keyup(function () {
  var searchstring = $(this).val().trim();
  $("#jstree").jstree("search", searchstring);
});

$("#jstree").slimScroll({
  height:
    window.innerWidth < 767
      ? $(window).height() - 180 + "px"
      : $(window).height() - 550 + "px",
  color: "green",
});

function show_hide_button() {
  $(".dt-buttons").toggle();
}

function show_hide_filter() {
  $(".fill-buttons").toggle();
}
