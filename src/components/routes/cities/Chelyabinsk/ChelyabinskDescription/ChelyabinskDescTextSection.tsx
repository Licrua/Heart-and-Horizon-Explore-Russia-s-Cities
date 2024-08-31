import { TFunction } from 'i18next';

type ChelyabinskDescTextSectionProps = {
  t: TFunction;
};

interface highlightType {
  id: string;
  text: string;
  className?: string;
}

function ChelyabinskDescTextSection({ t }: ChelyabinskDescTextSectionProps) {
  const ChelyabinskDescriptionSection = Object.values(
    t('ChelyabinskTranslation.ChelyabinskDescriptionSection', {
      returnObjects: true,
    })
  );
  console.log(
    'ChelyabinskDescriptionSectionвфырвфырвшф',
    ChelyabinskDescriptionSection
  );

  return (
    <>
      {ChelyabinskDescriptionSection.map((section) => {
        return (
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
        );
      })}
    </>
  );
}

export default ChelyabinskDescTextSection;
