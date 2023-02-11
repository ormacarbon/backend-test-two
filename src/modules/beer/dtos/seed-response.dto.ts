export class SeedResponseDto {
  success: boolean;

  count: number;

  constructor(count: number) {
    this.success = true;
    this.count = count;
  }
}
