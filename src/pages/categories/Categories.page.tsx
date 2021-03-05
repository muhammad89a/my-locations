import { Button } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Category } from "../../models/Category";
import * as categoriesActions from "../../store/categories/categories.actions";
import categories from "../../data/categories.json";

//state to props
export interface StateProps {
  categoriesList: Category[];
}
//action to props
export interface DispatchProps {
  setCategories: (categories: Category[]) => void;
}
//parent
export interface OwnProps {}
export type Props = StateProps & DispatchProps & OwnProps;
const Categories = (props: Props) => {
  return (
    <div>
      <h1>Categories</h1>
      {props.categoriesList.map((item) => {
        return <div>{item.name}</div>;
      })}
      <Button
        onClick={() => {
          props.setCategories(categories);
        }}
      >
        Click me
      </Button>
    </div>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  categoriesList: state.categories.list,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  setCategories: (categories) => {
    dispatch(categoriesActions.setCategoriesList(categories));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
