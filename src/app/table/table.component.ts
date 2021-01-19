import { ServiceService } from './../service.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  getData: any;
  getFullData: any;
  dataid: any;
  data: any;
  getID: any;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.getTable();
  }
  getTable() {
    this.serviceService.getTableData().subscribe(resp => {
      this.getData = resp;
      this.getFullData = this.getData.hits;
      console.log(this.getFullData);
    });
  }
  openModal(template: TemplateRef<any>, dataId: number) {
    debugger;
    this.dataid = dataId;
    this.modalRef = this.modalService.show(template, this.dataid);
    this.getID = this.getFullData.filter(ids => ids.objectID === dataId)
    console.log(this.getID);
    // this.getFullData.filter((value,index)=>{
    //   return value.dataId == this.getFullData.ObjectId;
    //   console.log()
    // });

  }
}
