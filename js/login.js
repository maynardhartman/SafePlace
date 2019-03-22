// form section script


        $(document).ready(function() {
            $("#submit").click(function() {
                var name, phone, password;
                name = $("#name").val();
                phone = $("#phone").val();
                password = $("#password").val();
                $.post("http://127.0.0.1:3000/api/contacts/",
                    { name: name, phone: phone, password: password },
                    function(data) {
                        if (data = "done") {
                            alert("Your Information Has Been Saved.");
                        }
                    });
            })

        });

