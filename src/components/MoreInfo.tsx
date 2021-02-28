import React from 'react';
import Item from './Item';
import {hotSauces, HotSauce} from './hotsauces';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import { BasePage } from './basePage';
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useHistory
  } from "react-router-dom";

const useQuery = () => {
return new URLSearchParams(useLocation().search);
}

const styledButton = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'lowercase',
    },
  });

const MoreInfo:React.FC = () => {
    const buttonClasses = styledButton();
    const query = useQuery();


    return (
        <BasePage>
            <div>
            <Link className={buttonClasses.root} color="primary" 
                to={{
                pathname: "/list",
                }}
            >
                Back to List
            </Link>
            </div>
            <div>

                More Info About {query.get("id")}
            </div>
        </BasePage>
    );
}

export default MoreInfo;
