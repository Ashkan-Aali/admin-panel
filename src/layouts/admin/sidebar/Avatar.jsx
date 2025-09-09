import React from 'react';

const Avatar = ({ name , imagePath }) => {
    return (
        <div className="pb-2 pt-2 d-flex flex-column avatar_li position-relative mb-2 sidebar_items">
            <span className="avatar_box mb-3">
              <img
                className="w-100 rounded-circle"
                src={imagePath}
              />
            </span>
            <div className="sidebar_avatar_name text-center hiddenable">
              {name}
            </div>
          </div>
    );
};

export default Avatar;