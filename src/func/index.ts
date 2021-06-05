import { Definition, DefinitionPack, flashPack } from "../config/types";


export function defsToFlash(defResults: DefinitionPack[]){

    const flash:flashPack[] = defResults.map((defPack:DefinitionPack)=> {

        const word = defPack.queryWord
        const meaning = defPack.results.map((res:Definition)=> res.definition).join("\n") || "No results"
        const hanjas = defPack.results.map((res:Definition)=> res.hanja || null).join(" ") || null

        const out:flashPack = {
            word:word,
            meaning: meaning
        }
        if (hanjas && /\S/.test(hanjas)){
            out.hanjas = hanjas.trimRight()
        }
        return out
    })

    return flash
    

}