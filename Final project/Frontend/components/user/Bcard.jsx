import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const Bcard=(props)=> {
  return (
    <Card sx={{ maxWidth: 305 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          loading='lazy'
          image={props.image}
          alt="birthday"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.package}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={props.package} size="small" color="primary" variant='contained'>
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
