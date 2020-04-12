import { Component, OnInit, EventEmitter,Output} from '@angular/core'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  username:string;
  @Output() searchOutput = new EventEmitter<any>();

  search(){
    this.searchOutput.emit(this.username);
    this.username = "";
  }

  constructor() { }
  ngOnInit() {
  }
  
}
