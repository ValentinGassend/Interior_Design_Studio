document.addEventListener('DOMContentLoaded', function () {
    // Récupérer tous les éléments du formulaire
    var formElements = document.querySelectorAll('.Contact-form-left-item input, #projectDetail');

    // Ajouter des écouteurs d'événements à chaque élément
    formElements.forEach(function (element) {
        element.addEventListener('focus', function () {
            // Ajouter la classe 'active' à l'élément (label ou input) correspondant
            element.previousElementSibling.classList.add('active');
            element.classList.add('active');
        });

        element.addEventListener('blur', function () {
            // Retirer la classe 'active' de l'élément (label ou input) correspondant
            element.previousElementSibling.classList.remove('active');
            element.classList.remove('active');
        });
    });
});

function resizeTextarea() {
    // Ajuste la hauteur du champ de texte en fonction du contenu
    const textarea = document.getElementById('message');
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight + 2) + 'px';
}