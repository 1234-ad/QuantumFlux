// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
}

// Dashboard types
export interface Dashboard {
  id: string;
  name: string;
  description?: string;
  layout: DashboardLayout;
  isPublic: boolean;
  userId: string;
  widgets: Widget[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardLayout {
  columns: number;
  rows: number;
  gap: number;
}

// Widget types
export interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  config: WidgetConfig;
  position: WidgetPosition;
  dashboardId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum WidgetType {
  LINE_CHART = 'line_chart',
  BAR_CHART = 'bar_chart',
  PIE_CHART = 'pie_chart',
  AREA_CHART = 'area_chart',
  SCATTER_CHART = 'scatter_chart',
  TABLE = 'table',
  METRIC = 'metric',
  MAP = 'map',
  HEATMAP = 'heatmap',
  GAUGE = 'gauge',
}

export interface WidgetConfig {
  dataSource?: string;
  refreshInterval?: number;
  colors?: string[];
  showLegend?: boolean;
  showGrid?: boolean;
  [key: string]: any;
}

export interface WidgetPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Stream types
export interface Stream {
  id: string;
  name: string;
  description?: string;
  source: StreamSource;
  config: StreamConfig;
  isActive: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum StreamSource {
  WEBSOCKET = 'websocket',
  REST_API = 'rest_api',
  DATABASE = 'database',
  FILE = 'file',
  MQTT = 'mqtt',
}

export interface StreamConfig {
  url?: string;
  method?: string;
  headers?: Record<string, string>;
  interval?: number;
  query?: string;
  [key: string]: any;
}

export interface DataPoint {
  id: string;
  streamId: string;
  data: any;
  timestamp: Date;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// WebSocket event types
export enum WebSocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  STREAM_SUBSCRIBE = 'stream:subscribe',
  STREAM_UNSUBSCRIBE = 'stream:unsubscribe',
  STREAM_DATA = 'stream:data',
  STREAM_ERROR = 'stream:error',
  DASHBOARD_UPDATE = 'dashboard:update',
}

export interface WebSocketMessage<T = any> {
  event: WebSocketEvent;
  data: T;
  timestamp: number;
}

// Analytics types
export interface AnalyticsData {
  metric: string;
  value: number;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface TimeSeriesData {
  timestamp: Date;
  value: number;
  label?: string;
}

// Export all types
export * from './types/auth';
export * from './types/errors';