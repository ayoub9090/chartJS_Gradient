
//changing font of labels 
Chart.defaults.global.defaultFont = "cursive";
Chart.defaults.global.defaultFontFamily = "cursive";


//start init the charts
if ($('#example').length > 0) {
  var ctx = document.getElementById("example").getContext("2d");
  var gradient1 = ctx.createLinearGradient(0, 0, 0, 250);
  gradient1.addColorStop(0.0, '#e06b9d');
  gradient1.addColorStop(1.0, '#ff006e');

  var gradient2 = ctx.createLinearGradient(0, 0, 250, 0);
  gradient2.addColorStop(0.0, '#9167ce');
  gradient2.addColorStop(1.0, '#dfc8ff');


  var gradient3 = ctx.createLinearGradient(0, 0, 250, 0);
  gradient3.addColorStop(0.0, '#ffce94');
  gradient3.addColorStop(1.0, '#ff8c00');


  var gradient4 = ctx.createLinearGradient(0, 0, 256, 0);
  gradient4.addColorStop(0.0, '#8ee0da');
  gradient4.addColorStop(1.0, '#057d74');


  var gradient5 = ctx.createLinearGradient(0, 0, 256, 0);
  gradient5.addColorStop(0.0, '#8dffa0');
  gradient5.addColorStop(1.0, '#364177');


  new Chart(document.getElementById("example"), {
    type: 'pie',
    data: {
      labels: ["set1", "set2", "set3", "set4","set5"],
      datasets: [{
        label: "labeled",
        backgroundColor: [gradient1, gradient2, gradient3, gradient4, gradient5],
        hoverBackgroundColor: [gradient1, gradient2, gradient3, gradient4, gradient5],
        borderColor: 'transparent',
        borderWidt: 0,
        data: [350, 250, 150, 100, 150]
      }]
    },
    options: {
      title: {
        display: false
      },
      legend: {
        position: 'right',
        display: false,
        labels: {
          boxWidth: 15,
          padding: 20
        }
      },
      plugins: {
        datalabels: {
          formatter: function formatter(value, ctx) {
            var datasets = ctx.chart.data.datasets;

            if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
              var sum = datasets[0].data.reduce(function(a, b) {
                return a + b;
              }, 0);

              var _percentage = Math.round(value / sum * 100) + '%';

              return _percentage;
            } else {
              return percentage;
            }
          },
          color: '#fff',
          font: {
            weight: 'normal',
            size: 22
          },
          align: 'middle'
        }
      }
    }
  });
}
