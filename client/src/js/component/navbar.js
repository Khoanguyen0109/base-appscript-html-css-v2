var id_staff = JSON.parse(localStorage.getItem("id_staff"));
var user_name = JSON.parse(localStorage.getItem("user_name"));
var pos_user = JSON.parse(localStorage.getItem("pos_user"));
var email_user = JSON.parse(localStorage.getItem("email_user"));
var role_doc = JSON.parse(localStorage.getItem("role_doc")).split(",");
var role_human = JSON.parse(localStorage.getItem("role_human")).split(",");
var img_user = `https://drive.google.com/uc?id=${JSON.parse(
  localStorage.getItem("img_user")
)}`;

$("#nav_bar_main").append(`<header class="main-header">
<div class="inside-header">
    <div class="d-flex align-items-center logo-box justify-content-start d-xl-inline-flex d-none">
        <!-- Logo -->
        <a href="index.html" class="logo">
        <!-- logo-->
        <div class="logo-mini w-30">
            <span class="light-logo"><img src="/images/logo/lavo.png" alt="logo"></span>
        </div>
        <div class="logo-lg">
            <span class="light-logo text-info fw-bold  fs-16">LAVO Nhà Máy Sản Xuất</span>
        </div>
        </a>	
    </div>  
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <div class="app-menu">
     
    </div>

    <div class="navbar-custom-menu r-side">

        <ul class="nav navbar-nav">
         
            <p id="countdown" href="#" class="mb-0 text-primary fw-bold" style="align-self:center"></p>
            

            <li class="btn-group nav-item d-xl-inline-flex d-none">
                <a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen">
                    <i class="icon-Expand-arrows"><span class="path1"></span><span class="path2"></span></i>
                </a>
            </li>

            <!-- User Account-->
            <li class="dropdown user user-menu">
                <a href="#" class="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow" title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
                    <div class="d-flex pt-1">
                        <div class="text-end me-10">
                            <p class="pt-5 fs-14 mb-0 fw-700 text-primary">${user_name}</p>
                            <small class="fs-10 mb-0 text-uppercase text-mute">${pos_user}</small>
                        </div>
                        <img src="${img_user}" class="avatar rounded-10 bg-primary-light h-40 w-40" alt="" />
                    </div>
                </a>
            </li>

        </ul>
    </div>
    </nav>
</div>

</header>

<nav class="main-nav" role="navigation">

<!-- Mobile menu toggle button (hamburger/x icon) -->
<input id="main-menu-state" type="checkbox" />
<label class="main-menu-btn" for="main-menu-state">
    <span class="main-menu-btn-icon"></span> Toggle main menu visibility
</label>

<!-- Sample menu definition -->
<ul id="main-menu" class="sm sm-blue"> 
    <li  id="li_nhan_su"><a href="human.html"><i class="fas text-info fa-user-alt"></i>NHÂN SỰ</a></li>
    <li  id="li_bao_bi"><a href="list_baobi.html"><i class="fas text-info fa-home"></i>KHO BAO BÌ</a></li>
    <li  id="li_bao_bi"><a href="list_baobi.html"><i class="fas text-info fa-box"></i>KHO HÓA CHẤT</a></li>
    <li  id="li_bao_bi"><a href="#"><i class="fas text-info fa-cogs"></i>SẢN XUẤT</a>
    <ul >
        <li><a href="create_plan.html">Lập Kế Hoạch Sản Xuất</a></li>
        <li><a href="schedule.html">Tiến Độ Sản Xuất</a></li>
        <li><a href="doc_lot.html">Hồ Sơ Lô Sản Xuất</a></li>
    </ul>
    </li>
    <li  id="li_bao_bi"><a href="list_baobi.html"><i class="fas text-info fa-wrench"></i>BẢO TRÌ</a></li>
    <li  id="li_bao_bi"><a href="list_baobi.html"><i class="fas text-info fa-trophy"></i>CHẤT LƯỢNG</a>
  
    </li>
    <li  id="li_bao_bi"><a href="list_baobi.html"><i class="fas text-info fa-warehouse"></i>KHO THÀNH PHẨM</a></li>
    <li  id="li_bao_bi"><a href="list_baobi.html"><i class="fas text-info fa-truck-moving"></i>GIAO NHẬN</a></li>
    <li  id="li_bao_bi"><a href="doccument.html"><i class="fas text-info fa-atom"></i>ISO - GMP</a></li>
    <li  id="li_bao_bi"><a href="hoso.html"><i class="fas text-info fa-book"></i>HỒ SƠ</a></li>
    <li  id="li_bao_bi"><a href="hoso.html"><i class="fas text-danger fa-chart-bar"></i>BÁO CÁO</a></li>


</ul>
</nav>`);

$("#quick_user_toggle").append(`	<div class="modal-dialog">
<div class="modal-content slim-scroll3">
    <div class="modal-body p-30 bg-white">
        <div class="d-flex align-items-center justify-content-between pb-30">
            <h4 class="m-0">Thông tin người dùng
            </h4>
            <a href="#" class="btn btn-icon btn-danger-light btn-sm no-shadow" data-bs-dismiss="modal">
               <i class="fas fa-times"></i>
            </a>
        </div>
        <div>
            <div class="d-flex flex-row">
                <div class=""><img id="img_user" src="${img_user}" alt="user"
                        class="rounded bg-danger-light w-150" width="100"></div>
                <div class="ps-20">
                    <h5 class="mb-0">${user_name}</h5>
                    <p class="my-5 text-fade">${pos_user}</p>
                    <a style="display:flex;align-items: center"><span
                            class="icon-Mail-notification me-5 text-success"><span
                                class="path1"></span><span class="path2"></span></span>
                        ${email_user}</a>
                    <button class="btn btn-danger-light btn-sm mt-5" onclick="handleSignoutClick()" ><i class="ti-plus"></i>
                        LogOut</button>
                </div>
            </div>
        </div>
        <div class="dropdown-divider my-30"></div>
        <div>
            <div class="d-flex align-items-center mb-30">
                <div class="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center">
                    <span class="icon-Library fs-24"><span class="path1"></span><span
                            class="path2"></span></span>
                </div>
                <div class="d-flex flex-column fw-500">
                    <a href="#" class="text-dark hover-primary mb-1 fs-16" onclick="show_change_password()">Thay đổi mật khẩu</a>
                    <span class="text-fade">Mật khẩu là số hoặc chử</span>
                </div>
            </div>
        </div>
        <div class="dropdown-divider my-30"></div>
        <div class="row change-password m-5 ">
        <div class="form-group">
        <div class="input-group mb-3">
            <span class="input-group-text  bg-transparent"><i
                    class="ti-lock"></i></span>
            <input type="password" class="form-control ps-15 bg-transparent"
                placeholder="Nhập mật khẩu" id="edit_password">
        </div>
        <div class="col-12 text-center">
            <button type="button" class="btn btn-warning mt-10"
            onclick="change_pass()">ĐỔI MẬT KHẨU</button>
        </div>
    </div>
        </div>
    </div>
</div>
</div>`);
$(".change-password").toggle();

async function change_pass() {
  var values = [[email_user, $("#edit_password").val()]];
  await push_data(values, "edit_pass");
  showAlert("Đã cập nhật mật khẩu !", "warning");
  $(".change-password").toggle();
  $("#edit_password").val("");
}
