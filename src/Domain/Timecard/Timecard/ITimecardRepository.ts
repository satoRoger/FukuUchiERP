class ITimecardRepository{
	public save(timecard:Timecard);
	public findAll(employee:Employee);
	public findWithDuration(employee:Employee,from:Date,to:Date)
}