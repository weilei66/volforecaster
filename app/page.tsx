import { Header } from "../components/dashboard/header"
import { AppSidebar } from "../components/dashboard/app-sidebar"
import { MarketHeatmap } from "../components/dashboard/market-heatmap"
import { FuturesIndexChart } from "../components/dashboard/futures-index-chart"
import { SectorOverview } from "../components/dashboard/sector-overview"
import { VolumePieChart } from "../components/dashboard/volume-pie-chart"
import { GainersLosers } from "../components/dashboard/gainers-losers"
import { ExchangeOverview } from "../components/dashboard/exchange-overview"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 顶部Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* 左侧导航 */}
        <AppSidebar />

        {/* 主内容区 */}
        <main className="flex-1 overflow-auto p-4">
          <div className="grid grid-cols-12 gap-4">
            {/* 第一行：热力图 + 指数走势 */}
            <div className="col-span-7">
              <MarketHeatmap />
            </div>
            <div className="col-span-5 h-[380px]">
              <FuturesIndexChart />
            </div>

            {/* 第二行：板块概览 + 成交额占比 */}
            <div className="col-span-7">
              <SectorOverview />
            </div>
            <div className="col-span-5 h-[260px]">
              <VolumePieChart />
            </div>

            {/* 第三行：涨跌榜 + 交易所概览 */}
            <div className="col-span-8">
              <GainersLosers />
            </div>
            <div className="col-span-4">
              <ExchangeOverview />
            </div>
          </div>

          {/* 底部数据来源 */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div>
              <span>+数据来源：各交易所官网</span>
              <span className="ml-4">中国期货业协会</span>
            </div>
            <div>
              <span>数据来源：各交易所官网</span>
              <span className="mx-2">|</span>
              <span>数据更新：2024-12-31 15:00:00</span>
              <span className="mx-2">|</span>
              <span>投资有风险</span>
              <span className="mx-2">|</span>
              <span>入市需谨慎</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
