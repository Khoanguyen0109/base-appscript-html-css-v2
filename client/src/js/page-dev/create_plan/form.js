var arr_id = ["0"];
var arr_record_combo = [];

$(".input_lis_box").slimscroll({
  height: $(window).height() - 300 + "px",
  color: "blue",
});

function add_product_from_list(data) {
  var element = arr_id[arr_id.length - 1];
  var number = +element + 1;
  arr_id.push(`${number}`);
  input_form(data, number);
}

function input_form(data, index) {
  var id_combine = (data[8] + data[41]).replace(/[\-/.]/g, "");
  var image = data[38]
    ? `https://drive.google.com/uc?export=view&id=${data[38]}`
    : "https://drive.google.com/uc?export=view&id=1ol7mZ9xsisiih6hJlskj2w_qjXADfTyj";

  $(".input_lis_box").prepend(
    `
    <div class="col-12 order_list_output" id="order_list_output_${index}">
            <div class="row  mb-0">
            <input type="text" class="" id='combine_${index}' value=${id_combine}>
            <input type="text" class=""  id='image_${index}' value=${data[38]}>
            <input type="text" class=""  id='cong_bo_${index}' value=${data[36]}>
                <div class="form-group  col-sm-12 col-xl-2 mb-0 " style="display: inline-flex">
                <small class="fs-10 fw-bold" style="align-self:center">${index}.</small>
                    <input type="text"  class="form-control text-primary" autocomplete="off" required value ="${data[8]}" style="border:unset" id='ma_${index}'>
                </div>
                <div class="form-group col-sm-12 col-xl-4 mb-0 " style="display: inline-flex">
                  <img class="zoom-image-prod " src="${image}" height="50px" style="border-radius: 5px">
                  <input type="text"  class="form-control text-primary" autocomplete="off" required value ="${data[9]}" style="border:unset" id='ten_${index}'>
                </div>
                <div class="form-group  col-sm-12 col-xl-1 mb-0">
                    <input type="text"  class="form-control text-primary" autocomplete="off" required value ="${data[10]}" style="border:unset" id='unit_${index}'>
                </div>
                <div class="form-group col-sm-12 col-xl-2 mb-0">
                    <input type="number"  class="form-control text-success fw-bold" autocomplete="off" required id='so_luong_${index}' step="1" min= "0">
                </div>
                <div class="form-group col-sm-12  col-xl-2 mb-0">
                    <input type="text"  class="form-control text-primary" autocomplete="off" required value ="${data[41]}" style="border:unset" id='lot_${index}' onchange= change_day_plan()>
                </div>
                <div class="form-group  col-sm-12  col-xl-1 mb-0">
                    <button type="button" class="btn  btn-danger btn-sm hover-danger " onclick="remove_box('${index}')"
                        style="width:auto"> <i class="fad fa-trash-alt fs-14 "></i>
                    </button>
                </div>
            </div>

            <hr/>
    </div>
    `
  );
}

function remove_box(id) {
  $(`#order_list_output_${id}`).remove(); //This removes the a tag

  var index = arr_id.indexOf(id);
  index > -1 ? arr_id.splice(index, 1) : "";

  arr_record_combo = [...arr_record_combo].filter((e, idx) => {
    var box_compare = e[0].split("_");
    return `${box_compare[0]}_${box_compare[1]}` != "combo_" + id;
  });
}

function remove_all() {
  arr_id.map((e) => {
    $(`#order_list_output_${e}`).remove();
  });
  arr_id = ["0"];
  $("#plan_excell").val("");
  $("#excell_json").val("");
  var table_product = $("#table_product").DataTable();
  table_product.rows().deselect();
}

async function them_ke_hoach_moi() {
  document.getElementById("spin_icon").classList.remove("d-none");

  var values = [];
  var uid = new Date().getTime().toString(36);
  var timeStamp = moment().format("DD/MM/YYYY hh:mm:ss ");
  var lsx = $("#lenh_san_xuat").val();
  arr_id.shift();
  var so_ke_hoach = arr_id.length;
  console.log(so_ke_hoach);
  arr_id.map((e, idx) => {
    values.push([
      uid + idx,
      timeStamp,
      user_name,
      ($(`#ma_${e}`).val() + $(`#lot_${e}`).val()).split(".").join(""),
      $("#ngay_ke_hoach").val(),
      $("#ngay_san_xuat").val(),
      $("#lenh_san_xuat").val(),
      $(`#ma_${e}`).val(),
      $(`#ten_${e}`).val(),
      $(`#unit_${e}`).val(),
      $(`#lot_${e}`).val(),
      $(`#so_luong_${e}`).val(),
      "",
      $(`#image_${e}`).val(),
      $(`#cong_bo_${e}`).val(),
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      `${timeStamp} - lập kế hoạch by - ${user_name}`,
    ]);
    $(`#order_list_output_${e}`).remove();
  });

  if (so_ke_hoach > 0) {
    await push_data(values, "update_new_plan");
    showAlert("Đã cập nhật thành công !", "success");
    arr_id = ["0"];
    document.getElementById("spin_icon").classList.add("d-none");

    Swal.fire({
      title: "Bạn có muốn gửi kế hoạch này qua Email & Group Telegram ! ",
      text: `Kế hoạch  này có ${values.length} sản phẩm sản xuất `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log([[lsx, so_ke_hoach]]);
        push_data([[lsx, so_ke_hoach]], "export_file_pdf_sent_telegram");
      }
    });
  } else if ((so_ke_hoach = 0)) {
    document.getElementById("spin_icon").classList.add("d-none");

    Swal.fire({
      title: "Chưa có kế hoạch nào được tạo ! ",
      text: `tìm kiếm sản phẩm từ bảng DSSP `,
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    });
  }
}

// excell import

// IMPORT FILE Pack
function plan_import_submit() {
  var values = {};
  values.table = document.getElementById("plan_excell").value;
  var res = JSON.parse(values.table);
  console.log(res);
  res.shift();
  number_cus = res.length;

  if (number_cus > 0) {
    Swal.fire({
      title: "Bạn đang import data từ Excell ! ",
      text: `File này có ${number_cus} sản phẩm cần lên kế hoạch ? `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        res.map((e, index) => {
          if (e.length > 0) {
            add_product_from_list(e);
          }
        });
      } else {
        remove_all();
      }
    });
  }
}

// convert file excell
async function handleFile_Select_plan(e) {
  var files = e.target.files;
  var xl2json = new ExcellJson("#plan_excell");
  console.log(xl2json);
  xl2json.parseExcel(files[0]);

  setTimeout(() => {
    plan_import_submit();
  }, 1000);
}

class ExcellJson {
  constructor(name) {
    this.name = name;
  }

  parseExcel(file) {
    var reader = new FileReader();
    reader.onload = (e) => {
      var data = e.target.result;
      var workbook = XLSX.read(data, { type: "binary" });
      jQuery(this.name).val(
        JSON.stringify(
          XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {
            header: 1,
          })
        )
      );
    };
    reader.onerror = (ex) => {
      console.log(ex);
    };
    reader.readAsBinaryString(file);
  }
}

//  thêm mới sản phẩm

function update_new_product() {
  // reset_form();
  $("#modal_sale_form").modal("show");
  $("#title_form").text("THÊM MÃ HÀNG - SẢN PHẨM MỚI");
  $("#kt_dropzonejs_example_2").empty();
  $("#kt_dropzonejs_example_3").empty();
  $("#kt_dropzonejs_example_4").empty();

  $("#kt_dropzonejs_example_2").append(`
    <div class="dz-message needsclick" style="display:block">
      <i class="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
      <div class="ms-4">
        <h3 class="fs-5 fw-bold mb-1 text-info">
          CLICK UPLOAD HÌNH ẢNH SẢN PHẨM 
        </h3>
        <span class="fs-7 fw-semibold">tối đa 10
          file (or kéo thả hình vào khung này)</span>
      </div>
    </div>
`);
}

function change_day_plan() {
  if (arr_id.length > 0) {
    arr_id.map((e) => {
      var id_combine = ($(`#ma_${e}`).val() + $(`#lot_${e}`).val()).replace(
        /[\-/.]/g,
        ""
      );
      $(`#combine_${e}`).val(id_combine);
    });
  }
}
