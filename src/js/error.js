import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';

export default function errorNotify(title, text) {
    PNotify.error({
        title: title,
        text: text,
        delay: 2000,
    }); 
    
  }

  






 