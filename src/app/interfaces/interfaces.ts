export interface DashboardView {
  position: number,
  applications: Application[],
  maxIcons: number
}

export interface Application {
  name: string,
  pid?: number,
  icon?: string
}

