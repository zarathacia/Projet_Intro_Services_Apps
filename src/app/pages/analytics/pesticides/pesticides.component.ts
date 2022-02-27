import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/_metronic/layout/core/layout.service';

type Tabs = 'Herbicides' | 'Insecticides' | 'Fongicides';


@Component({
  selector: 'app-pesticides',
  templateUrl: './pesticides.component.html',
  styleUrls: ['./pesticides.component.scss']
})
export class PesticidesComponent implements OnInit {

  activeTab: Tabs = 'Herbicides';
  model: any;
  @ViewChild('form', { static: true }) form: NgForm;
  configLoading: boolean = false;
  resetLoading: boolean = false;
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.model = this.layout.getConfig();
  }

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  resetPreview(): void {
    this.resetLoading = true;
    this.layout.refreshConfigToDefault();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.setConfig(this.model);
    location.reload();
  }

}

