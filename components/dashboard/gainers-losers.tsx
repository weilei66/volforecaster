"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { gainersData, losersData } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface RankTableProps {
  title: string
  data: typeof gainersData
  type: "gainer" | "loser"
}

function RankTable({ title, data, type }: RankTableProps) {
  return (
    <div className="bg-card rounded-lg p-4 flex-1">
      <h2 className="text-base font-semibold text-foreground mb-3">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="text-muted-foreground text-xs font-normal w-10">排名</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal">合约</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">最新价</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">涨跌幅</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">成交量</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">持仓量</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.code} className="border-border hover:bg-muted/50">
              <TableCell>
                <span
                  className={cn(
                    "inline-flex items-center justify-center w-5 h-5 rounded text-xs font-medium",
                    index < 3
                      ? type === "gainer"
                        ? "bg-up/20 text-up"
                        : "bg-down/20 text-down"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {index + 1}
                </span>
              </TableCell>
              <TableCell className="text-sm text-foreground">{item.code}</TableCell>
              <TableCell
                className={cn(
                  "text-sm text-right font-medium",
                  type === "gainer" ? "text-up" : "text-down"
                )}
              >
                {item.price.toLocaleString()}
              </TableCell>
              <TableCell
                className={cn(
                  "text-sm text-right font-medium",
                  type === "gainer" ? "text-up" : "text-down"
                )}
              >
                {item.change > 0 ? "+" : ""}
                {item.change.toFixed(2)}%
              </TableCell>
              <TableCell className="text-sm text-foreground text-right">
                {item.volume.toFixed(2)}万
              </TableCell>
              <TableCell className="text-sm text-foreground text-right">
                {item.openInterest.toFixed(2)}万
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function GainersLosers() {
  return (
    <div className="flex gap-4">
      <RankTable title="涨幅榜" data={gainersData} type="gainer" />
      <RankTable title="跌幅榜" data={losersData} type="loser" />
    </div>
  )
}
