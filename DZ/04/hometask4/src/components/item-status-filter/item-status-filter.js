import React from 'react';
import { Link } from 'react-router-dom'

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {
    const buttons = filterButtons.map(({name, label}) => {
        const isActive = name === filter;
        const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

        return (
           

            // <Link to={`/${label}`}>{label}</Link>
             <Link to={`/${name}`}>
              <button key={name}
                    type="button"
                    onClick={() => onFilterChange(name)}
                    className={classNames}>
                    {label}
            </button> 
             </Link>
            
       
            
          
        );
    });

    return (
        <div className="btn-group">
            { buttons }
        </div>
    );
};

export default ItemStatusFilter;
