export type ServiceStatus = "OK" | "FAIL" | "UNKNOWN"
export interface ServiceAddTime {
  nano: number
  epochSecond: number
}

export interface Status {
  addTime: ServiceAddTime
  name: string
  status: ServiceStatus
  url: string
}
