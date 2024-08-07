// import React, { useState } from 'react';

// const styles = {
//   sideBar: {
//     padding: '20px',
//     borderRadius: '10px',
//   },
//   heading: {
//     marginBottom: '10px',
//     color: '#333',
//   },
//   ratingFilter: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   ratingLabel: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '10px',
//     cursor: 'pointer',
//   },
//   ratingInput: {
//     marginRight: '10px',
//   },
//   stars: {
//     color: 'black',
//     fontSize: '1.2em',
//   },
//   sortSelect: {
//     width: '100%',
//     padding: '8px',
//     marginTop: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     appearance: 'none',
//     backgroundColor: '#fff',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'right 10px center',
//   },
// };

// const SideBar = ({ onFilterChange, onSortChange }) => {
//   const [localFilter, setLocalFilter] = useState([]);
//   const [localSortOrder, setLocalSortOrder] = useState('asc');

//   const handleFilterChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     const updatedFilters = e.target.checked
//       ? [...localFilter, value]
//       : localFilter.filter((rating) => rating !== value);

//     setLocalFilter(updatedFilters);
//     onFilterChange(updatedFilters);
//   };

//   const handleSortChange = (e) => {
//     const sortOrder = e.target.value;
//     setLocalSortOrder(sortOrder);
//     onSortChange(sortOrder);
//   };

//   return (
//     <div style={styles.sideBar}>
//       <h3 style={styles.heading}>Filter by Rating</h3>
//       <div style={styles.ratingFilter}>
//         {[1, 2, 3, 4, 5].map((rating) => (
//           <label key={rating} style={styles.ratingLabel}>
//             <input
//               type="checkbox"
//               value={rating}
//               checked={localFilter.includes(rating)}
//               onChange={handleFilterChange}
//               style={styles.ratingInput}
//             />
//             <span style={styles.stars}>
//               {'★'.repeat(rating)}
//               {'☆'.repeat(5 - rating)}
//             </span>
//           </label>
//         ))}
//       </div>
//       <h3 style={styles.heading}>Sort by Year</h3>
//       <select value={localSortOrder} onChange={handleSortChange} style={styles.sortSelect}>
//         <option value="asc">Ascending</option>
//         <option value="desc">Descending</option>
//       </select>
//     </div>
//   );
// };

// export default SideBar;

import React from 'react';

const styles = {
  sideBar: {
    padding: '20px',
    borderRadius: '10px',
  },
  heading: {
    marginBottom: '10px',
    color: '#333',
  },
  ratingFilter: {
    display: 'flex',
    flexDirection: 'column',
  },
  ratingLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  ratingInput: {
    marginRight: '10px',
  },
  stars: {
    color: 'black',
    fontSize: '1.2em',
  },
  sortSelect: {
    width: '100%',
    padding: '8px',
    marginTop: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    appearance: 'none',
    backgroundColor: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
  },
};

const SideBar = ({ onFilterChange, onSortChange }) => {
  const [localFilter, setLocalFilter] = React.useState([]);

  const handleFilterChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const updatedFilters = e.target.checked
      ? [...localFilter, value]
      : localFilter.filter((rating) => rating !== value);

    setLocalFilter(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div style={styles.sideBar}>
      <h3 style={styles.heading}>Filter by Rating</h3>
      <div style={styles.ratingFilter}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} style={styles.ratingLabel}>
            <input
              type="checkbox"
              value={rating}
              checked={localFilter.includes(rating)}
              onChange={handleFilterChange}
              style={styles.ratingInput}
            />
            <span style={styles.stars}>
              {'★'.repeat(rating)}
              {'☆'.repeat(5 - rating)}
            </span>
          </label>
        ))}
      </div>
      <h3 style={styles.heading}>Sort by Year</h3>
      <select onChange={handleSortChange} style={styles.sortSelect}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SideBar;
