import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:15,
  },
});

export default function ImgMediaCard({img, title, description, openLightBox}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardActionArea onClick={openLightBox}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={img}
                title="Contemplative Reptile"
            />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>      
    </Card>
  );
}
