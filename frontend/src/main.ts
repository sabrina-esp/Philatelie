import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NNaF1cWWhPYVF/WmFZfVtgcV9DaVZSTWYuP1ZhSXxWdkBgWX9YcHdXTmleVkx9XUs='
);
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
