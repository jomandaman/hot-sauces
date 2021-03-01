import React from 'react';
import Item from './Item';
import {hotSauces, HotSauce} from './hotsauces';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import { BasePage } from './basePage';

const useStyles = makeStyles({
	alert: {
	  position: "fixed",
	  right: 0,
	  top: "50%",
	  width: 200,
	},
});

const List:React.FC = () => {
	const [arr, setArr] = React.useState(hotSauces);
	// ref helps keep the value constant, it persists
	const deleted = React.useRef<HotSauce[]>([]);
	const [showAlert, setShowAlert] = React.useState(false);

	const handleDelete = (id: number) => {
		//current used for refs
		if (deleted.current) {
			// ! is to tell TS that it WILL be there
			const hotSauceToDelete = arr.find((sauce) => sauce.id === id);
			if (hotSauceToDelete) {
				deleted.current.push(hotSauceToDelete);
				// save time!
				setArr(arr.filter((sauce) => sauce.id !== id));
				setShowAlert(true);
			}
		}
	}

	const handleUndo = () => {
		// temp array to use in setArr()...found better way below
		// const bringBack = arr;
		if (deleted.current.length > 0) {
			// we are guaranteeing there is something is in the array
			//bringBack.push(deleted.current.pop()!);
			// dealing with arrays on state is a pain in the ass
			//setArr(bringBack);

			//faster
			setArr([...arr, deleted.current.pop()!])
			setShowAlert(false);
		}
	}

    const classes = useStyles();

    return (
		<BasePage>
			<Grid container spacing={5}>
				{arr.map(hotSauce => (
					<Grid item key={hotSauce.id}>
						<Item 
							handleDelete={handleDelete}
							id={hotSauce.id}
							imageURL={hotSauce.imageURL} 
							title={hotSauce.title} 
							subtitle={hotSauce.subtitle} 
						/>
					</Grid>
				))}
			</Grid>
			
			{ showAlert && 
			<Alert className={classes.alert}
			action={
				<Button color="inherit" size="small">
				UNDO
				</Button>
				}
			onClick={
				handleUndo
			} >
				Successfully deleted
			</Alert> 
			}
		</BasePage>
  	);
}

export default List;
