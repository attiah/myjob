//$(function () {
//    loaddata();
//    $("#MainMenu").enhanceWithin().popup();
//    
//});
var compnaycode, companyname;

function loaddata() 
{
    $('#menudata').empty();
    $('<li>').append('<a href="javascript:home()" class="ui-btn ui-btn-icon-right ui-icon-user"  style="text-align:right"> للتسجيل   </a>').appendTo('#menudata');
    $('<li>').append('<a href="javascript:map()"  class="ui-btn ui-btn-icon-right ui-icon-phone"  style="text-align:right"> للتواصل معنا</a> ').appendTo('#menudata');
  
    $('#menudata').listview().listview('refresh');
}

//==========================
function senduser() {
    try {
        var name = document.getElementById("fname").value;
        var title = document.getElementById("title").value;
        var message = document.getElementById("message").value;
        var email = document.getElementById("email").value;
        var jawal = document.getElementById("jawal").value;
        if (name == "") {
            toast("يجب ادخال الاسم");
            return;
        }
        if (name.length == "") {
            toast(" يجب ادخال الاسم بصورة صحيحة");
            return;
        }
        var exp = /^[ا-يa-zA-Z |]+$/;

        if (!exp.test(name)) {
            toast("يجب ان يكون الاسم من الحروف فقط ");
            return;
        }
        var arr = name.split(" ");
        if (arr.length < 3) {
            toast("ادخل الاسم ثلاثي ");
            return;
        }
        if (jawal == "") {
            toast("ادخل رقم الجوال ");
            return;
        }
        var expname = /^[0-9|]+$/;

        if (!expname.test(jawal)) {
            toast("يجب ان يكون الجوال من ارقام فقط ");
            return;
        }
        if (jawal.length != 10) {
            toast("ادخل رقم الجوال مكون من 10 ارقام");
            return;
        }
        if (jawal.substr(0, 2) != '05') {
            toast("رقم الهاتف يجب يبدا بـ 05 ");
            return;
        }
        if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
            toast("ادخل البريد الالكتروني بصورة سليمة ");
            return;
        }
        if (title == "") {
            toast("ادخل عنوان الرسالة ");
            return;
        }
        if (message == "") {
            toast("ادخل نص الرسالة ");
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://www.mharattwzeef.com/code/send.ashx",
            data: { name: name, jawal: jawal, email: email, title: title, message: message },
            success: function (text) {
                try {
                    var obj = JSON.parse(text);
                    toast(obj.message);
                    var op = obj.op;
                    if (op == "1") {
                        document.getElementById("fname").value = "";
                        document.getElementById("title").value = "";
                        document.getElementById("message").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("jawal").value = "";
                    }


                } catch (ex) { toast(ex); }
            },
            error: function (msg) { toast('لا يوجد اتصال بالانترنت'); }
        });
    }
    catch (e) { toast(e); }


}

function senddata() {
    // history.go(-(history.length - 1));
    window.location.replace("send.html");
}
//=================================
function menu() {
    history.go(-(history.length - 1));
    window.location.replace("mainmenu.html");
}
function about() {

    window.location.replace("about.html");
}
//============== message 
var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>" + msg + "</h3></div>")
.css({ display: "block",
    opacity: 0.90,
    position: "fixed",
    padding: "7px",
    color: "#FFFFFF",
    "background-color": "#000000",
    "text-align": "center",
    width: "270px",
    left: ($(window).width() - 284) / 2,
    top: $(window).height() / 2
})
.appendTo($.mobile.pageContainer).delay(1500)
.fadeOut(400, function () {
    $(this).remove();
});
}
//=================================
function home() {
    window.location.replace("index.html");
}
function callme() {
   window.location.replace( "map.html");
}
function trann() {
    window.location.replace("trann.html");
}
function mainurl() {
    window.location.replace("http://www.mharattwzeef.com");
}


//=======================================

function send() {
    try {

        var name = document.getElementById("tbname").value;
        var jawal = document.getElementById("tbjawal").value;
        var email = document.getElementById("tbemail").value;
        var age = document.getElementById("tbdate").value;
        var nat = document.getElementById("cmbnat").value;
        var city = document.getElementById("cmbcity").value;
        var city1 = document.getElementById("cmbcity1").value;
        var crit = document.getElementById("tbcrit").value;
        var dep = document.getElementById("tbdep").value;
        var knew = document.getElementById("knew").value;
        var op = document.getElementById("opsex").value;
        var expname = /^[a-zA-zأ-ي| ]+$/;
        var expno = /^[0-9|]+$/;
        var expemail = /^[a-zA-z0-9.@|]+$/;
        //           if(!expname.test(phone))

        if (name == "") {
            toast('يجب إدخال الاسم بصورة صحيحة');
            return;
        }
        var arr = name.split(" ");

        var no = 0;
        no = arr.length;
        if (no < 3) {
            toast(' يجب إدخال الإسم بصورة صحيحة ثلاثي');
            return;

        }
        if (!expname.test(name)) {
            toast("يجب ادخال الاسم بالحروف فقط");
            return;
        }

        if (email.indexOf(".") == -1 || email.indexOf("@") == -1) {
            toast("يجب ادخال البريد الالكتروني بصورة صحيحة");
            return ;
        }
        if (!expemail.test(email)) {
            toast("يجب ادخال البريد الالكتورني  بصورة صحيحة");
            return;
        }
        if (jawal.length < 10) {
            toast("من فضلك ادخل الجوال بصورة صحيحه ومكون من 10 ارقام");
            return ;
        }
        if (jawal.substr(0, 2) != '05') {
            toast("من فضلك ادخل رقم الجوال بصورة صحيحه وان يبدا بـ 05");
            return ;
        }

        if (!expno.test(jawal)) {
            toast("يجب ادخال الجوال ارقام فقط");
            return;
        }
        if (op == 0) {
            toast("من فضلك اختار الجنس");
            return ;
        }
        if (age.length < 4) {
            toast("من فضلك ادخل سنة الميلاد مكونه من 4 ارقام مثل 1980 او 1401");
            return ;
        }
        if (nat == "0" || nat == "") {
            toast("من فضلك اختار الجنسية");
            return ;
        }

        if (city == "0" || city == "") {
            toast("من فضلك اختار جهة الاقامة");
            return ;
        }
        if (city1 == "0" || city1 == "") {
            toast("من فضلك اختار  المدينة التي ترغب في العمل بيها");
            return ;
        }
        if (crit == "") {
            toast('يجب ادخال المؤهــل الدراسي');
            return;
        }

        if (knew == "0" || knew == "") {
            toast("من فضلك اختار  وسيلة المعرفة");
            return ;
        }



        Execute('send');
    } catch (e) { toast(e); }
}


function Execute(Mode) {
    try {

        var op = document.getElementById("cmbcity1").value;
        var name = document.getElementById("tbname").value;
        var email = document.getElementById("tbemail").value;
        var date = document.getElementById("tbdate").value;
        var nat = document.getElementById("cmbnat").value;
        var city = document.getElementById("cmbcity").value;
        var city1 = document.getElementById("cmbcity1").value;
        var crit = document.getElementById("tbcrit").value;
        var dep = document.getElementById("tbdep").value;
        var knew = document.getElementById("knew").value;
        var sex = op;
        var jawal = document.getElementById("tbjawal").value;
        document.getElementById('senddata').disabled = true;
        $.ajax({
            type: "POST",
            url: "http://www.mharattwzeef.com/ConnectDB.aspx",
            data: { tname: name, temail: email, tdate: date, tnat: nat, tcity: city, tcity1: city1, tcrit: crit, tdep: dep, tjawal: jawal, tsex: sex, knew: knew },
            success: OnSuccessCall,
            error: OnErrorCall
        });
    } catch (e) { toast(e); }

}

//==================================

function OnSuccessCall(response) {
    document.getElementById("tbname").value = "";
    document.getElementById("tbjawal").value = "";
    document.getElementById("tbemail").value = "";
    document.getElementById("tbdate").value = "";
    document.getElementById("cmbnat").value = "";
    document.getElementById("cmbcity").value = "";
    document.getElementById("cmbcity1").value = "";
    document.getElementById("tbcrit").value = "";
    document.getElementById("tbdep").value = "";
    document.getElementById("knew").value = "";
    var arr = response.split("/++/");
    toast(arr[0]);
    document.getElementById('senddata').disabled = false;
}


function OnErrorCall(response) {
    toast(response.status + "  " + response.statusText);
    document.getElementById('senddata').disabled = false;
}

//--------------------------------------
function loadbranch() {

    var sex = "0";

    try {
        var sex = document.getElementById('opsex').value;

        $.ajax({
            type: "POST",
            url: "http://www.mharat.ws/getBranch.aspx",
            data: { sex: sex },
            success: OnSuccessgetBranch,
            error: OnErrorgetBranch
        });
    }
    catch (e) { toast(e); }
}
function OnSuccessgetBranch(response) {
    try {
        var arr = response.split("/++/");
        var data = arr[0].split("//");
        //alert(data.length);
        while (document.getElementById("cmbbranch").options.length > 0) {
            document.getElementById("cmbbranch").options.remove(0);
        }

        var opt = document.createElement("option");
        document.getElementById("cmbbranch").options.add(opt);
        opt.text = "اختار الفرع";
        opt.value = "0";

        var x = 0;
        while (x < data.length - 1) {
            var info = data[x].split(";");

            var optdata = document.createElement("option");
            document.getElementById("cmbbranch").options.add(optdata);
            optdata.text = info[1];
            optdata.value = info[0];
            //alert(info[0]+' ////   '+info[1]);
            x = x + 1;
        }
        document.getElementById("listcourse").innerHTML = "";
    }
    catch (e) { alert(e); }

}
function OnErrorgetBranch(response) {

}

//=============================================

function loadcourse() {
    try {
        var id = '';
       
        { id = document.getElementById("cmbbranch").value; }
        if (id == '0') {
            toast("يجب تحديد الفرع او يجب تحدد الجنس حتي تظهر الفروع");
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://www.mharat.ws/code/getcourse.ashx",
            data: { id: id },
            success: OnSuccesscourse,
            error: OnErrorcourse
        });

    } catch (ee) { alert(ee); }
}
function OnSuccesscourse(response) {
    var arr = response.split("/++/");
    //alert(response);
    document.getElementById("listcourse").innerHTML = response;
}
function OnErrorcourse(response) {

}
//==================


//=======================================

function sendtrann() {
    try {

        var name = document.getElementById("tbname").value;
        var jawal = document.getElementById("tbjawal").value;
        var email = document.getElementById("tbemail").value;
        var job = document.getElementById("tbjob").value;
        var branch = document.getElementById("cmbbranch").value;
        var knew = document.getElementById("knew").value;
        var pass = document.getElementById("tbpassreg").value;
        var pass1 = document.getElementById("tbpassreg0").value;
        var nat = document.getElementById("cmbnat").value;
        var op = document.getElementById("opsex").value;
        var expname = /^[a-zA-zأ-ي| ]+$/;
        var expno = /^[0-9|]+$/;
        var expemail = /^[a-zA-z0-9.@|]+$/;
        //           if(!expname.test(phone))

        if (name == "") {
            toast('يجب إدخال الاسم بصورة صحيحة');
            return;
        }
        var arr = name.split(" ");

        var no = 0;
        no = arr.length;
        if (no < 3) {
            toast(' يجب إدخال الإسم بصورة صحيحة ثلاثي');
            return;

        }
        if (!expname.test(name)) {
            toast("يجب ادخال الاسم بالحروف فقط");
            return;
        }

        if (email.indexOf(".") == -1 || email.indexOf("@") == -1) {
            toast("يجب ادخال البريد الالكتروني بصورة صحيحة");
            return;
        }
        if (!expemail.test(email)) {
            toast("يجب ادخال البريد الالكتورني  بصورة صحيحة");
            return;
        }
        if (jawal.length < 10) {
            toast("من فضلك ادخل الجوال بصورة صحيحه ومكون من 10 ارقام");
            return;
        }
        if (jawal.substr(0, 2) != '05') {
            toast("من فضلك ادخل رقم الجوال بصورة صحيحه وان يبدا بـ 05");
            return;
        }

        if (!expno.test(jawal)) {
            toast("يجب ادخال الجوال ارقام فقط");
            return;
        }
        if (op == 0) {
            toast("من فضلك اختار الجنس");
            return;
        }

        if (nat == "0" || nat == "") {
            toast("من فضلك اختار الجنسية");
            return;
        }

        if (knew == "0" || knew == "") {
            toast("من فضلك اختار  وسيلة المعرفة");
            return;
        }

        if (branch == "0" || branch == "") {
            toast("من فضلك اختار الفرع");
            return;
        }
        var x = 0;
        x = document.getElementById("tcount").value;
        var y = 0;
        var id = "";
        while (y < x) {
            data = document.getElementById('ch' + y).checked;
            if (data) {
                id += document.getElementById('tkey' + y).value + ";";
            }
            y = y + 1;
        }
        if (id == "") {
            toast("يجب تحديد الدورات المراد  الاشتراك فيها  ");
            return;
        }
        if (knew == "0" || knew == "") {
            toast("من فضلك اختار  وسيلة المعرفة");
            return;
        }
        if (pass == "") {
            toast("من فضلك  ادخل كلمة المرور");
            return;
        }
        if (pass.length < 8) {
            toast("من فضلك  ادخل كلمة المرور 8 حروف علي الاقل");
            return;
        }
        if (pass != pass1) {
            toast("لا يوجد تطابق بين كلمتي المرور");
            return;
        }
        Executetrann('send');
    } catch (e) { toast(e); }
}


function Executetrann(Mode) {
    try {
        var name = document.getElementById("tbname").value;
        var email = document.getElementById("tbemail").value;
        var job = document.getElementById("tbjob").value;
        var branch = document.getElementById("cmbbranch").value;
        var knew = document.getElementById("knew").value;
        var tel = document.getElementById("tbtel").value;
        var fax = document.getElementById("tbfax").value;
        var nat = document.getElementById("cmbnat").value;
        var pass = document.getElementById("tbpassreg").value;
        var sex = document.getElementById("opsex").value;
        var jawal = document.getElementById("tbjawal").value;
        var x = 0;
        x = document.getElementById("tcount").value;
        var y = 0;
        var id = "";
        while (y < x) {
            data = document.getElementById('ch' + y).checked;
            if (data) {
                id += document.getElementById('tkey' + y).value + ";";
            }
            y = y + 1;
        }
        //-----------------------------  
        document.getElementById('sendtrann').disabled = true;

        $.ajax({
            type: "POST",
            url: "http://www.mharat.ws/connDB.aspx",
            data: { tname: name, temail: email, tel: tel, fax: fax, branch: branch, pass: pass, course: id, tjawal: jawal, tsex: sex, knew: knew, fax: fax, job: job, nat: nat },
            //contentType: "application/json; charset=utf-8",

            success: OnSuccesstrann,
            error: OnErrortrann
        });


    }
    catch (e) { toast(e); }
}

//==================================

function OnSuccesstrann(response) {

    document.getElementById("tbname").value = "";
    document.getElementById("tbjawal").value = "";
    document.getElementById("tbemail").value = "";
    document.getElementById("cmbbranch").value = "";
    document.getElementById("cmbnat").value = "";
    document.getElementById("tbjob").value = "";
    document.getElementById("tbtel").value = "";
    document.getElementById("tbfax").value = "";
    document.getElementById("tbpassreg").value = "";
    document.getElementById("tbpassreg0").value = "";
    document.getElementById("knew").value = "";
    var arr = response.split("/++/");
    toast(arr[0]);
    document.getElementById('sendtrann').disabled = false;
}


function OnErrortrann(response) {
    toast(response.status + "  " + response.statusText);
    document.getElementById('sendtrann').disabled = false;
}
     
