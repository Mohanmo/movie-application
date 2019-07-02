import React from 'react';

import '../styles/pagination.css';

function MySpinner() {
    return (        
    <ul className="pagination">
      <li><a href="#0">&lt;</a></li>
      <li><a className="active" href="#0">1</a></li>
      <li><a href="#0">2</a></li>
      <li><a href="#0">3</a></li>
      <li><a href="#0">4</a></li>
      <li><a href="#0">&gt;</a></li>
    </ul>
    );
}

export default MySpinner;
