export default class Cat {
  private alive : boolean;

  private mood : number;

  private energy : number;

  private hunger : number;

  public constructor() {
    this.alive = true;
    this.mood = 10;
    this.energy = 10;
    this.hunger = 0;

    this.meow();
  }

  /**
   * Meow says the cat.
   * Not accessible directly, but is used as a response by certain actions.
   * TODO: Add some sound effects
   */
   private meow() : void {
    if (!this.alive) {
      throw new Error('Dead catagotchi cannot meow. Something is wrong.');
    }
    console.log('meow!');
  }

  /**
   * Poor catagotchi died.
   */
  private catDied() {
    this.alive = false;
  }

  /**
   * Feed the Catagotchi. Will improve mood and reduce hunger.
   */
  public feed() {
    this.hunger -= 2;
    this.mood += 1;
    this.meow();
  }

  /**
   * Play with the Catagotchi. It does make Catagotchi sleepy, though.
   */
  public play() {
    this.mood += 1;
    this.energy -= 2;
    this.hunger += 1;
  }

  /**
   * Ask Catagotchi to sleeeeep. Improved mood and energy, but makes it hungry too.
   */
  public sleep() {
    this.energy += 2;
    this.hunger += 1;
    this.mood += 1;
  }
}
