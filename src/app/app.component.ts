import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  candidate: any = [
    {
      
      name: "Tanmay ",
      post: "Jr. Developer",
      email: "tanmay@01",
      phone: 1234567890,
      
    },
    {
      
      name: "Mayank",
      post: "Manager",
      email: "mayank@01",
      phone: 1234567890,
      
    },
    {
      
      name: "Somya",
      post: "Assiatant Manager",
      email: "somya@01",
      phone: 1234567890,
      
    },
    {
      name: "Ritik ",
      post: "Product Manager",
      email: "ritik@01",
      phone: 1234567890,
      
    },
   
    ];
    candidateName = "";
  candidatePost = "";
  candidateId = "";
  candidatePhone = "";
  candidatePosition = "";
  selectedIndex = "";

  delete(index: any) {
    this.candidate.splice(index, 1)
  }
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}


  openModal(template: TemplateRef<any>,index:any) {
    console.log('index',index)
    

    if(index != null){
      
      this.candidateName = this.candidate[index].name;
      this.candidatePost = this.candidate[index].post;
      this.candidateId = this.candidate[index].email;
      this.candidatePhone = this.candidate[index].phone;
      this.selectedIndex = index;
    }

    
    this.modalRef = this.modalService.show(template);

  }
  update(){

    this.candidate[this.selectedIndex].name = this.candidateName;
    this.candidate[this.selectedIndex].post = this.candidatePost;
    this.candidate[this.selectedIndex].email = this.candidateId;
    this.candidate[this.selectedIndex].phone = this.candidatePhone;
    
    this.candidateName = "";
    this.candidatePost = "";
    this.candidateId = "";
    this.candidatePhone = "";
    this.modalRef?.hide();
  }
  submit() {

    let user = {
      name:this.candidateName,
      post:this.candidatePost,
      email:this.candidateId,
      phone:this.candidatePhone,
      
    }

    this.candidate.push(user);
    console.log('this',this.candidate)
    this.candidateName = "";
    this.candidatePost = "";
    this.candidateId = "";
    this.candidatePhone = "";
    this.modalRef?.hide();
  }


  close(){
    this.candidateName = "";
    this.candidatePost = "";
    this.candidateId = "";
    this.candidatePhone = "";
    this.modalRef?.hide();
  }
  clear(){
    this.candidateName = "";
    this.candidatePost = "";
    this.candidateId = "";
    this.candidatePhone = "";
  }
  
}
