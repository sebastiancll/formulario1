function validar(){
    var pulsado = false;
    var tipo_jor = document.formulario.opc;
    var elegido = -1;
    var opcion = document.formulario.condiciones;
    for (i = 0; i < tipo_jor.length; i++) {
       if (tipo_jor[i].checked == true){
        pulsado = true
        elegido = i
       } 
    }

    if (pulsado != true) {
        swal("Oops!", "No has elegido si eres gey. \n \n Elige una opccion para continuar", 'error');
        return false 
    }

    if (opcion.checked != true) {
        swal("Oops!", "El formulario no ha podido enviarse. \n \n Debe aceptar las condiciones para poder enviar el formulario", 'error');
        return false; 
    }     
    else {
        miOpcion = tipo_jor[elegido].value
        swal("Perfecto","Has aceptado tu homosexualidad: " + miOpcion + "\n \n El formulario ha sido enviado.",'success');   
    } 
}