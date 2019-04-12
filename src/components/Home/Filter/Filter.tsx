import * as React from "react";
import "./Filter.scss";
import { IProperty } from "interfaces/property.interface";

interface IProps {
  fetchProperties: Function;
  sortPropertiesBy: Function;
  params: any;
  properties: IProperty[];
  sortedBy: string;
}
export default function FilterBar({
  params,
  properties,
  fetchProperties,
  sortedBy,
  sortPropertiesBy
}: IProps) {
  const [propertyType, setPropertyType] = React.useState("");

  React.useEffect(() => {
    fetchProperties(propertyType, params.slug);
    setDownloadAttributes();
  }, [propertyType]);

  const setDownloadAttributes = () => {
    const button = document.getElementById("download-btn");
    if (button) {
      button.removeAttribute("href");
      button.setAttribute(
        "href",
        URL.createObjectURL(
          new Blob([JSON.stringify(properties, undefined, 2)], {
            type: "application/octet-stream"
          })
        )
      );
      button.setAttribute("download", "properties.json");
    }
  };

  return (
    <section className='filter'>
      <h2>Filters: </h2>
      <div className='options'>
        <div className='options__selector'>
          <label htmlFor='property'>Property Type:</label>
          <select id='property' onChange={e => setPropertyType(e.target.value)}>
            <option value=''>All</option>
            <option value='residences'>Residence</option>
            <option value='apartments'>Apartment</option>
            <option value='studios'>Studio</option>
            <option value='rooms'>Room</option>
          </select>
        </div>
        <div className='options__selector'>
          <label htmlFor='sorting'>Sort By Price:</label>
          <select
            id='sorting'
            value={sortedBy}
            onChange={e => sortPropertiesBy(e.target.value)}
          >
            <option value='ascending'>Ascending</option>
            <option value='descending'>Descending</option>
          </select>
        </div>
      </div>
      <button className='download'>
        <a id='download-btn'>Download JSON</a>
      </button>
    </section>
  );
}
