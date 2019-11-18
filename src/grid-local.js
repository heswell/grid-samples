import React from 'react';
import ReactDOM from 'react-dom';
import {Grid } from '@heswell/ingrid';
import {LocalDataView as View} from '@heswell/data';

import '@heswell/inlay/dist/index.css';
import '@heswell/ingrid/dist/index.css';
import '@heswell/ingrid-extras/dist/index.css';
import '@heswell/ui-controls/dist/index.css';

import './style/material-design.css';
import './style/main.css';

const tableName = 'Instruments'
const dataConfig = {url: '/dataTables/instruments.js', tableName};

  
const instrumentColumns = [
  { name: 'Symbol', width: 120} ,
  { name: 'Name', width: 200} ,
  { name: 'Price', 
    type: { 
      name: 'number', 
      renderer: {name: 'background', flashStyle:'arrow-bg'},
      formatting: { decimals:2, zeroPad: true }
    },
    aggregate: 'avg'
  },
  { name: 'MarketCap', type: 'number', aggregate: 'sum' },
  { name: 'IPO'},
  { name: 'Sector'},
  { name: 'Industry'}
];

const columns = instrumentColumns;

const dataView = new View(dataConfig);

const SampleGrid = () => {

  return (
      <div className='sample-grid'>
        <Grid
          height={600}
          width={1100}
          dataView={dataView}
          onSelectCell={(rowIdx, idx) => console.log(`sample-grid onSelectCell ${rowIdx}* ${idx}`)}
          columns={columns}/>
      </div>
    )
}

const colPickerStyle = {
  width: 400,
  height: 300,
  backgroundColor: 'white'
}  

ReactDOM.render(
  <>
    <SampleGrid />
  </>,
  document.getElementById('root'));
  
