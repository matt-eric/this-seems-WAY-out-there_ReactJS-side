import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Paper,
  Tooltip,
  Zoom
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { CubeSpinner } from "react-spinners-kit";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#0A0A0A',
    marginRight: '10px',
    border: '1px solid #26ce9e',
    paddingRight: '10px'
  },
  spinner: {
    marginRight: '55px',
    border: '1px solid #26ce9e',
    paddingRight: '10px'
  },
  icon: {
    color: '#26ce9e',
  },
  preRenderSpinner: {
    display: 'none'
  }
}));

function GitHubModule(props) {

  const classes = useStyles();

  const [element, setElement] = React.useState(
    <div className={classes.spinner} >
      <CubeSpinner
        size={30}
        frontColor="#0f0f0f"
        backColor="#26ce9e"
      />
      <img
        className={classes.preRenderSpinner}
        src={props.svg}
        alt={props.alt}
      />
    </div>
  )

  const openGitHub = (repo) => {
    window.open(`https://github.com/matt-eric/${repo}`)
  }

  const loadElement = () => {
    setElement(
      <Tooltip TransitionComponent={Zoom} title={`${props.tooltip}-side Source Code`}>
        <Paper className={classes.paper} onClick={() => openGitHub(props.endpoint)} target="_blank">
          <IconButton className={classes.icon} >
            <GitHubIcon/>
          </IconButton>
          <img
            draggable="false"
            src={props.svg}
            width={"100%"}
            alt={props.alt}
          />
        </Paper>
      </Tooltip>
    )
  }

  setTimeout( loadElement, 1500 )

  return (
    <>
      { element }
    </>

  );

}

export default GitHubModule;
