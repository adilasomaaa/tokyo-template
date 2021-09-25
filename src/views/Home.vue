<template>
  <div class="home">
    <div class="row">
      <div class="col">
        <stats-card
          title="Articles"
          stats="967"
          icon="fas fa-list"
        ></stats-card>
      </div>
      <div class="col">
        <stats-card
          title="Comments"
          stats="400"
          icon="fas fa-comments"
        >
        </stats-card>
      </div>
      <div class="col">
        <stats-card
          title="Users Active"
          stats="150"
          icon="fas fa-user"
        ></stats-card>
      </div>
      <div class="col">
        <stats-card
          title="Visitors Today"
          stats="675"
          icon="fas fa-chart-bar"
        ></stats-card>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-md-8">
        <tokyo-card header="Visitor Development">
          <line-chart
            :chartdata="datacollection"
            :options="chartOptions"
            height="180px"
          ></line-chart>
        </tokyo-card>
      </div>
      <div class="col-md-4">
        <tokyo-card header="User Roles" >
          <doughnut-chart
            :chartdata="chartdata"
          ></doughnut-chart>
        </tokyo-card>
      </div>
      <div class="col-md-12 my-3">
        <div class="title py-3  text-left">
          <h1 class="font-weight-bold">Article Index</h1>
          <h3 class="font-weight-bold text-muted">See details article</h3>
        </div>
        <div class="row">
          <div class="col" v-for="social in socials" :key="social">
              <div class="card stats-card" style="background:transparent">
                <div :class="[`card-body bg-${social.color}`]">
                  <div class="row">
                    <div class="col">
                      <h1 class="card-title text-uppercase mb-0"><i :class="social.icon"></i></h1>
                    </div>
                  </div>
                  <div class="row  align-items-center">
                    <div class="col">
                      <h5 class="mt-3 mb-0 text-sm">
                        <span class="font-weight-bold">{{social.text}}</span>
                      </h5>
                    </div>
                    <div class="col-auto">
                      <router-link to="#" :class="[`text-${social.color}`]">
                        <i class="fas fa-arrow-right"></i>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <tokyo-card class="mt-3" header="Article Table">
                <tokyo-table tableClasses="align-items-center">
                  <template v-slot:columns>
                    <th>Project</th>
                    <th>Budget</th>
                    <th>Status</th>
                    <th>Users</th>
                  </template>
                  <template v-slot:default>
                    <tr v-for="data in TableData" :key="data">
                      <th scope="row">
                        <div class="media align-items-center">
                          <div class="mr-3 avatar">
                            <img alt="Image placeholder" :src="data.img" />
                          </div>
                          <div class="media-body">
                            <span class="name mb-0 text-sm">{{ data.title }}</span>
                          </div>
                        </div>
                      </th>
                      <td class="budget">
                        {{ data.budget }}
                      </td>
                      <td>
                        <div class="badge-dot mr-4" :type="data.statusType">
                          <i :class="`bg-${data.statusType}`"></i>
                          <span class="status">{{ data.status }}</span>
                        </div>
                      </td>
                      <td>
                        <div class="avatar-group">
                          <a
                            href="#"
                            class="avatar avatar-sm rounded-circle"
                            data-toggle="tooltip"
                            data-original-title="Ryan Tompson"
                          >
                            <img
                              alt="Image placeholder"
                              src="img/theme/team-1.jpg"
                              width="30px"
                            />
                          </a>
                          <a
                            href="#"
                            class="avatar avatar-sm rounded-circle"
                            data-toggle="tooltip"
                            data-original-title="Romina Hadid"
                          >
                            <img
                              alt="Image placeholder"
                              src="img/theme/team-2.jpg"
                              width="30px"
                            />
                          </a>
                          <a
                            href="#"
                            class="avatar avatar-sm rounded-circle"
                            data-toggle="tooltip"
                            data-original-title="Alexander Smith"
                          >
                            <img
                              alt="Image placeholder"
                              src="img/theme/team-3.jpg"
                              width="30px"
                            />
                          </a>
                          <a
                            href="#"
                            class="avatar avatar-sm rounded-circle"
                            data-toggle="tooltip"
                            data-original-title="Jessica Doe"
                          >
                            <img
                              alt="Image placeholder"
                              src="img/theme/team-4.jpg"
                              width="30px"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </template>
                </tokyo-table>
              </tokyo-card>
      </div>
      <div class="col-md-4 my-3">
        <tokyo-card header="Users Detail">
          <b-media class="border-bottom mb-3" v-for="(user, index) in Users" :key="index">
            <template #aside>
              <b-avatar badge badge-variant="success" text="YL" variant="primary"></b-avatar>
            </template>

            <h3 class="my-0 font-weight-bold">{{user.name}}</h3>
            <p>
            {{user.email}}
            </p>
          </b-media>
         
        </tokyo-card>
      </div>
    </div>
   
  </div>
</template>

<script>
import TableData from './json_file/table_data'
import LineChart from "@/components/Chart/LineChart";
import Users from './json_file/user'
import DoughnutChart from "@/components/Chart/DoughnutChart";
export default {
  name: 'Home',
  components: {
    LineChart, DoughnutChart
  },
  data() {
    return {
      TableData,
      Users,
      socials: [
        {
          color: "primary",
          icon: "far fa-user",
          text: "New Client"
        },
        {
          color: "primary",
          icon: "fas fa-shopping-cart",
          text: "Product Sold"
        },
        {
          color: "primary",
          icon: "fas fa-address-card",
          text: "Suppliers"
        },
        {
          color: "primary",
          icon: "fas fa-comment-dots",
          text: "Responses"
        }
      ],
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
  },
}
</script>
