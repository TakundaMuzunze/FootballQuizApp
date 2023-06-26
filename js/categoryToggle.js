function toggleTab(button) {
    const toggleButtons = document.querySelectorAll('.tablinks');
    toggleButtons.forEach((btn) => btn.classList.remove('active-tab'));
    button.classList.add('active-tab');
    categorySwitch();
  }
  
  function categorySwitch() {
    const activeTab = document.querySelector('.tablinks.active-tab').innerText;
    const cards = document.querySelectorAll('.cat-card');
  
    cards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
  
      if (cardCategory === activeTab || activeTab === 'General Knowledge') {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
}
  
toggleTab(document.querySelector('.tablinks.active-tab'));
  