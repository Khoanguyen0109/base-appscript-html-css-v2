// function filter_level_doc(level) {
//   document.getElementById("spinner").style.display = "block";

//   setTimeout(function () {

//     if(level==""){
//       result = data_after_fill
//     }else{
//       var result = data_after_fill.filter(function (e) {

       
//           return e[9] == level
        
//       });
//     }
   

//     $("#table_doc").DataTable().clear().rows.add(result).draw();
//     document.getElementById("spinner").style.display = "none";
//   }, 100);
// }


// function filter_status_doc(status) {
//   document.getElementById("spinner").style.display = "block";

//   setTimeout(function () {
//     if(status==""){
//       result = data_after_fill
//     }else{
//       var result = data_after_fill.filter(function (e) {
//           return e[11] == status
//       });
//     }
   

//     $("#table_doc").DataTable().clear().rows.add(result).draw();
//     document.getElementById("spinner").style.display = "none";
//   }, 100);
// }