import { connect } from "react-redux";
import FilterBar from "./Filter";
import {
  fetchProperties,
  sortPropertiesBy
} from "store/actions/property.actions";
import { IStoreState } from "interfaces/store.interface";

const mapStateToProps = (state: IStoreState) => ({
  sortedBy: state.properties.sortedBy,
  properties: state.properties.results
});

const mapDispatchToProps = {
  sortPropertiesBy,
  fetchProperties
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
