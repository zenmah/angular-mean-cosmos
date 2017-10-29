import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AceEditorModule } from 'ng2-ace-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { ScriptsComponent } from './scripts.component';
import { ScriptService } from './script.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ScriptsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AceEditorModule,
    NgbModule.forRoot()
  ],
  providers: [HeroService, ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
