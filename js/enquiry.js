



//validate is number : onkeypress='return event.charCode >= 48 && event.charCode <= 57'



function validateEmail($txtEmail) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($txtEmail);
}

function EnquiryForm(formname) {
    var txtName = $('#txtname1').val();
    var txtEmail = $('#txtemail1').val();
    var txtphone = $('#txtmobile1').val();
    var txtStateCity = $('#txtstatecity1').val();
    var txtSubject = formname;
    var txtMessage = $('#txtmessage1').val();
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (txtName.length < 1) {
        $("#lblerror1").html("Please Enter Your Full Name")
        $('#txtname1').focus();
    }

    else if (txtEmail.length < 1) {
        $("#lblerror1").html("Please Enter Your Email")
        $('#txtemail1').focus();
    }

    else if (!validateEmail(txtEmail)) {
        $("#lblerror1").html("Please Enter a Valid Email")
        $('#txtemail1').focus();
    }
    else if (txtphone.length < 1) {
        $("#lblerror1").html("Please Enter Your Mobile Number")
        $('#txtmobile1').focus();
    }
    else if (txtphone.length != 10) {
        $("#lblerror1").html("Please Enter a Valid Mobile Number")
        $('#txtmobile1').focus();
    }
    else if (txtStateCity.length < 1) {
        $("#lblerror1").html("Please Enter State / City")
        $('#txtstatecity1').focus();
    }
    else if (txtMessage.length < 1) {
        $("#lblerror1").html("Please Enter Your Message")
        $('#txtmessage1').focus();
    }
    else {
        $("#lblerror1").html("")
        $("#btnsubmit").addClass("ClosePopup");
        $("#btnplswait").removeClass("ClosePopup");
        var e = {
            Name: txtName,
            Email: txtEmail,
            Mobile: txtphone,
            StateCity: txtStateCity,
            Subject: txtSubject,
            Message: txtMessage
        }
        $.ajax({
            type: "POST",
            url: "https://api.herohomes.in/HeroHome/EnquiryForm",
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
                        $('#txtname1').val('');
                        $('#txtemail1').val('');
                        $('#txtmobile1').val('');
                        $('#txtstatecity1').val('');                       
                        $('#txtmessage1').val('');
                        $("#btnplswait").addClass("ClosePopup");
                        $("#btnsubmit").removeClass("ClosePopup");
                    });
                }
                else {
                    $('#txtname1').val('');
                    $('#txtemail1').val('');
                    $('#txtmobile1').val('');
                    $('#txtstatecity1').val('');                   
                    $('#txtmessage1').val('');
                    $("#btnplswait").addClass("ClosePopup");
                    $("#btnsubmit").removeClass("ClosePopup");
                    swal("Error", "Please try after sometime", "warning");
                }

            },
            error: function (data, Success, error) {
                $('#txtname1').val('');
                $('#txtemail1').val('');
                $('#txtmobile1').val('');
                $('#txtstatecity1').val('');              
                $('#txtmessage1').val('');
                $("#btnplswait").addClass("ClosePopup");
                $("#btnsubmit").removeClass("ClosePopup");
                swal("Error", "Please try after sometime", "warning");
            }
        });
    }
}


function ContactUsForm() {
    var txtName2 = $('#txtname2').val();
    var txtEmail2 = $('#txtemail2').val();
    var txtphone2 = $('#txtmobile2').val();
    var txtStateCity2 = $('#txtstatecity2').val();
    var txtSubject2 = $('#ddlproject2 option:selected').val();
    var txtMessage2 = $('#txtmessage2').val();
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (txtName2.length < 1) {
        $("#lblerror2").html("Please Enter Your Full Name")
        $('#txtname2').focus();
    }

    else if (txtEmail2.length < 1) {
        $("#lblerror2").html("Please Enter Your Email")
        $('#txtemail2').focus();
    }

    else if (!validateEmail(txtEmail2)) {
        $("#lblerror2").html("Please Enter a Valid Email")
        $('#txtemail2').focus();
    }
    else if (txtphone2.length < 1) {
        $("#lblerror2").html("Please Enter Your Mobile Number")
        $('#txtmobile2').focus();
    }
    else if (txtphone2.length != 10) {
        $("#lblerror2").html("Please Enter a Valid Mobile Number")
        $('#txtmobile2').focus();
    }
    else if (txtStateCity2.length < 1) {
        $("#lblerror2").html("Please Enter State / City")
        $('#txtstatecity2').focus();
    }
    else if (txtSubject2.length < 1) {
        $("#lblerror2").html("Please Select a Project")
        $('#ddlproject2').focus();
    }
    else if (txtMessage2.length < 1) {
        $("#lblerror2").html("Please Enter Your Message")
        $('#txtmessage2').focus();
    }
    else {
        $("#lblerror2").html("")
        $("#btncenquiry").addClass("ClosePopup");
        $("#btncwait").removeClass("ClosePopup");
        var e = {
            Name: txtName2,
            Email: txtEmail2,
            Mobile: txtphone2,
            StateCity: txtStateCity2,
            Subject: txtSubject2,
            Message: txtMessage2,
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
                        $('#txtname2').val('');
                        $('#txtemail2').val('');
                        $('#txtmobile2').val('');
                        $('#txtstatecity2').val('');
                        $('#txtmessage2').val('');
                        $("#btncwait").addClass("ClosePopup");
                        $("#btncenquiry").removeClass("ClosePopup");
                    });
                }
                else {
                    $('#txtname2').val('');
                    $('#txtemail2').val('');
                    $('#txtmobile2').val('');
                    $('#txtstatecity2').val('');
                    $('#txtmessage2').val('');
                    $("#btncwait").addClass("ClosePopup");
                    $("#btncenquiry").removeClass("ClosePopup");
                    swal("Error", "Please try after sometime", "warning");
                }

            },
            error: function (data, Success, error) {
                $('#txtname2').val('');
                $('#txtemail2').val('');
                $('#txtmobile2').val('');
                $('#txtstatecity2').val('');
                $('#txtmessage2').val('');
                $("#btncwait").addClass("ClosePopup");
                $("#btncenquiry").removeClass("ClosePopup");
                swal("Error", "Please try after sometime", "warning");
            }
        });
    }
}