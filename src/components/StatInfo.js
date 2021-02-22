import React, { useState, useEffect } from 'react';

function StatInfo() {
  const [ statData, setStatData ] = useState([]);

  const getStatData = () => {
    fetch('stat-data.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setStatData(myJson)
      });
  }

  useEffect(()=>{
    getStatData()
  },[])

  return (
    null
  );
}

export default StatInfo;
