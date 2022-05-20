import { Fancybox } from '@fancyapps/ui';

Fancybox.bind('[data-fancybox]', {
  Toolbar: false,
  Thumbs: false,
  // click: false,
  dragToClose: false,
  autoFocus: false,
  closeButton: 'top',
  // groupAttr: false,
  Image: {
    zoom: false,
    wheel: false,
    click: false,
  },
});

Fancybox.bind('.popup-custom-trigger', {
  mainClass: 'js-custom-popup',
  Toolbar: false,
  closeButton: 'top',
  dragToClose: false,
  autoFocus: false,
  groupAttr: false,
});

window.Fancybox = Fancybox;
