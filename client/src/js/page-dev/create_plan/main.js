var data_work;
var data_after_fill = [];
let newWindow;
var vitri_dong_sua;

var role = JSON.parse(localStorage.getItem("role"));
var rule = role.split(",");

document.addEventListener("DOMContentLoaded", async function () {
  // $(".fill-buttons").toggle();
  $("#ngay_ke_hoach").val(
    moment(new Date(), "DD/MM/YYYY").format("YYYY-MM-DD")
  );
  $("#ngay_san_xuat").val(
    moment(new Date(), "DD/MM/YYYY").add(1, "day").format("YYYY-MM-DD")
  );

  $("#nguoi_lap").val(user_name);

  functionInit();

  var data = await get_data("get_data_create_plan");
  console.log(data);
  // const regex = /{.*?}/gs;
  // const matches = data.match(regex);
  // const jsonObjects = matches.map((match) => JSON.parse(match));

  get_data_work(data.values);
});

function get_data_work(data) {
  data_work = data;
  install_init(data);
}

function install_init(data) {
  if (data != undefined) {
    if ($.fn.dataTable.isDataTable("#table_product")) {
      $("#table_product").DataTable().clear().rows.add(data).draw();
    } else {
      create_tabl_work(data);
    }
  } else {
    create_tabl_work([]);
  }

  return;
}

$(window).on("resize", function () {
  var table = $("#table_product").DataTable();
  table.columns.adjust();
});

function create_tabl_work(data) {
  var table_product = $("#table_product").DataTable({
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
            : $(window).height() - 290 + "px",
        color: "red",
        axis: "both",
      });
      var table = $("#table_product").DataTable();
      table.columns.adjust();
    },
    select: {
      style: "multi",
      selector: "tr:not(.noExport) td:not( :last-child)",
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
      { title: "ID", className: "text-center" }, //0
      { title: "N.o", className: "text-center" }, //1
      { title: "NGƯỜI CẬP NHẬT", className: "text-center" }, //2
      { title: "THƯƠNG HIỆU", className: "text-center" }, //3
      { title: "CÔNG DỤNG", className: "text-center" }, //4
      { title: "NHÓM", className: "text-center" }, //5
      { title: "DUNG TÍCH", className: "text-center" }, //6
      { title: "TÌNH TRẠNG", className: "text-center" }, //7
      { title: "MÃ", className: "text-center" }, //8
      {
        title: "THÔNG TIN SẢN PHẨM",
        render: function (data, type, row, meta) {
          var image = row[38]
            ? `https://drive.google.com/uc?export=view&id=${row[38]}`
            : "https://drive.google.com/uc?export=view&id=1ol7mZ9xsisiih6hJlskj2w_qjXADfTyj";
          var cb = row[36]
            ? `<span class="badge badge-danger-light " style="width:fit-content">${row[36]}</span>`
            : "";
          return `
  <div style = "white-space: normal;display: flex;">
  <div style="display:grid;place-items: center;align-content: center;" class="me-10">
  <img class="zoom-image-prod " src="${image}" height="30px" style="border-radius: 5px">
  <small class="text-mute fs-10 " >${row[8]}</small>
</div>
<div style="display:grid" >
<p class="view_doc_main mb-0 hover-danger fw-bold " style=" display: block;width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> ${data}</p>
<div>
<span class="badge badge-info-light fw-bold" style="width:fit-content">${row[5]}</span>
<span class="badge badge-primary-light " style="width:fit-content">${row[6]}</span>
<span class="badge badge-warning-light fw-bold" style="width:fit-content">${row[7]}</span>
${cb}
</div>
</div>
</div>
`;
        },
      }, //9
      { title: "ĐVT", className: "text-center" }, //10
      { title: "TÊN BTP", className: "text-center" }, //11
      { title: "BAO BÌ", className: "text-center" }, //12
      { title: "DỊCH", className: "text-center" }, //13
      { title: "TỔNG", className: "text-center" }, //14
      { title: "DUNG SAI", className: "text-center" }, //15
      { title: "NGOẠI QUAN", className: "text-center" }, //16
      { title: "MÀU", className: "text-center" }, //17
      { title: "MÙI", className: "text-center" }, //18
      { title: "PH", className: "text-center" }, //19
      { title: "ĐỘ NHỚT", className: "text-center" }, //20
      { title: "TỶ TRỌNG", className: "text-center" }, //21
      { title: "TÊN SẢN PHẨM SỐ 2", className: "text-center" }, //22
      { title: "ĐVT", className: "text-center" }, //23
      { title: "TÊN BTP SỐ 2", className: "text-center" }, //24
      { title: "BAO BÌ", className: "text-center" }, //25
      { title: "DỊCH", className: "text-center" }, //26
      { title: "TỔNG", className: "text-center" }, //27
      { title: "DUNG SAI", className: "text-center" }, //28
      { title: "NGOẠI QUAN", className: "text-center" }, //29
      { title: "MÀU", className: "text-center" }, //30
      { title: "MÙI", className: "text-center" }, //31
      { title: "PH", className: "text-center" }, //32
      { title: "ĐỘ NHỚT", className: "text-center" }, //33
      { title: "TỶ TRỌNG", className: "text-center" }, //34
      { title: "NGÀY CÔNG BỐ", className: "text-center" }, //35
      { title: "SỐ CÔNG BỐ", className: "text-center" }, //36
      { title: "TÊN CÔNG BỐ", className: "text-center" }, //37
      { title: "HÌNH ẢNH", className: "text-center" }, //38
      { title: "NOTE", className: "text-center" }, //39
      { title: "HISTORY", className: "text-center" }, //40
      { title: "SỐ LÔ HIỆN TẠI", className: "text-center" }, //41
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
         <button  class=" ${dis_edit} btn  px-5 editor-edit-note me-10"><i class="fad fa-edit text-primary fs-14"></i></button>
          <button  class=" ${dis_delete} btn  px-5 editor-delete me-10"><i class="fad fa-trash-alt fs-14 text-danger"></i></button>
          <button  class=" ${dis_delete} btn  px-5 add-product" ><i class="fas fa-arrow-circle-right fs-16 text-success"></i></button>

            </div>`;
        },
      }, //11
    ],

    columnDefs: [
      {
        targets: [
          11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
          28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 0, 1, 2, 3, 4,
          5, 6, 7, 8,
        ],
        visible: false,
      },
      { responsivePriority: 1, targets: 9 },
      { responsivePriority: 0, targets: -1 },
    ],
  });

  // CLICK add order
  $("#table_product").on("click", "tbody td .add-product", function (e) {
    var idx = table_product.row($(this).parents("tr")).index();
    var data = table_product.row(idx).data();
    add_product_from_list(data);
  });

  // CLICK DELETE
  $("#table_product").on("click", "tbody td .editor-delete", function (e) {
    var idx = table_product.row($(this).parents("tr")).index();
    var table = table_product.row(idx);
    var data = table.data();
    var id = data[0];

    Swal.fire({
      title: "Bạn Muốn Xóa sản phẩm này khỏi danh sách?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Xóa",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        table.remove().draw();
        deleta_data(id, "list_product");
        Swal.fire("sản phẩm xóa rồi không khôi phục được", "success");
      }
    });
  });

  // email-sent
  $("#table_product").on("click", "tbody td .email-sent", async function (e) {
    var idx = table_product.row($(this).parents("tr")).index();
    var timestamp = moment().format("DD/MM/YYYY - hh:mm:ss ");
    var data = table_product.row(idx).data();
    var history = `${data[20]} 🔹 ${timestamp}  - ${user_name} Đã gửi Email . ${data[14]}`;

    swal(
      {
        title: `<p class="text-info fs-14"> ${data[5]}</p>`,

        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        text: `${user_name}  - Email sẽ được gửi với trạng thái ${data[11]} `,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Gửi Email",
        closeOnConfirm: false,
      },
      function () {
        data[19] = data[14];
        effec_action_table_edit(table_product, data, idx);
        swal(
          user_name,
          "Mail đã được gửi & lịch sử gửi đã được ghi nhận!",
          "success"
        );
        sent_email([data], "email_cong_van_den", history, unique_email);
      }
    );
  });
  // chọn dòng
  $("#select_btn").click(function () {
    var rowdata = table_product.rows(".selected").data();

    rowdata.map((e) => {
      add_product_from_list(e);
    });

    table_product.rows().deselect();
  });
}

$("#filterbox").on("keyup", function () {
  var key_word = this.value.toLowerCase();
  var result = data_work.filter(function (e) {
    if (
      e[9].toLowerCase().includes(key_word) ||
      e[8].toLowerCase().includes(key_word)
    ) {
      return e;
    }
  });

  $("#table_product").DataTable().clear().rows.add(result).draw();
});

function show_hide_button() {
  $(".dt-buttons").toggle();
}

// function show_hide_filter() {
//   $(".fill-buttons").toggle();
// }
