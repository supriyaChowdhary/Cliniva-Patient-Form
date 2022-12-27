import { Component } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { months } from "moment";

@Component({
  selector: "app-add-patient",
  templateUrl: "./add-patient.component.html",
  styleUrls: ["./add-patient.component.scss"],
})
export class AddPatientComponent {
  patientForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {
    this.patientForm = this.fb.group({
      first: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
      uhid: [""],
      opdNo: [""],
      date: [""],
      time: [""],
      middle: [""],
      city: [""],
      district: [""],
      Nantionality:[""],
      state:[""],
      pincode:[""],
      country:[""],
      nameIdentity:[""],
      identity:[""],
      referredName:[""],
      referraladdress:[""],
      referralmobile:[""],
      relation:[""],
      relationname:[""],
      relationmobile:[""],
      relationaddress:[""],
      year:[""],
      month:[""],
      days:[""],
      height:[""],
      weight:[""],
      bloddpresure:[""],
      heartbeat:[""],
      cardtype:[""],
      disease:[""],
      occupation:[""],
      consultant:[""],
      bloodGroup:[""],
      bodyChekup:[""],
      fee:[""],
      gender: ["", [Validators.required]],
      mobile: [""],
      dob: ["", [Validators.required]],
      age: [""],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      maritalStatus: [""],
      address: [""],
      bGroup: [""],
      bPresure: [""],
      sugger: [""],
      injury: [""],
      uploadFile: [""],
    });
  }
  onSubmit() {
    console.log("Form Value", this.patientForm.value);
  }
}
