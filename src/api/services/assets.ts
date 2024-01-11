import { httpService } from '../../config/hooks';

export const assestGetServices = async () => {
	const { data } = await httpService.get('/v2/assets');
	return data;
};

export const assestGetSingleService = async (param: string) => {
	const { data } = await httpService.get('/v2/assets', {
		params: param,
	});
	return data;
};
