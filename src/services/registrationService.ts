import axios from 'axios'
import { apiClient, type ApiSuccessResponse, type ApiErrorResponse } from '../config/api'

// Registration request payload matching API requirements
export interface RegistrationRequest {
  first_name: string
  email: string
  child_grade: string
}

// Form data structure from the registration form
export interface RegistrationFormData {
  firstName: string
  email: string
  grade: string
}

// Map form fields to API payload format
const mapFormDataToRequest = (formData: RegistrationFormData): RegistrationRequest => {
  return {
    first_name: formData.firstName,
    email: formData.email,
    child_grade: formData.grade,
  }
}

// Registration response type
export type RegistrationResponse = ApiSuccessResponse<Record<string, never>>

// Custom error class for registration errors
export class RegistrationError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public apiError?: ApiErrorResponse
  ) {
    super(message)
    this.name = 'RegistrationError'
  }
}

/**
 * Register a user via the API
 * @param formData - Form data from the registration form
 * @returns Promise with registration response
 * @throws RegistrationError for API errors (400, 409, etc.)
 */
export const registerUser = async (
  formData: RegistrationFormData
): Promise<RegistrationResponse> => {
  try {
    const requestPayload = mapFormDataToRequest(formData)
    const response = await apiClient.post<RegistrationResponse>(
      '/website-registration/register',
      requestPayload
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status
      const errorData = error.response?.data as ApiErrorResponse | undefined

      // Handle specific status codes
      if (statusCode === 409) {
        throw new RegistrationError(
          'This email is already registered',
          statusCode,
          errorData
        )
      }

      if (statusCode === 400) {
        const errorMessage =
          errorData?.message?.message || 'Validation error. Please check your input.'
        throw new RegistrationError(errorMessage, statusCode, errorData)
      }

      // Generic error handling
      const errorMessage =
        errorData?.message?.message || error.message || 'An error occurred. Please try again.'
      throw new RegistrationError(errorMessage, statusCode || 500, errorData)
    }

    // Non-axios errors
    throw new RegistrationError(
      error instanceof Error ? error.message : 'An unexpected error occurred',
      500
    )
  }
}

