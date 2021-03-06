import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
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
  createCategoryItem: (category: Category) => void;
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
  const history = useHistory();
  let parameters: UpdateCategoryParam | null = useParams();
  console.log("parameters>>>=" + parameters);

  const [name, setName] = useState(props.category?.name);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let newCat;
    if (props.category) {
      newCat = {
        id: parameters?.id,
        name: name,
      };
      props.setUpdateCategoryItem(newCat);
    } else {
      newCat = {
        id: new Date().valueOf(),
        name: name,
      };
      props.createCategoryItem(newCat);
    }
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {!props.category
            ? "Create new Category"
            : `Update Category  ${props.category?.id}`}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            required
            id="name"
            name="name"
            label="Category Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
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
            {!props.category ? "Create" : "Update"}
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
  createCategoryItem: (category) =>
    dispatch(categoriesActions.createCategoryItem(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUpdateCategory);
