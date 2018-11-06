import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-claim',
  templateUrl: './form-create-claim.component.html',
  styleUrls: ['./form-create-claim.component.css']
})
export class FormCreateClaimComponent implements OnInit {

  createClaim: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.createClaim = this.formBuilder.group(
      {
        motivo: ['', Validators.required],
        telefono: ['', Validators.required],
        latLng: [''],
        detalle: ['']
      }
    );

  }

  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.createClaim.invalid) {
        return;
    }

    alert('SUCCESS!! :-)');
}

}
