"use client"

import { useState, useMemo } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { Button } from "@/components/ui/button"
import { generateIndexData } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

type TimeRange = "1m" | "3m" | "1y" | "all"
type ChartType = "minute" | "day" | "week" | "month"

const indexColors = {
  wenhua: "#1e3a5f",
  black: "#dc2626",
  nonFerrous: "#22c55e",
  energy: "#f97316",
  agricultural: "#a855f7",
}

const indexNames = {
  wenhua: "文华商品指数",
  black: "黑色指数",
  nonFerrous: "有色指数",
  energy: "能化指数",
  agricultural: "农产品指数",
}

export function FuturesIndexChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("1y")
  const [chartType, setChartType] = useState<ChartType>("day")
  const [visibleLines, setVisibleLines] = useState<Record<string, boolean>>({
    wenhua: true,
    black: true,
    nonFerrous: true,
    energy: true,
    agricultural: true,
  })

  const data = useMemo(() => generateIndexData(), [])

  const filteredData = useMemo(() => {
    const now = new Date("2024-12-31")
    let startDate: Date

    switch (timeRange) {
      case "1m":
        startDate = new Date(now)
        startDate.setMonth(startDate.getMonth() - 1)
        break
      case "3m":
        startDate = new Date(now)
        startDate.setMonth(startDate.getMonth() - 3)
        break
      case "1y":
        startDate = new Date(now)
        startDate.setFullYear(startDate.getFullYear() - 1)
        break
      default:
        return data
    }

    return data.filter((d) => new Date(d.date) >= startDate)
  }, [data, timeRange])

  const toggleLine = (key: string) => {
    setVisibleLines((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="bg-card rounded-lg p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-foreground">主要期货指数走势</h2>
        <div className="flex items-center gap-4">
          {/* 图表类型 */}
          <div className="flex items-center gap-1 text-xs">
            {(["minute", "day", "week", "month"] as ChartType[]).map((type) => (
              <Button
                key={type}
                variant={chartType === type ? "secondary" : "ghost"}
                size="sm"
                className="h-6 px-2 text-xs"
                onClick={() => setChartType(type)}
              >
                {type === "minute" ? "分时" : type === "day" ? "日线" : type === "week" ? "周线" : "月线"}
              </Button>
            ))}
          </div>
          {/* 时间范围 */}
          <div className="flex items-center gap-1 text-xs">
            {(["1m", "3m", "1y", "all"] as TimeRange[]).map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "secondary" : "ghost"}
                size="sm"
                className="h-6 px-2 text-xs"
                onClick={() => setTimeRange(range)}
              >
                {range === "1m" ? "近1月" : range === "3m" ? "近3月" : range === "1y" ? "近1年" : "全部"}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* 图例 */}
      <div className="flex items-center gap-4 mb-3 flex-wrap">
        {Object.entries(indexNames).map(([key, name]) => (
          <button
            key={key}
            onClick={() => toggleLine(key)}
            className={cn(
              "flex items-center gap-1.5 text-xs transition-opacity",
              visibleLines[key] ? "opacity-100" : "opacity-40"
            )}
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: indexColors[key as keyof typeof indexColors] }}
            />
            <span className="text-muted-foreground">{name}</span>
          </button>
        ))}
      </div>

      {/* 图表 */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => {
                const date = new Date(value)
                return `${date.getMonth() + 1}/${date.getDate()}`
              }}
              stroke="hsl(var(--border))"
            />
            <YAxis
              tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              stroke="hsl(var(--border))"
              domain={["auto", "auto"]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            {visibleLines.wenhua && (
              <Line
                type="monotone"
                dataKey="wenhua"
                name="文华商品"
                stroke={indexColors.wenhua}
                dot={false}
                strokeWidth={2}
              />
            )}
            {visibleLines.black && (
              <Line
                type="monotone"
                dataKey="black"
                name="黑色指数"
                stroke={indexColors.black}
                dot={false}
                strokeWidth={2}
              />
            )}
            {visibleLines.nonFerrous && (
              <Line
                type="monotone"
                dataKey="nonFerrous"
                name="有色指数"
                stroke={indexColors.nonFerrous}
                dot={false}
                strokeWidth={2}
              />
            )}
            {visibleLines.energy && (
              <Line
                type="monotone"
                dataKey="energy"
                name="能化指数"
                stroke={indexColors.energy}
                dot={false}
                strokeWidth={2}
              />
            )}
            {visibleLines.agricultural && (
              <Line
                type="monotone"
                dataKey="agricultural"
                name="农产品"
                stroke={indexColors.agricultural}
                dot={false}
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
