import axios from 'axios'

// Base URL from environment variable with fallback
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://dashboard.arious.ai'

// Create axios instance with base URL configuration
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Type definitions for API responses
export interface ApiSuccessResponse<T = unknown> {
  code: number
  message: {
    status: string
    message: string
  }
  payload: T
}

export interface ApiErrorResponse {
  code: number
  message: {
    status: string
    message: string
  }
}

