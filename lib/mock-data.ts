// 品种数据接口
export interface Commodity {
  code: string
  name: string
  sector: string
  price: number
  change: number
  volume: number
  openInterest: number
}

// 板块数据接口
export interface Sector {
  name: string
  count: number
  change: number
  volume: number
  openInterest: number
  mainContract: string
}

// 交易所数据接口
export interface Exchange {
  code: string
  name: string
  volume: number
  share: number
  volumeChange: number
  openInterest: number
  oiChange: number
}

// 指数数据接口
export interface IndexData {
  date: string
  wenhua: number
  black: number
  nonFerrous: number
  energy: number
  agricultural: number
}

// 热力图品种数据
export const heatmapData: Record<string, Commodity[]> = {
  能源化工: [
    { code: "原油2502", name: "原油", sector: "能源化工", price: 598.6, change: 2.35, volume: 32.56, openInterest: 4.12 },
    { code: "PTA2505", name: "PTA", sector: "能源化工", price: 5682, change: 1.68, volume: 28.45, openInterest: 3.85 },
    { code: "甲醇2505", name: "甲醇", sector: "能源化工", price: 2456, change: -0.45, volume: 18.32, openInterest: 2.56 },
    { code: "纯碱2505", name: "纯碱", sector: "能源化工", price: 1532, change: -1.21, volume: 48.65, openInterest: 5.32 },
    { code: "燃料油2505", name: "燃料油", sector: "能源化工", price: 3245, change: -0.78, volume: 8.56, openInterest: 1.23 },
    { code: "PVC2505", name: "PVC", sector: "能源化工", price: 5123, change: -0.78, volume: 6.45, openInterest: 0.98 },
    { code: "PP2505", name: "PP", sector: "能源化工", price: 7456, change: -0.44, volume: 12.34, openInterest: 1.87 },
  ],
  黑色金属: [
    { code: "螺纹钢2505", name: "螺纹钢", sector: "黑色金属", price: 3456, change: 1.02, volume: 156.32, openInterest: 18.56 },
    { code: "铁矿石2505", name: "铁矿石", sector: "黑色金属", price: 856.5, change: 0.72, volume: 89.45, openInterest: 12.34 },
    { code: "热轧卷板2505", name: "热轧卷板", sector: "黑色金属", price: 3678, change: 0.65, volume: 45.67, openInterest: 6.78 },
    { code: "硅铁2505", name: "硅铁", sector: "黑色金属", price: 7234, change: -0.81, volume: 23.45, openInterest: 3.45 },
    { code: "锰硅2505", name: "锰硅", sector: "黑色金属", price: 6789, change: -1.32, volume: 18.76, openInterest: 2.89 },
  ],
  有色金属: [
    { code: "铜2503", name: "铜", sector: "有色金属", price: 74620, change: 1.15, volume: 19.32, openInterest: 10.21 },
    { code: "铝2505", name: "铝", sector: "有色金属", price: 19856, change: 0.62, volume: 25.67, openInterest: 8.45 },
    { code: "锌2505", name: "锌", sector: "有色金属", price: 24567, change: -0.28, volume: 15.34, openInterest: 5.67 },
    { code: "镍2505", name: "镍", sector: "有色金属", price: 125800, change: -0.73, volume: 8.92, openInterest: 2.34 },
    { code: "工业硅2503", name: "工业硅", sector: "有色金属", price: 11250, change: -1.18, volume: 11.24, openInterest: 7.65 },
  ],
  农产品: [
    { code: "豆粕2505", name: "豆粕", sector: "农产品", price: 2892, change: 1.25, volume: 156.32, openInterest: 214.56 },
    { code: "玉米2505", name: "玉米", sector: "农产品", price: 2345, change: 0.38, volume: 45.67, openInterest: 89.34 },
    { code: "豆油2505", name: "豆油", sector: "农产品", price: 7856, change: -0.41, volume: 32.45, openInterest: 45.67 },
    { code: "白糖2505", name: "白糖", sector: "农产品", price: 6234, change: -0.56, volume: 28.76, openInterest: 38.92 },
    { code: "棉花2505", name: "棉花", sector: "农产品", price: 14567, change: -0.23, volume: 18.34, openInterest: 24.56 },
  ],
  贵金属: [
    { code: "黄金2502", name: "黄金", sector: "贵金属", price: 628.88, change: 0.95, volume: 15.68, openInterest: 8.76 },
    { code: "白银2502", name: "白银", sector: "贵金属", price: 7856, change: 1.38, volume: 28.91, openInterest: 6.35 },
  ],
  金融期货: [
    { code: "沪深300指数2503", name: "沪深300", sector: "金融期货", price: 3856, change: 0.42, volume: 125.67, openInterest: 45.67 },
    { code: "中证500指数2503", name: "中证500", sector: "金融期货", price: 5234, change: 0.31, volume: 89.34, openInterest: 32.45 },
    { code: "上证50指数2503", name: "上证50", sector: "金融期货", price: 2678, change: 0.28, volume: 56.78, openInterest: 23.56 },
    { code: "10年国债2503", name: "10年国债", sector: "金融期货", price: 103.56, change: -0.02, volume: 34.56, openInterest: 18.92 },
    { code: "5年国债2503", name: "5年国债", sector: "金融期货", price: 102.34, change: -0.03, volume: 23.45, openInterest: 12.34 },
  ],
}

// 板块概览数据
export const sectorData: Sector[] = [
  { name: "能源化工", count: 23, change: 0.38, volume: 1128.45, openInterest: 856.21, mainContract: "原油2502" },
  { name: "黑色金属", count: 9, change: 0.65, volume: 641.32, openInterest: 412.67, mainContract: "螺纹钢2505" },
  { name: "有色金属", count: 21, change: 0.22, volume: 721.56, openInterest: 278.94, mainContract: "沪铜2503" },
  { name: "农产品", count: 20, change: 0.15, volume: 512.78, openInterest: 462.31, mainContract: "豆粕2505" },
  { name: "贵金属", count: 4, change: 1.08, volume: 146.23, openInterest: 52.18, mainContract: "沪金2502" },
  { name: "金融期货", count: 7, change: 0.26, volume: 65.28, openInterest: 423.45, mainContract: "沪深3002501" },
]

// 交易所数据
export const exchangeData: Exchange[] = [
  { code: "SHFE", name: "上期所", volume: 1245.32, share: 38.74, volumeChange: 6.21, openInterest: 892.14, oiChange: 2.48 },
  { code: "DCE", name: "大商所", volume: 892.65, share: 27.76, volumeChange: 4.35, openInterest: 614.23, oiChange: 1.92 },
  { code: "CZCE", name: "郑商所", volume: 721.34, share: 22.45, volumeChange: 5.17, openInterest: 732.56, oiChange: 2.31 },
  { code: "GFEX", name: "广期所", volume: 156.78, share: 4.88, volumeChange: 3.02, openInterest: 42.31, oiChange: 1.18 },
  { code: "CFFEX", name: "中金所", volume: 199.51, share: 6.20, volumeChange: 4.28, openInterest: 206.56, oiChange: 1.67 },
]

// 涨幅榜数据
export const gainersData: Commodity[] = [
  { code: "原油2502", name: "原油", sector: "能源化工", price: 598.6, change: 2.35, volume: 32.56, openInterest: 4.12 },
  { code: "白银2502", name: "白银", sector: "贵金属", price: 7856, change: 1.38, volume: 28.91, openInterest: 6.35 },
  { code: "豆粕2505", name: "豆粕", sector: "农产品", price: 2892, change: 1.25, volume: 156.32, openInterest: 214.56 },
  { code: "铜2503", name: "铜", sector: "有色金属", price: 74620, change: 1.15, volume: 19.32, openInterest: 10.21 },
  { code: "黄金2502", name: "黄金", sector: "贵金属", price: 628.88, change: 0.95, volume: 15.68, openInterest: 8.76 },
]

// 跌幅榜数据
export const losersData: Commodity[] = [
  { code: "锰硅2505", name: "锰硅", sector: "黑色金属", price: 6512, change: -1.32, volume: 21.34, openInterest: 15.23 },
  { code: "纯碱2505", name: "纯碱", sector: "能源化工", price: 1532, change: -1.21, volume: 48.65, openInterest: 36.78 },
  { code: "工业硅2503", name: "工业硅", sector: "有色金属", price: 11250, change: -1.18, volume: 11.24, openInterest: 7.65 },
  { code: "尿素2505", name: "尿素", sector: "农产品", price: 1752, change: -1.15, volume: 23.12, openInterest: 18.34 },
  { code: "硅铁2505", name: "硅铁", sector: "黑色金属", price: 6138, change: -0.81, volume: 18.76, openInterest: 12.43 },
]

// 生成指数走势数据
export function generateIndexData(): IndexData[] {
  const data: IndexData[] = []
  const startDate = new Date("2024-01-01")
  const endDate = new Date("2024-12-31")
  
  let wenhua = 100
  let black = 110
  let nonFerrous = 120
  let energy = 130
  let agricultural = 115
  
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 7)) {
    // 模拟随机波动
    wenhua += (Math.random() - 0.48) * 5
    black += (Math.random() - 0.45) * 6
    nonFerrous += (Math.random() - 0.5) * 4
    energy += (Math.random() - 0.52) * 7
    agricultural += (Math.random() - 0.5) * 3
    
    data.push({
      date: d.toISOString().split("T")[0],
      wenhua: Math.round(wenhua * 100) / 100,
      black: Math.round(black * 100) / 100,
      nonFerrous: Math.round(nonFerrous * 100) / 100,
      energy: Math.round(energy * 100) / 100,
      agricultural: Math.round(agricultural * 100) / 100,
    })
  }
  
  return data
}

// 顶部统计数据
export const headerStats = {
  totalVarieties: 140,
  commodityFutures: 110,
  financialFutures: 30,
  todayVolume: 3215.6,
  volumeChange: 5.23,
  todayOpenInterest: 2487.8,
  oiChange: 2.17,
  up: 68,
  down: 62,
  flat: 10,
  updateTime: "2024-12-31 15:00:00",
}

// 侧边栏菜单数据
export const menuItems = [
  { id: "overview", name: "市场总览", icon: "Home" },
  { id: "quotes", name: "品种行情", icon: "LineChart" },
  { id: "sectors", name: "期货板块", icon: "LayoutGrid" },
  { id: "analysis", name: "数据分析", icon: "BarChart3" },
  { id: "positions", name: "持仓龙虎榜", icon: "Trophy" },
  { id: "basis", name: "基差跟踪", icon: "GitCompare" },
  { id: "volatility", name: "波动率监控", icon: "Activity" },
  { id: "arbitrage", name: "套利价差", icon: "ArrowLeftRight" },
  { id: "calendar", name: "资讯日历", icon: "Calendar" },
]

// 交易所列表
export const exchanges = [
  { code: "SHFE", name: "上期所" },
  { code: "DCE", name: "大商所" },
  { code: "CZCE", name: "郑商所" },
  { code: "GFEX", name: "广期所" },
  { code: "CFFEX", name: "中金所" },
]

// 成交额占比数据（用于饼图）
export const volumeShareData = [
  { name: "能源化工", value: 35.1, fill: "#3b82f6" },
  { name: "有色金属", value: 22.4, fill: "#22c55e" },
  { name: "黑色金属", value: 19.9, fill: "#eab308" },
  { name: "农产品", value: 15.9, fill: "#f97316" },
  { name: "贵金属", value: 4.6, fill: "#ec4899" },
  { name: "金融期货", value: 2.0, fill: "#8b5cf6" },
]
