const tabs = document.querySelectorAll('.js-tabs');

tabs.forEach((tab) => {
  const tabsTriggers = tab.querySelectorAll('.js-tabs__trigger');
  const tabsBlocks = tab.querySelectorAll('.js-tabs__block');
  for (let index = 0; index < tabsTriggers.length; index++) {
    const tabsTrigger = tabsTriggers[index];
    tabsTrigger.addEventListener('click', (e) => {
      for (let i = 0; i < tabsTriggers.length; i++) {
        const tabsTitle = tabsTriggers[i];
        tabsTitle.classList.remove('open');
        tabsBlocks[i].classList.remove('open');
      }
      tabsTrigger.classList.add('open');
      tabsBlocks[index].classList.add('open');
      e.preventDefault();
    });
  }
});
