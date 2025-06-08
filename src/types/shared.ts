export type IncomeType = 'Daily' | 'Weekly' | 'Monthly' | 'Yearly'

export type IncomeSource = { 
    key: number;
    //type: IncomeType
    amount: number;
    label: string;
    color: string;
}