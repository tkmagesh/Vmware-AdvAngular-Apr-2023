import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as moment from 'moment';

const d = new Date('25-Apr-2023')
console.log(moment(d).fromNow())

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
