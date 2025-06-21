const rotas = {
    '/': 'inicio',
    '/formacao': 'formacao',
    '/experiencia': 'experiencia',
    '/contato': 'contato'
};

function onInit() {
    updateContent();
    updateNav();
};

function updateContent() {
    const path = window.location.pathname;
    const id = rotas[path] || 'inicio';

    document.querySelectorAll('.page').forEach(div => {
        div.classList.remove('enabled');
    });

    const alvo = document.getElementById(id);

    if (alvo)
        alvo.classList.add('enabled');
}

function updateNav() {
    const path = window.location.pathname;
    
    document.querySelectorAll('a.circle-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === path);
    });
}

window.addEventListener('popstate', () => {
    updateContent();
    updateNav();
});

document.querySelectorAll('a.circle-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const url = link.getAttribute('href');
        history.pushState({}, '', url);
        updateContent();
        updateNav();
    });
});

document.querySelectorAll('a[data-alvo]').forEach(link => {
    link.addEventListener('click', updateNav);
});

onInit()