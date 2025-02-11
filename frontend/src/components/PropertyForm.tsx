import React, { useState } from 'react';
import { addProperty, updateProperty } from '../services/api';

interface PropertyFormProps {
  property?: {
    id: string;
    type: string;
    size: string;
    location: string;
    budget: number;
    availability: boolean;
  };
  onSuccess: () => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ property, onSuccess }) => {
  const [type, setType] = useState(property?.type || '');
  const [size, setSize] = useState(property?.size || '');
  const [location, setLocation] = useState(property?.location || '');
  const [budget, setBudget] = useState(property?.budget || 0);
  const [availability, setAvailability] = useState(property?.availability || true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (property) {
        await updateProperty(property.id, { type, size, location, budget, availability });
      } else {
        await addProperty({ type, size, location, budget, availability });
      }
      onSuccess();
    } catch (error) {
      alert('Error saving property');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
        <option value="Land">Land</option>
      </select>
      <input
        type="text"
        placeholder="Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />
      <label>
        <input
          type="checkbox"
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
        />
        Available
      </label>
      <button type="submit">{property ? 'Update Property' : 'Add Property'}</button>
    </form>
  );
};

export default PropertyForm;


