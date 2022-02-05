import React from 'react';
import Cards from './Cards'
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { projects } from './project'
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "80px",
    paddingRight: "40px"
  }
});
function Portfolio(){
  const classes = useStyles();
  return(
    <section id ="portfolio">
      <div className="row2">
      <p style={{textAlign: "center", fontSize: "30px" , color: "black"}}>Recent Projects .</p>
            <Grid
              container
              spacing={4}
              className={classes.gridContainer}
              justify="center"
              
            >
            {
              projects.map((data,key)=>{
                return (
                <Grid item xs={12} sm={6} md={4}>
                    <Cards name = {data.title} lan={data.lan} url = {data.url}/>
                  </Grid>
              )})
            }
            {/* <Grid item xs={12} sm={6} md={4}>
              <Cards />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Cards />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Cards />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Cards />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Cards />
            </Grid> */}
          
          </Grid>
      </div>
    </section>
  )
};

export default Portfolio