import { faker } from '@faker-js/faker';

export class ExternalBalanceMother {
  static generateQueryString(date?: Date): {
    startDate: string;
    endDate: string;
  } {
    const startDate = date ? date : faker.date.past({ years: 4 });
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1);

    return {
      startDate: startDate.toISOString().slice(0, 16),
      endDate: endDate.toISOString().slice(0, 16),
    };
  }
}
