import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { ContextActionType } from "../../models/ContextActionType.enum";
import * as contextActions from "../../store/context/context.actions";
import * as categoriesActions from "../../store/categories/categories.actions";
import { Category } from "../../models/Category";

//state to props
export interface StateProps {
  contextType: ContextActionType;
  category: Category;
}
//action to props
export interface DispatchProps {
  setContextType: (type: ContextActionType) => void;
  setDeleteCategoryItem: () => void;
  setUpdateCategoryItem: (category: Category) => void;
}
//parent
export interface OwnProps {}
export type Props = StateProps & DispatchProps & OwnProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const ButtonAppBar = (props: Props) => {
  const classes = useStyles();

  let actionsElements: ReactElement;
  let newElements: ReactElement = (
    <React.Fragment>
      <Button
        color="inherit"
        onClick={() => {
          console.log("onClick ContextActionType ");

          props.setContextType(ContextActionType.None);
        }}
        component={Link}
        to="/createCategory"
      >
        New Category
      </Button>
    </React.Fragment>
  );
  let updateElements: ReactElement = (
    <React.Fragment>
      <Button
        color="inherit"
        component={Link}
        to={`/categories/${props.category?.id}`}
      >
        Update
      </Button>
      <Button color="inherit" onClick={() => props.setDeleteCategoryItem()}>
        Delete
      </Button>
    </React.Fragment>
  );
  let emptyElements: ReactElement = <React.Fragment></React.Fragment>;

  switch (props.contextType) {
    case ContextActionType.None:
      actionsElements = emptyElements;
      break;
    case ContextActionType.New:
      actionsElements = newElements;
      break;
    case ContextActionType.Update:
      actionsElements = updateElements;
      break;
    default:
      actionsElements = newElements;
      break;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Locations
          </Typography>
          {actionsElements}
        </Toolbar>
      </AppBar>
    </div>
  );
};

//redux
const mapStateToProps = (state: any): StateProps => ({
  contextType: state.context.contextType,
  category: state.categories.selected,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  setContextType: (type) => dispatch(contextActions.setContextActionType(type)),
  setDeleteCategoryItem: () =>
    dispatch(categoriesActions.setDeleteCategoryItem()),
  setUpdateCategoryItem: (category) =>
    dispatch(categoriesActions.setUpdateCategoryItem(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
