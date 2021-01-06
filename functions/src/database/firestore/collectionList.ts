const CollectionList = {
	events:"events",
	approvers:"approvers",
	facilities:"facilities",
	timecards:"timecards",
	users:"users",
	workflows:"workflows"
	
} as const;
type CollectionList= typeof CollectionList[keyof typeof CollectionList];

export default CollectionList;