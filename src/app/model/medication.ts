export class Medication {

    constructor(
        public id: string,
        public code: string,
        public lotNumber: string,
        public expirationDate: string,
        public name: string
    ) {}
}