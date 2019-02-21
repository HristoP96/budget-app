import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ignite UI for Angular
import {
  IgxForOfModule,
  IgxInputGroupModule,
  IgxListModule,
  IgxRippleModule,
  IgxToggleModule,
  IgxIconModule
} from 'igniteui-angular';

// App
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../../environments/environment';
import { MockBudgetService } from './mocks/mock-budget.service';
import { httpInterceptorProviders } from '../auth/http-interceptors';

@NgModule({
  imports: [
    CommonModule,

    // Ignite UI for Angular modules
    IgxForOfModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxRippleModule,
    IgxToggleModule,
    environment.production
    ? []
    : HttpClientInMemoryWebApiModule.forRoot(MockBudgetService, {
        delay: 250,
        // https://github.com/angular/in-memory-web-api/blob/master/src/in-mem/interfaces.ts#L85
        put204: false
      })
  ],
  declarations: [DropdownComponent, LoaderComponent],
  exports: [DropdownComponent, LoaderComponent],
  providers: [httpInterceptorProviders]
})
export class SharedModule {}
