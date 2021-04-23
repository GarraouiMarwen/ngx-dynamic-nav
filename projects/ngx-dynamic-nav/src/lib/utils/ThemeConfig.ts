export class ThemeConfig {
    public darkTheme: Theme = {
        backgroundColor: '#22324e',
        borderBottom : '1px solid #9A0245',
        itemHeight: '60px',
        itemTextColor: '#fff'
    };
    public lightTheme: Theme = {
        backgroundColor: '#dfdfdf',
        borderBottom : '1px solid #0f212d',
        itemHeight: '60px',
        itemTextColor: '#0f212d'
    };
}

export class Theme {
    public backgroundColor?: string;
    public borderBottom ?: string;
    public itemHeight?: string;
    public itemTextColor: string;
}
