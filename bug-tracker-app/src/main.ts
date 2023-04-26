import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as moment from 'moment';

const d = new Date('10-jan-2006')
console.log(moment(d).fromNow())

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
