const caja = document.getElementById('caja'),
abrir = document.getElementById('imagen'),
cerrar = document.getElementById('cerrar')
if (abrir) {
abrir.addEventListener('click', () => {
    caja.classList.add('mostrar')
})
}
if (cerrar) {
cerrar.addEventListener('click', () => {
    caja.classList.remove('mostrar')
})
};