
import React from 'react';

function UsersList(props) {
  return (
    <div>
      {Object.keys(props).map(item =>
        Object.keys(props[item]).map(data =>
        (<p key={data}>{props[item][data].name}</p>)))
    }
    </div>
  );
}

export default UsersList;
