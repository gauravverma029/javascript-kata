import React,{ useEffect,useState } from 'react';
import { parseCsvData } from '../../utils/functions';

const Magazines = () => {
  const [magazinesFilteredData , setMagazinesFilteredData ] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('./magazines.csv').then((data) => data.text()).then(jsonData => {
      setMagazinesFilteredData(parseCsvData(jsonData));
    }).catch(err => {
      console.log(err)
    });
  },[]);

  const rows = magazinesFilteredData && magazinesFilteredData.rows;

  return (
    <div className="container">
      <h3>
      Magazines
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Isbn</th>
            <th scope="col">Authors</th>
            <th scope="col">PublishedAt</th>
          </tr>
        </thead>
        <tbody>
          {rows && rows.map((values)=>{
            const { id,authors,isbn,publishedAt,title } = values;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{isbn}</td>
                <td>{authors}</td>
                <td>{publishedAt}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Magazines;
