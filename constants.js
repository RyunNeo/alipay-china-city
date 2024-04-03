export const ORDER_STATUS = [
	{ label: '取消待审核', value: 130 },
	{ label: '待取件', value: 20 },
	{ label: '待派单', value: 15 },
	// { label: '待评估', value: 10 },
	{ label: '运输中', value: 30 },
	{ label: '待质检', value: 40 },
	{ label: '质检中', value: 50 },
	{ label: '待定价', value: 60 },
	{ label: '待确认', value: 70 },
	{ label: '待打款', value: 80 },
	{ label: '待上门', value: 25 },
	{ label: '上门中', value: 35 },
	{ label: '待寄回', value: 100 },
	{ label: '寄回中', value: 110 },
	{ label: '已完成', value: 90 },
	{ label: '已取消', value: 140 },
	{ label: '已关闭', value: 120 },
];

export const ORDER_TYPE = [
	{ label: '邮寄回收', value: 1 },
	{ label: '上门回收', value: 2 },
];

// 寄回状态
export const RETURN_STATUS = [
	{ label: '寄回中', value: 110 },
	{ label: '待寄回', value: 100 },
	{ label: '已关闭(未寄回)', value: 121 },
	{ label: '已关闭(寄回签收)', value: 122 },
];

// 是否需要寄回
export const NEED_POST = [
	{ label: '需要', value: 1 },
	{ label: '不需要', value: 2 },
];
// 下单方式
export const POST_TYPE = [
	{ label: '系统下单', value: 1 },
	{ label: '手动下单', value: 2 },
];
// 付款方式
export const PAY_TYPE = [
	{ label: '到付', value: 1 },
	{ label: '寄付', value: 2 },
];

export const DETECT_STATUS = [
	{ label: '待质检', value: 10 },
	{ label: '质检中', value: 20 },
	{ label: '质检完成', value: 30 },
];

// 定价状态
export const PRICE_STATUS = [
	{ label: '待定价', value: 60 },
	{ label: '定价完成', value: 62 },
];

// 快递选项
export const EXPRESS_OPTIONS = [
	{ label: '顺丰', value: 'sf' },
	{ label: '京东', value: 'jd' },
	{ label: '圆通', value: 'yt' },
	{ label: '申通', value: 'st' },
	{ label: '中通', value: 'zt' },
	{ label: '德邦', value: 'db' },
	{ label: '极兔', value: 'jt' },
	{ label: '韵达', value: 'yd' },
];

// 广告投放类型
export const AD_TYPE_OPTIONS = [
	{ label: '弹窗', value: 1 },
	{ label: 'banner', value: 2 },
	{ label: 'icon', value: 3 },
];

// 广告投放应用、发放平台、订单来源
export const APP_OPTIONS = [
	{ label: '支付宝小程序', value: 1 },
	{ label: '微信小程序', value: 2 },
];

// 广告投放位置
export const AD_POSITION_OPTIONS = new Array(8)
	.fill()
	.map((_, i) => ({ label: i + 1, value: i + 1 }));

// 广告状态
export const AD_STATUS = [
	{ label: '上架', value: 1 },
	{ label: '下架', value: 2 },
];

export const AD_JUMP_OPTIONS = [
	{ label: '外部小程序', value: 1 },
	{ label: '内部小程序', value: 2 },
];

// 加价券类型
export const COUNPON_TYPE = [
	{ label: '通用券', value: 1 },
	{ label: '品类券', value: 2 },
	{ label: '机型券', value: 3 },
];

// 加价方式：比例、金额
export const COUNPON_WAY = [
	{ label: '比例', value: 1 },
	{ label: '金额', value: 2 },
];

// 领取方式：用户领取、注册发放、估价发放
export const COUNPON_RECEIVE_WAY = [
	{ label: '用户领取', value: 1 },
	{ label: '注册发放', value: 2 },
	{ label: '估价发放', value: 3 },
];

// 加价券状态
export const COUNPON_STATUS = [
	{ label: '启用', value: 1 },
	{ label: '失效', value: 2 },
];

// 用户管理-用户状态
export const USER_STATUS = [
	{ label: '启用', value: 1 },
	{ label: '注销', value: 2 },
	{ label: '黑名单', value: 3 },
];

// 质检订单-质检成色
// 全新 充新  靓机 小花 大花 外爆 内爆
export const PRODUCT_NEWS = [
	{ label: '全新', value: 1 },
	{ label: '充新', value: 2 },
	{ label: '靓机', value: 3 },
	{ label: '小花', value: 4 },
	{ label: '大花', value: 5 },
	{ label: '外爆', value: 6 },
	{ label: '内爆', value: 7 },
];
