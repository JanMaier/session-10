Vue.component('multi-bar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Mediterranean Migrant Crisis","Protests of Islam critical PEGIDA movement in Dresden","Financial Crisis in Greece","Ukraine conflict between Russia and Western Countries"],
      datasets: [
        {
          label: 'Very high trust',
          backgroundColor: '#b30000',
          data: [0.03,0.03,0.04,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
         {
          label: 'High trust',
          backgroundColor: '#e34a33',
          data: [0.45,0.37,0.31,0.3],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
          },
          {
          label: 'No answer',
          backgroundColor: '#fc8d59',
          data: [0.02,0.04,0.02,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
            }
          },
          {
          label: 'Low trust',
          backgroundColor: '#fdcc8a',
          data: [0.41,0.41,0.46,0.52],
          datalabels: {
            align: 'end',
            anchor: 'end'
            }
          },
           {
          label: 'Very Low trust',
          backgroundColor: '#f87979',
          data: [0.09,0.15,0.17,0.14],
          datalabels: {
            align: 'end',
            anchor: 'end'
            }
          }
      ]
    };

      var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: true
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#e34a33',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
          }
			},

      scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 0.8,
            barPercentage: 3/4
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
