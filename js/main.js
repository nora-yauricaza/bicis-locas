function validateForm(){
    var nombre = document.getElementById("name").value;
        if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
        alert("Ingresar el campo nombre");
        var m = /^[a-zA-Z]*$/;
            if(!nombre.search(m))
            console.log ("letra");
            else
            alert ("Ingrese datos válidos (A-Z)");
    }
        var apellido = document.getElementById("lastname").value;
        if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
        alert("Ingresar el campo apellido");
        var m = /^[a-zA-Z]*$/;
            if(!apellido.search(m))
            console.log ("letra");
            else
            alert ("Ingrese datos válidos (A-Z)");
    }
        var email = document.getElementById("input-email").value;
        if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
        alert("Ingresar el campo Email");
        var m = /^[a-zA-Z]*$/;
            if(!email.search(m))
            console.log ("letra");
            else
            alert ("Ingrese datos válidos (A-Z)");
}
    var password = document.getElementById("input-password").value;
        if( password == null || password.length == 0 || /^\s+$/.test(password) ) {
        alert("Ingresar el campo contraseña");
        var m = /^[a-zA-Z]*$/;
            if(!password.search(m))
            console.log ("letra");
            else
            alert ("Ingrese datos válidos (A-Z)");
    }
}



