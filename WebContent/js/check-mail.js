function jsReqValidationEmail(){var a=$("#txt_username").val().trim();!1===checkEmailValidation(a)?(alert("\uc774\uba54\uc77c \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694"),$("#txt_username").focus()):confirm(a+"\ub85c \uac00\uc785\uba54\uc77c \uc778\uc99d\uc744 \uc694\uccad\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(waitingDialog.show(a+" \uac00\uc785\uba54\uc77c\uc744 \uc804\uc1a1\uc911\uc785\ub2c8\ub2e4. \uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694."),$.ajax({type:"POST",
url:"/email/valid/request",data:{email:a},success:function(a){waitingDialog.hide();alert(a.message);window.location.href=a.redirect_url}}))};