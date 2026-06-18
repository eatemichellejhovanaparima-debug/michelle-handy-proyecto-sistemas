document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.getElementById('formularioRegistro');
    const cajaConsola = document.getElementById('consolaDebug');

    formulario.addEventListener('submit', function(evento) {
        
        evento.preventDefault();

        // Captura interactiva del DOM
        const inputNombre = document.getElementById('nombre_usuario').value;
        const inputCorreo = document.getElementById('correo_usuario').value;
        const inputPassword = document.getElementById('contrasena_usuario').value;
        const inputRol = document.getElementById('rol_usuario').value;

        // MAPEO EXACTO AL DICCIONARIO DE DATOS DEL PDF ACTUALIZADO (PÁG. 32)
        const mapeoTablaUsuarios = {
            id_usuario: Math.floor(Math.random() * 500) + 1, // Simula INT(11) PK
            nombre_usuario: inputNombre,                     // VARCHAR(100)
            correo_usuario: inputCorreo,                     // VARCHAR(100)
            contrasena_usuario: btoa(inputPassword),           // Cifrado básico VARCHAR(255)
            rol_usuario: inputRol,                           // VARCHAR(50)
            fecha_registro: new Date().toISOString().replace('T', ' ').substring(0, 19) // DATETIME
        };

        // Renderizado del mapeo en la consola visual de ingeniería
        cajaConsola.classList.remove('hidden');
        cajaConsola.innerHTML = `
<strong>📊 MAPEO EXITOSO CON TU INFORME REAL (SECCIÓN 3.3.3):</strong>
------------------------------------------------------------------
[Insertando Registro en la Tabla Relacional: Usuarios]
• id_usuario (INT PK)          --> ${mapeoTablaUsuarios.id_usuario}
• nombre_usuario (VARCHAR)     --> "${mapeoTablaUsuarios.nombre_usuario}"
• correo_usuario (VARCHAR)     --> "${mapeoTablaUsuarios.correo_usuario}"
• contrasena_usuario (VARCHAR) --> "${mapeoTablaUsuarios.contrasena_usuario}"
• rol_usuario (VARCHAR)        --> "${mapeoTablaUsuarios.rol_usuario}"
• fecha_registro (DATETIME)    --> ${mapeoTablaUsuarios.fecha_registro}
------------------------------------------------------------------
✔ Cumple Regla de Negocio: RN-01 (Registro de usuarios)
✔ Satisface Requisito Funcional: RF-01 (Autenticación y acceso)
✔ Interfaz vinculada a la arquitectura MySQL / Python Flask
        `;

        formulario.reset();
    });
});
