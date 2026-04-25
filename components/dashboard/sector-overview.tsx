"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { sectorData } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function SectorOverview() {
  return (
    <div className="bg-card rounded-lg p-4">
      <h2 className="text-base font-semibold text-foreground mb-3">板块概览</h2>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="text-muted-foreground text-xs font-normal">板块</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">品种数</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">涨跌幅</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">成交额(亿)</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">持仓量(万)</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">主力合约</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sectorData.map((sector) => (
            <TableRow key={sector.name} className="border-border hover:bg-muted/50">
              <TableCell className="text-sm text-foreground font-medium">{sector.name}</TableCell>
              <TableCell className="text-sm text-foreground text-right">{sector.count}</TableCell>
              <TableCell
                className={cn(
                  "text-sm text-right font-medium",
                  sector.change > 0 ? "text-up" : sector.change < 0 ? "text-down" : "text-flat"
                )}
              >
                {sector.change > 0 ? "+" : ""}
                {sector.change.toFixed(2)}%
              </TableCell>
              <TableCell className="text-sm text-foreground text-right">
                {sector.volume.toLocaleString()}
              </TableCell>
              <TableCell className="text-sm text-foreground text-right">
                {sector.openInterest.toLocaleString()}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground text-right">
                {sector.mainContract}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
