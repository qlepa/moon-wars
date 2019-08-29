import React, { memo } from "react";

import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const CardItem = memo(function CardItem(props) {
  const classes = useStyles();

  return (
      console.log(this.props.cards)
    // <Card className={classes.card}>
    //   <CardContent>
    //     <Typography>{/* {this.props.card.name} */}</Typography>
    //   </CardContent>
    // </Card>
  );
});

const useStyles = makeStyles({
  card: {
    backgroundColor: "#ffffff"
  }
});
