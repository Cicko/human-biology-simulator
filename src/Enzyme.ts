/**
 * For more info about Enzymes:
 * - https://chem.libretexts.org/Courses/Brevard_College/CHE_301_Biochemistry/05%3A_Enzymes
 */
import { Molecule } from "./Molecule";

export enum EnzymeClass {
    OXIDOREDUCTASES = 'OXIDOREDUCTASES',
    TRANSFERASES = 'TRANSFERASES',
    HYDROLASES = 'HYDROLASES',
    LYASES = 'LYASES',
    ISOMERASES = 'ISOMERASES',
    LIGASES = 'LIGASES'
}

export interface EnzymeAttrs {
    name: string;
    /**
     * Substrates are the compounds on which an enzyme act.
     */
    substrates: Molecule[];
    reactionRate: number;
    /**
     * Some Enzymes might need a cofactor for proper functioning.
     * This cofactor is usually weakly bonded to the polypeptide chains through intermolecular interactions.
     */
    cofactor?: Molecule;
    class: EnzymeClass;
}

/**
 * Enzymes are biological catalysts, and nearly all of them are proteins.
 */
export class Enzyme {
    public attrs: EnzymeAttrs;
    constructor(attrs: EnzymeAttrs) {
        this.attrs = attrs;
    }

    public catalyze() {

    }
}