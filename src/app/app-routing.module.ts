import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { ManagerCarbonWikiComponent } from './manager-carbon-wiki/manager-carbon-wiki.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeCarbonHeatmapComponent } from './home-carbon-heatmap/home-carbon-heatmap.component';
import { CarbonInsightsComponent } from './carbon-insights/carbon-insights.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'home/carbon-heatmap',
    component: HomeCarbonHeatmapComponent,
    data: { breadcrumb: 'home/carbon-heatmap' },
  },
  {
    path: 'home/carbon-insights',
    component: CarbonInsightsComponent,
    data: { breadcrumb: 'home/carbon-insights' },
  },
  {
    path: 'manage/carbon-wiki',
    component: ManagerCarbonWikiComponent,
    data: { breadcrumb: 'home/carbon-wiki' },
  },
  {
    path: 'manage',
    component: ManageComponent,
    data: { breadcrumb: 'Manage' },
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
