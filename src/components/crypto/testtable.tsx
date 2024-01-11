import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
	rank: number;
	id: number;
	key: string;
	name: string;
	price: number;
	symbol: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Rank',
		dataIndex: 'rank',
		key: 'rank',
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
	},
	{
		title: 'Symbol',
		dataIndex: 'symbol',
		key: 'symbol',
	},

	{
		title: 'Detail',
		key: 'detail',
		render: (_, record) => (
			<Space size='middle'>
				<a>{record.name}'s Detail</a>
			</Space>
		),
	},
];

interface TestTableProps {
	cryptoData: DataType[];
}

function testtable({ cryptoData }: TestTableProps) {
	return <Table columns={columns} dataSource={cryptoData} />;
}

export default testtable;
