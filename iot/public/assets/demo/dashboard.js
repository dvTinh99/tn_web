demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDashboardPageCharts: function(date_time, lux, turbidity, temper, airpump, led, motor) {
    
    var maiChe = document.getElementById("maiChe");
    if(motor){
      maiChe.style.color="green";
    }else{
      maiChe.style.color="black";
    };

    var den = document.getElementById("den");
    if(led){
        den.style.color="green";
    }else{
        den.style.color="black"
    };

    chartColor = "#FFFFFF"; // nodes and line charts

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        // enabled:false,
        // bodySpacing: 4,
        // mode: "nearest",
        // intersect: 0,
        // position: "nearest",
        // xPadding: 10,
        // yPadding: 10,
        // caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: 0,
          gridLines: {
            beginAtZero: false,
            steps: 10,
            // stepValue: 5,
            max: 100,
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

        // chart nhiệt độ nước
        nhietDoNuocChart = document.getElementById('nhietDoNuocChart').getContext("2d");
        gradientStroke = nhietDoNuocChart.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill2 = nhietDoNuocChart.createLinearGradient(0, 170, 0, 50);
        gradientFill2.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill2.addColorStop(1, hexToRGB('#18ce0f', 0.4));

        chartNhietDoNuoc = new Chart(nhietDoNuocChart, {
          type: 'line',
          responsive: true,
          data: {
            labels: date_time,
            datasets: [{
              label: "°C",
              borderColor: "#18ce0f",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#18ce0f",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              backgroundColor: gradientFill2,
              borderWidth: 2,
              data: temper
            }]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                ticks: {
                  fontStyle: "bold",
                  beginAtZero: true,
                  steps: 200,
                  stepValue: 10,
                  max: 40,
                  // maxTicksLimit: 5,
                  padding: 10
                },
              }],
              xAxes: [{
                gridLines: {
                  zeroLineColor: "transparent",
                  display: false,
    
                },
                ticks: {
                  display: false,
                  padding: 10,
                  fontColor: "#000",
                  fontStyle: "bold"
                }
              }]
            },
          }
        });

        //chart cường độ ánh sáng
        charAnhSang = document.getElementById('cuongDoAnhSangChart').getContext("2d");

        gradientStroke = charAnhSang.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill1 = charAnhSang.createLinearGradient(0, 170, 0, 50);
        gradientFill1.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill1.addColorStop(1, hexToRGB('#18ce0f', 0.4));

        // cường độ ánh sáng chart
        chartCuongDoAnhSang = new Chart(charAnhSang, {
          type: 'line',
          responsive: true,
          data: {
            labels: date_time,
            datasets: [{
              label: "lux",
              borderColor: "#18ce0f",
              pointBorderColor: "#FFF",
              pointBackgroundColor: "#18ce0f",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              backgroundColor: gradientFill1,
              borderWidth: 2,
              data: lux
            }]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                ticks: {
                  fontStyle: "bold",
                  beginAtZero: true,
                  // steps: 5000,
                  stepValue: 100,
                  max: 16000,
                  // min:5000,
                  // maxTicksLimit: 5,
                  padding: 10
                },
              }],
              xAxes: [{
                gridLines: {
                  zeroLineColor: "transparent",
                  display: false,
    
                },
                ticks: {
                  display: false,
                  padding: 10,
                  fontColor: "#000",
                  fontStyle: "bold"
                }
              }]
            },
          }
        });

        // độ đục bar chart
        var doDucChart = document.getElementById("doDucChart").getContext("2d");
        gradientFill = doDucChart.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB('#18ce0f', 0.6));

        var a = {
          type: "bar",
          data: {
            labels: date_time,
            datasets: [{
              label: "V",
              backgroundColor: gradientFill,
              borderColor: "#FFF",
              pointBorderColor: "#18ce0f",
              pointBackgroundColor: "#FFF",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              fill: true,
              borderWidth: 1,
              data: turbidity
            }]
          },
          options: {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            tooltips: {
              bodySpacing: 4,
              mode: "nearest",
              intersect: 0,
              position: "nearest",
              xPadding: 10,
              yPadding: 10,
              caretPadding: 10
            },
            responsive: 1,
            scales: {
              yAxes: [{
                ticks: {
                  fontStyle: "bold",
                  beginAtZero: true,
                  // steps: 10,
                  // stepValue: 2,
                  max: 5,
                  // maxTicksLimit: 5,
                  padding: 10
                },
                gridLines: 0,
                gridLines: {
                  zeroLineColor: "transparent",
                  drawBorder: false
                }
              }],
              xAxes: [{
                display: 0,
                gridLines: 0,
                ticks: {
                  display: false
                },
                gridLines: {
                  zeroLineColor: "transparent",
                  drawTicks: false,
                  display: false,
                  drawBorder: false
                }
              }]
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 15,
                bottom: 15
              }
            }
          }
        };

        var viewsChart = new Chart(doDucChart, a);

        var percen = parseInt((airpump/255) * 100);

        var dataPie = [percen,100-percen];
        //setup block
        const data = {
          labels: ['Green', 'white'],
          datasets: [{
            label: '# of Votes',
            data: dataPie,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'transparent'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'transparent'
            ],
            borderWidth: 1,
            cutout:"90%",
            borderradius: 10,
        }]
        }

        //counter plugin block

        const counter = {
          id: 'counter',
          beforeDraw( chart,args, options ){
            const {ctx, chartArea : {top,right,bottom,left,width,height}} = chart ;
            ctx.save();
            ctx.fillStyle = options.fontColor;
            // ctx.fillRect(210,110,10,10);
            ctx.font = options.fontSize +' '+options.fontFamily;
            ctx.textAlign = 'center';
            ctx.fillText(dataPie[0] +"%", 100,55)

          }
        }

        //config block
       const config = {
        type: 'doughnut',
        data,
        options: {
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false
          },
          plugins:{
            
            counter:{
              fontColor: 'green',
              fontSize: '10px',
              fontFamily: 'sans-serif'
            }
          }
        },
        plugins:[counter]
       }

        //render init block
      var sucKhiChart = new Chart(
        document.getElementById("sucKhiChart"),
        config,
      );

  },

  setPredictChart: function(date_time, predict) {
    
    

    chartColor = "#FFFFFF"; // nodes and line charts

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        // enabled:false,
        // bodySpacing: 4,
        // mode: "nearest",
        // intersect: 0,
        // position: "nearest",
        // xPadding: 10,
        // yPadding: 10,
        // caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: 0,
          gridLines: {
            beginAtZero: false,
            steps: 10,
            // stepValue: 5,
            max: 100,
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    //chart predict
    predictChart = document.getElementById('predictChart').getContext("2d");

    
    // gradientFill1 = predictChart.createLinearGradient(0, 0, 0, 0);
    // gradientFill1.addColorStop(0, "rgba(128, 182, 244, 0)");
    // gradientFill1.addColorStop(1, hexToRGB('#18ce0f', 0.4));

    // predict chart
    predictChart = new Chart(predictChart, {
      type: 'line',
      responsive: true,
      data: {
        labels: date_time,
        datasets: [{
          label: "g/l",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          // pointBorderWidth: 2,
          // pointHoverRadius: 4,
          // pointHoverBorderWidth: 1,
          // pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill1,
          borderWidth: 2,
          data: predict
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display:true,
            ticks: {
              fontStyle: "bold",
              beginAtZero: true,
              // steps: 5000,
              // stepValue: 100,
              // max: 5,
              // min:5000,
              // maxTicksLimit: 5,
              padding: 10
            },
          }],
          xAxes: [{
            display: true,
            gridLines: {
              zeroLineColor: "transparent",
              display: false,

            },
            ticks: {
              display: false,
              padding: 10,
              fontColor: "#000",
              fontStyle: "bold"
            }
          }]
        },
      }
    });

    loader  = document.getElementById('loader');
    loader.style.zIndex = 0; 
    loader.style.visibility = "hidden"; 
  },
};