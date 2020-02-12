import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, NgZone} from '@angular/core';
import { DynamicDatabase, DynamicDataSource, DynamicFlatNode } from '../shared/services/tree.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-dynamic-data',
  templateUrl: './tree-dynamic-data.component.html',
  styleUrls: ['./tree-dynamic-data.component.scss']
})
export class TreeDynamicDataComponent implements OnInit {
  constructor(database: DynamicDatabase, private router: Router, private zone: NgZone) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);
    this.dataSource.data = database.initialData();
  }

  ngOnInit(): void {

  }

  treeControl: FlatTreeControl<DynamicFlatNode>;
  dataSource: DynamicDataSource;
  getLevel = (node: DynamicFlatNode) => node.level;
  isExpandable = (node: DynamicFlatNode) => node.expandable;
  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
