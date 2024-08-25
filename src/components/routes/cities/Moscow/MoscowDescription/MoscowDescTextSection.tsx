import { TFunction } from 'i18next';

type MoscowDescTextSectionProps = {
  t: TFunction;
};

interface highlightType {
  id: string;
  text: string;
  className?: string;
}

function MoscowDescTextSection({ t }: MoscowDescTextSectionProps) {
  const MoscowDescriptionSection = Object.values(
    t('MoscowTranslation.moscowDescriptionSection', { returnObjects: true })
  );

  console.log('Moscowdsadasdasdastranslation', MoscowDescriptionSection);

  return (
    <>
      {MoscowDescriptionSection.map((section) => (
        <p key={section.id}>
          <span className="float-start lh-1 fw-bold fs-1 me-1">
            {section.prefix}
          </span>
          {section.text}
          {section.highlights.map((highlight: highlightType) => (
            <span key={highlight.id} className={highlight.className}>
              {highlight.text},
            </span>
          ))}
          {section.suffix}
          {section.moreHighlights &&
            section.moreHighlights.map((highlight: highlightType) => (
              <span key={highlight.id} className={highlight.className}>
                {highlight.text}
                {highlight.text.endsWith('ина') ? '.' : ','}
              </span>
            ))}
        </p>
      ))}
    </>
  );
}

export default MoscowDescTextSection;
