import { TFunction } from 'i18next';

type EkbDescTextSectionProps = {
  t: TFunction;
};

interface highlightType {
  id: string;
  text: string;
  className?: string;
}

function EkbDescTextSection({ t }: EkbDescTextSectionProps) {
  const EkbDescriptionSection = Object.values(
    t('EkbTranslation.EkbDescriptionSection', {
      returnObjects: true,
    })
  );
  console.log('EkbDescriptionSectionвфырвфырвшф', EkbDescriptionSection);

  return (
    <>
      {EkbDescriptionSection.map((section) => {
        console.log('section', section); // Выводит объект section в консоль
        return (
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
        );
      })}
    </>
  );
}

export default EkbDescTextSection;
