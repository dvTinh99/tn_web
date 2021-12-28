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



  initDocChart: function() {
    
        
    chartColor = "#FFFFFF";

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
      responsive: false,
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

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initDashboardPageCharts: function(date_time, lux, turbidity, temper, airpump, led, motor) {
    console.log("da vao init");
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
        // chart lớn

        // var bigDashboardChart = document.getElementById('bigDashboardChart').getContext("2d");

        // var gradientStroke = bigDashboardChart.createLinearGradient(500, 0, 100, 0);
        // gradientStroke.addColorStop(0, '#80b6f4');
        // gradientStroke.addColorStop(1, chartColor);

        // var gradientFill = bigDashboardChart.createLinearGradient(0, 200, 0, 50);
        // gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        // gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");   

        // var charBig = new Chart(bigDashboardChart, {
        //   type: 'line',
        //   data: {
        //     labels: date_time,
        //     datasets: [{
        //       label: "Data",
        //       borderColor: chartColor,
        //       pointBorderColor: chartColor,
        //       pointBackgroundColor: "#1e3d60", // trong node
        //       pointHoverBackgroundColor: "#1e3d60", // trong nodes
        //       pointHoverBorderColor: chartColor,
        //       pointBorderWidth: 1,
        //       pointHoverRadius: 7,
        //       pointHoverBorderWidth: 2,
        //       pointRadius: 5,
        //       fill: true,
        //       backgroundColor: gradientFill,
        //       borderWidth: 2,
        //       data: lux
        //     }
        //   ]
        //   },
        //   options: {
            
        //     layout: {
        //       padding: {
        //         left: 20,
        //         right: 20,
        //         top: 0,
        //         bottom: 0
        //       }
        //     },
        //     maintainAspectRatio: false,
        //     tooltips: {
        //       backgroundColor: '#fff',
        //       titleFontColor: '#333',
        //       bodyFontColor: '#666',
        //       bodySpacing: 4,
        //       xPadding: 12,
        //       mode: "nearest",
        //       intersect: 0,
        //       position: "nearest"
        //     },
        //     legend: {
        //       position: "bottom",
        //       fillStyle: "#FFF",
        //       display: false
        //     },
        //     scales: {
        //       yAxes: [{
        //         ticks: {
        //           fontColor: chartColor, // lable y
        //           fontStyle: "bold",
        //           beginAtZero: false,
        //           steps: 10,
        //           // stepValue: 5,
        //           max: 2000,
        //           // maxTicksLimit: 5,
        //           padding: 10
        //         },
        //         gridLines: {
        //           drawTicks: true,
        //           drawBorder: false,
        //           display: true,
        //           color: chartColor, // các trục y gióng ngang
        //           zeroLineColor: "transparent"
        //         }
    
        //       }],
        //       xAxes: [{
        //         gridLines: {
        //           zeroLineColor: "transparent",
        //           display: false,
    
        //         },
        //         ticks: {
        //           padding: 10,
        //           fontColor: chartColor,
        //           fontStyle: "bold"
        //         }
        //       }]
        //     }
        //   }
        // });

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
                  max: 15000,
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
            ctx.fillText(dataPie[0] +"%", 220,120)

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
              fontSize: '30px',
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

      
      // if(led){
      //   den.style.color = "green";
      // } else{
      //   den.style.color = "black";
      // }
      // if(motor){
      //   maiChe.style.color = "green"
      // }else{
      //   maiChe.style.color = "black"
      // }

  },

  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }
};