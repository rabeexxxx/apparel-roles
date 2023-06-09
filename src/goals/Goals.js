import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { files_list } from '../data.js';

export default function Promotions() {
  const [input, setInput] = useState('');

  return (
    <div className="promotions-cont">
      <div className="form-div">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
      </div>
      <div className="promotions-list">
        {files_list
          .sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .filter((el) => el.name.toLowerCase().indexOf(input) > -1)
          .map((file) => {
            return (
              <a className="link-a" href={file.href} key={file.name}>
                {file.name}
              </a>
            );
          })}
      </div>
    </div>
  );
}
