"use client"

import {
  Home,
  LineChart,
  LayoutGrid,
  BarChart3,
  Trophy,
  GitCompare,
  Activity,
  ArrowLeftRight,
  Calendar,
  ChevronDown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { menuItems, exchanges } from "@/lib/mock-data"
import { useState } from "react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  LineChart,
  LayoutGrid,
  BarChart3,
  Trophy,
  GitCompare,
  Activity,
  ArrowLeftRight,
  Calendar,
}

export function AppSidebar() {
  const [activeMenu, setActiveMenu] = useState("overview")
  const [activeExchange, setActiveExchange] = useState("SHFE")

  return (
    <aside className="w-44 bg-sidebar border-r border-sidebar-border flex flex-col h-full">
      {/* 菜单项 */}
      <nav className="flex-1 py-2">
        {menuItems.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                activeMenu === item.id
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{item.name}</span>
            </button>
          )
        })}
      </nav>

      {/* 交易所 */}
      <div className="border-t border-sidebar-border py-3 px-4">
        <div className="text-xs text-sidebar-foreground/50 mb-2">交易所</div>
        {exchanges.map((exchange) => (
          <button
            key={exchange.code}
            onClick={() => setActiveExchange(exchange.code)}
            className={cn(
              "w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded transition-colors",
              activeExchange === exchange.code
                ? "text-sidebar-primary"
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
            )}
          >
            <span
              className={cn(
                "w-2 h-2 rounded-full",
                activeExchange === exchange.code ? "bg-sidebar-primary" : "bg-sidebar-foreground/30"
              )}
            />
            <span>{exchange.name}</span>
            <span className="text-xs text-sidebar-foreground/50 ml-auto">{exchange.code}</span>
          </button>
        ))}
      </div>

      {/* 快速筛选 */}
      <div className="border-t border-sidebar-border py-3 px-4">
        <div className="text-xs text-sidebar-foreground/50 mb-2">快速筛选</div>
        <button className="w-full flex items-center justify-between px-2 py-1.5 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground rounded border border-sidebar-border">
          <span>全部板块</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="w-full flex items-center justify-between px-2 py-1.5 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground rounded border border-sidebar-border mt-2">
          <span>全部品种</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="mt-2">
          <input
            type="text"
            placeholder="搜索品种代码/名称"
            className="w-full px-2 py-1.5 text-sm bg-sidebar-accent/50 border border-sidebar-border rounded text-sidebar-foreground placeholder:text-sidebar-foreground/40"
          />
        </div>
      </div>
    </aside>
  )
}
