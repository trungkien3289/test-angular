import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {NgIf} from '@angular/common';
import { RouterModule } from '@angular/router';

interface FoodNode {
  icon: string;
  name: string;
  children?: FoodNode[];
  active:boolean;
  routerPath: string;
}

const TREE_DATA: FoodNode[] = [
  {
    icon: 'home',
    name: 'Home',
    routerPath:'home',
    active: false,
    children: [
      {
        icon: 'panorama_fish_eye',
        name: 'Carbon Heatmap',
        active: false,
        routerPath:'home/carbon-heatmap',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'Carbon Insights',
        active: false,
        routerPath:'home/carbon-insights',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'Emmissions Tracker',
        active: false,
        routerPath:'home/emissions-tracker',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'Comparative Analytics',
        active: false,
        routerPath:'home/com[arative-analytics',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'Scenario Analytics',
        active: false,
        routerPath:'home/scenario-analytics',
      },
    ],
  },
  {
    icon:'event_note',
    name: 'Manage',
    active: false,
    routerPath:'manage',
    children: [
      {
        icon: 'panorama_fish_eye',
        name: 'Carbon Wiki',
        active: false,
        routerPath:'manage/carbon-wiki',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'Emission Sources',
        active: false,
        routerPath:'manage/emission-sources',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'Data Sources',
        active: false,
        routerPath:'manage/data-sources',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'Bussiness Activity',
        active: false,
        routerPath:'manage/bussiness-activity',
      },
    ],
  },
  {
    icon:'settings',
    name: 'Setup',
    active: false,
    routerPath:'setup',
    children: [
      {
        icon: 'panorama_fish_eye',
        name: 'Organizational Structure',
        active: false,
        routerPath:'setup/organizational-structure',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'List & Categories',
        active: false,
        routerPath:'setup/list-categories',
      },
      {
        icon: 'panorama_fish_eye',
        name: 'Emission Methodologies',
        active: false,
        routerPath:'setup/rmissions-methodologies',
      }
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  icon: string;
  active: boolean;
  routerPath: string;
}

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  // standalone: true,
  // imports: [MatTreeModule, MatButtonModule, MatIconModule, NgIf, RouterModule],
})
export class SideBarComponent implements AfterViewInit{
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      icon: node.icon,
      active: node.active,
      routerPath: node.routerPath
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  isOpen: boolean = true;
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  @Output() sidebarToogle = new EventEmitter();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  ngAfterViewInit(): void {
    this.treeControl.expandAll();
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  toogleBar(){
    this.isOpen = !this.isOpen;
    this.sidebarToogle.emit(this.isOpen);
  }
}
