"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { heatmapData } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"

type ViewMode = "volume" | "change"

function getHeatmapColor(change: number): string {
  if (change > 2) return "bg-red-600"
  if (change > 1) return "bg-red-500"
  if (change > 0.5) return "bg-red-400"
  if (change > 0) return "bg-red-300"
  if (change > -0.5) return "bg-green-300"
  if (change > -1) return "bg-green-400"
  if (change > -2) return "bg-green-500"
  return "bg-green-600"
}

function getTextColor(change: number): string {
  if (Math.abs(change) > 1) return "text-white"
  return "text-foreground"
}

export function MarketHeatmap() {
  const [viewMode, setViewMode] = useState<ViewMode>("volume")

  const sectors = Object.entries(heatmapData)

  return (
    <div className="bg-card rounded-lg p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-foreground">
          市场热力图 (按成交额)
        </h2>
        <div className="flex items-center gap-1 bg-muted rounded-md p-0.5">
          <Button
            variant={viewMode === "volume" ? "secondary" : "ghost"}
            size="sm"
            className="h-7 px-3 text-xs"
            onClick={() => setViewMode("volume")}
          >
            成交额
          </Button>
          <Button
            variant={viewMode === "change" ? "secondary" : "ghost"}
            size="sm"
            className="h-7 px-3 text-xs"
            onClick={() => setViewMode("change")}
          >
            涨跌幅
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {sectors.map(([sectorName, commodities]) => (
          <div key={sectorName} className="flex items-stretch gap-2">
            <div className="w-20 flex-shrink-0 flex items-center justify-center text-xs text-muted-foreground border-r border-border pr-2">
              {sectorName}
            </div>
            <div className="flex-1 flex gap-1 flex-wrap">
              {commodities.map((commodity) => (
                <div
                  key={commodity.code}
                  className={cn(
                    "flex flex-col items-center justify-center px-3 py-2 rounded cursor-pointer transition-opacity hover:opacity-80",
                    getHeatmapColor(commodity.change)
                  )}
                  style={{
                    minWidth: commodity.volume > 50 ? "80px" : commodity.volume > 20 ? "65px" : "55px",
                  }}
                >
                  <span className={cn("text-sm font-medium", getTextColor(commodity.change))}>
                    {commodity.name}
                  </span>
                  <span className={cn("text-xs", getTextColor(commodity.change))}>
                    {commodity.change > 0 ? "+" : ""}
                    {commodity.change.toFixed(2)}%
                  </span>
                </div>
              ))}
              {commodities.length < 6 && (
                <button className="px-3 py-2 text-xs text-muted-foreground hover:text-foreground border border-border rounded">
                  更多
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 图例 */}
      <div className="flex items-center justify-center gap-1 mt-4 text-xs text-muted-foreground">
        <span>-3%</span>
        <div className="flex">
          <div className="w-6 h-3 bg-green-600" />
          <div className="w-6 h-3 bg-green-500" />
          <div className="w-6 h-3 bg-green-400" />
          <div className="w-6 h-3 bg-green-300" />
          <div className="w-6 h-3 bg-gray-400" />
          <div className="w-6 h-3 bg-red-300" />
          <div className="w-6 h-3 bg-red-400" />
          <div className="w-6 h-3 bg-red-500" />
          <div className="w-6 h-3 bg-red-600" />
        </div>
        <span>+3%</span>
      </div>
    </div>
  )
}
