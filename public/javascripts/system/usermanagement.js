/**
 * Created by Baggio on 2015/12/8.
 */
$(document).ready(function () {
    dd.addListenerClick('#addUser', function () {
        $('#myModal').modal('show')
    });
    dd.addListenerClick('#saveuser', function () {
        var data={};
        $('#userinfo :input').each(function(){
            var name=$(this).attr('id');
            var value=$(this).val();
            data[name]=value;
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
                    $('#close').css('display', 'none');
                    $('#saveuser').css('display', 'none');
                    $('#saveclose').css('display', 'inline');
                    $('#promptmessage').css('display', 'block');
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
    dd.addListenerClick('#saveclose',function(){
        window.location.reload();

    })
    dd.addListenerClick('.glyphicon-cog', function (){
        var id=$(this).parents("tr:first").attr('id');
        alert(id);

    })
    dd.addListenerClick('.glyphicon-trash', function (){
        var id=$(this).parents("tr:first").attr('id');
        $.ajax({
            url: '../ajax/system/usermanagement',
            type: 'post',
            data: {
                action: 'delete',
               id: id
            },
            dataType: 'json',
            success: function (resobject) {
                if (resobject.success) {

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
});
