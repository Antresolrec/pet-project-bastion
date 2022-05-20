import { Fancybox } from '@fancyapps/ui';

Fancybox.bind('[data-fancybox]', {
  Toolbar: false,
  Thumbs: false,
  click: false,
  dragToClose: false,
  closeButton: 'top',
  Image: {
    zoom: false,
    wheel: false,
    click: false,
  },
});
