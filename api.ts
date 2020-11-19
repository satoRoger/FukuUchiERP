//ユーザが打刻する
//request
type requestUserPunch = {
	request: {
		id: 'string';
		loginUser: { id: string };
		action: 'PunchTimecard';
		parameter: {
			punchId: string;
			type?: 'inwork' | 'outwork' | 'inbreak' | 'outbreak';
			date: string;
			coodinate: { longitude: number; latitude: number };
		};
	};
};

//response
type responseUserPunch = {
	request: {
		id: 'string';
		loginUser: { id: string };
		action: 'PunchTimecard';
		parameter: {
			timecardId: string;
			punchId: string;
			type?: 'inwork' | 'outwork' | 'inbreak' | 'outbreak';
			date: string;
			coodinate: { longitude: number; latitude: number };
		};
	};
	responce: {
		id: string;
		state: {
			value: 'success' | 'notice' | 'warning' | 'error';
			detail: string;
		};
	};
};

//タイムカード情報を取得
//request
type requestGetUserTimecard = {
	request: {
		id: 'string';
		loginUser: { id: string };
		action: 'GetTimecard';
		parameter: {
			timecardId: string;
			targetId: string;
			type?: 'inwork' | 'outwork' | 'inbreak' | 'outbreak' | 'any';
			dateStart?: string;
			dateEnd?: string;
		};
	};
};

//response
type responseGetUserTimecard = {
	request: {
		id: 'string';
		loginUser: { id: string };
		action: 'GetTimecard';
		parameter: {
			targetId: string;
			type?: 'inwork' | 'outwork' | 'inbreak' | 'outbreak' | 'any';
			dateStart?: string;
			dateEnd?: string;
		};
	};
	responce: {
		id: string;
		state: {
			value: 'success' | 'notice' | 'warning' | 'error';
			detail: string;
		};
		data: {
			timecardId: string;
			punchId: string;
			type?: 'inwork' | 'outwork' | 'inbreak' | 'outbreak';
			date: string;
			coodinate: { longitude: number; latitude: number };
		}[];
	};
};
