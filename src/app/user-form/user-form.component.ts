import { Component, OnInit, EventEmitter,Output} from '@angular/core'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  searchName:string;
  repoSearch:string;
  @Output() searchOutput = new EventEmitter<any>();

  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }
  searchRepo(){
    this.searchOutput.emit(this.repoSearch);
    this.repoSearch = "";
  }
  constructor() { }
  ngOnInit() {
  }
  
}
