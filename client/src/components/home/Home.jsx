import React from 'react';
import { Grid } from '@mui/material';

//components
import Banner from '../Banner/Banner';
import Catagories from './Catagories';

const Home = () => {
  return (
    <>
   <Banner />
   <Grid container>
<Grid item lg={2} sm={2} xs={12}>
<Catagories /> 
</Grid>
<Grid container item xs={12} sm={10} lg={10}>
  Posts
</Grid>
   </Grid>
    
    </>
  
  )
}

export default Home;