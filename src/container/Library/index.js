import React,{ useState } from 'react';
import Search from '../../components/Search';
import Books from '../../components/Books';
import Magazines from '../../components/Magazines';

const Library = () => {
  const [libraryData,setLibraryData] =  useState([]);
  console.log('libraryData',libraryData)
  return (
    <div className='container-fluid'>
      <Search />
      <Books libraryData={libraryData} setLibraryData={setLibraryData}/>
      <Magazines libraryData={libraryData} setLibraryData={setLibraryData}/>
    </div>
  )
}

export default Library;
