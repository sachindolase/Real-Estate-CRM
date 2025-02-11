/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import LeadForm from '../components/LeadForm';
import LeadList from '../components/LeadList';
import { useState } from 'react';

const LeadsPage: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Leads Management</h1>
      <LeadForm onSuccess={handleSuccess} />
      <LeadList key={refresh} />
    </div>
  );
};

export default LeadsPage;

function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}

