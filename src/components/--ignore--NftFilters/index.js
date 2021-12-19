import React from 'react'
import LazyLoad from "react-lazyload";

const selection = '';
 function handleChange(event) {
    const selection = { name:event.target.name,
                       value:event.target.value};
  }

function NftFilters({data}) {
  
    return (
        <>
            {data.map((data) => (
             <div className="col-3" key={data.section}>
                <small className="text-white-50 ps-3">{ data.section }:</small><br />
                 <select className="form-select text-capitalize" id={data.section} name={data.section} onChange={handleChange}>
                     <option>Select</option>
                     {data.info.map((filters) => (
                        <option value={filters.id} key={filters.id}>{filters.name}</option>
                     ))}
                 </select>
             </div>
            ))}
        </>
    )
}
export default {NftFilters, selection}
