export type DatePickerProps = {
	types: {
		showYear: boolean;
		showMonth: boolean;
		showDay: boolean;
	};
	startDate: {
		year: string;
		month: string;
		day: string;
	};
	endDate: {
		year: string;
		month: string;
		day: string;
	};
	value: {
		year: string;
		month: string;
		day: string;
	};
};

export type DatePickerEmitParam = {
	year: string;
	month: string;
	day?: string;
};

export type handleConfirm = (value: DatePickerEmitParam) => void;
