import React from 'react';
import {Grid, makeStyles, Paper, Typography,} from '@material-ui/core';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot} from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
    timeline:{
        width: '700px',      
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();
    const milestones = [
        {year: '2017 - 2018', title: 'Full Stack Developer', detail: 'Intern @ Imagine Communications', icon: <CodeIcon />},
        {year: '2019', title: 'Computer Engineer', detail: 'Graduate @ University of Toronto', icon: <SchoolIcon />},
        {year: '2020 - present', title: 'Full Stack Developer', detail: 'Work @ Clickdocs', icon: <WorkIcon />},
    ];

    return (
        <Grid 
            container 
            justify="center"
            alignItems="center">
            <Grid item>
                <Timeline align="alternate" className={classes.timeline}>
                    {milestones.map(milestone =>(
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    {milestone.year}
                                </Typography>
                            </TimelineOppositeContent>

                            
                            <TimelineSeparator>
                                <TimelineDot>
                                    {milestone.icon}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {milestone.title}
                                    </Typography>
                                    <Typography>{milestone.detail}</Typography>
                                </Paper>
                            </TimelineContent>

                        </TimelineItem>
                    ))}
                    
                </Timeline>
            </Grid>

        </Grid>
    );
}