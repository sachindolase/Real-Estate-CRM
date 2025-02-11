import React, { useEffect, useState } from 'react';
import { getProperties } from '../services/api';

interface Property {
  id: string;
  type: string;
  size: string;
  location: string;
  budget: number;
  availability: boolean;
}

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getProperties(search, page, limit);
        setProperties(response.data);
      } catch (error) {
        alert('Error fetching properties');
      }
    };
    fetchProperties();
  }, [search, page]);

  return (
    <div>
      <h2>Properties</h2>
      <input
        type="text"
        placeholder="Search by type or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.type} - {property.location} - ${property.budget}
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

export default PropertyList;


