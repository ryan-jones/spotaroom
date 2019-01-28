import * as React from 'react';
import BaseLayout from '../BaseLayout/BaseLayout';
import FilterBar from './Filter/Filter.container';
import Showcase from './Showcase/Showcase';
import { connect } from 'react-redux';
import { IStoreState } from 'src/interfaces/store.interface';
import { IPropertyProps } from 'src/interfaces/property.interface';
import { RouteComponentProps } from 'react-router';
import './Home.scss';

interface IProps extends RouteComponentProps{
  properties: IPropertyProps;
}
const home = ({ properties, match }: IProps) => (
  <BaseLayout>
    <section className="home">
      <div className="home__widgets">
      <FilterBar params={match.params}/>
      <Showcase properties={properties}/>
      </div>
    </section>
  </BaseLayout>
)

const mapStateToProps = (state: IStoreState) => ({
  properties: state.properties
});

export default connect(mapStateToProps)(home);