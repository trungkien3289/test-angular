import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { ManagerCarbonWikiComponent } from './manage/manager-carbon-wiki/manager-carbon-wiki.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeCarbonHeatmapComponent } from './home/home-carbon-heatmap/home-carbon-heatmap.component';
import { CarbonInsightsComponent } from './home/carbon-insights/carbon-insights.component';
import { BussinessActivityComponent } from './manage/bussiness-activity/bussiness-activity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
    children:[
      {
        path: 'carbon-heatmap',
        component: HomeCarbonHeatmapComponent,
        data: { breadcrumb: 'carbon-heatmap' },
      },
      {
        path: 'carbon-insights',
        component: CarbonInsightsComponent,
        data: { breadcrumb: 'carbon-insights' },
      },
      {
        path: 'emissions-tracker',
        component: CarbonInsightsComponent,
        data: { breadcrumb: 'Emissions Tracker' },
      },
      {
        path: 'comparative-analytics',
        component: CarbonInsightsComponent,
        data: { breadcrumb: 'Comaparative Analytics' },
      },
      {
        path: 'scenario-analytics',
        component: CarbonInsightsComponent,
        data: { breadcrumb: 'Scenario Analytics' },
      },
    ]
  },
  {
    path: 'manage',
    component: ManageComponent,
    data: { breadcrumb: 'Manage' },
    children:[
      {
        path: 'carbon-wiki',
        component: ManagerCarbonWikiComponent,
        data: { breadcrumb: 'carbon-wiki' },
      },
      {
        path: 'emission-sources',
        component: ManagerCarbonWikiComponent,
        data: { breadcrumb: 'Emission Sources' },
      },
      {
        path: 'data-sources',
        component: ManagerCarbonWikiComponent,
        data: { breadcrumb: 'Data Sources' },
      },
      {
        path: 'bussiness-activity',
        component: BussinessActivityComponent,
        data: { breadcrumb: 'Bussiness Activity' },
      },
    ]
  },
  {
    path: 'setup',
    component: ManageComponent,
    data: { breadcrumb: 'Setup' },
    children:[
      {
        path: 'organizational-structure',
        component: ManagerCarbonWikiComponent,
        data: { breadcrumb: 'Organizational Structure' },
      },
      {
        path: 'list-and-categories',
        component: ManagerCarbonWikiComponent,
        data: { breadcrumb: 'List & Categories' },
      },
      {
        path: 'data-sources',
        component: ManagerCarbonWikiComponent,
        data: { breadcrumb: 'Data Sources' },
      },
      {
        path: 'emission-methodologies',
        component: ManagerCarbonWikiComponent,
        data: { breadcrumb: 'Emission Methodologies' },
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { breadcrumb: 'Page Not Found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
