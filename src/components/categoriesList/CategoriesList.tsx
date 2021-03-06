import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import * as categoriesActions from "../../store/categories/categories.actions";
import * as contextActions from "../../store/context/context.actions";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Category } from "../../models/Category";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    item: {
      minHeight: "80px",
    },
  })
);

//state to props
export interface StateProps {
  selectedCategory: Category;
}
//action to props
export interface DispatchProps {}
//action to props
export interface DispatchProps {
  setSelectedCategoryId: (category: Category) => void;
  setContextTypeById: (id: number) => void;
}
//parent
export interface OwnProps {
  list: Category[];
}
export type Props = StateProps & DispatchProps & OwnProps;

//component
const CategoriesList = (props: Props) => {
  const classes = useStyles();

  const { selectedCategory, setContextTypeById } = props;

  useEffect(() => {
    setContextTypeById(selectedCategory?.id);
  }, [selectedCategory, setContextTypeById]);

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {props.list.map((it) => {
        return (
          <React.Fragment key={it.id}>
            <ListItem
              onClick={() => {
                props.setSelectedCategoryId(it);
              }}
              className={classes.item}
              button
              selected={props.selectedCategory?.id === it.id}
            >
              <ListItemText primary={it.name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

//redux
const mapStateToProps = (state: any): StateProps => ({
  selectedCategory: state.categories.selected,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  setSelectedCategoryId: (id) =>
    dispatch(categoriesActions.setSelectedCategoryId(id)),
  setContextTypeById: (id) =>
    dispatch(contextActions.setContextActionTypeById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
