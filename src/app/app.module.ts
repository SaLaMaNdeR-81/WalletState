import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/Modules/material.module';
import { SubComponents } from './shared/Modules/SubComponent.module';
import { AppComponent } from './app.component';
import { LayoutHeader } from './shared/Component/Layout/Header/Header.Layout';
import { LayoutContent } from './shared/Component/Layout/Content/Content.Layout';
import { LayoutSidebar } from './shared/Component/Layout/Sidebar/Sidebar.Layout';

import { PageHome } from './Page/Home/Home.Page';
import { PageStatus } from './Page/Status/Status.Page';

@NgModule({
  declarations: [
    AppComponent,
    
    LayoutHeader,
    LayoutContent,
    LayoutSidebar,

    PageHome,
    PageStatus,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SubComponents,
    MaterialModule,

  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
