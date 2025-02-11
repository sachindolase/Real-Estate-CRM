import React, { useEffect, useState } from 'react';
import { getLeads } from '../services/api';

interface Lead {
  id: string;
  name: string;
  phoneNumber: string;
}

const LeadList: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await getLeads(search, page, limit);
        setLeads(response.data);
      } catch (error) {
        alert('Error fetching leads');
      }
    };
    fetchLeads();
  }, [search, page]);

  return (
    <div>
      <h2>Leads</h2>
      <input
        type="text"
        placeholder="Search by name or phone number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            {lead.name} - {lead.phoneNumber}
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default LeadList;

