import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useGetEnergyBalanceByDateRange } from '../../../../src/sections/Balance/hooks/useQueryBalance'

const mockData = {
  getEnergyBalanceByDateRange: {
    total: 1000,
    consumption: 700,
    production: 300,
  },
}
vi.mock('@apollo/client', async () => {
  const actual = await import('@apollo/client') as object

  return {
    ...actual,
    useQuery: vi.fn().mockReturnValue({
      data: {
        getEnergyBalanceByDateRange: {
          total: 1000,
          consumption: 700,
          production: 300,
        },
      },
      loading: false,
      error: undefined,
      refetch: vi.fn(),
    }),
  }
})

describe('useGetEnergyBalanceByDateRange', () => {

  it('should return energy balance data', () => {
    const { result } = renderHook(() =>
      useGetEnergyBalanceByDateRange({
        startDate: '2025-01-01',
        endDate: '2025-01-31',
      })
    )

    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeUndefined()
    expect(result.current.data).toEqual(mockData.getEnergyBalanceByDateRange)
  })
})
