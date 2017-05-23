import * as heatmap from 'heatmap.js';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import {Directive, Input, ElementRef, OnInit} from '@angular/core';

import {Survey} from '../reducers/koruza';
import {Coordinate} from '../utils';

@Directive({
  selector: '[koruza-survey-heatmap]'
})
export class SurveyHeatmapComponent implements OnInit {
  // Unit survey.
  @Input() public survey: Observable<Survey>;
  // Survey positioning.
  @Input() public width: number;
  @Input() public height: number;
  @Input() public mapMotorToBrowser: (coordinate: Coordinate) => Coordinate;

  private heatmap: any;

  constructor(element: ElementRef) {
    // Initialize heatmap.
    this.heatmap = heatmap.create({container: element.nativeElement});
  }

  public ngOnInit(): void {
    this.survey.subscribe((survey => {
      if (_.isEmpty(survey.data)) return;
      if (!this.width || !this.height) return;

      // Process survey data.
      const data = {
        max: 0,
        data: [],
      };

      const origin = this.mapMotorToBrowser({x: 0, y: 0});
      const surveyBin = this.mapMotorToBrowser(survey.bins);
      const radius = 6 * Math.max(
        surveyBin.x - origin.x,
        surveyBin.y - origin.y,
      );

      for (let row = 0; row < survey.data.length; row++) {
        for (let column = 0; column < survey.data[row].length; column++) {
          let value = survey.data[row][column];
          // Convert value to dBm and make it positive.
          value = Math.max(-40, 10 * Math.log10(value / 10000)) + 40;
          if (value <= 2) continue;

          const position = this.mapMotorToBrowser({
            x: ((column - (survey.bins.x / 2)) * survey.coverage.x) / (survey.bins.x / 2),
            y: ((row - (survey.bins.y / 2)) * survey.coverage.y) / (survey.bins.y / 2),
          });

          data.max = Math.max(data.max, value);
          data.data.push({
            x: Math.ceil(position.x),
            y: Math.ceil(position.y),
            value: value,
            radius: radius,
          });
        }
      }

      this.heatmap.configure({width: this.width, height: this.height});
      this.heatmap.setData(data);
    }));
  }
}
