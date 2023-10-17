import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { ManagerCarbonWikiComponent } from './manage/manager-carbon-wiki/manager-carbon-wiki.component';
import { ManageComponent } from './manage/manage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeCarbonHeatmapComponent } from './home/home-carbon-heatmap/home-carbon-heatmap.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AppBreadcrumbComponent } from './app-breadcrumb/app-breadcrumb.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CustomSlideToggleComponent } from './base-components/custom-slide-toggle/custom-slide-toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFilesUploadComponent } from './manage/bussiness-activity/custom-files-upload/custom-files-upload.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { EntryStatusComponent } from './manage/bussiness-activity/custom-files-upload/entry-status/entry-status.component';
import { CarbonInsightsComponent } from './home/carbon-insights/carbon-insights.component';
import { BussinessActivityComponent } from './manage/bussiness-activity/bussiness-activity.component';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    ManagerCarbonWikiComponent,
    ManageComponent,
    NotFoundComponent,
    HomeComponent,
    HomeCarbonHeatmapComponent,
    SideBarComponent,
    AppBreadcrumbComponent,
    CustomSlideToggleComponent,
    CustomFilesUploadComponent,
    EntryStatusComponent,
    CarbonInsightsComponent,
    BussinessActivityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTreeModule,
    MatIconModule,
    CommonModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTableModule,
    MatInputModule,
    MatTooltipModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
