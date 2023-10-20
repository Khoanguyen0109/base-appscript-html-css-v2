function filter_list(state) {
  document.getElementById("spinner").style.display = "block";

  setTimeout(function () {
    var result = data_sale_list.filter(function (e) {

      if (e[10] == state) {
        console.log(e[10],state)
        return e;
      }
    });


    $("#table_doc").DataTable().clear().rows.add(result).draw();
    $("#table_doc").DataTable().search("").draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}

function filter_list_total() {
  document.getElementById("spinner").style.display = "block";
  setTimeout(function () {
    $("#table_doc").DataTable().clear().rows.add(data_sale_list).draw();
    $("#table_doc").DataTable().search("").draw();
    document.getElementById("spinner").style.display = "none";
  }, 100);
}


function select_list_fill_pack(data) {
  var list_thuonghieu = [];
  var list_loaibaobi = [];
  var list_nhombaobi = [];
  var list_dongbaobi = [];
  var list_nhacungcap = [];

  data.map((item, index) => {
    item[0] ? list_thuonghieu.push({ id: item[0], text: item[0] }) : "";
    item[1] ? list_loaibaobi.push({ id: item[1], text: item[1] }) : "";
    item[2] ? list_nhombaobi.push({ id: item[2], text: item[2] }) : "";
    item[3] ? list_dongbaobi.push({ id: item[3], text: item[3] }) : "";
    item[4] ? list_nhacungcap.push({ id: item[5], text: item[5],code_suplier: item[3]}) : "";
  });

  $("#thuonghieu_fill_pack").select2({
    dropdownParent: $("#div_thuonghieu_fill_pack"),
    tags: true,
    data: list_thuonghieu,
    dropdownCssClass: "fs-12"
  })
  $("#loaibaobi_fill_pack").select2({
    dropdownParent: $("#div_loaibaobi_fill_pack"),
    tags: true,
    data: list_loaibaobi,
    dropdownCssClass: "fs-12"
  })
  $("#nhombaobi_fill_pack").select2({
    dropdownParent: $("#div_nhombaobi_fill_pack"),
    tags: true,
    data: list_nhombaobi,
    dropdownCssClass: "fs-12"
  })
  $("#dongbaobi_fill_pack").select2({
    dropdownParent: $("#div_dongbaobi_fill_pack"),
    tags: true,
    data: list_dongbaobi,
    dropdownCssClass: "fs-12"
  })
  $("#ncc_fill_pack").select2({
    dropdownParent: $("#div_ncc_fill_pack"),
    tags: true,
    data: list_nhacungcap,
    dropdownCssClass: "fs-12"
  })

}

$(".fill-input-table").on("change", function () {
  var key_1 = $("#thuonghieu_fill_pack").val();
  var key_2 = $("#loaibaobi_fill_pack").val();
  var key_3 = $("#nhombaobi_fill_pack").val();
  var key_4 = $("#dongbaobi_fill_pack").val();
  var key_5 = $("#ncc_fill_pack").val();
  var result = data_sale_list.filter(function (e) {
    var condition_1 = key_1 == "" || e[9].includes(key_1);
    var condition_2 = key_2 == "" || e[6].includes(key_2);
    var condition_3 = key_3 == "" || e[7].includes(key_3);
    var condition_4 = key_4 == "" || e[8].includes(key_4);
    var condition_5 = key_5 == "" || e[15].includes(key_5);
    return condition_1 && condition_2 && condition_3 && condition_4 && condition_5;
  });
  $("#table_doc").DataTable().clear().rows.add(result).draw();
  $("#table_doc").DataTable().search("").draw();
});

function reset_fill(){
  document.getElementById("spinner").style.display = "block";
  $("#thuonghieu_fill_pack").val("").trigger("change");
  $("#loaibaobi_fill_pack").val("").trigger("change");
  $("#nhombaobi_fill_pack").val("").trigger("change");
  $("#dongbaobi_fill_pack").val("").trigger("change");
  $("#ncc_fill_pack").val("").trigger("change");
  document.getElementById("spinner").style.display = "none";
}