// Menú móvil: alterna la navegación principal y los paneles "mega" por toque.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // En pantallas táctiles, el primer toque sobre un ítem con submenú
  // despliega el panel en lugar de navegar de inmediato.
  var megaItems = document.querySelectorAll('.has-mega > a.top-link');
  megaItems.forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 720px)').matches) {
        var parent = link.parentElement;
        var alreadyOpen = parent.classList.contains('open');
        document.querySelectorAll('.has-mega.open').forEach(function (el) {
          el.classList.remove('open');
        });
        if (!alreadyOpen) {
          e.preventDefault();
          parent.classList.add('open');
        }
      }
    });
  });

  // Cierra el menú móvil al elegir un enlace final.
  document.querySelectorAll('.primary-nav a').forEach(function (link) {
    if (!link.classList.contains('top-link')) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    }
  });

  // Quiz corto al final de cada Lección: cada pregunta trae su respuesta
  // correcta en data-answer y cada opción su valor en data-option.
  document.querySelectorAll('.quiz-question').forEach(function (question) {
    var correct = question.getAttribute('data-answer');
    var feedback = question.querySelector('.quiz-feedback');
    var correctMsg = question.getAttribute('data-correct-msg') || 'Correcto.';
    var wrongMsg = question.getAttribute('data-wrong-msg') || 'No es correcto. Vuelve a intentarlo.';

    question.querySelectorAll('.quiz-option').forEach(function (option) {
      option.addEventListener('click', function () {
        question.querySelectorAll('.quiz-option').forEach(function (opt) {
          opt.classList.remove('is-correct', 'is-wrong');
        });
        if (option.getAttribute('data-option') === correct) {
          option.classList.add('is-correct');
          if (feedback) feedback.textContent = correctMsg;
        } else {
          option.classList.add('is-wrong');
          var correctOption = question.querySelector('.quiz-option[data-option="' + correct + '"]');
          if (correctOption) correctOption.classList.add('is-correct');
          if (feedback) feedback.textContent = wrongMsg;
        }
        if (feedback) feedback.classList.add('is-visible');
      });
    });
  });
});
