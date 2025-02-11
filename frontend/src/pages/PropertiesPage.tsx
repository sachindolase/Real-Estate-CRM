/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import PropertyForm from '../components/PropertyForm';
import PropertyList from '../components/PropertyList';
import { useState } from 'react';

const PropertiesPage: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Properties Management</h1>
      <PropertyForm onSuccess={handleSuccess} />
      <PropertyList key={refresh} />
    </div>
  );
};

export default PropertiesPage;

function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}

