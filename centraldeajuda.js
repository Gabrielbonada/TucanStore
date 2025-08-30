document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const faqItems = document.querySelectorAll('.accordion-item');
  const categoryCards = document.querySelectorAll('.category-card');

  let selectedCategory = null;

  // Função para filtrar FAQs
  function filterFaqs() {
    const query = searchInput.value.toLowerCase();

    faqItems.forEach(item => {
      const question = item.querySelector('.accordion-button').textContent.toLowerCase();
      const answer = item.querySelector('.accordion-body').textContent.toLowerCase();
      const category = item.getAttribute('data-category');

      const matchesSearch = question.includes(query) || answer.includes(query);
      const matchesCategory = selectedCategory ? category === selectedCategory : true;

      if (matchesSearch && matchesCategory) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Filtrar ao digitar na barra de pesquisa
  searchInput.addEventListener('input', filterFaqs);

  // Filtrar ao clicar em uma categoria
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      // Se clicar na mesma categoria, desmarca
      if (selectedCategory === card.dataset.category) {
        selectedCategory = null;
        card.classList.remove('border-primary', 'border-3');
      } else {
        selectedCategory = card.dataset.category;
        categoryCards.forEach(c => c.classList.remove('border-primary', 'border-3'));
        card.classList.add('border-primary', 'border-3');
      }
      filterFaqs();
    });
  });
});
