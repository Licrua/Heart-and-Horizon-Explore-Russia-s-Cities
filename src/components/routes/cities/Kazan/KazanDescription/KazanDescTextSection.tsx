import { TFunction } from 'i18next';

type KazanDescTextSectionProps = {
  t: TFunction;
};

interface highlightType {
  id: string;
  text: string;
  className?: string;
}

function KazanDescTextSection({ t }: KazanDescTextSectionProps) {
  const KazanDescriptionSection = Object.values(
    t('KazanTranslation.KazanDescriptionSection', {
      returnObjects: true,
    })
  );

  return (
    <>
      {KazanDescriptionSection.map((section) => (
        <p key={section.id}>
          <span className="float-start lh-1 fw-bold fs-1 me-1">
            {section.prefix}
          </span>
          {section.text}
          {section.highlights.map((highlight: highlightType) => (
            <span key={highlight.id} className={highlight.className}>
              {highlight.text}
            </span>
          ))}
          {section.suffix}
          {section.moreHighlights &&
            section.moreHighlights.map((highlight: highlightType) => (
              <span key={highlight.id} className={highlight.className}>
                {highlight.text}
              </span>
            ))}
        </p>
      ))}
    </>
  );
}

export default KazanDescTextSection;
