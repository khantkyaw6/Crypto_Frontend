import assestQuery from '../../api/assets.query';
import TestTable from './testtable';

function CryptoList() {
	const { data, isLoading } = assestQuery();

	// console.log(data);

	const cryptoTableData = data?.data.map((crypto: any) => {
		return {
			rank: crypto.rank,
			name: crypto.name,
			id: crypto.id,
			price: crypto.priceUsd,
			symbol: crypto.symbol,
		};
	});

	console.log(cryptoTableData);

	return (
		<div>
			<h1 className='text-3xl font-bold underline'>
				Crypto List with React Query
			</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<TestTable cryptoData={cryptoTableData} />
			)}
		</div>
	);
}

export default CryptoList;
