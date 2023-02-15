



$(document).ready(function ($) {
    "use strict";

    var urlParam = new URLSearchParams(window.location.search);
    var Sendby = urlParam.get('Sendby');
    if (Sendby == "Click") {
        SearchProperty();
    }
   
});

function searchProperties() {
    var Location = $('#ddllocation option:selected').val();
    var Noofbhks = $('#ddlnoofbhks option:selected').val();
    var PriceRange = $('#ddlpricerange option:selected').val();
    var TimeLine = $('#ddltimelime option:selected').val();
    if (Location == "" && Noofbhks == "" && PriceRange == "" && TimeLine == "")
    {
        swal("", "Please Select any Filter", "warning");
    }
    else {
        window.location.href = "projects.html?Location=" + Location + "&Noofbhks=" + Noofbhks + "&PriceRange=" + PriceRange + "&TimeLine=" + TimeLine + "&Sendby=Click"
    }
   
}


function SearchProperty() {
    var urlParams = new URLSearchParams(window.location.search);
    var Location = urlParams.get('Location');
    var Noofbhks = urlParams.get('Noofbhks');
    var PriceRange = urlParams.get('PriceRange');
    var TimeLine = urlParams.get('TimeLine');

    var e = {
        Location:Location,
        FlatTypes:Noofbhks,
        PriceRanges:PriceRange,
        TimeLine:TimeLine,
        Search:"Filter"
    }
    $.ajax({
        type: "POST",
        url: "https://api.herohomes.in/HeroHome/SelectProjectData",
        contentType: "application/json;Charset=utf-8",
        dataType: "json",
        data: JSON.stringify(e),
        success: function (data) {
            var data1 = data.HeroHomeList
            if (data.Message == "Success") {
                if (data1.length > 0) {
                    for (var i = 0; i < data1.length; i++) {
                        var variable = "" +
    "<div class=\"blog-post post-list-style\">" +
    "                            <a href=\"" + data1[i].ProjectURL + "\" class=\"post-thumbnail\">" +
    "                                <img src=\"" + data1[i].projectimages + "\" alt=\"\">" +
    "                            </a>" +
    "                            <div class=\"post-content\">" +
    "" +
    "                                <h3><a href=\"project-mohali/phase-2.html\">" + data1[i].ProjectName + "</a></h3>" +
    "                                <p>" + data1[i].ProjectDescription + "</p>" +
    "" +
    "                                <h4>Type - " + data1[i].FlatType + "</h4>" +
    "                                <ul class=\"meta-list\">" +
    "                                <li><i class=\"fa fa-location-arrow\"></i> " + data1[i].ProjectLocation + "</li>" +
    "                                </ul>" +
    "                                <a class=\"button-one\" href=\"" + data1[i].ProjectURL + "\"><span>View More</span></a>  " +
    "                                 <a class=\"button-one\" href=\"" + data1[i].projectEnquiryURL + "\"><span>Book a Visit</span></a>                               </div>" +
    "                        </div>" +
    "";

                        $('#blogbox').append(variable);
                    }
                }
                else {
                    var variable1 = "" +
"<div class=\"text-center \">                          " +
"                                <h3 class=\"text-danger\">No Data Available</h3>                                " +
"                        </div>" +
"";
                    $('#blogbox').append(variable1);
                }                               
            }
        },
            error: function (data, Success, error) {
               
                console.log("data:" + data+"Success:"+Success+"Error:"+error)
            }
        });
}



function validateEmail($txtEmail) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($txtEmail);
}


function ValidateOngoingProject() {
    var txtFullName = $('#txtfullname').val();
    var txtEmailID = $('#txtemailid').val();
    var txtphoneno = $('#txtmobileno').val();
    var OngoingProject = $('#ddlongoingproject').val();
    email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (txtFullName.length < 1) {
        swal("", "Please Enter Your Full Name", "");
        $('#txtfullname').focus();
    }

    else if (txtEmailID.length < 1) {
        swal("", "Please Enter Your Email", "");      
        $('#txtemailid').focus();
    }

    else if (!validateEmail(txtEmailID)) {
        swal("", "Please Enter a Valid Email", "");     
        $('#txtemailid').focus();
    }
    else if (txtphoneno.length < 1) {
        swal("", "Please Enter Your Mobile Number", "");      
        $('#txtmobileno').focus();
    }
    else if (txtphoneno.length < 10) {
        swal("", "Please Enter a Valid Mobile Number", "");
        $("#lblerror1").html()
        $('#txtmobileno').focus();
    }
    else if (OngoingProject.length < 1) {
        swal("", "Please Select Ongoing Project", "");       
        $('#ddlongoingproject').focus();
    }
    else {
        $("#lblerror1").html("")
        $("#btnenquiry1").addClass("ClosePopup");
        $("#btnwait1").removeClass("ClosePopup");
        var e = {
            FullName: txtFullName,
            Email: txtEmailID,
            MobileNo: txtphoneno,
            OngoingProject: OngoingProject,
        }
        $.ajax({
            type: "POST",
            url: "https://api.herohomes.in/HeroHome/ProjectEnquiry",
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
                        $('#txtfullname').val('');
                        $('#txtemailid').val('');
                        $('#txtmobileno').val('');
                        $('#ddlongoingproject').val('');
                        $("#btnwait1").addClass("ClosePopup");
                        $("#btnenquiry1").removeClass("ClosePopup");
                    });
                }
                else {
                    $('#txtfullname').val('');
                    $('#txtemailid').val('');
                    $('#txtmobileno').val('');
                    $('#ddlongoingproject').val('');
                    $("#btnwait1").addClass("ClosePopup");
                    $("#btnenquiry1").removeClass("ClosePopup");
                    swal("Error", "Please try after sometime", "warning");
                }

            },
            error: function (data, Success, error) {
                $('#txtfullname').val('');
                $('#txtemailid').val('');
                $('#txtmobileno').val('');
                $('#ddlongoingproject').val('');
                $("#btnwait1").addClass("ClosePopup");
                $("#btnenquiry1").removeClass("ClosePopup");
                swal("Error", "Please try after sometime", "warning");
            }
        });
    }
}
