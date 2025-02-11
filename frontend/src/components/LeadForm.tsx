import React, { useState } from 'react';
import { createLead, updateLead } from '../services/api';

interface LeadFormProps {
  lead?: { id: string; name: string; phoneNumber: string };
  onSuccess: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ lead, onSuccess }) => {
  const [name, setName] = useState(lead?.name || '');
  const [phoneNumber, setPhoneNumber] = useState(lead?.phoneNumbere || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (lead) {
        await updateLead(lead.id, { name, phoneNumber });
      } else {
        await createLead({ name, phoneNumber });
      }
      onSuccess();
    } catch (error) {
      alert('Error saving lead');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit">{lead ? 'Update Lead' : 'Create Lead'}</button>
    </form>
  );
};

export default LeadForm;


