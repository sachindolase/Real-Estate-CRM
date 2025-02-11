import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const createLead = async (data: { name: string; phoneNumber: string }) => {
  return axios.post(`${API_BASE_URL}/leads`, data);
};

export const getLeads = async (search: string, page: number, limit: number) => {
  return axios.get(`${API_BASE_URL}/leads`, {
    params: { search, page, limit },
  });
};

export const updateLead = async (id: string, data: { name: string; phoneNumber: string }) => {
  return axios.put(`${API_BASE_URL}/leads/${id}`, data);
};

export const addProperty = async (data: {
  type: string;
  size: string;
  location: string;
  budget: number;
  availability: boolean;
}) => {
  return axios.post(`${API_BASE_URL}/properties`, data);
};

export const getProperties = async (search: string, page: number, limit: number) => {
  return axios.get(`${API_BASE_URL}/properties`, {
    params: { search, page, limit },
  });
};

export const updateProperty = async (
  id: string,
  data: {
    type: string;
    size: string;
    location: string;
    budget: number;
    availability: boolean;
  }
) => {
  return axios.put(`${API_BASE_URL}/properties/${id}`, data);
};


