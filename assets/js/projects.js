(function ($) {
  // Shuffle js filter and masonry
  const containerEl = document.querySelector('.shuffle-wrapper-projects');
  const noElemFoundEl = document.querySelector('.noElemFoundEl');
  if (containerEl) {
    const Shuffle = window.Shuffle;
    const myShuffle = new Shuffle(
      document.querySelector('.shuffle-wrapper-projects'),
      {
        itemSelector: '.shuffle-item',
        buffer: 1,
      }
    );

    const filterInput = $('input[name="shuffle-filter"]');
    filterInput.keyup((evt) => {
      const searchText = evt.target.value.toLowerCase();

      myShuffle.filter((element) => {
        const titleElement = element.querySelector('h5');
        const titleText = titleElement.textContent.toLowerCase().trim();
        return titleText.indexOf(searchText) !== -1;
      });

      noElemFoundEl.style.display = myShuffle.visibleItems ? 'none' : 'block';
    });
  }
})(window.jQuery);
