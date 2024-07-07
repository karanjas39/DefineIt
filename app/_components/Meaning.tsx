export default function Meaning({
  meaning,
}: {
  meaning: {
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
    }>;
  };
}) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center mb-3">
        <p className="mr-2 font-bold">{meaning.partOfSpeech}</p>
        <div className="flex-grow border-b dark:border-neutral-200 border-neutral-900"></div>
      </div>
      <ul className="flex flex-col gap-2 font-normal text-[16px] list-disc">
        {meaning.definitions.map((def, i) => (
          <li key={i}>
            <p>{def.definition}</p>
            <p className="text-[13px]">
              {def.example ? `Example: ${def.example}` : null}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
