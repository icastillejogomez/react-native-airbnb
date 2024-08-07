export class PlaceCoordinates {
  private readonly lat: number
  private readonly lng: number

  constructor(lat: number, lng: number) {
    this.lat = lat
    this.lng = lng
  }

  public getLat(): number {
    return this.lat
  }

  public getLng(): number {
    return this.lng
  }

  public getValue(): [number, number] {
    return [this.lat, this.lng]
  }
}
