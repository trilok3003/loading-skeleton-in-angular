import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactComponent } from './react/react.component';
import { SkeletonDirective } from './react/skeleton.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ReactComponent,
    SkeletonDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
