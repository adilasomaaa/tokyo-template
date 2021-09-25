<template>
  <div class="row">
      <div class="col-md-6">
          <tokyo-card header="Line Chart Example">
              <line-chart
                :chartdata="datacollection"
                :options="chartOptions"
                height="200px"
            ></line-chart>
          </tokyo-card>
      </div>
      <div class="col-md-6">
          <tokyo-card header="Doughnut Chart Example">
              <doughnut-chart
                :chartdata="chartdata"
                height="200px"
            ></doughnut-chart>
          </tokyo-card>
      </div>
      <div class="col-md-6 mt-3">
          <tokyo-card header="Bar Chart Example">
            <bar-chart
                :chartdata="BarChartdata"
                height="200px"
            ></bar-chart>
          </tokyo-card>
      </div>
      <div class="col-md-6 mt-3">
          <tokyo-card header="Bar Chart Example">
            <radar-chart
                :chartdata="RadarChartdata"
                height="200px"
            ></radar-chart>
          </tokyo-card>
      </div>
  </div>

</template>

<script>
import LineChart from "@/components/Chart/LineChart";
import DoughnutChart from "@/components/Chart/DoughnutChart";
import BarChart from "@/components/Chart/BarChart";
import RadarChart from "@/components/Chart/RadarChart";
export default {
    components: {
        LineChart, DoughnutChart, RadarChart, BarChart
    },
    data() {
        return {
            RadarChartdata : {
                labels: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing',
                    'Coding',
                    'Cycling',
                    'Running'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 90, 81, 56, 55, 40],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }, {
                    label: 'My Second Dataset',
                    data: [28, 48, 40, 19, 96, 27, 100],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            },
            BarChartdata: {
                labels: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul"],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                }]
            },
            chartdata: {
                labels: [
                    "Admin",
                    "Stuff",        
                ],
                datasets: [
                {
                    data: [86, 114],
                    fill: false,
                    backgroundColor:["#946FFA","#1f0a57"],
                },      
                ],
            },
            datacollection: {
                labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                ],
                datasets: [
                {
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Africa",
                    borderColor: "#3e95cd",
                    fill: false,
                    backgroundColor:"#3e95cd",
                },
                {
                    data: [50, 54, 78, 87, 98, 121, 211],
                    label: "Asia",
                    borderColor: "#8e5ea2",
                    fill: false,
                },
                {
                    data: [13, 41, 34, 51, 14, 76, 112],
                    label: "Europe",
                    borderColor: "#3cba9f",
                    fill: false,
                },
                
                ],
            },
            chartOptions: {
                responsive: true,
                legend: {
                display: false,
                },
                tooltips: {
                titleFontSize: 15,
                bodyFontSize: 10,
                },
                scales: {
                xAxes: [],
                yAxes: [
                    {
                    ticks: {
                        beginAtZero: false,
                    },
                    },
                ],
                },
            },
        }
    }
}
</script>

<style>

</style>