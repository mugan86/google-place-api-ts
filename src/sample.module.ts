import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { APIKeyConfig } from './api-key-config.interface';

export const MODULES = [
    CommonModule
];

@NgModule({
  imports: [ MODULES ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [ 
            MODULES , 
            SampleComponent,
            SampleDirective,
            SamplePipe
            ]
})
export class SampleModule { 
    static forRoot(API_KEY?: APIKeyConfig): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [{provide: SampleService, useValue: API_KEY}]
    };
  }
}