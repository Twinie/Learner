

$(".hamburger").click(function(){
  $(".left-sidebar").toggleClass("bar-hide")
})

var options = {
    series: [134, 200, 401, 487, 590, 700],
    chart: {
    type: 'donut',
  },
  
  colors: ['#fc4b6c', '#be7fff', '#fec90f', '#39cb7f', '#1a9bfc', '#1e4db7'],
  labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"],
  dataLabels: {
    
    enabled: false,
    
  },

  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      // legend: {
      //   position: 'bottom'
      // }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();

//chart-2
  var options = {
    series: [{
      name: "Spending on students",
      color:"#39cb7f",
      data: ["13.70K", "14.75K", "13.75K", "15K", "15.85K", "13.5K"]
  }],
  annotations: {
    points: [{
      x: '2020',
      seriesIndex: 0,
      label: {
        borderColor: '#39cb7f',
        offsetY: 0,
        style: {
          color: '#39cb7f',
          background: '#39cb7f',
        },
       
      }
    }]
  },
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width:3,
    
  },

  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
    labels: {
      style: {
        colors: '#707582',
        fontSize:13,
      }
    }
  },
  yaxis:{
    labels: {
      style: {
        colors: '#707582',
        fontSize:13
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();
  

  //chart-3

var optionsBar = {
  chart: {
    type: 'bar',
    height: 380,
    width: '100%',
    stacked: true,
    borderRadius: 8,
position:top
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      borderRadius: 8,

    }
  },
 
  colors: ['#1e4db7','#fec90f', '#1a9bfc'],

  series: [{
    name: "Pass",
    data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
  }, {
    name: "Fail",
    data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
  }, {
      name: "Absent",
      data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
  }],
  labels: [10,11,12,13,14,15,16,17,18,19,20,21,22,23],

  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#78909c'
      }
    }
  },
  xaxis: {
    categories: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    labels: {
        style: {
          colors: '#78909c'
        }
      }
  },
  title: {
    // text: 'Monthly Sales',
    align: 'left',
    style: {
      fontSize: '18px'
    }
  }

};
var chartBar = new ApexCharts(document.querySelector('#chart3'), optionsBar);
chartBar.render();

// chart-4

var spark1 = {
  chart: {
    id: 'sparkline1',
    type: 'line',
    height: 75,
    sparkline: {
      enabled: true
    },
    group: 'sparklines'
  },
  series: [{
    color: "#be7fff",
    data: [25, 66, 41, 59, 25, 44]
  }],
  stroke: {
    curve: 'smooth',
    width: 3
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: 'right'
    },
    x: {
      show: false
    }
  },

}

var spark2 = {
  chart: {
    id: 'sparkline2',
    type: 'line',
    height: 75,
    sparkline: {
      enabled: true
    },
    group: 'sparklines'
  },
  series: [{
    color: "#fea10f",
    data: [12, 14, 2, 47, 32, 44]
  }],
  stroke: {
    curve: 'smooth',
    width: 3
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: 'right'
    },
    x: {
      show: false
    }
  },
  // title: {
  //   text: '387',
  //   style: {
  //     fontSize: '26px'
  //   }
  // },
  // colors: ['#34bfa3']
}

var spark3 = {
  chart: {
    id: 'sparkline3',
    type: 'line',
    height: 70,
    sparkline: {
      enabled: true
    },
    group: 'sparklines'
  },
  series: [{
    color: "#1a9bfc",
    data: [4, 45, 74, 32, 56, 31]
  }],
  stroke: {
    curve: 'smooth',
    width: 3
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: 'right'
    },
    x: {
      show: false
    }
  },
  // colors: ['#f4516c'],
  // title: {
  //   text: '577',
  //   style: {
  //     fontSize: '26px'
  //   }
  // },
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
}

var spark4 = {
  chart: {
    id: 'sparkline4',
    type: 'line',
    height: 75,
    sparkline: {
      enabled: true
    },
    group: 'sparklines'
  },
  series: [{
    color:"#39cb7f",
    data: [15, 75, 47, 65, 14, 32]
  }],
  stroke: {
    curve: 'smooth',
    width: 3
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: 'right'
    },
    x: {
      show: false
    }
  },
  // colors: ['#00c5dc'],
  // title: {
  //   text: '64.27%',
  //   style: {
  //   color: '#39cb7f',
  //     fontSize: '21px'
  //   }
  // },
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
}


var spark5 = {
  chart: {
    id: 'sparkline5',
    type: 'line',
    height: 75,
    sparkline: {
      enabled: true
    },
    group: 'sparklines'
  },
  series: [{
    color:"#fc4b6c",
    data: [11, 5, 70, 35, 14, 32]
  }],
  stroke: {
    curve: 'smooth',
    width: 3
  },
  markers: {
    size: 0
  },
  tooltip: {
    fixed: {
      enabled: true,
      position: 'right'
    },
    x: {
      show: false
    }
  },
  // colors: ['#00c5dc'],
  // title: {
  //   text: '64.27%',
  //   style: {
  //   color: '#39cb7f',
  //     fontSize: '21px'
  //   }
  // },
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
}

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();
new ApexCharts(document.querySelector("#spark4"), spark4).render();
new ApexCharts(document.querySelector("#spark5"), spark5).render();
