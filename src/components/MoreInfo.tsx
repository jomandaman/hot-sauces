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
    useLocation
  } from "react-router-dom";

const useQuery = () => {
return new URLSearchParams(useLocation().search);
}

const MoreInfo:React.FC = () => {

    const query = useQuery();


    return (
        <BasePage>
            <div>

                More Info About {query.get("id")}
            </div>
        </BasePage>
    );
}

export default MoreInfo;
