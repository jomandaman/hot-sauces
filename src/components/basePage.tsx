import React from 'react';
import Item from './Item';
import {hotSauces, HotSauce} from './hotsauces';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import './styles.css';

export const BasePage:React.FC = (props) => {
    
    const useStyles = makeStyles({
        root: {
          //maxWidth: 345,
        },
        media: {
          //width: 360,
        },
    });

    const classes = useStyles();

    return (
        <>
        <div style={{
            backgroundColor: "gray"
        }}>
            <Container maxWidth="lg" className={classes.root}>
                <Typography variant="h2" component="h2" gutterBottom >
                Hot Sauce List 2
                </Typography>
            </Container>
        </div>
        {/*Container has to have a child, */}
        {props.children &&
        <Container maxWidth="lg" className={classes.root}>
            {/*Because only wrapped in BasePage on List */}
          {
              props.children
          }
        </Container>
        }
      </>
    );
}