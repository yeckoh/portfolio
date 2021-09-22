import { Component, OnInit } from '@angular/core';
import { ProgramLanguage } from '../class_n_model/program-language';
import { LocaldataService } from '../services/localdata.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(public ldata: LocaldataService) { }

  showCommunityCourses = false;
  showUniversityCourses = false;

  ngOnInit(): void {
  }




}
