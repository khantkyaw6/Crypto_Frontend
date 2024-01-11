import { useQuery } from '@tanstack/react-query';
import { assestGetServices } from './services/assets';
import { assetsKeys } from './queryKeys';

const assestQuery = () => {
	return useQuery({
		queryKey: assetsKeys.assets,
		queryFn: () => assestGetServices(),
	});
};

export default assestQuery;
