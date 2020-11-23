/*
*APIリファレンス*
*/

/*
ユーザのタイムカードリスト
GET /users/:userId/timecards
*/
type parameter1 = {
	since:string,//ISO 8601 format
	until:string//ISO 8601 format
}

/*
全ユーザのタイムカードを取得
マネージャのみ
GET /timecards
*/
type parameter2 = {
	since:string,//ISO 8601 format
	until:string//ISO 8601 format
}

/*
全ユーザの{出勤,退勤,休憩入り,休憩終わり}タイムカードのみを取得
マネージャのみ
GET /timecards/{workin,workout,breakin,breakout}
*/

type parameter3 = {
	since:string,//ISO 8601 format
	until:string//ISO 8601 format
}

/*
特定のタイムカードを取得
GET /timecards/:timecard_id
*/


/*
今日付けの全員のタイムカードを取得
マネージャのみ
GET /timecards/today
*/

/*
昨日付けの全員のタイムカードを取得
マネージャのみ
GET /timecards/yesterday
*/



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


//
