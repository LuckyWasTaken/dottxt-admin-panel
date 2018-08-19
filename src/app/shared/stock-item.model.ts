export class StockItem {
    constructor(public name: string,
        public image: string,
        public description: string,
        public availability: [{size: string,
            quantity: number}]) {}
}

