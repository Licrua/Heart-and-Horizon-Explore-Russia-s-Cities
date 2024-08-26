import { TFunction } from 'i18next';

type NovosibirskDescTextSectionProps = {
  t: TFunction;
};

interface highlightType {
  id: string;
  text: string;
  className?: string;
}

function NovosibirskDescTextSection({ t }: NovosibirskDescTextSectionProps) {
  const NovosibirskDescriptionSection = Object.values(
    t('NovosibirskTranslation.NovosibirskDescriptionSection', {
      returnObjects: true,
    })
  );

  console.log('NovosibirskDescriptionSection', NovosibirskDescTextSection);

  return (
    <>
      {NovosibirskDescriptionSection.map((section) => (
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

export default NovosibirskDescTextSection;