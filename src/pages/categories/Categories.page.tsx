import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Category } from "../../models/Category";
import * as categoriesActions from "../../store/categories/categories.actions";
import categories from "../../data/categories.json";
import CategoriesList from "../../components/categoriesList/CategoriesList";

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
  useEffect(() => {
    props.setCategories(categories);
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <CategoriesList list={props.categoriesList}></CategoriesList>
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
