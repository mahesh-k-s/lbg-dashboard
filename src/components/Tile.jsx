import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 15,
    height: 200,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  cardheader: {
    borderBottom: '1px solid #fac41c'
  },
  avatar: {
    backgroundColor: '#76bb34',
    width:50,
    height:50
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1em',
    // color: '#2178b0',
  }
}));

const Tile = ({
    avatarTitle,
    title,
    subHeading,
    children
}) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardheader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avatarTitle}
          </Avatar>
        }        
        title={
        <Typography className={classes.title}>{title}</Typography>
        }
        subheader={subHeading}
      />
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {children}
        </Typography>
      </CardContent>      
    </Card>
  );
}

export default Tile;
