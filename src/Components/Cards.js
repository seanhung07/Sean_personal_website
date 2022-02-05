import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";



const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: '8vw'
  },
  leftAlignItem: {
    marginRight: "auto"
},
parentFlexRight: {
    display: "flex",
    justifyContent: "flex-end"
}
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
          {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         
        </Typography>
        <Typography variant="body3" color="textSecondary" component="p">
          {props.lan}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.parentFlexRight}>
        <IconButton>
          {/* <ShareIcon /> */}
          <a href={props.url}><i className="fa fa-github">Github Repo</i></a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
