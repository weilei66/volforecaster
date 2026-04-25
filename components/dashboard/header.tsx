"use client"

import { RefreshCw, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { headerStats } from "@/lib/mock-data"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-card">
      {/* 左侧品牌 */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">Q</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">中国期货市场全景</h1>
          <p className="text-xs text-muted-foreground">商品期货 & 金融期货</p>
        </div>
      </div>

      {/* 中间统计数据 */}
      <div className="flex items-center gap-8">
        {/* 品种数量 */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{headerStats.totalVarieties}+</div>
            <div className="text-xs text-muted-foreground">全品种</div>
            <div className="text-xs text-muted-foreground">-(含期权)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{headerStats.commodityFutures}+</div>
            <div className="text-xs text-muted-foreground">商品期货</div>
            <div className="text-xs text-muted-foreground">品种数量</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{headerStats.financialFutures}+</div>
            <div className="text-xs text-muted-foreground">金融期货</div>
            <div className="text-xs text-muted-foreground">品种数量</div>
          </div>
        </div>

        {/* 成交额 */}
        <div className="text-center border-l border-border pl-6">
          <div className="text-xs text-muted-foreground mb-1">今日成交额</div>
          <div className="text-2xl font-bold text-primary">{headerStats.todayVolume.toLocaleString()}亿</div>
          <div className="text-xs text-up">较昨日 +{headerStats.volumeChange}%</div>
        </div>

        {/* 持仓量 */}
        <div className="text-center border-l border-border pl-6">
          <div className="text-xs text-muted-foreground mb-1">今日持仓量</div>
          <div className="text-2xl font-bold text-foreground">{headerStats.todayOpenInterest.toLocaleString()}万</div>
          <div className="text-xs text-up">较昨日 +{headerStats.oiChange}%</div>
        </div>

        {/* 涨跌分布 */}
        <div className="border-l border-border pl-6">
          <div className="text-xs text-muted-foreground mb-2">涨跌分布</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-up" />
              <span className="text-xs text-muted-foreground">上涨</span>
              <span className="text-lg font-bold text-up">{headerStats.up}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingDown className="w-4 h-4 text-down" />
              <span className="text-xs text-muted-foreground">下跌</span>
              <span className="text-lg font-bold text-down">{headerStats.down}</span>
            </div>
            <div className="flex items-center gap-1">
              <Minus className="w-4 h-4 text-flat" />
              <span className="text-xs text-muted-foreground">持平</span>
              <span className="text-lg font-bold text-flat">{headerStats.flat}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧时间和刷新 */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm text-foreground">{headerStats.updateTime}</div>
          <div className="text-xs text-muted-foreground">数据更新于收盘</div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </header>
  )
}
