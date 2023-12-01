export type WeekKeys =
	| 'Monday'
	| 'Tuesday'
	| 'Wednesday'
	| 'Thursday'
	| 'Friday'
	| 'Saturday'
	| 'Sunday';

export const weeks: Record<WeekKeys, string> = {
	Monday: '星期一',
	Tuesday: '星期二',
	Wednesday: '星期三',
	Thursday: '星期四',
	Friday: '星期五',
	Saturday: '星期六',
	Sunday: '星期天',
};
