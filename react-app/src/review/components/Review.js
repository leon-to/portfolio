import React from 'react';
import { 
    Grid, Typography, Avatar, makeStyles,
    Card, CardHeader, CardContent   
} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import CodeIcon from '@material-ui/icons/Code';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import yohan from '../assets/yohan.png';
import rob from '../assets/rob.png';
import sukh from '../assets/sukh.png';

const useStyles = makeStyles(theme =>({
    root_container: {
        margin: 0,
        width: '100%',
    },
    card_container: {
        width: '400px',
    },
    header: {
    },
    content: {
        // fontSize: '20px',
    }
}));

export default function Review(){
    const classes = useStyles();
    const reviews = [
        {
            name: 'Yohan', 
            title: 'Project Manager @ Imagine Communications',
            avatar: yohan,
            ratings: [
                {skill: 'Coding', ranking: 5, icon: <CodeIcon />},
                {skill: 'Teamwork', ranking: 4, icon: <GroupWorkIcon />},
                {skill: 'Potential', ranking: 4.5, icon: <EmojiObjectsIcon />},
                {skill: 'Board game', ranking: 5, icon: <SportsEsportsIcon />},
            ],
            detail: '"Leon is one of our best intern. He is very hardworking and detail-oriented."',
        },
        {
            name: 'Rob', 
            title: 'Colleague @ Imagine Communications',
            avatar: rob,
            ratings: [
                {skill: 'Coding', ranking: 4.5, icon: <CodeIcon />},
                {skill: 'Teamwork', ranking: 4, icon: <GroupWorkIcon />},
                {skill: 'Badminton', ranking: 5, icon: <SportsTennisIcon />},
            ],
            detail: '"He is a very friendly guy. His skills at badminton are a big bonus for us."',
        },
        {
            name: 'Sukh', 
            title: 'Techlead @ Clickdocs',
            avatar: sukh,
            ratings: [
                {skill: 'Coding', ranking: 5, icon: <CodeIcon />},
                {skill: 'Teamwork', ranking: 5, icon: <GroupWorkIcon />},
                {skill: 'Innovation', ranking: 5, icon: <MonetizationOnIcon />},
            ],
            detail: '"Very nice and very clean code."',
        },
    ];


    return (
        <Grid 
            container 
            justify="center"
            alignItems="center"
            spacing={3}
            className={classes.root_container}>
            {reviews.map(review => (
                <Grid item>
                    <Card className={classes.card_container}>
                        <CardHeader
                            avatar={<Avatar src={review.avatar}></Avatar>}
                            title={review.name}
                            subheader={review.title}
                            className={classes.header}/>
                        <CardContent>
                            <Grid container direction='column'>
                                {review.ratings.map(rating =>(
                                    <Grid container direction='column'>
                                        <Typography variant="body1" color="secondary" component="p">{rating.skill}</Typography>
                                        <Rating name="read-only" value={rating.ranking} icon={rating.icon} precision={0.5} size="large" readOnly />
                                    </Grid>
                                ))}
                            </Grid>

                            <Typography variant="body1" color="textSecondary" component="p">
                                {review.detail}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}