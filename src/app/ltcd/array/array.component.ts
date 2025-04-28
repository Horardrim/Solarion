import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-array',
  imports: [
    CommonModule
  ],
  templateUrl: './array.component.html',
  styleUrl: './array.component.scss'
})
export class ArrayComponent implements AfterViewInit {
    @ViewChild('chartContainer') chartContainer!: ElementRef;

    chart: Highcharts.Chart | undefined;

    ngAfterViewInit(): void {
        this.initChart();
        this.startUpdatingChart();
    }

    initChart(): void {
        if (!this.chartContainer.nativeElement) {
            console.error('Chart container is not available');
            return;
        }
        const chartOptions: Highcharts.Options = {
        chart: {
          type: 'column',
          renderTo: this.chartContainer.nativeElement
        },
        title: {
          text: 'Highcharts 柱状图示例'
        },
        xAxis: {
          categories: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          title: {
            text: '销量'
          }
        },
        series: [
          {
            name: '销量',
            type: 'column', // 明确指定 series 的类型
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
  
      // 创建图表
      this.chart = Highcharts.chart(this.chartContainer.nativeElement, chartOptions);
    }

    startUpdatingChart(): void {
      setInterval(() => {
        const series = this.chart!.series[0];
        if (series) {
          const newData = series.data.map(() => Math.floor(Math.random() * 50));
          series.setData(newData);
        }
      }, 1000);    
    }
}
