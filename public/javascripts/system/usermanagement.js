/**
 * Created by Baggio on 2015/12/8.
 */
var deleteid;
var updateid;
var updatename;
var updateuser;
$(document).ready(function () {
    dd.addListenerClick('#addUser', function () {
        $('#myModal').modal('show')
    });
    dd.addListenerClick('#saveuser', function () {
        var data = {};
        $('#userinfo :input').each(function () {
            var name = $(this).attr('id');
            var value = $(this).val();
            data[name] = value;
        });
        $.ajax({
            url: '../ajax/system/usermanagement',
            type: 'post',
            data: {
                action: 'add',
                userinfo: JSON.stringify(data)
            },
            dataType: 'json',
            success: function (resobject) {
                if (resobject.success) {
                    $("#close").addClass('hidden');
                    $("#saveuser").addClass('hidden');
                    $("#saveclose").removeClass('hidden');
                    $("#promptmessage").removeClass('hidden');
                    $('#promptmessage').html('保存成功！');

                }
                else {
                    //alertwaring(resobject.errormessage);

                }
                //$btn.button('reset');
            },
            error: function () {
                //$('#errormessage').html('登录异常！');
                //$('#diverror').css('display', 'block');
                //$btn.button('reset');
            }
        });
    })
    dd.addListenerClick('#saveclose', function () {
        window.location.reload();

    })
    dd.addListenerClick('.glyphicon-cog', function () {
        updateid = $(this).parents("tr:first").attr('id');
        updatename=$(this).parents("tr:first").children(".personname1").text();
        updateuser=$(this).parents("tr:first").children(".username1").text();
        $('#personname2').val(updatename);
        $('#username2').val(updateuser);
        $('#modalUpdate').modal('show');



    })
    dd.addListenerClick('#confirmupate', function () {

        var data = {};
        updatename=$('#personname2').val();
        updateuser=$('#username2').val();
        data.id=updateid;
        data.personname=updatename;
        data.username=updateuser;
        $.ajax({
            url: '../ajax/system/usermanagement',
            type: 'post',
            data: {
                action: 'update',
                data: JSON.stringify(data)
            },
            dataType: 'json',
            success: function (resobject) {
                if (resobject.success) {
                    $("#confirmupate").addClass('hidden');
                    $("#updateclose").addClass('hidden');
                    $('#promptmessage4').removeClass('hidden');
                    $('#promptmessage4').html('更新成功！');
                    $("#updateclose1").removeClass('hidden');

                }
                else {
                    //alertwaring(resobject.errormessage);

                }
                //$btn.button('reset');
            },
            error: function () {
                //$('#errormessage').html('登录异常！');
                //$('#diverror').css('display', 'block');
                //$btn.button('reset');
            }
        });

    })
    dd.addListenerClick('#updateclose1', function () {
        window.location.reload();

    })
    dd.addListenerClick('.glyphicon-trash', function () {
        deleteid = $(this).parents("tr:first").attr('id');
        var deletename=$(this).parents("tr:first").children(".personname1").text();
        $('#deleteprompt').text(deletename);
        $('#modalDelete').modal('show');



    })
    dd.addListenerClick('#confirmdelete', function () {

        $.ajax({
            url: '../ajax/system/usermanagement',
            type: 'post',
            data: {
                action: 'delete',
                id: deleteid
            },
            dataType: 'json',
            success: function (resobject) {
                if (resobject.success) {
                    $("#cancelDelete").addClass('hidden');
                    $("#confirmdelete").addClass('hidden');
                    $("#deleteok").removeClass('hidden');
                    $('#promptmessage1').removeClass('hidden');
                    $("#promptmessage3").addClass('hidden');
                }
                else {
                    $('#promptmessage2').removeClass('hidden');;

                }
                //$btn.button('reset');
            },
            error: function () {
                //$('#errormessage').html('登录异常！');
                //$('#diverror').css('display', 'block');
                //$btn.button('reset');
            }
        });

    })
    dd.addListenerClick('#deleteok', function () {
        window.location.reload();

    })
    dd.addListenerClick('#btnFind', function () {
        window.location.href='usermanagement?var11=quaresqun';

    })
});
