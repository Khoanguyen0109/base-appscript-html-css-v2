var endPoint =
  "https://script.google.com/macros/s/AKfycbxfmUm26zOb-WIl_VoYRkjjvBVvyMKEHSXTt47tHeD2C6hp96O5wQALI65yfrdUTYXeFw/exec";

async function get_data(sheet) {
  var resp = await axios
    .get(endPoint + `?frun=${sheet}`)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });

  return resp;
}

async function push_data(data, frun) {
  var data_rq = {
    function_run: frun,
    fileData: data,
  };

  var data_res = await axios({
    method: "post",
    url: endPoint,
    data: data_rq,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return data_res;
}

async function uploadFile(file, frun) {
  var reader = new FileReader();
  reader.onload = async function (e) {
    var fileData = reader.result;

    var data_rq = {
      function_run: frun,
      name: file.name, // Filename at Google Drive
      mimeType: file.type, // mimeType at Google Drive
      fileData: fileData,
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
        $("#hinh_anh").val(response.data.split("/")[5]);
        index_id_picture.push({
          code: file.name,
          id: response.data.split("/")[5],
        });
        showAlert("Đã up thành công !", "success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  reader.readAsDataURL(file);
}

async function deleta_data(id, frun) {
  var data_rq = {
    function_run: frun,
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
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function convert_base64(data, frun) {
  var resp;
  var data_rq = {
    function_run: frun,
    fileData: data,
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
      resp = response.data;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return resp;
}

function handleSignoutClick() {
  localStorage.clear();
  window.location.href = "/";
}
