var index_id_picture = [];
Dropzone.autoDiscover = false;

function review_image(id_pic) {
  if (id_pic != "/" || id_pic != "") {
    var linkDiv = document.createElement("div");
    linkDiv.innerHTML = `<a class="on-open" href="https://drive.google.com/uc?export=view&id=${id_pic}" id="${id_pic}"></a>`;
    $(".dz-preview").append(linkDiv);
    myDropzone_2.emit("addedfile", linkDiv);
    var thumbnailUrl = `https://lh3.google.com/u/0/d/${id_pic}=w200-h190-p-k-nu-iv1`;
    myDropzone_2.emit("thumbnail", linkDiv, thumbnailUrl);
  }
}

function openFile(fileId) {
  var fileUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
  window.open(fileUrl);
}

async function deleteFileOnDrive(id) {
  var data_rq = {
    function_run: "deleteFileOnDrive",
    fileData: id,
  };

  await axios({
    method: "post",
    url: endPoint,
    data: data_rq,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  })
    .then(function (response) {
      console.log(response);
      showAlert("Đã xóa thành công !", "success");
      effect_button_end("btn_capnhat");
    })
    .catch(function (error) {
      console.log(error);
      showAlert("Không thể xóa !", "error");
      effect_button_end("btn_capnhat");
    });
}

var myDropzone_2 = new Dropzone("#kt_dropzonejs_example_2", {
  url: "#", // Set the url for your upload script location
  maxFilesize: 30, // dung lượng tối đa cho một file (đơn vị là MB)
  acceptedFiles:
    "image/*,application/pdf,.doc,.docx,.xls,.xlsx,.csv,.tsv,.ppt,.pptx,.pages,.odt,.rtf", // chỉ cho phép upload các file hình ảnh
  addRemoveLinks: true, // hiển thị nút xóa cho mỗi file đã upload
  dictRemoveFile: "Xóa", // đổi chữ "Remove file" thành "Xóa"
  maxFiles: 5,
  accept: async function (file) {
    console.log(file);
    if (file.previewElement) {
      const images = file.previewElement.querySelectorAll(
        "[data-dz-thumbnail]"
      );
      for (var i = 0; i < images.length; i++) {
        await uploadFile(file, "uploadFile");
      }
    }
  },

  removedfile: function (file) {
    if (file.status == "added") {
      var id_pic = $("#hinh_anh").val().split("/");
      $("#hinh_anh").val("");
      index_id_picture.map((e) => {
        if (e.code == file.name) {
          id_pic.filter((k) => {
            if (k != e.id) {
              console.log(k);
              $("#hinh_anh").val()
                ? $("#hinh_anh").val($("#hinh_anh").val() + "/" + k)
                : $("#hinh_anh").val(k);
            } else {
              deleteFileOnDrive(k);
            }
          });
        }
      });
    } else {
      const value = file.querySelector("a").getAttribute("id");
      const str = $("#hinh_anh").val();
      const newStr = str.replace(/^\/|\/$/g, "").replace(value, "");
      $("#hinh_anh").val(newStr);
      deleteFileOnDrive(value);
    }
    file.previewElement.remove();
  },
});
