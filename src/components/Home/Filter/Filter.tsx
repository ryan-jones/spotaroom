import * as React from 'react';
import './Filter.scss';
import { IProperty } from 'src/interfaces/property.interface';

interface IProps {
  sortedBy: string;
  fetchProperties: Function;
  sortPropertiesBy: Function;
  params: any;
  properties: IProperty[];
}
export default class FilterBar extends React.Component<IProps> {

  componentDidMount() {
    const { slug } = this.props.params;
    this.props.fetchProperties('', slug);
    this.setDownloadAttributes();
  }

  componentDidUpdate() {
    this.setDownloadAttributes();
  }

  setDownloadAttributes = () => {
    const button = document.getElementById('download-btn');
    if (button) {
      button.removeAttribute('href');
      const props: any = this.props.properties;
      button.setAttribute('href', URL.createObjectURL(new Blob([JSON.stringify(props, undefined, 2)], {
        type: "application/octet-stream" })));
      button.setAttribute('download', 'properties.json');
    }
  }

  filterListings = (e: any, slug: string) => {
    this.props.fetchProperties(e.target.value, slug);
  }

  sortProperties = (e: any) => {
    this.props.sortPropertiesBy(e.target.value);
  }

  render() {
    const { params: { slug }, sortedBy } = this.props;

    return (
      <section className="filter">
        <h2>Filters: </h2>
        <div className="options">
          <div className="options__selector">
            <label htmlFor="property">Property Type:</label>
            <select id="property" onChange={(e) => this.filterListings(e, slug)}>
              <option value="">All</option>
              <option value="residences">Residence</option>
              <option value="apartments">Apartment</option>
              <option value="studios">Studio</option>
              <option value="rooms">Room</option>
            </select>
          </div>
          <div className="options__selector">
            <label htmlFor="sorting">Sort By Price:</label>
            <select id="sorting" value={sortedBy} onChange={(e) => this.sortProperties(e)}>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>
        <button className="download">
          <a id="download-btn">Download JSON</a>
         </button>
      </section>
    )
  }
}
