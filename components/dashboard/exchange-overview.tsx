"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { exchangeData } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function ExchangeOverview() {
  return (
    <div className="bg-card rounded-lg p-4">
      <h2 className="text-base font-semibold text-foreground mb-3">交易所成交概览</h2>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="text-muted-foreground text-xs font-normal">交易所</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">成交额(亿)</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">占比</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">较昨日</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">持仓量(万)</TableHead>
            <TableHead className="text-muted-foreground text-xs font-normal text-right">较昨日</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exchangeData.map((exchange) => (
            <TableRow key={exchange.code} className="border-border hover:bg-muted/50">
              <TableCell className="text-sm">
                <span className="text-foreground font-medium">{exchange.name}</span>
                <span className="text-muted-foreground ml-2 text-xs">{exchange.code}</span>
              </TableCell>
              <TableCell className="text-sm text-foreground text-right font-medium">
                {exchange.volume.toLocaleString()}
              </TableCell>
              <TableCell className="text-sm text-foreground text-right">
                {exchange.share.toFixed(2)}%
              </TableCell>
              <TableCell
                className={cn(
                  "text-sm text-right",
                  exchange.volumeChange > 0 ? "text-up" : exchange.volumeChange < 0 ? "text-down" : "text-flat"
                )}
              >
                {exchange.volumeChange > 0 ? "+" : ""}
                {exchange.volumeChange.toFixed(2)}%
              </TableCell>
              <TableCell className="text-sm text-foreground text-right">
                {exchange.openInterest.toLocaleString()}
              </TableCell>
              <TableCell
                className={cn(
                  "text-sm text-right",
                  exchange.oiChange > 0 ? "text-up" : exchange.oiChange < 0 ? "text-down" : "text-flat"
                )}
              >
                {exchange.oiChange > 0 ? "+" : ""}
                {exchange.oiChange.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
