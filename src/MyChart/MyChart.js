import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import axios from "axios";

const state = {
    datasets: [{
        data: [40, 100, 75],
        backgroundColor: [
            "#ffcd56",
            "#ff6384",
            "#fd6b12",
            "#E933FF ",
            "337DFF",
            "#33FF7A ",
            "#FF5733 ",



        ]
    }, ],


    labels: [
        "Hang Out",
        "Subscriptions",
        "Amazon"
    ]

};





export default class App extends React.Component {
    render() {
      return (
        <div>
          <Pie
            data={state}
            options={{
              title:{
                display:true,
                text:'Budget',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
  
          
        </div>
      );
    }
  }
