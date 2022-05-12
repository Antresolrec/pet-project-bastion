import { Fancybox } from '@fancyapps/ui';

Fancybox.bind('[data-fancybox]', {
  Toolbar: false,
  click: false,
  closeButton: 'top',
  dragToClose: false,
  Image: {
    zoom: false,
    wheel: false,
    click: false,
  },
});
