export class GiftRegistry {
  giftsMap: Map<number, string[]> = new Map();

  addGift(childId: number, gift: string): void {
    const gifts = this.giftsMap.get(childId) || [];
    const newGifts = [...gifts, gift];
    this.giftsMap.set(childId, newGifts);
  }

  getGiftsForChild(childId: number): string[] {
    return this.giftsMap.get(childId) || [];
  }

  removeGift(childId: number, gift: string): void {
    const gifts = this.giftsMap.get(childId) || [];
    if (!gifts.includes(gift)) {
      throw new Error("Gift not found");
    }
    this.giftsMap.set(
      childId,
      gifts.filter((g) => g !== gift)
    );
  }
}
