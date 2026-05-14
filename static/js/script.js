/* ── ACCORDION ── */
function toggle(btn){
    const body = btn.nextElementSibling;
    const opening = !body.classList.contains('open');
    body.classList.toggle('open', opening);
    btn.classList.toggle('open', opening);
}