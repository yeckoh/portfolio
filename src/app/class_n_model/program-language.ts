export class ProgramLanguage {

    langs: [{
        name: string,
        strength: number,
        preference: number
    }
    ];

    constructor() {
        this.langs = [{name:'C++', strength: 1, preference: 1}];
        this.langs.push({name:'C#', strength: 3, preference: 0});
        this.langs.push({name:'Java', strength: 0, preference: 2});
        this.langs.push({name:'TypeScript', strength: 2, preference: 3});
        this.langs.push({name:'Regex', strength: 4, preference: 4});
        this.sortByName();
    }

    sortByName() {
        // descending
        return this.langs.sort((a, b) => a.name < b.name ? -1 : 1);
    }

    sortByStrength() {
        return this.langs.sort((a, b) => a.strength - b.strength);
    }

    sortByPreference() {
        return this.langs.sort((a, b) => a.preference - b.preference);
    }

}
