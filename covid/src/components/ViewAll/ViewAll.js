/* import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import TableViewAll from './TableViewAll';

import { fetchCountries } from '../../api';

import styles from './ViewAll.module.css';

const Countries = () => {


  const handleCountryChange = async (countryRegion) => {
    const data = await fetchCountries(countryRegion);

    this.setState({ data, country: country });
  }

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries; */