import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  ngOnInit(): void {
  }

  tasks: Array<string> = ['Task 100', 'Task 500', 'PBI-1', 'Task 300', 'Task 900',  'Task 600', 'Task 200', 'Task 800', 'PBI-3'];
  developers: Array<string> = ['Task 400'];
  testers: Array<string> = ['Task 700', 'PBI-2'];
}


