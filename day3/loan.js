"use script";

document.getElementById("btn").onclick = function () {
  //   alert("Hello world!");
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  var data3 = document.getElementById("x3").value;
  console.log(typeof data1);
  console.log(isNaN(data1));

  console.log(data1);
  console.log(data2);
  console.log(data3);

  var msg = "";
  if (data1 == "" || data2 == "" || data3 == "") {
    msg = "please enter all fields!";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "all fields should contain numeric values!";
  } else if (data1 < 0 || data2 < 0 || data3 < 0) {
    msg = "all fields should contain  positive numeric values!";
  } else {
    var p = Number(data1);
    var r = parseFloat(data2);
    var n = parseInt(data3);

    r = r / 12 / 100;
    n = n * 12;
    var emi = (p * r * (1 + r)) ^ (n / ((1 + r) ^ (n - 1)));
    var totalpaid = emi * n;
    var paidinterest = totalpaid - p;

    emi = Math.round(emi);
    totalpaid = Math.round(totalpaid);
    paidinterest = Math.round(paidinterest);

    document.getElementById("y1").innerHTML = p;
    document.getElementById("y2").innerHTML = totalpaid;
    document.getElementById("y3").innerHTML = paidinterest;
    document.getElementById("y4").innerHTML = emi;
  }
  document.getElementById("result").innerHTML = msg;

  Highcharts.chart("container", {
    chart: {
      type: "pie",
    },
    title: {
      text: "Egg Yolk Composition",
    },
    tooltip: {
      valueSuffix: "%",
    },
    subtitle: {
      text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 10,
            },
          },
        ],
      },
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: [
          {
            name: "Interest",
            y: paidinterest,
          },
          {
            name: "loan amount",
            sliced: true,
            selected: true,
            y: p,
          },
        ],
      },
    ],
  });
};
