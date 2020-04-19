import React from 'react';

const Checkbox: React.FC = () => {
  return (
    <div className="checkbox">
      <label className="checkbox-label">
        <input type="checkbox" name="checkBtn" className="form-checkbox" />
        <span className="checkbox-style"></span>
      </label>
    </div>
  );
};

export default Checkbox;
