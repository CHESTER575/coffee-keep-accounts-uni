export type Bill = {
	id: number;
	date: number;
	pay: number;
	income: number;
	items: Array<BillItem>;
};

export type BillItem = {
	id: number;
	icon: string;
	categoryTxt: string;
	note: string;
	pay: number;
	income: number;
};
