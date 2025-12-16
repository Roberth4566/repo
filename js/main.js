// ===== MODO OSCURO CON ICONO =====
const toggleDark = document.getElementById('toggle-dark');

function actualizarIcono() {
    toggleDark.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Revisar modo oscuro guardado
if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}
actualizarIcono();

// Cambiar modo al hacer clic
toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    actualizarIcono();
});

// ===== MENÚ HAMBURGUESA MÓVIL VERTICAL =====
const toggleMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

toggleMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // evita que el clic se propague
    menu.classList.toggle('active'); // mostrar/ocultar menú
    toggleMenu.classList.toggle('active'); // animación botón
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if(menu.classList.contains('active') && !menu.contains(e.target) && !toggleMenu.contains(e.target)){
        menu.classList.remove('active');
        toggleMenu.classList.remove('active');
    }
});

// ===== REDIRECCIÓN LOGIN =====
const formLogin = document.querySelector('form.form-login');
if(formLogin){
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'dashboard.html';
    });
}

