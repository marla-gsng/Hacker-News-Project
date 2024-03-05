import * as React from 'react';
import './Newscard.css'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function NewsCard({story_title, url,story_url, created_at,author, comment_text,title}) {



  const [expanded, setExpanded] = React.useState(false);

 url = story_url ? story_url : url;

story_title = story_title ? story_title : title;

  const handleExpandClick = () => {{}
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 340, margin: "2.5%", bgcolor: blue[100] }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="">
            !!!
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}

       
       
        subheader={created_at}
        
      />

      <CardContent>

        <Typography
          variant="body1"
          color="text.primary"
          fontSize="20px"
          fontWeight="bold"
        >

      
  
          {story_title}
        </Typography>
        <Typography variant="body2" color="text.secondary" margin="30px">
          <a href={url} target="_blank">
            {url}
          </a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{comment_text}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



