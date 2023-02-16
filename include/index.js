
$(document).ready(function ($) {
    "use strict"; 
    var Theme = getCookie("Theme");
    $("#container").removeClass("d-none");
    var ndate = new Date();
    var hours = ndate.getHours();
    var message = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

    if (message == "Good Morning" || message == "Good Afternoon") {
        //if (Theme == "Light") {
        setCookie("Theme", "Light", 30);
        $('link[name="dark_style"]').attr("disabled", "disabled");
        $('link[name="light_style"]').removeAttr("disabled", "disabled");
        $('link[name="dark_style-fest"]').attr("disabled", "disabled");
        $('link[name="light_style-fest"]').removeAttr("disabled", "disabled");
        $('link[name="dark_style-inner"]').attr("disabled", "disabled");
        $('link[name="light_style-inner"]').removeAttr("disabled", "disabled");
        $('link[name="menu_dark"]').attr("disabled", "disabled");
        $('link[name="menu_light"]').removeAttr("disabled", "disabled");
        $('link[name="app_darkview"]').attr("disabled", "disabled");
        $('link[name="app_lightview"]').removeAttr("disabled", "disabled");
        $(".dark-l").removeClass("d-none");
        $(".loaderlogo").attr("src", "images/logo.png");
        //   $(".headerlogo").attr("src", "images/logo.png");
        //$(".haridwar-headerlogo").attr("src", "images/herohomes-logo-haridwar-b.png");     
        //  $("#changetheme").find($(".fa")).removeClass('fa-sun').addClass('fa-moon')
    }
    else {
        setCookie("Theme", "dark", 30);
        $('link[name="light_style"]').attr("disabled", "disabled");
        $('link[name="dark_style"]').removeAttr("disabled", "disabled");
        $('link[name="light_style-fest"]').attr("disabled", "disabled");
        $('link[name="dark_style-fest"]').removeAttr("disabled", "disabled");
        $('link[name="light_style-inner"]').attr("disabled", "disabled");
        $('link[name="dark_style-inner"]').removeAttr("disabled", "disabled");
        $('link[name="menu_light"]').attr("disabled", "disabled");
        $('link[name="menu_dark"]').removeAttr("disabled", "disabled");
        $('link[name="app_lightview"]').attr("disabled", "disabled");
        $('link[name="app_darkview"]').removeAttr("disabled", "disabled");
        $(".loaderlogo").attr("src", "images/logo-w.png");
        //  $(".headerlogo").attr("src", "images/logo-w.png");
        //$(".haridwar-headerlogo").attr("src", "images/herohomes-logo-haridwar-w.png");
        //  $("#changetheme").find($(".fa")).removeClass('fa-moon').addClass('fa-sun')
    }
});


let onload = () => {
    var icon = document.querySelector(".info-box2 .fa-sun");
    var ndate = new Date();
    var hours = ndate.getHours();
    var message = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

    if (icon) {
        if (message == "Good Morning" || message == "Good Afternoon") {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
            $(".headerlogo").attr("src", "images/logo.png");
            $(".haridwar-headerlogo").attr("src", "images/herohomes-logo-haridwar-b.png");
        }
        else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
            $(".headerlogo").attr("src", "images/logo-w.png");
            $(".haridwar-headerlogo").attr("src", "images/herohomes-logo-haridwar-w.png");
        }
    }
}
window.addEventListener("load", onload)


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function changeCSS() {
    var Theme = getCookie("Theme");
    var mode = $("#changetheme").find($(".fa")).attr('class');
    //if (mode == "fa fa-sun") {
    if (Theme == "dark") {
        setCookie("Theme", "Light", 30);
        $('link[name="dark_style"]').attr("disabled", "disabled");
        $('link[name="light_style"]').removeAttr("disabled", "disabled");
        $('link[name="dark_style-fest"]').attr("disabled", "disabled");
        $('link[name="light_style-fest"]').removeAttr("disabled", "disabled");
        $('link[name="dark_style-inner"]').attr("disabled", "disabled");
        $('link[name="light_style-inner"]').removeAttr("disabled", "disabled");
        $('link[name="menu_dark"]').attr("disabled", "disabled");
        $('link[name="menu_light"]').removeAttr("disabled", "disabled");
        $('link[name="app_darkview"]').attr("disabled", "disabled");
        $('link[name="app_lightview"]').removeAttr("disabled", "disabled");
        $(".dark-l").removeClass("d-none");
        $(".loaderlogo").attr("src", "images/logo.png");
        $(".headerlogo").attr("src", "images/logo.png");
        $(".haridwar-headerlogo").attr("src", "images/herohomes-logo-haridwar-b.png");
        $("#changetheme").find($(".fa")).removeClass('fa-sun').addClass('fa-moon')
    }
    else {
        setCookie("Theme", "dark", 30);
        $('link[name="light_style"]').attr("disabled", "disabled");
        $('link[name="dark_style"]').removeAttr("disabled", "disabled");
        $('link[name="light_style-fest"]').attr("disabled", "disabled");
        $('link[name="dark_style-fest"]').removeAttr("disabled", "disabled");
        $('link[name="light_style-inner"]').attr("disabled", "disabled");
        $('link[name="dark_style-inner"]').removeAttr("disabled", "disabled");
        $('link[name="menu_light"]').attr("disabled", "disabled");
        $('link[name="menu_dark"]').removeAttr("disabled", "disabled");
        $('link[name="app_lightview"]').attr("disabled", "disabled");
        $('link[name="app_darkview"]').removeAttr("disabled", "disabled");
        $(".loaderlogo").attr("src", "images/logo-w.png");
        $(".headerlogo").attr("src", "images/logo-w.png");
        $(".haridwar-headerlogo").attr("src", "images/herohomes-logo-haridwar-w.png");
        $("#changetheme").find($(".fa")).removeClass('fa-moon').addClass('fa-sun')
    }
}


function ShowPopup() {
    $(".backgroundOverlay").addClass("ShowPopup");
    $(".form-section-main").addClass("ShowPopup");
    $(".backgroundOverlay").removeClass("ClosePopup");
    $(".form-section-main").removeClass("ClosePopup");
}



function ClosePopup() {
    $(".backgroundOverlay").addClass("ClosePopup");
    $(".form-section-main").addClass("ClosePopup");
    $(".backgroundOverlay").removeClass("ShowPopup");
    $(".form-section-main").removeClass("ShowPopup");
}


function validateEmail($txtEmail) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($txtEmail);
}

function Validate() {
    var txtName = $('#txtname').val();
    var txtEmail = $('#txtemail').val();
    var txtphone = $('#txtmobile').val();
    var txtStateCity = $('#txtstatecity').val();
    var txtSubject = "Alaknanda Plots - Haridwar";
    var txtMessage = $('#txtmessage').val();
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (txtName.length < 1) {
        $("#lblerror").html("Please Enter Your Full Name")
        $('#txtname').focus();
    }

    else if (txtEmail.length < 1) {
        $("#lblerror").html("Please Enter Your Email")
        $('#txtemail').focus();
    }

    else if (!validateEmail(txtEmail)) {
        $("#lblerror").html("Please Enter a Valid Email")
        $('#txtemail').focus();
    }
    else if (txtphone.length < 1) {
        $("#lblerror").html("Please Enter Your Mobile Number")
        $('#txtmobile').focus();
    }
    else if (txtphone.length != 10) {
        $("#lblerror").html("Please Enter a Valid Mobile Number")
        $('#txtmobile').focus();
    }
    else if (txtStateCity.length < 1) {
        $("#lblerror").html("Please Enter State / City")
        $('#txtstatecity').focus();
    }
    else if (txtSubject.length < 1) {
        $("#lblerror").html("Please Select Project")
        $('#ddlproject').focus();
    }
    else if (txtMessage.length < 1) {
        $("#lblerror").html("Please Enter Your Message")
        $('#txtmessage').focus();
    }
    else {
        $("#lblerror").html("")
        $("#btnenquiry").addClass("ClosePopup");
        $("#btnwait").removeClass("ClosePopup");
        var e = {
            Name: txtName,
            Email: txtEmail,
            Mobile: txtphone,
            StateCity: txtStateCity,
            Subject: txtSubject,
            Message: txtMessage,
            form: 'contact',
            domain: 'Hero Homes',
            sendToEmail: 'manjeetdhimaan60@gmail.com'
        }
        $.ajax({
            type: "POST",
            url: "https://www.api-email.dopedigital.in/api/send-contact-growing-bricks",
            contentType: "application/json;Charset=utf-8",
            dataType: "json",
            data: JSON.stringify(e),
            success: function (data) {
                if (data.Message == "Success") {
                    swal({
                        title: "Thank you!",
                        text: "for your enquiry!",
                        type: "success"
                    }).then(function () {
                        $('#txtname').val('');
                        $('#txtemail').val('');
                        $('#txtmobile').val('');
                        $('#txtstatecity').val('');
                        $('#ddlproject').val('');
                        $('#txtmessage').val('');
                        $("#btnwait").addClass("ClosePopup");
                        $("#btnenquiry").removeClass("ClosePopup");
                        $(".backgroundOverlay").fadeToggle(500);
                        $(".form-section-main").toggle();
                    });
                }
                else {
                    $('#txtname').val('');
                    $('#txtemail').val('');
                    $('#txtmobile').val('');
                    $('#txtstatecity').val('');
                    $('#ddlproject').val('');
                    $('#txtmessage').val('');
                    $("#btnwait").addClass("ClosePopup");
                    $("#btnenquiry").removeClass("ClosePopup")
                    $(".backgroundOverlay").fadeToggle(500);
                    $(".form-section-main").toggle();
                    swal("Error", "Please try after sometime", "warning");
                }

            },
            error: function (data, Success, error) {
                $('#txtname').val('');
                $('#txtemail').val('');
                $('#txtmobile').val('');
                $('#txtstatecity').val('');
                $('#ddlproject').val('');
                $('#txtmessage').val('');
                $("#btnwait").addClass("ClosePopup");
                $("#btnenquiry").removeClass("ClosePopup")
                $(".backgroundOverlay").fadeToggle(500);
                $(".form-section-main").toggle();
                swal("Error", "Please try after sometime", "warning");
            }
        });
    }
}






