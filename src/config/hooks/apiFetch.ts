import { useState, useEffect } from 'react';
import { apiInstance, httpService } from '.';

const apiFetch = () => {
	const [response, setResponse] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	return [response, loading, error];
};

export default apiFetch;
