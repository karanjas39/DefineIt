export async function getMeaning(word: string) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  let data = await res.json();
  if (data.title === "No Definitions Found") {
    return null;
  }

  data = data[0];

  let phonetics;

  if (data.phonetics) {
    phonetics = data.phonetics.find(
      (ph: { audio: string; text: string }) => ph.audio && ph.text
    );
  }

  let meanings;

  if (data.meanings) {
    meanings = data.meanings.map(
      (meaning: {
        partOfSpeech: string;
        definitions: Array<{ definition: string; example: string }>;
      }) => {
        return {
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions.map(
            (def: { definition: string; example: string }) => {
              return {
                definition: def.definition,
                example: def?.example ? def.example : "",
              };
            }
          ),
        };
      }
    );
  }

  const result = {
    word: data.word,
    phonetics,
    meanings,
    sourceUrls: data?.sourceUrls ? data.sourceUrls : "",
  };

  return result;
}
