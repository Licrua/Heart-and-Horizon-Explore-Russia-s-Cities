import { TFunction } from 'i18next';

type NizhnyNovgorodDescTextSectionProps = {
  t: TFunction;
};

interface highlightType {
  id: string;
  text: string;
  className?: string;
}

function NizhnyNovgorodDescTextSection({
  t,
}: NizhnyNovgorodDescTextSectionProps) {
  const NizhnyNovgorodDescriptionSection = Object.values(
    t('NizhnyNovgorodTranslation.NizhnyNovgorodDescriptionSection', {
      returnObjects: true,
    })
  );
  console.log(
    'NizhnyNovgorodDescriptionSection',
    NizhnyNovgorodDescriptionSection
  );

  return (
    <>
      {NizhnyNovgorodDescriptionSection.map((section) => (
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

export default NizhnyNovgorodDescTextSection;
