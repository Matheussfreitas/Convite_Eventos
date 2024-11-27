export default class Id {
    static novo(): string {
        return `${this.hash()}-${this.hash()}-${this.hash()}`
    }

    private static hash(): string {
        return Math.random().toString(36).substring(2, 15);
    }

}
    
    for (let index = 0; index < 4; index++) {
        console.log(Id.novo());
    }   