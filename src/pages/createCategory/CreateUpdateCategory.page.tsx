import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as categoriesActions from "../../store/categories/categories.actions";
import { Category } from "../../models/Category";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//state to props
export interface StateProps {
  category: Category;
}
//action to props
export interface DispatchProps {
  setUpdateCategoryItem: (category: Category) => void;
}
//parent
export interface OwnProps {}
export interface UpdateCategoryParam {
  id: string;
}
export type Props = StateProps & DispatchProps & OwnProps;

//component
const CreateUpdateCategory = (props: any) => {
  const classes = useStyles();

  let parameters: UpdateCategoryParam | null = useParams();
  console.log("id=" + parameters?.id);

  useEffect(() => {
    //todo get selected from local storage
    if (parameters) {
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {!parameters
            ? "Create new Category"
            : `Update Category  ${props.category.id}`}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            required
            id="name"
            name="name"
            label="Category Name"
            value={props.category ? props.category.name : null}
            fullWidth
            autoFocus
            autoComplete="given-name"
            variant="standard"
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {!parameters ? "Create" : "Update"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

//redux
const mapStateToProps = (state: any): StateProps => ({
  category: state.categories.selected,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  setUpdateCategoryItem: (category) =>
    dispatch(categoriesActions.setUpdateCategoryItem(category)),
  // getCurrentCategory: (category) => dispatch(categoriesActions.getCurrentCategory(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUpdateCategory);
