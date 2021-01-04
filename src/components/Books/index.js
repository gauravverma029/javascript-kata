import React,{ useEffect,useState } from 'react';
import { parseCsvData } from '../../utils/functions';

const Books = ({ libraryData,setLibraryData }) => {
  const [booksFilteredData , setBooksFilteredData ] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('./books.csv').then((data) => data.text()).then(jsonData => {
      setBooksFilteredData(parseCsvData(jsonData))
      setLibraryData({ ...libraryData,...parseCsvData(jsonData).rows })
    }).catch(err => {
      console.log(err)
    });
  },[]);

  const rows = booksFilteredData && booksFilteredData.rows;

  return (
    <div className="container">
      <h3>
      Books
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Isbn</th>
            <th scope="col">Authors</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows && rows.map((values)=>{
            const { id,authors,isbn,description,title } = values;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{isbn}</td>
                <td>{authors}</td>
                <td>{description}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Books;
