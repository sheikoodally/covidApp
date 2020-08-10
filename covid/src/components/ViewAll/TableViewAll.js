import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Countries from './ViewAll';


import { fetchDailyData } from '../../api';



export default function DenseTable({countries}) {

    const [dailyData, setDailyData] = useState({});
  
    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
  
        setDailyData(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);
  

  return (
      <div>
    
        {countries.map((country, i) => <p key={i} value={country}>{country}</p>)}
    </div>
  );
}