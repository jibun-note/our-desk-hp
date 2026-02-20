/** 役員紹介セクション用の一覧データ（名前・役職・役職英表記） */
export const executives: { name: string; role: string; roleEn: string }[] = [
	{ name: "小宮山 陽大", role: "代表取締役", roleEn: "CEO" },
	{ name: "横山 悠亮", role: "取締役", roleEn: "DIRECTOR" },
	{ name: "石山 拓也", role: "取締役", roleEn: "DIRECTOR" },
	{ name: "大坪 誉弘", role: "取締役", roleEn: "DIRECTOR" },
];

/** アクセスセクション用：住所付近の地図画像を表示（画像は public/images/company/ に配置） */
export const ACCESS_LOCATIONS = [
	{
		title: "青山（本社）",
		titleClassName: "text-blue-400",
		address: "東京都港区南青山1-15-27 YMビル1階",
		imageSrc: "/images/company/map-aoyama.png",
		imageAlt: "青山本社付近の地図",
	},
	{
		title: "ISAI AKASAKA（オフィス）",
		titleClassName: "text-primary-400",
		address: "東京都港区赤坂5-2-33 ISAI AKASAKA 1612",
		imageSrc: "/images/company/map-isai.png",
		imageAlt: "ISAI AKASAKAオフィス付近の地図",
	},
] as const;
