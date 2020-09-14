import React from 'react';
import { 
    Grid, Typography, Avatar, makeStyles,  
    Card, CardHeader, CardContent   
} from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const useStyles = makeStyles(theme =>({
    header: {
    },
    content: {
        fontSize: '20px',
    }
}));

export default function Review(){
    const classes = useStyles();

    return (
        <Grid container direction='row' >
            <Grid item xs={2} />
            
            <Grid container item xs={4}>
                <Card>
                    <CardHeader
                        avatar={<Avatar><SupervisedUserCircleIcon /></Avatar>}
                        title="Yohan Trudel"
                        subheader="Project Manager @ Imagine Communications"
                        className={classes.header}/>
                    <CardContent>
                        <Typography variant="h4" color="textSecondary" component="p">
                        "This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like."
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid container item xs={4} direction='column'>
                <Card>
                    <CardHeader
                        avatar={<Avatar><SupervisedUserCircleIcon /></Avatar>}
                        title="Yohan Trudel"
                        subheader="Project Manager @ Imagine Communications"
                        className={classes.header}/>
                    <CardContent>
                        <Typography variant="body1" color="textSecondary" component="p">
                        "This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like."
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader
                        avatar={<Avatar><SupervisedUserCircleIcon /></Avatar>}
                        title="Yohan Trudel"
                        subheader="Project Manager @ Imagine Communications"
                        className={classes.header}/>
                    <CardContent>
                        <Typography variant="body1" color="textSecondary" component="p">
                        "This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like."
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2} />
        </Grid>
    );
}