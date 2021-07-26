import '@angular/common/locales/global/pt';

import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamelCasePipe } from './camel-case.pipe';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FitroArrayImpuroPipe } from './fitro-array-impuro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FitroArrayImpuroPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ 
    { 
      provide: LOCALE_ID, 
      useValue: 'pt' 
    } 

    // SettingService,
    // {
    //   provide: LOCALE_ID,
    //   deps:[SettingService],
    //   useFactory: (SettingService) => SettingService.getLocale
    // }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
