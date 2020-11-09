import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { connect } from 'react-redux'
import Navigation from '../../components/navigation'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 30,
    height: 260,
    width: 350,
    marginLeft: '6%'
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  button: {
    fontSize: 12,
    marginTop: 10,
  },
  flexBox: {
    // marginTop: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    /* margin-left: 108px */
    // margin: 'auto'


  }
}));

const content = [
  {
    name: 'dawali',
    src: "Happy-Diwali"
  },

  {
    name: 'dawali',
    src: "Happy-Diwali"
  },

  {
    name: 'dawali',
    src: "Happy-Diwali"
  },

  {
    name: 'dawali',
    src: "Happy-Diwali"
  },

  {
    name: 'dawali',
    src: "Happy-Diwali"
  },
  {
    name: 'dawali',
    src: "Happy-Diwali"
  },
  // {
  //   name: 'Dussehra',
  //   src: "Happy-Diwali"
  // },  {
  //   name: 'Dussehra',
  //   src: "Happy-Diwali"
  // },  {
  //   name: 'Dussehra',
  //   src: "Happy-Diwali"
  // },  {
  //   name: 'Dussehra',
  //   src: "Happy-Diwali"
  // },  {
  //   name: 'Dussehra',
  //   src: "Happy-Diwali"
  // },  {
  //   name: 'Dussehra',
  //   src: "Happy-Diwali"
  // },

]

function RecipeReviewCard(props) {

  const [state, setState] = useState([{ name: '' }])


  // setState({
  //   state : props.myData
  // })
  useEffect(()=>{

    setState({
      name: props.myData
     })
     console.log(state)

   },[props.myData])
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <div>
      <Navigation />

      <h1>HAPPY {props.myData}</h1>
      <div className={classes.flexBox}>
        {
      //  props.myData = 'Dawali' ? 
   content.map((item) => {

            return <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={require("./" + item.src + ".jpg")}
                title="Paella dish"
              />
              <CardContent>
                <Link to="/inputname">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Create By your name
             </Button>
                </Link>
              </CardContent>
            </Card>

          })
          // : null 
        }
      </div>
      <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; Festival Wishing Developed by{" "}
                        <a href="#" rel="nofollow">
                            Coding Trip
              </a>
                    </p>
                </div>
            </div>
    </div>

  );
}
const mapStateToProps = (state) => {
  console.log(state.name);
  return {
    myData: state.name
  }
}

export default connect(mapStateToProps)(RecipeReviewCard)