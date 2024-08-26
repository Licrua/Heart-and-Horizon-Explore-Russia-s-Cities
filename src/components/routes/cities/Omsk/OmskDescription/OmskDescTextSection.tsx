import { TFunction } from 'i18next';

type OmskDescTextSectionProps = {
  t: TFunction;
};

interface highlightType {
  id: string;
  text: string;
  className?: string;
}

function OmskDescTextSection({ t }: OmskDescTextSectionProps) {
  const OmskDescriptionSection = Object.values(
    t('OmskTranslation.OmskDescriptionSection', {
      returnObjects: true,
    })
  );
  console.log('OmskDescriptionSectionвфырвфырвшф', OmskDescriptionSection);

  return (
    <>
      {OmskDescriptionSection.map((section) => {
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

export default OmskDescTextSection;