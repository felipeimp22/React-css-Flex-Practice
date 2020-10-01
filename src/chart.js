import React, { useContext, useEffect, useState } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';
import './chart.css'




const Chart = () => {


  let defaultOption = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'Farms'
  }




  async function getAllBids() {

   

    // await allBids[0].map(e => {
    //   return cor.push(
    //     'rgba(54, 162, 235, 0.6)',
    //     'rgba(255, 99, 132, 0.6)',
    //     'rgba(255, 206, 86, 0.6)',
    //     'rgba(75, 192, 192, 0.6)',
    //     'rgba(153, 102, 255, 0.6)',
    //     'rgba(255, 159, 64, 0.6)',
    //     'rgba(255, 99, 132, 0.6)')
    // })


  }


  useEffect(() => {
    getAllBids()

  }, [])

  let cor= [,
    'rgba(255, 99, 132, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)']


  let chartData = {
    labels:  ['Carro', 'Cama', 'Teste', 'Teste', 'Teste', 'Teste'],
    datasets: [
      {
        label: 'Grafico',
        data: [90,10,3,4],
        backgroundColor: cor
      }
    ]
  }





  return (
    <div className="chartDiv" >
      <div className="chartContainer">
        <Bar
          data={chartData}
          options={{
            title: {
              display: defaultOption.displayTitle,
              text: 'Grafico',
              fontSize: 25
            },
            legend: {
              display: defaultOption.displayLegend,
              position: defaultOption.legendPosition
            }
          }}
        />
      </div>
      
    </div>
     
  )
}
export default Chart